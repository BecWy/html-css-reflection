const searchToggle = () => {

    const searchBar = document.querySelector("#search-bar");
    const searchButton = document.querySelector("#search-button");
    const searchInput = document.querySelector("#search-bar > input[type=text]"); //#search-bar input[type=text]
    const supportButton = document.querySelector("#support-button");
    const contactButton = document.querySelector("#contact-button");

    searchButton.addEventListener('click', () => {
        searchInput.classList.toggle("toggle-show"); //this toggle is working, the class is being added. But the button isn't being displayed.
        supportButton.classList.toggle("toggle-hide"); //this toggle is working, the class is being added. But the button isn't being displayed.
        contactButton.classList.toggle("toggle-hide"); //this toggle is working, the class is being added. But the button isn't being displayed.
        searchBar.classList.toggle("toggle-search-width"); //expands the width of the search container
    
    // if (searchInput.classList.contains(".toggle-show")) {
    //     searchInput.style.display = "inline-block";
    // } else {
    //     searchInput.style.display = "none";
    // }
    
    });
}

searchToggle();