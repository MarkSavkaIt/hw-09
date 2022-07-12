function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

const form = document.querySelector(".form");
const inputDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const inputAmonut = document.querySelector('input[name="amount"]');

console.log(inputDelay, inputStep, inputAmonut);
