/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/strategy/SumPrinter.ts":
/*!************************************!*\
  !*** ./src/strategy/SumPrinter.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SumPrinter = /** @class */ (function () {
    function SumPrinter() {
    }
    SumPrinter.prototype.print = function (strategy, N, domOutput) {
        var value = strategy.get(N);
        domOutput.innerHTML = "1 - ".concat(N, "\uAE4C\uC9C0\uC758 \uCD1D\uD569 = ").concat(value);
    };
    return SumPrinter;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SumPrinter);


/***/ }),

/***/ "./src/strategy/sum-strategy/GaussSumStrategy.ts":
/*!*******************************************************!*\
  !*** ./src/strategy/sum-strategy/GaussSumStrategy.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var GaussSumStrategy = /** @class */ (function () {
    function GaussSumStrategy() {
    }
    GaussSumStrategy.prototype.get = function (N) {
        return N * (N + 1) / 2;
    };
    return GaussSumStrategy;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GaussSumStrategy);


/***/ }),

/***/ "./src/strategy/sum-strategy/LoopSumStrategy.ts":
/*!******************************************************!*\
  !*** ./src/strategy/sum-strategy/LoopSumStrategy.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var LoopSumStrategy = /** @class */ (function () {
    function LoopSumStrategy() {
    }
    LoopSumStrategy.prototype.get = function (N) {
        var sum = 0;
        for (var i = 0; i <= N; i++) {
            sum += i;
        }
        return sum;
    };
    return LoopSumStrategy;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoopSumStrategy);


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
/*!*******************************!*\
  !*** ./src/strategy/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SumPrinter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SumPrinter */ "./src/strategy/SumPrinter.ts");
/* harmony import */ var _sum_strategy_GaussSumStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sum-strategy/GaussSumStrategy */ "./src/strategy/sum-strategy/GaussSumStrategy.ts");
/* harmony import */ var _sum_strategy_LoopSumStrategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sum-strategy/LoopSumStrategy */ "./src/strategy/sum-strategy/LoopSumStrategy.ts");



var printer = new _SumPrinter__WEBPACK_IMPORTED_MODULE_0__["default"]();
var dom1 = document.createElement("h1");
document.body.append(dom1);
var dom2 = document.createElement("h1");
document.body.append(dom2);
printer.print(new _sum_strategy_LoopSumStrategy__WEBPACK_IMPORTED_MODULE_2__["default"](), 100, dom1);
printer.print(new _sum_strategy_GaussSumStrategy__WEBPACK_IMPORTED_MODULE_1__["default"](), 100, dom2);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQUtBLENBQUM7SUFKRywwQkFBSyxHQUFMLFVBQU0sUUFBb0IsRUFBRSxDQUFRLEVBQUUsU0FBa0I7UUFDcEQsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0IsU0FBUyxDQUFDLFNBQVMsR0FBRyxjQUFPLENBQUMsK0NBQVksS0FBSyxDQUFFO0lBQ3JELENBQUM7SUFDTCxpQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMRDtJQUFBO0lBSUEsQ0FBQztJQUhHLDhCQUFHLEdBQUgsVUFBSSxDQUFTO1FBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUN4QixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDSkQ7SUFBQTtJQVFBLENBQUM7SUFQRyw2QkFBRyxHQUFILFVBQUksQ0FBUztRQUNULElBQUksR0FBRyxHQUFHLENBQUM7UUFDWCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDdEIsR0FBRyxJQUFJLENBQUM7UUFDWixDQUFDO1FBQ0QsT0FBTyxHQUFHO0lBQ2QsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7VUNWRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ3lCO0FBQ0Y7QUFDN0QsSUFBTSxPQUFPLEdBQUcsSUFBSSxtREFBVSxFQUFFO0FBQ2hDLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO0FBQ3pDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztBQUUxQixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztBQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFFMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLHFFQUFlLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO0FBQy9DLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxzRUFBZ0IsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9zdHJhdGVneS9TdW1QcmludGVyLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL3N0cmF0ZWd5L3N1bS1zdHJhdGVneS9HYXVzc1N1bVN0cmF0ZWd5LnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL3N0cmF0ZWd5L3N1bS1zdHJhdGVneS9Mb29wU3VtU3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9zdHJhdGVneS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3VtU3RyYXRlZ3kgZnJvbSBcIi4vaW50ZXJmYWNlL1N1bVN0cmF0ZWd5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1bVByaW50ZXJ7XG4gICAgcHJpbnQoc3RyYXRlZ3k6U3VtU3RyYXRlZ3ksIE46bnVtYmVyLCBkb21PdXRwdXQ6IEVsZW1lbnQpe1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHN0cmF0ZWd5LmdldChOKVxuICAgICAgICBkb21PdXRwdXQuaW5uZXJIVE1MID0gYDEgLSAke0596rmM7KeA7J2YIOy0ne2VqSA9ICR7dmFsdWV9YFxuICAgIH1cbn0iLCJpbXBvcnQgU3VtU3RyYXRlZ3kgZnJvbSBcIi4uL2ludGVyZmFjZS9TdW1TdHJhdGVneVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYXVzc1N1bVN0cmF0ZWd5IGltcGxlbWVudHMgU3VtU3RyYXRlZ3l7XG4gICAgZ2V0KE46IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBOICogKE4rMSkgLyAyXG4gICAgfSBcbn0iLCJpbXBvcnQgU3VtU3RyYXRlZ3kgZnJvbSBcIi4uL2ludGVyZmFjZS9TdW1TdHJhdGVneVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb29wU3VtU3RyYXRlZ3kgaW1wbGVtZW50cyBTdW1TdHJhdGVneXtcbiAgICBnZXQoTjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHN1bSA9IDBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTw9TjsgaSsrKXtcbiAgICAgICAgICAgIHN1bSArPSBpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1bVxuICAgIH0gXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgU3VtUHJpbnRlciBmcm9tIFwiLi9TdW1QcmludGVyXCI7XG5pbXBvcnQgR2F1c3NTdW1TdHJhdGVneSBmcm9tIFwiLi9zdW0tc3RyYXRlZ3kvR2F1c3NTdW1TdHJhdGVneVwiO1xuaW1wb3J0IExvb3BTdW1TdHJhdGVneSBmcm9tIFwiLi9zdW0tc3RyYXRlZ3kvTG9vcFN1bVN0cmF0ZWd5XCI7XG5jb25zdCBwcmludGVyID0gbmV3IFN1bVByaW50ZXIoKVxuY29uc3QgZG9tMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuZG9jdW1lbnQuYm9keS5hcHBlbmQoZG9tMSlcblxuY29uc3QgZG9tMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuZG9jdW1lbnQuYm9keS5hcHBlbmQoZG9tMilcblxucHJpbnRlci5wcmludChuZXcgTG9vcFN1bVN0cmF0ZWd5KCksIDEwMCwgZG9tMSlcbnByaW50ZXIucHJpbnQobmV3IEdhdXNzU3VtU3RyYXRlZ3koKSwgMTAwLCBkb20yKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==