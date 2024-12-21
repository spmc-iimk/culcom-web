import gsap from "gsap";

window.onload = () => {
    const loadingScreen = document.getElementById("loading-screen");

    gsap.to(loadingScreen, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          loadingScreen.style.display = "none";
        },
      });
};