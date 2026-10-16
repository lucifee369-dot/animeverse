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

const form = document.querySelector("form");
const usernameInput = document.getElementById("Username");
const userNameLabel = document.getElementById("userName");
const emailInput = document.getElementById("Email");
const emailError = document.getElementById("emailError");
const messageInput = document.getElementById("Message");
const messageError = document.getElementById("messageError");
const formValidation = document.getElementById("formValidation");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const isUserNameValid = username !== "";

    if (!isUserNameValid) {
        userNameLabel.style.display = "block";
        userNameLabel.textContent = "*Please enter your username.";
    }
    else{
        userNameLabel.style.display = "none";
    }

    const Email = emailInput.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = Email !== "" && emailPattern.test(Email);

    if (Email === "") {
        emailError.style.display = "block";
        emailError.textContent = "*Please enter your email.";
    } 
    else if (!emailPattern.test(Email)) {
        emailError.style.display = "block";
        emailError.textContent = "*Please enter your valid email.";
    }
    else {
        emailError.style.display = "none";
        emailError.textContent = "";
    }

    const Message = messageInput.value.trim();
    const isMessageValid = Message !== "";

    if(!isMessageValid){
        messageError.style.display = "block";
        messageError.textContent = "*Please enter some message."
    }
    else{
        messageError.style.display = "none";
        messageError.textContent = "";
    }

    const isFormValid = isUserNameValid && isEmailValid && isMessageValid;
    
    if(isFormValid){
        formValidation.style.display = "block";
        formValidation.className = "text-success";
        formValidation.textContent = "*Form is valid";
    }
    else{
        formValidation.style.display = "block";
        formValidation.className = "text-danger"
        formValidation.textContent = "*Please enter requred information";
    }
});

usernameInput.addEventListener("input", () => {
    const username = usernameInput.value.trim();
    const isUserNameValid = username !== "";

    if(isUserNameValid){
        userNameLabel.style.display = "none";
        userNameLabel.textContent = "";
    }
    else{
        userNameLabel.style.display = "block";
        userNameLabel.textContent = "*Please enter your username.";        
    }
});

emailInput.addEventListener("input", () => {
    const Email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (Email === "") {
        emailError.style.display = "block";
        emailError.textContent = "*Please enter your email.";
    }
    else if (!emailPattern.test(Email)) {
        emailError.style.display = "block";
        emailError.textContent = "*Please enter your valid email.";
    }
    else {
        emailError.style.display = "none";
        emailError.textContent = "";
    }
});

messageInput.addEventListener("input", () => {

    const Message = messageInput.value.trim();
    const isMessagevalid = Message !== "";

    if(isMessagevalid){
        messageError.style.display = "none";
        messageError.textContent = "";
    }
    else{
        messageError.style.display = "block";
        messageError.textContent = "*Please enter some message."        
    }
});