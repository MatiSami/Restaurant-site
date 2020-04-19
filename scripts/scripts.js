
const bars = document.getElementsByClassName('bar')
const menu = document.getElementById('menu-mobile')
const mobileMenu = document.getElementById("mobile-nav")
const menuLinks = document.getElementsByClassName('mobile-nav-element')

function myFunction(x) {
    x.classList.toggle("change");
  }

Array.from(menuLinks).forEach(element => {
  element.addEventListener("click", () => {
  myFunction(menu)
});
}); 


$('#mobile-nav').sliiide({place: 'left', toggle: '#menu-mobile', body_slide: false, auto_close: true});