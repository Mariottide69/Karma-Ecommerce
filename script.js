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