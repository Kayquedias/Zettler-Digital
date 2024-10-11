document.addEventListener("DOMContentLoaded", function () {
  // DROPDOWN LOGIC 
  const dropdownTrigger = document.querySelector(".dropdown-trigger");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdownTrigger.addEventListener("click", function (e) {
    e.preventDefault();
    dropdownContent.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (!dropdownContent.contains(e.target) && !dropdownTrigger.contains(e.target)) {
      dropdownContent.classList.remove("active");
    }
  });

  dropdownContent.querySelectorAll("a").forEach(item => {
    item.addEventListener("click", function () {
      dropdownContent.classList.remove("active");
    });
  });

  // MOBILE MENU LOGIC
  const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
  const mobileMenu = document.querySelector('.nav-mobile');
  const mobileLinks = document.querySelectorAll('.nav-list-mobile li a');
  const menuOverlay = document.querySelector('.menu-overlay');

  mobileMenuIcon.addEventListener('click', function () {
    menuOverlay.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  menuOverlay.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', function () {
      mobileMenu.classList.remove('active');
      menuBars.forEach(bar => {
        bar.classList.remove('active');
      });
    });
  });

  document.addEventListener('click', function (event) {
    if (!mobileMenuIcon.contains(event.target) && !mobileMenu.contains(event.target)) {
      mobileMenu.classList.remove('active');
      menuBars.forEach(bar => {
        bar.classList.remove('active');
      });
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      mobileMenu.classList.remove('active');
      menuOverlay.classList.remove('active');
    }
  });
  

  // HEADER DISPLAY WHEN SCROLLING LOGIC
  let lastScrollPosition = 0;
  const header = document.querySelector('.header');

  header.classList.add('show');

  window.addEventListener('scroll', function () {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > 50) {
      if (currentScrollPosition > lastScrollPosition) {
        header.classList.remove('show');
        mobileMenu.classList.remove('active');
      } else {
        header.classList.add('show');
      }
    }

    lastScrollPosition = currentScrollPosition;
  });
});
