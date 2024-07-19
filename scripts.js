document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted!');
});

window.addEventListener('scroll', () => {
  const crawlSection = document.querySelector('.star-wars-crawl');
  const scrollPosition = window.scrollY;
  const triggerPoint = 200;

  if (scrollPosition >= triggerPoint) {
      setTimeout(() => crawlSection.classList.add('active'), 100); // 100ms delay (optional)
  } else {
      crawlSection.classList.remove('active');
  }
});