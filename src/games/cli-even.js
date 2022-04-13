import { MIN_INTEGER, MAX_INTEGER, MAX_ROUNDS_COUNT } from '../config.js';
import {
  askQuestion,
  getAnswer,
  analyzeAnswer,
  greetUser, finishGame,
} from '../index.js';
import { generateRandomInteger, isEven } from '../helpers.js';

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
  let correctAnswersCount = 0;

  greetUser();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (correctAnswersCount < MAX_ROUNDS_COUNT) {
    if (playRound()) {
      correctAnswersCount += 1;
    } else {
      correctAnswersCount = 0;
      finishGame(false);
    }
  }
  finishGame(true);
};

export default playBrainEven;
