const toggleButton = document.querySelector('.toggle-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menu = document.querySelector('.menu')
const btnCLose = document.querySelector('.btn-close')
const menuLinks =document.querySelectorAll('.partnership-programs__nav-link')

function onHandleToggleMenu () {
    toggleButton.addEventListener('click',(e)=>{
        mobileMenu.classList.toggle('is-active')
        menu.classList.toggle('is-active')
    })

    menu.addEventListener('click',(e)=>{
    
        const isMenuClicked = mobileMenu.contains(e.target);
        console.log(isMenuClicked)

        if(!isMenuClicked) {
            menu.classList.remove('is-active')
        }
     
    })

    btnCLose.addEventListener('click',()=>{
        menu.classList.remove('is-active')
    })

    menuLinks.forEach( el => el.addEventListener('click',()=>{
        menu.classList.remove('is-active')
    }))


}

onHandleToggleMenu ()