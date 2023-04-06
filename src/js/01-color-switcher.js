function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

const colorSwitcher = () => {
  document.body.style.backgroundColor = getRandomHexColor();
  interval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.setAttribute('disabled', '');
};

startBtn.addEventListener('click', colorSwitcher);

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
  startBtn.removeAttribute('disabled');
});
