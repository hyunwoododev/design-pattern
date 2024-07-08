/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factory/Bow.ts":
/*!****************************!*\
  !*** ./src/factory/Bow.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Bow = /** @class */ (function () {
    function Bow() {
    }
    Bow.prototype.use = function () {
        return "활을 사용했습니다.";
    };
    return Bow;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bow);


/***/ }),

/***/ "./src/factory/Factory.ts":
/*!********************************!*\
  !*** ./src/factory/Factory.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.create = function (name) {
        if (!this.isCreateable(name))
            return null;
        var item = this.createItem(name);
        this.postprocessItem(name);
        return item;
    };
    return Factory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Factory);


/***/ }),

/***/ "./src/factory/ItemFactory.ts":
/*!************************************!*\
  !*** ./src/factory/ItemFactory.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Bow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bow */ "./src/factory/Bow.ts");
/* harmony import */ var _Factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Factory */ "./src/factory/Factory.ts");
/* harmony import */ var _Shield__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shield */ "./src/factory/Shield.ts");
/* harmony import */ var _Sword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sword */ "./src/factory/Sword.ts");
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




var ItemCount = /** @class */ (function () {
    function ItemCount(_maxCount) {
        this._maxCount = _maxCount;
        this._currentCount = 0;
    }
    Object.defineProperty(ItemCount.prototype, "maxCount", {
        get: function () { return this._maxCount; },
        enumerable: false,
        configurable: true
    });
    ItemCount.prototype.isCreatable = function () {
        return this._currentCount < this._maxCount;
    };
    ItemCount.prototype.increaseCount = function () {
        if (this.isCreatable)
            this._currentCount++;
    };
    return ItemCount;
}());
var ItemFactory = /** @class */ (function (_super) {
    __extends(ItemFactory, _super);
    function ItemFactory() {
        var _this = _super.call(this) || this;
        _this.repository = new Map();
        _this.repository.set("sword", new ItemCount(3));
        _this.repository.set("shield", new ItemCount(5));
        _this.repository.set("bow", new ItemCount(2));
        return _this;
    }
    ItemFactory.prototype.isCreateable = function (name) {
        var itemCount = this.repository.get(name);
        return itemCount.isCreatable();
    };
    ItemFactory.prototype.createItem = function (name) {
        var result = null;
        if (name === "sword")
            result = new _Sword__WEBPACK_IMPORTED_MODULE_3__["default"]();
        else if (name === "shield")
            result = new _Shield__WEBPACK_IMPORTED_MODULE_2__["default"]();
        else if (name === "bow")
            result = new _Bow__WEBPACK_IMPORTED_MODULE_0__["default"]();
        return result;
    };
    ItemFactory.prototype.postprocessItem = function (name) {
        var itemCount = this.repository.get(name);
        itemCount.increaseCount();
    };
    return ItemFactory;
}(_Factory__WEBPACK_IMPORTED_MODULE_1__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemFactory);


/***/ }),

/***/ "./src/factory/Shield.ts":
/*!*******************************!*\
  !*** ./src/factory/Shield.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Shield = /** @class */ (function () {
    function Shield() {
    }
    Shield.prototype.use = function () {
        return "방패를 사용했습니다.";
    };
    return Shield;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shield);


/***/ }),

/***/ "./src/factory/Sword.ts":
/*!******************************!*\
  !*** ./src/factory/Sword.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Sword = /** @class */ (function () {
    function Sword() {
    }
    Sword.prototype.use = function () {
        return "검을 사용했습니다.";
    };
    return Sword;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sword);


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
  !*** ./src/factory/index.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemFactory */ "./src/factory/ItemFactory.ts");

// 생성을 위한 인터페이스와 생성을 위한 구현 부분이 완전히 분리되어있음.
// 객체 생성을 위한 패턴 중에 하나로 객체 생성에 필요한 과정을 템플릿처럼 정해 놓고 각 과정을 다양하게 구현 가능
var factory = new _ItemFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
var domOutput = document.querySelector("textarea");
var buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
    return button.addEventListener("click", function (event) {
        var itemName = event.target.innerText;
        var item = factory.create(itemName);
        if (item) {
            domOutput.value += "\n".concat(item.use());
        }
        else {
            domOutput.value += "\n".concat(itemName, "\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4! \u3160_\u3160");
        }
        domOutput.scrollTop = domOutput.scrollHeight;
    });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZmFjdG9yeS9Cb3cudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZmFjdG9yeS9GYWN0b3J5LnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2ZhY3RvcnkvSXRlbUZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZmFjdG9yeS9TaGllbGQudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZmFjdG9yeS9Td29yZC50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2ZhY3RvcnkvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEl0ZW0gZnJvbSBcIi4vaW50ZXJmYWNlL0l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm93IGltcGxlbWVudHMgSXRlbXtcbiAgICB1c2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwi4YSS4YWq4Yav4YSL4YWz4YavIOGEieGFoeGEi+GFreGGvOGEkuGFouGGu+GEieGFs+GGuOGEguGFteGEg+GFoS5cIlxuICAgIH1cbn0iLCJpbXBvcnQgSXRlbSBmcm9tIFwiLi9pbnRlcmZhY2UvSXRlbVwiO1xuXG5leHBvcnQgdHlwZSBJdGVtTmFtZSA9IFwiYm93XCIgfCBcInN3b3JkXCIgfCBcInNoaWVsZFwiXG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEZhY3Rvcnl7XG4gICAgLy8gaXRlbSBjbGFzc+ulvCDsg53shLHtlZjquLAg7JyE7ZWcIOygiOywqOqwgCDthZztlIzrpr/sspjrn7wg7KCV7J2Y65CY7Ja0IOyeiOydjC5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgaXNDcmVhdGVhYmxlKG5hbWU6IEl0ZW1OYW1lKTpib29sZWFuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZUl0ZW0obmFtZTogSXRlbU5hbWUpOiBJdGVtXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHBvc3Rwcm9jZXNzSXRlbShuYW1lOkl0ZW1OYW1lKTogdm9pZFxuXG4gICAgcHVibGljIGNyZWF0ZShuYW1lOiBJdGVtTmFtZSk6IEl0ZW17XG4gICAgICAgIGlmKCF0aGlzLmlzQ3JlYXRlYWJsZShuYW1lKSkgcmV0dXJuIG51bGxcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuY3JlYXRlSXRlbShuYW1lKVxuICAgICAgICB0aGlzLnBvc3Rwcm9jZXNzSXRlbShuYW1lKVxuICAgICAgICByZXR1cm4gaXRlbVxuICAgIH1cbn0iLCJpbXBvcnQgQm93IGZyb20gXCIuL0Jvd1wiO1xuaW1wb3J0IEZhY3RvcnksIHsgSXRlbU5hbWUgfSBmcm9tIFwiLi9GYWN0b3J5XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9pbnRlcmZhY2UvSXRlbVwiO1xuaW1wb3J0IFNoaWVsZCBmcm9tIFwiLi9TaGllbGRcIjtcbmltcG9ydCBTd29yZCBmcm9tIFwiLi9Td29yZFwiO1xuXG5jbGFzcyBJdGVtQ291bnR7XG4gICAgcHJpdmF0ZSBfY3VycmVudENvdW50ID0gMFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX21heENvdW50Om51bWJlcil7fVxuICAgIGdldCBtYXhDb3VudCgpIHtyZXR1cm4gdGhpcy5fbWF4Q291bnR9XG5cbiAgICBpc0NyZWF0YWJsZSgpOiBib29sZWFue1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudENvdW50IDwgdGhpcy5fbWF4Q291bnRcbiAgICB9XG4gICAgaW5jcmVhc2VDb3VudCgpOiB2b2lke1xuICAgICAgICBpZih0aGlzLmlzQ3JlYXRhYmxlKSB0aGlzLl9jdXJyZW50Q291bnQrK1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbUZhY3RvcnkgZXh0ZW5kcyBGYWN0b3J5e1xuICAgIHByaXZhdGUgcmVwb3NpdG9yeSA9IG5ldyBNYXA8SXRlbU5hbWUsIEl0ZW1Db3VudD4oKVxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnJlcG9zaXRvcnkuc2V0KFwic3dvcmRcIiwgbmV3IEl0ZW1Db3VudCgzKSlcbiAgICAgICAgdGhpcy5yZXBvc2l0b3J5LnNldChcInNoaWVsZFwiLCBuZXcgSXRlbUNvdW50KDUpKVxuICAgICAgICB0aGlzLnJlcG9zaXRvcnkuc2V0KFwiYm93XCIsIG5ldyBJdGVtQ291bnQoMikpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGlzQ3JlYXRlYWJsZShuYW1lOiBJdGVtTmFtZSk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBpdGVtQ291bnQgPSB0aGlzLnJlcG9zaXRvcnkuZ2V0KG5hbWUpXG4gICAgICAgIHJldHVybiBpdGVtQ291bnQuaXNDcmVhdGFibGUoKVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlSXRlbShuYW1lOiBJdGVtTmFtZSk6IEl0ZW0ge1xuICAgICAgICBsZXQgcmVzdWx0IDpJdGVtID0gbnVsbFxuXG4gICAgICAgIGlmIChuYW1lID09PSBcInN3b3JkXCIpIHJlc3VsdCA9IG5ldyBTd29yZCgpXG4gICAgICAgIGVsc2UgaWYgKG5hbWUgPT09IFwic2hpZWxkXCIpIHJlc3VsdCA9IG5ldyBTaGllbGQoKVxuICAgICAgICBlbHNlIGlmIChuYW1lID09PSBcImJvd1wiKSByZXN1bHQgPSBuZXcgQm93KClcblxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIFxuICAgIH1cbiAgICBwcm90ZWN0ZWQgcG9zdHByb2Nlc3NJdGVtKG5hbWU6IEl0ZW1OYW1lKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGl0ZW1Db3VudCA9IHRoaXMucmVwb3NpdG9yeS5nZXQobmFtZSlcbiAgICAgICAgaXRlbUNvdW50LmluY3JlYXNlQ291bnQoKVxuICAgIH0gICBcbiAgICBcbn0iLCJpbXBvcnQgSXRlbSBmcm9tIFwiLi9pbnRlcmZhY2UvSXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGllbGQgaW1wbGVtZW50cyBJdGVtIHtcbiAgICB1c2UoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIFwi4YSH4YWh4Ya84YSR4YWi4YSF4YWz4YavIOGEieGFoeGEi+GFreGGvOGEkuGFouGGu+GEieGFs+GGuOGEguGFteGEg+GFoS5cIlxuICAgIH1cbn0iLCJpbXBvcnQgSXRlbSBmcm9tIFwiLi9pbnRlcmZhY2UvSXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd29yZCBpbXBsZW1lbnRzIEl0ZW17XG4gICAgdXNlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIuGEgOGFpeGGt+GEi+GFs+GGryDhhInhhaHhhIvhha3hhrzhhJLhhaLhhrvhhInhhbPhhrjhhILhhbXhhIPhhaEuXCJcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBJdGVtTmFtZSB9IGZyb20gXCIuL0ZhY3RvcnlcIjtcbmltcG9ydCBJdGVtRmFjdG9yeSBmcm9tIFwiLi9JdGVtRmFjdG9yeVwiO1xuXG4vLyDsg53shLHsnYQg7JyE7ZWcIOyduO2EsO2OmOydtOyKpOyZgCDsg53shLHsnYQg7JyE7ZWcIOq1rO2YhCDrtoDrtoTsnbQg7JmE7KCE7Z6IIOu2hOumrOuQmOyWtOyeiOydjC5cbi8vIOqwneyytCDsg53shLHsnYQg7JyE7ZWcIO2MqO2EtCDspJHsl5Ag7ZWY64KY66GcIOqwneyytCDsg53shLHsl5Ag7ZWE7JqU7ZWcIOqzvOygleydhCDthZztlIzrpr/sspjrn7wg7KCV7ZW0IOuGk+qzoCDqsIEg6rO87KCV7J2EIOuLpOyWke2VmOqyjCDqtaztmIQg6rCA64qlXG5cbmNvbnN0IGZhY3RvcnkgPSBuZXcgSXRlbUZhY3RvcnkoKTtcbmNvbnN0IGRvbU91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVwiKTtcbmNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xuXG5idXR0b25zLmZvckVhY2goYnV0dG9uID0+IFxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuaW5uZXJUZXh0IGFzIEl0ZW1OYW1lO1xuICAgICAgICBjb25zdCBpdGVtID0gZmFjdG9yeS5jcmVhdGUoaXRlbU5hbWUpO1xuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgZG9tT3V0cHV0LnZhbHVlICs9IGBcXG4ke2l0ZW0udXNlKCl9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvbU91dHB1dC52YWx1ZSArPSBgXFxuJHtpdGVtTmFtZX3snYQg7IKs7Jqp7ZWgIOyImCDsl4bsirXri4jri6QhIOOFoF/jhaBgO1xuICAgICAgICB9XG4gICAgICAgIGRvbU91dHB1dC5zY3JvbGxUb3AgPSBkb21PdXRwdXQuc2Nyb2xsSGVpZ2h0O1xuICAgIH0pXG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9