import {
  analyzeAnswer, askQuestion, getAnswer, initGame,
} from '../index.js';
import { findGcd, generateRandomInteger } from '../helpers.js';

const MIN_INTEGER = 1;
const MAX_INTEGER = 100;
const MAIN_RULE = 'Find the greatest common divisor of given numbers.';

const playRound = () => {
  const randomNum1 = generateRandomInteger(MIN_INTEGER, MAX_INTEGER);
  const randomNum2 = generateRandomInteger(MIN_INTEGER, MAX_INTEGER);
  console.log(askQuestion(`${randomNum1} ${randomNum2}`));

  const userAnswer = Number(getAnswer());
  const expectedAnswer = findGcd(randomNum1, randomNum2);
  const feedback = analyzeAnswer(userAnswer, expectedAnswer);
  console.log(feedback);

  return userAnswer === expectedAnswer;
};

const playBrainGcd = () => {
  initGame(MAIN_RULE, playRound);
};

export default playBrainGcd;
