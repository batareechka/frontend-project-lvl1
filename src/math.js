export const generateRandomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const isEven = (number) => number % 2 === 0;

export const findGcd = (number1, number2) => {
  let a = number1;
  let b = number2;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

export const isPrime = (number) => {
  if (number === 1) return false;

  for (let n = Math.floor(number / 2); n > 1; n -= 1) {
    if (number % n === 0) return false;
  }
  return true;
};

export const generateProgression = (firstNumber, progressionStep, progressionLength) => {
  const progression = [];
  for (let i = 1; i <= progressionLength; i += 1) {
    progression[i - 1] = firstNumber + progressionStep * (i - 1);
  }
  return progression;
};
