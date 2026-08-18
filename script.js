// ===== Travel Recommendation - Search & Clear =====
// Filters the destination cards on the Home page based on the search input.

document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const clearBtn = document.getElementById('clearBtn');
  const cards = document.querySelectorAll('.card');

  function runSearch() {
    const term = searchInput.value.trim().toLowerCase();

    if (term === '') {
      cards.forEach((card) => card.classList.remove('hidden'));
      return;
    }

    cards.forEach((card) => {
      const name = card.getAttribute('data-name').toLowerCase();
      const matches = name.includes(term);
      card.classList.toggle('hidden', !matches);
    });
  }

  function clearSearch() {
    searchInput.value = '';
    cards.forEach((card) => card.classList.remove('hidden'));
    searchInput.focus();
  }

  if (searchBtn) searchBtn.addEventListener('click', runSearch);
  if (clearBtn) clearBtn.addEventListener('click', clearSearch);

  // Allow pressing Enter in the search box to trigger search
  if (searchInput) {
    searchInput.addEventListener('keyup', function (e) {
      if (e.key === 'Enter') runSearch();
    });
  }
});
