function doMenu() {
    let menuArea = document.querySelector(".area-menu")
    if (menuArea.style.display == "none") {
        menuArea.style.display = "flex";
    } else {
        menuArea.style.display = "none";
    }
}

document.querySelector(".open-menu").addEventListener("click", doMenu);
