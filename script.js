const navbarWrapper = document.querySelector('#navbarWrapper');
const btnToggleSearch = document.querySelector('#btnToggleSearch');
const searchWrapper = document.querySelector('#searchWrapper');
const btnCloseSearch = document.querySelector('#btnCloseSearch');

window.addEventListener('scroll', () => {
   if (window.scrollY > 1){
      navbarWrapper.classList.add('scrolled')
   } else {
      navbarWrapper.classList.remove('scrolled')
   }
})

btnToggleSearch.addEventListener('click', () => {
   searchWrapper.classList.toggle('closed')
})

btnCloseSearch.addEventListener('click', () => {
   searchWrapper.classList.toggle('closed')
})

const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   slidesPerView: 1,
   spaceBetween: 30,
   breakpoints: {
      640: {
         slidesPerView: 1,
         spaceBetween: 10,
      },
      768: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      1024: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
   },

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});