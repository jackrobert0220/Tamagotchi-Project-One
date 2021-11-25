let nameInput = null;
let ageInput = null;
const trashFx = new Audio('https://freesound.org/data/previews/171/171996_112577-lq.mp3');
const drinkFx = new Audio('https://freesound.org/data/previews/61/61392_792945-lq.mp3');
const practiceFx = new Audio('https://freesound.org/data/previews/1/1401_838-lq.mp3');
const songFX = new Audio('./audio/angelofdeath.mp3');


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
        if (newGame.bankAccount <= 0) {
            clearInterval(newGame.charityTimer);
            clearInterval(newGame.bankTimer);
            clearInterval(newGame.cheerTimer);
            clearInterval(newGame.transformTimer);
            setTimeout(pauseSong, 300);
            return $('#quit-beer').show();
        }else{
            newGame.bankAccount -= 1;
        }
    },

    reduceCharity() {
        if (newGame.charityDonations <= 0) {
            clearInterval(newGame.charityTimer);
            clearInterval(newGame.bankTimer);
            clearInterval(newGame.cheerTimer);
            clearInterval(newGame.transformTimer);
            setTimeout(pauseSong, 300);
            return $('#quit-skill').show();
        }else{
            newGame.charityDonations -= 1;
        }
    },

    increaseCheer() {
        if (newGame.holidayCheer === 100) {
            clearInterval(newGame.charityTimer);
            clearInterval(newGame.bankTimer);
            clearInterval(newGame.cheertimer);
            clearInterval(newGame.transformTimer);
            setTimeout(pauseSong, 300);
            return $('#quit-rage').show();
        }else{
            newGame.holidayCheer += 1;
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
            setTimeout(function() {$('#message').text("Let's Destroy the Holidays!!! HAHAHA");}, 4000);
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
    
    bankDance() {
        $('.buddy').addClass('animate__bounce animate__faster');
        setTimeout(function () { $('.buddy').removeClass('animate__bounce animate__faster'); }, 1000);
    },

    donateDance() {
        $('.buddy').addClass('animate__wobble animate__faster');
        setTimeout(function () { $('.buddy').removeClass('animate__wobble animate__faster'); }, 1000);
    },

    cheerDance() {
        $('.buddy').addClass('animate__pulse animate__faster');
        setTimeout(function () { $('.buddy').removeClass('animate__pulse animate__faster'); }, 1000);

    },


/* Sound Effects*/

playBank() {
    drinkFx.play();
},

playDonate() {
    trashFx.play();
},

playCheer() {
    practiceFx.play();
},

playSong() {
    songFX.play();
},

/* Start Game */

startGame() {
    newGame.bankCounter();
    newGame.charityCounter();
    newGame.cheerCounter();
    newGame.ageCounter();
    newGame.transformCounter();
},

};


/* Functions */

const collectAge = function collectAge() {
    console.log("sanity check");
    newGame.age = $('#input-age').val();
    newGame.age = parseInt(newGame.age);
    $('#span-age').text(`    ${newGame.age}`);
};
const collectName = function collectName() {
    console.log("sanity check");
    newGame.name = $('#input-name').val();
    $('#span-name').text(`    ${newGame.name}`);
};
const bankBar = function bankBar() {
    return $('#beer__bar').css(`width`, `${newGame.bankAccount}%`);
};
const charityBar = function charityBar() {
    return $('#skill__bar').css('width', `${newGame.charityDonations}%`);
};
const cheerBar = function cheerBar() {
    return $('#rage__bar').css('width', `${newGame.holidayCheer}%`);
};
const backTransition = function backTransition() {
    $('#demon-throne').css("opacity", "100");
};
const playSong = function playSong() {
    songFX.play();
}
const pauseSong = function pauseSong() {
    songFX.pause();
}


/* Event Listeners */

$('#trash').on('click', newGame.cheerDance);
$('#practice').on('click', newGame.donateDance);
$('#drink').on('click', newGame.bankDance);
$('#drink').on('click', newGame.playBank);
$('#trash').on('click', newGame.playCheer);
$('#practice').on('click', newGame.playDonate);
$('#drink').on('click', newGame.makeMoney);
$('#practice').on('click', newGame.donate);
$('#trash').on('click', newGame.supressCheer);
$("#input-button").on('click', function () {
    collectAge();
    collectName();
    $('#hippy').css("transition", "2s linear")
    $('#hippy').css("transform", "translatey(0%)");
    $('#hippy').css("opacity", "100");
    $("#input-form").remove();
    $("#message").text("will make as much $$$ as possible!!!")
    setTimeout(newGame.startGame, 2000);
});

/* Metric Bars */

setInterval(bankBar, 100);
setInterval(charityBar, 100);
setInterval(cheerBar, 100);
