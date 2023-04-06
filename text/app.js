const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power3.out" } })

tl.fromTo(
  ".hero-section",
  { scale: 1.3, borderRadius: "0rem" },
  {
    scale: 1,
    borderRadius: "2rem",
    delay: 0.3,
    duration: 2.5,
    ease: "elastic.out(1.5, 1)",
  }
)

tl.fromTo(".cta1", { x: "100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%")
tl.fromTo(".cta3", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%")
tl.fromTo(".cta2", { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%")
tl.fromTo(".cta4", { x: "100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%")
tl.fromTo(".cta6", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%")
tl.fromTo(".cta5", { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%")
tl.fromTo(".cta-btn", { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, "<")

const logoEl = document.querySelector(".logo")
const letters = logoEl.textContent.split("")
console.log(letters)
logoEl.textContent = ""

// ANIMATING THE LETTER IN LOGO
// looping through each letter with span wrapper and apending into the logo el
letters.forEach((letter) => {
  logoEl.innerHTML += `<span class="letter">${letter}</span>`
})
// setting the span wrapper to inline-block as it won't allow transition of translate
gsap.set(".letter", { display: "inline-block" })
// adding the animation
gsap.fromTo(
  ".letter",
  { y: "100%", opacity: 0 },
  { y: 0, opacity: 1, stagger: 0.05, delay: 1.5, ease: "back.out(3)" }
)
