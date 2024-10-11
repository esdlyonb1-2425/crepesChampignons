//alert('salut')
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const liensMenu = document.querySelectorAll('.lienMenu');

burger.addEventListener('click', (e) => {
    menu.classList.toggle('reduit');
    liensMenu.forEach((lienMenu)=>{
        lienMenu.classList.toggle('cache');
    })
})