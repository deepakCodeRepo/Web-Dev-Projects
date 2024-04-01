// if user chooses "simple"
let simple = document.getElementById("simple");
simple.addEventListener("click", () => {
  simpleFunction();
});
function simpleFunction() {
  let colorArray = [
    "red",
    "green",
    "blue",
    "aqua",
    "bisque",
    "cadetblue",
    "brown",
    "coral",
    "cornflowerblue",
    "cyan",
    "darkblue",
    "darkseagreen",
    "deeppink",
    "gold",
  ];
  let clickMe = document.getElementById("bg-btn");
  clickMe.addEventListener("click", () => {
    let ranNum = Math.floor(Math.random() * colorArray.length);
    document.getElementById("main-bg").style.backgroundColor =
      colorArray[ranNum];
    document.getElementById("color-name").innerHTML = colorArray[ranNum];
  });
}

//if user chooses "hex"
let hex = document.getElementById("hex");
hex.addEventListener("click", () => {
  hexFunction();
});
function hexFunction() {
  let colorString = "0123456789ABCDEF";
  let clickMe = document.getElementById("bg-btn");
  clickMe.addEventListener("click", () => {
    let bgColor = "";
    for (let i = 1; i <= 6; i++) {
      let ranNum = Math.floor(Math.random() * colorString.length);
      bgColor += colorString.charAt(ranNum);
    }
    document.getElementById("main-bg").style.backgroundColor = "#" + bgColor;
    document.getElementById("color-name").innerHTML = "#" + bgColor;
  });
}
