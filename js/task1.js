const delay = (ms) => {
  return new Promise((resolev, reject) => {
    setTimeout(() => {
      resolev(ms);
    }, ms);
  });
};

const logger = (time) => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger);
delay(1000).then(logger);
delay(1500).then(logger);
