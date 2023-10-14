
const nav = document.querySelector('.nav')
const barOpen = document.querySelector('.bar')
const navClose = document.querySelector('.nav-close')
const imgClose = document.querySelector('img')

barOpen.addEventListener('click', ()=> {
    nav.classList.add('active')
})

navClose.addEventListener('click', ()=> {
    nav.classList.remove('active')
})

imgClose.addEventListener('click', ()=> {
    nav.classList.remove('active')
})