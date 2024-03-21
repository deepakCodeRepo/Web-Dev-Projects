let toggleBtn = document.querySelector(".toggle-btn");
let mainLinks = document.querySelector(".main-links");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("change");
  mainLinks.classList.toggle("show-links");
});

// if we use the below code then style is added as a attribute to html which causes issues
// two chunks of codes below are the same written in different ways

/* toggleBtn.addEventListener("click", () => {
  mainLinks.classList.add("links");
  if (document.querySelector(".links").style.display === "block") {
    document.querySelector(".links").style.display = "none";
    mainLinks.classList.remove("links");
    mainLinks.removeAttribute("style");
  } else {
    document.querySelector(".links").style.display = "block";
    mainLinks.removeAttribute("style");
  }
}); */

/* toggleBtn.addEventListener("click", () => {
  if (mainLinks.style.display === "block") {
    mainLinks.style.display = "none";
  } else {
    mainLinks.style.display = "block";
  }
}); */
