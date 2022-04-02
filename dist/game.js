/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

const menuRestart = document.querySelector('.interface-restart__button');
const gameField = document.querySelector('.gameField');
const popupBlock = document.querySelector('.popup');
const popupRestart = document.querySelector('.popup-content__button');
const resultImg = document.querySelector('.result__img');
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
resultImg.setAttribute('src', Won);

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

})();

/******/ })()
;
//# sourceMappingURL=game.js.map