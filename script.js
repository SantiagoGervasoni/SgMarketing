

// scroll suave para botones del menú
function scrollToSection(id){
  const el = document.querySelector(id);
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
}
const slides = document.querySelectorAll('.carrusel .slide');
const prev = document.querySelector('.carrusel .prev');
const next = document.querySelector('.carrusel .next');

let index = 0;

function mostrarSlide(i) {
    slides.forEach(slide => slide.classList.remove('activo'));
    slides[i].classList.add('activo');
}

mostrarSlide(index);

prev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    mostrarSlide(index);
});

next.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
});

setInterval(() => {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
}, 3000);


function mostrarSeccion(id) {
    const seccion = document.getElementById(id);
    if (seccion) {
        seccion.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
    


    









