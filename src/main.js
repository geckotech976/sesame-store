import './style.css'

// Add scroll effect to header
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.add('scrolled'); // keep shadow maybe?
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle logic
const mobileBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.main-nav');

mobileBtn.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});
