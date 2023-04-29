const btnMenu = document.querySelector('.show')
const btnMenuClose = document.querySelector('.close')
const menu = document.querySelector('.menu')

btnMenu.addEventListener('click', () =>{
    menu.classList.add('menu-mobile')
    btnMenu.style.display = 'none'
    btnMenuClose.style.display = 'block'
})

btnMenuClose.addEventListener('click', () =>{
    menu.classList.remove('menu-mobile')
    btnMenu.style.display = 'block'
    btnMenuClose.style.display = 'none'
})