


let menu  = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {

   
    navlist.classList.toggle('active');
}

window.onscroll = () =>{
   
    navlist.classList.remove('active');
  
   
}
