document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a'); // Get all nav links
    const sections = document.querySelectorAll('section'); // Get all sections

    // Function to handle activating the clicked link and displaying the corresponding section
    function activateLinkAndShowSection(link, section) {
        // Remove 'active' class from all navigation links
        navLinks.forEach(navLink => navLink.classList.remove('active'));

        // Add 'active' class to the clicked link
        link.classList.add('active');

        // Hide all sections
        sections.forEach(sec => sec.classList.remove('visible'));

        // Show the target section
        section.classList.add('visible');
    }

    // Add smooth scrolling behavior to navigation links
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = this.getAttribute('href');

            // Check if target is an ID (starts with '#') or a local file
            if (target.startsWith('#')) {
                e.preventDefault(); // Prevent default anchor behavior
                const targetSection = document.querySelector(target); // Find the target section

                if (targetSection) {
                    activateLinkAndShowSection(this, targetSection); // Activate link and show section
                    targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
                }
            }
        });
    });

    // Handle the CTA button click separately (for smooth scroll to 'About' section)
    const ctaButton = document.querySelector('.cta-button');
    const aboutSection = document.querySelector('#about'); // Get the 'About' section
    if (ctaButton && aboutSection) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default button behavior
            const aboutLink = document.querySelector('a[href="#about"]'); // Find the 'About' navigation link

            if (aboutLink) {
                activateLinkAndShowSection(aboutLink, aboutSection); // Activate 'About' link and show 'About' section
                aboutSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the 'About' section
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // You can show a temporary success message here if needed
        responseMessage.textContent = 'Sending...';

        // Use fetch to submit the form data
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                responseMessage.textContent = 'Thank you for your message!';
                form.reset(); // Reset the form after submission
            } else {
                responseMessage.textContent = 'Oops! There was a problem.';
            }
        })
        .catch(error => {
            responseMessage.textContent = 'Oops! There was a problem.';
        });
    });
});




