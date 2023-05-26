import runGameEngine, { gameRounds } from '../index.js';

const gameTask = 'What number is missing in the progression?';

const progressionLength = 10;

const createRound = () => {
  const startNumber = Math.ceil(Math.random() * 100);
  const stepProgression = Math.ceil(Math.random() * 10);
  const finalProgression = [];
  for (let count = 1; count <= progressionLength; count += 1) {
    finalProgression.push(startNumber + count * stepProgression);
  }
  const hiddenNumber = Math.ceil(Math.random() * progressionLength - 1);
  const correctAnswer = String(finalProgression[hiddenNumber]);
  finalProgression[hiddenNumber] = '..';
  const question = finalProgression.join(' ');
  return [question, correctAnswer];
};

const playProgressionGame = () => {
  const rounds = [];
  for (let count = 0; count < gameRounds; count += 1) {
    rounds[count] = createRound();
  }
  return runGameEngine(rounds, gameTask);
};

export default playProgressionGame;
