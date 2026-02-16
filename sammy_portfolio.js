// Simple welcome message
console.log("Welcome to Samuel Monday's Portfolio");

window.onload = () => {
    document.querySelectorAll("section").forEach(section => {
        section.classList.add("show");
    });
};

// You can add animations or effects later