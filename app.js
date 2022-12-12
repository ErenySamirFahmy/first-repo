// define global variables
const navbarList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

// creating the navbar elements
let navList = "";
function createNavlist() {
  sections.forEach((section) => {
    navList += `<li> <a class="nav__link menu__link" href="#${section.id}" id="navli">
          ${section.dataset.nav}</a></li>`;
  });
  navbarList.innerHTML = navList;
}
// calling this function
createNavlist();

// adding active class to section when near top of viewport
const sectionOffset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

// removing the active class
const removeActiveClass = (section) => {
  section.classList.remove("your-active-class");
};

// adding the active class
const addActiveClass = (conditional, section) => {
  if (conditional) {
    section.classList.add("your-active-class");
  }
};

// scrolling to anchor ID using scrollTO event
const scroll = () => {
  const listItems = document.querySelectorAll(".navbar__menu a");
  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      for (i = 0; i < sections; i++) {
        sections[i].addEventListener("click", sectionScroll(item));
      }
    });
  });
};
// calling this function
scroll();

// section activation
function activateSection() {
  sections.forEach((section) => {
    const elementOffset = sectionOffset(section);

    viewport = () => elementOffset < 200 && elementOffset >= -200;

    removeActiveClass(section);
    addActiveClass(viewport(), section);
  });
}

window.addEventListener("scroll", activateSection);
