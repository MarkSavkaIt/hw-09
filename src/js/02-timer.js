import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
const input = document.getElementById('datetime-picker');
const start = document.querySelector('[data-start]');
const timer = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
let dateFromInput;
let timerInterval;

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: selectedDates => {
    console.log('onClose: ', selectedDates[0].getTime());
    if (selectedDates[0] > Date.now()) {
      start.disabled = false;
      dateFromInput = selectedDates[0];
    } else start.disabled = true;
  },
});

start.addEventListener('click', e => {
  e.preventDefault();
  clearInterval(timerInterval);
  timeToEnd(dateFromInput);
});

function timeToEnd(end) {
  start.disabled = true;
  const toEnd = end / 1000;
  timerInterval = setInterval(() => {
    const now = (Date.now() / 1000).toFixed();
    if (toEnd - now <= 0) {
      clearInterval(timerInterval);
      start.disabled = false;
    }
    console.log('timeToEnd', toEnd - now);
    timer.days.textContent = Math.floor(((toEnd - now) / 60 / 60 / 24) % 24); // days
    timer.hours.textContent = Math.floor(((toEnd - now) / 60 / 60) % 60); // hours
    timer.minutes.textContent = Math.floor(((toEnd - now) / 60) % 60); // minutes
    timer.seconds.textContent = Math.floor((toEnd - now) % 60); // seconds
  }, 1000);
}
