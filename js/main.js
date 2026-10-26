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
