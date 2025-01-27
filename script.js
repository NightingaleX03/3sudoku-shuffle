document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("intro-text");
    const lines = text.querySelectorAll("span");
  
    gsap.from(lines, {
      duration: 2,
      yPercent: -100,
      scale: 1.5,
      ease: "power4.out",
      stagger: 0.2,
    });
  });
  