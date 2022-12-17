import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';
import { refs } from './refs';

function onSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = valuesFromInputs(e.target);
  let newDelay = delay;
  for (let i = 1; i <= amount; i++) {
    createPromise(i, newDelay).then(onResolve).catch(onReject);
    newDelay += step;
  }
  e.target.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onResolve({ position, delay }) {
  return nitiflixSettings(
    'success',
    `Fulfilled promise ${position} in ${delay}ms`
  );
}
function onReject({ position, delay }) {
  return nitiflixSettings(
    'failure',
    `Rejected promise ${position} in ${delay}ms`
  );
}

function valuesFromInputs(paramsEl) {
  const formData = new FormData(paramsEl);
  const valuesFromInputs = {};
  for (let [key, value] of formData) {
    valuesFromInputs[key] = +value;
  }
  return valuesFromInputs;
}

function nitiflixSettings(typeOfAttentions, message) {
  return Notiflix.Notify[typeOfAttentions](message, {
    distance: '20px',
    position: 'center-top',
  });
}

refs.form.addEventListener('submit', onSubmit);
