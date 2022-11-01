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

//! counter

let counterDaysLeft = document.querySelector('#counterDaysLeft');
let counterHoursLeft = document.querySelector('#counterHoursLeft');
let counterMinsLeft = document.querySelector('#counterMinsLeft');
let counterSecsLeft = document.querySelector('#counterSecsLeft');

function formatCounter(num) {
   if (num < 10){
      return `0${num}`
   } else {
      return num;
   }
}


let counterInterval = setInterval(() => {
  let today = Date.now();
  let offerExpire = Date.parse("05/16/2023");
  let secondsToExpireDate = Math.floor((offerExpire - today) / 1000);

  let daysLeft = Math.floor(secondsToExpireDate / 24 / 60 / 60);
  let hoursLeftInSec = Math.floor(secondsToExpireDate - daysLeft * 86400);
  let hoursLeft = Math.floor(hoursLeftInSec / 3600);
  let minsLeftInSec = Math.floor(hoursLeftInSec - hoursLeft * 3600);
  let minsLeft = Math.floor(minsLeftInSec / 60);
  let secondsLeft = Math.floor(secondsToExpireDate % 60);
  
  counterDaysLeft.innerHTML = formatCounter(daysLeft);
  counterHoursLeft.innerHTML = formatCounter(hoursLeft);
  counterMinsLeft.innerHTML = formatCounter(minsLeft);
  counterSecsLeft.innerHTML = formatCounter(secondsLeft);
}, 1000);
