function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');
function createBoxes(amount) {
  const boxes = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxes.push(box);
    size += 10;
  }
  boxesDiv.append(...boxes);
}
function destroyBoxes() {
  boxesDiv.innerHTML = '';
}
createButton.addEventListener('click', () => {
  const amount = input.value;
  createBoxes(amount);
  input.value = '';
});
destroyButton.addEventListener('click', destroyBoxes);

