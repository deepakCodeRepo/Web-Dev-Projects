let openModal = document.querySelector(".btn");
let containerOverlap = document.querySelector(".container-overlap");
let closeBtn = document.querySelector(".fa-times");
let bodyColor = document.querySelector(".body-bg");

openModal.addEventListener("click", () => {
  bodyColor.classList.replace("body-bg", "body-bg-color");
  setTimeout(() => {
    containerOverlap.classList.replace(
      "container-overlap",
      "show-container-overlap"
    );
  }, 500);
});
closeBtn.addEventListener("click", () => {
  containerOverlap.classList.replace(
    "show-container-overlap",
    "container-overlap"
  );
  bodyColor.classList.replace("body-bg-color", "body-bg");
});
