const menu = document.getElementById('menu');
const nav = document.querySelector('.nav');
 
// const toggleNavbar = () =>{
//  nav.classList.toggle('active');
//  menu.classList.toggle('fa-xmark');
// };
// menu.addEventListener('click', () => toggleNavbar());

menu.onclick = () =>{
  menu.classList.toggle('fa-xmark');
  nav.classList.toggle('active')
}