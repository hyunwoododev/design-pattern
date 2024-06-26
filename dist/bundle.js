/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bridge/CaptionDisplay.ts":
/*!**************************************!*\
  !*** ./src/bridge/CaptionDisplay.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CaptionDisplay = /** @class */ (function () {
    function CaptionDisplay() {
    }
    CaptionDisplay.prototype.title = function (draft) {
        console.log("\uC81C\uBAA9 : ".concat(draft.getTitle()));
    };
    CaptionDisplay.prototype.author = function (draft) {
        console.log("\uC800\uC790 : ".concat(draft.getAuthor()));
    };
    CaptionDisplay.prototype.content = function (draft) {
        var content = draft.getContent();
        content.forEach(function (item) {
            return console.log("      ".concat(item));
        });
    };
    return CaptionDisplay;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CaptionDisplay);


/***/ }),

/***/ "./src/bridge/CharacterCount.ts":
/*!**************************************!*\
  !*** ./src/bridge/CharacterCount.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Draft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Draft */ "./src/bridge/Draft.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CharacterCounter = /** @class */ (function (_super) {
    __extends(CharacterCounter, _super);
    function CharacterCounter(title, author, content) {
        return _super.call(this, title, author, content) || this;
    }
    CharacterCounter.prototype.getCharactersCount = function () {
        var count = 0;
        count += this.getTitle().length;
        count += this.getAuthor().length;
        this.getContent().forEach(function (item) { return count += item.length; });
        return count;
    };
    return CharacterCounter;
}(_Draft__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CharacterCounter);


/***/ }),

/***/ "./src/bridge/Draft.ts":
/*!*****************************!*\
  !*** ./src/bridge/Draft.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Draft = /** @class */ (function () {
    function Draft(title, author, content) {
        this.title = title;
        this.author = author;
        this.content = content;
    }
    Draft.prototype.getTitle = function () { return this.title; };
    Draft.prototype.getAuthor = function () { return this.author; };
    Draft.prototype.getContent = function () { return this.content; };
    Draft.prototype.print = function (display) {
        display.title(this);
        display.author(this);
        display.content(this);
    };
    return Draft;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Draft);


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
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/bridge/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CaptionDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CaptionDisplay */ "./src/bridge/CaptionDisplay.ts");
/* harmony import */ var _CharacterCount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CharacterCount */ "./src/bridge/CharacterCount.ts");


// 기능 계층과 구현 계층을 분리함.
// 새로운 기능을 추가할때는 기능 계층을 확장하고 새로운 구현을 추가 할때는 구현 계층을 확장함으로써 복잡도를
// 효과적으로 낮출 수 있음.
var title = "복원된 지구";
var author = "도현우";
var content = [
    "플라스틱 사용의 감소와",
    "바다 생물 어획량 감소로 인하여",
    "지구는 복원 되었다."
];
// const draft = new Draft(title, author, content)
var draft = new _CharacterCount__WEBPACK_IMPORTED_MODULE_1__["default"](title, author, content);
// const display = new SimpleDisplay()
var display = new _CaptionDisplay__WEBPACK_IMPORTED_MODULE_0__["default"]();
draft.print(display);
console.log("\uC804\uCCB4 \uBB38\uC790\uC218 : ".concat(draft.getCharactersCount()));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDtBQUVsRCxJQUFNLEtBQUssR0FBRyxJQUFJLHVEQUFnQixDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDO0FBQzFELHNDQUFzQztBQUN0QyxJQUFNLE9BQU8sR0FBRyxJQUFJLHVEQUFjLEVBQUU7QUFFcEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7QUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBWSxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvYnJpZGdlL0NhcHRpb25EaXNwbGF5LnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2JyaWRnZS9DaGFyYWN0ZXJDb3VudC50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9icmlkZ2UvRHJhZnQudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9icmlkZ2UvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyYWZ0IGZyb20gXCIuL0RyYWZ0XCI7XG5pbXBvcnQgRGlzcGxheSBmcm9tIFwiLi9pbnRlcmZhY2UvRGlzcGxheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXB0aW9uRGlzcGxheSBpbXBsZW1lbnRzIERpc3BsYXl7XG4gICAgdGl0bGUoZHJhZnQ6IERyYWZ0KTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDsoJzrqqkgOiAke2RyYWZ0LmdldFRpdGxlKCl9YCk7XG4gICAgICAgIFxuICAgIH1cbiAgICBhdXRob3IoZHJhZnQ6IERyYWZ0KTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKGDsoIDsnpAgOiAke2RyYWZ0LmdldEF1dGhvcigpfWApO1xuICAgIH1cbiAgICBjb250ZW50KGRyYWZ0OiBEcmFmdCk6IHZvaWQge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZHJhZnQuZ2V0Q29udGVudCgpXG4gICAgICAgIGNvbnRlbnQuZm9yRWFjaChpdGVtID0+XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCAgICAgICR7aXRlbX1gKVxuICAgICAgICAgICAgXG4gICAgICAgIClcbiAgICB9XG4gICAgXG59IiwiaW1wb3J0IERyYWZ0IGZyb20gXCIuL0RyYWZ0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXJhY3RlckNvdW50ZXIgZXh0ZW5kcyBEcmFmdHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZTogc3RyaW5nLCBhdXRob3I6IHN0cmluZywgY29udGVudDogc3RyaW5nW10pe1xuICAgICAgICBzdXBlcih0aXRsZSwgYXV0aG9yLCBjb250ZW50KVxuICAgIH1cbiAgICBnZXRDaGFyYWN0ZXJzQ291bnQoKTpudW1iZXIge1xuICAgICAgICBsZXQgY291bnQgPSAwXG4gICAgICAgIGNvdW50ICs9IHRoaXMuZ2V0VGl0bGUoKS5sZW5ndGhcbiAgICAgICAgY291bnQgKz0gdGhpcy5nZXRBdXRob3IoKS5sZW5ndGhcbiAgICAgICAgdGhpcy5nZXRDb250ZW50KCkuZm9yRWFjaChpdGVtID0+IGNvdW50ICs9IGl0ZW0ubGVuZ3RoIClcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb3VudFxuICAgIH1cbn0iLCJpbXBvcnQgRGlzcGxheSBmcm9tIFwiLi9pbnRlcmZhY2UvRGlzcGxheVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWZ0e1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGl0bGU6c3RyaW5nLCBwcml2YXRlIGF1dGhvcjpzdHJpbmcsIHByaXZhdGUgY29udGVudDpzdHJpbmdbXSl7fVxuICAgIFxuICAgIGdldFRpdGxlKCl7IHJldHVybiB0aGlzLnRpdGxlfVxuICAgIGdldEF1dGhvcigpeyByZXR1cm4gdGhpcy5hdXRob3J9XG4gICAgZ2V0Q29udGVudCgpe3JldHVybiB0aGlzLmNvbnRlbnR9XG5cbiAgICBwcmludChkaXNwbGF5OkRpc3BsYXkpIDogdm9pZHtcbiAgICAgICAgZGlzcGxheS50aXRsZSh0aGlzKVxuICAgICAgICBkaXNwbGF5LmF1dGhvcih0aGlzKVxuICAgICAgICBkaXNwbGF5LmNvbnRlbnQodGhpcylcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ2FwdGlvbkRpc3BsYXkgZnJvbSBcIi4vQ2FwdGlvbkRpc3BsYXlcIlxuaW1wb3J0IENoYXJhY3RlckNvdW50ZXIgZnJvbSBcIi4vQ2hhcmFjdGVyQ291bnRcIlxuaW1wb3J0IERyYWZ0IGZyb20gXCIuL0RyYWZ0XCJcbmltcG9ydCBTaW1wbGVEaXNwbGF5IGZyb20gXCIuL1NpbXBsZURpc3BsYXlcIlxuXG4vLyDquLDriqUg6rOE7Li16rO8IOq1rO2YhCDqs4TsuLXsnYQg67aE66as7ZWoLlxuLy8g7IOI66Gc7Jq0IOq4sOuKpeydhCDstpTqsIDtlaDrlYzripQg6riw64qlIOqzhOy4teydhCDtmZXsnqXtlZjqs6Ag7IOI66Gc7Jq0IOq1rO2YhOydhCDstpTqsIAg7ZWg65WM64qUIOq1rO2YhCDqs4TsuLXsnYQg7ZmV7J6l7ZWo7Jy866Gc7I2oIOuzteyeoeuPhOulvFxuLy8g7Zqo6rO87KCB7Jy866GcIOuCruy2nCDsiJgg7J6I7J2MLlxuXG5jb25zdCB0aXRsZSA9IFwi67O17JuQ65CcIOyngOq1rFwiXG5jb25zdCBhdXRob3IgPSBcIuuPhO2YhOyasFwiXG5jb25zdCBjb250ZW50ID0gW1xuICAgIFwi7ZSM65287Iqk7YuxIOyCrOyaqeydmCDqsJDshozsmYBcIixcbiAgICBcIuuwlOuLpCDsg53rrLwg7Ja07ZqN65+JIOqwkOyGjOuhnCDsnbjtlZjsl6xcIixcbiAgICBcIuyngOq1rOuKlCDrs7Xsm5Ag65CY7JeI64ukLlwiXG5dXG5cbi8vIGNvbnN0IGRyYWZ0ID0gbmV3IERyYWZ0KHRpdGxlLCBhdXRob3IsIGNvbnRlbnQpXG5cbmNvbnN0IGRyYWZ0ID0gbmV3IENoYXJhY3RlckNvdW50ZXIodGl0bGUsIGF1dGhvciwgY29udGVudClcbi8vIGNvbnN0IGRpc3BsYXkgPSBuZXcgU2ltcGxlRGlzcGxheSgpXG5jb25zdCBkaXNwbGF5ID0gbmV3IENhcHRpb25EaXNwbGF5KClcblxuZHJhZnQucHJpbnQoZGlzcGxheSlcbmNvbnNvbGUubG9nKGDsoITssrQg66y47J6Q7IiYIDogJHtkcmFmdC5nZXRDaGFyYWN0ZXJzQ291bnQoKX1gKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==