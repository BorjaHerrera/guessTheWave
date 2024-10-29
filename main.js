import { printHero } from './src/components/hero/hero';
import './style.css';

const divApp = document.querySelector('#app');

divApp.innerHTML = `
<main id="main">
<section id="hero"></section>
</main>
`;
printHero();
