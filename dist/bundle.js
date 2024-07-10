/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/abstract-factory/3DButton.ts":
/*!******************************************!*\
  !*** ./src/abstract-factory/3DButton.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/abstract-factory/Button.ts");
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

var ThreeDButton = /** @class */ (function (_super) {
    __extends(ThreeDButton, _super);
    function ThreeDButton(dom, caption) {
        var _this = _super.call(this, dom, caption) || this;
        _this.render();
        return _this;
    }
    ThreeDButton.prototype.render = function () {
        this.dom.innerHTML = "\n            ".concat(this.caption, "\n            <div></div>\n            <div></div>\n        ");
        this.dom.classList.add("threeD-button");
    };
    return ThreeDButton;
}(_Button__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeDButton);


/***/ }),

/***/ "./src/abstract-factory/3DCheckBox.ts":
/*!********************************************!*\
  !*** ./src/abstract-factory/3DCheckBox.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckBox */ "./src/abstract-factory/CheckBox.ts");
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

var ThreeDCheckBox = /** @class */ (function (_super) {
    __extends(ThreeDCheckBox, _super);
    function ThreeDCheckBox(dom, label, checked) {
        var _this = _super.call(this, dom, label, checked) || this;
        _this.render();
        return _this;
    }
    ThreeDCheckBox.prototype.render = function () {
        this.dom.innerHTML = "\n            <label>CheckBox\n                <input type=\"checkbox\" ".concat(this.checked ? 'checked="checked"' : "", ">\n                <div class=\"box\"></div>\n                <div class=\"line\"></div>\n            </label>\n        ");
        this.dom.classList.add("threeD-checkbox");
    };
    return ThreeDCheckBox;
}(_CheckBox__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeDCheckBox);


/***/ }),

/***/ "./src/abstract-factory/3DTextEdit.ts":
/*!********************************************!*\
  !*** ./src/abstract-factory/3DTextEdit.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextEdit */ "./src/abstract-factory/TextEdit.ts");
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

var ThreeDTextEdit = /** @class */ (function (_super) {
    __extends(ThreeDTextEdit, _super);
    function ThreeDTextEdit(dom, text) {
        var _this = _super.call(this, dom, text) || this;
        _this.render();
        return _this;
    }
    ThreeDTextEdit.prototype.render = function () {
        this.dom.innerHTML = "<input value=\"".concat(this.text, "\">");
        this.dom.classList.add("threeD-input");
    };
    return ThreeDTextEdit;
}(_TextEdit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeDTextEdit);


/***/ }),

/***/ "./src/abstract-factory/3DUIFactory.ts":
/*!*********************************************!*\
  !*** ./src/abstract-factory/3DUIFactory.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _3DButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./3DButton */ "./src/abstract-factory/3DButton.ts");
/* harmony import */ var _3DCheckBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./3DCheckBox */ "./src/abstract-factory/3DCheckBox.ts");
/* harmony import */ var _3DTextEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./3DTextEdit */ "./src/abstract-factory/3DTextEdit.ts");
/* harmony import */ var _UIFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIFactory */ "./src/abstract-factory/UIFactory.ts");
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




var ThreeDUIFactory = /** @class */ (function (_super) {
    __extends(ThreeDUIFactory, _super);
    function ThreeDUIFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThreeDUIFactory.prototype.createButton = function (dom, caption) {
        return new _3DButton__WEBPACK_IMPORTED_MODULE_0__["default"](dom, caption);
    };
    ThreeDUIFactory.prototype.createCheckbox = function (dom, caption, checked) {
        return new _3DCheckBox__WEBPACK_IMPORTED_MODULE_1__["default"](dom, caption, checked);
    };
    ThreeDUIFactory.prototype.createTextEditor = function (dom, text) {
        return new _3DTextEdit__WEBPACK_IMPORTED_MODULE_2__["default"](dom, text);
    };
    return ThreeDUIFactory;
}(_UIFactory__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeDUIFactory);


/***/ }),

/***/ "./src/abstract-factory/Button.ts":
/*!****************************************!*\
  !*** ./src/abstract-factory/Button.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Button = /** @class */ (function () {
    function Button(dom, caption) {
        this.dom = dom;
        this.caption = caption;
    }
    return Button;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ "./src/abstract-factory/CheckBox.ts":
/*!******************************************!*\
  !*** ./src/abstract-factory/CheckBox.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CheckBox = /** @class */ (function () {
    function CheckBox(dom, label, checked) {
        this.dom = dom;
        this.label = label;
        this.checked = checked;
    }
    return CheckBox;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckBox);


/***/ }),

/***/ "./src/abstract-factory/FlatButton.ts":
/*!********************************************!*\
  !*** ./src/abstract-factory/FlatButton.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/abstract-factory/Button.ts");
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

var FlatButton = /** @class */ (function (_super) {
    __extends(FlatButton, _super);
    function FlatButton(dom, caption) {
        var _this = _super.call(this, dom, caption) || this;
        _this.render();
        return _this;
    }
    FlatButton.prototype.render = function () {
        this.dom.innerText = this.caption;
        this.dom.classList.add("flat-button");
    };
    return FlatButton;
}(_Button__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatButton);


/***/ }),

/***/ "./src/abstract-factory/FlatCheckBox.ts":
/*!**********************************************!*\
  !*** ./src/abstract-factory/FlatCheckBox.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckBox */ "./src/abstract-factory/CheckBox.ts");
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

var FlatCheckBox = /** @class */ (function (_super) {
    __extends(FlatCheckBox, _super);
    function FlatCheckBox(dom, label, checked) {
        var _this = _super.call(this, dom, label, checked) || this;
        _this.render();
        return _this;
    }
    FlatCheckBox.prototype.render = function () {
        this.dom.innerHTML = "\n            <label>".concat(this.label, "\n                <input type=\"checkbox\" ").concat(this.checked ? "checked=\"checked\"" : "", ">\n                <span></span>\n            </label>\n        ");
        this.dom.classList.add("flat-checkbox");
    };
    return FlatCheckBox;
}(_CheckBox__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatCheckBox);


/***/ }),

/***/ "./src/abstract-factory/FlatTextEdit.ts":
/*!**********************************************!*\
  !*** ./src/abstract-factory/FlatTextEdit.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextEdit */ "./src/abstract-factory/TextEdit.ts");
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

var FlatTextEdit = /** @class */ (function (_super) {
    __extends(FlatTextEdit, _super);
    function FlatTextEdit(dom, text) {
        var _this = _super.call(this, dom, text) || this;
        _this.render();
        return _this;
    }
    FlatTextEdit.prototype.render = function () {
        this.dom.innerHTML = "<input value=\"".concat(this.text, "\">");
        this.dom.classList.add("flat-input");
    };
    return FlatTextEdit;
}(_TextEdit__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatTextEdit);


/***/ }),

/***/ "./src/abstract-factory/FlatUIFactory.ts":
/*!***********************************************!*\
  !*** ./src/abstract-factory/FlatUIFactory.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FlatButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlatButton */ "./src/abstract-factory/FlatButton.ts");
/* harmony import */ var _FlatCheckBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlatCheckBox */ "./src/abstract-factory/FlatCheckBox.ts");
/* harmony import */ var _FlatTextEdit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FlatTextEdit */ "./src/abstract-factory/FlatTextEdit.ts");
/* harmony import */ var _UIFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIFactory */ "./src/abstract-factory/UIFactory.ts");
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




var FlatUIFactory = /** @class */ (function (_super) {
    __extends(FlatUIFactory, _super);
    function FlatUIFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlatUIFactory.prototype.createButton = function (dom, caption) {
        return new _FlatButton__WEBPACK_IMPORTED_MODULE_0__["default"](dom, caption);
    };
    FlatUIFactory.prototype.createCheckbox = function (dom, label, checked) {
        return new _FlatCheckBox__WEBPACK_IMPORTED_MODULE_1__["default"](dom, label, checked);
    };
    FlatUIFactory.prototype.createTextEditor = function (dom, text) {
        return new _FlatTextEdit__WEBPACK_IMPORTED_MODULE_2__["default"](dom, text);
    };
    return FlatUIFactory;
}(_UIFactory__WEBPACK_IMPORTED_MODULE_3__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlatUIFactory);


/***/ }),

/***/ "./src/abstract-factory/TextEdit.ts":
/*!******************************************!*\
  !*** ./src/abstract-factory/TextEdit.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var TextEdit = /** @class */ (function () {
    function TextEdit(dom, text) {
        this.dom = dom;
        this.text = text;
    }
    return TextEdit;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextEdit);


/***/ }),

/***/ "./src/abstract-factory/UIFactory.ts":
/*!*******************************************!*\
  !*** ./src/abstract-factory/UIFactory.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var UIFactory = /** @class */ (function () {
    function UIFactory() {
    }
    return UIFactory;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIFactory);


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
/*!***************************************!*\
  !*** ./src/abstract-factory/index.ts ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _3DUIFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./3DUIFactory */ "./src/abstract-factory/3DUIFactory.ts");
/* harmony import */ var _FlatUIFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlatUIFactory */ "./src/abstract-factory/FlatUIFactory.ts");


var factory;
var flatMode = false;
if (flatMode) {
    factory = new _FlatUIFactory__WEBPACK_IMPORTED_MODULE_1__["default"]();
}
else {
    factory = new _3DUIFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
}
var domButton = document.querySelector(".button");
var domCheckbox = document.querySelector(".checkbox");
var domTextEditor = document.querySelector(".textedit");
factory.createButton(domButton, "BUTTON");
factory.createCheckbox(domCheckbox, "Checkbox", true);
factory.createTextEditor(domTextEditor, "DesignPattern");

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ0E7QUFHNUMsSUFBSSxPQUFtQjtBQUN2QixJQUFNLFFBQVEsR0FBRyxLQUFLO0FBRXRCLElBQUcsUUFBUSxFQUFDLENBQUM7SUFDVCxPQUFPLEdBQUcsSUFBSSxzREFBYSxFQUFFO0FBQ2pDLENBQUM7S0FBSSxDQUFDO0lBQ0YsT0FBTyxHQUFHLElBQUksb0RBQWUsRUFBRTtBQUNuQyxDQUFDO0FBR0QsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQWdCO0FBQ2xFLElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFnQjtBQUN0RSxJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBZ0I7QUFHeEUsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO0FBQ3pDLE9BQU8sQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUM7QUFDckQsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hYnN0cmFjdC1mYWN0b3J5LzNEQnV0dG9uLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2Fic3RyYWN0LWZhY3RvcnkvM0RDaGVja0JveC50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hYnN0cmFjdC1mYWN0b3J5LzNEVGV4dEVkaXQudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvYWJzdHJhY3QtZmFjdG9yeS8zRFVJRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hYnN0cmFjdC1mYWN0b3J5L0J1dHRvbi50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hYnN0cmFjdC1mYWN0b3J5L0NoZWNrQm94LnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2Fic3RyYWN0LWZhY3RvcnkvRmxhdEJ1dHRvbi50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hYnN0cmFjdC1mYWN0b3J5L0ZsYXRDaGVja0JveC50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hYnN0cmFjdC1mYWN0b3J5L0ZsYXRUZXh0RWRpdC50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hYnN0cmFjdC1mYWN0b3J5L0ZsYXRVSUZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vLi9zcmMvYWJzdHJhY3QtZmFjdG9yeS9UZXh0RWRpdC50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9hYnN0cmFjdC1mYWN0b3J5L1VJRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL2Fic3RyYWN0LWZhY3RvcnkvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhyZWVEQnV0dG9uIGV4dGVuZHMgQnV0dG9uIHtcbiAgICBjb25zdHJ1Y3Rvcihkb206SFRNTEVsZW1lbnQsIGNhcHRpb246c3RyaW5nKXtcbiAgICAgICAgc3VwZXIoZG9tLCBjYXB0aW9uKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKVxuICAgIH1cblxuICAgIHJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kb20uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgJHt0aGlzLmNhcHRpb259XG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgYFxuICAgICAgICB0aGlzLmRvbS5jbGFzc0xpc3QuYWRkKFwidGhyZWVELWJ1dHRvblwiKVxuICAgIH1cbn0iLCJpbXBvcnQgQ2hlY2tCb3ggZnJvbSBcIi4vQ2hlY2tCb3hcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaHJlZURDaGVja0JveCBleHRlbmRzIENoZWNrQm94e1xuICAgIGNvbnN0cnVjdG9yKGRvbTpIVE1MRWxlbWVudCwgbGFiZWw6c3RyaW5nLCBjaGVja2VkOmJvb2xlYW4pe1xuICAgICAgICBzdXBlcihkb20sIGxhYmVsLCBjaGVja2VkKVxuICAgICAgICB0aGlzLnJlbmRlcigpXG4gICAgfVxuXG4gICAgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8bGFiZWw+Q2hlY2tCb3hcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgJHt0aGlzLmNoZWNrZWQgPyAnY2hlY2tlZD1cImNoZWNrZWRcIicgOiBcIlwifT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmVcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIGBcbiAgICAgICAgdGhpcy5kb20uY2xhc3NMaXN0LmFkZChcInRocmVlRC1jaGVja2JveFwiKVxuICAgIH1cbn0iLCJpbXBvcnQgVGV4dEVkaXQgZnJvbSBcIi4vVGV4dEVkaXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhyZWVEVGV4dEVkaXQgZXh0ZW5kcyBUZXh0RWRpdHtcblxuICAgIGNvbnN0cnVjdG9yKGRvbTpIVE1MRWxlbWVudCwgdGV4dDpzdHJpbmcpe1xuICAgICAgICBzdXBlcihkb20sIHRleHQpXG4gICAgICAgIHRoaXMucmVuZGVyKClcbiAgICB9XG5cbiAgICByZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZG9tLmlubmVySFRNTCA9IGA8aW5wdXQgdmFsdWU9XCIke3RoaXMudGV4dH1cIj5gXG4gICAgICAgIHRoaXMuZG9tLmNsYXNzTGlzdC5hZGQoXCJ0aHJlZUQtaW5wdXRcIilcbiAgICB9XG59IiwiaW1wb3J0IFRocmVlREJ1dHRvbiBmcm9tIFwiLi8zREJ1dHRvblwiXG5pbXBvcnQgVGhyZWVEQ2hlY2tCb3ggZnJvbSBcIi4vM0RDaGVja0JveFwiXG5pbXBvcnQgVGhyZWVEVGV4dEVkaXQgZnJvbSBcIi4vM0RUZXh0RWRpdFwiXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiXG5pbXBvcnQgQ2hlY2tCb3ggZnJvbSBcIi4vQ2hlY2tCb3hcIlxuaW1wb3J0IFRleHRFZGl0IGZyb20gXCIuL1RleHRFZGl0XCJcbmltcG9ydCBVSUZhY3RvcnkgZnJvbSBcIi4vVUlGYWN0b3J5XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhyZWVEVUlGYWN0b3J5IGV4dGVuZHMgVUlGYWN0b3J5IHtcblxuICAgIGNyZWF0ZUJ1dHRvbihkb206IEhUTUxFbGVtZW50LCBjYXB0aW9uOnN0cmluZyk6IEJ1dHRvbiB7XG4gICAgICAgIHJldHVybiBuZXcgVGhyZWVEQnV0dG9uKGRvbSwgY2FwdGlvbilcbiAgICB9XG4gICAgY3JlYXRlQ2hlY2tib3goZG9tOiBIVE1MRWxlbWVudCwgY2FwdGlvbjpzdHJpbmcsIGNoZWNrZWQ6Ym9vbGVhbik6IENoZWNrQm94IHtcbiAgICAgICAgcmV0dXJuIG5ldyBUaHJlZURDaGVja0JveChkb20sIGNhcHRpb24sIGNoZWNrZWQpXG4gICAgfVxuXG4gICAgY3JlYXRlVGV4dEVkaXRvcihkb206IEhUTUxFbGVtZW50LCB0ZXh0OnN0cmluZyk6IFRleHRFZGl0IHtcbiAgICAgICAgcmV0dXJuIG5ldyBUaHJlZURUZXh0RWRpdChkb20sIHRleHQpXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJ1dHRvbntcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGRvbTpIVE1MRWxlbWVudCwgXG4gICAgICAgIHByb3RlY3RlZCBjYXB0aW9uOnN0cmluZ1xuICAgICl7fVxuXG4gICAgYWJzdHJhY3QgcmVuZGVyKCk6IHZvaWRcbn0iLCJleHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDaGVja0JveHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIGRvbTpIVE1MRWxlbWVudCwgXG4gICAgICAgIHByb3RlY3RlZCBsYWJlbDpzdHJpbmcsXG4gICAgICAgIHByb3RlY3RlZCBjaGVja2VkOmJvb2xlYW5cbiAgICApe31cblxuICAgIGFic3RyYWN0IHJlbmRlcigpOiB2b2lkXG59IiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxhdEJ1dHRvbiBleHRlbmRzIEJ1dHRvbntcblxuICAgIGNvbnN0cnVjdG9yKGRvbTpIVE1MRWxlbWVudCwgY2FwdGlvbjpzdHJpbmcpe1xuICAgICAgICBzdXBlcihkb20sIGNhcHRpb24pO1xuICAgICAgICB0aGlzLnJlbmRlcigpXG4gICAgfVxuXG4gICAgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRvbS5pbm5lclRleHQgPSB0aGlzLmNhcHRpb25cbiAgICAgICAgdGhpcy5kb20uY2xhc3NMaXN0LmFkZChcImZsYXQtYnV0dG9uXCIpXG4gICAgfVxuICAgIFxufSIsImltcG9ydCBDaGVja0JveCBmcm9tIFwiLi9DaGVja0JveFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsYXRDaGVja0JveCBleHRlbmRzIENoZWNrQm94e1xuICAgIGNvbnN0cnVjdG9yKGRvbTpIVE1MRWxlbWVudCwgbGFiZWw6c3RyaW5nLCBjaGVja2VkOmJvb2xlYW4pe1xuICAgICAgICBzdXBlcihkb20sIGxhYmVsLCBjaGVja2VkKVxuICAgICAgICB0aGlzLnJlbmRlcigpXG4gICAgfVxuXG4gICAgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8bGFiZWw+JHt0aGlzLmxhYmVsfVxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAke3RoaXMuY2hlY2tlZCA/IGBjaGVja2VkPVwiY2hlY2tlZFwiYCA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIGBcbiAgICAgICAgdGhpcy5kb20uY2xhc3NMaXN0LmFkZChcImZsYXQtY2hlY2tib3hcIilcbiAgICB9XG59IiwiaW1wb3J0IFRleHRFZGl0IGZyb20gXCIuL1RleHRFZGl0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsYXRUZXh0RWRpdCBleHRlbmRzIFRleHRFZGl0e1xuXG4gICAgY29uc3RydWN0b3IoZG9tOkhUTUxFbGVtZW50LHRleHQ6c3RyaW5nKXtcbiAgICAgICAgc3VwZXIoZG9tLCB0ZXh0KVxuICAgICAgICB0aGlzLnJlbmRlcigpXG4gICAgfVxuXG4gICAgcmVuZGVyKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRvbS5pbm5lckhUTUwgPSBgPGlucHV0IHZhbHVlPVwiJHt0aGlzLnRleHR9XCI+YFxuICAgICAgICB0aGlzLmRvbS5jbGFzc0xpc3QuYWRkKFwiZmxhdC1pbnB1dFwiKVxuICAgIH1cbn0iLCJpbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IENoZWNrQm94IGZyb20gXCIuL0NoZWNrQm94XCI7XG5pbXBvcnQgRmxhdEJ1dHRvbiBmcm9tIFwiLi9GbGF0QnV0dG9uXCI7XG5pbXBvcnQgRmxhdENoZWNrQm94IGZyb20gXCIuL0ZsYXRDaGVja0JveFwiO1xuaW1wb3J0IEZsYXRUZXh0RWRpdCBmcm9tIFwiLi9GbGF0VGV4dEVkaXRcIjtcbmltcG9ydCBUZXh0RWRpdCBmcm9tIFwiLi9UZXh0RWRpdFwiO1xuaW1wb3J0IFVJRmFjdG9yeSBmcm9tIFwiLi9VSUZhY3RvcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxhdFVJRmFjdG9yeSBleHRlbmRzIFVJRmFjdG9yeXtcbiAgICBjcmVhdGVCdXR0b24oZG9tOiBIVE1MRWxlbWVudCxjYXB0aW9uOiBzdHJpbmcpOiBCdXR0b24ge1xuICAgICAgICByZXR1cm4gbmV3IEZsYXRCdXR0b24oZG9tLCBjYXB0aW9uKVxuICAgIH1cblxuICAgIGNyZWF0ZUNoZWNrYm94KGRvbTogSFRNTEVsZW1lbnQsIGxhYmVsOiBzdHJpbmcsIGNoZWNrZWQ6IGJvb2xlYW4pOiBDaGVja0JveCB7XG4gICAgICAgIHJldHVybiBuZXcgRmxhdENoZWNrQm94KGRvbSwgbGFiZWwsIGNoZWNrZWQpXG4gICAgfVxuXG4gICAgY3JlYXRlVGV4dEVkaXRvcihkb206IEhUTUxFbGVtZW50LCB0ZXh0OiBzdHJpbmcpOiBUZXh0RWRpdCB7XG4gICAgICAgIHJldHVybiBuZXcgRmxhdFRleHRFZGl0KGRvbSwgdGV4dClcbiAgICB9XG4gICAgXG59IiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgVGV4dEVkaXR7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCBkb206SFRNTEVsZW1lbnQsIFxuICAgICAgICBwcm90ZWN0ZWQgdGV4dDpzdHJpbmcsXG4gICAgKXt9XG5cbiAgICBhYnN0cmFjdCByZW5kZXIoKTogdm9pZFxufSIsImltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgQ2hlY2tCb3ggZnJvbSBcIi4vQ2hlY2tCb3hcIjtcbmltcG9ydCBUZXh0RWRpdCBmcm9tIFwiLi9UZXh0RWRpdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBVSUZhY3Rvcnl7XG4gICAgYWJzdHJhY3QgY3JlYXRlQnV0dG9uKGRvbTogSFRNTEVsZW1lbnQsIGNhcHRpb246c3RyaW5nKTogQnV0dG9uXG4gICAgYWJzdHJhY3QgY3JlYXRlQ2hlY2tib3goZG9tOiBIVE1MRWxlbWVudCwgbGFiZWw6c3RyaW5nLCBjaGVja2VkOmJvb2xlYW4pOiBDaGVja0JveFxuICAgIGFic3RyYWN0IGNyZWF0ZVRleHRFZGl0b3IoZG9tOiBIVE1MRWxlbWVudCwgdGV4dDpzdHJpbmcpOiBUZXh0RWRpdFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRocmVlRFVJRmFjdG9yeSBmcm9tIFwiLi8zRFVJRmFjdG9yeVwiO1xuaW1wb3J0IEZsYXRVSUZhY3RvcnkgZnJvbSBcIi4vRmxhdFVJRmFjdG9yeVwiO1xuaW1wb3J0IFVJRmFjdG9yeSBmcm9tIFwiLi9VSUZhY3RvcnlcIjtcblxubGV0IGZhY3RvcnkgOiBVSUZhY3RvcnlcbmNvbnN0IGZsYXRNb2RlID0gZmFsc2VcblxuaWYoZmxhdE1vZGUpe1xuICAgIGZhY3RvcnkgPSBuZXcgRmxhdFVJRmFjdG9yeSgpXG59ZWxzZXtcbiAgICBmYWN0b3J5ID0gbmV3IFRocmVlRFVJRmFjdG9yeSgpXG59XG5cblxuY29uc3QgZG9tQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25cIikgYXMgSFRNTEVsZW1lbnRcbmNvbnN0IGRvbUNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGVja2JveFwiKSBhcyBIVE1MRWxlbWVudFxuY29uc3QgZG9tVGV4dEVkaXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGV4dGVkaXRcIikgYXMgSFRNTEVsZW1lbnRcblxuXG5mYWN0b3J5LmNyZWF0ZUJ1dHRvbihkb21CdXR0b24sIFwiQlVUVE9OXCIpXG5mYWN0b3J5LmNyZWF0ZUNoZWNrYm94KGRvbUNoZWNrYm94LCBcIkNoZWNrYm94XCIsIHRydWUpXG5mYWN0b3J5LmNyZWF0ZVRleHRFZGl0b3IoZG9tVGV4dEVkaXRvciwgXCJEZXNpZ25QYXR0ZXJuXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9