// image-fallback.js — replaces broken <img> tags with initials avatars
(function () {
  var COLORS = [
    ['%23775a00', '%23ffcd4a'],
    ['%231e3a5f', 'white'],
    ['%232d4a2f', 'white'],
    ['%234a2d6b', 'white'],
    ['%238b2500', 'white'],
    ['%231a4a5f', 'white'],
    ['%23121212', '%23ffcd4a'],
  ];

  function makeAvatar(initials, colorIndex) {
    var pair = COLORS[Math.abs(colorIndex) % COLORS.length];
    var bg = pair[0];
    var fg = pair[1];
    return (
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E" +
      "%3Crect width='200' height='200' fill='" + bg + "'/%3E" +
      "%3Ctext x='100' y='130' font-size='80' text-anchor='middle' fill='" + fg + "' " +
      "font-family='Arial,sans-serif' font-weight='bold'%3E" + initials + "%3C/text%3E" +
      "%3C/svg%3E"
    );
  }

  function getInitials(alt) {
    if (!alt) return '??';
    var parts = alt.trim().split(/\s+/);
    if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    return (alt.slice(0, 2)).toUpperCase();
  }

  function attachFallback(img) {
    if (img.dataset.fallbackAttached) return;
    img.dataset.fallbackAttached = '1';
    img.addEventListener('error', function () {
      var initials = getInitials(img.alt || img.dataset.name || '');
      var colorIdx = initials.charCodeAt(0) + (initials.charCodeAt(1) || 0);
      img.src = makeAvatar(initials || '??', colorIdx);
      img.onerror = null;
    });
  }

  function init() {
    document.querySelectorAll('img').forEach(attachFallback);
    // Also watch for dynamically added images
    if (window.MutationObserver) {
      new MutationObserver(function (mutations) {
        mutations.forEach(function (m) {
          m.addedNodes.forEach(function (node) {
            if (node.nodeType !== 1) return;
            if (node.tagName === 'IMG') attachFallback(node);
            node.querySelectorAll && node.querySelectorAll('img').forEach(attachFallback);
          });
        });
      }).observe(document.body, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
