/*
 * Pre-layout pass that runs in the browser before Paged.js paginates.
 *
 * Paged.js largely ignores `break-after: avoid` and orphan/widow control for
 * headings and tables, so we restructure the DOM instead:
 *   1. Unwrap :::compact blocks so their tables are direct siblings of headings.
 *   2. Split long tables: the first few rows become their own small table that
 *      can be kept with the heading above it; the rest flows across pages.
 *   3. Wrap each heading with its lead-in content (sub-headings, a short
 *      paragraph) and the next short block in an unbreakable `.keep-together`.
 *   4. Mark tables of ≤ 10 rows `.table-short` so they never split.
 */
(function () {
  const HEAD_ROWS = 3;     // rows kept with the heading of a long table
  const SHORT_TABLE = 10;  // tables up to this many rows never split
  const LONG_TABLE = 12;   // tables longer than this get split

  const rows = (wrap) => wrap.querySelectorAll('tbody tr').length;

  function unwrapCompact(root) {
    root.querySelectorAll('.block-compact').forEach((block) => {
      block.querySelectorAll('.table-wrap').forEach((t) => t.classList.add('compact'));
      block.replaceWith(...block.childNodes);
    });
  }

  function splitLongTables(root) {
    root.querySelectorAll('.table-wrap').forEach((wrap) => {
      if (rows(wrap) <= LONG_TABLE) return;
      const table = wrap.querySelector('table');
      const head = wrap.cloneNode(false);
      const headTable = table.cloneNode(false);
      if (table.tHead) headTable.append(table.tHead.cloneNode(true));
      const headBody = document.createElement('tbody');
      const body = table.tBodies[0];
      for (let i = 0; i < HEAD_ROWS; i++) headBody.append(body.rows[0]);
      headTable.append(headBody);
      head.append(headTable);
      head.classList.add('table-head-chunk');
      wrap.classList.add('table-tail');
      table.tHead && table.tHead.remove();
      wrap.before(head);
    });
  }

  // Same idea for step lists: the first step travels with the heading,
  // and the rest keep their original numbers.
  function splitLongSteps(root) {
    // Number steps explicitly; Paged.js rewrites CSS counters across fragments.
    root.querySelectorAll('ol.steps').forEach((ol) => {
      [...ol.children].forEach((li, i) => li.setAttribute('data-step', i + 1));
    });
    root.querySelectorAll('.steps-block').forEach((block) => {
      const ol = block.querySelector('ol.steps');
      if (!ol || ol.children.length < 3) return;
      const head = document.createElement('div');
      head.className = 'steps-block steps-head';
      const title = block.querySelector(':scope > .block-title');
      if (title) head.append(title);
      const headOl = ol.cloneNode(false);
      headOl.append(ol.firstElementChild);
      head.append(headOl);
      block.classList.add('steps-tail');
      block.before(head);
    });
  }

  const isLeadIn = (el) =>
    el && (el.matches('h2, h3, h4, .block-title') || (el.matches('p') && el.textContent.length < 420));

  function isShort(el) {
    if (!el) return false;
    if (el.matches('p, aside.callout, figure.code-short, .block-summary, .block-definition, .table-head-chunk, .steps-head')) return true;
    if (el.matches('.steps-block')) return el.querySelectorAll('ol.steps > li').length <= 2;
    if (el.matches('ul, ol')) return el.querySelectorAll(':scope > li').length <= 4;
    if (el.matches('.table-wrap')) return rows(el) <= 4;
    return false;
  }

  function keepHeadingsWithContent(root) {
    root.querySelectorAll('h1, h2, h3, h4').forEach((h) => {
      if (h.closest('.keep-together')) return;
      // heading → any sub-headings → at most one short paragraph → next short block
      const group = [h];
      let next = h.nextElementSibling;
      let paragraphs = 0;
      while (next && group.length < 5 && isLeadIn(next)) {
        if (next.matches('p')) {
          if (paragraphs === 1) break;
          paragraphs++;
        }
        group.push(next);
        next = next.nextElementSibling;
      }
      if (isShort(next) && !(paragraphs && next.matches('p'))) group.push(next);
      if (group.length < 2) return;
      const keep = document.createElement('div');
      keep.className = 'keep-together';
      h.before(keep);
      keep.append(...group);
    });
  }

  function markShortTables(root) {
    root.querySelectorAll('.table-wrap').forEach((t) => {
      if (rows(t) <= SHORT_TABLE) t.classList.add('table-short');
    });
  }

  // Short checklists (up to 8 items) never split, so no page holds only a stray item or two.
  function markShortChecklists(root) {
    root.querySelectorAll('.block-checklist').forEach((c) => {
      if (c.querySelectorAll('li').length <= 8) c.classList.add('checklist-short');
    });
  }

  window.PagedConfig = {
    auto: true,
    before: () => {
      const root = document.querySelector('.manual-body');
      if (!root) return;
      unwrapCompact(root);
      splitLongTables(root);
      splitLongSteps(root);
      keepHeadingsWithContent(root);
      markShortTables(root);
      markShortChecklists(root);
    },
    after: () => {
      if (document.body.classList.contains('chapter-break')) {
        document.querySelectorAll('.pagedjs_page').forEach((pg) => {
          if (pg.querySelector('h1.chapter-title')) pg.classList.add('chapter-opener');
        });
      }
      window.__pagedDone = true;
    },
  };
})();
