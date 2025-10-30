// Simple interactivity (you can expand later)
// document.querySelectorAll('.card').forEach(card => {
//   card.addEventListener('click', () => {
//     alert(`You clicked on ${card.textContent} category!`);
//   });
// });

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

document.getElementById("logo").addEventListener("click", function () {
  window.location.href = "index.html"; // redirects to home page
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

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveLink() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  // Detect if user reached bottom → highlight contact
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
    current = "contact";
  }

  // Default to home if nothing else is active
  if (current === "") {
    current = "home";
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
}

// Run once on load and then every scroll
window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);


window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  // Extra condition: if we're at the very bottom, highlight contact
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
    current = "contact";
  }

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Redirect to signup page
document.getElementById("signup-btn").addEventListener("click", function() {
  window.location.href = "signup.html";
});
// Redirect to signin page
document.getElementById("signin-btn").addEventListener("click", function() {
  window.location.href = "signin.html";
});

// Category page redirection
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const category = card.getAttribute("data-category");
    window.location.href = `${category}.html`;
  });
});






