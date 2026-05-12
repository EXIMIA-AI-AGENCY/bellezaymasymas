document.addEventListener('DOMContentLoaded', () => {
    // Navigation Burger Menu
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if(nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            }

            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                window.scrollTo({
                    top: target.offsetTop - 70, // Offset for sticky header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add to cart buttons interaction
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.innerText;
            this.innerText = '¡Añadido!';
            this.style.backgroundColor = 'var(--text-dark)';
            this.style.borderColor = 'var(--text-dark)';
            this.style.color = 'var(--text-light)';
            
            setTimeout(() => {
                this.innerText = originalText;
                this.style.backgroundColor = 'transparent';
                this.style.borderColor = 'var(--accent-color)';
                this.style.color = 'var(--accent-color)';
            }, 2000);
        });
    });

    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if(newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input');
            const button = newsletterForm.querySelector('button');
            
            if(input.value) {
                const originalText = button.innerText;
                button.innerText = '¡Suscrito!';
                button.style.backgroundColor = 'var(--accent-color)';
                input.value = '';
                
                setTimeout(() => {
                    button.innerText = originalText;
                    button.style.backgroundColor = 'var(--text-dark)';
                }, 3000);
            }
        });
    }
});
