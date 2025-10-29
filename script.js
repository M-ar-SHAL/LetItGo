// Simple interactivity (you can expand later)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    alert(`You clicked on ${card.textContent} category!`);
  });
});

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    const targetId = link.getAttribute('href');
    if (targetId.startsWith('#')) {
      event.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');

searchBtn.addEventListener('click', () => {
  searchInput.classList.toggle('active');
  if (searchInput.classList.contains('active')) {
    searchInput.focus();
  }
});
AOS.init({
  duration: 1000,  // smooth animation duration
  once: true       // animate once per scroll
});
const countryCards = document.querySelectorAll(".country-card");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);

countryCards.forEach(card => {
  appearOnScroll.observe(card);
});



