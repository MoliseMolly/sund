gsap.registerPlugin(ScrollTrigger);


gsap.to(".animation_top", {
    x: 0,
    duration: 2,
    ease: "power4.out",
    y: -50,

    scrollTrigger: {
        trigger: ".animation_top",
        markers: true,
        start: "top 60%",
        end: "top 25%"
    }

});

gsap.to(".animation_top2", {
    x: 0,
    duration: 2,
    ease: "power4.out",
    y: -50,

    scrollTrigger: {
        trigger: ".animation_top2",
        markers: true,
        start: "top 60%",
        end: "top 25%"
    }

});

/*innerHeight = elementets højde, dynamisk værdi*/
/*her tages fat i alle parallax classerne*/
const parallaxes = document.querySelectorAll(".parallax");
/* først loopes igennem alle parallaxes,*/
parallaxes.forEach((section, i) => {
    section.bg = section.querySelector(".bg");
    /*der sættes en baggrund position, på 50% højsontalt, derefter sætter vi den verikale til at være halvdelel i elementets højde*/
    section.bg.style.backgroundPosition = `50% ${innerHeight / 2}px`;
    /*her sættes animatione igang, den styres af scroll eventet. */
    gsap.to(section.bg, {
        /*Animeres til følgende værdier/koordinater*/
        /*Derefter sættes background position til 50% højsontalt og til minus halvdelen af elementets højde*/
        backgroundPosition: `50% ${-innerHeight / 2}px`,
        /**/
        ease: "none",
        scrollTrigger: {
            trigger: section,
            scrub: true,
        },
    });
});

gsap.utils.toArray(".parallax").forEach((section, i) => {
    section.bg = section.querySelector(".bg");

    section.bg.style.backgroundPosition = `50% ${innerHeight / 2}px`;

    gsap.to(section.bg, {
        backgroundPosition: `50% ${-innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
            trigger: section,
            scrub: true,
        },
    });
});
