import readlineSync from 'readline-sync';

const MAX_ROUNDS_COUNT = 3;

let userName;

const getUserName = () => readlineSync.question('May I have your name? ');

const askQuestion = (str) => `Question: ${str}`;

const getAnswer = () => readlineSync.question('Your answer: ');

const analyzeAnswer = (userAnswer, expectedAnswer) => (userAnswer === expectedAnswer ? 'Correct!' : `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'`);

const greetUser = () => {
  console.log('Welcome to the Brain Games!');

  userName = getUserName();

  console.log(`Hello, ${userName}!`);

  return userName;
};

const initGame = (gameRuleMessage, playGameRound) => {
  let correctAnswersCount = 0;

  greetUser();

  console.log(gameRuleMessage);

  while (correctAnswersCount < MAX_ROUNDS_COUNT) {
    if (playGameRound()) {
      correctAnswersCount += 1;
    } else {
      correctAnswersCount = 0;
      break;
    }
  }

  const message = correctAnswersCount === MAX_ROUNDS_COUNT ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`;
  console.log(message);
};

export {
  getUserName,
  askQuestion,
  getAnswer,
  analyzeAnswer,
  greetUser,
  initGame,
};
