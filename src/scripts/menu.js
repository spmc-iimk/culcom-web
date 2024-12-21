import gsap from "gsap";

// Select elements
const MobileContextMenu = document.getElementById("Mobile_ContextMenu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

// Function to open/close the mobile menu
window.open_mobile_menu = function open_mobile_menu() {
    if (MobileContextMenu.classList.contains("open")) {
        // Hide the menu
        gsap.to(MobileContextMenu, {
            duration: 0.3,
            opacity: 0,
            y: -20,
            onComplete: () => {
                MobileContextMenu.classList.remove("open");
                MobileContextMenu.style.display = "none";
            },
        });

        // Switch icons
        hamburgerIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
    } else {
        // Show the menu
        MobileContextMenu.style.display = "block";
        gsap.fromTo(
            MobileContextMenu,
            { opacity: 0, y: -20 },
            { duration: 0.3, opacity: 1, y: 0 }
        );
        MobileContextMenu.classList.add("open");

        // Switch icons
        hamburgerIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");
    }
};
