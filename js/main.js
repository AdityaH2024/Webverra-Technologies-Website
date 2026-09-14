/**
 * WEBVERRA TECHNOLOGIES — MAIN APPLICATION SCRIPT
 * Portfolio category filtering, interactive tab controls, and site-wide utilities.
 */

document.addEventListener('DOMContentLoaded', () => {
  initPortfolioFilters();
  initCurrentYear();
});

function initPortfolioFilters() {
  const filterContainer = document.getElementById('filter-container');
  if (!filterContainer) return;

  const filterBtns = filterContainer.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.style.backgroundColor = '';
        b.style.color = '';
      });

      // Add active state to clicked button
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (category === 'all' || cardCategory === category) {
          card.style.display = 'flex';
          card.classList.add('animate-fade-in');
        } else {
          card.style.display = 'none';
          card.classList.remove('animate-fade-in');
        }
      });
    });
  });
}

function initCurrentYear() {
  const yearElements = document.querySelectorAll('.current-year');
  const year = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = year;
  });
}


/* --- Scroll Animations --- */
function initScrollAnimations() {
  const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.filter(e => e.isIntersecting).forEach(e => {
      e.target.classList.add('is-visible');
      observer.unobserve(e.target);
    });
  }, observerOptions);
  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
  });
}
document.addEventListener('DOMContentLoaded', initScrollAnimations);
