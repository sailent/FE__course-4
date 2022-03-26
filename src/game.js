const time = document.getElementsByTagName('time')[0];
var sec = 0;
var min = 0;
// eslint-disable-next-line no-unused-vars
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
document.addEventListener('DOMContentLoaded', timer());
// остановить таймер
//  function () {
//     clearTimeout(t);
// };
function timerCicle() {
    time.textContent = '00.00';
    sec = 0;
    min = 0;
}
const restart = document.querySelector('.interface-restart__button');
restart.addEventListener('click', () => {
    timerCicle();
});
const cards = document.querySelector('.gameField');
for (var i = 0; i < 36; i++) {
    cards.innerHTML += `<img src="pics/cards/shirt.png" class="card" alt="" /></img>`;
}
const popupRestart = document.querySelector('.popup-content__button');
popupRestart.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    $('.popup').hide();
    timerCicle();
});
