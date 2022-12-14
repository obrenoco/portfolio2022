gsap.registerPlugin(ScrollTrigger);
gsap.to("progress", {
  value: 100,
  ease: "none",
  scrollTrigger: { scrub: 0.3, marker: true },
});

// let markee = document.querySelector("#fake-markee");

// const tl = gsap.timeline();
// tl.to("#fake-markee", { x: -2000, duration: 60, repeat: -1, ease: "linear" });

// markee.addEventListener("mouseover", () => tl.pause());
// markee.addEventListener("mouseleave", () => tl.play());

// gsap.fromTo(
//   "#first, #second",
//   { backdropFilter: "brightness(.9)" },
//   {
//     backdropFilter: "brightness(0)",
//     ease: "none",
//     scrollTrigger: {
//       start: "top bottom",
//       trigger: "#second",
//       markers: true,
//       end: "top 80%",
//       scrub: true,
//     },
//   }
// );

// gsap.to("#first-block", {
//   y: -200,
//   scrollTrigger: {
//     start: "top bottom",
//     trigger: "#second",
//     end: "top top",
//     scrub: 1.5,
//   },
// });
