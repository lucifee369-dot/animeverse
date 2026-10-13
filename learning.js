console.log("this is javascript oof this file");

//navbar

const navActive = document.querySelectorAll(".nav-link");

navActive.forEach((link) => {
    link.addEventListener("click", () => {
        navActive.forEach((link) => {
            link.classList.remove("active");
        });
        link.classList.add("active");
    });
});

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let currentSection = "home";

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 100) {
            currentSection = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
})