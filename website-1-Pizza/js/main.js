// Scrollbar navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// start a section from top
function customScrollTo(id) {
  console.log(id);
  const container = document.querySelector(id);
  if (container) {
    const offsetTop = container.offsetTop; // Get the element's position
    window.scrollTo({
      top: offsetTop + -100,
      behavior: "smooth", // Smooth scrolling
    });
  } else {
    console.error(`Element with ID ${id} not found`);
  }
}
