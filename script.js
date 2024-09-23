// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
  const scrollDistance = document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollDistance / docHeight) * 100;
  document.getElementById('progress-bar').style.width = `${scrollPercentage}%`;
});

// Filtering Projects
const filterButtons = document.querySelectorAll('.filter-options button');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    projectItems.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Animated Scroll on Projects
const animatedElements = document.querySelectorAll('.animated-element');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
});

animatedElements.forEach(el => observer.observe(el));

// Contact Form Submission using EmailJS
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(function(response) {
      formMessage.innerText = 'Message sent successfully!';
      formMessage.style.color = 'green';
    }, function(error) {
      formMessage.innerText = 'Failed to send message. Please try again.';
      formMessage.style.color = 'red';
    });

  contactForm.reset();
});

// Resume Accordion
const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const details = btn.parentElement.nextElementSibling;
    const isOpen = details.style.display === 'block';
    details.style.display = isOpen ? 'none' : 'block';
    btn.textContent = isOpen ? '+' : '-';
  });
});
