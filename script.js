gsap.fromTo(
  "#first, #second",
  { backdropFilter: "brightness(.9)" },
  {
    backdropFilter: "brightness(0)",
    ease: "none",
    scrollTrigger: {
      start: "top bottom",
      trigger: "#second",
      end: "top top",
      scrub: true,
    },
  }
);

gsap.to("#first-block", {
  y: -200,
  scrollTrigger: {
    start: "top bottom",
    trigger: "#second",
    end: "top top",
    scrub: 1.5,
  },
});
