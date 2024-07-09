/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/observer/DiceGame.ts":
/*!**********************************!*\
  !*** ./src/observer/DiceGame.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var DiceGame = /** @class */ (function () {
    function DiceGame() {
        this.players = new Array();
    }
    DiceGame.prototype.addPlayer = function (player) {
        this.players.push(player);
    };
    return DiceGame;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiceGame);


/***/ }),

/***/ "./src/observer/EvenBettingPlayer.ts":
/*!*******************************************!*\
  !*** ./src/observer/EvenBettingPlayer.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/observer/Player.ts");
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

var EvenBettingPlayer = /** @class */ (function (_super) {
    __extends(EvenBettingPlayer, _super);
    function EvenBettingPlayer(name) {
        return _super.call(this, name) || this;
    }
    EvenBettingPlayer.prototype.update = function (diceNumber) {
        this._winning = diceNumber % 2 === 0;
    };
    return EvenBettingPlayer;
}(_Player__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EvenBettingPlayer);


/***/ }),

/***/ "./src/observer/FairDiceGame.ts":
/*!**************************************!*\
  !*** ./src/observer/FairDiceGame.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DiceGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiceGame */ "./src/observer/DiceGame.ts");
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

var FairDiceGame = /** @class */ (function (_super) {
    __extends(FairDiceGame, _super);
    function FairDiceGame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FairDiceGame.prototype.play = function () {
        var n = Math.floor(Math.random() * 6) + 1;
        this.players.forEach(function (player) {
            player.update(n);
        });
        return n;
    };
    return FairDiceGame;
}(_DiceGame__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FairDiceGame);


/***/ }),

/***/ "./src/observer/NBettingPlayer.ts":
/*!****************************************!*\
  !*** ./src/observer/NBettingPlayer.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/observer/Player.ts");
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

var NBettingPlayer = /** @class */ (function (_super) {
    __extends(NBettingPlayer, _super);
    function NBettingPlayer(name, ns) {
        var _this = _super.call(this, name) || this;
        _this.ns = ns;
        return _this;
    }
    NBettingPlayer.prototype.update = function (diceNumber) {
        this._winning = this.ns.includes(diceNumber);
    };
    return NBettingPlayer;
}(_Player__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NBettingPlayer);


/***/ }),

/***/ "./src/observer/OddBettingPlayer.ts":
/*!******************************************!*\
  !*** ./src/observer/OddBettingPlayer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ "./src/observer/Player.ts");
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

var OddBettingPlayer = /** @class */ (function (_super) {
    __extends(OddBettingPlayer, _super);
    function OddBettingPlayer(name) {
        return _super.call(this, name) || this;
    }
    OddBettingPlayer.prototype.update = function (diceNumber) {
        this._winning = diceNumber % 2 === 1;
    };
    return OddBettingPlayer;
}(_Player__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OddBettingPlayer);


/***/ }),

/***/ "./src/observer/Player.ts":
/*!********************************!*\
  !*** ./src/observer/Player.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Player = /** @class */ (function () {
    function Player(_name) {
        this._name = _name;
        this._winning = false;
    }
    Object.defineProperty(Player.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "winning", {
        get: function () {
            return this._winning;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


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
  !*** ./src/observer/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EvenBettingPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EvenBettingPlayer */ "./src/observer/EvenBettingPlayer.ts");
/* harmony import */ var _FairDiceGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FairDiceGame */ "./src/observer/FairDiceGame.ts");
/* harmony import */ var _NBettingPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NBettingPlayer */ "./src/observer/NBettingPlayer.ts");
/* harmony import */ var _OddBettingPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OddBettingPlayer */ "./src/observer/OddBettingPlayer.ts");




/**
 * Observer 패턴은 객체 간의 일대다 종속성을 정의하여, 한 객체의 상태 변화가 있을 때 그 변화가 다른 종속 객체들에게 자동으로 통지되고 업데이트되도록 하는 디자인 패턴입니다. 주체(Subject)와 관찰자(Observer)로 구성되며, 주체는 상태 변화를 관리하고 관찰자는 주체의 상태 변화에 따라 행동을 업데이트합니다. 이를 통해 객체 간의 결합도를 낮추고, 동적인 상호작용을 가능하게 합니다.
 */
var diceGame = new _FairDiceGame__WEBPACK_IMPORTED_MODULE_1__["default"]();
var players = [
    new _EvenBettingPlayer__WEBPACK_IMPORTED_MODULE_0__["default"]("Kim"),
    new _OddBettingPlayer__WEBPACK_IMPORTED_MODULE_3__["default"]("Lee"),
    new _NBettingPlayer__WEBPACK_IMPORTED_MODULE_2__["default"]("Park", [2, 3, 4]),
];
players.forEach(function (player) { return diceGame.addPlayer(player); });
function updateBoard() {
    var domPlayers = document.querySelector(".players");
    domPlayers.innerHTML = "";
    players.forEach(function (player) {
        var domPlayer = document.createElement("div");
        domPlayer.innerText = player.name;
        if (player.winning)
            domPlayer.classList.add("win");
        domPlayers.append(domPlayer);
    });
}
updateBoard();
document.querySelector("button").addEventListener("click", function () {
    var diceNumber = diceGame.play();
    var domDice = document.querySelector(".dice");
    domDice.innerText = diceNumber.toString();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFO0FBQzVDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL29ic2VydmVyL0RpY2VHYW1lLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL29ic2VydmVyL0V2ZW5CZXR0aW5nUGxheWVyLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL29ic2VydmVyL0ZhaXJEaWNlR2FtZS50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9vYnNlcnZlci9OQmV0dGluZ1BsYXllci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi8uL3NyYy9vYnNlcnZlci9PZGRCZXR0aW5nUGxheWVyLnRzIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL29ic2VydmVyL1BsYXllci50cyIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJuLy4vc3JjL29ic2VydmVyL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIERpY2VHYW1le1xuICAgIHByb3RlY3RlZCBwbGF5ZXJzID0gbmV3IEFycmF5PFBsYXllcj4oKVxuICAgIFxuICAgIGFkZFBsYXllcihwbGF5ZXI6IFBsYXllcil7XG4gICAgICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllcilcbiAgICB9XG5cbiAgICBhYnN0cmFjdCBwbGF5KCk6IG51bWJlclxuXG59IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVuQmV0dGluZ1BsYXllciBleHRlbmRzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpXG4gICAgfVxuXG4gICAgdXBkYXRlKGRpY2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl93aW5uaW5nID0gZGljZU51bWJlciAlIDIgPT09IDBcbiAgICB9XG59IiwiaW1wb3J0IERpY2VHYW1lIGZyb20gXCIuL0RpY2VHYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZhaXJEaWNlR2FtZSBleHRlbmRzIERpY2VHYW1le1xuICAgIHBsYXkoKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgbiA9ICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSArIDE7XG4gICAgICAgIHRoaXMucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XG4gICAgICAgICAgICBwbGF5ZXIudXBkYXRlKG4pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBuXG4gICAgfVxuICAgIFxufSIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTkJldHRpbmdQbGF5ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcHJpdmF0ZSBuczpBcnJheTxudW1iZXI+KSB7XG4gICAgICAgIHN1cGVyKG5hbWUpXG4gICAgfVxuXG4gICAgdXBkYXRlKGRpY2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl93aW5uaW5nID0gdGhpcy5ucy5pbmNsdWRlcyhkaWNlTnVtYmVyKVxuICAgIH1cbn0iLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPZGRCZXR0aW5nUGxheWVyIGV4dGVuZHMgUGxheWVye1xuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZyl7XG4gICAgICAgIHN1cGVyKG5hbWUpXG4gICAgfVxuXG4gICAgdXBkYXRlKGRpY2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLl93aW5uaW5nID0gZGljZU51bWJlciAlIDIgPT09IDFcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgIFBsYXllciB7XG5cbiAgICBwcm90ZWN0ZWQgX3dpbm5pbmc6Ym9vbGVhbiA9IGZhbHNlXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uYW1lOiBzdHJpbmcpe31cbiAgICBcbiAgICBnZXQgbmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZVxuICAgIH1cblxuICAgIGdldCB3aW5uaW5nKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl93aW5uaW5nXG4gICAgfVxuXG4gICAgYWJzdHJhY3QgdXBkYXRlKGRpY2VOdW1iZXI6IG51bWJlcik6IHZvaWRcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBFdmVuQmV0dGluZ1BsYXllciBmcm9tIFwiLi9FdmVuQmV0dGluZ1BsYXllclwiO1xuaW1wb3J0IEZhaXJEaWNlR2FtZSBmcm9tIFwiLi9GYWlyRGljZUdhbWVcIjtcbmltcG9ydCBOQmV0dGluZ1BsYXllciBmcm9tIFwiLi9OQmV0dGluZ1BsYXllclwiO1xuaW1wb3J0IE9kZEJldHRpbmdQbGF5ZXIgZnJvbSBcIi4vT2RkQmV0dGluZ1BsYXllclwiO1xuXG4vKipcbiAqIE9ic2VydmVyIO2MqO2EtOydgCDqsJ3ssrQg6rCE7J2YIOydvOuMgOuLpCDsooXsho3shLHsnYQg7KCV7J2Y7ZWY7JesLCDtlZwg6rCd7LK07J2YIOyDge2DnCDrs4DtmZTqsIAg7J6I7J2EIOuVjCDqt7gg67OA7ZmU6rCAIOuLpOuluCDsooXsho0g6rCd7LK065Ok7JeQ6rKMIOyekOuPmeycvOuhnCDthrXsp4DrkJjqs6Ag7JeF642w7J207Yq465CY64+E66GdIO2VmOuKlCDrlJTsnpDsnbgg7Yyo7YS07J6F64uI64ukLiDso7zssrQoU3ViamVjdCnsmYAg6rSA7LCw7J6QKE9ic2VydmVyKeuhnCDqtazshLHrkJjrqbAsIOyjvOyytOuKlCDsg4Htg5wg67OA7ZmU66W8IOq0gOumrO2VmOqzoCDqtIDssLDsnpDripQg7KO87LK07J2YIOyDge2DnCDrs4DtmZTsl5Ag65Sw6528IO2WieuPmeydhCDsl4XrjbDsnbTtirjtlanri4jri6QuIOydtOulvCDthrXtlbQg6rCd7LK0IOqwhOydmCDqsrDtlanrj4Trpbwg64Ku7LaU6rOgLCDrj5nsoIHsnbgg7IOB7Zi47J6R7Jqp7J2EIOqwgOuKpe2VmOqyjCDtlanri4jri6QuIFxuICovXG5jb25zdCBkaWNlR2FtZSA9IG5ldyBGYWlyRGljZUdhbWUoKVxuY29uc3QgcGxheWVycyA9IFtcbiAgICBuZXcgRXZlbkJldHRpbmdQbGF5ZXIoXCJLaW1cIiksXG4gICAgbmV3IE9kZEJldHRpbmdQbGF5ZXIoXCJMZWVcIiksXG4gICAgbmV3IE5CZXR0aW5nUGxheWVyKFwiUGFya1wiLCBbMiwzLDRdKSxcbl1cblxucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiBkaWNlR2FtZS5hZGRQbGF5ZXIocGxheWVyKSlcblxuZnVuY3Rpb24gdXBkYXRlQm9hcmQoKSB7XG4gICAgY29uc3QgZG9tUGxheWVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyc1wiKVxuICAgIGRvbVBsYXllcnMuaW5uZXJIVE1MID0gXCJcIlxuXG4gICAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICAgICAgY29uc3QgZG9tUGxheWVyID0gZG9jdW1lbnQuIGNyZWF0ZUVsZW1lbnQgKFwiZGl2XCIpXG4gICAgICAgIGRvbVBsYXllci4gaW5uZXJUZXh0ID0gcGxheWVyLm5hbWVcbiAgICAgICAgaWYocGxheWVyLndpbm5pbmcpIGRvbVBsYXllci5jbGFzc0xpc3QuYWRkKFwid2luXCIpXG4gICAgICAgIGRvbVBsYXllcnMuYXBwZW5kKGRvbVBsYXllcilcbiAgICB9KVxufVxuXG51cGRhdGVCb2FyZCgpXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBkaWNlTnVtYmVyID0gZGljZUdhbWUucGxheSgpXG4gICAgY29uc3QgZG9tRGljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGljZVwiKSBhcyBIVE1MRWxlbWVudFxuICAgIGRvbURpY2UuaW5uZXJUZXh0ID1kaWNlTnVtYmVyLnRvU3RyaW5nKClcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9