const hamburgerMenu = document.querySelector("#hamburger-menu");
const navToggle = document.querySelector("nav");

/*hamburger menu drop down*/
hamburgerMenu.addEventListener("click", () => {
    const visibility = navToggle.getAttribute("data-visible");

    if (visibility == "false") {
        navToggle.setAttribute("data-visible", true);
        hamburgerMenu.setAttribute("aria-expanded", true);
    } else if (visibility == "true") {
        navToggle.setAttribute("data-visible", false);
        hamburgerMenu.setAttribute("aria-expanded", false);
    }
})

