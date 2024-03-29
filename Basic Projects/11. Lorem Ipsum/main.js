let btn = document.querySelector(".btn");
let paragraph = document.querySelector(".paragraphs");

btn.addEventListener("click", () => {
  let value = document.querySelector(".input").value;

  removeParagraph();

  for (let index = 1; index <= value; index++) {
    displayParagraph(getParagraph());
  }
});

function getParagraph() {
  let paragraph = "";
  let paragraphLength = Math.floor(Math.random() * (51 - 15) + 15);

  for (let i = 0; i < paragraphLength; i++) {
    let text = "";
    let word = "";
    let wordLength = Math.floor(Math.random() * 6 + 1);

    for (let index = 0; index < wordLength; index++) {
      let randomCaps = Math.floor(Math.random() * (91 - 65) + 65);
      let randomSmall = Math.floor(Math.random() * (123 - 97) + 97);
      let letter = String.fromCharCode(randomCaps, randomSmall);
      text += letter;
    }

    for (let index = 0; index < text.length; index++) {
      let random = Math.floor(Math.random() * text.length);
      word += text.charAt(random);
    }
    paragraph += word + " ";
  }
  return paragraph;
}

function displayParagraph(lines) {
  let newPara = document.createElement("p");
  paragraph.append(newPara);
  newPara.innerText = lines;
}

function removeParagraph() {
  while (paragraph.hasChildNodes()) {
    paragraph.removeChild(paragraph.firstChild);
  }
}
