let nameInput = null;
let ageInput = null;


/* Game */

const newGame = {
    name: nameInput,
    age: ageInput,
    time: 0,
    bankAccount: 100,
    charityDonations: 100,
    holidayCheer: 0,

    gameTimer: null,
    bankTimer: null,
    charityTimer: null,
    cheerTimer: null,
    ageTimer: null,
    transformTimer: null,

/* Timers */
    
    bankCounter() {
        this.bankTimer = setInterval(this.reduceBank, 500);
    },
    charityCounter() {
        this.charityTimer = setInterval(this.reduceCharity, 500);
    },







/* Metric Functions */ 

reduceBank() {
    if (newGame.bank <= 0) {
        clearInterval(newGame.charityTimer);
        clearInterval(newGame.bankTimer);
        clearInterval(newGame.cheerTimer);
        clearInterval(newGame.transformTimer);
        setTimeout(pauseSong, 300);
        return $('#quit-beer').show();
    } else {
        newGame.bank -= 1;
    }
},

reduceCharity() {
    if (newGame.charity <= 0) {
        clearInterval(newGame.charityTimer);
        clearInterval(newGame.bankTimer);
        clearInterval(newGame.cheerTimer);
        clearInterval(newGame.transformTimer);
        setTimeout(pauseSong, 300);
        return $('#quit-skill').show();
    } else {
        newGame.charity -= 1;
    }
},

increacesCheer() {
    if (newGame.cheer === 100) {
        clearInterval(newGame.charityTimer);
        clearInterval(newGame.bankTimer);
        clearInterval(newGame.cheertimer);
        clearInterval(newGame.transformTimer);
        setTimeout(pauseSong, 300);
        return $('#quit-rage').show();
    }else{
        newGame.cheer += 1;
    }
}

};