// Para abrir  o menu
document.querySelector("#open-menu").addEventListener("click", () => {
    let menuArea = document.querySelector(".area-menu")
    if (menuArea.style.height == "0px") {
        menuArea.style.height = "200px";
    } else {
        menuArea.style.height = "0px";
    }
});


// Para descer o scroll a parte contato
document.querySelector("#contact").addEventListener("click", () => {
    window.scrollTo(
        {
            top: 6000,
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

window.addEventListener("scroll", () => {
    let arrowArea = document.querySelector(".arrow-up-area");
    if (window.scrollY >= 1000) {
        arrowArea.style.display = "block";
    } else {
        arrowArea.style.display = "none";
    }
})

document.querySelector("#arrow-up").addEventListener("click", () => {
    window.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
    )
})
