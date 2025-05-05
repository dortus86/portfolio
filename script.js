window.addEventListener('DOMContentLoaded', () => {
    VANTA.HALO({
        el: "#fundo-vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        baseColor:   0x141d26,
        backgroundColor: 0x010816,
        amplitudeFactor: 80,
        size: 0.3
    });
})

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('ativo');
    const active = nav.classList.contains('ativo');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', "Fechar menu")
    } else {
        event.currentTarget.setAttribute("aria-label", "Abrir menu");
    }
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);