// Show Menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// Remove Menu on Link Click
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
  });
});

// Scroll Reveal Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .education__img, .contact__input", { interval: 200 });

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const statusMessage = document.getElementById("statusMessage");

  // Simulate form submission
  const isSuccess = Math.random() > 0.3;
  if (isSuccess) {
    statusMessage.textContent = "Message sent successfully!";
    statusMessage.style.color = "green";
    this.reset();
  } else {
    statusMessage.textContent = "Message failed to send. Please try again.";
    statusMessage.style.color = "red";
  }
});