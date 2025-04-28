function navigateTo(page) {
    window.location.href = page;
  }

  let menuToggle = document.getElementById('mobile-menu');
  let navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  
  