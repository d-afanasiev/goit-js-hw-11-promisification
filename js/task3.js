const refs = {
  btncreatePromise: document.querySelector(".form"),
};

const makeTransaction = (e) => {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget;
  let sumDelay = Number.parseInt(delay.value);
  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(i, sumDelay).then(logSuccess).catch(logError);
    sumDelay += Number.parseInt(step.value);
  }
};

const logSuccess = ({ position, delay }) => {
  Notiflix.Notify.Success(`Fulfilled promise ${position} in ${delay}ms`);
};

const logError = ({ position, delay }) => {
  Notiflix.Notify.Failure(`Rejected promise ${position} in ${delay}ms`);
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
      if (canProcess) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

refs.btncreatePromise.addEventListener("submit", makeTransaction);
