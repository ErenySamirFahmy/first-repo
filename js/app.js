// define global variables
const navbarList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");

// creating the navbar elements
let navbar = "";
function createNavlist() {
  sections.forEach(function (section) {
    navbar += `<li> <a class="menu__link" href="#${section.id}">
          ${section.dataset.nav}</a></li>`;
  });
  navbarList.innerHTML = navbar;
}
// calling this function
createNavlist();

// adding active class to section when near top of viewport
const sectionOffset = function (section) {
  const sectionRect = section.getBoundingClientRect();
  return sectionRect.top;
};
// section and link activation
function activateSection() {
  const activeLink = document.querySelectorAll(".menu__link");
  sections.forEach(function (section, li) {
    const offset = sectionOffset(section);
    if (offset < 200 && offset >= -200) {
      section.classList.add("your-active-class");
      activeLink[li].classList.add("active_link");
    } else {
      section.classList.remove("your-active-class");
      activeLink[li].classList.remove("active_link");
    }
  });
}
window.addEventListener("scroll", activateSection);

// scrolling to anchor ID using scrollIntoView()
document.querySelectorAll('a[href*="#"]').forEach(function (a) {
  a.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

