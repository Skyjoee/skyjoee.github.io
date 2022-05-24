"use strict"

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu-header'),
    menuItem = document.querySelectorAll('.menu-header__links'),
    menuBurger = document.querySelector('.burger-menu-header');

    menuBurger.addEventListener('click', () => {
        menuBurger.classList.toggle('open');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menuBurger.classList.toggle('open');
            menu.classList.toggle('menu_active');
        })
    })
})

var swiper = new Swiper(".mySwiper", {
  autoHeight: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});