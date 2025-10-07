document.addEventListener("DOMContentLoaded", function () {
  const mainContent = document.querySelector("main");
  mainContent.style.opacity = "0"; // Hide main content initially

  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    gsap.to(loader, {
      opacity: 0,
      duration: 0.8,
      onComplete: () => {
        loader.style.display = "none";
        // Animate main content in
        gsap.to(mainContent, { opacity: 1, duration: 1.8 });
        // Trigger hero animation after load
        gsap.from(".hero-element", {
          duration: 1,
          y: 50,
          opacity: 0,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.2,
        });
      },
    });
  });

  // GSAP and ScrollTrigger setup
  gsap.registerPlugin(ScrollTrigger);

  // --- Hamburger Menu ---
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    mobileMenu.classList.toggle("hidden");
    document.body.style.overflow = mobileMenu.classList.contains("hidden")
      ? ""
      : "hidden";
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburgerBtn.classList.remove("active");
      mobileMenu.classList.add("hidden");
      document.body.style.overflow = "";
    });
  });

  // --- GSAP Scroll Animations ---
  gsap.utils.toArray(".section-header").forEach((header) => {
    ScrollTrigger.create({
      trigger: header,
      start: "top 85%",
      onEnter: () => header.classList.add("animate"),
    });
  });

  gsap.from(".about-text", {
    scrollTrigger: { trigger: "#about", start: "top 70%" },
    duration: 1,
    y: 30,
    opacity: 0,
    stagger: 0.3,
    ease: "power3.out",
  });

  gsap.from(".skill-card", {
    scrollTrigger: {
      trigger: "#skills",
      start: "top 70%",
      toggleActions: "play none none none",
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    ease: "power3.out",
  });

  gsap.utils.toArray(".project-card").forEach((card) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power3.out",
    });
  });

  gsap.from(".education-item", {
    scrollTrigger: { trigger: "#education", start: "top 85%" },
    duration: 1,
    opacity: 0,
    x: -30,
    stagger: 0.2,
    ease: "power3.out",
  });

  gsap.from("#contact .custom-card", {
    scrollTrigger: { trigger: "#contact", start: "top 80%" },
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out",
  });

  // Animate background shapes on scroll
  gsap.to(".shape1", {
    scrollTrigger: {
      scrub: 1,
    },
    x: 200,
    y: 100,
    scale: 1.2,
  });
  gsap.to(".shape2", {
    scrollTrigger: {
      scrub: 1,
    },
    x: -150,
    y: -100,
    scale: 0.8,
  });
});
