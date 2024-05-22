/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.grid-container-left,\r\n.grid-container-right {\r\n  display: grid;\r\n  grid-template-columns: repeat(10, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n\r\n  gap: 0.0625em;\r\n  height: 400px;\r\n  width: 400px;\r\n}\r\n\r\n.grid-item {\r\n  border: 1px solid black;\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.grid-item:hover {\r\n  background-color: rgba(121, 121, 120, 0.2);\r\n}\r\n\r\n.body {\r\n  align-items: center;\r\n  display: flex;\r\n  font-family: \"Shadows Into Light\", cursive;\r\n  justify-content: center;\r\n  height: 100vh;\r\n\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.main {\r\n  column-gap: 3em;\r\n  display: flex;\r\n}\r\n\r\nh3,\r\nh4 {\r\n  text-align: center;\r\n  margin: 0;\r\n}\r\n\r\n.grid-item img {\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n}\r\n\r\n.popup {\r\n  position: absolute;\r\n  background-color: white;\r\n  border: 1px solid #ccc;\r\n  padding: 0.625rem;\r\n  z-index: 999; /* Ensure it appears on top of other elements */\r\n}\r\n\r\n.popup form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.popup input[type=\"checkbox\"] {\r\n  margin-bottom: 0.3125rem;\r\n}\r\n\r\n.popup input[type=\"number\"] {\r\n  margin-bottom: 0.625rem;\r\n}\r\n\r\n.popup button {\r\n  background-color: #007bff;\r\n  color: white;\r\n  border: none;\r\n  padding: 0.3125rem 0.625rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.popup button:hover {\r\n  background-color: #0056b3;\r\n}\r\n\r\n.ship-placed{\r\n  background-color: #0056b3;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/dot.jpg":
/*!****************************!*\
  !*** ./src/assets/dot.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2d2a41cbc18e804831cb.jpg\";\n\n//# sourceURL=webpack://battleship/./src/assets/dot.jpg?");

/***/ }),

/***/ "./src/assets/mark.png":
/*!*****************************!*\
  !*** ./src/assets/mark.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dd1de70f4650ab0526f4.png\";\n\n//# sourceURL=webpack://battleship/./src/assets/mark.png?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ \"./src/ui.js\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/style.css */ \"./src/style/style.css\");\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    const ui = new _ui_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    ui.load();\r\n});\n\n//# sourceURL=webpack://battleship/./src/app.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\r\n\r\nclass Gameboard {\r\n    constructor() {\r\n        this.ships = [];\r\n        this.missedShots = [];\r\n        this.grid = Array(10).fill(null).map(() => Array(10).fill(null));\r\n    }\r\n\r\n    placeShip(ship, row, col, isHorizontal) {\r\n        // if the ship fits within grid\r\n        if (isHorizontal && ship.shipLength + col > this.grid.length) return false;\r\n        if (!isHorizontal && ship.shipLength + row > this.grid.length) return false;\r\n\r\n        // if theres already a ship \r\n        for (let i = 0; i < ship.shipLength; i++) {\r\n            if (isHorizontal && this.grid[row][col + i]) return false;\r\n            if (!isHorizontal && this.grid[row + i][col]) return false;\r\n        }\r\n\r\n        // place the ship in the grid\r\n        for (let i = 0; i < ship.shipLength; i++) {\r\n            if (isHorizontal) {\r\n                this.grid[row][col + i] = ship;\r\n            } else {\r\n                this.grid[row + i][col] = ship;\r\n            }\r\n        }\r\n\r\n        this.ships.push(ship);\r\n\r\n        return true;\r\n    }\r\n\r\n    receiveAttack(row, col) {\r\n        // check for grid boundries\r\n        if (row < 0 || row >= this.grid.length || col < 0 || col >= this.grid.length) {\r\n            return false;\r\n        }\r\n\r\n        // check already attacked \r\n        if (this.missedShots.includes(`${row},${col}`) || this.grid[row][col] === 'hit') {\r\n            return false;\r\n        }\r\n\r\n        const target = this.grid[row][col];\r\n\r\n        if (target instanceof _ship_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n            target.hit();\r\n            this.grid[row][col] = 'hit';\r\n            return 'hit';\r\n        }\r\n\r\n        this.missedShots.push(`${row},${col}`)\r\n\r\n        // successful attack.\r\n        return true;\r\n    }\r\n\r\n    allShipsSunk() {\r\n        return this.ships.every(ship => ship.isSunk());\r\n    }\r\n\r\n    shipsCount() {\r\n        return this.ships.filter(ship => !ship.isSunk()).length;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\r\n\r\n\r\nclass Player {\r\n    constructor(playerType) {\r\n        this.playerType = playerType; // real & computer\r\n        this.gameboard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n        if (playerType === 'computer') this.placeShipsForComputer(4)\r\n    }\r\n\r\n    placeShipsForComputer(numberOfShips) {\r\n        let placedShips = 0;\r\n\r\n        while (placedShips < numberOfShips) {\r\n            const randomSize = Math.floor(Math.random() * 4) + 2;\r\n            const randomX = Math.floor(Math.random() * 10);\r\n            const randomY = Math.floor(Math.random() * 10);\r\n            const isHorizontal = Math.random() < 0.5;\r\n\r\n            const ship = new _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](randomSize);\r\n\r\n            if (this.gameboard.placeShip(ship, randomX, randomY, isHorizontal)) {\r\n                placedShips++;\r\n            }\r\n        }\r\n    }\r\n\r\n    placeShip(ship, row, col, isHorizontal) {\r\n        return this.gameboard.placeShip(ship, row, col, isHorizontal);\r\n    }\r\n\r\n    attack(enemy, row, col) {\r\n        if (this.playerType === 'real') {\r\n            return enemy.gameboard.receiveAttack(row, col)\r\n        } else if (this.playerType === 'computer') {\r\n            let coordinates = this.getRandomCoordinates();\r\n\r\n            // attacks until a successful attack is made\r\n            while (!enemy.gameboard.receiveAttack(coordinates.row, coordinates.col)) {\r\n                coordinates = this.getRandomCoordinates();\r\n            }\r\n            return true;\r\n        }\r\n    }\r\n\r\n    getRandomCoordinates() {\r\n        const row = Math.floor(Math.random() * 10);\r\n        const col = Math.floor(Math.random() * 10);\r\n        return { row, col };\r\n    }\r\n}\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\r\n    constructor(shipLength) {\r\n        this.shipLength = shipLength;\r\n        this.hits = 0;\r\n        this.sunk = false;\r\n    }\r\n\r\n    hit() {\r\n        if (this.sunk) return false;\r\n\r\n        this.hits++;\r\n\r\n        if (this.hits >= this.shipLength) this.sunk = true;\r\n    }\r\n\r\n    isSunk() {\r\n        return this.sunk;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _assets_mark_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/mark.png */ \"./src/assets/mark.png\");\n/* harmony import */ var _assets_dot_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/dot.jpg */ \"./src/assets/dot.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass UI {\r\n    constructor() {\r\n        this.player = new _player_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('real');\r\n        this.computer = new _player_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('computer');\r\n    }\r\n\r\n    load() {\r\n        this.game();\r\n    }\r\n\r\n    createSection() {\r\n        const main = document.createElement('main');\r\n\r\n        const leftSection = document.createElement('div');\r\n        const leftSectionh3 = document.createElement('h3');\r\n        const leftSectionGridContainer = document.createElement('div');\r\n\r\n        const rightSection = document.createElement('div');\r\n        const rightSectionh3 = document.createElement('h3');\r\n        const rightSectionGridContainer = document.createElement('div');\r\n\r\n        const body = document.body;\r\n        body.classList.add('body')\r\n\r\n        main.classList.add('main');\r\n        body.appendChild(main);\r\n\r\n        main.appendChild(leftSection);\r\n        main.appendChild(rightSection);\r\n\r\n        leftSection.classList.add('left-section');\r\n        leftSectionh3.id = \"player\";\r\n        leftSectionh3.textContent = \"You\"\r\n        leftSectionGridContainer.classList.add('grid-container-left')\r\n        leftSection.appendChild(leftSectionh3);\r\n        leftSection.appendChild(leftSectionGridContainer);\r\n\r\n        rightSection.classList.add('right-section');\r\n        rightSectionh3.id = \"computer\";\r\n        rightSectionh3.textContent = \"Computer\"\r\n        rightSectionGridContainer.classList.add('grid-container-right')\r\n        rightSection.appendChild(rightSectionh3);\r\n        rightSection.appendChild(rightSectionGridContainer);\r\n    }\r\n\r\n    createGrid() {\r\n        const gLeft = document.querySelector(\".grid-container-left\");\r\n        const gRight = document.querySelector(\".grid-container-right\");\r\n\r\n        for (let i = 0; i < 100; i++) {\r\n            const div = document.createElement(\"div\");\r\n            div.classList.add(\"grid-item\", \"left-grid-item\", `grid-item-${i + 1}`);\r\n            gLeft.appendChild(div);\r\n        }\r\n\r\n        for (let i = 0; i < 100; i++) {\r\n            const div = document.createElement(\"div\");\r\n            div.classList.add(\"grid-item\", \"right-grid-item\", `grid-item-${i + 1}`);\r\n            gRight.appendChild(div);\r\n        }\r\n    }\r\n    loadHomepage() {\r\n        this.createSection();\r\n        this.createGrid();\r\n        this.createShipCountElements();\r\n    }\r\n\r\n    game() {\r\n        this.loadHomepage();\r\n        this.gridClickEvents();\r\n        this.placeShipsForPlayer();\r\n    }\r\n\r\n    gridClickEvents() {\r\n        const computerGrid = document.querySelector(\".grid-container-right\");\r\n\r\n        computerGrid.addEventListener(\"click\", (event) => {\r\n            if (this.player.gameboard.shipsCount() !== 4) {\r\n                alert(\"place all 4 ships before attacking!\");\r\n                return;\r\n            }\r\n\r\n            const cell = event.target;\r\n            if (cell.classList.contains(\"right-grid-item\")) {\r\n                const cellIndex = Array.from(cell.parentNode.children).indexOf(cell);\r\n                const row = Math.floor(cellIndex / 10);\r\n                const col = cellIndex % 10;\r\n\r\n                const attack = this.player.attack(this.computer, row, col);\r\n\r\n                if (attack) {\r\n                    if (attack === 'hit') {\r\n                        const myIcon = new Image();\r\n                        myIcon.src = _assets_mark_png__WEBPACK_IMPORTED_MODULE_3__;\r\n                        cell.appendChild(myIcon);\r\n                        this.updateShipCounts();\r\n                    } else if (attack) {\r\n                        const myIcon2 = new Image();\r\n                        myIcon2.src = _assets_dot_jpg__WEBPACK_IMPORTED_MODULE_4__;\r\n                        cell.appendChild(myIcon2);\r\n                    }\r\n                } else {\r\n                    return;\r\n                }\r\n            }\r\n        });\r\n    }\r\n\r\n    createShipCountElements() {\r\n        const h4C = document.createElement('h4');\r\n        const h4P = document.createElement('h4');\r\n        h4C.id = 'computer-ships-left';\r\n        h4P.id = 'player-ships-left';\r\n\r\n        const rSection = document.querySelector('.right-section');\r\n        const lSection = document.querySelector('.left-section');\r\n\r\n        rSection.children[0].insertAdjacentElement('afterend', h4C);\r\n        lSection.children[0].insertAdjacentElement('afterend', h4P);\r\n\r\n        this.updateShipCounts();\r\n    }\r\n\r\n    updateShipCounts() {\r\n        const h4C = document.querySelector('#computer-ships-left');\r\n        const h4P = document.querySelector('#player-ships-left');\r\n\r\n        h4C.innerHTML = `Ships left: ${this.computer.gameboard.shipsCount()}`;\r\n        h4P.innerHTML = `Ships left: ${this.player.gameboard.shipsCount()}`;\r\n    }\r\n\r\n    displayShipPlacementPopup(cell) {\r\n        const popupContainer = document.createElement(\"div\");\r\n        popupContainer.classList.add(\"popup\");\r\n\r\n        const form = document.createElement(\"form\");\r\n        const isHorizontalCheckbox = document.createElement(\"input\");\r\n        const isHorizontalLabel = document.createElement(\"label\");\r\n        isHorizontalLabel.textContent = \"Horizontal?\";\r\n        isHorizontalLabel.style.textAlign = \"center\";\r\n        isHorizontalCheckbox.type = \"checkbox\";\r\n        isHorizontalCheckbox.textContent = \"Horizontal?\"\r\n        const shipSize = document.createElement(\"label\");\r\n        shipSize.textContent = \"Ship Size\"\r\n        shipSize.style.textAlign = \"center\";\r\n        const lengthInput = document.createElement(\"input\");\r\n        lengthInput.min = \"2\";\r\n        lengthInput.max = \"5\";\r\n        lengthInput.type = \"number\";\r\n        const submitButton = document.createElement(\"button\");\r\n        submitButton.type = \"submit\";\r\n        submitButton.textContent = \"Place Ship\";\r\n\r\n        form.appendChild(isHorizontalLabel);\r\n        form.appendChild(isHorizontalCheckbox);\r\n        form.appendChild(shipSize);\r\n        form.appendChild(lengthInput);\r\n        form.appendChild(submitButton);\r\n\r\n        popupContainer.appendChild(form);\r\n\r\n        document.body.appendChild(popupContainer);\r\n\r\n        const rect = cell.getBoundingClientRect();\r\n        popupContainer.style.top = `${rect.top}px`;\r\n        popupContainer.style.left = `${rect.left}px`;\r\n\r\n        form.addEventListener(\"submit\", (event) => {\r\n            event.preventDefault();\r\n            const isHorizontal = isHorizontalCheckbox.checked;\r\n            const length = parseInt(lengthInput.value);\r\n            if (!isNaN(length) && length > 0) {\r\n                const row = Math.floor(Array.from(cell.parentNode.children).indexOf(cell) / 10);\r\n                const col = Array.from(cell.parentNode.children).indexOf(cell) % 10;\r\n                const ship = new _ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](length);\r\n                if (this.player.placeShip(ship, row, col, isHorizontal)) {\r\n                    for (let i = 0; i < length; i++) {\r\n                        const index = isHorizontal ? row * 10 + col + i : (row + i) * 10 + col;\r\n                        const gridItem = document.querySelector(`.left-grid-item.grid-item-${index + 1}`);\r\n                        gridItem.classList.add('ship-placed');\r\n                    }\r\n                    document.body.removeChild(popupContainer);\r\n                    this.updateShipCounts();\r\n                } else {\r\n                    alert(\"invalid ship placement!\");\r\n                    document.body.removeChild(popupContainer);\r\n                    return;\r\n                }\r\n            } else {\r\n                alert(\"enter a valid ship length!\");\r\n                return;\r\n            }\r\n        });\r\n    }\r\n\r\n    placeShipsForPlayer() {\r\n        const gridLeft = document.querySelector(\".grid-container-left\");\r\n        let shipsPlaced = 0;\r\n        gridLeft.addEventListener(\"click\", (event) => {\r\n            const cell = event.target;\r\n            if (cell.classList.contains(\"left-grid-item\")) {\r\n                if (shipsPlaced < 4) {\r\n                    this.displayShipPlacementPopup(cell);\r\n                    shipsPlaced++;\r\n                } else {\r\n                    alert(\"you have already placed 4 ships!\");\r\n                    return;\r\n                }\r\n            }\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://battleship/./src/ui.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;