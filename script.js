let body = document.querySelector('body');
let nav = document.querySelector('nav');
let footer = document.querySelector('footer');
let currentMode = "light";
let button = document.getElementById("darkModeBtn");
let rudra = document.querySelector('.rudra');
let footercut = document.querySelector('.footer-cut-container');
let btn = document.querySelector('.play-button');
let btnn = document.querySelector('.rules-button');
let navb = document.querySelectorAll('.navbar');
let ul = document.querySelectorAll('a');
let buttonIcon = document.getElementById("darkModeIcon");

button.addEventListener("click", () => {
    if (currentMode === "light") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        nav.style.backgroundColor = "#a8a8a8ff";      // dark grey
        nav.style.color = "#eee";
        footer.style.backgroundColor = "#fffbfbff";   // light grey
        footer.style.color = "#000000ff";
        rudra.style.color = "#fffbfbff";
        footercut.style.backgroundColor = "black";
        btn.style.backgroundColor = "#fffbfbff";
        btn.style.color = "black";
        btnn.style.backgroundColor = "#fffbfbff";
        btnn.style.color = "black";
        navb.forEach((nav) => {
            nav.style.color = "black";
            nav.style.backgroundColor = "#fffbfbff";
        });
        ul.forEach((a) => {
            a.style.color = "black";
        });
               buttonIcon.style.transform = "rotate(180deg)"; // Rotate icon for dark mode
               buttonIcon.style.color = "white"; // Optional: change icon color for visibility
               button.style.backgroundColor = "#000000ff"
        
        currentMode = "dark";
    } else {
        body.style.backgroundColor = "";         // default
        body.style.color = "black";
        nav.style.backgroundColor = "";          // default
        nav.style.color = "";
        footer.style.backgroundColor = "#C03221"; // original red
        footer.style.color = "white";
        rudra.style.color = "#C03221";           // original color
        footercut.style.backgroundColor = "#F2D0A4"; // original bg
        btn.style.backgroundColor = "";          // default
        btn.style.color = "";                    // default
        btnn.style.backgroundColor = "";         // default
        btnn.style.color = "";                   // default
        navb.forEach((nav) => {
            nav.style.color = "";                // default
            nav.style.backgroundColor = "";      // default
        });
        ul.forEach((a) => {
            a.style.color = "";                  // default
        });
        buttonIcon.style.transform = "rotate(0deg)"; 
        button.style.backgroundColor = "";
        currentMode = "light";
    }
});