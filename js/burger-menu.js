//Used this page to learn how to push the content offscreen 
// https://www.w3schools.com/howto/howto_js_off-canvas.asp

    const menuButton = document.querySelector("#menu");
    //const burgerMenu = document.querySelector(".burger-menu"); //not needed currently, but left it here just in case
    const burgerMenuCont = document.querySelector(".burger-menu-container");
    const bodyCont = document.querySelector(".body-container");
    const menuOverlay = document.querySelector(".menu-open-overlay");

export const burgerMenuJS = () => { //re-activate when switch back to the app js file after testing
//const burgerMenuJS = () => { // this line is for testing only

    document.addEventListener('DOMContentLoaded', () => {
        closeNav();
    })

    //When the burger menu icon is clicked the side menu is revealed
    menuButton.addEventListener('click', () => {
        openNav();
    })

    //when the overlay over the main page content is clicked the side menu is hidden.
    menuOverlay.addEventListener('click', () => {
        closeNav();
    })

    //is the menu open
    let menuOpen = false;


    //When the menu is open and the page is resized, this updates the distance the page content translates to the left
    window.addEventListener('resize', () => {
        //for wide screens with the menu open translate the page content by the correct distance
        if(window.matchMedia('(min-width: 993px)').matches && menuOpen === true) { 
            bodyCont.style.transform = "translateX(-350px)"; 
            menuOverlay.style.transform = "translateX(-350px)"; 
            bodyCont.style.transition = "none";
            menuOverlay.style.transition = "none";
        //for small screens with the menu open translate the page content by the correct distance
        } else if (menuOpen === true) {  //small screens
            bodyCont.style.transform = "translateX(-270px)"; 
            menuOverlay.style.transform = "translateX(-270px)"; 
            bodyCont.style.transition = "none";
            menuOverlay.style.transition = "none";
        //when the menu is closed and resized, this avoids part of the menu displaying unintentionally due to the transition time
        } else {
            bodyCont.style.transition = "none";
            menuOverlay.style.transition = "none";
        }
    })

  //pushes the page content to the left, revealing the sidebar below
    const openNav = () => {
        burgerMenuCont.style.overflowY = "scroll"; //adds menu scroll
        menuOverlay.style.backgroundColor = "rgba(0,0,0, 0.4)";
        menuOverlay.style.zIndex = "800"; //makes the overlay cover the main page content, adding the semi-transparent layer and preventing the main content from being scrolled or clicked on.
        bodyCont.style.transition = "all .5s ease-out";
        menuOverlay.style.transition = "all .5s ease-out";    

        if(window.matchMedia('(min-width: 993px)').matches) { //wide screens
            bodyCont.style.transform = "translateX(-350px)";
            menuOverlay.style.transform = "translateX(-350px)"; 
        } else {  //small screens
            bodyCont.style.transform = "translateX(-270px)";
            menuOverlay.style.transform = "translateX(-270px)";  
        }  
        menuOpen = true;        
    }
    
    //moves the page content back to the right, covering the sidebar
    const closeNav = () => {
        bodyCont.style.transform = "none"; //IMPORTANT - has to be set to none otherwise it interferes with the position:fixed needed for the sticky header. It's a weird quirk - if the element you want to position has any ancestor with a transform property it won't position correctly.
        menuOverlay.style.transform = "translateX(0px)";
        menuOverlay.style.backgroundColor = "rgba(0,0,0, 0)";
        menuOverlay.style.zIndex = "0";
        bodyCont.style.transition = "all .5s ease-out";
        menuOverlay.style.transition = "all .5s ease-out"; 
        setTimeout(function(){ burgerMenuCont.scrollTop = 0; }, 600);
        menuOpen = false;
    }
}


//burgerMenuJS(); //for use when testing this as a separate file


