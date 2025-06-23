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
function init_navegacaoTab() {
    
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
} init_navegacaoTab() 

function init_modal() {
    if (window.innerWidth > 900) return;

    const habilidadesModal = document.querySelectorAll(".js-tabmenu li");
    const habilidadesModalContent = document.querySelectorAll(".js-modal-habilidade");
    const botaoFecharModal = document.querySelectorAll(".js-modal-habilidades .js-modal-habilidade div button"
    );

    function ativarModal(index) {
        habilidadesModalContent.forEach((modalContent) => {
            modalContent.classList.remove('ativo')
        });
        habilidadesModal.forEach((modalIcone) => {
            modalIcone.classList.remove('selecao-ativo')
        });
        habilidadesModal[index].classList.add("selecao-ativo");
        habilidadesModalContent[index].classList.add("ativo");
    } 

    function fecharModal() {
        habilidadesModalContent.forEach((modalContent) => {
            modalContent.classList.remove("ativo");
        });
    }

    habilidadesModal.forEach((itemModal, index) => {
        itemModal.addEventListener('click', function() {
            ativarModal(index);
        })
    })

    botaoFecharModal.forEach((itemModal, index) => {
        itemModal.addEventListener("click", function () {
            fecharModal(index);
        });
    })
} init_modal()