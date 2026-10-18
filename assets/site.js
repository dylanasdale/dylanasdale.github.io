// Renders every shelf from /data/items.json. A shelf is any element with data-list="books|guides|projects|links".
// Optional: data-limit="3" shows the first N items; data-skip="id1,id2" hides items by id.
(() => {
  const ICONS = {
    x: '<path fill="currentColor" d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77L17.75 3Zm-1.08 16.17h1.7L7.42 4.74H5.6l11.07 14.43Z"/>',
    threads: '<path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M16.6 11.2c-.5-2.6-2.4-3.8-4.6-3.8-2.6 0-4.3 1.7-4.3 1.7M16.6 11.2c.2 1 .2 2.2-.1 3.3-.7 2.6-3 3.6-5 3.4-1.9-.2-3-1.4-2.9-2.8.1-1.6 1.7-2.6 4-2.6 2.8 0 5.9.9 6.4 3.4M16.6 11.2c2.2.6 3.6 2 3.6 4.2 0 3.3-3.2 5.6-8 5.6-5.4 0-8.4-3.4-8.4-9S6.8 3 12.2 3c4 0 6.7 1.8 7.8 4.9"/>',
    bluesky: '<path fill="currentColor" d="M6.3 4.2C8.6 5.9 11.1 9.4 12 11.3c.9-1.9 3.4-5.4 5.7-7.1 1.7-1.2 4.3-2.2 4.3.8 0 .6-.3 5-.5 5.7-.7 2.5-3.2 3.1-5.4 2.7 3.9.7 4.9 2.9 2.7 5.1-4.1 4.2-5.9-1.1-6.4-2.4l-.4-1-.4 1c-.5 1.3-2.3 6.6-6.4 2.4-2.2-2.2-1.2-4.4 2.7-5.1-2.2.4-4.7-.2-5.4-2.7C2.3 10 2 5.6 2 5c0-3 2.6-2 4.3-.8Z"/>',
    book: '<path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M4 4.5A1.5 1.5 0 0 1 5.5 3H20v15H5.5A1.5 1.5 0 0 0 4 19.5v-15ZM4 19.5A1.5 1.5 0 0 0 5.5 21H20v-3"/>',
    globe: '<g fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z"/></g>',
  };
  const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };
  const external = (href) => /^https?:\/\//.test(href) && !href.startsWith(location.origin);

  function linkBtn(l, title) {
    const a = el('a', 'btn' + (l.primary ? ' primary' : ''), l.label);
    a.href = l.href;
    if (external(l.href)) a.rel = 'noopener';
    if (title) a.append(Object.assign(el('span', 'sr-only'), { textContent: ` (${title})` }));
    return a;
  }

  function itemCard(it, level) {
    const li = el('li', 'item' + (it.image ? '' : ' no-img'));
    li.id = it.id;
    const main = it.links?.find((l) => l.primary) || it.links?.[0];
    if (it.image) {
      const a = el('a', 'cover');
      a.href = main ? main.href : '#';
      a.setAttribute('aria-label', `Open ${it.title}`);
      if (main && external(main.href)) a.rel = 'noopener';
      const img = el('img');
      Object.assign(img, { src: it.image, alt: it.imageAlt || '', loading: 'lazy', decoding: 'async' });
      if (it.imageWidth) img.width = it.imageWidth;
      if (it.imageHeight) img.height = it.imageHeight;
      a.append(img); li.append(a);
    }
    const t = el('div', 'item-text');
    if (it.tag) t.append(el('p', 'tag' + (it.free ? ' free' : ''), it.tag));
    t.append(el(level, 'item-title', it.title));
    if (it.subtitle) t.append(el('p', 'sub', it.subtitle));
    if (it.meta) t.append(el('p', 'meta', it.meta));
    if (it.links?.length) { const act = el('div', 'actions'); for (const l of it.links) act.append(linkBtn(l, it.title)); t.append(act); }
    li.append(t);
    return li;
  }

  function linkCard(l) {
    const li = el('li');
    const a = el('a', 'link-card'); a.href = l.href; if (external(l.href)) a.rel = 'me noopener';
    a.insertAdjacentHTML('afterbegin', `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[l.icon] || ICONS.globe}</svg>`);
    const s = el('span'); s.append(el('b', '', l.label), el('small', '', l.handle || l.href));
    a.append(s); li.append(a);
    return li;
  }

  function emptyState(kind) {
    const p = el('p', 'empty');
    p.append(el('strong', '', 'More coming soon.'), document.createTextNode(kind === 'projects' ? 'New projects will show up here as they launch.' : 'Nothing here yet. Check back soon.'));
    return p;
  }

  async function render() {
    const lists = document.querySelectorAll('[data-list]');
    if (!lists.length) return;
    let data;
    try { data = await (await fetch('/data/items.json', { cache: 'no-cache' })).json(); }
    catch { return; } // the static <noscript>/fallback content stays in place
    for (const host of lists) {
      const kind = host.dataset.list;
      const skip = (host.dataset.skip || '').split(',').filter(Boolean);
      let items = (data[kind] || []).filter((i) => !skip.includes(i.id));
      if (host.dataset.limit) items = items.slice(0, +host.dataset.limit);
      host.replaceChildren();
      if (!items.length) { host.replaceWith(emptyState(kind)); continue; }
      const level = host.dataset.level || 'h3';
      for (const it of items) host.append(kind === 'links' ? linkCard(it) : itemCard(it, level));
    }
  }
  render();
})();
