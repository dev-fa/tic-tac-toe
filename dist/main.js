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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_gameMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gameMenu */ \"./src/js/modules/gameMenu.js\");\n/* harmony import */ var _modules_gameUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gameUI */ \"./src/js/modules/gameUI.js\");\n\n\n\n(() => {\n  _modules_gameMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\n})();\n\n\n//# sourceURL=webpack://tic-tac-toe/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/bus.js":
/*!*******************************!*\
  !*** ./src/js/modules/bus.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ \"./node_modules/mitt/dist/mitt.mjs\");\n\n\nconst bus = new mitt__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bus);\n\n\n//# sourceURL=webpack://tic-tac-toe/./src/js/modules/bus.js?");

/***/ }),

/***/ "./src/js/modules/gameMenu.js":
/*!************************************!*\
  !*** ./src/js/modules/gameMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bus */ \"./src/js/modules/bus.js\");\n\n\nclass GameMenu {\n  #xBtn;\n\n  #oBtn;\n\n  #pvcBtn;\n\n  #pvpBtn;\n\n  constructor() {\n    _bus__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on('startGame', this.#unbind.bind(this));\n    _bus__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on('startGame', GameMenu.unRender);\n\n    this.playerOneMark = null;\n    this.playerTwoMark = null;\n    this.gameMode = null;\n  }\n\n  init() {\n    GameMenu.render();\n    this.#cache();\n    this.#bind();\n  }\n\n  static render() {\n    const main = document.querySelector('main');\n    const gameMenuContainer = document.createElement('section');\n    gameMenuContainer.classList.add('new-game-menu');\n\n    gameMenuContainer.innerHTML = `\n      <h2 class=\"sr-only\">New Game Menu</h2>\n      <img src=\"./assets/logo.svg\" alt=\"Game Logo\" class=\"logo\">\n\n      <div class=\"game-choice\">\n        <p class=\"game-choice__title heading-xs\">PICK PLAYER 1'S MARK</p>\n        <div class=\"game-choice__options\">\n          <div class=\"game-choice__option\" data-game-option=\"X\">\n            <img src=\"./assets/icon-x-silver.svg\" alt=\"Choose X Option\">\n          </div>\n          <div class=\"game-choice__option\" data-game-option=\"O\">\n            <img src=\"./assets/icon-o-silver.svg\" alt=\"Choose O Option\">\n          </div>\n        </div>\n        <p class=\"game-choice__text body-text\">REMEMBER: X GOES FIRST</p>\n      </div>\n\n      <div class=\"new-game-menu__buttons\">\n        <button type=\"button\" class=\"btn-primary--yellow\" data-new-game=\"pvc\">NEW GAME (VS CPU)</button>\n        <button type=\"button\" class=\"btn-primary--blue\" data-new-game=\"pvp\">NEW GAME (VS PLAYER)</button>\n      </div>\n    `;\n\n    main.appendChild(gameMenuContainer);\n  }\n\n  static unRender() {\n    const main = document.querySelector('main');\n\n    while (main.firstChild) {\n      main.removeChild(main.lastChild);\n    }\n  }\n\n  #cache() {\n    this.#xBtn = document.querySelector('[data-game-option=\"X\"]');\n    this.#oBtn = document.querySelector('[data-game-option=\"O\"]');\n    this.#pvcBtn = document.querySelector('[data-new-game=\"pvc\"]');\n    this.#pvpBtn = document.querySelector('[data-new-game=\"pvp\"]');\n  }\n\n  #bind() {\n    this.#xBtn.addEventListener('click', this.#xBtnClick.bind(this));\n    this.#oBtn.addEventListener('click', this.#oBtnClick.bind(this));\n    this.#pvcBtn.addEventListener('click', this.#pvcBtnClick.bind(this));\n    this.#pvpBtn.addEventListener('click', this.#pvpBtnClick.bind(this));\n  }\n\n  #unbind() {\n    this.#xBtn.removeEventListener('click', this.#xBtnClick.bind(this));\n    this.#oBtn.removeEventListener('click', this.#oBtnClick.bind(this));\n    this.#pvcBtn.removeEventListener('click', this.#pvcBtnClick.bind(this));\n    this.#pvpBtn.removeEventListener('click', this.#pvpBtnClick.bind(this));\n  }\n\n  #xBtnClick() {\n    this.#chooseMark('X');\n    this.#setMarkButtonActive('X');\n  }\n\n  #oBtnClick() {\n    this.#chooseMark('O');\n    this.#setMarkButtonActive('O');\n  }\n\n  #pvcBtnClick() {\n    if (this.playerOneMark) {\n      this.gameMode = 'pvc';\n      _bus__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit('startGame', {\n        playerOne: this.playerOneMark,\n        playerTwo: this.playerTwoMark,\n        mode: this.gameMode,\n      });\n    }\n  }\n\n  #pvpBtnClick() {\n    if (this.playerTwoMark) {\n      this.gameMode = 'pvp';\n      _bus__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit('startGame', {\n        playerOne: this.playerOneMark,\n        playerTwo: this.playerTwoMark,\n        mode: this.gameMode,\n      });\n    }\n  }\n\n  #chooseMark(mark) {\n    this.playerOneMark = mark;\n\n    if (mark === 'X') {\n      this.playerTwoMark = 'O';\n    } else {\n      this.playerTwoMark = 'X';\n    }\n  }\n\n  #setMarkButtonActive(mark) {\n    const xIcon = this.#xBtn.querySelector('img');\n    const oIcon = this.#oBtn.querySelector('img');\n\n    if (mark === 'X') {\n      xIcon.src = './assets/icon-x-navy.svg';\n      this.#xBtn.classList.remove('game-choice__option');\n      this.#xBtn.classList.add('game-choice__option--active', 'no-hover');\n\n      if (this.#oBtn.classList.contains('game-choice__option--active')) {\n        oIcon.src = './assets/icon-o-silver.svg';\n        this.#oBtn.classList.remove('game-choice__option--active', 'no-hover');\n        this.#oBtn.classList.add('game-choice__option');\n      }\n    } else {\n      oIcon.src = './assets/icon-o-navy.svg';\n      this.#oBtn.classList.remove('game-choice__option');\n      this.#oBtn.classList.add('game-choice__option--active', 'no-hover');\n\n      if (this.#xBtn.classList.contains('game-choice__option--active')) {\n        xIcon.src = './assets/icon-x-silver.svg';\n        this.#xBtn.classList.remove('game-choice__option--active', 'no-hover');\n        this.#xBtn.classList.add('game-choice__option');\n      }\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new GameMenu());\n\n\n//# sourceURL=webpack://tic-tac-toe/./src/js/modules/gameMenu.js?");

/***/ }),

/***/ "./src/js/modules/gameUI.js":
/*!**********************************!*\
  !*** ./src/js/modules/gameUI.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bus */ \"./src/js/modules/bus.js\");\n\n\nclass GameUI {\n  constructor() {\n    _bus__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on('startGame', this.init);\n  }\n\n  init(data) {\n    console.log(data);\n    GameUI.render();\n  }\n\n  static render() {\n    const main = document.querySelector('main');\n    const gameContainer = document.createElement('section');\n    gameContainer.classList.add('game-container');\n\n    gameContainer.innerHTML = `\n        <h2 class=\"sr-only\">Game</h2>\n\n        <div class=\"game-container__top\">\n        <img src=\"./assets/logo.svg\" alt=\"Logo\" class=\"logo\">\n        <div class=\"game-turn\">\n            <img src=\"./assets/icon-x-silver.svg\" alt=\"X\">\n            <p class=\"game-turn__text\">TURN</p>\n        </div>\n        <button type=\"button\" class=\"btn-restart\" aria-label=\"Restart game\">\n            <img src=\"./assets/icon-restart.svg\" alt=\"Restart game\">\n        </button>\n        </div>\n\n        <div class=\"game\">\n        <div class=\"game__box\">\n            <img src=\"./assets/icon-x.svg\" alt=\"X\">\n        </div>\n        <div class=\"game__box\">\n            <img src=\"./assets/icon-o.svg\" alt=\"O\">\n        </div>\n        <div class=\"game__box\"></div>\n        <div class=\"game__box\"></div>\n        <div class=\"game__box\"></div>\n        <div class=\"game__box\"></div>\n        <div class=\"game__box\"></div>\n        <div class=\"game__box\"></div>\n        <div class=\"game__box\"></div>\n\n        <div class=\"game__stats--blue\">\n            <p class=\"game__label body-text\">X (YOU)</p>\n            <p class=\"game__score heading-m\">0</p>\n        </div>\n        <div class=\"game__stats--silver\">\n            <p class=\"game__label body-text\">TIES</p>\n            <p class=\"game__score heading-m\">0</p>\n        </div>\n        <div class=\"game__stats--yellow\">\n            <p class=\"game__label body-text\">O (CPU)</p>\n            <p class=\"game__score heading-m\">0</p>\n        </div>\n        </div>\n    `;\n\n    main.appendChild(gameContainer);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new GameUI());\n\n\n//# sourceURL=webpack://tic-tac-toe/./src/js/modules/gameUI.js?");

/***/ }),

/***/ "./node_modules/mitt/dist/mitt.mjs":
/*!*****************************************!*\
  !*** ./node_modules/mitt/dist/mitt.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(n){return{all:n=n||new Map,on:function(t,e){var i=n.get(t);i?i.push(e):n.set(t,[e])},off:function(t,e){var i=n.get(t);i&&(e?i.splice(i.indexOf(e)>>>0,1):n.set(t,[]))},emit:function(t,e){var i=n.get(t);i&&i.slice().map(function(n){n(e)}),(i=n.get(\"*\"))&&i.slice().map(function(n){n(t,e)})}}}\n//# sourceMappingURL=mitt.mjs.map\n\n\n//# sourceURL=webpack://tic-tac-toe/./node_modules/mitt/dist/mitt.mjs?");

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