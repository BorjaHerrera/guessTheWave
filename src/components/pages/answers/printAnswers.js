import { waves } from '../../wavesArray/wavesArray';
import { printWave } from '../printWave/printWave';
import { getCurrentWave, incrementCurrentWave } from '../quiz/quiz';
import { getScore, handleScore, printScore } from '../score/score';
import { getRightAnswer, getWrongAnswers, shuffleAnswers } from './getAnswers';

export const printAnswers = (answersContainer, correctIndex) => {
  const correctWave = getRightAnswer(correctIndex);
  const wrongWaves = getWrongAnswers(correctIndex);
  const answers = shuffleAnswers(correctWave, wrongWaves);

  answersContainer.innerHTML = '';

  for (const wave of answers) {
    const answerButton = document.createElement('button');
    const waveName = document.createElement('h4');

    waveName.textContent = wave.name;
    answerButton.className = 'wave-info-container';
    waveName.className = 'wave-name';

    answerButton.appendChild(waveName);
    answersContainer.appendChild(answerButton);

    answerButton.addEventListener('click', (event) => {
      handleScore(event, correctIndex);
      const indexWave = getCurrentWave();
      if (indexWave < waves.length - 1) {
        incrementCurrentWave();
        setTimeout(() => {
          printWave(getCurrentWave());
          printAnswers(answersContainer, getCurrentWave());
        }, 600);
      } else {
        printScore(getScore());
      }
    });
  }
};
