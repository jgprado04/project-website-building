// Para abrir  o menu
document.querySelector("#open-menu").addEventListener("click", () => {
    let menuArea = document.querySelector(".area-menu")
    if (menuArea.style.display == "none") {
        menuArea.style.display = "flex";
    } else {
        menuArea.style.display = "none";
    }
});


// Para descer o scroll a parte contato
document.querySelector("#contact").addEventListener("click", () => {
    window.scrollTo(
        {
            top: 3500,
            left: 0,
            behavior: 'smooth'
        }
    )
});


// Para descer o scroll a parte contato (MENU)
document.querySelector("#contact-menu").addEventListener("click", () => {
    window.scrollTo(
        {
            top: 5893,
            left: 0,
            behavior: 'smooth'
        }
    )
});
