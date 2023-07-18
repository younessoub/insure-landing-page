const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-menu')
const mobileNav = document.querySelector('.mobile-nav')

hamburger.addEventListener('click', () => {
    mobileNav.style.display = 'block'
    hamburger.style.display = 'none'
    closeMenu.style.display = 'block'
})

closeMenu.addEventListener('click', () => {
    mobileNav.style.display = 'none'
    closeMenu.style.display = 'none'
    hamburger.style.display = 'block'
})
