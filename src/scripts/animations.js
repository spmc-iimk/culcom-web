import gsap from "../../node_modules/gsap/index.js"
import { TextPlugin } from "../../node_modules/gsap/TextPlugin.js";
import { ScrollTrigger } from "../../node_modules/gsap/ScrollTrigger.js";

console.log("Script running!")
// Register the TextPlugin
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

console.log(document.querySelector("#paint2_linear_11_7"))

gsap.to(".line", {  
    scaleX: 1, // Fully scale the line on the X-axis
    backgroundColor: "#EBE6D0", // Change color as it extends
    duration: 7,
    transformOrigin: "center", // Makes the scaling start from the center
    ease: "power2.out", // Smooth easing
 });


 gsap.to(".backgroundImage", {  
    opacity: 0.9, // Fully scale the line on the X-axis
    backgroundColor: "#000000", // Change color as it extends
    duration: 7,
    yoyo:true,
    repeat: -1,
    ease: "power2.out", // Smooth easing
 });

    gsap.config({trialWarn: false});
    let select = s => document.querySelector(s),
        toArray = s => gsap.utils.toArray(s),
        mainSVG = select('#mainSVG'),
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
      

    const svgTimeline = gsap.timeline({
        defaults: {
            duration: 2, // Base duration for animations
            ease: "power2.inOut" // Smooth easing
        },
        repeat: -1, // Infinite loop
        yoyo: true // Reverse animation when completed
    });
    
    // Define all paths
    const paths = [
        "#small_e1",
        "#small_e2",
        "#small_e3",
        "#big_c",
        "#small_c",
        "#large_h"
    ];
    
    
    
    // Add animations to each path
    paths.forEach((path, index) => {
        // Animate glow and fill color
        svgTimeline.to(path, {
            filter: "url(#glow)", // Apply glow filter
            scale: 0.9, // Slightly enlarge during glow
            transformOrigin: "center center", // Scale from center
            duration: 1.5
        }, index * 0.5); // Stagger animations slightly
    
        // Add slight movement for dynamic effect
        svgTimeline.to(path, {
            x: gsap.utils.random(-10, 10, true), // Horizontal wiggle
            y: gsap.utils.random(-10, 10, true), // Vertical wiggle
            repeat: 1,
            duration: 1,
            ease: "sine.inOut"
        }, index * 0.5);
    });


    gsap.fromTo(
        ".about",
        { opacity: 0, y: 80 }, // Starting state
        {
          opacity: 1,
          y: 0, // Final state
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about", 
            start: "top 60%", 
            end: "top 50%", 
            scrub: true, 
          },
        }
      );

      gsap.fromTo(
        ".section3",
        { opacity: 0, y: 80 }, // Starting state
        {
          opacity: 1,
          y: 0, // Final state
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".section3", 
            start: "top 60%", 
            end: "top 50%", 
            scrub: true, 
          },
        }
      );

      gsap.fromTo(
        ".section4",
        { opacity: 0, y: 80 }, // Starting state
        {
          opacity: 1,
          y: 0, // Final state
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".section4", 
            start: "top 60%", 
            end: "top 50%", 
            scrub: true, 
          },
        }
      );