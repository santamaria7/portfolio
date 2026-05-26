document.getElementById("year").innerHTML = new Date().getFullYear();

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formMessage.textContent = "Thank you! Your message has been received.";
    contactForm.reset();
});
