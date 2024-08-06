document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("email-form");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form from submitting and reloading the page

            let params = {
                subject: document.getElementById("subject").value,
                email: document.getElementById("email").value,  
                message: document.getElementById("message").value,
                from_name: document.getElementById("username").value,
            };

            emailjs.send("service_8qvwx4f", "template_oaao4dc", params)
                .then(function(response) {
                    alert("Email has been sent successfully!");
                    form.reset(); // Optionally reset the form after successful submission
                }, function(error) {
                    alert("Failed to send email. Please try again later.");
                    console.error("EmailJS error:", error);
                });
        });
    } else {
        console.error("Form element not found");
    }
});
