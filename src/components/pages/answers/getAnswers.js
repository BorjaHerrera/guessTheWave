import { waves } from '../../wavesArray/wavesArray';
import './answers.css';

export const getRightAnswer = (correctIndex) => {
  const correctWave = waves[correctIndex];
  return correctWave;
};

export const getWrongAnswers = (correctIndex) => {
  const wrongWaves = [];
  const wavesUsed = new Set([correctIndex]);

  while (wrongWaves.length < 3) {
    const randomIndex = Math.floor(Math.random() * waves.length);
    if (!wavesUsed.has(randomIndex)) {
      wrongWaves.push(waves[randomIndex]);
      wavesUsed.add(randomIndex);
    }
  }
  return wrongWaves;
};

export const shuffleAnswers = (correctWave, wrongWaves) => {
  const allAnswers = [correctWave, ...wrongWaves];

  for (let i = allAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
  }

  return allAnswers;
};
