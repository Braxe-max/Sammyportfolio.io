// Simple welcome message
console.log("Welcome to Samuel Monday's Portfolio");

window.onload = () => {
    document.querySelectorAll("section").forEach(section => {
        section.classList.add("show");
    });
};

let image = document.getElementById('image90');
let images= ['image1.jpg','image2.jpg','image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg'];

setInterval(function() {
    let random = Math.floor(Math.random() * 6);
    image.src = images[random];
}, 4000);

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close the menu when a navigation link is clicked
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});