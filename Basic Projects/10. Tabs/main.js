let tabs = document.querySelectorAll(".tab");
let texts = document.querySelectorAll(".text");
let images = document.querySelectorAll(".image");

window.addEventListener("load", () => {
  images[0].classList.remove("image");
  texts[0].classList.remove("text");
  tabs[0].style.backgroundColor = "white";
});

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const i = Array.from(tabs).indexOf(tab);

    for (let index = 0; index < texts.length; index++) {
      if (index === i) {
        images[i].classList.remove("image");
        texts[i].classList.remove("text");
        tabs[i].style.backgroundColor = "white";
      } else {
        images[index].classList.add("image");
        texts[index].classList.add("text");
        tabs[index].style.backgroundColor = "hsl(212, 33%, 89%)";
      }
    }
  });
});
