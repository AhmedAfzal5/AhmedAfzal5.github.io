// Dark Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.body.classList.add(currentTheme);
  if (currentTheme === 'dark-mode') {
    themeToggleBtn.innerText = 'Light Mode';
  }
}

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  let theme = 'light-mode';
  if (document.body.classList.contains('dark-mode')) {
    theme = 'dark-mode';
    themeToggleBtn.innerText = 'Light Mode';
  } else {
    themeToggleBtn.innerText = 'Dark Mode';
  }
  localStorage.setItem('theme', theme);
});

// Smooth Scrolling for Navbar Links
const navbarLinks = document.querySelectorAll('.navbar a[href^="#"]');
navbarLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 50,
      behavior: 'smooth'
    });
  });
});

// Simple Form Validation
const contactForm = document.querySelector('.contact form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const formMessage = document.createElement('p');
formMessage.classList.add('form-message');
contactForm.appendChild(formMessage);

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    formMessage.innerText = 'Please fill in all fields.';
    formMessage.style.color = 'red';
  } else if (!validateEmail(emailInput.value)) {
    formMessage.innerText = 'Please enter a valid email.';
    formMessage.style.color = 'red';
  } else {
    formMessage.innerText = 'Form submitted successfully!';
    formMessage.style.color = 'green';
    contactForm.reset();
  }
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

// Scroll Back to Top Button
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
