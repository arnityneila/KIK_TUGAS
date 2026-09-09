document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       1. PAGE LOADING
    ===================================================== */

    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.8s ease";

    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);


    /* =====================================================
       2. SCROLL REVEAL
    ===================================================== */

    const elements = document.querySelectorAll(
        ".section-header, " +
        ".home-text, " +
        ".home-image, " +
        ".about-photo, " +
        ".about-content, " +
        ".skill-card, " +
        ".project-card, " +
        ".timeline-item, " +
        ".service-card, " +
        ".achievement-title, " +
        ".achievement-item, " +
        ".testimonial-card, " +
        ".contact-content"
    );

    elements.forEach((element, index) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(40px)";
        element.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

        element.dataset.delay = index;
    });


    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const element = entry.target;
                const delay = Number(element.dataset.delay) * 50;

                setTimeout(() => {

                    element.style.opacity = "1";
                    element.style.transform =
                        "translateY(0)";

                }, Math.min(delay, 500));

                observer.unobserve(element);
            }
        });

    }, {
        threshold: 0.12
    });


    elements.forEach(element => {
        observer.observe(element);
    });


    /* =====================================================
       3. HOME TEXT ANIMATION
    ===================================================== */

    const homeTitle = document.querySelector(".home-text h1");

    if (homeTitle) {

        homeTitle.style.opacity = "0";
        homeTitle.style.transform = "translateY(30px)";
        homeTitle.style.transition =
            "all 1s cubic-bezier(.22,1,.36,1)";

        setTimeout(() => {

            homeTitle.style.opacity = "1";
            homeTitle.style.transform = "translateY(0)";

        }, 400);
    }


    /* =====================================================
       4. HOME IMAGE FLOATING
    ===================================================== */

    const photoFrame = document.querySelector(".photo-frame");

    if (photoFrame) {

        photoFrame.animate(
            [
                {
                    transform: "rotate(2deg) translateY(0)"
                },
                {
                    transform: "rotate(2deg) translateY(-12px)"
                },
                {
                    transform: "rotate(2deg) translateY(0)"
                }
            ],
            {
                duration: 4000,
                iterations: Infinity,
                easing: "ease-in-out"
            }
        );
    }


    /* =====================================================
       5. DECORATION FLOATING
    ===================================================== */

    const decorations =
        document.querySelectorAll(".decor");

    decorations.forEach((decor, index) => {

        const duration = 3000 + (index * 400);

        decor.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)"
                },
                {
                    transform:
                        "translateY(-15px) rotate(5deg)"
                },
                {
                    transform:
                        "translateY(0) rotate(0deg)"
                }
            ],
            {
                duration: duration,
                iterations: Infinity,
                easing: "ease-in-out"
            }
        );
    });


    /* =====================================================
       6. SKILL BAR ANIMATION
    ===================================================== */

    const skillBars =
        document.querySelectorAll(".skill-line span");

    skillBars.forEach(bar => {

        const width = bar.style.width;

        bar.style.width = "0%";
        bar.style.transition =
            "width 1.5s cubic-bezier(.22,1,.36,1)";

        const skillObserver =
            new IntersectionObserver(entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        setTimeout(() => {
                            bar.style.width = width;
                        }, 300);

                        skillObserver.unobserve(bar);
                    }
                });

            }, {
                threshold: 0.5
            });

        skillObserver.observe(bar);
    });


    /* =====================================================
       7. PORTFOLIO IMAGE ZOOM
    ===================================================== */

    const projects =
        document.querySelectorAll(".project-card");

    projects.forEach(card => {

        const image = card.querySelector("img");

        if (!image) return;

        card.addEventListener("mouseenter", () => {

            image.style.transition =
                "transform 0.6s ease";

            image.style.transform =
                "scale(1.08)";
        });


        card.addEventListener("mouseleave", () => {

            image.style.transform =
                "scale(1)";
        });
    });


    /* =====================================================
       8. PORTFOLIO 3D TILT
    ===================================================== */

    projects.forEach(card => {

        card.addEventListener("mousemove", (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -2;

            const rotateY =
                ((x - centerX) / centerX) * 2;

            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;
        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "";
        });

    });


    /* =====================================================
       9. SERVICE CARD HOVER
    ===================================================== */

    const services =
        document.querySelectorAll(".service-card");

    services.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transition =
                "transform .35s ease, box-shadow .35s ease";

            card.style.transform =
                "translateY(-8px) rotate(-1deg)";

            card.style.boxShadow =
                "0 18px 40px rgba(81,63,61,.15)";
        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "";
            card.style.boxShadow = "";
        });

    });


    /* =====================================================
       10. SKILL CARD HOVER
    ===================================================== */

    const skills =
        document.querySelectorAll(".skill-card");

    skills.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.boxShadow =
                "0 18px 45px rgba(81,63,61,.15)";
        });


        card.addEventListener("mouseleave", () => {

            card.style.boxShadow = "";
        });

    });


    /* =====================================================
   11. ACHIEVEMENT ITEM
===================================================== */

const achievements =
    document.querySelectorAll(".achievement-item");

achievements.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.transform =
            "translateX(10px)";
    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "";
    });

});


    /* =====================================================
       12. TESTIMONIAL HOVER
    ===================================================== */

    const testimonials =
        document.querySelectorAll(".testimonial-card");

    testimonials.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
                "translateY(-8px)";
        });


        card.addEventListener("mouseleave", () => {

            card.style.transform = "";
        });

    });


    /* =====================================================
       13. NAVBAR EFFECT
    ===================================================== */

    const navbar =
        document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                navbar.style.boxShadow =
                    "0 10px 30px rgba(81,63,61,.12)";

                navbar.style.background =
                    "rgba(255,250,244,.95)";

            } else {

                navbar.style.boxShadow = "";

                navbar.style.background =
                    "rgba(255,250,244,.88)";
            }

        });
    }


    /* =====================================================
       14. ACTIVE NAVBAR
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");

    const navLinks =
        document.querySelectorAll(".navbar nav a");


    function updateNavigation() {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 200;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {
                current =
                    section.getAttribute("id");
            }
        });


        navLinks.forEach(link => {

            link.style.color = "";

            const href =
                link.getAttribute("href");

            if (href === "#" + current) {

                link.style.color =
                    "var(--pink-dark)";
            }
        });
    }


    window.addEventListener(
        "scroll",
        updateNavigation
    );

    updateNavigation();


    /* =====================================================
       15. SMOOTH SCROLL
    ===================================================== */

    navLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });
    });


    /* =====================================================
       16. BUTTON RIPPLE EFFECT
    ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".button, .nav-button"
        );

    buttons.forEach(button => {

        button.addEventListener("click", function (event) {

            const ripple =
                document.createElement("span");

            const rect =
                button.getBoundingClientRect();

            const size =
                Math.max(
                    rect.width,
                    rect.height
                );

            ripple.style.position = "absolute";
            ripple.style.width = size + "px";
            ripple.style.height = size + "px";
            ripple.style.left =
                event.clientX - rect.left -
                size / 2 + "px";
            ripple.style.top =
                event.clientY - rect.top -
                size / 2 + "px";

            ripple.style.borderRadius = "50%";
            ripple.style.background =
                "rgba(255,255,255,.35)";
            ripple.style.pointerEvents = "none";

            ripple.animate(
                [
                    {
                        transform: "scale(0)",
                        opacity: 1
                    },
                    {
                        transform: "scale(2)",
                        opacity: 0
                    }
                ],
                {
                    duration: 600,
                    easing: "ease-out"
                }
            );

            button.style.position = "relative";
            button.style.overflow = "hidden";

            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

        });

    });


    /* =====================================================
       17. MOUSE PARALLAX
    ===================================================== */

    window.addEventListener("mousemove", (event) => {

        const x =
            (event.clientX / window.innerWidth - 0.5);

        const y =
            (event.clientY / window.innerHeight - 0.5);

        decorations.forEach((decor, index) => {

            const strength =
                5 + (index % 4) * 2;

            decor.style.marginLeft =
                `${x * strength}px`;

            decor.style.marginTop =
                `${y * strength}px`;
        });

    });


    /* =====================================================
       18. BACK TO TOP
    ===================================================== */

    const topButton =
        document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.setAttribute(
        "aria-label",
        "Back to top"
    );

    Object.assign(topButton.style, {

        position: "fixed",
        right: "25px",
        bottom: "25px",

        width: "45px",
        height: "45px",

        border: "none",
        borderRadius: "50%",

        background: "#e88cab",
        color: "#fff",

        fontSize: "20px",
        fontWeight: "bold",

        cursor: "pointer",

        opacity: "0",
        visibility: "hidden",

        transition: "all .3s ease",

        zIndex: "9999"

    });


    document.body.appendChild(topButton);


    window.addEventListener("scroll", () => {

        if (window.scrollY > 600) {

            topButton.style.opacity = "1";
            topButton.style.visibility =
                "visible";

        } else {

            topButton.style.opacity = "0";
            topButton.style.visibility =
                "hidden";
        }
    });


    topButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =====================================================
       19. CONTACT HOVER
    ===================================================== */

    const contacts =
        document.querySelectorAll(".contact-list a");

    contacts.forEach(contact => {

        contact.addEventListener("mouseenter", () => {

            contact.style.transform =
                "translateY(-6px)";
        });


        contact.addEventListener("mouseleave", () => {

            contact.style.transform = "";
        });

    });


    /* =====================================================
       20. CURSOR EFFECT
    ===================================================== */

    const cursor =
        document.createElement("div");

    Object.assign(cursor.style, {

        position: "fixed",
        width: "10px",
        height: "10px",

        borderRadius: "50%",

        background: "#e88cab",

        pointerEvents: "none",

        zIndex: "10000",

        transform: "translate(-50%, -50%)",

        transition:
            "width .2s ease, height .2s ease",

        display:
            window.innerWidth > 768
                ? "block"
                : "none"

    });


    document.body.appendChild(cursor);


    document.addEventListener("mousemove", event => {

        cursor.style.left =
            event.clientX + "px";

        cursor.style.top =
            event.clientY + "px";

    });


    const clickable =
        document.querySelectorAll(
            "a, button, .project-card, .skill-card"
        );


    clickable.forEach(element => {

        element.addEventListener("mouseenter", () => {

            cursor.style.width = "25px";
            cursor.style.height = "25px";
        });


        element.addEventListener("mouseleave", () => {

            cursor.style.width = "10px";
            cursor.style.height = "10px";
        });

    });


    console.log(
        "✨ Arnity Portfolio Animation Loaded!"
    );

    
});