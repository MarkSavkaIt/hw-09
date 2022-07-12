const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

let timer;

buttonStart.addEventListener('click', e => {
  e.preventDefault();
  changeBodyColor();
  timer = setInterval(changeBodyColor, 1000);
  disabledButtonReverse();
});

buttonStop.addEventListener('click', e => {
  e.preventDefault();
  clearInterval(timer);
  stopBodyColor();
  disabledButtonReverse();
});

function randomColor() {
  return '#'.concat(Math.floor(Math.random() * 16777215).toString(16));
}

function stopBodyColor() {
  document.body.style.backgroundColor = '#fff';
}
function changeBodyColor() {
  console.log('randomColor', randomColor());
  document.body.style.backgroundColor = randomColor();
}
function disabledButtonReverse() {
  buttonStart.disabled = !buttonStart.disabled;
  buttonStop.disabled = !buttonStop.disabled;
}
