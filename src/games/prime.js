import {
  analyzeAnswer, askQuestion, getAnswer, initGame,
} from '../index.js';
import { generateRandomInteger, isPrime } from '../helpers.js';

const MIN_INTEGER = 1;
const MAX_INTEGER = 50;
const MAIN_RULE = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playRound = () => {
  const randomInteger = generateRandomInteger(MIN_INTEGER, MAX_INTEGER);
  console.log(askQuestion(randomInteger));

  const userAnswer = getAnswer();
  const expectedAnswer = isPrime(randomInteger) ? 'yes' : 'no';
  const feedback = analyzeAnswer(userAnswer, expectedAnswer);
  console.log(feedback);

  return userAnswer === expectedAnswer;
};

const playBrainPrime = () => {
  initGame(MAIN_RULE, playRound);
};

export default playBrainPrime;
