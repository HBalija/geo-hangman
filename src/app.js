import { getCountry } from './requests';
import GeoHangman from './geo-hangman';

const puzzle = document.getElementById('puzzle');
const guessCount = document.getElementById('guess');

let game;

const render = () => {
  puzzle.innerHTML = '';
  guessCount.textContent = game.statusMessage;

  game.puzzle.split('').forEach(letter => {
    const letterEl = document.createElement('span');
    letterEl.textContent = letter;
    puzzle.appendChild(letterEl);
  });
};

window.addEventListener('keypress', e => {
  if (game.status === 'playing') {
    const guess = e.key;
    game.makeGuess(guess);
    render();
  }
});


// promise function call refactored to async await

const startGame = async () => {
  const country = await getCountry();
  game = new GeoHangman(country, 3);
  render();
};


/*

// promise function call

const startGame = () => {
  getCountry().then(country => {
    game = new GeoHangman(country, 3);
    render();
  }).catch(error => {
    console.log(error);
  });
};


// callback pattern function call

const startGame = () => {
  getCountry((error, country) => {
    if (error) {
      console.log(error);
    } else {
      game = new GeoHangman(country, 3);
      render();
    }
  });
};

 */

document.getElementById('reset').addEventListener('click', startGame);

startGame();
