gsap.to("#upper_loader", {
  height: 0,
  duration: 2.5,
  ease: "power2.inOut",
  delay : 2
});

gsap.to("#lower_loader", {
  height: 0,
  duration: 2.5,
  ease: "power2.inOut",
  delay : 2
});

gsap.to("#loader", {
  display: "none",
  duration: 0.1,
  delay : 4.5
});

gsap.from("#nav_left", {
  marginLeft: -250,
  duration: 1.2,
  ease: "power2.inOut",
  delay : 3.5
});

gsap.from("#nav_right", {
  marginLeft: 1500,
  duration: 2,
  ease: "power2.inOut",
  delay : 3.5
});







