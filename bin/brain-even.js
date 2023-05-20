#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
let count = 0;
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (count = 0; count < 3; count += 1) {
  const qrandNumber = Math.ceil(Math.random() * 100);
  console.log(`Question: ${qrandNumber}`);
  const answerQuest = readlineSync.question('Your answer: ');
  if ((qrandNumber % 2 === 0) && (answerQuest === 'yes')) {
    console.log('Correct!');
  } else if ((qrandNumber % 2 !== 0) && (answerQuest === 'no')) {
    console.log('Correct!');
  } else if ((qrandNumber % 2 === 0) && (answerQuest !== 'yes')) {
    console.log(`'${answerQuest}' is wrong answer ;(. Correct answer was 'yes'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  } else if ((qrandNumber % 2 !== 0) && (answerQuest !== 'no')) {
    console.log(`'${answerQuest}' is wrong answer ;(. Correct answer was 'no'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (count === 3) {
  console.log(`Congratulations, ${name}!`);
}
