import runEngine from '../index.js';
import { findGcd, generateRandomInteger } from '../math.js';

const MIN_INTEGER = 1;
const MAX_INTEGER = 100;
const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const randomNum1 = generateRandomInteger(MIN_INTEGER, MAX_INTEGER);
  const randomNum2 = generateRandomInteger(MIN_INTEGER, MAX_INTEGER);
  const question = `${randomNum1} ${randomNum2}`;
  const answer = String(findGcd(randomNum1, randomNum2));

  return [question, answer];
};

const playBrainGcd = () => {
  runEngine(description, generateRound);
};

export default playBrainGcd;
