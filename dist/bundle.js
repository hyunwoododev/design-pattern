/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/flyweight/Digit.ts":
/*!********************************!*\
  !*** ./src/flyweight/Digit.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Digit = /** @class */ (function () {
    function Digit(url) {
        this.url = url;
        this.data = null;
    }
    Digit.prototype.load = function (url, domOutput) {
        var _this = this;
        fetch(url).then(function (response) {
            return response.json();
        }).then(function (json) {
            _this.data = json;
            if (domOutput)
                _this.put(domOutput);
        }).catch(function (error) {
            console.log(error);
        });
    };
    Digit.prototype.put = function (dom) {
        if (!this.data)
            this.load(this.url, dom);
        else {
            dom.innerHTML = '<div class = "digit-layout"></div>';
            var domLayout_1 = dom.querySelector(".digit-layout");
            this.data.forEach(function (item) {
                var len = item.length;
                for (var i = 0; i < len; i++) {
                    var domCell = document.createElement("div");
                    domCell.style.backgroundColor = item[i] === "1" ? "black" : "white";
                    domLayout_1.appendChild(domCell);
                }
            });
        }
    };
    return Digit;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Digit);


/***/ }),

/***/ "./src/flyweight/DigitFactory.ts":
/*!***************************************!*\
  !*** ./src/flyweight/DigitFactory.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Digit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Digit */ "./src/flyweight/Digit.ts");

var DigitFactory = /** @class */ (function () {
    function DigitFactory() {
        this.pool = [
            null, null, null, null, null, null, null, null, null, null
        ];
    }
    DigitFactory.prototype.getDigit = function (n) {
        if (!this.pool[n])
            this.pool[n] = new _Digit__WEBPACK_IMPORTED_MODULE_0__["default"]("digit/".concat(n, ".json"));
        return this.pool[n];
    };
    return DigitFactory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DigitFactory);


/***/ }),

/***/ "./src/flyweight/Number.ts":
/*!*********************************!*\
  !*** ./src/flyweight/Number.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Number = /** @class */ (function () {
    function Number(factory, num) {
        this.factory = factory;
        this.num = num;
    }
    Number.prototype.put = function (dom) {
        var strNum = this.num.toString();
        var len = strNum.length;
        dom.innerHTML = "";
        for (var i = 0; i < len; i++) {
            var div = document.createElement("div");
            this.factory.getDigit(parseInt(strNum[i])).put(div);
            dom.append(div);
        }
    };
    return Number;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Number);


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
/*!********************************!*\
  !*** ./src/flyweight/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DigitFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DigitFactory */ "./src/flyweight/DigitFactory.ts");
/* harmony import */ var _Number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Number */ "./src/flyweight/Number.ts");


/**
 * Flyweight 패턴은 동일한 객체를 여러번 생성하지 않고 미리 생성해 두고 공유해 사용할 수 있음
 * 미리 생성해둔 객체는 공유의 개념으로 사용되므로 공유할 속성과 공유하지 않을 속성을 구분하여 설계할 필요가 있음.
 */
var factory = new _DigitFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
var domTarget = document.querySelector("#tmp");
var value = 434331;
setInterval(function () {
    var number = new _Number__WEBPACK_IMPORTED_MODULE_1__["default"](factory, value++);
    number.put(domTarget);
}, 100);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUN6QixJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztZQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ25ELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ25CLENBQUM7SUFDTCxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUM7Ozs7Ozs7O1VDZkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7O0FDTjBDO0FBQ1o7QUFFOUI7OztHQUdHO0FBQ0gsSUFBTSxPQUFPLEdBQUcsSUFBSSxxREFBWSxFQUFFO0FBQ2xDLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO0FBQ2hELElBQUksS0FBSyxHQUFHLE1BQU07QUFFbEIsV0FBVyxDQUFDO0lBQ1IsSUFBTSxNQUFNLEdBQUcsSUFBSSwrQ0FBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUMzQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztBQUN6QixDQUFDLEVBQUUsR0FBRyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZmx5d2VpZ2h0L0RpZ2l0LnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2ZseXdlaWdodC9EaWdpdEZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZmx5d2VpZ2h0L051bWJlci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2ZseXdlaWdodC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEaWdpdHtcbiAgICBwcml2YXRlIGRhdGE6IEFycmF5PHN0cmluZz4gPSBudWxsXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1cmw6c3RyaW5nKXt9XG4gICAgcHJpdmF0ZSBsb2FkKHVybDpzdHJpbmcsIGRvbU91dHB1dDpFbGVtZW50KXtcbiAgICAgICAgZmV0Y2godXJsKS50aGVuKCByZXNwb25zZSA9PntcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgICAgfSkudGhlbigganNvbiA9PiB7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSBqc29uXG4gICAgICAgICAgICBpZihkb21PdXRwdXQpIHRoaXMucHV0KGRvbU91dHB1dClcbiAgICAgICAgfSkuY2F0Y2goIGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1dChkb206IEVsZW1lbnQpOnZvaWR7XG4gICAgICAgIGlmKCF0aGlzLmRhdGEpIHRoaXMubG9hZCh0aGlzLnVybCwgZG9tKVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgZG9tLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzID0gXCJkaWdpdC1sYXlvdXRcIj48L2Rpdj4nXG4gICAgICAgICAgICBjb25zdCBkb21MYXlvdXQgPSBkb20ucXVlcnlTZWxlY3RvcihcIi5kaWdpdC1sYXlvdXRcIilcbiAgICAgICAgICAgIHRoaXMuZGF0YS5mb3JFYWNoKCAoaXRlbTpzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW4gPSBpdGVtLmxlbmd0aFxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvbUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICAgICAgICAgIGRvbUNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gaXRlbVtpXSA9PT0gXCIxXCIgPyBcImJsYWNrXCIgOiBcIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgZG9tTGF5b3V0LmFwcGVuZENoaWxkKGRvbUNlbGwpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgRGlnaXQgZnJvbSBcIi4vRGlnaXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlnaXRGYWN0b3J5e1xuICAgIHByaXZhdGUgcG9vbDogQXJyYXk8RGlnaXQgfCBudWxsPiA9IFtcbiAgICAgICAgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbFxuICAgIF1cblxuICAgIGdldERpZ2l0KG46bnVtYmVyKTpEaWdpdCB7XG4gICAgICAgIGlmKCF0aGlzLnBvb2xbbl0pIHRoaXMucG9vbFtuXSA9IG5ldyBEaWdpdChgZGlnaXQvJHtufS5qc29uYClcbiAgICAgICAgcmV0dXJuIHRoaXMucG9vbFtuXVxuICAgIH1cblxufSIsImltcG9ydCBEaWdpdEZhY3RvcnkgZnJvbSBcIi4vRGlnaXRGYWN0b3J5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlcntcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZhY3RvcnkgOiBEaWdpdEZhY3RvcnksIHByaXZhdGUgbnVtIDogbnVtYmVyKXt9XG4gICAgXG4gICAgcHV0KGRvbTpFbGVtZW50KXtcbiAgICAgICAgY29uc3Qgc3RyTnVtID0gdGhpcy5udW0udG9TdHJpbmcoKVxuICAgICAgICBjb25zdCBsZW4gPSBzdHJOdW0ubGVuZ3RoXG4gICAgICAgIGRvbS5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW47IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICB0aGlzLmZhY3RvcnkuZ2V0RGlnaXQocGFyc2VJbnQoc3RyTnVtW2ldKSkucHV0KGRpdilcbiAgICAgICAgICAgIGRvbS5hcHBlbmQoZGl2KVxuICAgICAgICB9XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IERpZ2l0RmFjdG9yeSBmcm9tIFwiLi9EaWdpdEZhY3RvcnlcIjtcbmltcG9ydCBOdW1iZXIgZnJvbSBcIi4vTnVtYmVyXCI7XG5cbi8qKlxuICogRmx5d2VpZ2h0IO2MqO2EtOydgCDrj5nsnbztlZwg6rCd7LK066W8IOyXrOufrOuyiCDsg53shLHtlZjsp4Ag7JWK6rOgIOuvuOumrCDsg53shLHtlbQg65GQ6rOgIOqzteycoO2VtCDsgqzsmqntlaAg7IiYIOyeiOydjFxuICog66+466asIOyDneyEse2VtOuRlCDqsJ3ssrTripQg6rO17Jyg7J2YIOqwnOuFkOycvOuhnCDsgqzsmqnrkJjrr4DroZwg6rO17Jyg7ZWgIOyGjeyEseqzvCDqs7XsnKDtlZjsp4Ag7JWK7J2EIOyGjeyEseydhCDqtazrtoTtlZjsl6wg7ISk6rOE7ZWgIO2VhOyalOqwgCDsnojsnYwuXG4gKi9cbmNvbnN0IGZhY3RvcnkgPSBuZXcgRGlnaXRGYWN0b3J5KClcbmNvbnN0IGRvbVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG1wXCIpXG5sZXQgdmFsdWUgPSA0MzQzMzFcblxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGNvbnN0IG51bWJlciA9IG5ldyBOdW1iZXIoZmFjdG9yeSwgdmFsdWUrKylcbiAgICBudW1iZXIucHV0KGRvbVRhcmdldClcbn0sIDEwMClcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9