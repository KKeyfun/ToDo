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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Inter-Medium.woff */ \"./src/Inter-Medium.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'Inter medium';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n* {\\n    padding: 0;\\n    margin: 0;\\n\\n    font-family: 'Inter medium';\\n}\\n\\n:root {\\n    --primaryColor:#d65e78;\\n    --lightColor:#ff8fa7;\\n    --darkColor:#a12d4c;\\n}\\n\\nbody {\\n    display:grid;\\n    height: 100vh;\\n    grid-template-rows: auto 1fr auto;\\n    grid-template-columns: max(6em,15%) auto;\\n}\\n\\n.sidebar input {\\n    /* z-index: 1; */\\n}\\n\\n.modalBg {\\n    /* display: flex; */\\n    display: none;\\n    background-color: rgba(0,0,0,.6);\\n    position:absolute;\\n    z-index: 3;\\n    \\n    height: 100vh;\\n    height: 100dvh;\\n    width: 100vw;\\n    width: 100dvw;\\n\\n}\\n\\n.modalContainer {\\n    /* display: none; */\\n    /* z-index: 4; */\\n    background-color: white;\\n\\n    padding: 3em;\\n}\\n\\n.addTaskModal {\\n    display: flex;\\n    width: 20%;\\n    height: 25%;\\n}\\n\\n.editTaskModal {\\n    \\n}\\n\\n.headerContainer {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr 1fr;\\n    grid-column: 1/-1;\\n\\n    background-color: var(--darkColor);\\n}\\n\\n.header {\\n    grid-column: 2;\\n\\n    color:white;\\n    font-size: 3rem;\\n    text-align: center;\\n\\n    min-width: 150px;\\n    padding: .5em 0;\\n}\\n\\n.sidebarContainer {\\n    background-color: var(--lightColor);\\n}\\n\\n.sidebarHeader {\\n    background-color: var(--primaryColor);\\n    font-size: 1.2rem;\\n    text-align: center;\\n    padding: .5em 0;\\n}\\n\\n.sidebar {\\n    background-color: var(--lightColor);\\n\\n    text-align: center;\\n}\\n\\n.sidebar li {\\n    padding: .75em;\\n}\\n\\n.sidebarItemContainer {\\n    display: flex;\\n    align-items: center;\\n    gap: .25em;\\n\\n    text-align: left;\\n    position: relative;\\n}\\n\\n.sidebarItemContainer div:first-child{\\n    max-width: max(80px,85%);\\n    word-wrap: break-word;\\n}\\n\\n.listNameContainer {\\n    display: flex;\\n    align-items: center;\\n    gap: .25em;\\n\\n    position: absolute;\\n    top:.3rem;\\n    z-index: 2;\\n}\\n\\n.listNameField {\\n    max-width: 82%;\\n}\\n\\n.sidebarItemContainer .buttonOverlay {\\n    display: flex;\\n\\n    position: absolute;\\n    right:5%;\\n\\n    visibility: hidden;\\n    z-index: 1;\\n}\\n\\n.sidebarItemContainer:hover .buttonOverlay {\\n    visibility: visible;\\n}\\n\\n.sidebar button {\\n    width: 2em;\\n    min-width: 2em;\\n    height: 2em;\\n}\\n\\n.sidebar .addListButton {\\n    font-size: 1.2rem;\\n    background-color: var(--primaryColor);\\n    border: 0;\\n    border-radius: .25em;\\n    color:white;\\n    height: 1.5em;\\n    width: 5em;\\n    margin-top: .7em;\\n}\\n\\n.addListButton:hover {\\n    border: 1px solid white;\\n}\\n\\n.sidebar .editButton {\\n    /* position: absolute; */\\n}\\n\\n.sidebar .deleteButton {\\n    /* position: absolute;\\n    left: calc(100% - 2em); */\\n    margin-left: .3em;\\n}\\n\\n.contentContainer {\\n    display:grid;\\n    /* grid-template-rows: 3rem; */\\n    grid-auto-rows: 2rem;\\n}\\n\\n.content {\\n    /* background-color: var(--primaryColor); */\\n}\\n\\n.contentHeader {\\n    display: flex;\\n}\\n\\n.checklistContainer {\\n    background-color: white;\\n}\\n\\n.footerContainer {\\n    grid-column: 1/-1;\\n\\n    text-align: center;\\n\\n    background-color: var(--darkColor);\\n}\\n\\n.footer {\\n    color:white;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/functions/append.js":
/*!*********************************!*\
  !*** ./src/functions/append.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction append(parent, child) {\n  if (child.length) {\n    child.forEach((elem) => {\n      parent.appendChild(elem);\n    });\n  } else {\n    parent.appendChild(child);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (append);\n\n\n//# sourceURL=webpack:///./src/functions/append.js?");

/***/ }),

/***/ "./src/functions/initialize.js":
/*!*************************************!*\
  !*** ./src/functions/initialize.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./append */ \"./src/functions/append.js\");\n/* harmony import */ var _makeElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeElement */ \"./src/functions/makeElement.js\");\n/* harmony import */ var _listFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listFunctions */ \"./src/functions/listFunctions.js\");\n\n\n\n\nfunction initialLoad() {\n  // todo - finish functionality\n  const modalBg = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'modalBg');\n  const modalContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'modalContainer');\n\n  // const addModal = createAddTaskModal();\n  //   const editModal = createEditTaskModal();\n\n  // append(modalContainer, [addModal, editModal]);\n  (0,_append__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(modalBg, modalContainer);\n\n  const headerContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'headerContainer');\n  const header = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'header', 'To Do');\n  (0,_append__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(headerContainer, header);\n\n  const sidebarContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'sidebarContainer');\n  const sidebarHeader = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'sidebarHeader', 'Your Lists');\n  const sidebar = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('ul', 'sidebar');\n  const addListButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('button', 'addListButton', '+');\n\n  addListButton.addEventListener('click', _listFunctions__WEBPACK_IMPORTED_MODULE_2__.newList);\n\n  (0,_append__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sidebar, addListButton);\n  (0,_append__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sidebarContainer, [sidebarHeader, sidebar]);\n\n  const contentContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'contentContainer');\n\n  const contentHeader = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'contentHeader', 'LIST NAME HERE');// todo - change name to current list's name\n\n  const content = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'content');\n  const checklistContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'checklistContainer');\n  const checklist = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('ol', 'checklist');\n  (0,_append__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(checklistContainer, checklist);\n  (0,_append__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(content, checklistContainer);\n  (0,_append__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(contentContainer, [contentHeader, content]);\n  // checklistitems\n\n  const footerContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'footerContainer');\n  const url = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('a', '', 'Github');// todo - fix after finding new icon\n  url.href = '';// todo - get github icon from different source\n  const image = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('img', 'githubUrl');\n  const footer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('a', 'footer');\n  footer.href = 'https:github.com/KKeyfun';\n  (0,_append__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(footer, image);\n  (0,_append__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(footerContainer, [footer, url]);\n  (0,_append__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(document.querySelector('body'), [modalBg, headerContainer, sidebarContainer, contentContainer, footerContainer]);\n}\n\nfunction createAddTaskModal() {\n  const addTaskModal = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'addTaskModal');\n  const newTaskForm = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('form', 'newTaskForm');\n\n  const newTaskHeader = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'newTaskHeader', 'New Task');\n  const newTaskNameLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('label', 'label', 'Task Name');\n\n  const newTaskCancelButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('button', 'newTaskCancelButton', 'Cancel');\n  // newTaskCancelButton.addEventListener('click',function(){ newTaskCancel() });\n\n  const newTaskName = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('input');\n  newTaskName.setAttribute('type', 'text');\n\n  const listSelectLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('label', 'label', 'List');\n  const listSelectDropdown = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('select', 'listSelectDropdown');// dynamically add lists later\n\n  const newTaskDescriptionLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('label', 'label', 'Description');\n  const newTaskDescription = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('input');// todo - should be textarea\n  newTaskDescription.setAttribute('type', 'text');\n\n  const newTaskDueDateLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('label', 'label', 'Due Date');\n  const newTaskDueDate = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('input');// todo - calendar widget\n  //   newTaskDescription.setAttribute('type', 'text');\n\n  const newTaskPriorityLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('label', 'label', 'Task Priority: ');\n  const newTaskPriority = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('select');\n  (0,_append__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newTaskPriority, [(0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('option', '', 'High'), (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('option', '', 'Moderate'), (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('option', '', 'Low')]);\n\n  const newTaskAddButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('button', 'newTaskAddButton', 'Add Task');\n\n  (0,_append__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(addTaskModal, []);\n  return addTaskModal;\n}\n\nfunction createEditTaskModal() {\n  const editTaskModal = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'editTaskModal');\n\n  const editTaskTitle = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div');// todo - needs to know which task it's editing, this might need to go into the task functions\n\n  (0,_append__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(editTaskModal, []);\n  return editTaskModal;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);\n\n\n//# sourceURL=webpack:///./src/functions/initialize.js?");

/***/ }),

/***/ "./src/functions/listFunctions.js":
/*!****************************************!*\
  !*** ./src/functions/listFunctions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activeList\": () => (/* binding */ activeList),\n/* harmony export */   \"lists\": () => (/* binding */ lists),\n/* harmony export */   \"newList\": () => (/* binding */ newList)\n/* harmony export */ });\n/* harmony import */ var _makeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeElement */ \"./src/functions/makeElement.js\");\n/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./append */ \"./src/functions/append.js\");\n\n\n\nlet lists = [];\nlet activeList = null;\nlet addingList = false;\n\nfunction createList(listName) {\n  const tasks = [];\n  return { listName, tasks };\n  // should be pushed to a global lists array\n}\n\nfunction modifyListName(list) {\n  const listName = list.children[0].children[0].value;\n  // should hide the original stuff\n  // list.children[1].style.display = 'none';\n  // list.children[2].style.display = 'none';\n\n  // hide the text field then redisplay the rest\n  const previousValue = list.children[1].textContent;\n  list.children[1].textContent = listName;\n  list.children[1].style.display = 'block';\n  list.children[2].style.display = 'flex';\n  list.children[0].style.display = 'none';\n\n  // let textField = list.children[0];\n  // textField.style.display = 'flex';\n  // let temp = lists.filter(elem => elem.name !== list.textContent);\n  // finds list in the list array to edit the name\n  // temp[0].taskName = listName;\n  const index = lists.findIndex((elem) => elem.listName === previousValue);\n  lists[index].listName = listName;\n  // change to a text field\n}\n\nfunction deleteList(list) {\n  lists = lists.filter((elem) => elem.listName !== list.children[1].textContent);\n\n  // TODO adjust task display if active list is deleted\n  list.parentElement.removeChild(list);\n}\n\n// adds a new list with edit + delete buttons to the sidebar\nconst addList = (listName, container) => {\n  const listItem = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', null, listName);\n  lists.push(createList(listName));\n\n  const buttonOverlay = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'buttonOverlay');\n  const editButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', 'editButton', 'edit');\n  const deleteButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', 'deleteButton', 'del');\n\n  editButton.addEventListener('click', () => { // shows text field to edit list name, hides label and save/delete buttons\n    buttonOverlay.style.display = 'none';\n    listItem.style.display = 'none';\n    container.children[0].style.display = 'flex';\n  });\n  deleteButton.addEventListener('click', () => {\n    deleteList(container);\n  });\n\n  (0,_append__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(buttonOverlay, [editButton, deleteButton]);\n  (0,_append__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(container, [listItem, buttonOverlay]);\n  activeList = lists[lists.length - 1];\n};\n\nfunction newList() { // Creates a text field to create a new list\n  if (!addingList) {\n    addingList = true;\n    const sidebar = document.querySelector('.sidebar');\n    const sidebarItemContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li', 'sidebarItemContainer');\n\n    // add functionality\n    const listNameContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'listNameContainer');\n    const listName = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', 'listNameField');\n    listName.setAttribute('type', 'text');\n    const saveListName = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', 'saveButton');\n    (0,_append__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(listNameContainer, [listName, saveListName]);\n    (0,_append__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sidebarItemContainer, listNameContainer);\n\n    sidebar.insertBefore(sidebarItemContainer, document.querySelector('.addListButton'));\n    saveListName.addEventListener('click', function add() {\n      addingList = false;\n      let lName = 'New List';\n      if (listName.value) {\n        lName = listName.value;\n      }\n      addList(lName, sidebarItemContainer);\n      console.log(lists);\n      listNameContainer.style.display = 'none';\n      // listName.style.display = 'none';\n      // saveListName.style.display = 'none';\n      // console.log(sidebarItemContainer)\n      saveListName.removeEventListener('click', add);\n      saveListName.addEventListener('click', () => { modifyListName(sidebarItemContainer); });\n    });\n  }\n}\n\n// function createModal(){//needs access to lists, creates tasks\n//     const addTaskModal = makeElement('div', 'addTaskModal');\n//     const newForm = makeElement('form', 'newTaskForm');\n//     const listSelect = makeElement('select','listSelectDropdown');//when new list is created, add an option too this\n\n//     const newTaskHeader = makeElement('div', 'newTaskHeader', 'New Task');\n//     const newTaskName = makeElement('input');\n//     newTaskName.setAttribute('type', 'text');\n//     const newTaskDescription = makeElement('input');\n//     newTaskDescription.setAttribute('type', 'text');\n//     const newTaskPriority = makeElement('select');\n//     append(newTaskPriority, [makeElement('option', '', 'High'), makeElement('option', '', 'Moderate'), makeElement('option', '', 'Low')]);\n\n//     const editTaskModal = makeElement('div', 'editTaskModal');\n//     const modalContainer = document.querySelector('.modalContainer');\n//     const modalBg = document.querySelector('.modalBg');\n//     append(modalContainer, [addTaskModal, editTaskModal]);\n//     append(modalBg, modalContainer);\n// }\n\n\n\n\n//# sourceURL=webpack:///./src/functions/listFunctions.js?");

/***/ }),

/***/ "./src/functions/makeElement.js":
/*!**************************************!*\
  !*** ./src/functions/makeElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction makeElement(type, className, content) {\n  const elem = document.createElement(type);\n  if (className) {\n    if (typeof (className) === 'object') {\n      className.forEach((el) => {\n        elem.classlist.add(el);\n      });\n    } else { elem.classList.add(className); }\n  }\n  if (content) {\n    elem.textContent = content;\n  }\n  return elem;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeElement);\n\n\n//# sourceURL=webpack:///./src/functions/makeElement.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _functions_initialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/initialize */ \"./src/functions/initialize.js\");\n\n\n\n(0,_functions_initialize__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n// todos should be dynamically created objects\n\n// title, description, duedate,priority minimum\n\n// projects / separate lists todos\n\n// modules\n// list management\n\n// edit task module, gets task module\n\n// list controller, gets todolist, calls update display\n\n// edit/create task should be a composition of some sort\n\n// priority sort should be a thing\n\n// switch controller\n\n// maybe a button handler?\n\n// modal controller, abstracts modal functions\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/Inter-Medium.woff":
/*!*******************************!*\
  !*** ./src/Inter-Medium.woff ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9053572c46aeb4b16caa.woff\";\n\n//# sourceURL=webpack:///./src/Inter-Medium.woff?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;