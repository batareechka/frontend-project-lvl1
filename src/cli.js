import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');

const greetUser = () => {
  console.log('Welcome to the Brain Games!');

  const userName = getUserName();

  console.log(`Hello, ${userName}!`);
};

export default greetUser;
