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

        cheerCounter() {
            this.cheerTimer = setInterval(this.increaseCheer, 500);
        },

        ageCounter() {
            this.ageTimer = setInterval(this.increaseAge, 5000);
        },

        transformCounter() {
            this. transformTimer = setInterval(this.transformTimer, 1000);
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
        }else{
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
        }else{
            newGame.charity -= 1;
        }
    },

    increaseCheer() {
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
    },

    transform () {
        if (newGame.time < 40) {
            newGame.time++;
            console.log(newGame.time);
        }else{
            clearInterval(newGame.transformCounter);
            $('#mariah').addClass('flash');
            $('#mariah').fadeOut(3000);
            setTimeout(function() { $('#krampus').css('opacity', '100');}, 1000);
            setTimeout(playSong, 500);
            setTimeout(function() {$('#message').text("Let's Rule Christmas!!! HAHAHA");}, 4000);
            return setTimeout(backTransition, 4000);
        }
    },



    /* Buttons */

    makeMoney() {
        if (newGame.bankAccount < 100) {
            newGame.bankAccount += 10;
            newGame.charityDonations -= 1;
        }
    },

    donate() {
        if (newGame.charityDonations < 100) {
            newGame.charityDonations += 10;
            newGame.bankAccount -= 1;
        }
    },

    supressCheer() {
        if(newGame.holidayCheer > 0){
        newGame.holidayCheer = 0;
        }
    },

    /* Button Animations */
    
    


    }