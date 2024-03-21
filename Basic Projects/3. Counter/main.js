let count = 0;
let value = document.querySelector(".value");

document.querySelector(".btn-decrease").addEventListener("click", () => {
  count--;
  value.innerHTML = count;
  if (count < 0) {
    value.style.color = "red";
  } else if (count === 0) {
    value.style.color = "black";
  }
});
document.querySelector(".btn-reset").addEventListener("click", () => {
  count = 0;
  value.innerHTML = count;
  if (count === 0) {
    value.style.color = "black";
  }
});
document.querySelector(".btn-increase").addEventListener("click", () => {
  count++;
  value.innerHTML = count;
  if (count > 0) {
    value.style.color = "green";
  } else if (count === 0) {
    value.style.color = "black";
  }
});

// another way to code

/* let count = 0;
let value = document.querySelector(".value");
let btns = document.getElementsByClassName("btn");

Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.classList.contains("btn-decrease")) {
      count--;
    } else if (btn.classList.contains("btn-reset")) {
      count = 0;
    } else if (btn.classList.contains("btn-increase")) {
      count++;
    }
    if (count > 0) {
      value.style.color = "green";
    } else if (count === 0) {
      value.style.color = "black";
    } else if (count < 0) {
      value.style.color = "red";
    }
    value.innerHTML = count;
  });
}); */
