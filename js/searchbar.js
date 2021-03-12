const searchBar = document.querySelector("#search-bar");
const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector("#search-bar-input");
const supportButton = document.querySelector("#support-button");
const contactButton = document.querySelector("#contact-button");


export const searchbarJS = () => { //re-activate when switch back to the app js file after testing
//const searchbarJS = () => {    // this line is for testing only
    searchButton.addEventListener('click', () => {
        searchToggle()
    })
    
     //Works absolutely fine.... except for IE
     const searchToggle = () => {
        supportButton.classList.toggle("toggle-hide"); //displays/hides the button
        contactButton.classList.toggle("toggle-hide"); //displays/hides the button
        searchBar.classList.toggle("toggle-search-width"); //expands the width of the searchbar container 
        searchInput.classList.toggle("toggle-hide") //displays/hides the search input
    }

    //this also works absolutely fine... except for IE
    //I wrote this as an alternative to the above because I thought that maybe IE had a problem with .toggle
    //but the issue is something else, which I've not been able to identify. Has to be something in the css?

    // const searchToggle = () => {
    //     if(supportButton.classList.contains("toggle-hide")) {
    //         supportButton.classList.remove("toggle-hide");
    //     } else {
    //         supportButton.classList.add("toggle-hide");
    //     } 
    
    //     if(contactButton.classList.contains("toggle-hide")) {
    //         contactButton.classList.remove("toggle-hide");
    //     } else {
    //         contactButton.classList.add("toggle-hide");
    //     }
    
    //     if(searchBar.classList.contains("toggle-search-width")) {
    //         searchBar.classList.remove("toggle-search-width");
    //     } else {
    //         searchBar.classList.add("toggle-search-width");
    //     }
    
    //     if(searchInput.classList.contains("toggle-hide")) {
    //         searchInput.classList.remove("toggle-hide");
    //     } else {
    //         searchInput.classList.add("toggle-hide");
    //     }
    // }

}

//searchbarJS(); for testing purposes only - this breaks it if it's set to export.

