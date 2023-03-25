/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_gameMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gameMenu */ \"./src/js/modules/gameMenu.js\");\n\n// import GameMenu from './modules/gameMenu';\n\n(() => {\n  _modules_gameMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\n\n  // const gameMenu = new GameMenu();\n  // gameMenu.init();\n})();\n\n\n//# sourceURL=webpack://tic-tac-toe/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/gameMenu.js":
/*!************************************!*\
  !*** ./src/js/modules/gameMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass GameMenu {\n  #playerOneMark;\n\n  #playerTwoMark;\n\n  #gameMode;\n\n  #xMarkBtn;\n\n  #oMarkBtn;\n\n  #newGamePvcBtn;\n\n  #newGamePvpBtn;\n\n  constructor() {\n    this.#playerOneMark = null;\n    this.#playerTwoMark = null;\n    this.#gameMode = null;\n  }\n\n  get playerOneMark() {\n    return this.#playerOneMark;\n  }\n\n  get playerTwoMark() {\n    return this.#playerTwoMark;\n  }\n\n  get gameMode() {\n    return this.#gameMode;\n  }\n\n  init() {\n    this.#cache();\n    this.#bind();\n  }\n\n  #cache() {\n    this.#xMarkBtn = document.querySelector('[data-game-option=\"X\"]');\n    this.#oMarkBtn = document.querySelector('[data-game-option=\"O\"');\n    this.#newGamePvcBtn = document.querySelector('[data-new-game=\"pvc\"');\n    this.#newGamePvpBtn = document.querySelector('[data-new-game=\"pvp\"');\n  }\n\n  #bind() {\n    this.#xMarkBtn.addEventListener('click', () => {\n      const mark = this.#xMarkBtn.dataset.gameOption;\n      this.#chooseMark(mark);\n      this.#setMarkButtonActive(mark);\n    });\n\n    this.#oMarkBtn.addEventListener('click', () => {\n      const mark = this.#oMarkBtn.dataset.gameOption;\n      this.#chooseMark(mark);\n      this.#setMarkButtonActive(mark);\n    });\n\n    this.#newGamePvcBtn.addEventListener('click', () => {\n      this.#gameMode = this.#newGamePvcBtn.dataset.newGame;\n    });\n\n    this.#newGamePvpBtn.addEventListener('click', () => {\n      this.#gameMode = this.#newGamePvpBtn.dataset.newGame;\n    });\n  }\n\n  #chooseMark(mark) {\n    this.#playerOneMark = mark;\n\n    if (mark === 'X') {\n      this.#playerTwoMark = 'O';\n    } else {\n      this.#playerTwoMark = 'X';\n    }\n  }\n\n  #setMarkButtonActive(mark) {\n    const xIcon = this.#xMarkBtn.querySelector('img');\n    const oIcon = this.#oMarkBtn.querySelector('img');\n\n    if (mark === 'X') {\n      xIcon.src = './assets/icon-x-navy.svg';\n      this.#xMarkBtn.classList.remove('game-choice__option');\n      this.#xMarkBtn.classList.add('game-choice__option--active', 'no-hover');\n\n      if (this.#oMarkBtn.classList.contains('game-choice__option--active')) {\n        oIcon.src = './assets/icon-o-silver.svg';\n        this.#oMarkBtn.classList.remove(\n          'game-choice__option--active',\n          'no-hover'\n        );\n        this.#oMarkBtn.classList.add('game-choice__option');\n      }\n    } else {\n      oIcon.src = './assets/icon-o-navy.svg';\n      this.#oMarkBtn.classList.remove('game-choice__option');\n      this.#oMarkBtn.classList.add('game-choice__option--active', 'no-hover');\n\n      if (this.#xMarkBtn.classList.contains('game-choice__option--active')) {\n        xIcon.src = './assets/icon-x-silver.svg';\n        this.#xMarkBtn.classList.remove(\n          'game-choice__option--active',\n          'no-hover'\n        );\n        this.#xMarkBtn.classList.add('game-choice__option');\n      }\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new GameMenu());\n\n\n//# sourceURL=webpack://tic-tac-toe/./src/js/modules/gameMenu.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;