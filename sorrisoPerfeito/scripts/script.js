function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let icon = document.querySelector('.icon');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icon.src = "assets/img/menu.png"; // Corrected path
    } else {
        menuMobile.classList.add('open');
        icon.src = "assets/img/fechar.png"; // Corrected path
    }
}

function closeMenuOnOptionClick() {
    const menuMobile = document.querySelector('.mobile-menu');

    menuMobile.addEventListener('click', (event) => {
        if (event.target.closest('.nav-item a') && window.innerWidth < 600) {
            menuShow(); // Close the menu
        }
    });
}

document.addEventListener('DOMContentLoaded', closeMenuOnOptionClick);

const header = document.querySelector('header');
const headerOffset = header.offsetTop;

window.addEventListener('scroll', function() {
    const isScrolledPastHeader = window.pageYOffset > headerOffset;
    header.classList.toggle('scroll', isScrolledPastHeader);
    header.classList.toggle('rolagem', window.scrollY > 330);
});

//slide

var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}

//contagem
const inaugurationDate = new Date(2025, 6, 18, 22, 0, 0); // 18 de julho de 2024 às 19:00

function updateCountdown() {
    const now = new Date().getTime();
    const distance = inaugurationDate - now;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = 'Nossa loja está oficialmente inaugurada!🎉';
        clearInterval(timerInterval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();

const timerInterval = setInterval(updateCountdown, 1000);