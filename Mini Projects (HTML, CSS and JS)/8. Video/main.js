window.addEventListener("load", () => {
  document.querySelector(".loaderClass").classList.add("fade-loader");
});

let btn = document.querySelector(".btn");
let video = document.querySelector(".video-container");

btn.addEventListener("click", () => {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});
