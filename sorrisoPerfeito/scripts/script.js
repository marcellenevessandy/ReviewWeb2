// menu
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./assets/img/menu.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./assets/img/fechar.png";
    }
}

function closeMenuOnOptionClick() {
    const menuItems = document.querySelectorAll('.mobile-menu .nav-item a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth < 600) {
                menuShow(); // Fecha o menu
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', closeMenuOnOptionClick);

const header = document.querySelector('header');
const headerOffset = header.offsetTop;

window.addEventListener('scroll', function() {
    if (window.pageYOffset > headerOffset) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
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


/* Slide automático
let cont = 1;
document.getElementById('radio1').checked = true;

setInterval(() => {
    proximaImg();
}, 5000);

function proximaImg() {
    cont = cont < 3 ? cont + 1 : 1;
    document.getElementById('radio' + cont).checked = true;
}
*/