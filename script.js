// gsap.to(".star-icon", {
//   y: 100,
//   rotation: 360,
//   stagger: { each: 1, delay: 0.2 },
//   //   repeat: -1,
//   //   yoyo: true,
// })

var timeline = gsap.timeline()

timeline
  .to(".star-icon .1", { duration: 1, y: 100 })
  .to(".2", { duration: 1, y: 100 }, "<")
