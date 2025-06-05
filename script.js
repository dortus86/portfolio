//Animação Hero
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

//Manu Mobile
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

//Navegaçao em Tab - Habilidades
const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll(".js-tabcontent section");

if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo')
    tabMenu[0].classList.add('selecao-ativo')

    function activeTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove('ativo')
        })
        tabMenu.forEach((icone) => {
            icone.classList.remove('selecao-ativo')
        })
        tabMenu[index].classList.add('selecao-ativo')
        tabContent[index].classList.add('ativo')
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', function() {
            activeTab(index);
        })
    })
}
