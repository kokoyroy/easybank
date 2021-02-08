const overlay = document.querySelector('#overlay')
const menu = document.querySelector('#menu')
menu.addEventListener('click', () => {
    overlay.classList.toggle('active')
})