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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/sanitize.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/sanitize.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* Document\n * ========================================================================== */\n\n/**\n * Add border box sizing in all browsers (opinionated).\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\n   * 1. Add text decoration inheritance in all browsers (opinionated).\n   * 2. Add vertical alignment inheritance in all browsers (opinionated).\n   */\n\n::before,\n::after {\n  text-decoration: inherit; /* 1 */\n  vertical-align: inherit; /* 2 */\n}\n\n/**\n   * 1. Use the default cursor in all browsers (opinionated).\n   * 2. Change the line height in all browsers (opinionated).\n   * 3. Use a 4-space tab width in all browsers (opinionated).\n   * 4. Remove the grey highlight on links in iOS (opinionated).\n   * 5. Prevent adjustments of font size after orientation changes in\n   *    IE on Windows Phone and in iOS.\n   * 6. Breaks words to prevent overflow in all browsers (opinionated).\n   */\n\nhtml {\n  cursor: default; /* 1 */\n  line-height: 1.5; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  -webkit-tap-highlight-color: transparent /* 4 */;\n  -ms-text-size-adjust: 100%; /* 5 */\n  -webkit-text-size-adjust: 100%; /* 5 */\n  word-break: break-word; /* 6 */\n}\n\n/* Sections\n   * ========================================================================== */\n\n/**\n   * Remove the margin in all browsers (opinionated).\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Edge, Firefox, and Safari.\n   */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   * ========================================================================== */\n\n/**\n   * Remove the margin on nested lists in Chrome, Edge, IE, and Safari.\n   */\n\ndl dl,\ndl ol,\ndl ul,\nol dl,\nul dl {\n  margin: 0;\n}\n\n/**\n   * Remove the margin on nested lists in Edge 18- and IE.\n   */\n\nol ol,\nol ul,\nul ol,\nul ul {\n  margin: 0;\n}\n\n/**\n   * 1. Correct the inheritance of border color in Firefox.\n   * 2. Add the correct box sizing in Firefox.\n   * 3. Show the overflow in Edge 18- and IE.\n   */\n\nhr {\n  color: inherit; /* 1 */\n  height: 0; /* 2 */\n  overflow: visible; /* 3 */\n}\n\n/**\n   * Add the correct display in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Remove the list style on navigation lists in all browsers (opinionated).\n   */\n\nnav ol,\nnav ul {\n  list-style: none;\n  padding: 0;\n}\n\n/**\n   * Prevent VoiceOver from ignoring list semantics in Safari (opinionated).\n   */\n\nnav li::before {\n  content: \"\\200B\";\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   * 3. Prevent overflow of the container in all browsers (opinionated).\n   */\n\npre {\n  font-family: monospace; /* 1 */\n  font-size: 1em; /* 2 */\n  overflow: auto; /* 3 */\n  -ms-overflow-style: scrollbar; /* 3 */\n}\n\n/* Text-level semantics\n   * ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * Add the correct text decoration in Edge 18-, IE, and Safari.\n   */\n\nabbr[title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/* Embedded content\n   * ========================================================================== */\n\n/*\n   * Change the alignment on media elements in all browsers (opinionated).\n   */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/**\n   * Add the correct display in IE 9-.\n   */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n   * Add the correct display in iOS 4-7.\n   */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n   * Remove the border on iframes in all browsers (opinionated).\n   */\n\niframe {\n  border-style: none;\n}\n\n/**\n   * Remove the border on images within links in IE 10-.\n   */\n\nimg {\n  border-style: none;\n}\n\n/**\n   * Change the fill color to match the text color in all browsers (opinionated).\n   */\n\nsvg:not([fill]) {\n  fill: currentColor;\n}\n\n/**\n   * Hide the overflow in IE.\n   */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Tabular data\n   * ========================================================================== */\n\n/**\n   * 1. Collapse border spacing in all browsers (opinionated).\n   * 2. Correct table border color inheritance in all Chrome, Edge, and Safari.\n   * 3. Remove text indentation from table contents in Chrome, Edge, and Safari.\n   */\n\ntable {\n  border-collapse: collapse; /* 1 */\n  border-color: inherit; /* 2 */\n  text-indent: 0; /* 3 */\n}\n\n/* Forms\n   * ========================================================================== */\n\n/**\n   * Remove the margin on controls in Safari.\n   */\n\nbutton,\ninput,\nselect {\n  margin: 0;\n}\n\n/**\n   * 1. Show the overflow in IE.\n   * 2. Remove the inheritance of text transform in Edge 18-, Firefox, and IE.\n   */\n\nbutton {\n  overflow: visible; /* 1 */\n  text-transform: none; /* 2 */\n}\n\n/**\n   * Correct the inability to style buttons in iOS and Safari.\n   */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n   * 1. Change the inconsistent appearance in all browsers (opinionated).\n   * 2. Correct the padding in Firefox.\n   */\n\nfieldset {\n  border: 1px solid #a0a0a0; /* 1 */\n  padding: 0.35em 0.75em 0.625em; /* 2 */\n}\n\n/**\n   * Show the overflow in Edge 18- and IE.\n   */\n\ninput {\n  overflow: visible;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge 18- and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   */\n\nlegend {\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * 1. Add the correct display in Edge 18- and IE.\n   * 2. Add the correct vertical alignment in Chrome, Edge, and Firefox.\n   */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n   * Remove the inheritance of text transform in Firefox.\n   */\n\nselect {\n  text-transform: none;\n}\n\n/**\n   * 1. Remove the margin in Firefox and Safari.\n   * 2. Remove the default vertical scrollbar in IE.\n   * 3. Change the resize direction in all browsers (opinionated).\n   */\n\ntextarea {\n  margin: 0; /* 1 */\n  overflow: auto; /* 2 */\n  resize: vertical; /* 3 */\n  resize: block; /* 3 */\n}\n\n/**\n   * Remove the padding in IE 10-.\n   */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  padding: 0;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome, Edge, and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Safari.\n   */\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * Correct the text style of placeholders in Chrome, Edge, and Safari.\n   */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n   * Remove the inner padding in Chrome, Edge, and Safari on macOS.\n   */\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style upload buttons in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/**\n   * Remove the inner border and padding of focus outlines in Firefox.\n   */\n\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n   * Restore the focus outline styles unset by the previous rule in Firefox.\n   */\n\n:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Remove the additional :invalid styles in Firefox.\n   */\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/* Interactive\n   * ========================================================================== */\n\n/*\n   * Add the correct display in Edge 18- and IE.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct styles in Edge 18-, IE, and Safari.\n   */\n\ndialog {\n  background-color: white;\n  border: solid;\n  color: black;\n  display: block;\n  height: -moz-fit-content;\n  height: -webkit-fit-content;\n  height: fit-content;\n  left: 0;\n  margin: auto;\n  padding: 1em;\n  position: absolute;\n  right: 0;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n}\n\ndialog:not([open]) {\n  display: none;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   * ========================================================================== */\n\n/**\n   * Add the correct display in IE 9-.\n   */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n   * Add the correct display in IE.\n   */\n\ntemplate {\n  display: none;\n}\n\n/* User interaction\n   * ========================================================================== */\n\n/*\n   * Remove the tapping delay in IE 10.\n   */\n\na,\narea,\nbutton,\ninput,\nlabel,\nselect,\nsummary,\ntextarea,\n[tabindex] {\n  -ms-touch-action: manipulation;\n}\n\n/**\n   * Add the correct display in IE 10-.\n   */\n\n[hidden] {\n  display: none;\n}\n\n/* Accessibility\n   * ========================================================================== */\n\n/**\n   * Change the cursor on busy elements in all browsers (opinionated).\n   */\n\n[aria-busy=\"true\"] {\n  cursor: progress;\n}\n\n/*\n   * Change the cursor on control elements in all browsers (opinionated).\n   */\n\n[aria-controls] {\n  cursor: pointer;\n}\n\n/*\n   * Change the cursor on disabled, not-editable, or otherwise\n   * inoperable elements in all browsers (opinionated).\n   */\n\n[aria-disabled=\"true\"],\n[disabled] {\n  cursor: not-allowed;\n}\n\n/*\n   * Change the display on visually hidden accessible elements\n   * in all browsers (opinionated).\n   */\n\n[aria-hidden=\"false\"][hidden] {\n  display: initial;\n}\n\n[aria-hidden=\"false\"][hidden]:not(:focus) {\n  clip: rect(0, 0, 0, 0);\n  position: absolute;\n}\n", "",{"version":3,"sources":["webpack://./src/assets/css/sanitize.css"],"names":[],"mappings":"AAAA;+EAC+E;;AAE/E;;EAEE;;AAEF;;;EAGE,sBAAsB;AACxB;;AAEA;;;IAGI;;AAEJ;;EAEE,wBAAwB,EAAE,MAAM;EAChC,uBAAuB,EAAE,MAAM;AACjC;;AAEA;;;;;;;;IAQI;;AAEJ;EACE,eAAe,EAAE,MAAM;EACvB,gBAAgB,EAAE,MAAM;EACxB,gBAAgB,EAAE,MAAM;EACxB,WAAW,EAAE,MAAM;EACnB,gDAAgD;EAChD,0BAA0B,EAAE,MAAM;EAClC,8BAA8B,EAAE,MAAM;EACtC,sBAAsB,EAAE,MAAM;AAChC;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,SAAS;AACX;;AAEA;;;IAGI;;AAEJ;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;;;;;EAKE,SAAS;AACX;;AAEA;;IAEI;;AAEJ;;;;EAIE,SAAS;AACX;;AAEA;;;;IAII;;AAEJ;EACE,cAAc,EAAE,MAAM;EACtB,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;IAEI;;AAEJ;;EAEE,gBAAgB;EAChB,UAAU;AACZ;;AAEA;;IAEI;;AAEJ;EACE,gBAAgB;AAClB;;AAEA;;;;IAII;;AAEJ;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,6BAA6B,EAAE,MAAM;AACvC;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,6BAA6B;AAC/B;;AAEA;;IAEI;;AAEJ;EACE,0BAA0B;EAC1B,iCAAiC;AACnC;;AAEA;;IAEI;;AAEJ;;EAEE,mBAAmB;AACrB;;AAEA;;;IAGI;;AAEJ;;;EAGE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;AACxB;;AAEA;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;;;;;;EAME,sBAAsB;AACxB;;AAEA;;IAEI;;AAEJ;;EAEE,qBAAqB;AACvB;;AAEA;;IAEI;;AAEJ;EACE,aAAa;EACb,SAAS;AACX;;AAEA;;IAEI;;AAEJ;EACE,kBAAkB;AACpB;;AAEA;;IAEI;;AAEJ;EACE,kBAAkB;AACpB;;AAEA;;IAEI;;AAEJ;EACE,kBAAkB;AACpB;;AAEA;;IAEI;;AAEJ;EACE,gBAAgB;AAClB;;AAEA;iFACiF;;AAEjF;;;;IAII;;AAEJ;EACE,yBAAyB,EAAE,MAAM;EACjC,qBAAqB,EAAE,MAAM;EAC7B,cAAc,EAAE,MAAM;AACxB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;;;EAGE,SAAS;AACX;;AAEA;;;IAGI;;AAEJ;EACE,iBAAiB,EAAE,MAAM;EACzB,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;IAEI;;AAEJ;;;;EAIE,0BAA0B;AAC5B;;AAEA;;;IAGI;;AAEJ;EACE,yBAAyB,EAAE,MAAM;EACjC,8BAA8B,EAAE,MAAM;AACxC;;AAEA;;IAEI;;AAEJ;EACE,iBAAiB;AACnB;;AAEA;;;IAGI;;AAEJ;EACE,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;;IAGI;;AAEJ;EACE,qBAAqB,EAAE,MAAM;EAC7B,wBAAwB,EAAE,MAAM;AAClC;;AAEA;;IAEI;;AAEJ;EACE,oBAAoB;AACtB;;AAEA;;;;IAII;;AAEJ;EACE,SAAS,EAAE,MAAM;EACjB,cAAc,EAAE,MAAM;EACtB,gBAAgB,EAAE,MAAM;EACxB,aAAa,EAAE,MAAM;AACvB;;AAEA;;IAEI;;AAEJ;;EAEE,UAAU;AACZ;;AAEA;;;IAGI;;AAEJ;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;IAEI;;AAEJ;;EAEE,YAAY;AACd;;AAEA;;IAEI;;AAEJ;EACE,cAAc;EACd,aAAa;AACf;;AAEA;;IAEI;;AAEJ;EACE,wBAAwB;AAC1B;;AAEA;;;IAGI;;AAEJ;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;;IAEI;;AAEJ;EACE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;IAEI;;AAEJ;EACE,8BAA8B;AAChC;;AAEA;;IAEI;;AAEJ;EACE,gBAAgB;AAClB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;IAEI;;AAEJ;EACE,uBAAuB;EACvB,aAAa;EACb,YAAY;EACZ,cAAc;EACd,wBAAwB;EACxB,2BAA2B;EAC3B,mBAAmB;EACnB,OAAO;EACP,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,uBAAuB;EACvB,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;;IAEI;;AAEJ;EACE,kBAAkB;AACpB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,qBAAqB;AACvB;;AAEA;;IAEI;;AAEJ;EACE,aAAa;AACf;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;;;;;;;;;EASE,8BAA8B;AAChC;;AAEA;;IAEI;;AAEJ;EACE,aAAa;AACf;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,gBAAgB;AAClB;;AAEA;;IAEI;;AAEJ;EACE,eAAe;AACjB;;AAEA;;;IAGI;;AAEJ;;EAEE,mBAAmB;AACrB;;AAEA;;;IAGI;;AAEJ;EACE,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;AACpB","sourcesContent":["/* Document\n * ========================================================================== */\n\n/**\n * Add border box sizing in all browsers (opinionated).\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\n   * 1. Add text decoration inheritance in all browsers (opinionated).\n   * 2. Add vertical alignment inheritance in all browsers (opinionated).\n   */\n\n::before,\n::after {\n  text-decoration: inherit; /* 1 */\n  vertical-align: inherit; /* 2 */\n}\n\n/**\n   * 1. Use the default cursor in all browsers (opinionated).\n   * 2. Change the line height in all browsers (opinionated).\n   * 3. Use a 4-space tab width in all browsers (opinionated).\n   * 4. Remove the grey highlight on links in iOS (opinionated).\n   * 5. Prevent adjustments of font size after orientation changes in\n   *    IE on Windows Phone and in iOS.\n   * 6. Breaks words to prevent overflow in all browsers (opinionated).\n   */\n\nhtml {\n  cursor: default; /* 1 */\n  line-height: 1.5; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  -webkit-tap-highlight-color: transparent /* 4 */;\n  -ms-text-size-adjust: 100%; /* 5 */\n  -webkit-text-size-adjust: 100%; /* 5 */\n  word-break: break-word; /* 6 */\n}\n\n/* Sections\n   * ========================================================================== */\n\n/**\n   * Remove the margin in all browsers (opinionated).\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Edge, Firefox, and Safari.\n   */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   * ========================================================================== */\n\n/**\n   * Remove the margin on nested lists in Chrome, Edge, IE, and Safari.\n   */\n\ndl dl,\ndl ol,\ndl ul,\nol dl,\nul dl {\n  margin: 0;\n}\n\n/**\n   * Remove the margin on nested lists in Edge 18- and IE.\n   */\n\nol ol,\nol ul,\nul ol,\nul ul {\n  margin: 0;\n}\n\n/**\n   * 1. Correct the inheritance of border color in Firefox.\n   * 2. Add the correct box sizing in Firefox.\n   * 3. Show the overflow in Edge 18- and IE.\n   */\n\nhr {\n  color: inherit; /* 1 */\n  height: 0; /* 2 */\n  overflow: visible; /* 3 */\n}\n\n/**\n   * Add the correct display in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Remove the list style on navigation lists in all browsers (opinionated).\n   */\n\nnav ol,\nnav ul {\n  list-style: none;\n  padding: 0;\n}\n\n/**\n   * Prevent VoiceOver from ignoring list semantics in Safari (opinionated).\n   */\n\nnav li::before {\n  content: \"\\200B\";\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   * 3. Prevent overflow of the container in all browsers (opinionated).\n   */\n\npre {\n  font-family: monospace; /* 1 */\n  font-size: 1em; /* 2 */\n  overflow: auto; /* 3 */\n  -ms-overflow-style: scrollbar; /* 3 */\n}\n\n/* Text-level semantics\n   * ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * Add the correct text decoration in Edge 18-, IE, and Safari.\n   */\n\nabbr[title] {\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/* Embedded content\n   * ========================================================================== */\n\n/*\n   * Change the alignment on media elements in all browsers (opinionated).\n   */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/**\n   * Add the correct display in IE 9-.\n   */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n   * Add the correct display in iOS 4-7.\n   */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n   * Remove the border on iframes in all browsers (opinionated).\n   */\n\niframe {\n  border-style: none;\n}\n\n/**\n   * Remove the border on images within links in IE 10-.\n   */\n\nimg {\n  border-style: none;\n}\n\n/**\n   * Change the fill color to match the text color in all browsers (opinionated).\n   */\n\nsvg:not([fill]) {\n  fill: currentColor;\n}\n\n/**\n   * Hide the overflow in IE.\n   */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Tabular data\n   * ========================================================================== */\n\n/**\n   * 1. Collapse border spacing in all browsers (opinionated).\n   * 2. Correct table border color inheritance in all Chrome, Edge, and Safari.\n   * 3. Remove text indentation from table contents in Chrome, Edge, and Safari.\n   */\n\ntable {\n  border-collapse: collapse; /* 1 */\n  border-color: inherit; /* 2 */\n  text-indent: 0; /* 3 */\n}\n\n/* Forms\n   * ========================================================================== */\n\n/**\n   * Remove the margin on controls in Safari.\n   */\n\nbutton,\ninput,\nselect {\n  margin: 0;\n}\n\n/**\n   * 1. Show the overflow in IE.\n   * 2. Remove the inheritance of text transform in Edge 18-, Firefox, and IE.\n   */\n\nbutton {\n  overflow: visible; /* 1 */\n  text-transform: none; /* 2 */\n}\n\n/**\n   * Correct the inability to style buttons in iOS and Safari.\n   */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n   * 1. Change the inconsistent appearance in all browsers (opinionated).\n   * 2. Correct the padding in Firefox.\n   */\n\nfieldset {\n  border: 1px solid #a0a0a0; /* 1 */\n  padding: 0.35em 0.75em 0.625em; /* 2 */\n}\n\n/**\n   * Show the overflow in Edge 18- and IE.\n   */\n\ninput {\n  overflow: visible;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge 18- and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   */\n\nlegend {\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * 1. Add the correct display in Edge 18- and IE.\n   * 2. Add the correct vertical alignment in Chrome, Edge, and Firefox.\n   */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n   * Remove the inheritance of text transform in Firefox.\n   */\n\nselect {\n  text-transform: none;\n}\n\n/**\n   * 1. Remove the margin in Firefox and Safari.\n   * 2. Remove the default vertical scrollbar in IE.\n   * 3. Change the resize direction in all browsers (opinionated).\n   */\n\ntextarea {\n  margin: 0; /* 1 */\n  overflow: auto; /* 2 */\n  resize: vertical; /* 3 */\n  resize: block; /* 3 */\n}\n\n/**\n   * Remove the padding in IE 10-.\n   */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  padding: 0;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome, Edge, and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Safari.\n   */\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * Correct the text style of placeholders in Chrome, Edge, and Safari.\n   */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n   * Remove the inner padding in Chrome, Edge, and Safari on macOS.\n   */\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style upload buttons in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/**\n   * Remove the inner border and padding of focus outlines in Firefox.\n   */\n\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n   * Restore the focus outline styles unset by the previous rule in Firefox.\n   */\n\n:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Remove the additional :invalid styles in Firefox.\n   */\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/* Interactive\n   * ========================================================================== */\n\n/*\n   * Add the correct display in Edge 18- and IE.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct styles in Edge 18-, IE, and Safari.\n   */\n\ndialog {\n  background-color: white;\n  border: solid;\n  color: black;\n  display: block;\n  height: -moz-fit-content;\n  height: -webkit-fit-content;\n  height: fit-content;\n  left: 0;\n  margin: auto;\n  padding: 1em;\n  position: absolute;\n  right: 0;\n  width: -moz-fit-content;\n  width: -webkit-fit-content;\n  width: fit-content;\n}\n\ndialog:not([open]) {\n  display: none;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   * ========================================================================== */\n\n/**\n   * Add the correct display in IE 9-.\n   */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n   * Add the correct display in IE.\n   */\n\ntemplate {\n  display: none;\n}\n\n/* User interaction\n   * ========================================================================== */\n\n/*\n   * Remove the tapping delay in IE 10.\n   */\n\na,\narea,\nbutton,\ninput,\nlabel,\nselect,\nsummary,\ntextarea,\n[tabindex] {\n  -ms-touch-action: manipulation;\n}\n\n/**\n   * Add the correct display in IE 10-.\n   */\n\n[hidden] {\n  display: none;\n}\n\n/* Accessibility\n   * ========================================================================== */\n\n/**\n   * Change the cursor on busy elements in all browsers (opinionated).\n   */\n\n[aria-busy=\"true\"] {\n  cursor: progress;\n}\n\n/*\n   * Change the cursor on control elements in all browsers (opinionated).\n   */\n\n[aria-controls] {\n  cursor: pointer;\n}\n\n/*\n   * Change the cursor on disabled, not-editable, or otherwise\n   * inoperable elements in all browsers (opinionated).\n   */\n\n[aria-disabled=\"true\"],\n[disabled] {\n  cursor: not-allowed;\n}\n\n/*\n   * Change the display on visually hidden accessible elements\n   * in all browsers (opinionated).\n   */\n\n[aria-hidden=\"false\"][hidden] {\n  display: initial;\n}\n\n[aria-hidden=\"false\"][hidden]:not(:focus) {\n  clip: rect(0, 0, 0, 0);\n  position: absolute;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg_github_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg/github.svg */ "./src/assets/svg/github.svg");
/* harmony import */ var _svg_github_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_svg_github_svg__WEBPACK_IMPORTED_MODULE_3__);
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_svg_github_svg__WEBPACK_IMPORTED_MODULE_3___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --main-border-color: #ccc;\n  --background-color: #1c1c1c;\n  --secondary-color: #abebd2;\n  --secondary-text-color: #136f63;\n  --text-color: #ccc;\n}\n\nhtml,\nbody {\n  background-color: var(--background-color);\n  color: var(--text-color);\n  margin: 0;\n  padding: 0;\n  font-family: \"DotGothic16\", sans-serif;\n}\n\na {\n  color: #8a8aff;\n}\n.header,\n.footer {\n  text-align: center;\n}\n\n.header {\n  margin: 0.67em 0;\n}\n\n.header__title {\n  margin: 0;\n}\n\n.main {\n  margin-bottom: 1rem;\n}\n\n.calculator {\n  margin: 0 auto;\n  max-width: 80%;\n  height: 77vh;\n}\n\n.calculator--border {\n  border: 1px solid var(--main-border-color);\n}\n\n.calculator__screen {\n  max-width: 90%;\n  height: 18%;\n  margin: 1.6rem auto;\n  background-color: var(--secondary-color);\n  color: var(--secondary-text-color);\n  font-size: 2.1em;\n  letter-spacing: 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.calculator__keys-area {\n  max-width: 90%;\n  height: 70%;\n  margin: 1.6rem auto;\n  display: grid;\n  grid-template-columns: 69% auto;\n}\n\n.calculator__number-keys {\n  display: grid;\n  grid-template-columns: auto auto auto;\n}\n\n.calculator__mysterious-key {\n  text-decoration: none;\n  color: inherit;\n  font-size: 1.4em;\n}\n\n.calculator__key {\n  cursor: pointer;\n  text-align: center;\n  line-height: 11vh;\n  border: 1px solid black;\n}\n\n.calculator__key:hover {\n  color: #00ffe7;\n}\n\n.calculator__key:active {\n  color: #00ffe7;\n  font-size: 0.9em;\n  background-color: #313131;\n  width: 90%;\n  height: 90%;\n  text-align: center;\n  margin: auto auto;\n}\n\n.calculator__key--pressed {\n  color: #00ffe7;\n  font-size: 0.9em;\n  background-color: #313131;\n  width: 90%;\n  height: 90%;\n  text-align: center;\n  margin: auto auto;\n}\n\n.calculator__operator-keys {\n  display: grid;\n  grid-template-columns: auto auto;\n}\n\n.keyboard-shortcuts {\n  text-align: center;\n  max-width: 80%;\n  line-height: 25px;\n  margin: 0 auto;\n}\n\n.keyboard-shortcuts__header {\n  margin-bottom: 5%;\n  border: 1px solid white;\n  padding: 0.3rem;\n}\n\n.keyboard-shortcuts__instructions {\n  background-color: aliceblue;\n  border-radius: 10px;\n  padding: 0.1rem;\n  color: #313131;\n  text-align: left;\n}\n\n.keyboard-shortcuts__instructions ul {\n  list-style-type: circle;\n}\n\n.footer {\n  background-image: linear-gradient(rgb(28, 28, 28), #136f63);\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  height: 2.9rem;\n  margin-top: 2rem;\n}\n\n.view-code-btn {\n  display: flex;\n  background-image: -webkit-linear-gradient(\n    -70deg,\n    rgb(219, 70, 159),\n    rgb(33, 136, 255)\n  );\n  border-radius: 10px;\n  width: 11rem;\n  text-decoration: none;\n  color: white;\n  justify-content: space-evenly;\n  align-items: center;\n  padding-bottom: 10px;\n  margin: 1.1rem auto 0;\n}\n\n.view-code-btn:active {\n  width: 10rem;\n  height: 5.9rem;\n  filter: brightness(1.2);\n}\n\n.view-code-btn__icon {\n  display: block;\n  align-self: center;\n  width: 4rem;\n  height: 4rem;\n  padding: 0;\n  margin-top: 1.18rem;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center;\n}\n\n.view-code-btn__label {\n  font-size: 1.2em;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n@media (min-width: 900px) {\n  .app-wrapper {\n    display: grid;\n    grid-template-columns: 33% 33% auto;\n  }\n\n  .main {\n    grid-column-start: 2;\n  }\n\n  .calculator {\n    width: 33rem;\n  }\n\n  .footer {\n    position: absolute;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,2BAA2B;EAC3B,0BAA0B;EAC1B,+BAA+B;EAC/B,kBAAkB;AACpB;;AAEA;;EAEE,yCAAyC;EACzC,wBAAwB;EACxB,SAAS;EACT,UAAU;EACV,sCAAsC;AACxC;;AAEA;EACE,cAAc;AAChB;AACA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,cAAc;EACd,YAAY;AACd;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,cAAc;EACd,WAAW;EACX,mBAAmB;EACnB,wCAAwC;EACxC,kCAAkC;EAClC,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,qCAAqC;AACvC;;AAEA;EACE,qBAAqB;EACrB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,yBAAyB;EACzB,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,yBAAyB;EACzB,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,eAAe;AACjB;;AAEA;EACE,2BAA2B;EAC3B,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,2DAA2D;EAC3D,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb;;;;GAIC;EACD,mBAAmB;EACnB,YAAY;EACZ,qBAAqB;EACrB,YAAY;EACZ,6BAA6B;EAC7B,mBAAmB;EACnB,oBAAoB;EACpB,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,UAAU;EACV,mBAAmB;EACnB,oEAAmD;AACrD;;AAEA;EACE,gBAAgB;EAChB,4DAA4D;AAC9D;;AAEA;EACE;IACE,aAAa;IACb,mCAAmC;EACrC;;EAEA;IACE,oBAAoB;EACtB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,kBAAkB;EACpB;AACF","sourcesContent":[":root {\n  --main-border-color: #ccc;\n  --background-color: #1c1c1c;\n  --secondary-color: #abebd2;\n  --secondary-text-color: #136f63;\n  --text-color: #ccc;\n}\n\nhtml,\nbody {\n  background-color: var(--background-color);\n  color: var(--text-color);\n  margin: 0;\n  padding: 0;\n  font-family: \"DotGothic16\", sans-serif;\n}\n\na {\n  color: #8a8aff;\n}\n.header,\n.footer {\n  text-align: center;\n}\n\n.header {\n  margin: 0.67em 0;\n}\n\n.header__title {\n  margin: 0;\n}\n\n.main {\n  margin-bottom: 1rem;\n}\n\n.calculator {\n  margin: 0 auto;\n  max-width: 80%;\n  height: 77vh;\n}\n\n.calculator--border {\n  border: 1px solid var(--main-border-color);\n}\n\n.calculator__screen {\n  max-width: 90%;\n  height: 18%;\n  margin: 1.6rem auto;\n  background-color: var(--secondary-color);\n  color: var(--secondary-text-color);\n  font-size: 2.1em;\n  letter-spacing: 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.calculator__keys-area {\n  max-width: 90%;\n  height: 70%;\n  margin: 1.6rem auto;\n  display: grid;\n  grid-template-columns: 69% auto;\n}\n\n.calculator__number-keys {\n  display: grid;\n  grid-template-columns: auto auto auto;\n}\n\n.calculator__mysterious-key {\n  text-decoration: none;\n  color: inherit;\n  font-size: 1.4em;\n}\n\n.calculator__key {\n  cursor: pointer;\n  text-align: center;\n  line-height: 11vh;\n  border: 1px solid black;\n}\n\n.calculator__key:hover {\n  color: #00ffe7;\n}\n\n.calculator__key:active {\n  color: #00ffe7;\n  font-size: 0.9em;\n  background-color: #313131;\n  width: 90%;\n  height: 90%;\n  text-align: center;\n  margin: auto auto;\n}\n\n.calculator__key--pressed {\n  color: #00ffe7;\n  font-size: 0.9em;\n  background-color: #313131;\n  width: 90%;\n  height: 90%;\n  text-align: center;\n  margin: auto auto;\n}\n\n.calculator__operator-keys {\n  display: grid;\n  grid-template-columns: auto auto;\n}\n\n.keyboard-shortcuts {\n  text-align: center;\n  max-width: 80%;\n  line-height: 25px;\n  margin: 0 auto;\n}\n\n.keyboard-shortcuts__header {\n  margin-bottom: 5%;\n  border: 1px solid white;\n  padding: 0.3rem;\n}\n\n.keyboard-shortcuts__instructions {\n  background-color: aliceblue;\n  border-radius: 10px;\n  padding: 0.1rem;\n  color: #313131;\n  text-align: left;\n}\n\n.keyboard-shortcuts__instructions ul {\n  list-style-type: circle;\n}\n\n.footer {\n  background-image: linear-gradient(rgb(28, 28, 28), #136f63);\n  position: relative;\n  bottom: 0;\n  width: 100%;\n  height: 2.9rem;\n  margin-top: 2rem;\n}\n\n.view-code-btn {\n  display: flex;\n  background-image: -webkit-linear-gradient(\n    -70deg,\n    rgb(219, 70, 159),\n    rgb(33, 136, 255)\n  );\n  border-radius: 10px;\n  width: 11rem;\n  text-decoration: none;\n  color: white;\n  justify-content: space-evenly;\n  align-items: center;\n  padding-bottom: 10px;\n  margin: 1.1rem auto 0;\n}\n\n.view-code-btn:active {\n  width: 10rem;\n  height: 5.9rem;\n  filter: brightness(1.2);\n}\n\n.view-code-btn__icon {\n  display: block;\n  align-self: center;\n  width: 4rem;\n  height: 4rem;\n  padding: 0;\n  margin-top: 1.18rem;\n  background: url(../svg/github.svg) no-repeat center;\n}\n\n.view-code-btn__label {\n  font-size: 1.2em;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n@media (min-width: 900px) {\n  .app-wrapper {\n    display: grid;\n    grid-template-columns: 33% 33% auto;\n  }\n\n  .main {\n    grid-column-start: 2;\n  }\n\n  .calculator {\n    width: 33rem;\n  }\n\n  .footer {\n    position: absolute;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/css/sanitize.css":
/*!*************************************!*\
  !*** ./src/assets/css/sanitize.css ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sanitize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./sanitize.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/sanitize.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sanitize_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_sanitize_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/assets/svg/github.svg":
/*!***********************************!*\
  !*** ./src/assets/svg/github.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3csvg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eGitHub icon%3c/title%3e%3cpath d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3e%3c/svg%3e"

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_sanitize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/sanitize.css */ "./src/assets/css/sanitize.css");
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _modules_uiGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/uiGenerator */ "./src/modules/uiGenerator.js");



Object(_modules_uiGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])();

/***/ }),

/***/ "./src/modules/calc-error-msg-model.js":
/*!*********************************************!*\
  !*** ./src/modules/calc-error-msg-model.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const errorMsg = {
  emptyEqualOrDelete: ["I'm empty </br> inside :')"],
  divisionByZero: ['Impossible </br> X.X!'],
  default: ['Error, </br> sorry :(']
};
/* harmony default export */ __webpack_exports__["default"] = (errorMsg);

/***/ }),

/***/ "./src/modules/calc-keys-controller.js":
/*!*********************************************!*\
  !*** ./src/modules/calc-keys-controller.js ***!
  \*********************************************/
/*! exports provided: typeKey, getDisplayValue, determineIfKeyIsSupportedByKeyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeKey", function() { return typeKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayValue", function() { return getDisplayValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determineIfKeyIsSupportedByKeyboard", function() { return determineIfKeyIsSupportedByKeyboard; });
/* harmony import */ var _calc_operate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc-operate */ "./src/modules/calc-operate.js");
/* harmony import */ var _calc_keys_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc-keys-model */ "./src/modules/calc-keys-model.js");
/* harmony import */ var _calc_error_msg_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calc-error-msg-model */ "./src/modules/calc-error-msg-model.js");
/* harmony import */ var _isEmpty_snippet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isEmpty-snippet */ "./src/modules/isEmpty-snippet.js");



 // TODO need to separate logic handler and display UI in future enhancement

let display = [];

function getDisplayValue() {
  return display.length !== 0 ? display.join('') : display;
}

let operationResult;
let previousTerm;
let previousOperationResult = 0;
let previousActionWasAnOperation = false;
let storedOperator;
let consecutiveStoredOperator;
let isActionOnDisplayAlreadyMade;
let isReadyForOperation;
let shouldAnErrorMsgDisplay;
const calculatorScreen = document.querySelector('.calculator__screen');

function updateScreen() {
  calculatorScreen.innerHTML = getDisplayValue();
}

function cleanScreen() {
  if (!shouldAnErrorMsgDisplay) {
    display = [];
  }

  operationResult = [];
  previousTerm = undefined;
  storedOperator = undefined;
  consecutiveStoredOperator = undefined;
  previousActionWasAnOperation = false;
  isReadyForOperation = false;
}

function displayErrorMsg(errorMsgProp) {
  shouldAnErrorMsgDisplay = true;
  display = errorMsgProp;
  cleanScreen();
}

const possibleCalculatorActions = {
  cleanDisplayIfPreviousActionWasOperation(keyValue) {
    if (previousActionWasAnOperation && !isReadyForOperation && keyValue !== '=') {
      display = [];
      operationResult = [];
      previousActionWasAnOperation = false;
    }
  },

  isSpecialKeyActions(keyValue, specificClass) {
    function isDisplayEmpty() {
      return display.length === 0;
    }

    if (specificClass === _calc_keys_model__WEBPACK_IMPORTED_MODULE_1__["keyClasses"].calculatorSpecialKey && !isActionOnDisplayAlreadyMade) {
      switch (keyValue) {
        case 'AC':
          cleanScreen();
          break;

        case 'DEL':
          if (!isDisplayEmpty()) {
            display.pop();
          } else if (!Object(_isEmpty_snippet__WEBPACK_IMPORTED_MODULE_3__["default"])(previousTerm)) {
            return; // * continue if the user has stored something on the previous term
          } else {
            displayErrorMsg(_calc_error_msg_model__WEBPACK_IMPORTED_MODULE_2__["default"].emptyEqualOrDelete);
          }

          break;

        case 'ANS':
          display.push('Ans');
          break;

        case '=':
          if (isDisplayEmpty()) {
            if (!Object(_isEmpty_snippet__WEBPACK_IMPORTED_MODULE_3__["default"])(storedOperator)) {
              displayErrorMsg(_calc_error_msg_model__WEBPACK_IMPORTED_MODULE_2__["default"].default);
            } else {
              displayErrorMsg(_calc_error_msg_model__WEBPACK_IMPORTED_MODULE_2__["default"].emptyEqualOrDelete);
            }
          } else if (Object(_isEmpty_snippet__WEBPACK_IMPORTED_MODULE_3__["default"])(storedOperator)) {
            return; // * Return the value on display
          } else {
            isReadyForOperation = true;
          }

          break;
        // * Best scenario

        case '?':
          return;

        default:
          break;
      }

      isActionOnDisplayAlreadyMade = true;
    }
  },

  isNumberKeyActions(keyValue, specificClass) {
    if (specificClass === _calc_keys_model__WEBPACK_IMPORTED_MODULE_1__["keyClasses"].calculatorNumberKey && !isActionOnDisplayAlreadyMade) {
      display.push(keyValue);
      isActionOnDisplayAlreadyMade = true;
    }
  },

  operationsIfValidToDoOperations(keyValue) {
    function evaluateIfTermIsZero(term) {
      const termSummation = term.reduce((total, number) => total + +number, 0);
      return termSummation === 0;
    }

    if (storedOperator !== undefined && isReadyForOperation && !previousActionWasAnOperation) {
      if (evaluateIfTermIsZero(previousTerm) && evaluateIfTermIsZero(previousTerm) && storedOperator === '/') {
        displayErrorMsg(_calc_error_msg_model__WEBPACK_IMPORTED_MODULE_2__["default"].divisionByZero);
      } else {
        operationResult = Object(_calc_operate__WEBPACK_IMPORTED_MODULE_0__["default"])(previousTerm, display, storedOperator, previousOperationResult);

        if (Number.isNaN(operationResult) || operationResult === Infinity) {
          displayErrorMsg(_calc_error_msg_model__WEBPACK_IMPORTED_MODULE_2__["default"].default);
        } else {
          display = [operationResult];
        }
      }

      previousOperationResult = operationResult;
      previousActionWasAnOperation = true;

      if (keyValue === '=') {
        storedOperator = undefined;
        previousTerm = undefined;
      } else {
        previousTerm = [operationResult];
      }

      if (consecutiveStoredOperator !== undefined && storedOperator !== undefined) {
        storedOperator = consecutiveStoredOperator;
      }

      isReadyForOperation = false;
      isActionOnDisplayAlreadyMade = true;
    }
  },

  saveOperatorValue(keyValue, specificClass) {
    if (!isActionOnDisplayAlreadyMade && specificClass === _calc_keys_model__WEBPACK_IMPORTED_MODULE_1__["keyClasses"].calculatorOperatorKey) {
      if (storedOperator !== undefined) {
        consecutiveStoredOperator = keyValue;
      } else {
        storedOperator = keyValue;
      }

      if (previousTerm !== undefined) {
        isReadyForOperation = true;
      } else {
        previousTerm = display;
        display = [];
      }

      isActionOnDisplayAlreadyMade = true;
    }
  }

};

const determineActionOnDisplay = (keyValue, specificClass) => {
  if (keyValue !== '?') {
    isActionOnDisplayAlreadyMade = false;

    if (shouldAnErrorMsgDisplay) {
      display = [];
      updateScreen();
      shouldAnErrorMsgDisplay = false;
    }

    possibleCalculatorActions.saveOperatorValue(keyValue, specificClass);
    possibleCalculatorActions.cleanDisplayIfPreviousActionWasOperation(keyValue);
    possibleCalculatorActions.isSpecialKeyActions(keyValue, specificClass);
    possibleCalculatorActions.isNumberKeyActions(keyValue, specificClass);
    possibleCalculatorActions.operationsIfValidToDoOperations(keyValue);
    updateScreen();
  }
};

function determineIfKeyIsSupportedByKeyboard(key, isButtonReleased) {
  function setAltKey(keyValue) {
    switch (keyValue) {
      case 'Backspace':
        return 'DEL';

      case 'Escape':
        return 'AC';

      case 'Enter':
        return '=';

      default:
        return keyValue;
    }
  }

  if (key !== undefined) {
    let keyValue = key;
    let specificClass;
    keyValue = setAltKey(keyValue);

    if (_calc_keys_model__WEBPACK_IMPORTED_MODULE_1__["keyDataSets"].numberKeysDataSet.some(number => keyValue === number.toString())) {
      specificClass = _calc_keys_model__WEBPACK_IMPORTED_MODULE_1__["keyClasses"].calculatorNumberKey;
    } else if (_calc_keys_model__WEBPACK_IMPORTED_MODULE_1__["keyDataSets"].operatorKeysDataSet.some(operator => keyValue === operator)) {
      specificClass = _calc_keys_model__WEBPACK_IMPORTED_MODULE_1__["keyClasses"].calculatorOperatorKey;

      if (_calc_keys_model__WEBPACK_IMPORTED_MODULE_1__["keyDataSets"].specialKeyDataSet.some(operator => keyValue === operator)) {
        specificClass = _calc_keys_model__WEBPACK_IMPORTED_MODULE_1__["keyClasses"].calculatorSpecialKey;
      }
    }

    if (specificClass !== undefined) {
      const calcKeys = Array.from(document.querySelectorAll('.calculator__key'));
      const keyToPress = calcKeys.find(calcKey => keyValue === calcKey.innerText);

      if (isButtonReleased) {
        keyToPress.classList.remove('calculator__key--pressed');
      } else {
        keyToPress.classList.add('calculator__key--pressed');
      }

      return {
        keyValue,
        specificClass
      };
    }
  }

  return false;
}

function typeKey(e) {
  let keyValue;
  let specificClass;
  const keyBoardValidValues = determineIfKeyIsSupportedByKeyboard(e.key, false);

  if (keyBoardValidValues) {
    keyValue = keyBoardValidValues.keyValue;
    specificClass = keyBoardValidValues.specificClass;
  } else {
    keyValue = e.srcElement.dataset.keyValue;
    specificClass = e.srcElement.classList[e.srcElement.classList.length - 1];
  }

  determineActionOnDisplay(keyValue, specificClass);
}



/***/ }),

/***/ "./src/modules/calc-keys-model.js":
/*!****************************************!*\
  !*** ./src/modules/calc-keys-model.js ***!
  \****************************************/
/*! exports provided: keyDataSets, keyClasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyDataSets", function() { return keyDataSets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyClasses", function() { return keyClasses; });
const keyDataSets = {
  numberKeysDataSet: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.', '?'],
  operatorKeysDataSet: ['DEL', 'AC', '+', '-', '*', '/', 'ANS', '='],
  specialKeyDataSet: ['DEL', 'AC', 'ANS', '=']
};
const keyClasses = {
  calculatorKey: 'calculator__key',
  calculatorNumberKey: 'calculator__number-key',
  calculatorOperatorKey: 'calculator__operator-key',
  calculatorSpecialKey: 'calculator__special-key'
};


/***/ }),

/***/ "./src/modules/calc-operate.js":
/*!*************************************!*\
  !*** ./src/modules/calc-operate.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function replaceAns(term, previousOperationResult) {
  const result = term.reduce((total, num) => {
    if (num === 'Ans') {
      const replacedAnsNum = previousOperationResult;

      if (total !== 0) {
        return total * replacedAnsNum;
      }

      return replacedAnsNum;
    }

    return total + num;
  }, 0);
  return result;
}

function roundResult(operationResult) {
  // * Found in:
  // * [https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary]
  return Math.round(operationResult * 100) / 100;
}

function operate(firstTerm, secondTerm, operator, previousOperationResult) {
  let operationResult;
  const firstTermClean = +replaceAns(firstTerm, previousOperationResult);
  const secondTermClean = +replaceAns(secondTerm, previousOperationResult);

  switch (operator) {
    case '+':
      operationResult = firstTermClean + secondTermClean;
      break;

    case '-':
      operationResult = firstTermClean - secondTermClean;
      break;

    case '*':
      operationResult = firstTermClean * secondTermClean;
      break;

    case '/':
      operationResult = firstTermClean / secondTermClean;
      break;

    default:
      operationResult = 'error, not valid operator';
  }

  operationResult = roundResult(operationResult);
  return operationResult;
}

/* harmony default export */ __webpack_exports__["default"] = (operate);

/***/ }),

/***/ "./src/modules/isEmpty-snippet.js":
/*!****************************************!*\
  !*** ./src/modules/isEmpty-snippet.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isEmpty; });
function isEmpty(value) {
  return value === '' || value === undefined || value === null || value === [];
}

/***/ }),

/***/ "./src/modules/uiGenerator.js":
/*!************************************!*\
  !*** ./src/modules/uiGenerator.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createCalculatorKeys; });
/* harmony import */ var _calc_keys_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc-keys-controller */ "./src/modules/calc-keys-controller.js");
/* harmony import */ var _calc_keys_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calc-keys-model */ "./src/modules/calc-keys-model.js");


function createCalculatorKeys() {
  function setSpecialCharClass(newElement, newElementDataSet, i) {
    if (_calc_keys_model__WEBPACK_IMPORTED_MODULE_1__["keyDataSets"].specialKeyDataSet.some(textValue => textValue === newElementDataSet[i])) {
      newElement.classList.add('calculator__special-key');
    }
  }

  function removePressedKeyStyle(e) {
    Object(_calc_keys_controller__WEBPACK_IMPORTED_MODULE_0__["determineIfKeyIsSupportedByKeyboard"])(e.key, true);
  }

  function createKeyLayout(targetElementClass, newElementClass, newElementDataSet) {
    const targetElement = document.querySelector(targetElementClass);

    for (let i = 0; i < newElementDataSet.length; i++) {
      const newElementValue = newElementDataSet[i];

      if (newElementValue === '?') {
        const newElement = document.createElement('a');
        newElement.classList.add(...newElementClass, 'calculator__mysterious-key');
        newElement.setAttribute('data-key-value', newElementDataSet[i]);
        newElement.textContent = newElementValue;
        newElement.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        newElement.setAttribute('target', '_blank');
        targetElement.appendChild(newElement);
      } else {
        const newElement = document.createElement('div');
        newElement.classList.add(...newElementClass);
        newElement.setAttribute('data-key-value', newElementDataSet[i]);

        if (newElementClass[1] === _calc_keys_model__WEBPACK_IMPORTED_MODULE_1__["keyClasses"].calculatorOperatorKey) {
          setSpecialCharClass(newElement, newElementDataSet, i);
        }

        newElement.textContent = newElementValue;
        targetElement.appendChild(newElement);
        newElement.addEventListener('click', _calc_keys_controller__WEBPACK_IMPORTED_MODULE_0__["typeKey"]);
      } // * Click behavior

    }
  }

  createKeyLayout('.calculator__number-keys', [_calc_keys_model__WEBPACK_IMPORTED_MODULE_1__["keyClasses"].calculatorKey, _calc_keys_model__WEBPACK_IMPORTED_MODULE_1__["keyClasses"].calculatorNumberKey], _calc_keys_model__WEBPACK_IMPORTED_MODULE_1__["keyDataSets"].numberKeysDataSet);
  createKeyLayout('.calculator__operator-keys', [_calc_keys_model__WEBPACK_IMPORTED_MODULE_1__["keyClasses"].calculatorKey, _calc_keys_model__WEBPACK_IMPORTED_MODULE_1__["keyClasses"].calculatorOperatorKey], _calc_keys_model__WEBPACK_IMPORTED_MODULE_1__["keyDataSets"].operatorKeysDataSet); // * Keyboard support behavior

  window.addEventListener('keydown', _calc_keys_controller__WEBPACK_IMPORTED_MODULE_0__["typeKey"]);
  window.addEventListener('keyup', removePressedKeyStyle);
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map