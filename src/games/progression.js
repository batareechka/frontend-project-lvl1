import readlineSync from 'readline-sync';
import { generateRandomInteger } from '../helpers.js';
import { analyzeAnswer, askQuestion, initGame } from '../index.js';

const MIN_INTEGER = 0;
const MAX_INTEGER = 20;
const PROGRESSION_LENGTH = 10;
const MAX_PROGRESSION_STEP = 10;
const MAIN_RULE = 'What number is missing in the progression?';

const generateProgression = () => {
  const firstNum = generateRandomInteger(MIN_INTEGER, MAX_INTEGER);
  const progression = [firstNum];
  const progressionStep = generateRandomInteger(MIN_INTEGER, MAX_PROGRESSION_STEP);

  for (let i = 1; i < PROGRESSION_LENGTH; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }

  return progression;
};

const playRound = () => {
  const progression = generateProgression();
  const hiddenElIndex = generateRandomInteger(0, progression.length - 1);
  const expectedAnswer = progression[hiddenElIndex];
  const question = progression.map((item, index) => (index === hiddenElIndex ? '..' : item)).join(' ');

  console.log(askQuestion(question));

  const userAnswer = Number(readlineSync.question('Your answer: '));
  const feedback = analyzeAnswer(userAnswer, expectedAnswer);
  console.log(feedback);

  return userAnswer === expectedAnswer;
};

const playBrainProgression = () => {
  initGame(MAIN_RULE, playRound);
};

export default playBrainProgression;
