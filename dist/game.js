/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/

var menuRestart = document.querySelector('.interface-restart__button');
var gameField = document.querySelector('.gameField');
var popupBlock = document.querySelector('.popup');
var popupRestart = document.querySelector('.popup-content__button');
var time = document.getElementsByTagName('time')[0];
var ArrCardIndex = [
    '6',
    '7',
    '8',
    '9',
    '10',
    'валет',
    'дама',
    'король',
    'туз',
];
var ArrCardSuits = ['бубны', 'крести', 'пики', 'черви'];
var sec = 0;
var min = 0;
// eslint-disable-next-line no-unused-vars
var t;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function tick() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
        }
    }
}
function add() {
    tick();
    time.textContent =
        (min > 9 ? min : '0' + min) + '.' + (sec > 9 ? sec : '0' + sec);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
function timerCicle() {
    time.textContent = '00.00';
    sec = 0;
    min = 0;
}
function generateCards() {
    gameField.innerHTML = '';
    var diffLevel = localStorage.getItem('diffLevel');
    var cardCount = 0;
    if (!localStorage.getItem('diffLevel'))
        window.location.href = 'index.html';
    if (diffLevel === 'hard')
        cardCount = 36;
    else
        diffLevel === 'normal' ? (cardCount = 18) : (cardCount = 10);
    for (var i = 0; i < cardCount; i++) {
        gameField.innerHTML += "<img src=\"pics/cards/shirt.png\" id='".concat(i, "' class=\"card\" alt=\"shirt\" /></img>");
    }
}
function hideCards() {
    for (var i = 0; i < cards.length; i++) {
        document
            .getElementById("".concat(i))
            .setAttribute('src', "pics/cards/shirt.png");
    }
}
function setCopyOfCard(el, idCard, idSuit) {
    el = document.getElementById("".concat(getRandomInt(cards.length)));
    if (el.getAttribute('alt') !== 'shirt')
        return setCopyOfCard(el, idCard, idSuit);
    else {
        el.setAttribute('src', "/pics/cards/".concat(ArrCardIndex[idCard], " ").concat(ArrCardSuits[idSuit], ".png"));
        el.setAttribute('alt', "".concat(ArrCardIndex[idCard], " ").concat(ArrCardSuits[idSuit]));
    }
}
function shuffleCards() {
    for (var i = 0; i < cards.length; i++) {
        var temp = document.getElementById("".concat(i));
        if (temp.getAttribute('alt') === 'shirt') {
            var cardIndex = getRandomInt(9);
            var cardSuit = getRandomInt(4);
            temp.setAttribute('src', "/pics/cards/".concat(ArrCardIndex[cardIndex], " ").concat(ArrCardSuits[cardSuit], ".png"));
            temp.setAttribute('alt', "".concat(ArrCardIndex[cardIndex], " ").concat(ArrCardSuits[cardSuit]));
            setCopyOfCard(temp, cardIndex, cardSuit);
        }
    }
}
generateCards(),
    sessionStorage.removeItem('buffer1'),
    sessionStorage.removeItem('buffer2');
var cards = document.querySelectorAll('.card');
shuffleCards(),
    setTimeout(timer, 5000),
    setTimeout(hideCards, 5000),
    setTimeout(gameplayLogic, 5000);
menuRestart.addEventListener('click', function () {
    timerCicle();
    window.location.href = 'index.html';
});
popupRestart.addEventListener('click', function () {
    popupBlock.setAttribute('style', 'display=none');
    sessionStorage.removeItem('buffer1');
    sessionStorage.removeItem('buffer2');
    timerCicle();
    clearTimeout(t);
    generateCards(),
        shuffleCards(),
        setTimeout(timer, 5000),
        setTimeout(hideCards, 5000),
        setTimeout(gameplayLogic, 5000);
});
function gameplayLogic() {
    var ArrDisabledCards = [];
    cards = document.querySelectorAll('.card');
    cards.forEach(function (element) {
        element.addEventListener('click', function () {
            if (!ArrDisabledCards.includes(element.getAttribute('id'))) {
                if (!sessionStorage.getItem('buffer1') &&
                    sessionStorage.getItem('buffer2') !==
                        element.getAttribute('id')) {
                    sessionStorage.setItem('buffer1', element.getAttribute('alt'));
                    sessionStorage.setItem('buffer2', element.getAttribute('id'));
                    ArrDisabledCards.push(element.getAttribute('id'));
                    element.setAttribute('src', "pics/cards/".concat(element.getAttribute('alt'), ".png"));
                }
                else if (sessionStorage.getItem('buffer1') ===
                    element.getAttribute('alt') &&
                    sessionStorage.getItem('buffer2') !==
                        element.getAttribute('id')) {
                    sessionStorage.removeItem('buffer1');
                    ArrDisabledCards.push(element.getAttribute('id'));
                    element.setAttribute('src', "pics/cards/".concat(element.getAttribute('alt'), ".png"));
                    if (ArrDisabledCards.length === cards.length) {
                        clearTimeout(t);
                        document
                            .querySelector('.popup')
                            .setAttribute('style', 'display=flex');
                        document.querySelector('.spentTime').textContent =
                            document.querySelector('.timerValue').textContent;
                    }
                }
                else if (sessionStorage.getItem('buffer1') !==
                    element.getAttribute('alt')) {
                    clearTimeout(t);
                    document
                        .querySelector('.popup')
                        .setAttribute('style', 'display=flex');
                    document.querySelector('.result__title').textContent =
                        'Вы проиграли';
                    document
                        .querySelector('.result__img')
                        .setAttribute('src', 'pics/lost.svg');
                }
                document.querySelector('.spentTime').textContent =
                    document.querySelector('.timerValue').textContent;
            }
        });
    });
}

/******/ })()
;
//# sourceMappingURL=game.js.map