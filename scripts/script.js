const logo = document.getElementsByClassName('nav__image-container__image')[0];
const hamburgerMenu = document.getElementsByClassName('nav__hamburger-menu__hamburger')[0];
const navCtrOne = document.getElementsByClassName('nav__container-one')[0];
const navCtrTwo = document.getElementsByClassName('nav__container-two')[0];
const navContainer = document.getElementsByClassName('container')[0];
const body = document.body;


logo.addEventListener("click",()=>{window.location='index.html';}) 
hamburgerMenu.addEventListener("click", ()=>{

    if(navContainer.classList.contains("container--visible")) {
        setTimeout( () => {navContainer.style.zIndex = -10}, 1000)
    }
    else {{navContainer.style.zIndex = 10}}

    navCtrOne.classList.toggle("nav__container-one--visible");
    navCtrTwo.classList.toggle("nav__container-two--visible");
    navContainer.classList.toggle("container--visible");
    body.classList.toggle("body--prevent-scroll");
})