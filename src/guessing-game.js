class GuessingGame  {

  constructor() {
    this.min = 0;
    this.max = 0;
    this.currentGuess = NaN;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }
  guess() {
    this.currentGuess = this.min + Math.round((this.max - this.min) /2);
    return this.currentGuess;
  }
  greater() {
    this.min = this.currentGuess;
  }
  lower() {
    this.max = this.currentGuess;
  }
}

module.exports = GuessingGame;
