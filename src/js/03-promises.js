import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';
import { refs } from './refs';
const { form } = refs;
form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const delayMs = +e.target.delay.value;
  const stepMs = +e.target.step.value;
  const amount = +e.target.amount.value;

  let newDelay = delayMs;
  for (let i = 1; i <= amount; i++) {
    createPromise(i, newDelay)
      .then(({ position, delay }) => {
        nitiflixSettings(
          'success',
          `Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        nitiflixSettings(
          'failure',
          `Rejected promise ${position} in ${delay}ms`
        );
      });
    newDelay += stepMs;
  }
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

function nitiflixSettings(typeOfAttentions, message) {
  return Notiflix.Notify[typeOfAttentions](message, {
    // timeout: 6000,
    distance: '20px',
    position: 'center-top',
  });
}
