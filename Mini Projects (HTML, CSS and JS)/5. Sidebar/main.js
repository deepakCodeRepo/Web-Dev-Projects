let toggleBtn = document.querySelector(".fa-bars");
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector(".fa-times");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});
