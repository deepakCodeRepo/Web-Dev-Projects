/*let plusBtn = document.querySelectorAll(".fa-plus-square");
let answer = document.querySelectorAll(".ans");

plusBtn[0].addEventListener("click", () => {
  showAnswer(0);
});

plusBtn[1].addEventListener("click", () => {
  showAnswer(1);
});

plusBtn[2].addEventListener("click", () => {
  showAnswer(2);
});

function showAnswer(i) {
  if (plusBtn[i].classList.contains("fa-plus-square")) {
    plusBtn[i].classList.replace("fa-plus-square", "fa-minus-square");
  } else {
    plusBtn[i].classList.replace("fa-minus-square", "fa-plus-square");
  }
  for (let index = 0; index < 3; index++) {
    if (index === i) {
      continue;
    } else {
      plusBtn[index].classList.replace("fa-minus-square", "fa-plus-square");
    }
  }

  if (answer[i].classList.contains("ans")) {
    answer[i].classList.replace("ans", "show-answer");
  } else {
    answer[i].classList.replace("show-answer", "ans");
  }
  for (let index = 0; index < 3; index++) {
    if (index === i) {
      continue;
    } else {
      answer[index].classList.replace("show-answer", "ans");
    }
  }
}
*/

//NOTE: this is a more dynamic way of writing the above code and its recommended.

let plusBtn = document.querySelectorAll(".fa-plus-square");
let answerAll = document.querySelectorAll(".ans");

plusBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const answer = e.currentTarget.parentElement.nextElementSibling;
    // console.log(btn.parentElement.nextElementSibling);
    const i = Array.from(plusBtn).indexOf(btn);
    if (answer.classList.contains("ans")) {
      answer.classList.replace("ans", "show-answer");
    } else {
      answer.classList.replace("show-answer", "ans");
    }
    for (let index = 0; index < plusBtn.length; index++) {
      if (index === i) {
        continue;
      } else {
        answerAll[index].classList.replace("show-answer", "ans");
      }
    }

    if (btn.classList.contains("fa-plus-square")) {
      btn.classList.replace("fa-plus-square", "fa-minus-square");
    } else {
      btn.classList.replace("fa-minus-square", "fa-plus-square");
    }
    for (let index = 0; index < plusBtn.length; index++) {
      if (index === i) {
        continue;
      } else {
        plusBtn[index].classList.replace("fa-minus-square", "fa-plus-square");
      }
    }
  });
});
