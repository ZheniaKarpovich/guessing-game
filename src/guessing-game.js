class GuessingGame {
    constructor() {
    }
    setRange(min, max) {
        this.a=min;
        this.b=max;
    }

    guess() {
        return Math.round((this.b+this.a)/2);
    }

    lower() {
        this.b=Math.round((this.b+this.a)/2);
    }

    greater() {
        this.a= Math.round((this.b+this.a)/2);
    }
}

module.exports = GuessingGame;