/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cookiesJS": function() { return /* binding */ cookiesJS; }
/* harmony export */ });
var myStorage = window.localStorage;
var cookies = document.querySelector(".cookies");
var cookiesButton = document.querySelector("#cookies-button");
var cookiesOuter = document.querySelector(".cookies-outer-container");
var cookiesJS = function cookiesJS() {
  //re-activate when switch back to the app js file after testing
  //const cookiesJS = () => { // this line is for testing only
  document.addEventListener("DOMContentLoaded", function () {
    var cookiesSaved = localStorage.getItem('cookiesAccepted'); //Checks if cookies are saved. Decides whether to display the cookies popup or not.

    if (cookiesSaved === 'yes') {
      cookies.style.display = "none";
      cookiesOuter.style.display = "none"; //console.log("cookies already accepted"); //for testing purposes
    } else {
      cookies.style.display = "block";
      cookiesOuter.style.display = "block"; //"flex" caused issues in mobile as need the ability to scroll
      //console.log("user needs to accept cookies"); //for testing purposes

      cookiesOuter.style.overflowY = "auto";
    }
  }); //when cookies are accepted by the user

  cookiesButton.addEventListener('click', function () {
    //accesses the current domain's local Storage object and adds a data item to it.
    myStorage.setItem('cookiesAccepted', 'yes'); //console.log('cookies accepted'); //for testing purposes
    //hides the popup

    cookies.style.display = "none";
    cookiesOuter.style.overflowY = "hidden";
    cookiesOuter.style.display = "none";
  });
}; //cookiesJS(); for when testing this as a separate file

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchbarJS": function() { return /* binding */ searchbarJS; }
/* harmony export */ });
var searchBar = document.querySelector("#search-bar");
var searchButton = document.querySelector("#submit");
var searchInput = document.querySelector("#search-bar-input");
var supportButton = document.querySelector("#support-button");
var contactButton = document.querySelector("#contact-button");
var searchbarJS = function searchbarJS() {
  //re-activate when switch back to the app js file after testing
  //const searchbarJS = () => {    // this line is for testing only
  searchButton.addEventListener('click', function () {
    searchToggle();
  });

  var searchToggle = function searchToggle() {
    supportButton.classList.toggle("toggle-hide"); //displays/hides the button

    contactButton.classList.toggle("toggle-hide"); //displays/hides the button

    searchBar.classList.toggle("toggle-search-width"); //expands the width of the searchbar container 

    searchInput.classList.toggle("toggle-hide"); //displays/hides the search input
  };
}; //searchbarJS(); for testing purposes only - this breaks it if it's set to export.

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stickyHeader": function() { return /* binding */ stickyHeader; }
/* harmony export */ });
//currently the related css can be found in js.scss, under STICKY HEADER
var header = document.querySelector("header"); //const body = document.querySelector("body"); //not currently used

var bodyCont = document.querySelector(".body-container"); //let scrollbarWidth = bodyCont.offsetWidth - bodyCont.clientWidth;
//header.style.width = "100vh" - scrollbarWidth; 
// console.log(`The bodyCont width is ${bodyCont.clientWidth}`);
// header.style.width = bodyCont.clientWidth;

var stickyHeader = function stickyHeader() {
  //re-activate when switch back to the app js file after testing
  //const stickyHeader = () => { // this line is for testing only
  //when the body content is scrolls the sticky function is run
  bodyCont.onscroll = function () {
    sticky();
  };

  var previous = 0; //this is the previous value of scrolltop. It is used to compare with the new value of scrolltop.

  function sticky() {
    //compares the current value of scrolltop with the previous value of scrolltop to determine the scroll direction.
    //Scrolling down - hide the top nav
    if (bodyCont.scrollTop > 50 && bodyCont.scrollTop > previous) {
      header.classList.remove("nav-show");
      header.classList.add("nav-hide");
    } //if there is no change - i.e. the burger menu is open
    // else if (bodyCont.scrollTop === previous){
    //   if () {
    //   }
    // }
    //Scrolling up - display the top nav
    else {
        header.classList.remove("nav-hide");
        header.classList.add("nav-show"); //stickybits(document.querySelector("header")); //Plugin I tried to help with IE - doesn't work
        //Stickyfill.add(header); //Plugin I tried to help with IE - doesn't work
      } //set the current value as the new previous value so that it can be used in the next comparison.


    previous = bodyCont.scrollTop;
  }
}; //stickyHeader(); for when testing this as a separate file only

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "burgerMenuJS": function() { return /* binding */ burgerMenuJS; }
/* harmony export */ });
//Used this page to learn how to push the content offscreen 
// https://www.w3schools.com/howto/howto_js_off-canvas.asp
var menuButton = document.querySelector("#menu"); //const burgerMenu = document.querySelector(".burger-menu"); //not needed currently, but left it here just in case

var burgerMenuCont = document.querySelector(".burger-menu-container");
var bodyCont = document.querySelector(".body-container");
var menuOverlay = document.querySelector(".menu-open-overlay");
var header = document.querySelector("header");
var burgerMenuJS = function burgerMenuJS() {
  //re-activate when switch back to the app js file after testing
  //const burgerMenuJS = () => { // this line is for testing only
  document.addEventListener('DOMContentLoaded', function () {
    closeNav();
  }); //When the burger menu icon is clicked the side menu is revealed

  menuButton.addEventListener('click', function () {
    openNav();
  }); //when the overlay over the main page content is clicked the side menu is hidden.

  menuOverlay.addEventListener('click', function () {
    closeNav();
  }); //is the menu open

  var menuOpen = false; //When the menu is open and the page is resized, this updates the distance the page content translates to the left

  window.addEventListener('resize', function () {
    //for wide screens with the menu open translate the page content by the correct distance
    if (window.matchMedia('(min-width: 993px)').matches && menuOpen === true) {
      bodyCont.style.transform = "translateX(-350px)";
      menuOverlay.style.transform = "translateX(-350px)";
      bodyCont.style.transition = "none";
      menuOverlay.style.transition = "none";
      header.style.transition = "none"; //for small screens with the menu open translate the page content by the correct distance
    } else if (menuOpen === true) {
      //small screens
      bodyCont.style.transform = "translateX(-270px)";
      menuOverlay.style.transform = "translateX(-270px)";
      bodyCont.style.transition = "none";
      menuOverlay.style.transition = "none";
      header.style.transition = "none"; //when the menu is closed and resized, this avoids part of the menu displaying unintentionally due to the transition time
    } else {
      bodyCont.style.transition = "none";
      menuOverlay.style.transition = "none";
      header.style.transition = "none";
    }
  }); //pushes the page content to the left, revealing the sidebar below

  var openNav = function openNav() {
    burgerMenuCont.style.overflowY = "scroll"; //adds menu scroll

    menuOverlay.style.backgroundColor = "rgba(0,0,0, 0.4)";
    menuOverlay.style.zIndex = "800"; //makes the overlay cover the main page content, adding the semi-transparent layer and preventing the main content from being scrolled or clicked on.

    bodyCont.style.transition = "all .5s ease-out";
    menuOverlay.style.transition = "all .5s ease-out";
    header.style.transition = "all .5s ease-out"; //header.style.paddingTop = bodyCont.scrollTop;

    if (window.matchMedia('(min-width: 993px)').matches) {
      //wide screens
      bodyCont.style.transform = "translateX(-350px)";
      menuOverlay.style.transform = "translateX(-350px)";
      header.style.transform = "translateX(-350px)";
    } else {
      //small screens
      bodyCont.style.transform = "translateX(-270px)";
      menuOverlay.style.transform = "translateX(-270px)";
      header.style.transform = "translateX(-270px)";
    }

    menuOpen = true;
  }; //moves the page content back to the right, covering the sidebar


  var closeNav = function closeNav() {
    bodyCont.style.transform = "none"; //IMPORTANT - has to be set to none otherwise it interferes with the position:fixed needed for the sticky header. It's a weird quirk - if the element you want to position has any ancestor with a transform property it won't position correctly.

    header.style.transform = "none"; //just in case the note above impacts on this too

    menuOverlay.style.transform = "translateX(0px)";
    menuOverlay.style.backgroundColor = "rgba(0,0,0, 0)";
    menuOverlay.style.zIndex = "0";
    bodyCont.style.transition = "all .5s ease-out";
    menuOverlay.style.transition = "all .5s ease-out";
    setTimeout(function () {
      burgerMenuCont.scrollTop = 0;
    }, 600);
    menuOpen = false;
  };
}; //burgerMenuJS(); //for use when testing this as a separate file

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cookies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _searchbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _sticky_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _burger_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
//This file imports all of my other JS files
//jQuery and plugins are separate to avoid any potential conflicts/issues.



 //import stickybits from "stickybits"

var app = function app() {
  (0,_burger_menu_js__WEBPACK_IMPORTED_MODULE_3__.burgerMenuJS)();
  (0,_cookies_js__WEBPACK_IMPORTED_MODULE_0__.cookiesJS)();
  (0,_sticky_header_js__WEBPACK_IMPORTED_MODULE_2__.stickyHeader)();
  (0,_searchbar_js__WEBPACK_IMPORTED_MODULE_1__.searchbarJS)();
};

app();
var bodyContWidth = document.querySelector(".body-container").clientWidth;
console.log("The bodyCont width is ".concat(bodyContWidth));
document.querySelector("header").style.width = "".concat(bodyContWidth, "px");
console.log("The header width is ".concat(bodyContWidth)); //stickybits(document.querySelector("header"), { scrollEl: document.querySelector(".body-container") });
}();
/******/ })()
;