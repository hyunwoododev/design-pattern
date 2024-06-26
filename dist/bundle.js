/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/adapter/Animal.ts":
/*!*******************************!*\
  !*** ./src/adapter/Animal.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Animal);


/***/ }),

/***/ "./src/adapter/Cat.ts":
/*!****************************!*\
  !*** ./src/adapter/Cat.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ "./src/adapter/Animal.ts");
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

var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.sound = function () {
        console.log("".concat(this.name, "\uAC00 \uC57C\uC639 ~"));
    };
    return Cat;
}(_Animal__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cat);


/***/ }),

/***/ "./src/adapter/Dog.ts":
/*!****************************!*\
  !*** ./src/adapter/Dog.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ "./src/adapter/Animal.ts");
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

var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.sound = function () {
        console.log("".concat(this.name, "\uAC00 \uBA4D\uBA4D ~"));
    };
    return Dog;
}(_Animal__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dog);


/***/ }),

/***/ "./src/adapter/Tiger.ts":
/*!******************************!*\
  !*** ./src/adapter/Tiger.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Tiger = /** @class */ (function () {
    function Tiger() {
    }
    Object.defineProperty(Tiger.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: false,
        configurable: true
    });
    Tiger.prototype.roar = function () {
        return "으르렁~";
    };
    return Tiger;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tiger);


/***/ }),

/***/ "./src/adapter/TigerAdapter.ts":
/*!*************************************!*\
  !*** ./src/adapter/TigerAdapter.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Animal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animal */ "./src/adapter/Animal.ts");
/* harmony import */ var _Tiger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tiger */ "./src/adapter/Tiger.ts");
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


var TigerAdapter = /** @class */ (function (_super) {
    __extends(TigerAdapter, _super);
    function TigerAdapter(name) {
        var _this = _super.call(this, name) || this;
        _this.tiger = new _Tiger__WEBPACK_IMPORTED_MODULE_1__["default"]();
        _this.tiger.name = name;
        return _this;
    }
    TigerAdapter.prototype.sound = function () {
        console.log("".concat(this.tiger.name, "\uAC00 ").concat(this.tiger.roar(), " ~"));
    };
    return TigerAdapter;
}(_Animal__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TigerAdapter);


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
/*!******************************!*\
  !*** ./src/adapter/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cat */ "./src/adapter/Cat.ts");
/* harmony import */ var _Dog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dog */ "./src/adapter/Dog.ts");
/* harmony import */ var _TigerAdapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TigerAdapter */ "./src/adapter/TigerAdapter.ts");



// 코드를 변경할 수 없는 클래스를 원하는 형태로 사용하고자 할 때 적용할 수 있는 패턴
var list = Array();
list.push(new _Dog__WEBPACK_IMPORTED_MODULE_1__["default"]("댕댕이"));
list.push(new _Cat__WEBPACK_IMPORTED_MODULE_0__["default"]("솜털이"));
list.push(new _Cat__WEBPACK_IMPORTED_MODULE_0__["default"]("츄츄"));
list.push(new _TigerAdapter__WEBPACK_IMPORTED_MODULE_2__["default"]("타이온"));
list.forEach(function (animal) {
    animal.sound();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvYWRhcHRlci9BbmltYWwudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvYWRhcHRlci9DYXQudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvYWRhcHRlci9Eb2cudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvYWRhcHRlci9UaWdlci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hZGFwdGVyL1RpZ2VyQWRhcHRlci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2FkYXB0ZXIvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQW5pbWFse1xuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBuYW1lOnN0cmluZyl7fVxuICAgIGFic3RyYWN0IHNvdW5kKCk6IHZvaWRcbn0iLCJpbXBvcnQgQW5pbWFsIGZyb20gXCIuL0FuaW1hbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXQgZXh0ZW5kcyBBbmltYWx7XG4gICAgXG4gICAgY29uc3RydWN0b3IobmFtZTpzdHJpbmcpe1xuICAgICAgICBzdXBlcihuYW1lKVxuICAgIH1cblxuICAgIHNvdW5kKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5hbWV96rCAIOyVvOyYuSB+YCkgICAgXG4gICAgfVxuICAgIFxufSIsImltcG9ydCBBbmltYWwgZnJvbSBcIi4vQW5pbWFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvZyBleHRlbmRzIEFuaW1hbHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihuYW1lOnN0cmluZyl7XG4gICAgICAgIHN1cGVyKG5hbWUpXG4gICAgfVxuXG4gICAgc291bmQoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMubmFtZX3qsIAg66mN66mNIH5gKSAgICBcbiAgICB9XG4gICAgXG59IiwiaW1wb3J0IEFuaW1hbCBmcm9tIFwiLi9BbmltYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlnZXJ7XG4gICAgcHJpdmF0ZSBfbmFtZTpzdHJpbmcgfCBudWxsXG4gICAgc2V0IG5hbWUodjpzdHJpbmcpe1xuICAgICAgICB0aGlzLl9uYW1lID0gdlxuICAgIH1cblxuICAgIGdldCBuYW1lKCk6c3RyaW5ne1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZVxuICAgIH1cblxuICAgIHJvYXIoKTogc3RyaW5ne1xuICAgICAgICByZXR1cm4gXCLsnLzrpbTroIF+XCJcbiAgICB9XG59IiwiaW1wb3J0IEFuaW1hbCBmcm9tIFwiLi9BbmltYWxcIjtcbmltcG9ydCBUaWdlciBmcm9tIFwiLi9UaWdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWdlckFkYXB0ZXIgZXh0ZW5kcyBBbmltYWx7XG4gICAgcHJpdmF0ZSB0aWdlcjpUaWdlclxuXG4gICAgY29uc3RydWN0b3IobmFtZTpzdHJpbmcpe1xuICAgICAgICBzdXBlcihuYW1lKVxuICAgICAgICB0aGlzLnRpZ2VyID0gbmV3IFRpZ2VyKClcbiAgICAgICAgdGhpcy50aWdlci5uYW1lID0gbmFtZVxuICAgIH1cblxuICAgIHNvdW5kKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLnRpZ2VyLm5hbWV96rCAICR7dGhpcy50aWdlci5yb2FyKCl9IH5gKSBcbiAgICB9XG4gICAgXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQW5pbWFsIGZyb20gXCIuL0FuaW1hbFwiO1xuaW1wb3J0IENhdCBmcm9tIFwiLi9DYXRcIjtcbmltcG9ydCBEb2cgZnJvbSBcIi4vRG9nXCI7XG5pbXBvcnQgVGlnZXJBZGFwdGVyIGZyb20gXCIuL1RpZ2VyQWRhcHRlclwiO1xuXG4vLyDsvZTrk5zrpbwg67OA6rK97ZWgIOyImCDsl4bripQg7YG0656Y7Iqk66W8IOybkO2VmOuKlCDtmJXtg5zroZwg7IKs7Jqp7ZWY6rOg7J6QIO2VoCDrlYwg7KCB7Jqp7ZWgIOyImCDsnojripQg7Yyo7YS0XG5jb25zdCBsaXN0ID0gQXJyYXk8QW5pbWFsPigpXG5saXN0LnB1c2gobmV3IERvZyhcIuuMleuMleydtFwiKSlcbmxpc3QucHVzaChuZXcgQ2F0KFwi7Iac7YS47J20XCIpKVxubGlzdC5wdXNoKG5ldyBDYXQoXCLsuITsuIRcIikpXG5cbmxpc3QucHVzaChuZXcgVGlnZXJBZGFwdGVyKFwi7YOA7J207JioXCIpKVxuXG5saXN0LmZvckVhY2goKGFuaW1hbCk9PntcbiAgICBhbmltYWwuc291bmQoKVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=