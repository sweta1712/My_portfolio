document.addEventListener("DOMContentLoaded", function() {
    // Hamburger menu
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".navbar");

    hamburger.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    // Back to top button
    const backToTop = document.querySelector(".back-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            backToTop.classList.add("active");
        } else {
            backToTop.classList.remove("active");
        }
    });

    // Smooth scroll & active link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar a');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            let sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.navbar a[href*=' + sectionId + ']').classList.add('active-link');
            } else {
                document.querySelector('.navbar a[href*=' + sectionId + ']').classList.remove('active-link');
            }
        });
    }
    window.addEventListener('scroll', scrollActive);


    // Typed.js animation
    var typed = new Typed('.dev span', {
        strings: ['Frontend Developer!', 'Competitive Coder!'],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true
    });

    // Swiper initialization
    var swiper = new Swiper(".projects-container", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

    // Form submission
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyQelAQmlSpKgw3QlJQWF-QSPYLK-AkChDT7h8yozlrbV-nFCN4WFzr4MDlxTVXeV8Vig/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML = "Message sent successfully!";
                    setTimeout(function() {
                        msg.innerHTML = "";
                    }, 3000);
                    form.reset();
                })
                .catch(error => console.error('Error!', error.message));
        });
    }
});