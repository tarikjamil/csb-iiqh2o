// Split text into characters using absolute positioning.
const text = new SplitType(".split-type", {
  types: "lines, words",
  absolute: false,
  lineClass: "split-line",
  wordClass: "split-word"
});

const text2 = new SplitType(".is--hero-split", {
  types: "lines, words",
  absolute: false,
  lineClass: "is--loadin1",
  wordClass: "split-hero-word"
});

gsap.registerPlugin(ScrollTrigger);

$(".split-type").each(function (index) {
  let triggerElement = $(this);
  // let myText = $(this).find(".split-text");
  let targetElement = $(this).find(".split-word");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top"
    }
  });
  tl.from(targetElement, {
    duration: 1,
    delay: 0.3,
    y: "100%",
    opacity: 0,
    ease: "Quint.easeOut",
    stagger: {
      amount: 0.1,
      from: "0"
    }
  });
});

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();
  tl.from(".is--loadin1", {
    y: "200%",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 1
  });
  tl.from(
    ".shape-loading",
    {
      opacity: 0,
      y: "60rem",
      stagger: { each: 0.1, from: "start" },
      ease: "Quint.easeOut",
      duration: 1
    },
    1
  );
  tl.from(
    ".navbar-parent",
    {
      y: "-100px",
      stagger: { each: 0.1, from: "start" },
      ease: "Quint.easeOut",
      duration: 1
    },
    1
  );
  tl.from(
    ".cart-button",
    {
      y: "-100px",
      stagger: { each: 0.1, from: "start" },
      ease: "Quint.easeOut",
      duration: 1
    },
    1
  );
}
pageLoad();

$(".article-home-el").on("mouseenter mouseleave", function () {
  $(this).find(".article-home-wrapper").toggleClass("is--active");
  $(this).find(".article-home-content").toggleClass("is--active");
});

function slider1() {
  let splides = $(".slider1");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 1,
      perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: "slide", // 'loop' or 'slide'
      gap: "48rem", // space between slides
      arrows: "slider", // 'slider' or false
      pagination: false, // 'slider' or false
      speed: 600, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: false, // go back to beginning when reach end
      rewindSpeed: 400,
      waitForTransition: false,
      updateOnMove: true,
      trimSpace: false, // true removes empty space from end of list
      breakpoints: {
        991: {
          // Tablet
          gap: "24rem",
          perPage: 1,
          arrows: false
        },
        767: {
          // Mobile Landscape
          gap: "24rem",
          perPage: 1,
          arrows: false
        },
        479: {
          // Mobile Portrait
          gap: "24rem",
          perPage: 1,
          arrows: false
        }
      }
    }).mount();
  }
}
slider1();
