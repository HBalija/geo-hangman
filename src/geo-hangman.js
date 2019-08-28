export default class GeoHangman {
  constructor(country, remainingGuesses) {
    this.country = country;
    this.word = country.capital.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = 'playing';
  }

  get puzzle() {
    let puzzle = '';

    this.word.forEach(letter => {
      this.guessedLetters.includes(letter) || letter === ' ' ? puzzle += letter : puzzle += '*';
    });
    return puzzle;
  }

  makeGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (isUnique) {
      this.guessedLetters.push(guess);
      isBadGuess && this.remainingGuesses--;
    }

    this.calculateStatus();
  }

  calculateStatus() {
    const finished = this.word.every(
      letter => this.guessedLetters.includes(letter) || letter === ' ');
    if (finished === true) {
      this.status = 'completed';
    } else if (this.remainingGuesses === 0) {
      this.status = 'failed';
    }
  }

  get statusMessage() {
    if (this.status === 'playing') {
      return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === 'completed') {
      return `You guessed the word! ${this.country.capital} is the capital of ${this.country.name}`;
    } else {
      return `Nice try. The word was "${this.country.capital} - capital of ${this.country.name}"`;
    }
  }

}
