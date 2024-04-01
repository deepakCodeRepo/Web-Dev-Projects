let btns = document.querySelectorAll(".btn");
let images = document.querySelectorAll(".img");

//NOTE: logic for finite scrolling and buttons disappearing
window.addEventListener("load", () => {
  btns[0].style.display = "none";
});
let count = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("next")) {
      images[++count].classList.add("show-img");
      for (let index = 0; index < images.length; index++) {
        if (index === count) {
          continue;
        } else {
          images[index].classList.remove("show-img");
        }
      }
    } else if (e.currentTarget.classList.contains("prev")) {
      images[--count].classList.add("show-img");
      for (let index = 0; index < images.length; index++) {
        if (index === count) {
          continue;
        } else {
          images[index].classList.remove("show-img");
        }
      }
    }
    if (count === 0) {
      btns[0].style.display = "none";
    } else if (count === images.length - 1) {
      btns[1].style.display = "none";
    } else {
      btns[0].style.display = "block";
      btns[1].style.display = "block";
    }
  });
});

//NOTE: logic for infinite scrolling
// let count = 0;
// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     if (e.currentTarget.classList.contains("next")) {
//       if (count === images.length - 1) {
//         count = -1;
//       }
//       images[++count].classList.add("show-img");
//       for (let index = 0; index < images.length; index++) {
//         if (index === count) {
//           continue;
//         } else {
//           images[index].classList.remove("show-img");
//         }
//       }
//     } else if (e.currentTarget.classList.contains("prev")) {
//       if (count === 0) {
//         count = 4;
//       }
//       images[--count].classList.add("show-img");
//       for (let index = 0; index < images.length; index++) {
//         if (index === count) {
//           continue;
//         } else {
//           images[index].classList.remove("show-img");
//         }
//       }
//     }
//   });
// });

//NOTE: Logic to print pairs of numbers cyclically
// let count = 0;
// let count1 = 1;
// for (let index = 0; index < 8; index++) {
//   if (count === 4) {
//     count = 0;
//   }
//   if (count === 3) {
//     count1 = 0;
//   }
//   console.log(count++, count1++);
// }
