/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/builder2/Data.ts":
/*!******************************!*\
  !*** ./src/builder2/Data.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Data = /** @class */ (function () {
    function Data(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Object.defineProperty(Data.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "age", {
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    return Data;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);


/***/ }),

/***/ "./src/builder2/Director.ts":
/*!**********************************!*\
  !*** ./src/builder2/Director.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Director = /** @class */ (function () {
    function Director(builder) {
        this.builder = builder;
    }
    Director.prototype.build = function () {
        return "".concat(this.builder.head()).concat(this.builder.body()).concat(this.builder.footer());
    };
    return Director;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Director);


/***/ }),

/***/ "./src/builder2/PlainTextBuilder.ts":
/*!******************************************!*\
  !*** ./src/builder2/PlainTextBuilder.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder */ "./src/builder2/builder.ts");
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

var PlainTextBuilder = /** @class */ (function (_super) {
    __extends(PlainTextBuilder, _super);
    function PlainTextBuilder(data) {
        return _super.call(this, data) || this;
    }
    PlainTextBuilder.prototype.head = function () {
        return "";
    };
    PlainTextBuilder.prototype.body = function () {
        return "Name: ".concat(this.data.name, "\n Age: ").concat(this.data.age, "\n");
    };
    PlainTextBuilder.prototype.footer = function () {
        return '';
    };
    return PlainTextBuilder;
}(_builder__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlainTextBuilder);


/***/ }),

/***/ "./src/builder2/builder.ts":
/*!*********************************!*\
  !*** ./src/builder2/builder.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Builder = /** @class */ (function () {
    function Builder(data) {
        this.data = data;
    }
    return Builder;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Builder);


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
  !*** ./src/builder2/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Data */ "./src/builder2/Data.ts");
/* harmony import */ var _Director__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Director */ "./src/builder2/Director.ts");
/* harmony import */ var _PlainTextBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlainTextBuilder */ "./src/builder2/PlainTextBuilder.ts");



var data = new _Data__WEBPACK_IMPORTED_MODULE_0__["default"]("John", 30);
var builder = new _PlainTextBuilder__WEBPACK_IMPORTED_MODULE_2__["default"](data);
var director = new _Director__WEBPACK_IMPORTED_MODULE_1__["default"](builder);
var result = director.build();
console.log(result);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFDSSxjQUNZLEtBQWMsRUFDZCxJQUFhO1FBRGIsVUFBSyxHQUFMLEtBQUssQ0FBUztRQUNkLFNBQUksR0FBSixJQUFJLENBQVM7SUFDdkIsQ0FBQztJQUVILHNCQUFJLHNCQUFJO2FBQVI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUJBQUc7YUFBUDtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUk7UUFDcEIsQ0FBQzs7O09BQUE7SUFDTCxXQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1hEO0lBQ0ksa0JBQXNCLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQUUsQ0FBQztJQUV4Qyx3QkFBSyxHQUFMO1FBQ0ksT0FBTyxVQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFNBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsU0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFFO0lBQ2pGLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSK0I7QUFHaEM7SUFBOEMsb0NBQU87SUFDakQsMEJBQVksSUFBUztRQUNqQixhQUFLLFlBQUMsSUFBSSxDQUFDO0lBQ2YsQ0FBQztJQUVELCtCQUFJLEdBQUo7UUFDSSxPQUFPLEVBQUU7SUFDYixDQUFDO0lBRUQsK0JBQUksR0FBSjtRQUNJLE9BQU8sZ0JBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFJO0lBQzlELENBQUM7SUFDRCxpQ0FBTSxHQUFOO1FBQ0ksT0FBTyxFQUFFO0lBQ2IsQ0FBQztJQUVMLHVCQUFDO0FBQUQsQ0FBQyxDQWhCNkMsZ0RBQU8sR0FnQnBEOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJEO0lBQ0ksaUJBQXVCLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUl6QyxjQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7VUNQRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjBCO0FBQ1E7QUFDZ0I7QUFFbEQsSUFBTSxJQUFJLEdBQUcsSUFBSSw2Q0FBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNsQyxJQUFNLE9BQU8sR0FBRyxJQUFJLHlEQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNDLElBQU0sUUFBUSxHQUFHLElBQUksaURBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2QyxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9idWlsZGVyMi9EYXRhLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2J1aWxkZXIyL0RpcmVjdG9yLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2J1aWxkZXIyL1BsYWluVGV4dEJ1aWxkZXIudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvYnVpbGRlcjIvYnVpbGRlci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2J1aWxkZXIyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGF7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX25hbWUgOiBzdHJpbmcsXG4gICAgICAgIHByaXZhdGUgX2FnZSA6IG51bWJlclxuICAgICl7fVxuXG4gICAgZ2V0IG5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWVcbiAgICB9XG5cbiAgICBnZXQgYWdlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZ2VcbiAgICB9XG59IiwiaW1wb3J0IEJ1aWxkZXIgZnJvbSBcIi4vYnVpbGRlclwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdG9ye1xuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBidWlsZGVyOkJ1aWxkZXIpe31cblxuICAgIGJ1aWxkKCl7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmJ1aWxkZXIuaGVhZCgpfSR7dGhpcy5idWlsZGVyLmJvZHkoKX0ke3RoaXMuYnVpbGRlci5mb290ZXIoKX1gXG4gICAgfVxufSIsImltcG9ydCBCdWlsZGVyIGZyb20gXCIuL2J1aWxkZXJcIjtcbmltcG9ydCBEYXRhIGZyb20gXCIuL0RhdGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhaW5UZXh0QnVpbGRlciBleHRlbmRzIEJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKGRhdGE6RGF0YSl7XG4gICAgICAgIHN1cGVyKGRhdGEpXG4gICAgfVxuXG4gICAgaGVhZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gXCJcIlxuICAgIH1cblxuICAgIGJvZHkoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBOYW1lOiAke3RoaXMuZGF0YS5uYW1lfVxcbiBBZ2U6ICR7dGhpcy5kYXRhLmFnZX1cXG5gXG4gICAgfVxuICAgIGZvb3RlcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gJydcbiAgICB9XG5cbn0iLCJpbXBvcnQgRGF0YSBmcm9tIFwiLi9EYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJ1aWxkZXJ7XG4gICAgY29uc3RydWN0b3IoIHByb3RlY3RlZCBkYXRhOiBEYXRhICl7fVxuICAgIGFic3RyYWN0IGhlYWQoKTogc3RyaW5nXG4gICAgYWJzdHJhY3QgYm9keSgpOiBzdHJpbmdcbiAgICBhYnN0cmFjdCBmb290ZXIoKTogc3RyaW5nXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRGF0YSBmcm9tIFwiLi9EYXRhXCI7XG5pbXBvcnQgRGlyZWN0b3IgZnJvbSBcIi4vRGlyZWN0b3JcIjtcbmltcG9ydCBQbGFpblRleHRCdWlsZGVyIGZyb20gXCIuL1BsYWluVGV4dEJ1aWxkZXJcIjtcblxuY29uc3QgZGF0YSA9IG5ldyBEYXRhKFwiSm9oblwiLCAzMCk7XG5jb25zdCBidWlsZGVyID0gbmV3IFBsYWluVGV4dEJ1aWxkZXIoZGF0YSk7XG5jb25zdCBkaXJlY3RvciA9IG5ldyBEaXJlY3RvcihidWlsZGVyKTtcbmNvbnN0IHJlc3VsdCA9IGRpcmVjdG9yLmJ1aWxkKCk7XG5jb25zb2xlLmxvZyhyZXN1bHQpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9