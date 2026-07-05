console.log("Script geladen");

function toggleMenu() {

    const menu = document.getElementById("mobileMenu");
    const button = document.getElementById("burgerBtn");

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {

        button.innerHTML = "✕";

    } else {

        button.innerHTML = "☰";

    }

}

function closeMenu() {

    document.getElementById("mobileMenu").classList.remove("active");

    document.getElementById("burgerBtn").innerHTML = "☰";

}