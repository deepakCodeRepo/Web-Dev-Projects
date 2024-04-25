//INFO: To setup dynamic year
let date = new Date();
let year = date.getFullYear();

let footerText = document.querySelector(".footer-text");
footerText.innerText = `copyright © back roads travel tours company ${year}. all rights reserved`;

//INFO: fixed header
let header = document.querySelector(".header");
let backtoTop = document.getElementById("top-link");

window.addEventListener("scroll", () => {
  const scrollHeight = window.scrollY;
  const headerHeight = header.getBoundingClientRect().height;
  if (scrollHeight > headerHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }

  //INFO: back to top button
  if (scrollHeight < 520) {
    backtoTop.classList.remove("top-link");
  } else {
    backtoTop.classList.add("top-link");
  }
});

//INFO: scrolling to the top of a section
document.querySelectorAll(".links").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let element = document.getElementById(link.dataset.page);
    let elementPosition = element.offsetTop;
    let headerHeight = header.getBoundingClientRect().height;
    let position = elementPosition - headerHeight;

    if (!header.classList.contains("fixed")) {
      position = position - headerHeight;
    }
    window.scrollTo({
      top: position,
      left: 0,
      behavior: "smooth",
    });
  });
});
