import readlineSync from 'readline-sync';

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

const finishGame = (result) => {
  if (result) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};

export {
  getUserName,
  askQuestion,
  getAnswer,
  analyzeAnswer,
  greetUser,
  finishGame,
};
