class GuessingGame {
    constructor() 
    {
        this.number=number;
    }

    setRange(min, max) {
        this.min=min;
        this.max=max;
    }

    guess() {
        return Math.round((this.max-this.min)/2);
    }

    lower() {
        this.max=Math.round(this.max/2);
    }

    greater() {
        this.min= Math.round((this.max-this.min)/2);
    }
}

module.exports = GuessingGame;