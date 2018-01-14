/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var P = __webpack_require__(1);

var p1 = new P.A("Ana", "Blue");
var p2 = new P.B("Ricardo", "Red");

p1.print();
p2.print();

p2.cry();

// Basic literal string creation
var x = "This is a pretty little template string.";

// Multiline strings
var y = "In ES5 this is\n not legal.";

// Interpolate variable bindings
var name = "Bob",
    time = "today";
console.log("Hello " + name + ", how are you " + time + "?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(name, color) {
        _classCallCheck(this, Person);

        this.name = name;
        this.color = color;
    }

    _createClass(Person, [{
        key: "print",
        value: function print() {
            console.log("Hi there my name is " + this.name + " and my fav color is " + this.color);
        }
    }]);

    return Person;
}();

var Baby = function (_Person) {
    _inherits(Baby, _Person);

    function Baby() {
        _classCallCheck(this, Baby);

        return _possibleConstructorReturn(this, (Baby.__proto__ || Object.getPrototypeOf(Baby)).apply(this, arguments));
    }

    _createClass(Baby, [{
        key: "cry",
        value: function cry() {
            console.log(this.name + " is crying like a baby");
        }
    }]);

    return Baby;
}(Person);

var Adult = function (_Person2) {
    _inherits(Adult, _Person2);

    function Adult() {
        _classCallCheck(this, Adult);

        return _possibleConstructorReturn(this, (Adult.__proto__ || Object.getPrototypeOf(Adult)).apply(this, arguments));
    }

    _createClass(Adult, [{
        key: "payTaxes",
        value: function payTaxes() {
            console.log("I am paying my taxes like all adults should do");
        }
    }]);

    return Adult;
}(Person);

var P = {
    B: Baby,
    A: Adult
};

module.exports = P;

/***/ })
/******/ ]);