// Button Click Alert
function showWelcome() {
    alert("Welcome to Pavan Kumar's Portfolio! 🚀");
}


// Contact Form Validation
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all required fields.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been submitted successfully.");

    contactForm.reset();
});