"use strict";
(function ($) {
  "use strict";
  $(document).ready(function () {


  });

})(jQuery);

//Sticky Navbar
window.addEventListener("scroll", () => {
  let headerWrapper = document.querySelector(".header_wrapper");
  headerWrapper.classList.toggle("navbar-fixed", scrollY > 0);
});

//Nav Menu Resposnive
var expandButton = document.querySelectorAll(".dropdown_list");
var dropdown_items = document.querySelectorAll(".dropdown_items_area");
var dropdownIcon = document.querySelectorAll(".dropdown_icon1");
expandButton.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("open");
  });
});

//Hamburger Icon
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav_menu_area");
let headerWrapper = document.querySelector(".header_wrapper");

hamburger.addEventListener("click", mobileMenu);
function mobileMenu() {
  hamburger.classList.toggle("hamburger_active");
  navMenu.classList.toggle("navbar_active");
  headerWrapper.classList.toggle("header_color_active");
}

//Counter
let visibilityIds = ['#counters_1', '#counters_2', '#counters_3'];
let counterClass = '.counter';
let defaultSpeed = 3000;


// ScrollToUp
window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".scrolltop");
  scroll.classList.toggle("scroll_active", window.scrollY > 500);


})

function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Preloader
function preloader() {
  var pre_number = setInterval(function () {
    var pre_class = parseInt($(".preloader_number").text());
    $(".preloader_number").text((++pre_class).toString());
    if (pre_class == 100) {
      clearInterval(pre_number);
      $(".preloader_number").addClass("pre_hide");
      $(".preloader").addClass("pre_active");

    }
  })
}
preloader();


// AOS On Page Scroll JS
$(function () {
  AOS.init({
    duration: 1100,
    offest: 50,
  });
});
$(window).on('load', function () {
  AOS.refresh();
});










