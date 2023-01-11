// smooth Scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: "vertical", // vertical, horizontal
  gestureDirection: "vertical", // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false
});

//get scroll value
lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
  console.log({ scroll, limit, velocity, direction, progress });
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.registerPlugin(ScrollTrigger);

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();
  tl.to(".main-wrapper", {
    opacity: 1,
    ease: "Quint.easeOut",
    duration: 0.5
  });
  tl.from(".is--loading-animation", {
    y: "10rem",
    opacity: "0",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 0.5
  });
  tl.from(".main-shapes-wrapper", {
    opacity: "0",
    ease: "Quint.easeOut",
    duration: 4
  });
}
pageLoad();

//random position background
gsap.to(".bg-shape", {
  x: "random(-300, 300)",
  y: "random(-300, 300)",
  rotation: "random(-360, 360)",
  ease: "power1.inOut",
  duration: 8,
  repeat: -1,
  repeatRefresh: true
});

// img parallax
$(".parallax-img").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top"
    }
  });
  tl.to(targetElement, {
    y: "-15%"
  });
});

$(".parallax-img-reverse").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      scrub: true,
      // trigger element - viewport
      start: "top bottom",
      end: "bottom top"
    }
  });
  tl.to(targetElement, {
    y: "15%"
  });
});

// scroll text
$(".is--scroll-intoview").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom"
    }
  });
  tl.from(targetElement, {
    duration: 1,
    delay: 0.3,
    opacity: 0,
    y: "20rem",
    ease: "Quint.easeOut"
  });
});

// scale on scroll
$(".is--scale-animation").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      scrub: true,
      // trigger element - viewport
      start: "top bottom",
      end: "top top"
    }
  });
  tl.from(targetElement, {
    scale: 0.5
  });
});

// scroll line
$(".line").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top bottom"
    }
  });
  tl.fromTo(
    targetElement,
    { width: "0%", opacity: 0 },
    {
      duration: 1,
      delay: 0.3,
      opacity: 1,
      width: "100%",
      ease: "Quint.easeOut"
    }
  );
});

// scroll into footer
$(".section.is--footer").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".is--footer-animation");

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
    opacity: 0,
    y: "20rem",
    ease: "Quint.easeOut",
    stagger: {
      amount: 0.4,
      from: "0"
    }
  });
});

// navbar menu hamburger click
$(".navbar-menu-link").click(function () {
  var clicks = $(this).data("clicks");
  if (clicks) {
    // odd clicks
    gsap.to(".navbar-link", {
      y: "10rem",
      duration: 0.3,
      opacity: 0,
      ease: "Quint.easeOut",
      stagger: {
        each: 0.1,
        from: "end"
      }
    });
  } else {
    // even clicks
    gsap.fromTo(
      ".navbar-link",
      {
        y: "10rem",
        opacity: 0
      },
      {
        duration: 0.5,
        delay: 1,
        y: "0rem",
        opacity: 1,
        ease: "Quint.easeOut",
        stagger: {
          each: 0.1
        }
      }
    );
  }
  $(this).data("clicks", !clicks);
});
