class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.previousAssumption = 0;
    this.result = null;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    const middleValue = Math.ceil((this.max + this.min) / 2);
    this.previousAssumption = middleValue;
    return middleValue;
  }

  lower() {
    this.max = this.previousAssumption;
  }

  greater() {
    this.min = this.previousAssumption;
  }
}

module.exports = GuessingGame;
