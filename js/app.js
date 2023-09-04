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

//- Cambiar banner footer
function cambiarBannerFooter() {
  //* Detecta el ancho de la pantalla 
  const anchoPantalla = window.innerWidth

  //* Selecciona el elemento que contiene la imagen 
  const bannerImg = document.getElementById('bannerFooter')
  const bannerImgInt = document.getElementById("bannerFooterInt");

  // console.log(anchoPantalla, bannerImg);

  if (anchoPantalla < 768) {
    bannerImg.src = 'assets/img/banners/banner-footer-movil.jpg'
    bannerImgInt.src = '../assets/img/banners/banner-footer-movil.jpg'
  } else {
    bannerImg.src = "assets/img/banners/banner-footer.jpg";
    bannerImgInt.src = "../assets/img/banners/banner-footer.jpg";
  }
}

function botonesProductos() {
  const anchoPantalla = window.innerWidth

  const imgBtn = document.getElementsByClassName('btn-img');
  console.log(imgBtn);
}

//* Llama a la función cuando se carga la página 
window.onload = cambiarBannerFooter

//* Llama a la función cuando cambia el tamaño de la ventana 
window.addEventListener('resize', cambiarBannerFooter)