const menuItems = document.querySelectorAll('#link')
const btnContato = document.querySelector('#btn-contato-hero')
const btnSobre = document.querySelector('#btn-sobre-hero')
const btnSwiper = document.querySelectorAll('.btn-swiper')
const items = [...btnSwiper, ...menuItems, btnContato, btnSobre]

items.forEach(item =>{
    item.addEventListener('click', smoothClick)
})

function smoothClick(e){
    e.preventDefault()
    const el = e.target

    let id;
    if(el.getAttribute('href')){
        id = el.getAttribute('href')
    }else{
        id = el.getAttribute('data')
    }
    const section = document.querySelector(id).offsetTop

    window.scroll({
        top: section - 20,
        behavior: 'smooth'
    })
}  
