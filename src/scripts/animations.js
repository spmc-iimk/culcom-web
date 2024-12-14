import gsap from "../../node_modules/gsap/index.js"
import { TextPlugin } from "../../node_modules/gsap/TextPlugin.js";
import { ScrollTrigger } from "../../node_modules/gsap/ScrollTrigger.js";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

window.goToAboutUs = goToAboutUs;
window.goToPastDeepDive = goToPastDeepDive;

// Scroll functions
function goToAboutUs()
{
    const about_section = document.getElementById('about_section');
    if (about_section) {
        const sectionTop = about_section.offsetTop;
        window.scrollTo({
            top: sectionTop - 150, 
            behavior: 'smooth',
        });
    }else {
        console.error('about section not found in the DOM.');
    }
}

function goToPastDeepDive()
{
    const past_deep_dive = document.getElementById('past_deep_dive');
    if (past_deep_dive) {
        const sectionTop = past_deep_dive.offsetTop;
        window.scrollTo({
            top: sectionTop - 100, 
            behavior: 'smooth',
        });
    }else {
        console.error('past deep dive section not found in the DOM.');
    }
}


// GSAP: Home line
gsap.to(".line", {  
    scaleX: 1, // Fully scale the line on the X-axis
    backgroundColor: "#EBE6D0", // Change color as it extends
    duration: 7,
    transformOrigin: "center", // Makes the scaling start from the center
    ease: "power2.out", // Smooth easing
 });

// GSAP: Background animation
 gsap.to(".backgroundImage", {  
    opacity: 0.6, 
    backgroundColor: "#010203", // Change color as it extends
    duration: 2,
    yoyo:true,
    repeat: -1,
    ease: "power2.out", // Smooth easing
 });

// GSAP: ECHOS Color Animation
gsap.config({trialWarn: false});
    let select = s => document.querySelector(s),
    toArray = s => gsap.utils.toArray(s),
    colorArray = ["fbe46c","fe987b","d569fa","5f88ea","63cdeb", "afff8a", "fbe46c"],
    allPaths = toArray('path')

    colorArray = colorArray.map(x => Array.from(x)[0] == '#' ? x : `#${x}`);
    const interp = gsap.utils.interpolate(colorArray);

    let colorTl = gsap.timeline();
    colorTl.to(allPaths, {
        fill: '#fff',
        duration: 0.25 * colorArray.length,
        modifiers: {
            fill: function() {
        return interp(this.ratio);
        }
        },
        stagger: {
            each: 0.05,
            repeat: -1
        },
        ease: 'sine.inOut'
    }).seek(100)
    .to('#glowAlpha', {
        floodColor: '#fff',
        duration: 0.25 * colorArray.length,
        modifiers: {
            floodColor: function() {
        return interp(this.ratio);
        }
        },
        stagger: {
            each: 0.05,
            repeat: -1
        },
        ease: 'sine.inOut'
}, 0).seek(100)


//GSAP: ECHOS bounce animation
const svgTimeline = gsap.timeline({
    defaults: {
        duration: 2, 
        ease: "power2.inOut"
    },
    repeat: -1, // Infinite loop
    yoyo: true // Reverse animation when completed
});

allPaths.forEach((path, index) => {
    svgTimeline.to(path, {
            y:300 , ease: "bounce.out", duration: 3, yoyo:1     
    }, index * 0.5)

});

// GSAP Scroll animations

// scrol'::about section text
gsap.fromTo(".about-text",
    { opacity: 0, y: 80 }, // Starting state
    {
        opacity: 1,
        y: 0, // Final state
        duration: 4,
        ease: "power2.out",
        scrollTrigger: {
        trigger: ".about-text", 
        start: "top 60%", 
        end: "top 50%", 
        scrub: true, 
        },
    }
);


// GSAP: Experience section 2 animation
gsap.fromTo(".scroll-animation-experience",
    {
        opacity:0,
        x:-400,
    },
    {
        opacity:1,
        x:35,
        duration: 5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".section1", 
            start: "top 90%", 
            end: "top 20%", 
            scrub: true, 
        },
    }
)


// GSAP: animation courousal
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector("#carousel");
    const slides = document.querySelectorAll("#carousel > div");
    const prevBtn = document.querySelector(".prevBtn");
    const nextBtn = document.querySelector(".nextBtn");

    const slideCount = slides.length;
    const slideWidth = slides[0].offsetWidth;
    let isAnimating = true; // Flag to track if auto-slide is active
    const isLaptopOrTablet = window.innerWidth >= 768;  // This can be adjusted for your breakpoints

    if (isLaptopOrTablet) {
        // Create a GSAP timeline
        const tl = gsap.timeline({
            repeat: -1,  // Infinite repeat
            defaults: { ease: "power1.inOut", duration: 2 },
        });

        // Animation: Moving carousel to the left slowly
        slides.forEach((_, i) => {
            tl.to(carousel, {
                x: `-${i * slideWidth}px`,
                duration: 2,
            });
        });

        // Reset to the first slide smoothly
        tl.to(carousel, {
            x: "0px",
            duration: 3,
        });

        // Start the animation
        tl.play();
    }

    // Stop animation on user interaction
    function stopAnimation() {
        if (isAnimating) {
            tl.pause(); // Pause the timeline
            isAnimating = false; // Mark auto-slide as stopped
            console.log("Auto-slide stopped");
        }
    }

    // Navigate to the next slide
    function nextSlide() {
        stopAnimation(); // Stop the auto-slide animation
        const currentX = parseFloat(gsap.getProperty(carousel, "x"));
        const nextX = currentX - slideWidth;

        // Check if it goes beyond the last slide and reset
        if (Math.abs(nextX) >= slideWidth * slideCount) {
        } else {
            gsap.to(carousel, { x: nextX, duration: 1 });
        }
    }

    // Navigate to the previous slide
    function prevSlide() {
        stopAnimation(); // Stop the auto-slide animation
        const currentX = parseFloat(gsap.getProperty(carousel, "x"));
        const prevX = currentX + slideWidth;

        // Check if it goes beyond the first slide and reset to the last slide
        if (prevX > 0) {
        } else {
            gsap.to(carousel, { x: prevX, duration: 1 });
        }
    }

    // Attach event listeners
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
});





  
