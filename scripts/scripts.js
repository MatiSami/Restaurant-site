const bars = document.getElementsByClassName("bar");
const menu = document.getElementById("menu-mobile");
const mobileMenu = document.getElementById("mobile-nav");
const menuLinks = document.getElementsByClassName("mobile-nav-element");
const header = document.querySelector(".page-header");

function myFunction(x) {
  x.classList.toggle("change");
}

Array.from(menuLinks).forEach((element) => {
  element.addEventListener("click", () => {
    myFunction(menu);
  });
});

$("#mobile-nav").sliiide({
  place: "left",
  toggle: "#menu-mobile",
  body_slide: false,
  auto_close: true,
  no_scroll: true,
});

window.onscroll = () => {
  // "use strict";
  if (document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 300) {
      header.classList.add("page-header--scroll");
      header.classList.remove("page-header--transparent")
  }
  else {
      header.classList.remove("page-header--scroll");
      header.classList.add("page-header--transparent")
  }
};

// window.addEventListener("scroll", () => {
//   if (
//     document.body.scrollTop >= 300 ||
//     document.documentElement.scrollTop >= 300
//   ) {
//     header.classList.add("page-header--scroll");
//   } else {
//     header.classList.remove("page-header--scroll");
//   }
// });
