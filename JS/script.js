const containerEl = document.querySelector(".container");

for (let index = 0; index < 28; index++) {
  const colorContainer = document.createElement("div");
  containerEl.appendChild(colorContainer);
  colorContainer.classList = "color_container";
}
const colorContainerEls = document.querySelectorAll(".color_container");
const colorGenerator = () => {
  colorContainerEls.forEach((colorContainerEl) => {
    const newColorCode = randomColor();
      colorContainerEl.style.backgroundColor = "#" + newColorCode;
      colorContainerEl.innerText=`#${newColorCode}`
  });
};
colorGenerator();

randomColor();
function randomColor() {
  const chars = "0123456789abcdef";
  const codeLength = 6;
  let colorCode = "";
  for (let index = 0; index < codeLength; index++) {
    let randomeNum = Math.floor(Math.random() * chars.length);

    colorCode += chars.substring(randomeNum, randomeNum + 1);
  }
  return colorCode;
}
