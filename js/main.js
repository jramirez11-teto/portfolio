const themeButton = document.querySelector('.theme-toggle');

function initializeTheme() {
  const deviceTheme = window.matchMedia('(prefers-color-scheme: dark)');
  let savedTheme = null;

  // Storage may be blocked, including in some direct-file browser sessions.
  try {
    savedTheme = localStorage.getItem('portfolio-theme');
  } catch {
    savedTheme = null;
  }
  if (savedTheme !== 'light' && savedTheme !== 'dark') savedTheme = null;

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    if (themeButton) themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
  }

  applyTheme(savedTheme || (deviceTheme.matches ? 'dark' : 'light'));
  if (themeButton) {
    themeButton.hidden = false;

    themeButton.addEventListener('click', () => {
      savedTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(savedTheme);
      try {
        localStorage.setItem('portfolio-theme', savedTheme);
      } catch {
        // The toggle still works for this page when storage is unavailable.
      }
    });
  }

  deviceTheme.addEventListener('change', () => {
    if (!savedTheme) applyTheme(deviceTheme.matches ? 'dark' : 'light');
  });
}

initializeTheme();

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-navigation');

if (menuButton && navigation) {
  const phoneLayout = window.matchMedia('(max-width: 47.999rem)');

  function setMenuOpen(isOpen) {
    menuButton.setAttribute('aria-expanded', String(isOpen));
    navigation.hidden = phoneLayout.matches && !isOpen;
  }

  function updateNavigation() {
    // Move focus before hiding a control or a focused navigation link.
    if (!phoneLayout.matches && document.activeElement === menuButton) {
      navigation.querySelector('a').focus();
    }
    if (phoneLayout.matches && navigation.contains(document.activeElement)) {
      menuButton.hidden = false;
      menuButton.focus();
    }
    menuButton.hidden = !phoneLayout.matches;
    setMenuOpen(false);
  }

  menuButton.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && phoneLayout.matches &&
        menuButton.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  phoneLayout.addEventListener('change', updateNavigation);
  updateNavigation();
}

const projectFilters = document.querySelector('.project-filters');

if (projectFilters) {
  const filterButtons = projectFilters.querySelectorAll('button');
  const projectCards = document.querySelectorAll('.project-card');
  const filterStatus = document.querySelector('#filter-status');
  projectFilters.hidden = false;

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.dataset.filter;
      let visibleCount = 0;

      projectCards.forEach((card) => {
        card.hidden = category !== 'all' && card.dataset.category !== category;
        if (!card.hidden) visibleCount += 1;
      });

      filterButtons.forEach((filterButton) => {
        filterButton.setAttribute('aria-pressed', String(filterButton === button));
      });
      if (filterStatus) {
        filterStatus.textContent = `${visibleCount} ${visibleCount === 1 ? 'project' : 'projects'} shown.`;
      }
    });
  });
}
