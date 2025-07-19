// Open menu in mobile

// const hamburger = document.querySelector(".hamburger");
// const mainNav = document.querySelector(".nav-main");

// const toggleNav = () => {
//   mainNav.classList.toggle("open");
// };

// hamburger.addEventListener("click", toggleNav);

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    mainNav.classList.remove("open");
  });
});

// faq accordion
window.addEventListener("load", () => {
  const dataAccordionContainer = document.querySelectorAll(
    "[data-accordion-container-faq]"
  );

  dataAccordionContainer.forEach((accordionContainer) => {
    const theTabsParent =
      accordionContainer.querySelectorAll(".single-accordion");
    const theTabs = accordionContainer.querySelectorAll(".accordion-trigger");

    function theAccordionClicks(accordionClickEvent) {
      // const clickedTab = accordionClickEvent.currentTarget;
      const parentTab = this.parentElement;

      for (let i = 0; i < theTabsParent.length; i++) {
        if (theTabsParent[i] != parentTab) {
          theTabsParent[i].classList.remove("active");
        }
      }

      if (parentTab.classList.contains("active")) {
        parentTab.classList.remove("active");
      } else {
        parentTab.classList.add("active");
      }
      accordionClickEvent.preventDefault();
    }

    for (let i = 0; i < theTabs.length; i++) {
      theTabs[i].addEventListener("click", theAccordionClicks);
    }
  });
});

  