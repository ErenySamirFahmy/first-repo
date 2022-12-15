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
// section activation
function activateSection() {
  sections.forEach(function (section) {
    const offset = sectionOffset(section);
    if (offset < 200 && offset >= -200) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  });
}
window.addEventListener("scroll", activateSection);

//another solution
/*// removing the active class
const removeActiveClass = function (section) {
  section.classList.remove("your-active-class");
};

// adding the active class
const addActiveClass = function (conditional, section) {
  if (conditional) {
    section.classList.add("your-active-class");
  }
};*/

// scrolling to anchor ID using scrollIntoView()
document.querySelectorAll('a[href*="#"]').forEach(function (a) {
  a.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//another solutions
/*function scroll() {
  listItems.forEach(function scrollToSection(item) {
    item.addEventListener("click", function () {
      for (i = 0; i < sections.length; i++) {
        sections[i].addEventListener("click", scrollToSection);
      }
    });
  });
}
// calling this function
scroll();*/

//var scroll = new SmoothScroll('a[href*="#"]');
//window.scroll({top:sectionOffset, behavior:"smooth"})

/*navbarList.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.nav) {
    document
      .getElementById(`${event.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      location.hash = `${event.target.dataset.nav}`;
    }, 200);
  }
});*/
