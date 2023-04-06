// DATA

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const datetimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
startBtn.setAttribute('disabled', '');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = new Date();
    if (selectedDates[0].getTime() < date.getTime()) {
      startBtn.setAttribute('disabled', '');
      window.alert('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');
    }
  },
};
flatpickr(datetimePicker, options);

// FUNCTION

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
const addLeadingZero = value => value.toString().padStart(2, '0');

startBtn.addEventListener('click', () => {
  startBtn.setAttribute('disabled', '');
  datetimePicker.setAttribute('disabled', '');
  let timer = setInterval(() => {
    let timeLeft = new Date(datetimePicker.value) - new Date();
    let ms = convertMs(timeLeft);
    console.log(convertMs(timeLeft));
    if (timeLeft > 0) {
      days.textContent = addLeadingZero(ms.days);
      hours.textContent = addLeadingZero(ms.hours);
      minutes.textContent = addLeadingZero(ms.minutes);
      seconds.textContent = addLeadingZero(ms.seconds);
    } else {
      clearInterval(timer);
      startBtn.removeAttribute('disabled');
      datetimePicker.removeAttribute('disabled');
    }
  }, 1000);
});
