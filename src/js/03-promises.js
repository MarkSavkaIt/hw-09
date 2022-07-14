import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const result = { position, delay };
    setTimeout(() => (shouldResolve ? resolve(result) : reject(result)), delay);
  });
}

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const {
    delay: { value: delay },
    step: { value: step },
    amount: { value: amount },
  } = e.target.elements;

  for (let i = 1, letDelay = +delay; i <= +amount; i++, letDelay += +step) {
    createPromise(i, letDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});
// console.log(inputDelay, inputStep, inputAmonut);
