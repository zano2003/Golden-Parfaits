// Golden Parfaits JavaScript
alert("JavaScript is connected!");

document.addEventListener("DOMContentLoaded", function () {

    // Contact form validation
    const form = document.querySelector(".message-section form");

    if (form) {

        form.addEventListener("submit", function (event) {

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const message = document.querySelector("#message").value.trim();

            if (name === "" || email === "" || message === "") {

                event.preventDefault();

                alert("Please fill in all the required fields.");

            } else {

                alert("Thank you, " + name + "! Your message has been received.");

            }

        });

    }


    // WhatsApp ordering
    const orderButtons = document.querySelectorAll(".order-button");

    orderButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const product = button.getAttribute("data-product");

            const message =
                "Hello Golden Parfaits! I would like to order " + product + ".";

            const phoneNumber = "27795679394";

            const whatsappURL =
                "https://wa.me/" +
                phoneNumber +
                "?text=" +
                encodeURIComponent(message);

            window.location.href = whatsappURL;

        });

    });

});