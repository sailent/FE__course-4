/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const radio = document.querySelectorAll('.difficulty__radio');
const start = document.querySelector('.start__button');
radio.forEach((el) => {
    el.addEventListener('click', () => {
        radio.forEach((element) => {
            if (element.checked === true) {
                element.parentElement.style.border = '2px solid #004980';
            } else element.parentElement.style.border = '';
        });
    });
});
start.addEventListener('click', () => {
    var isDiffChosen = false;
    radio.forEach((el) => {
        if (el.checked) {
            localStorage.setItem('diffLevel', el.id);
            isDiffChosen = true;
        }
    });
    isDiffChosen === false
        ? alert('Выбери сложность')
        : (window.location.href = 'game.html');
});

/******/ })()
;
//# sourceMappingURL=index.js.map