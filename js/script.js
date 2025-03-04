document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: "smooth",
                });
            }
        });
        $(document).ready(function () {

            // Function to change the nav-bar on scroll
            $(window).scroll(function () {
                ($(window).scrollTop() >= 100) ? (
                    $('.fixed-nav-bar').addClass('scrolled'),
                    $('.the-bass').addClass('scrolled')
                ) : (
                    $('.fixed-nav-bar').removeClass('scrolled'),
                    $('.the-bass').removeClass('scrolled')
                );
            });


        });
    });

    // Auto-play Bootstrap Carousel
    let carousel = document.querySelector("#testimonialCarousel");
    if (carousel) {
        let carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 3000,
            ride: "carousel",
        });
    }

    // Newsletter Subscription with EmailJS
    const subscribeForm = document.querySelector("form");
    if (subscribeForm) {
        subscribeForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get the email input value
            const email = subscribeForm.querySelector("input[type='email']").value;

            // Send email using EmailJS
            emailjs
                .send("service_mcah2i9", "template_5rvo6zt", {
                    to_email: email, // Recipient email (subscriber)
                    from_name: "AAA PVT LTD", // Sender name
                    message: "Thank you for subscribing to our newsletter!", // Email content
                })
                .then(
                    function (response) {
                        alert("Thank you for subscribing to our newsletter!");
                        subscribeForm.reset();
                    },
                    function (error) {
                        alert("Oops! Something went wrong. Please try again.");
                        console.error("EmailJS Error:", error);
                    }
                );
        });
    }

});


