import {
  askQuestion,
  getAnswer,
  analyzeAnswer,
  initGame,
} from '../index.js';
import { generateRandomInteger, isEven } from '../helpers.js';

const MIN_INTEGER = 0;
const MAX_INTEGER = 100;
const MAIN_RULE = 'Answer "yes" if the number is even, otherwise answer "no".';

const playRound = () => {
  const randomInteger = generateRandomInteger(MIN_INTEGER, MAX_INTEGER);
  console.log(askQuestion(randomInteger));

  const userAnswer = getAnswer();
  const expectedAnswer = isEven(randomInteger) ? 'yes' : 'no';
  const feedback = analyzeAnswer(userAnswer, expectedAnswer);
  console.log(feedback);

  return userAnswer === expectedAnswer;
};

const playBrainEven = () => {
  initGame(MAIN_RULE, playRound);
};

export default playBrainEven;
