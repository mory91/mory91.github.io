// Run before the stylesheet to apply the saved preference before first paint.
(() => {
  const key = 'portfolio-theme';
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  let preference = null;
  let toggle;

  const validPreference = value => value === 'light' || value === 'dark' ? value : null;
  try {
    preference = validPreference(localStorage.getItem(key));
  } catch {
    // The toggle still works when browser storage is unavailable.
  }

  function applyTheme() {
    const theme = preference || (system.matches ? 'dark' : 'light');
    root.dataset.theme = theme;
    if (themeColor) themeColor.content = theme === 'dark' ? '#1e1b19' : '#fbf5ef';
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(theme === 'dark'));
      toggle.title = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
    }
  }

  applyTheme();
  system.addEventListener('change', applyTheme);
  window.addEventListener('storage', event => {
    if (event.key !== key && event.key !== null) return;
    preference = validPreference(event.newValue);
    applyTheme();
  });

  document.addEventListener('DOMContentLoaded', () => {
    toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;
    toggle.addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme();
      try {
        localStorage.setItem(key, preference);
      } catch {
        // Preserve the choice for this visit even if it cannot be saved.
      }
    });
    applyTheme();
    toggle.hidden = false;
  }, { once: true });
})();
