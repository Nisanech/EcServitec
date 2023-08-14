//- Swiper efecto cubo
let swiper = new Swiper(".swiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94
  },
  pagination: {
    el: ".swiper-pagination"
  },
  autoplay: {
    delay: 6000
  },
  loop: true
}) 
