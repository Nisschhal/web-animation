const tl = gsap.timeline({ default: { duration: 0.75, ease: "power1.out" } })
console.log(tl)
tl.fromTo(
  ".container",
  { scale: 0 },
  { scale: 1, ease: "elastic.out(1,0.4)", duration: 1.5 }
)
tl.fromTo(
  ".cookie-container",
  { opcaity: 0, x: -200, rotation: -50 },
  { opcaity: 1, x: 0, rotation: 0 },
  "<50%"
)
tl.fromTo(".text-container", { x: 500 }, { x: 0 }, "<")
let btn1El = document.getElementById("btn1")
let btn2El = document.getElementById("btn2")

btn1El.addEventListener("click", () => {
  console.log("loc")
  gsap.to(".container", { y: 100, opacity: 0 })
})
btn2El.addEventListener("click", () => {
  console.log("loc")
  gsap.fromTo(".flat", {}, { y: -100, opacity: 0, display: "none" })
})
