import { refs } from './refs';
const { btnStart, btnStop, body } = refs;

btnStart.addEventListener('click', startDisco);
btnStop.addEventListener('click', stopDisco);
let colorsInterval = null;

const changeColorBody = () =>
  (body.style.backgroundColor = getRandomHexColor());

function startDisco() {
  changeColorBody();
  colorsInterval = setInterval(() => {
    changeColorBody();
  }, 700);
  btnStart.disabled = true;
}
function stopDisco() {
  clearInterval(colorsInterval);
  btnStart.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
