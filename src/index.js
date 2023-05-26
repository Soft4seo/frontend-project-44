import readlineSync from 'readline-sync';

export const gameRounds = 3;

const runGameEngine = (rounds, gameTask) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameTask);

  for (let count = 0; count < gameRounds; count += 1) {
    const [question, correctAnswer] = rounds[count];

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('You answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGameEngine;
