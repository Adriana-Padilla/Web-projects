const menu = document.querySelector('.burguer');
const navbar = document.querySelector('.navbar');

document.addEventListener('DOMContentLoaded',()=>{
events();
})
const events = () =>{
    menu.addEventListener('click', openMenu);
}
const openMenu = () =>{
    navbar.classList.remove('hide');
    closeButton();

}

const closeButton = () =>{
    const btnClose = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('full-screen');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.full-screen').length > 0) return;
    body.appendChild(overlay);
    btnClose.textContent = 'x'
    btnClose.classList.add('btnClose');
   /*--THIS OPTION IS FOR HIDE THE x IN THE CODE IN CONSOLE
    while(navbar.children[4]){
        navbar.removeChild(navbar.children[4]);
    }*/
    navbar.appendChild(btnClose)
    closeMenu(btnClose, overlay);
}

const closeMenu = (button,overlay) =>{
     button.addEventListener('click', () =>{
        navbar.classList.add('hide');
        overlay.remove();
        button.remove();
     });

     overlay.onclick = function (){
        overlay.remove();
        navbar.classList.add('hide');
        button.remove();
     }
}