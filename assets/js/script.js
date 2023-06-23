function doMenu() {
    let menuArea = document.querySelector(".area-menu")
    if (menuArea.style.display == "none") {
        menuArea.style.display = "flex";
    } else {
        menuArea.style.display = "none";
    }
}

document.querySelector(".open-menu").addEventListener("click", doMenu);

function doAbout() {
    window.scrollTo(
        {
            top: 2600,
            left: 0,
            behavior: 'smooth'
        }
    )
}

document.querySelector(".about-our").addEventListener("click", doAbout);

function doContact() {
    window.scrollTo(
        {
            top: 3100,
            left: 0,
            behavior: 'smooth'
        }
    )
}

document.querySelector(".contact").addEventListener("click", doContact);
