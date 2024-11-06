Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./Assets/0.mp4", "./Assets/2.mp4", "./Assets/3.mp4"],
});

gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});

let sections = document.querySelectorAll(".fleftelm");
let currentElement = document.querySelector("#featured");

Shery.imageEffect(".images", {
  style: 1,
  slideStyle: (setScroll) => {
    window.addEventListener("scroll", () => {
      setScroll(
        sections.forEach(function (section, index) {
          ScrollTrigger.create({
            trigger: section,
            start: "top top",
            scrub: 1,
            onUpdate: function (prog) {
              setScroll(prog.progress + index);
              if (index === 0) {
                currentElement.style.backgroundColor = "#dfe8e7";
              } else if (index === 1) {
                currentElement.style.backgroundColor = "#cce8fe";
              } else if (index === 2) {
                currentElement.style.backgroundColor = "#B5FFDE";
              } else if (index === 3) {
                currentElement.style.backgroundColor = "#ffe4da";
              } else {
                currentElement.style.backgroundColor = "white";
              }
            },
          });
        })
      );
    });
  },
});
