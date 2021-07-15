let character = document.querySelector('.char');
let coin = document.querySelector('.coin');
let fire = document.querySelector('.fire');
let fire1 = document.querySelector('.fire1');
let fire2 = document.querySelector('.fire2');
let fire3 = document.querySelector('.fire3');
let fire4 = document.querySelector('.fire4');
let gocontainer = document.querySelector('#goc');
let startgamecont = document.querySelector("#start");
let startoverlay = document.querySelector("#startover");
let overlay = document.querySelector("#over");
let instruction = document.querySelector(".instruction");

let coinpick = new Audio('sounds/coinpick.mp3'); //CoinPick Sound effect
let hit = new Audio('sounds/hit.mp3'); //fireball hits character Sound effect
let gamestart = new Audio('sounds/gamestart.mp3'); //Game Start Sound effect

let move = 83; //Movement by 83px
let column = 0; //initial column position for character
let row = 0; //initial row position for character
let score = 0; //initial score

// Character Initial Position being set when window is loaded
window.addEventListener('load', function () {
    character.style.top = '-50px';
    character.style.left = '-15px';
    character.style.position = 'absolute';
});

//Start Game Button
function startgame() {
    character.style.display = "block";
    startgamecont.classList.remove("active");
    startoverlay.classList.remove("active");
    gamestart.pause();
    gamestart.currentTime = 0;
    gamestart.play();
    instruction.style.display = "block";
    setTimeout(() => {
        instruction.style.display = "none";
    }, 4000);
}

// Array of different positions for coin
var cointop = [0, 83, 166, 249, 332];
var coinleft = [10, 93, 176, 260, 341, 425];

// Random Coin Position each time page is loaded

function random4() {
    return Math.floor(Math.random() * 5);
}
function random5() {
    return Math.floor(Math.random() * 6);
}
let cointoprandom = random4();
let coinleftrandom = random5();
coin.style.top = cointop[cointoprandom] + 'px';
coin.style.left = coinleft[coinleftrandom] + 'px';

// Array of different positions for fireballs
let firetop = [-10, 78, 160, 240, 326];
let fireleft = [-10, 65, 150, 230, 315, 395];

let timer = setInterval(() => {
    
    //After game is over
    function gameover() {
        setTimeout(() => {
            hit.play();
            character.style.display = "none";
            fire.style.display = "none";
            document.querySelector(".finalscore").textContent = "SCORE: " + score;
            overlay.classList.remove("overlay");
            overlay.classList.add("active");
            gocontainer.classList.add("active");
            clearInterval(timer);
        }, 100);
    }

    //Game over condition by fireball1

    var fire1left = parseInt(window.getComputedStyle(fire1).getPropertyValue("left"));
    var fire1top = parseInt(window.getComputedStyle(fire1).getPropertyValue("top"));

    if (fire1left > -70 && fire1left < 0) {
        f1column0 = true;
    }
    else {
        f1column0 = false;
    }
    if (fire1left > 15 && fire1left < 80) {
        f1column1 = true;
    }
    else {
        f1column1 = false;
    }
    if (fire1left > 95 && fire1left < 165) {
        f1column2 = true;
    }
    else {
        f1column2 = false;
    }
    if (fire1left > 180 && fire1left < 250) {
        f1column3 = true;
    }
    else {
        f1column3 = false;
    }
    if (fire1left > 265 && fire1left < 330) {
        f1column4 = true;
    }
    else {
        f1column4 = false;
    }
    if (fire1left > 345 && fire1left < 410) {
        f1column5 = true;
    }
    else {
        f1column5 = false;
    }
    if (fire1top == -10) {
        f1row0 = true;
    }
    else {
        f1row0 = false;
    }
    if (fire1top == 78) {
        f1row1 = true;
    }
    else {
        f1row1 = false;
    }
    if (fire1top == 160) {
        f1row2 = true;
    }
    else {
        f1row2 = false;
    }
    if (fire1top == 240) {
        f1row3 = true;
    }
    else {
        f1row3 = false;
    }
    if (fire1top == 326) {
        f1row4 = true;
    }
    else {
        f1row4 = false;
    }
    if (
        (f1column0 && column == 0 && row == 0 && f1row0) ||
        (f1column0 && column == 2 && row == 0 && f1row2) ||
        (f1column0 && column == 1 && row == 0 && f1row1) ||
        (f1column0 && column == 3 && row == 0 && f1row3) ||
        (f1column0 && column == 4 && row == 0 && f1row4) ||
        (f1column1 && column == 0 && row == 1 && f1row0) ||
        (f1column1 && column == 1 && row == 1 && f1row1) ||
        (f1column1 && column == 2 && row == 1 && f1row2) ||
        (f1column1 && column == 3 && row == 1 && f1row3) ||
        (f1column1 && column == 4 && row == 1 && f1row4) ||
        (f1column2 && column == 0 && row == 2 && f1row0) ||
        (f1column2 && column == 1 && row == 2 && f1row1) ||
        (f1column2 && column == 2 && row == 2 && f1row2) ||
        (f1column2 && column == 3 && row == 2 && f1row3) ||
        (f1column2 && column == 4 && row == 2 && f1row4) ||
        (f1column3 && column == 0 && row == 3 && f1row0) ||
        (f1column3 && column == 1 && row == 3 && f1row1) ||
        (f1column3 && column == 2 && row == 3 && f1row2) ||
        (f1column3 && column == 3 && row == 3 && f1row3) ||
        (f1column3 && column == 4 && row == 3 && f1row4) ||
        (f1column4 && column == 0 && row == 4 && f1row0) ||
        (f1column4 && column == 1 && row == 4 && f1row1) ||
        (f1column4 && column == 2 && row == 4 && f1row2) ||
        (f1column4 && column == 3 && row == 4 && f1row3) ||
        (f1column4 && column == 4 && row == 4 && f1row4) ||
        (f1column5 && column == 0 && row == 5 && f1row0) ||
        (f1column5 && column == 1 && row == 5 && f1row1) ||
        (f1column5 && column == 2 && row == 5 && f1row2) ||
        (f1column5 && column == 3 && row == 5 && f1row3) ||
        (f1column5 && column == 4 && row == 5 && f1row4)
    ) {
        gameover();
    }

    //Game over condition by fireball2

    var fire2left = parseInt(window.getComputedStyle(fire2).getPropertyValue("left"));
    var fire2top = parseInt(window.getComputedStyle(fire2).getPropertyValue("top"));
    if (fire2top > -70 && fire2top < 0) {
        f2row0 = true;
    }
    else {
        f2row0 = false;
    }
    if (fire2top > 15 && fire2top < 85) {
        f2row1 = true;
    }
    else {
        f2row1 = false;
    }
    if (fire2top > 100 && fire2top < 175) {
        f2row2 = true;
    }
    else {
        f2row2 = false;
    }
    if (fire2top > 185 && fire2top < 250) {
        f2row3 = true;
    }
    else {
        f2row3 = false;
    }
    if (fire2top > 265 && fire2top < 340) {
        f2row4 = true;
    }
    else {
        f2row4 = false;
    }
    if (fire2left == -10) {
        f2column0 = true;
    }
    else {
        f2column0 = false;
    }
    if (fire2left == 65) {
        f2column1 = true;
    }
    else {
        f2column1 = false;
    }
    if (fire2left == 150) {
        f2column2 = true;
    }
    else {
        f2column2 = false;
    }
    if (fire2left == 230) {
        f2column3 = true;
    }
    else {
        f2column3 = false;
    }
    if (fire2left == 315) {
        f2column4 = true;
    }
    else {
        f2column4 = false;
    }
    if (fire2left == 395) {
        f2column5 = true;
    }
    else {
        f2column5 = false;
    }
    if (
        (f2column0 && column == 0 && row == 0 && f2row0) ||
        (f2column0 && column == 1 && row == 0 && f2row1) ||
        (f2column0 && column == 2 && row == 0 && f2row2) ||
        (f2column0 && column == 3 && row == 0 && f2row3) ||
        (f2column0 && column == 4 && row == 0 && f2row4) ||
        (f2column1 && column == 0 && row == 1 && f2row0) ||
        (f2column1 && column == 1 && row == 1 && f2row1) ||
        (f2column1 && column == 2 && row == 1 && f2row2) ||
        (f2column1 && column == 3 && row == 1 && f2row3) ||
        (f2column1 && column == 4 && row == 1 && f2row4) ||
        (f2column2 && column == 0 && row == 2 && f2row0) ||
        (f2column2 && column == 1 && row == 2 && f2row1) ||
        (f2column2 && column == 2 && row == 2 && f2row2) ||
        (f2column2 && column == 3 && row == 2 && f2row3) ||
        (f2column2 && column == 4 && row == 2 && f2row4) ||
        (f2column3 && column == 0 && row == 3 && f2row0) ||
        (f2column3 && column == 1 && row == 3 && f2row1) ||
        (f2column3 && column == 2 && row == 3 && f2row2) ||
        (f2column3 && column == 3 && row == 3 && f2row3) ||
        (f2column3 && column == 4 && row == 3 && f2row4) ||
        (f2column4 && column == 0 && row == 4 && f2row0) ||
        (f2column4 && column == 1 && row == 4 && f2row1) ||
        (f2column4 && column == 2 && row == 4 && f2row2) ||
        (f2column4 && column == 3 && row == 4 && f2row3) ||
        (f2column4 && column == 4 && row == 4 && f2row4) ||
        (f2column5 && column == 0 && row == 5 && f2row0) ||
        (f2column5 && column == 1 && row == 5 && f2row1) ||
        (f2column5 && column == 2 && row == 5 && f2row2) ||
        (f2column5 && column == 3 && row == 5 && f2row3) ||
        (f2column5 && column == 4 && row == 5 && f2row4)
    ) {
        gameover();
    }

    //Game over condition by fireball3 

    var fire3left = parseInt(window.getComputedStyle(fire3).getPropertyValue("left"));
    var fire3top = parseInt(window.getComputedStyle(fire3).getPropertyValue("top"));
    if (fire3left > -20 && fire3left < 45) {
        f3column0 = true;
    }
    else {
        f3column0 = false;
    }
    if (fire3left > 60 && fire3left < 125) {
        f3column1 = true;
    }
    else {
        f3column1 = false;
    }
    if (fire3left > 140 && fire3left < 210) {
        f3column2 = true;
    }
    else {
        f3column2 = false;
    }
    if (fire3left > 225 && fire3left < 295) {
        f3column3 = true;
    }
    else {
        f3column3 = false;
    }
    if (fire3left > 310 && fire3left < 375) {
        f3column4 = true;
    }
    else {
        f3column4 = false;
    }
    if (fire3left > 390 && fire3left < 460) {
        f3column5 = true;
    }
    else {
        f3column5 = false;
    }
    if (fire3top == -10) {
        f3row0 = true;
    }
    else {
        f3row0 = false;
    }
    if (fire3top == 78) {
        f3row1 = true;
    }
    else {
        f3row1 = false;
    }
    if (fire3top == 160) {
        f3row2 = true;
    }
    else {
        f3row2 = false;
    }
    if (fire3top == 240) {
        f3row3 = true;
    }
    else {
        f3row3 = false;
    }
    if (fire3top == 326) {
        f3row4 = true;
    }
    else {
        f3row4 = false;
    }
    if (
        (f3column0 && column == 0 && row == 0 && f3row0) ||
        (f3column0 && column == 2 && row == 0 && f3row2) ||
        (f3column0 && column == 1 && row == 0 && f3row1) ||
        (f3column0 && column == 3 && row == 0 && f3row3) ||
        (f3column0 && column == 4 && row == 0 && f3row4) ||
        (f3column1 && column == 0 && row == 1 && f3row0) ||
        (f3column1 && column == 1 && row == 1 && f3row1) ||
        (f3column1 && column == 2 && row == 1 && f3row2) ||
        (f3column1 && column == 3 && row == 1 && f3row3) ||
        (f3column1 && column == 4 && row == 1 && f3row4) ||
        (f3column2 && column == 0 && row == 2 && f3row0) ||
        (f3column2 && column == 1 && row == 2 && f3row1) ||
        (f3column2 && column == 2 && row == 2 && f3row2) ||
        (f3column2 && column == 3 && row == 2 && f3row3) ||
        (f3column2 && column == 4 && row == 2 && f3row4) ||
        (f3column3 && column == 0 && row == 3 && f3row0) ||
        (f3column3 && column == 1 && row == 3 && f3row1) ||
        (f3column3 && column == 2 && row == 3 && f3row2) ||
        (f3column3 && column == 3 && row == 3 && f3row3) ||
        (f3column3 && column == 4 && row == 3 && f3row4) ||
        (f3column4 && column == 0 && row == 4 && f3row0) ||
        (f3column4 && column == 1 && row == 4 && f3row1) ||
        (f3column4 && column == 2 && row == 4 && f3row2) ||
        (f3column4 && column == 3 && row == 4 && f3row3) ||
        (f3column4 && column == 4 && row == 4 && f3row4) ||
        (f3column5 && column == 0 && row == 5 && f3row0) ||
        (f3column5 && column == 1 && row == 5 && f3row1) ||
        (f3column5 && column == 2 && row == 5 && f3row2) ||
        (f3column5 && column == 3 && row == 5 && f3row3) ||
        (f3column5 && column == 4 && row == 5 && f3row4)
    ) {
        gameover();
    }

    //Game over condition by fireball4

    var fire4left = parseInt(window.getComputedStyle(fire4).getPropertyValue("left"));
    var fire4top = parseInt(window.getComputedStyle(fire4).getPropertyValue("top"));
    if (fire4top > -20 && fire4top < 45) {
        f4row0 = true;
    }
    else {
        f4row0 = false;
    }
    if (fire4top > 60 && fire4top < 130) {
        f4row1 = true;
    }
    else {
        f4row1 = false;
    }
    if (fire4top > 150 && fire4top < 220) {
        f4row2 = true;
    }
    else {
        f4row2 = false;
    }
    if (fire4top > 235 && fire4top < 300) {
        f4row3 = true;
    }
    else {
        f4row3 = false;
    }
    if (fire4top > 315 && fire4top < 390) {
        f4row4 = true;
    }
    else {
        f4row4 = false;
    }
    if (fire4left == -10) {
        f4column0 = true;
    }
    else {
        f4column0 = false;
    }
    if (fire4left == 65) {
        f4column1 = true;
    }
    else {
        f4column1 = false;
    }
    if (fire4left == 150) {
        f4column2 = true;
    }
    else {
        f4column2 = false;
    }
    if (fire4left == 230) {
        f4column3 = true;
    }
    else {
        f4column3 = false;
    }
    if (fire4left == 315) {
        f4column4 = true;
    }
    else {
        f4column4 = false;
    }
    if (fire4left == 395) {
        f4column5 = true;
    }
    else {
        f4column5 = false;
    }
    if (
        (f4column0 && column == 0 && row == 0 && f4row0) ||
        (f4column0 && column == 1 && row == 0 && f4row1) ||
        (f4column0 && column == 2 && row == 0 && f4row2) ||
        (f4column0 && column == 3 && row == 0 && f4row3) ||
        (f4column0 && column == 4 && row == 0 && f4row4) ||
        (f4column1 && column == 0 && row == 1 && f4row0) ||
        (f4column1 && column == 1 && row == 1 && f4row1) ||
        (f4column1 && column == 2 && row == 1 && f4row2) ||
        (f4column1 && column == 3 && row == 1 && f4row3) ||
        (f4column1 && column == 4 && row == 1 && f4row4) ||
        (f4column2 && column == 0 && row == 2 && f4row0) ||
        (f4column2 && column == 1 && row == 2 && f4row1) ||
        (f4column2 && column == 2 && row == 2 && f4row2) ||
        (f4column2 && column == 3 && row == 2 && f4row3) ||
        (f4column2 && column == 4 && row == 2 && f4row4) ||
        (f4column3 && column == 0 && row == 3 && f4row0) ||
        (f4column3 && column == 1 && row == 3 && f2row1) ||
        (f4column3 && column == 2 && row == 3 && f4row2) ||
        (f4column3 && column == 3 && row == 3 && f4row3) ||
        (f4column3 && column == 4 && row == 3 && f4row4) ||
        (f4column4 && column == 0 && row == 4 && f4row0) ||
        (f4column4 && column == 1 && row == 4 && f4row1) ||
        (f4column4 && column == 2 && row == 4 && f4row2) ||
        (f4column4 && column == 3 && row == 4 && f4row3) ||
        (f4column4 && column == 4 && row == 4 && f4row4) ||
        (f4column5 && column == 0 && row == 5 && f4row0) ||
        (f4column5 && column == 1 && row == 5 && f4row1) ||
        (f4column5 && column == 2 && row == 5 && f4row2) ||
        (f4column5 && column == 3 && row == 5 && f4row3) ||
        (f4column5 && column == 4 && row == 5 && f4row4)
    ) {
        gameover();
    }

}, 10);

window.addEventListener('keydown', function (e) {

    // Character Movement 

    var chartop = parseInt(character.style.top);
    var charleft = parseInt(character.style.left);
    switch (e.key) {
        case 'ArrowLeft':
            character.style.left = parseInt(character.style.left) - move + 'px';
            if (row >= 0 && row <= 5 && charleft > -15) {
                row--;
            }
            if (charleft == -15) {
                character.style.left = -15 + 'px'; //character can't move out of the floor
            }
            break;
        case 'ArrowRight':
            character.style.left = parseInt(character.style.left) + move + 'px';
            if (row >= 0 && row <= 5 && charleft < 400) {
                row++;
            }
            if (charleft == 400) {
                character.style.left = 400 + 'px'; //character can't move out of the floor
            }
            break;
        case 'ArrowUp':
            character.style.top = parseInt(character.style.top) - move + 'px';
            if (column >= 0 && column <= 4 && chartop > -50) {
                column--;
            }
            if (chartop == -50) {
                character.style.top = -50 + 'px'; //character can't move out of the floor
            }
            break;
        case 'ArrowDown':
            character.style.top = parseInt(character.style.top) + move + 'px';
            if (column >= 0 && column <= 4 && chartop < 282) {
                column++;
            }
            if (chartop == 282) {
                character.style.top = 282 + 'px'; //character can't move out of the floor
            }
            break;
    }
    setTimeout(function () {
        if (cointoprandom == column && coinleftrandom == row) {

            // Coin Movement when character collects it

            coinpick.pause();
            coinpick.currentTime = 0;
            coinpick.play();
            score += 10;
            document.querySelector('.score').textContent = 'SCORE: ' + score;
            cointoprandom = random4();
            coinleftrandom = random5();
            firetoprandom = random4();
            fireleftrandom = random5();
            coin.style.top = cointop[cointoprandom] + 'px';
            coin.style.left = coinleft[coinleftrandom] + 'px';

            // Fireball1 Movement

            let condition1 = fire1.classList.contains("fireanimation1");
            let condition2 = fire2.classList.contains("fireanimation2");
            let condition3 = fire3.classList.contains("fireanimation3");
            let condition4 = fire4.classList.contains("fireanimation4");
            if (!condition1) {
                if (score > 0) {
                    fire1.classList.add("fireanimation1");
                    fire1.style.top = firetop[cointoprandom] + 'px';
                    if (score < 70) {
                        setTimeout(() => {
                            fire1.classList.remove("fireanimation1");
                        }, 4000);
                    }

                    // Difficulty Level Increase

                    if (score > 60 && score < 160) {
                        document.querySelector('.fireanimation1').style.animationDuration = 3 + 's';
                        setTimeout(() => {
                            fire1.classList.remove('fireanimation1');
                        }, 3000);
                    }
                    if (score > 150) {
                        document.querySelector('.fireanimation1').style.animationDuration = 2 + 's';
                        setTimeout(() => {
                            fire1.classList.remove('fireanimation1');
                        }, 2000);
                    }
                }
            }
            // Fireball2 Movement

            if (!condition2) {
                if (score > 10) {
                    fire2.classList.add('fireanimation2');
                    fire2.style.left = fireleft[coinleftrandom] + 'px';
                    if (score < 90) {
                        setTimeout(() => {
                            fire2.classList.remove('fireanimation2');
                        }, 4000);
                    }

                    // Difficulty Level Increase

                    if (score > 80 && score < 200) {
                        document.querySelector('.fireanimation2').style.animationDuration = 3 + 's';
                        setTimeout(() => {
                            fire2.classList.remove('fireanimation2');
                        }, 3000);
                    }
                    if (score > 190) {
                        document.querySelector('.fireanimation2').style.animationDuration = 2 + 's';
                        setTimeout(() => {
                            fire2.classList.remove('fireanimation2');
                        }, 2000);
                    }
                }
            }

            // Fireball3 Movement

            if (!condition3) {
                if (score > 20) {
                    fire3.classList.add('fireanimation3');
                    fire3.style.top = firetop[firetoprandom] + 'px';
                    if (score < 110) {
                        setTimeout(() => {
                            fire3.classList.remove('fireanimation3');
                        }, 4000);
                    }

                    // Difficulty Level Increase

                    if (score > 100 && score < 250) {
                        document.querySelector('.fireanimation3').style.animationDuration = 3 + 's';
                        setTimeout(() => {
                            fire3.classList.remove('fireanimation3');
                        }, 3000);
                    }
                    if (score > 240) {
                        document.querySelector('.fireanimation3').style.animationDuration = 2 + 's';
                        setTimeout(() => {
                            fire3.classList.remove('fireanimation3');
                        }, 2000);
                    }
                }
            }

            // Fireball4 Movement

            if (!condition4) {
                if (score > 40) {
                    fire4.classList.add('fireanimation4');
                    fire4.style.left = fireleft[fireleftrandom] + 'px';
                    if (score < 130) {
                        setTimeout(() => {
                            fire4.classList.remove('fireanimation4');
                        }, 4000);
                    }

                    // Difficulty Level Increase

                    if (score > 120 && score < 300) {
                        document.querySelector('.fireanimation4').style.animationDuration = 3 + 's';
                        setTimeout(() => {
                            fire4.classList.remove('fireanimation4');
                        }, 3000);
                    }
                    if (score > 290) {
                        document.querySelector('.fireanimation4').style.animationDuration = 2 + 's';
                        setTimeout(() => {
                            fire4.classList.remove('fireanimation4');
                        }, 2000);
                    }
                }
            }
        }
    }, 100);
});
