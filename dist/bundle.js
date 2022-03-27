/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const radio = document.querySelectorAll('.difficulty__radio');
radio.forEach((el) => {
    el.addEventListener('click', () => {
        radio.forEach((element) => {
            if (element.checked === true) {
                element.parentElement.style.border = '2px solid #004980';
            } else element.parentElement.style.border = '';
        });
    });
});

/******/ })()
;
//# sourceMappingURL=bundle.js.map