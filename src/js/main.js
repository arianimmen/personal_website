function scrollToSection(e, target) {
  e.preventDefault();
  gsap.to(window, {
    duration: 1.2, // seconds
    scrollTo: target,
    ease: "power2.out",
  });
}
