// fecha en footer
document.getElementById('anio').innerText = new Date().getFullYear();

// scroll suave para botones del menú
function scrollToSection(id){
  const el = document.querySelector(id);
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
}
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function mostrarSlide(i) {
  slides.forEach(s => s.classList.remove('activo'));
  slides[i].classList.add('activo');
}

prev.onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  mostrarSlide(index);
};

next.onclick = () => {
  index = (index + 1) % slides.length;
  mostrarSlide(index);
};

setInterval(() => {
  index = (index + 1) % slides.length;
  mostrarSlide(index);
}, 3000);

function mostrarSeccion(id) {
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('section');
    secciones.forEach(sec => sec.style.display = 'none');

    // Mostrar solo la sección seleccionada
    const seccionSeleccionada = document.getElementById(id);
    if (seccionSeleccionada) seccionSeleccionada.style.display = 'block';

    // Opcional: ocultar el hero si no es inicio
    const hero = document.querySelector('.hero');
    if(hero) hero.style.display = (id === 'inicio') ? 'flex' : 'none';
}

    


    






