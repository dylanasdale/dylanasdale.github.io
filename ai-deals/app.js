(() => {
  'use strict';

  const PAGE_SIZE = 30;

  // Public mode: the same dashboard published at https://asdaledynamics.com/ai-deals/.
  // It reads a static snapshot (state.json next to the page) instead of the local API,
  // keeps Saved/hidden flags in this browser's localStorage, and has no scan or settings controls.
  const PUBLIC = document.documentElement.dataset.mode === 'public';
  const POLL_MS = PUBLIC ? 15 * 60_000 : 30_000;
  const LOCAL_FLAGS = 'ai-deal-radar:flags';

  const VIEW_META = {
    fresh: { label: 'Fresh deals', emptyTitle: 'The radar is quiet', emptyCopy: 'No screened deals yet. Run a sweep to check the public sources.' },
    startup: { label: 'Startup & LLC', emptyTitle: 'No programs in view', emptyCopy: 'The startup directory has not reported any matching programs yet.' },
    saved: { label: 'Saved', emptyTitle: 'Nothing saved yet', emptyCopy: 'Use the bookmark on any card and it will wait for you here.' },
  };

  const SOURCE_ORDER = ['google-news', 'hacker-news', 'reddit', 'product-hunt', 'appsumo', 'startup-directory'];

  const ui = {
    state: null,
    view: 'fresh',
    category: 'all',
    offerType: 'all',
    sort: 'signal',
    search: '',
    page: 1,
    drawerOpen: false,
    automation: null,
    pollTimer: null,
    searchTimer: null,
    drawerTimer: null,
    lastPollError: '',
    notificationResult: '',
    notificationTone: '',
  };

  const el = {};
  let focusBeforeDrawer = null;

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    cacheElements();
    bindEvents();
    renderCategoryFilters([]);
    renderOfferOptions();
    loadState();
    schedulePoll(POLL_MS);
    window.setInterval(tick, 1000);
  }

  function cacheElements() {
    const ids = [
      'navFreshCount',
      'navStartupCount',
      'navSavedCount',
      'sidebarStatusText',
      'sidebarStatus',
      'sidebarVersion',
      'currentViewLabel',
      'nextScanLabel',
      'topScanButton',
      'heroEyebrow',
      'heroDealCount',
      'heroProgramCount',
      'heroSourceCount',
      'heroSavedCount',
      'heroLastScan',
      'heroNextScan',
      'heroScanButton',
      'radarStatePill',
      'panelFootnote',
      'scanProgressTrack',
      'scanProgressBar',
      'startupNote',
      'searchInput',
      'clearSearch',
      'categoryFilters',
      'offerTypeFilter',
      'sortSelect',
      'clearFilters',
      'resultSummary',
      'feed',
      'feedLoading',
      'sourceGrid',
      'sourceSettingsButton',
      'footerFine',
      'openSettings',
      'settingsDrawer',
      'settingsTitle',
      'drawerScrim',
      'closeSettings',
      'desktopNotificationsToggle',
      'seededHint',
      'webhookForm',
      'webhookUrl',
      'webhookHelp',
      'saveWebhookButton',
      'clearWebhookButton',
      'testNotificationButton',
      'notificationResult',
      'automationCard',
      'automationDot',
      'automationLabel',
      'automationDetail',
      'automationHelpButton',
      'automationHelp',
      'settingsSourceList',
      'sourceSummary',
      'runList',
      'restoreHiddenButton',
      'drawerVersion',
      'toastRegion',
    ];
    for (const id of ids) el[id] = document.getElementById(id);
    el.navItems = [...document.querySelectorAll('.nav-item[data-view]')];
  }

  function bindEvents() {
    for (const button of el.navItems) {
      button.addEventListener('click', () => setView(button.dataset.view));
    }

    el.topScanButton.addEventListener('click', triggerScan);
    el.heroScanButton.addEventListener('click', triggerScan);
    el.openSettings.addEventListener('click', openDrawer);
    el.sourceSettingsButton.addEventListener('click', openDrawer);
    el.closeSettings.addEventListener('click', closeDrawer);
    el.drawerScrim.addEventListener('click', closeDrawer);

    el.searchInput.addEventListener('input', () => {
      window.clearTimeout(ui.searchTimer);
      ui.searchTimer = window.setTimeout(() => {
        ui.search = el.searchInput.value.trim();
        ui.page = 1;
        el.clearSearch.hidden = !ui.search;
        renderResults();
      }, 110);
    });

    el.clearSearch.addEventListener('click', () => {
      el.searchInput.value = '';
      ui.search = '';
      el.clearSearch.hidden = true;
      ui.page = 1;
      renderResults();
      el.searchInput.focus();
    });

    el.categoryFilters.addEventListener('click', (event) => {
      const button = event.target.closest('button[data-category]');
      if (!button) return;
      ui.category = button.dataset.category;
      ui.page = 1;
      syncFilterControls();
      renderResults();
    });

    el.offerTypeFilter.addEventListener('change', () => {
      ui.offerType = el.offerTypeFilter.value;
      ui.page = 1;
      renderResults();
    });

    el.sortSelect.addEventListener('change', () => {
      ui.sort = el.sortSelect.value;
      ui.page = 1;
      renderResults();
    });

    el.clearFilters.addEventListener('click', clearFilters);

    el.desktopNotificationsToggle.addEventListener('change', async () => {
      const desired = el.desktopNotificationsToggle.checked;
      el.desktopNotificationsToggle.disabled = true;
      try {
        const data = await postJson('/api/settings', { desktopNotifications: desired });
        if (ui.state) ui.state.settings = data.settings;
        showToast(desired ? 'Desktop alerts are on.' : 'Desktop alerts are off.');
      } catch (error) {
        el.desktopNotificationsToggle.checked = !desired;
        showToast(error.message, { error: true });
      } finally {
        el.desktopNotificationsToggle.disabled = false;
      }
    });

    el.webhookForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const webhookUrl = el.webhookUrl.value.trim();
      if (!webhookUrl) {
        setNotificationResult('Enter a webhook URL, or use Remove to clear one.', 'bad');
        return;
      }
      el.saveWebhookButton.disabled = true;
      try {
        const data = await postJson('/api/settings', { webhookUrl });
        if (ui.state) ui.state.settings = data.settings;
        el.webhookUrl.value = '';
        applyWebhookCopy();
        setNotificationResult('Webhook saved. A test alert is a good next step.', 'good');
        showToast('Webhook saved.');
      } catch (error) {
        setNotificationResult(error.message, 'bad');
        showToast(error.message, { error: true });
      } finally {
        el.saveWebhookButton.disabled = false;
      }
    });

    el.clearWebhookButton.addEventListener('click', async () => {
      el.clearWebhookButton.disabled = true;
      try {
        const data = await postJson('/api/settings', { clearWebhook: true });
        if (ui.state) ui.state.settings = data.settings;
        el.webhookUrl.value = '';
        applyWebhookCopy();
        setNotificationResult('Webhook removed.', 'good');
        showToast('Webhook removed.');
      } catch (error) {
        setNotificationResult(error.message, 'bad');
        showToast(error.message, { error: true });
      } finally {
        el.clearWebhookButton.disabled = false;
      }
    });

    el.testNotificationButton.addEventListener('click', async () => {
      el.testNotificationButton.disabled = true;
      setNotificationResult('Sending a test…', '');
      try {
        const data = await postJson('/api/test-notification', {});
        const result = data.result || {};
        const parts = [];
        if (result.desktop?.ok) parts.push('desktop alert sent');
        else if (result.desktop?.skipped) parts.push('desktop alerts are off');
        else if (result.desktop?.error) parts.push(`desktop: ${result.desktop.error}`);
        if (result.webhook?.attempted) {
          parts.push(
            result.webhook.ok
              ? `webhook delivered to ${result.webhook.host || 'the endpoint'}`
              : `webhook: ${result.webhook.error || 'failed'}`,
          );
        } else if (ui.state?.settings?.webhookConfigured) {
          parts.push('webhook was not attempted');
        }
        const good = Boolean(result.desktop?.ok || result.webhook?.ok);
        setNotificationResult(
          parts.length ? `${parts.join(' · ')}.` : 'Nothing was sent. Enable desktop alerts or add a webhook.',
          good ? 'good' : 'bad',
        );
      } catch (error) {
        setNotificationResult(error.message, 'bad');
      } finally {
        el.testNotificationButton.disabled = false;
      }
    });

    el.restoreHiddenButton.addEventListener('click', async () => {
      el.restoreHiddenButton.disabled = true;
      try {
        const data = await postJson('/api/restore-hidden', {});
        await loadState({ quiet: true });
        showToast(
          data.restored
            ? `${data.restored} hidden find${data.restored === 1 ? '' : 's'} restored.`
            : 'There are no hidden finds to restore.',
        );
      } catch (error) {
        showToast(error.message, { error: true });
      } finally {
        el.restoreHiddenButton.disabled = false;
      }
    });

    el.automationHelpButton.addEventListener('click', () => {
      el.automationHelp.hidden = !el.automationHelp.hidden;
    });

    document.addEventListener('keydown', (event) => {
      const tag = document.activeElement?.tagName?.toLowerCase();
      const typing = ['input', 'textarea', 'select'].includes(tag);

      if (event.key === 'Escape') {
        if (ui.drawerOpen) {
          closeDrawer();
          return;
        }
        if (document.activeElement === el.searchInput && ui.search) {
          el.searchInput.value = '';
          ui.search = '';
          el.clearSearch.hidden = true;
          renderResults();
        }
        return;
      }

      if (event.key === '/' && !typing && !ui.drawerOpen) {
        event.preventDefault();
        el.searchInput.focus();
      }
    });

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) loadState({ quiet: true });
    });
  }

  function setView(view) {
    if (!VIEW_META[view] || ui.view === view) return;
    ui.view = view;
    ui.page = 1;
    ui.offerType = 'all';
    for (const button of el.navItems) {
      const active = button.dataset.view === view;
      button.classList.toggle('is-active', active);
      if (active) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    }
    el.currentViewLabel.textContent = VIEW_META[view].label;
    el.startupNote.hidden = view !== 'startup';
    renderOfferOptions();
    renderResults();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderCategoryFilters(categories) {
    const list = [{ id: 'all', shortLabel: 'All' }, ...categories];
    el.categoryFilters.replaceChildren(
      ...list.map((category) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'chip';
        button.dataset.category = category.id;
        button.textContent = category.shortLabel || category.label || category.id;
        button.setAttribute('aria-pressed', String(ui.category === category.id));
        button.classList.toggle('is-active', ui.category === category.id);
        return button;
      }),
    );
  }

  function renderOfferOptions() {
    const catalog = ui.state?.catalog;
    const types = catalog?.offerTypes || [
      { id: 'free', label: 'Free access' },
      { id: 'credits', label: 'Credits' },
      { id: 'discount', label: 'Discount' },
      { id: 'lifetime', label: 'Lifetime deal' },
      { id: 'trial', label: 'Free trial' },
      { id: 'program', label: 'Startup program' },
      { id: 'other', label: 'Offer' },
    ];
    let visible = types;
    if (ui.view === 'fresh') visible = types.filter((type) => type.id !== 'program');
    if (ui.view === 'startup') visible = types.filter((type) => type.id === 'program');

    const options = [new Option(ui.view === 'startup' ? 'All programs' : 'All offers', 'all')];
    for (const type of visible) options.push(new Option(type.label, type.id));
    el.offerTypeFilter.replaceChildren(...options);
    el.offerTypeFilter.value = visible.some((type) => type.id === ui.offerType) ? ui.offerType : 'all';
    ui.offerType = el.offerTypeFilter.value;
    el.offerTypeFilter.disabled = ui.view === 'startup';
  }

  function syncFilterControls() {
    for (const button of el.categoryFilters.querySelectorAll('button[data-category]')) {
      const active = button.dataset.category === ui.category;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    }
    el.offerTypeFilter.value = ui.offerType;
    el.sortSelect.value = ui.sort;
  }

  function clearFilters() {
    ui.category = 'all';
    ui.offerType = 'all';
    ui.sort = 'signal';
    ui.search = '';
    ui.page = 1;
    el.searchInput.value = '';
    el.clearSearch.hidden = true;
    syncFilterControls();
    renderOfferOptions();
    renderResults();
  }

  async function loadState({ quiet = false } = {}) {
    try {
      const response = await fetch(PUBLIC ? 'state.json' : '/api/state', { cache: 'no-store' });
      if (!response.ok) throw new Error(`The radar returned HTTP ${response.status}.`);
      const data = await response.json();
      if (!data.ok) throw new Error(data.error || 'The radar state could not be read.');
      if (PUBLIC) applyLocalFlags(data.items || []);
      ui.state = data;
      ui.lastPollError = '';
      if (!ui.state.catalog?.categories?.length) renderCategoryFilters([]);
      else renderCategoryFilters(ui.state.catalog.categories);
      syncSettings();
      renderAll();
    } catch (error) {
      if (!quiet || !ui.state) renderLoadError(error);
      else if (ui.lastPollError !== error.message) showToast(`Refresh failed: ${error.message}`, { error: true });
      ui.lastPollError = error.message;
    }
  }

  function schedulePoll(delay) {
    window.clearTimeout(ui.pollTimer);
    ui.pollTimer = window.setTimeout(async () => {
      await loadState({ quiet: true });
      const fast = Boolean(ui.state?.meta?.scanning);
      schedulePoll(fast && !PUBLIC ? 2000 : POLL_MS);
    }, delay);
  }

  async function triggerScan() {
    if (ui.state?.meta?.scanning) {
      showToast('A sweep is already running.');
      return;
    }
    el.topScanButton.disabled = true;
    el.heroScanButton.disabled = true;
    try {
      const response = await fetch('/api/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: '{}',
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || 'The sweep could not start.');
      showToast('Sweep started. The feed will refresh when it finishes.');
      if (ui.state) {
        ui.state.meta.scanning = true;
        ui.state.meta.scanProgress = { completed: 0, total: 6 };
      }
      renderStatus();
      schedulePoll(1500);
    } catch (error) {
      showToast(error.message, { error: true });
      renderStatus();
    }
  }

  function renderAll() {
    if (!ui.state) return;
    renderCounts();
    renderOfferOptions();
    syncFilterControls();
    renderStatus();
    renderResults();
    renderSources();
    renderSettings();
    tick();
  }

  function renderCounts() {
    const items = visibleItems();
    const deals = items.filter((item) => item.kind === 'deal');
    const programs = items.filter((item) => item.kind === 'program');
    const saved = items.filter((item) => item.saved);
    el.navFreshCount.textContent = formatNumber(deals.length);
    el.navStartupCount.textContent = formatNumber(programs.length);
    el.navSavedCount.textContent = formatNumber(saved.length);
    el.heroDealCount.textContent = formatNumber(deals.length);
    el.heroProgramCount.textContent = formatNumber(programs.length);
    el.heroSavedCount.textContent = formatNumber(saved.length);
    el.heroSourceCount.textContent = formatNumber(Object.keys(ui.state.meta.sourceStatuses || {}).length || 6);
    el.sidebarVersion.textContent = `AI Deal Radar · v${ui.state.catalog?.appVersion || '1.0.0'}`;
    el.drawerVersion.textContent = `v${ui.state.catalog?.appVersion || '1.0.0'}`;
  }

  function visibleItems() {
    return (ui.state?.items || []).filter((item) => !item.hidden && item.active !== false);
  }

  function itemsForView() {
    const items = visibleItems();
    if (ui.view === 'startup') return items.filter((item) => item.kind === 'program');
    if (ui.view === 'saved') return items.filter((item) => item.saved);
    return items.filter((item) => item.kind === 'deal');
  }

  function filteredItems() {
    let items = itemsForView();
    if (ui.category !== 'all') {
      items = items.filter((item) => (item.categories || []).includes(ui.category));
    }
    if (ui.offerType !== 'all') {
      items = items.filter((item) => item.offerType === ui.offerType);
    }
    const tokens = ui.search.toLowerCase().split(/\s+/).filter(Boolean);
    if (tokens.length) {
      items = items.filter((item) => {
        const haystack = [
          item.title,
          item.summary,
          item.valueLabel,
          item.source?.label,
          item.source?.publisher,
          item.offerTypeLabel,
          ...(item.categories || []),
          item.program?.approval,
          item.program?.stages,
          item.program?.programType,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return tokens.every((token) => haystack.includes(token));
      });
    }
    return sortItems(items);
  }

  function sortItems(items) {
    const copy = [...items];
    if (ui.sort === 'newest') {
      copy.sort((a, b) => {
        const left = Date.parse(a.publishedAt || a.firstSeenAt || 0) || 0;
        const right = Date.parse(b.publishedAt || b.firstSeenAt || 0) || 0;
        return right - left || (b.score || 0) - (a.score || 0);
      });
    } else if (ui.sort === 'value') {
      copy.sort((a, b) => valueScore(b) - valueScore(a) || (b.score || 0) - (a.score || 0));
    } else {
      copy.sort((a, b) => {
        const score = (b.score || 0) - (a.score || 0);
        if (score) return score;
        return (Date.parse(b.firstSeenAt || 0) || 0) - (Date.parse(a.firstSeenAt || 0) || 0);
      });
    }
    return copy;
  }

  function renderStatus() {
    const meta = ui.state?.meta || {};
    const scanning = Boolean(meta.scanning);

    el.topScanButton.disabled = scanning;
    el.heroScanButton.disabled = scanning;
    el.radarStatePill.textContent = scanning ? 'Scanning' : meta.lastScanStatus === 'failed' ? 'Attention' : 'Live';

    if (scanning) {
      const progress = meta.scanProgress || {};
      const completed = Number(progress.completed || 0);
      const total = Number(progress.total || 6) || 6;
      el.heroEyebrow.querySelector('span:last-child').textContent = 'Sweep in progress · checking public sources';
      el.sidebarStatusText.textContent = `Sweeping · ${completed}/${total} sources checked`;
      el.heroNextScan.textContent = `${completed}/${total} checked`;
      el.panelFootnote.textContent = 'The feed will refresh as soon as this pass is screened.';
      el.scanProgressTrack.hidden = false;
      el.scanProgressBar.style.width = `${Math.max(4, Math.round((completed / total) * 100))}%`;
      el.heroEyebrow.querySelector('.eyebrow-dot').classList.add('loading');
    } else {
      el.scanProgressTrack.hidden = true;
      el.scanProgressBar.style.width = '0%';
      el.heroEyebrow.querySelector('.eyebrow-dot').classList.remove('loading');
      if (meta.lastScanAt) {
        const result = meta.lastScanStatus === 'partial' ? 'partial pass' : meta.lastScanStatus === 'failed' ? 'needs attention' : 'sweep complete';
        const count = visibleItems().filter((item) => item.kind === 'deal').length;
        if (PUBLIC) {
          el.heroEyebrow.querySelector('span:last-child').textContent = `Hourly radar · page updated ${timeAgo(meta.publishedAt || meta.lastScanAt)}`;
          el.sidebarStatusText.textContent = `${count} deals · updated ${timeAgo(meta.publishedAt || meta.lastScanAt)}`;
        } else {
          el.heroEyebrow.querySelector('span:last-child').textContent = `Hourly radar · ${result} ${timeAgo(meta.lastScanAt)}`;
          el.sidebarStatusText.textContent = `${count} finds held · hourly radar live`;
        }
      } else {
        el.heroEyebrow.querySelector('span:last-child').textContent = 'Preparing the first sweep';
        el.sidebarStatusText.textContent = 'Warming up the radar';
      }
      if (PUBLIC) {
        el.panelFootnote.textContent = 'The radar sweeps public sources every hour; this page republishes when the list changes. No affiliate links.';
      } else if (meta.lastScanStatus === 'partial') {
        el.panelFootnote.textContent = 'At least one source is rate-limited or incomplete. Existing finds were kept.';
      } else if (meta.lastScanStatus === 'failed') {
        el.panelFootnote.textContent = 'The last sweep could not reach its sources. Check the source health below.';
      } else {
        el.panelFootnote.textContent = 'Alerts only fire for new finds after the first catalog build.';
      }
    }

    const statusDot = document.querySelector('#sidebarStatus .status-dot');
    statusDot.classList.toggle('is-live', !scanning);
    statusDot.classList.toggle('status-dot-warn', !scanning && meta.lastScanStatus === 'partial');
    statusDot.classList.toggle('status-dot-error', !scanning && meta.lastScanStatus === 'failed');

    el.footerFine.textContent = PUBLIC
      ? `AI Deal Radar by Asdale Dynamics · ${formatNumber(visibleItems().length)} public finds · no affiliate links`
      : `AI Deal Radar v${ui.state?.catalog?.appVersion || '1.0.0'} · local only · ${formatNumber(visibleItems().length)} finds stored`;
  }

  function renderResults() {
    if (!ui.state) return;
    const items = filteredItems();
    const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
    ui.page = Math.min(ui.page, totalPages);
    const shown = items.slice(0, ui.page * PAGE_SIZE);

    const viewLabel = VIEW_META[ui.view].label;
    const filtersOn = ui.category !== 'all' || ui.offerType !== 'all' || Boolean(ui.search);
    el.resultSummary.textContent = items.length
      ? `${formatNumber(items.length)} ${items.length === 1 ? 'find' : 'finds'} in ${viewLabel}${filtersOn ? ' · filtered' : ''}${shown.length < items.length ? ` · showing ${shown.length}` : ''}`
      : `No matching finds in ${viewLabel}`;
    el.clearFilters.hidden = !filtersOn;

    el.feed.setAttribute('aria-busy', 'false');
    el.feed.replaceChildren();

    if (!items.length) {
      el.feed.append(renderEmptyState(filtersOn));
      return;
    }

    const fragment = document.createDocumentFragment();
    for (const item of shown) fragment.append(renderCard(item));
    el.feed.append(fragment);

    if (items.length > shown.length) {
      const remaining = items.length - shown.length;
      const more = document.createElement('div');
      more.className = 'feed-more';
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'btn btn-ghost btn-small';
      button.textContent = `Show ${Math.min(PAGE_SIZE, remaining)} more · ${remaining} remaining`;
      button.addEventListener('click', () => {
        ui.page += 1;
        renderResults();
      });
      more.append(button);
      el.feed.append(more);
    }
  }

  function renderEmptyState(filtersOn) {
    const wrap = document.createElement('div');
    wrap.className = 'feed-empty';

    const mark = document.createElement('div');
    mark.className = 'empty-mark';
    mark.append(makeIcon(filtersOn ? 'search' : ui.view === 'saved' ? 'bookmark' : 'radar'));
    wrap.append(mark);

    const heading = document.createElement('h3');
    const copy = document.createElement('p');
    if (filtersOn) {
      heading.textContent = 'No matches in this pass';
      copy.textContent = 'Try a broader search, another category, or clear the filters.';
    } else {
      const meta = VIEW_META[ui.view];
      heading.textContent = meta.emptyTitle;
      copy.textContent = meta.emptyCopy;
    }
    wrap.append(heading, copy);

    const action = document.createElement('button');
    action.type = 'button';
    if (filtersOn) {
      action.className = 'btn btn-ghost btn-small';
      action.textContent = 'Clear filters';
      action.addEventListener('click', clearFilters);
    } else if (ui.view === 'saved') {
      action.className = 'btn btn-ghost btn-small';
      action.textContent = 'Browse fresh deals';
      action.addEventListener('click', () => setView('fresh'));
    } else {
      action.className = 'btn btn-primary btn-small';
      action.append(makeIcon('refresh'), document.createTextNode('Run a sweep'));
      action.addEventListener('click', triggerScan);
    }
    wrap.append(action);
    return wrap;
  }

  function renderLoadError(error) {
    el.feed.setAttribute('aria-busy', 'false');
    el.feed.replaceChildren();
    const wrap = document.createElement('div');
    wrap.className = 'feed-empty';
    const mark = document.createElement('div');
    mark.className = 'empty-mark';
    mark.append(makeIcon('close'));
    const heading = document.createElement('h3');
    heading.textContent = 'The radar is out of reach';
    const copy = document.createElement('p');
    copy.textContent = `${error.message} The local server may still be starting.`;
    const retry = document.createElement('button');
    retry.type = 'button';
    retry.className = 'btn btn-primary btn-small';
    retry.textContent = 'Try again';
    retry.addEventListener('click', () => loadState());
    wrap.append(mark, heading, copy, retry);
    el.feed.append(wrap);
    el.resultSummary.textContent = 'Could not read the local radar state.';
  }

  function renderCard(item) {
    const offerType = item.offerType || 'other';
    const card = document.createElement('article');
    card.className = `deal-card${item.kind === 'program' ? ' is-program' : ''}`;
    card.dataset.id = item.id;

    const top = document.createElement('div');
    top.className = 'card-top';
    const badge = document.createElement('span');
    badge.className = `type-badge offer-${offerType}`;
    badge.textContent = item.offerTypeLabel || offerLabel(offerType);
    top.append(badge);
    if (item.valueLabel) {
      const value = document.createElement('span');
      value.className = 'card-value';
      value.textContent = item.valueLabel;
      value.title = `Stated value: ${item.valueLabel}`;
      top.append(value);
    }
    card.append(top);

    const title = document.createElement('h3');
    title.className = 'card-title';
    const link = document.createElement('a');
    link.href = item.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = item.title;
    title.append(link);
    card.append(title);

    if (item.summary) {
      const summary = document.createElement('p');
      summary.className = 'card-summary';
      summary.textContent = item.summary;
      card.append(summary);
    }

    const tags = document.createElement('div');
    tags.className = 'card-tags';
    const categoryLabels = categoryLabelsFor(item.categories || []);
    for (const label of categoryLabels.slice(0, 3)) tags.append(makeTag(label));
    if (item.isLlcPerk) tags.append(makeTag('LLC-relevant', true));
    else if (item.isStartup) tags.append(makeTag('Startup-friendly'));
    if ((item.sources || []).length > 1) {
      tags.append(makeTag(`${item.sources.length} sources`, true));
    }
    card.append(tags);

    if (item.kind === 'program' && item.program) {
      const details = document.createElement('div');
      details.className = 'program-details';
      if (item.program.approval) {
        details.append(makeDetail('Approval', item.program.approval));
      }
      if (item.program.stages) {
        details.append(makeDetail('Stages', item.program.stages));
      } else if (item.program.programType) {
        details.append(makeDetail('Type', item.program.programType));
      }
      if (details.childElementCount) card.append(details);
    }

    const spacer = document.createElement('div');
    spacer.className = 'card-spacer';
    card.append(spacer);

    const meta = document.createElement('div');
    meta.className = 'card-meta';
    const source = document.createElement('div');
    source.className = 'card-source';
    source.append(makeIcon('globe'));
    const sourceText = document.createElement('span');
    sourceText.textContent = sourceLine(item);
    source.append(sourceText);
    const age = document.createElement('span');
    age.className = 'card-age';
    const ageText = cardAge(item);
    if (isNew(item)) age.classList.add('is-new');
    age.textContent = ageText;
    age.title = item.publishedAt ? `Published ${formatFullDate(item.publishedAt)}` : `Added ${formatFullDate(item.firstSeenAt)}`;
    meta.append(source, age);
    card.append(meta);

    const actions = document.createElement('div');
    actions.className = 'card-actions';
    const open = document.createElement('a');
    open.className = 'card-open';
    open.href = item.url;
    open.target = '_blank';
    open.rel = 'noopener noreferrer';
    open.append(document.createTextNode(item.kind === 'program' ? 'View program' : 'Open offer'), makeIcon('arrow'));
    actions.append(open);

    const save = document.createElement('button');
    save.type = 'button';
    save.className = 'save-button';
    save.setAttribute('aria-pressed', String(Boolean(item.saved)));
    save.setAttribute('aria-label', item.saved ? 'Remove from saved' : 'Save this find');
    save.title = item.saved ? 'Remove from saved' : 'Save this find';
    save.append(makeIcon('bookmark'));
    save.addEventListener('click', () => toggleSave(item, save));
    actions.append(save);

    const hide = document.createElement('button');
    hide.type = 'button';
    hide.className = 'hide-button';
    hide.setAttribute('aria-label', 'Hide this find');
    hide.title = 'Hide this find';
    hide.append(makeIcon('eye-off'));
    hide.addEventListener('click', () => hideItem(item, hide));
    actions.append(hide);

    card.append(actions);
    return card;
  }

  function makeDetail(label, value) {
    const wrap = document.createElement('span');
    const small = document.createElement('small');
    small.textContent = label;
    const text = document.createElement('span');
    text.textContent = value;
    wrap.append(small, text);
    return wrap;
  }

  function makeTag(text, extra = false) {
    const tag = document.createElement('span');
    tag.className = `tag${extra ? ' tag-extras' : ''}`;
    tag.textContent = text;
    return tag;
  }

  async function toggleSave(item, button) {
    if (button.disabled) return;
    button.disabled = true;
    const desired = !item.saved;
    try {
      await patchItem(item.id, { saved: desired });
      item.saved = desired;
      showToast(desired ? 'Saved. You will find it in the Saved tab.' : 'Removed from saved.');
      renderCounts();
      renderResults();
    } catch (error) {
      showToast(error.message, { error: true });
    } finally {
      button.disabled = false;
    }
  }

  async function hideItem(item, button) {
    if (button.disabled) return;
    button.disabled = true;
    try {
      await patchItem(item.id, { hidden: true });
      item.hidden = true;
      showToast('Hidden from the feed.', {
        actionLabel: 'Undo',
        onAction: async () => {
          try {
            await patchItem(item.id, { hidden: false });
            item.hidden = false;
            renderCounts();
            renderResults();
            showToast('Find restored.');
          } catch (error) {
            showToast(error.message, { error: true });
          }
        },
      });
      renderCounts();
      renderResults();
    } catch (error) {
      showToast(error.message, { error: true });
      button.disabled = false;
    }
  }

  function readLocalFlags() {
    try { return JSON.parse(window.localStorage.getItem(LOCAL_FLAGS) || '{}') || {}; } catch { return {}; }
  }

  function applyLocalFlags(items) {
    const flags = readLocalFlags();
    for (const item of items) Object.assign(item, { saved: false, hidden: false }, flags[item.id] || {});
  }

  async function patchItem(id, patch) {
    if (PUBLIC) {
      const flags = readLocalFlags();
      const next = { ...(flags[id] || {}), ...patch };
      if (!next.saved && !next.hidden) delete flags[id];
      else flags[id] = next;
      try { window.localStorage.setItem(LOCAL_FLAGS, JSON.stringify(flags)); } catch { throw new Error('This browser is not letting the page save that.'); }
      return { id, ...next };
    }
    const response = await fetch(`/api/items/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patch),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.ok) throw new Error(data.error || 'The find could not be updated.');
    return data.item;
  }

  function renderSources() {
    const statuses = ui.state?.meta?.sourceStatuses || {};
    const ids = Object.keys(statuses).length
      ? [...SOURCE_ORDER.filter((id) => statuses[id]), ...Object.keys(statuses).filter((id) => !SOURCE_ORDER.includes(id))]
      : SOURCE_ORDER;
    el.sourceGrid.replaceChildren(
      ...ids.map((id) => {
        const status = statuses[id] || { id, label: sourceFallbackLabel(id), status: 'pending', count: 0, detail: 'Waiting for the first sweep' };
        const tile = document.createElement('article');
        tile.className = 'source-tile';
        const top = document.createElement('div');
        top.className = 'source-tile-top';
        top.append(makeDot(status.status));
        const name = document.createElement('span');
        name.textContent = status.label || sourceFallbackLabel(id);
        const state = document.createElement('span');
        state.className = 'source-state';
        state.textContent = sourceStateLabel(status.status);
        top.append(name, state);
        const detail = document.createElement('p');
        const count = document.createElement('strong');
        count.textContent = `${formatNumber(status.count || 0)} raw`;
        detail.append(count, document.createTextNode(` · ${status.detail || sourceFallbackDetail(status.status)}`));
        if (status.failures?.length) {
          tile.title = status.failures.map((failure) => `${failure.label}: ${failure.message}`).join('\n');
        }
        tile.append(top, detail);

        const footer = document.createElement('p');
        footer.className = 'source-tile-foot';
        footer.textContent = status.lastSuccessAt
          ? `Last clean read ${timeAgo(status.lastSuccessAt)}`
          : status.lastAttemptAt
            ? `Attempted ${timeAgo(status.lastAttemptAt)}`
            : 'Not checked yet';
        tile.append(footer);
        return tile;
      }),
    );
  }

  function renderSettings() {
    if (!ui.state) return;
    const settings = ui.state.settings || {};
    if (document.activeElement !== el.desktopNotificationsToggle) {
      el.desktopNotificationsToggle.checked = settings.desktopNotifications !== false;
    }
    applyWebhookCopy();

    const runs = ui.state.runs || [];
    el.seededHint.textContent = runs.length <= 1 ? 'First sweep seeded silently' : 'Only new finds alert you';

    const sources = Object.entries(ui.state.meta.sourceStatuses || {});
    el.sourceSummary.textContent = `${sources.length || 6} configured`;
    renderSettingsSources();
    renderRuns(runs);
    if (ui.notificationResult) {
      setNotificationResult(ui.notificationResult, ui.notificationTone);
    }
  }

  function applyWebhookCopy() {
    const settings = ui.state?.settings || {};
    const configured = Boolean(settings.webhookConfigured);
    el.webhookUrl.placeholder = configured
      ? `Saved: ${settings.webhookHost || 'webhook configured'} — enter a new URL to replace`
      : 'https://discord.com/api/webhooks/…';
    el.webhookHelp.textContent = configured
      ? `Connected to ${settings.webhookHost || 'your endpoint'}. Test it below or paste a replacement URL.`
      : 'Discord, Slack, or a generic JSON endpoint. Leave blank for desktop-only alerts.';
    el.clearWebhookButton.disabled = !configured;
    el.webhookForm.dataset.configured = configured ? 'true' : 'false';
  }

  function renderSettingsSources() {
    const statuses = ui.state?.meta?.sourceStatuses || {};
    const ids = Object.keys(statuses).length ? Object.keys(statuses) : SOURCE_ORDER;
    el.settingsSourceList.replaceChildren(
      ...ids.map((id) => {
        const status = statuses[id] || { status: 'pending', label: sourceFallbackLabel(id), count: 0, detail: 'Waiting for the first sweep' };
        const row = document.createElement('div');
        row.className = 'source-row';
        row.append(makeDot(status.status));
        const name = document.createElement('span');
        name.className = 'source-row-name';
        name.textContent = status.label || sourceFallbackLabel(id);
        const detail = document.createElement('span');
        detail.className = 'source-row-detail';
        detail.textContent = `${sourceStateLabel(status.status)} · ${formatNumber(status.count || 0)} raw`;
        row.append(name, detail);
        if (status.failures?.length) row.title = status.failures.map((failure) => `${failure.label}: ${failure.message}`).join('\n');
        return row;
      }),
    );
  }

  function renderRuns(runs) {
    if (!runs.length) {
      const empty = document.createElement('p');
      empty.className = 'field-help';
      empty.textContent = 'No sweeps recorded yet.';
      el.runList.replaceChildren(empty);
      return;
    }
    el.runList.replaceChildren(
      ...runs.slice(0, 6).map((run) => {
        const row = document.createElement('div');
        row.className = 'run-row';
        const time = document.createElement('span');
        time.className = 'run-time';
        time.textContent = formatRunTime(run.startedAt);
        const main = document.createElement('div');
        main.className = 'run-main';
        const strong = document.createElement('strong');
        strong.textContent = run.status === 'failed' ? 'Sweep failed' : `${run.newDeals || 0} new deals · ${run.newPrograms || 0} programs`;
        const small = document.createElement('small');
        small.textContent = run.notes || `${formatNumber(run.scanned || 0)} screened · ${Math.round((run.durationMs || 0) / 1000)}s`;
        main.append(strong, small);
        const count = document.createElement('span');
        count.className = `run-count${run.status === 'failed' ? ' is-bad' : ''}`;
        count.textContent = run.status === 'partial' ? 'Partial' : run.status === 'failed' ? 'Failed' : `${run.qualified || 0} held`;
        row.append(time, main, count);
        row.title = run.notes || '';
        return row;
      }),
    );
  }

  function setNotificationResult(message, tone = '') {
    ui.notificationResult = message;
    ui.notificationTone = tone;
    el.notificationResult.textContent = message;
    el.notificationResult.classList.toggle('is-good', tone === 'good');
    el.notificationResult.classList.toggle('is-bad', tone === 'bad');
  }

  function syncSettings() {
    if (!ui.state) return;
    renderSettings();
  }

  function openDrawer() {
    if (ui.drawerOpen) return;
    ui.drawerOpen = true;
    focusBeforeDrawer = document.activeElement;
    window.clearTimeout(ui.drawerTimer);
    el.settingsDrawer.hidden = false;
    el.drawerScrim.hidden = false;
    el.settingsDrawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('drawer-open');
    requestAnimationFrame(() => {
      el.settingsDrawer.classList.add('is-open');
      el.drawerScrim.classList.add('is-visible');
    });
    el.closeSettings.focus({ preventScroll: true });
    loadAutomationStatus();
  }

  function closeDrawer() {
    if (!ui.drawerOpen) return;
    ui.drawerOpen = false;
    el.settingsDrawer.classList.remove('is-open');
    el.drawerScrim.classList.remove('is-visible');
    el.settingsDrawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('drawer-open');
    window.clearTimeout(ui.drawerTimer);
    ui.drawerTimer = window.setTimeout(() => {
      el.settingsDrawer.hidden = true;
      el.drawerScrim.hidden = true;
    }, 300);
    if (focusBeforeDrawer && typeof focusBeforeDrawer.focus === 'function') {
      focusBeforeDrawer.focus({ preventScroll: true });
    }
  }

  async function loadAutomationStatus() {
    try {
      const response = await fetch('/api/automation', { cache: 'no-store' });
      if (!response.ok) throw new Error('Automation status unavailable');
      ui.automation = await response.json();
    } catch {
      ui.automation = { supported: false, installed: false, detail: 'Automation status is unavailable.' };
    }
    renderAutomation();
  }

  function renderAutomation() {
    const automation = ui.automation;
    if (!automation) {
      el.automationDot.className = 'status-dot status-dot-muted';
      el.automationLabel.textContent = 'Checking the Windows task…';
      el.automationDetail.textContent = 'The app can recover itself after a login or restart.';
      return;
    }
    const installed = Boolean(automation.installed);
    el.automationDot.className = `status-dot ${installed ? 'is-live' : automation.supported === false ? 'status-dot-muted' : 'status-dot-warn'}`;
    if (installed) {
      el.automationLabel.textContent = 'Windows task installed';
      el.automationDetail.textContent = automation.lastRunAt
        ? `Autostart at login · checked hourly · last task run ${timeAgo(automation.lastRunAt)}`
        : 'Autostart at login · hourly recovery check is active.';
    } else if (automation.supported === false) {
      el.automationLabel.textContent = 'App-managed schedule';
      el.automationDetail.textContent = 'The server keeps scanning while it runs. Windows task autostart is not available here.';
    } else {
      el.automationLabel.textContent = 'Windows task not installed';
      el.automationDetail.textContent = 'Run npm run task:install to add login autostart and an hourly recovery check.';
    }
  }

  function tick() {
    if (!ui.state) return;
    const scanning = Boolean(ui.state.meta.scanning);
    const now = Date.now();
    if (scanning) {
      el.nextScanLabel.querySelector('span').textContent = 'Sweeping now';
      el.heroNextScan.textContent = 'Sweeping now';
    } else {
      const next = PUBLIC ? NaN : Date.parse(ui.state.meta.nextScanAt || '');
      if (PUBLIC) {
        el.heroNextScan.textContent = 'Republished when the list changes';
      } else if (Number.isFinite(next)) {
        const remaining = next - now;
        const text = remaining <= 0 ? 'Sweep due now' : `Next sweep in ${formatCountdown(remaining)}`;
        el.nextScanLabel.querySelector('span').textContent = text;
        el.heroNextScan.textContent = remaining <= 0 ? 'Sweep due now' : `Next in ${formatCountdown(remaining)}`;
      } else {
        el.nextScanLabel.querySelector('span').textContent = 'Hourly cadence';
        el.heroNextScan.textContent = 'Hourly cadence';
      }
    }
    if (ui.state.meta.lastScanAt) {
      el.heroLastScan.textContent = `Last sweep ${timeAgo(ui.state.meta.lastScanAt)}`;
    } else {
      el.heroLastScan.textContent = 'No sweep yet';
    }
  }

  function showToast(message, { error = false, actionLabel = '', onAction = null, duration = 5000 } = {}) {
    const toast = document.createElement('div');
    toast.className = `toast${error ? ' is-error' : ''}`;
    toast.append(makeIcon(error ? 'close' : 'check'));
    const text = document.createElement('span');
    text.textContent = message;
    toast.append(text);
    if (actionLabel && typeof onAction === 'function') {
      const action = document.createElement('button');
      action.type = 'button';
      action.className = 'toast-action';
      action.textContent = actionLabel;
      action.addEventListener('click', () => {
        onAction();
        dismiss();
      });
      toast.append(action);
    }
    el.toastRegion.append(toast);
    let dismissed = false;
    const dismiss = () => {
      if (dismissed) return;
      dismissed = true;
      toast.classList.add('is-leaving');
      window.setTimeout(() => toast.remove(), 210);
    };
    window.setTimeout(dismiss, duration);
  }

  function makeIcon(name, className = 'icon') {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', className);
    svg.setAttribute('aria-hidden', 'true');
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', `#i-${name}`);
    svg.append(use);
    return svg;
  }

  function makeDot(status) {
    const dot = document.createElement('span');
    dot.className = 'status-dot';
    if (status === 'partial') dot.classList.add('status-dot-warn');
    else if (status === 'error') dot.classList.add('status-dot-error');
    else if (status === 'cached' || status === 'pending' || !status) dot.classList.add('status-dot-muted');
    else dot.classList.add('is-live');
    return dot;
  }

  function categoryLabelsFor(ids) {
    const categories = ui.state?.catalog?.categories || [];
    return ids
      .map((id) => categories.find((category) => category.id === id)?.label || id)
      .filter(Boolean);
  }

  function offerLabel(id) {
    return ui.state?.catalog?.offerTypes?.find((type) => type.id === id)?.label || 'Offer';
  }

  function sourceLine(item) {
    const source = item.source || {};
    const label = source.label || 'Public source';
    const publisher = source.publisher || '';
    if (publisher && publisher.toLowerCase() !== label.toLowerCase()) return `${label} · ${publisher}`;
    return label;
  }

  function cardAge(item) {
    const stamp = item.publishedAt || item.firstSeenAt;
    const relative = stamp ? timeAgo(stamp) : 'Date unknown';
    if (isNew(item) && item.kind === 'deal') return `New · ${relative}`;
    if (item.kind === 'program') return stamp ? `Listed ${relative}` : 'In directory';
    return relative;
  }

  function isNew(item) {
    const firstSeen = Date.parse(item.firstSeenAt || '');
    if (!Number.isFinite(firstSeen)) return false;
    return Date.now() - firstSeen < 24 * 60 * 60 * 1000;
  }

  function timeAgo(stamp) {
    const time = Date.parse(stamp || '');
    if (!Number.isFinite(time)) return 'unknown';
    const diff = Date.now() - time;
    if (diff < 45_000) return 'just now';
    const minutes = Math.floor(diff / 60_000);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days === 1) return 'yesterday';
    if (days < 7) return `${days}d ago`;
    return formatShortDate(stamp);
  }

  function formatCountdown(ms) {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    if (hours > 0) return `${hours}h ${String(minutes).padStart(2, '0')}m`;
    if (minutes > 0) return `${minutes}m ${String(seconds).padStart(2, '0')}s`;
    return `${seconds}s`;
  }

  function formatShortDate(stamp) {
    const date = new Date(stamp);
    if (Number.isNaN(date.valueOf())) return 'unknown date';
    return new Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric' }).format(date);
  }

  function formatRunTime(stamp) {
    const date = new Date(stamp);
    if (Number.isNaN(date.valueOf())) return '—';
    const now = new Date();
    const sameDay = date.toDateString() === now.toDateString();
    return new Intl.DateTimeFormat(undefined, {
      ...(sameDay ? {} : { month: 'short', day: 'numeric' }),
      hour: 'numeric',
      minute: '2-digit',
    }).format(date);
  }

  function formatFullDate(stamp) {
    const date = new Date(stamp);
    if (Number.isNaN(date.valueOf())) return 'an unknown date';
    return new Intl.DateTimeFormat(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    }).format(date);
  }

  function formatNumber(value) {
    return new Intl.NumberFormat().format(Number(value) || 0);
  }

  function sourceStateLabel(status) {
    return (
      {
        ok: 'Live',
        partial: 'Partial',
        error: 'Error',
        cached: 'Cached',
        pending: 'Waiting',
      }[status] || 'Waiting'
    );
  }

  function sourceFallbackLabel(id) {
    return (
      {
        'google-news': 'Google News',
        'hacker-news': 'Hacker News',
        reddit: 'Reddit',
        'product-hunt': 'Product Hunt',
        appsumo: 'AppSumo',
        'startup-directory': 'Credit for Startups',
      }[id] || id
    );
  }

  function sourceFallbackDetail(status) {
    return status === 'pending' ? 'Waiting for the first sweep' : 'No recent detail';
  }

  async function postJson(url, payload) {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload || {}),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || (data.ok === false && data.error)) {
      throw new Error(data.error || `Request failed with HTTP ${response.status}.`);
    }
    return data;
  }

  function valueScore(item) {
    const text = item.valueLabel || '';
    const money = text.match(/(?:\$|€|£|A\$)\s?([\d,.]+)\s?([km])?/i);
    if (money) {
      const amount = Number(money[1].replace(/,/g, '')) || 0;
      const multiplier = money[2]?.toLowerCase() === 'm' ? 1_000_000 : money[2]?.toLowerCase() === 'k' ? 1_000 : 1;
      return amount * multiplier;
    }
    const percent = text.match(/(\d{1,3})\s?%/);
    if (percent) return Number(percent[1]) * 100;
    return 0;
  }
})();
