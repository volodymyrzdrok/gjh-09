import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';
import { refs } from './refs';
const {
  dataStartBtn,
  dataStopBtn,
  timerInput,
  daysData,
  hoursData,
  minutesData,
  secondsData,
} = refs;

const nitiflixWarning = () =>
  Notiflix.Notify.failure('Please choose a date in the future', {
    timeout: 1400,
    distance: '50px',
    position: 'center-top',
  });

let selectDateVar = null;
let timerInterval = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < this.now) {
      nitiflixWarning();
      dataStartBtn.disabled = true;
      dataStopBtn.disabled = true;
    } else {
      dataStartBtn.disabled = false;
      dataStopBtn.disabled = false;
      selectDateVar = selectedDates[0];
    }
  },
};
flatpickr(timerInput, options);

const timerAlgorytm = () => {
  const amountMs = selectDateVar - new Date();
  const correctNumbers = convertMs(amountMs);

  amountMs > 0
    ? createMarkupTimer(correctNumbers)
    : clearInterval(timerInterval);
};

function startOurTimer() {
  clearInterval(timerInterval);
  timerAlgorytm();
  timerInterval = setInterval(() => {
    timerAlgorytm();
  }, 1000);

  timerInput.disabled = true;
}

function stopOurTimer() {
  clearInterval(timerInterval);
  createMarkupTimer({});
  timerInput.disabled = false;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return addLeadingZero({ days, hours, minutes, seconds });
}

function createMarkupTimer({
  days = '00',
  hours = '00',
  minutes = '00',
  seconds = '00',
}) {
  daysData.textContent = days;
  hoursData.textContent = hours;
  minutesData.textContent = minutes;
  secondsData.textContent = seconds;
}

function addLeadingZero(valueObj) {
  return Object.keys(valueObj).reduce((newObj, key) => {
    newObj[key] = valueObj[key].toString().padStart(2, '0');
    return newObj;
  }, {});
}

dataStartBtn.addEventListener('click', startOurTimer);
dataStopBtn.addEventListener('click', stopOurTimer);
