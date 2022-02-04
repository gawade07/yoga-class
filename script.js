

menuBar = document.querySelector('.menu-btn');
menuClose = document.querySelector('.fas');
menuList = document.querySelector('.menu-list');


menuBar.onclick=() =>{
    menuClose.classList.toggle('fa-times');
    menuList.classList.toggle('active');
}

window.onscroll=()=>{
    menuClose.classList.remove('fa-times');
    menuList.classList.remove('active');
}