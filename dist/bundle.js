/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/decorator/BoxDecorator.ts":
/*!***************************************!*\
  !*** ./src/decorator/BoxDecorator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/decorator/Decorator.ts");
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

var BoxDecorator = /** @class */ (function (_super) {
    __extends(BoxDecorator, _super);
    function BoxDecorator(targetItem) {
        return _super.call(this, targetItem) || this;
    }
    BoxDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount() + 2;
    };
    BoxDecorator.prototype.getLength = function (i) {
        return this.targetItem.getLength(i) + 2;
    };
    BoxDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + 2;
    };
    BoxDecorator.prototype.getString = function (i) {
        var maxWidth = this.getMaxLength();
        if (i === 0 || i === this.getLinesCount() - 1) {
            return "<span style='color:yellow'>+".concat('-'.repeat(maxWidth - 2), "+</span>");
        }
        else {
            return "<span style='color:yellow'>|</span>".concat(this.targetItem.getString(i - 1)).concat(' '.repeat(maxWidth - this.targetItem.getLength(i - 1) - 2), "<span style='color:yellow'>|</span>");
        }
    };
    return BoxDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxDecorator);


/***/ }),

/***/ "./src/decorator/Decorator.ts":
/*!************************************!*\
  !*** ./src/decorator/Decorator.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/decorator/Item.ts");
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

var Decorator = /** @class */ (function (_super) {
    __extends(Decorator, _super);
    function Decorator(targetItem) {
        var _this = _super.call(this) || this;
        _this.targetItem = targetItem;
        return _this;
    }
    return Decorator;
}(_Item__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Decorator);


/***/ }),

/***/ "./src/decorator/Item.ts":
/*!*******************************!*\
  !*** ./src/decorator/Item.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Item = /** @class */ (function () {
    function Item() {
    }
    Item.prototype.print = function (dom) {
        var result = [];
        var cntLines = this.getLinesCount();
        for (var i = 0; i < cntLines; i++) {
            var string = this.getString(i);
            result.push(string);
        }
        dom.innerHTML = result.join('\n');
    };
    return Item;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


/***/ }),

/***/ "./src/decorator/LineNumberDecorator.ts":
/*!**********************************************!*\
  !*** ./src/decorator/LineNumberDecorator.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/decorator/Decorator.ts");
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

var LineNumberDecorator = /** @class */ (function (_super) {
    __extends(LineNumberDecorator, _super);
    function LineNumberDecorator(targetItem) {
        return _super.call(this, targetItem) || this;
    }
    LineNumberDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount();
    };
    LineNumberDecorator.prototype.getLength = function (i) {
        return this.targetItem.getLength(i) + 6;
    };
    LineNumberDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + 6;
    };
    LineNumberDecorator.prototype.getString = function (i) {
        return "<span style=\"color:green\">".concat(String(i).padStart(4, '0'), "</span><span style='color:dimgray'>: </span>").concat(this.targetItem.getString(i));
    };
    return LineNumberDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineNumberDecorator);


/***/ }),

/***/ "./src/decorator/SideDecorator.ts":
/*!****************************************!*\
  !*** ./src/decorator/SideDecorator.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decorator */ "./src/decorator/Decorator.ts");
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

var SideDecorator = /** @class */ (function (_super) {
    __extends(SideDecorator, _super);
    function SideDecorator(targetItem, ch) {
        var _this = _super.call(this, targetItem) || this;
        _this.ch = ch;
        return _this;
    }
    SideDecorator.prototype.getLinesCount = function () {
        return this.targetItem.getLinesCount();
    };
    SideDecorator.prototype.getLength = function (i) {
        return this.targetItem.getLength(i) + this.ch.length * 2;
    };
    SideDecorator.prototype.getMaxLength = function () {
        return this.targetItem.getMaxLength() + this.ch.length * 2;
    };
    SideDecorator.prototype.getString = function (i) {
        return "<span style='color:gray'>".concat(this.ch, "</span>")
            + "".concat(this.targetItem.getString(i))
            + "<span style='color:gray'>".concat(this.ch, "</span>");
    };
    return SideDecorator;
}(_Decorator__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideDecorator);


/***/ }),

/***/ "./src/decorator/String.ts":
/*!*********************************!*\
  !*** ./src/decorator/String.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/decorator/Item.ts");
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

var Strings = /** @class */ (function (_super) {
    __extends(Strings, _super);
    function Strings() {
        var _this = _super.call(this) || this;
        _this.data = new Array();
        return _this;
    }
    Strings.prototype.getLinesCount = function () {
        return this.data.length;
    };
    Strings.prototype.getLength = function (i) {
        return this.data[i].length;
    };
    Strings.prototype.getMaxLength = function () {
        var maxLength = 0;
        this.data.forEach(function (item) {
            if (item.length > maxLength)
                maxLength = item.length;
        });
        return maxLength;
    };
    Strings.prototype.getString = function (i) {
        return this.data[i];
    };
    Strings.prototype.add = function (str) {
        this.data.push(str);
    };
    return Strings;
}(_Item__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Strings);


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
  !*** ./src/decorator/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BoxDecorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxDecorator */ "./src/decorator/BoxDecorator.ts");
/* harmony import */ var _LineNumberDecorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LineNumberDecorator */ "./src/decorator/LineNumberDecorator.ts");
/* harmony import */ var _SideDecorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideDecorator */ "./src/decorator/SideDecorator.ts");
/* harmony import */ var _String__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./String */ "./src/decorator/String.ts");




var strs = new _String__WEBPACK_IMPORTED_MODULE_3__["default"]();
strs.add('Hello!');
strs.add('My name is Kim Hyoung-Jun.');
strs.add('I am a GIS Developer.');
strs.add('Design-Pattern is a powerful tool.');
var domPre = document.querySelector("pre");
// strs.print(domPre);
var d1 = new _SideDecorator__WEBPACK_IMPORTED_MODULE_2__["default"](strs, '"');
// d1.print(domPre);
var d2 = new _LineNumberDecorator__WEBPACK_IMPORTED_MODULE_1__["default"](d1);
// d2.print(domPre);
var d3 = new _BoxDecorator__WEBPACK_IMPORTED_MODULE_0__["default"](d2);
d3.print(domPre);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQ2M7QUFDWjtBQUNiO0FBRS9CLElBQU0sSUFBSSxHQUFHLElBQUksK0NBQU8sRUFBRSxDQUFDO0FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0FBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7QUFFL0MsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUU3QyxzQkFBc0I7QUFDdEIsSUFBTSxFQUFFLEdBQUcsSUFBSSxzREFBYSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN4QyxvQkFBb0I7QUFDcEIsSUFBTSxFQUFFLEdBQUcsSUFBSSw0REFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN2QyxvQkFBb0I7QUFDcEIsSUFBTSxFQUFFLEdBQUcsSUFBSSxxREFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9kZWNvcmF0b3IvQm94RGVjb3JhdG9yLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2RlY29yYXRvci9EZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZGVjb3JhdG9yL0l0ZW0udHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZGVjb3JhdG9yL0xpbmVOdW1iZXJEZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZGVjb3JhdG9yL1NpZGVEZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvZGVjb3JhdG9yL1N0cmluZy50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2RlY29yYXRvci9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGVjb3JhdG9yIGZyb20gXCIuL0RlY29yYXRvclwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3hEZWNvcmF0b3IgZXh0ZW5kcyBEZWNvcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldEl0ZW06IEl0ZW0pIHtcbiAgICAgICAgc3VwZXIodGFyZ2V0SXRlbSk7XG4gICAgfVxuXG4gICAgZ2V0TGluZXNDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldExpbmVzQ291bnQoKSArIDI7XG4gICAgfVxuXG4gICAgZ2V0TGVuZ3RoKGk6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TGVuZ3RoKGkpICsgMjtcbiAgICB9XG5cbiAgICBnZXRNYXhMZW5ndGgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0SXRlbS5nZXRNYXhMZW5ndGgoKSArIDI7XG4gICAgfVxuXG4gICAgZ2V0U3RyaW5nKGk6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IG1heFdpZHRoID0gdGhpcy5nZXRNYXhMZW5ndGgoKTtcbiAgICAgICAgaWYgKGkgPT09IDAgfHwgaSA9PT0gdGhpcy5nZXRMaW5lc0NvdW50KCkgLSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gYDxzcGFuIHN0eWxlPSdjb2xvcjp5ZWxsb3cnPiskeyctJy5yZXBlYXQobWF4V2lkdGggLSAyKX0rPC9zcGFuPmA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYDxzcGFuIHN0eWxlPSdjb2xvcjp5ZWxsb3cnPnw8L3NwYW4+JHt0aGlzLnRhcmdldEl0ZW0uZ2V0U3RyaW5nKGkgLSAxKX0keycgJy5yZXBlYXQobWF4V2lkdGggLSB0aGlzLnRhcmdldEl0ZW0uZ2V0TGVuZ3RoKGkgLSAxKSAtIDIpfTxzcGFuIHN0eWxlPSdjb2xvcjp5ZWxsb3cnPnw8L3NwYW4+YDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgRGVjb3JhdG9yIGV4dGVuZHMgSXRlbXtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0YXJnZXRJdGVtIDogSXRlbSl7XG4gICAgICAgIHN1cGVyKClcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBJdGVte1xuICAgIGFic3RyYWN0IGdldExpbmVzQ291bnQoKTogbnVtYmVyXG4gICAgYWJzdHJhY3QgZ2V0TGVuZ3RoKGk6bnVtYmVyKTogbnVtYmVyXG4gICAgYWJzdHJhY3QgZ2V0TWF4TGVuZ3RoKCk6bnVtYmVyXG4gICAgYWJzdHJhY3QgZ2V0U3RyaW5nKGk6bnVtYmVyKTogc3RyaW5nXG5cbiAgICBwcmludChkb206SFRNTEVsZW1lbnQpOnZvaWQge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBbXVxuICAgICAgICBjb25zdCBjbnRMaW5lcyA9IHRoaXMuZ2V0TGluZXNDb3VudCgpXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPGNudExpbmVzOyBpKyspe1xuICAgICAgICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoaSlcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHN0cmluZylcbiAgICAgICAgfVxuICAgICAgICBkb20uaW5uZXJIVE1MID0gcmVzdWx0LmpvaW4oJ1xcbicpXG4gICAgfVxufVxuIiwiaW1wb3J0IERlY29yYXRvciBmcm9tIFwiLi9EZWNvcmF0b3JcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZU51bWJlckRlY29yYXRvciBleHRlbmRzIERlY29yYXRvciB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0SXRlbTogSXRlbSkge1xuICAgICAgICBzdXBlcih0YXJnZXRJdGVtKTtcbiAgICB9XG5cbiAgICBnZXRMaW5lc0NvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TGluZXNDb3VudCgpO1xuICAgIH1cblxuICAgIGdldExlbmd0aChpOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldExlbmd0aChpKSArIDY7XG4gICAgfVxuXG4gICAgZ2V0TWF4TGVuZ3RoKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TWF4TGVuZ3RoKCkgKyA2O1xuICAgIH1cblxuICAgIGdldFN0cmluZyhpOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYDxzcGFuIHN0eWxlPVwiY29sb3I6Z3JlZW5cIj4ke1N0cmluZyhpKS5wYWRTdGFydCg0LCAnMCcpfTwvc3Bhbj48c3BhbiBzdHlsZT0nY29sb3I6ZGltZ3JheSc+OiA8L3NwYW4+JHt0aGlzLnRhcmdldEl0ZW0uZ2V0U3RyaW5nKGkpfWA7XG4gICAgfVxufVxuIiwiaW1wb3J0IERlY29yYXRvciBmcm9tIFwiLi9EZWNvcmF0b3JcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL0l0ZW1cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZURlY29yYXRvciBleHRlbmRzIERlY29yYXRvcntcbiAgICBnZXRMaW5lc0NvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TGluZXNDb3VudCgpXG4gICAgfVxuXG4gICAgZ2V0TGVuZ3RoKGk6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldEl0ZW0uZ2V0TGVuZ3RoKGkpICsgdGhpcy5jaC5sZW5ndGgqMlxuICAgIH1cblxuICAgIGdldE1heExlbmd0aCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXRJdGVtLmdldE1heExlbmd0aCgpICsgdGhpcy5jaC5sZW5ndGgqMlxuICAgIH1cblxuICAgIGdldFN0cmluZyhpOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYDxzcGFuIHN0eWxlPSdjb2xvcjpncmF5Jz4ke3RoaXMuY2h9PC9zcGFuPmBcbiAgICAgICAgKyBgJHt0aGlzLnRhcmdldEl0ZW0uZ2V0U3RyaW5nKGkpfWBcbiAgICAgICAgKyBgPHNwYW4gc3R5bGU9J2NvbG9yOmdyYXknPiR7dGhpcy5jaH08L3NwYW4+YFxuICAgIH1cbiAgICBcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXRJdGVtOkl0ZW0sIHByaXZhdGUgY2g6c3RyaW5nKXtcbiAgICAgICAgc3VwZXIodGFyZ2V0SXRlbSlcbiAgICB9XG59IiwiaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdzIGV4dGVuZHMgSXRlbXtcbiAgICBnZXRMaW5lc0NvdW50KCk6IG51bWJlciB7XG4gICAgICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGhcbiAgICB9XG5cbiAgICBnZXRMZW5ndGgoaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtpXS5sZW5ndGhcbiAgICB9XG5cbiAgICBnZXRNYXhMZW5ndGgoKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IG1heExlbmd0aCA9IDBcbiAgICAgICAgdGhpcy5kYXRhLmZvckVhY2goKGl0ZW0pPT57XG4gICAgICAgICAgICBpZihpdGVtLmxlbmd0aCA+IG1heExlbmd0aCkgbWF4TGVuZ3RoID0gaXRlbS5sZW5ndGhcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG1heExlbmd0aFxuICAgIH1cblxuICAgIGdldFN0cmluZyhpOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgIHJldHVybiB0aGlzLmRhdGFbaV1cbiAgICB9XG5cblxuICAgIHByaXZhdGUgZGF0YSA9IG5ldyBBcnJheTxzdHJpbmc+KClcbiAgICBjb25zdHJ1Y3RvcigpeyBzdXBlcigpIH1cbiAgICBhZGQoc3RyOnN0cmluZyk6dm9pZHtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goc3RyKVxuICAgIH1cblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEJveERlY29yYXRvciBmcm9tIFwiLi9Cb3hEZWNvcmF0b3JcIjtcbmltcG9ydCBMaW5lTnVtYmVyRGVjb3JhdG9yIGZyb20gXCIuL0xpbmVOdW1iZXJEZWNvcmF0b3JcIjtcbmltcG9ydCBTaWRlRGVjb3JhdG9yIGZyb20gXCIuL1NpZGVEZWNvcmF0b3JcIjtcbmltcG9ydCBTdHJpbmdzIGZyb20gXCIuL1N0cmluZ1wiO1xuXG5jb25zdCBzdHJzID0gbmV3IFN0cmluZ3MoKTtcbnN0cnMuYWRkKCdIZWxsbyEnKTtcbnN0cnMuYWRkKCdNeSBuYW1lIGlzIEtpbSBIeW91bmctSnVuLicpO1xuc3Rycy5hZGQoJ0kgYW0gYSBHSVMgRGV2ZWxvcGVyLicpO1xuc3Rycy5hZGQoJ0Rlc2lnbi1QYXR0ZXJuIGlzIGEgcG93ZXJmdWwgdG9vbC4nKTtcblxuY29uc3QgZG9tUHJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInByZVwiKTtcblxuLy8gc3Rycy5wcmludChkb21QcmUpO1xuY29uc3QgZDEgPSBuZXcgU2lkZURlY29yYXRvcihzdHJzLCAnXCInKTtcbi8vIGQxLnByaW50KGRvbVByZSk7XG5jb25zdCBkMiA9IG5ldyBMaW5lTnVtYmVyRGVjb3JhdG9yKGQxKTtcbi8vIGQyLnByaW50KGRvbVByZSk7XG5jb25zdCBkMyA9IG5ldyBCb3hEZWNvcmF0b3IoZDIpO1xuZDMucHJpbnQoZG9tUHJlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==