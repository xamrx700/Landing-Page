/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */
/**
 * Define Global Variables
 *
 */
const navb = document.querySelector("#nav-bar");
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */



/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function myFunction() {
  var navb = document.getElementById("navbar__list");
  if (navb.className === "nb") {
    navb.className += " responsive";
  } else {
    navb.className = "nb";
  }
}

// Add class 'active' to section when near top of viewport&&
// Scroll to anchor ID using scrollTO event
onscroll = function() {
  let scrollPosition = document.documentElement.scrollTop;
  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
      scrollPosition <
      section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
    ) {
      let myId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(myId);
    }
  });
};

let removeAllActiveClasses = function() {
  document.querySelectorAll("nav a").forEach((el) => {
    el.classList.remove("active");
  });
};

const addActiveClass = function(id) {
  const selector = `nav a[href="#${id}"]`;
  document.querySelector(selector).classList.add("active");
};

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let myId = e.target.attributes.href.value;
    let section = document.querySelector(myId);
    let sectionPosition = section.offsetTop;
    // section.scrollIntoView({
    //   behavior: "smooth",
    // });
    window.scroll({
      top: sectionPosition,
      behavior: "smooth",
    });
  });
});

let isInViewport = function(elem) {
  var distance = elem.getBoundingClientRect();
  return (
    distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    distance.top >= 0 &&
    distance.right <= (window.innerWidth || document.documentElement.clientWidth)&&
    distance.left >= 0
  );
};
// read the link on how above code works
window.addEventListener('scroll', function(t) {
  // add event on scroll
  sections.forEach(t => {
    //for each .thisisatest
    if (isInViewport(t)) {
      //if in Viewport
      t.classList.add("your-active-class");
    } else {
      t.classList.remove("your-active-class");
    }
  });
}, false);

// read the link on how above code works
