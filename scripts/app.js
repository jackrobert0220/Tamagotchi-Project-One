console.log("js is loaded");

let nameInput = null;
let ageInput = null;
const cheerFx = new Audio('./audio/bahHumbug.mp3');
const bankFx = new Audio('./audio/mariahHigh.mp3');
const donateFx = new Audio('./audio/mariahXmas.mp3');
const songFX = new Audio('./audio/silent_night.mp3');


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
        this. transformTimer = setInterval(this.transform, 1000);
    },


/* Metric Functions */ 

    increaseAge() {
        (newGame.age) += 1;
        return $('#span-age').text(`${newGame.age}`);
    },

    reduceBank() {
        if (newGame.bankAccount <= 0) {
            clearInterval(newGame.charityTimer);
            clearInterval(newGame.bankTimer);
            clearInterval(newGame.cheerTimer);
            clearInterval(newGame.transformTimer);
            setTimeout(pauseSong, 300);
            return $('#quit-bank').show();
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
            return $('#quit-charity').show();
        }else{
            newGame.charityDonations -= 1;
        }
    },

    increaseCheer() {
        if (newGame.holidayCheer === 100) {
            clearInterval(newGame.charityTimer);
            clearInterval(newGame.bankTimer);
            clearInterval(newGame.cheerTimer);
            clearInterval(newGame.transformTimer);
            setTimeout(pauseSong, 300);
            return $('#quit-cheer').show();
        }else{
            newGame.holidayCheer += 1;
        }
    },

    transform() {
        if (newGame.time < 40) {
            newGame.time++;
            console.log(newGame.time);
        }else{
            clearInterval(newGame.transformCounter);
            $('#mariah').addClass('flash');
            $('#mariah').fadeOut(3000);
            setTimeout(function() { $('#krampus').css('opacity', '100');}, 1000);
            setTimeout(playSong, 500);
            setTimeout(function() {$('#message').text("WHAT HAVE I BECOME??? NEED MORE CHEER!");}, 4000);
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
        $('.popstar').addClass('animate__bounce animate__faster');
        setTimeout(function () { $('.popstar').removeClass('animate__bounce animate__faster'); }, 1000);
    },

    donateDance() {
        $('.popstar').addClass('animate__wobble animate__faster');
        setTimeout(function () { $('.popstar').removeClass('animate__wobble animate__faster'); }, 1000);
    },

    cheerDance() {
        $('.popstar').addClass('animate__pulse animate__faster');
        setTimeout(function () { $('.popstar').removeClass('animate__pulse animate__faster'); }, 1000);

    },


/* Sound Effects*/

playBank() {
    bankFx.play();
},

playDonate() {
    donateFx.play();
},

playCheer() {
    cheerFx.play();
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
    newGame.age = $('#input-age').val();
    newGame.age = parseInt(newGame.age);
    $('#span-age').text(`    ${newGame.age}`);
};
const collectName = function collectName() {
    newGame.name = $('#input-name').val();
    $('#span-name').text(`    ${newGame.name}`);
};

/* Bar Functions */

const bankBar = function bankBar() {
    return $('#bank__bar').css(`width`, `${newGame.bankAccount}%`);
};
const charityBar = function charityBar() {
    return $('#charity__bar').css(`width`, `${newGame.charityDonations}%`);
};
const cheerBar = function cheerBar() {
    return $('#cheer__bar').css(`width`, `${newGame.holidayCheer}%`);
};


const backTransition = function backTransition() {
    $('#fire').css("opacity", "100");
};
const playSong = function playSong() {
    songFX.play();
}
const pauseSong = function pauseSong() {
    songFX.pause();
}


/* Event Listeners */

$('#cheer').on('click', newGame.cheerDance);
$('#donate').on('click', newGame.donateDance);
$('#bank').on('click', newGame.bankDance);
$('#bank').on('click', newGame.playBank);
$('#cheer').on('click', newGame.playCheer);
$('#donate').on('click', newGame.playDonate);
$('#bank').on('click', newGame.makeMoney);
$('#donate').on('click', newGame.donate);
$('#cheer').on('click', newGame.supressCheer);
$("#input-button").on('click', function () {
    collectAge();
    collectName();
    $('#mariah').css("transition", "2s linear")
    $('#mariah').css("transform", "translatey(0%)");
    $('#mariah').css("opacity", "100");
    $("#input-form").remove();
    $("#message").text("I MAKE MORE MONEY THAN YOU... HAHAHA")
    setTimeout(newGame.startGame, 2000);
});

/* Metric Bars */

setInterval(bankBar, 100);
setInterval(charityBar, 100);
setInterval(cheerBar, 100);
