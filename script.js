// Initial Animation
gsap.from(".hero-text", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });
gsap.from(".hero-image", { opacity: 0, scale: 0.8, duration: 1, stagger: 0.2, ease: "power2.out" });

// Hover Interaction
document.querySelectorAll(".hero-image").forEach(image => {
    image.addEventListener("mouseover", function() {
        gsap.to(this, { scale: 1.2, duration: 0.3 });
        gsap.to(".hero-image:not(:hover)", { filter: "grayscale(1) blur(3px)", opacity: 0.5, duration: 0.3 });
    });

    image.addEventListener("mouseleave", function() {
        gsap.to(".hero-image", { scale: 1, filter: "grayscale(1)", opacity: 1, duration: 0.3 });
    });
});

// Mouse Movement Effect (Subtle Follow Effect)
document.querySelectorAll(".hero-image").forEach(image => {
    image.addEventListener("mousemove", function(e) {
        const { left, top, width, height } = this.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 10;
        const y = (e.clientY - top - height / 2) / 10;
        gsap.to(this, { x, y, duration: 0.1 });
    });

    image.addEventListener("mouseleave", function() {
        gsap.to(this, { x: 0, y: 0, duration: 0.2 });
    });
});
