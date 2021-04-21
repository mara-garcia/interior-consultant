const openNav = document.querySelector('.btn-open-nav')
const closeNav = document.querySelector('.btn-close-nav')
const nav = document.querySelector('.nav-bar')

closeNav.addEventListener('click', () => {
    nav.classList.remove('nav-open')
})

openNav.addEventListener('click', () => {
    nav.classList.add('nav-open')
})