import { waves } from '../../wavesArray/wavesArray';
import { printAnswers } from '../answers/printAnswers';
import './printWave.css';

export const printWave = (index) => {
  const wave = waves[index];

  const waveImg = document.querySelector('.wave-img');
  const clue = document.querySelector('.clue');
  const answersContainer = document.querySelector('.answers-container');

  waveImg.src = wave.image;
  waveImg.alt = wave.name;
  clue.textContent = wave.clue;

  printAnswers(answersContainer, index);
};
