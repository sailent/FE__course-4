import './style.css';
const menuRestart = document.querySelector('.interface-restart__button');
const gameField = document.querySelector('.gameField');
const popupBlock = document.querySelector('.popup');
const popupRestart = document.querySelector('.popup-content__button');
const time = document.getElementsByTagName('time')[0];
var sec = 0;
var min = 0;
var t;

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
// остановить таймер
//  function () {
//     clearTimeout(t);
// };
function timerCicle() {
    time.textContent = '00.00';
    sec = 0;
    min = 0;
}

document.addEventListener('DOMContentLoaded', timer());
menuRestart.addEventListener('click', () => {
    timerCicle();
    window.location.href = 'index.html';
});
for (var i = 0; i < 36; i++) {
    gameField.innerHTML += `<img src="pics/cards/shirt.png" class="card" alt="" /></img>`;
}
popupRestart.addEventListener('click', () => {
    popupBlock.setAttribute('style', 'display: none');
    timerCicle();
});
