/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Inter-Medium.woff */ "./src/Inter-Medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Inter medium';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n* {\n    padding: 0;\n    margin: 0;\n\n    font-family: 'Inter medium';\n    list-style: none;\n    text-decoration: none;\n}\n\n:root {\n    --primaryColor:#d65e78;\n    --lightColor:#ff8fa7;\n    --darkColor:#a12d4c;\n}\n\nbody {\n    display:grid;\n    height: 100vh;\n    grid-template-rows: auto 1fr auto;\n    grid-template-columns: max(6em,15%) auto;\n}\n\n.header {\n    text-align: center;\n    font-weight: 900;\n}\n\n.sidebar input {\n    /* z-index: 1; */\n}\n\n.modalBg {\n    display: none;\n    /* display: flex; */\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0,0,0,.6);\n    position:fixed;\n    z-index: 3;\n    \n    height: 100vh;\n    height: 100dvh;\n    width: 100vw;\n    width: 100dvw;\n\n}\n\n.modalContainer {\n    /* display: none; */\n    display: flex;\n    background-color: white;\n    border-radius: 1em;\n    padding: 2em;\n    position: absolute;\n}\n\nli input,li textarea{\n    width: 100%;\n}\n\nli:last-child {\n    margin: 0 auto;\n}\n\nli:last-child button {\n    padding: .25em .75em;\n    margin: .5em;\n}\n\n.newTaskHeader,.editTaskHeader {\n    font-size: 1.3rem;\n    /* padding: .25em 0; */\n}\n\n.addTaskModal,.editTaskModal {\n    display: none;\n}\n\n/* .newTaskCancelButton {\n    position: absolute;\n    top:1.5em;\n    right: 2em;\n    padding: .2em .5em;\n} */\n\n.modalCornerButton {\n    position: absolute;\n    top:1.5em;\n    right: 2em;\n    padding: .2em .5em;\n}\n\n.modalBg ul {\n    display: flex;\n    flex-direction: column;\n    gap:1em;\n}\n\n.listNameContainer, .addListButton{\n    margin: 0 auto;\n}\n\n.headerContainer {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-column: 1/-1;\n\n    background-color: var(--darkColor);\n}\n\n.pageHeader {\n    grid-column: 2;\n\n    color:white;\n    font-size: 3rem;\n    text-align: center;\n\n    min-width: 150px;\n    padding: .5em 0;\n}\n\n.sidebarContainer {\n    background-color: var(--lightColor);\n}\n\n.sidebarHeader {\n    background-color: var(--primaryColor);\n    font-size: 1.2rem;\n    padding: .5em 0;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap:.5em;\n\n    background-color: var(--lightColor);\n    text-align: center;\n}\n\n.sidebar li {\n    padding: .75em;\n}\n\n.sidebarItemContainer {\n    display: flex;\n    align-items: center;\n    gap: .25em;\n\n    text-align: left;\n    position: relative;\n}\n\n.sidebarItemContainer div:first-child{\n    max-width: max(80px,90%);\n    word-wrap: break-word;\n}\n\n.listNameContainer {\n    display: flex;\n    align-items: center;\n    gap: .25em;\n\n    position: absolute;\n    top:.3rem;\n    z-index: 2;\n}\n\n.listNameField {\n    /* max-width: 82%; */\n}\n\n.sidebarItemContainer .buttonOverlay {\n    display: flex;\n\n    position: absolute;\n    right:5%;\n\n    visibility: hidden;\n    z-index: 1;\n}\n\n.sidebarItemContainer:hover .buttonOverlay {\n    visibility: visible;\n}\n\n.sidebar button {\n    width: 2em;\n    min-width: 2em;\n    height: 2em;\n}\n\n.sidebar .addListButton {\n    font-size: 1.2rem;\n    background-color: var(--primaryColor);\n    border: 0;\n    border-radius: .25em;\n    color:white;\n    height: 1.5em;\n    width: 5em;\n    margin-top: .7em;\n}\n\n.addListButton:hover {\n    border: 1px solid white;\n}\n\n.sidebar .editButton {\n    /* position: absolute; */\n}\n\n.sidebar .deleteButton {\n    /* position: absolute;\n    left: calc(100% - 2em); */\n    margin-left: .3em;\n}\n\n.contentContainer {\n    display:grid;\n    /* grid-template-rows: 3rem; */\n    grid-auto-rows: 2rem;\n}\n\n.content {\n    /* background-color: var(--primaryColor); */\n}\n\n.contentHeader {\n    /* display: flex; */\n}\n\n.checklistContainer {\n    background-color: white;\n}\n\n.addTaskButton {\n    background-color: var(--primaryColor);\n    border-radius: 5rem;\n    border:none;\n    color:white;\n    font-size: 2rem;\n    font-weight: 900;\n    text-align: center;\n    /* padding: 5rem; */\n    height:3.5rem;\n    width:3.5rem;\n    /* margin: 90% 5% 5% auto; */\n    position: fixed;\n    bottom:5%;\n    right:3vmin;\n    /* vertical-align: middle; */\n    /* margin:auto; */\n}\n\n.footerContainer {\n    grid-column: 1/-1;\n\n    text-align: center;\n\n    background-color: var(--darkColor);\n}\n\n.footer {\n    color:white;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,4CAA+B;AACnC;;AAEA;IACI,UAAU;IACV,SAAS;;IAET,2BAA2B;IAC3B,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;IACtB,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,iCAAiC;IACjC,wCAAwC;AAC5C;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,gCAAgC;IAChC,cAAc;IACd,UAAU;;IAEV,aAAa;IACb,cAAc;IACd,YAAY;IACZ,aAAa;;AAEjB;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,oBAAoB;IACpB,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;;;;;GAKG;;AAEH;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,OAAO;AACX;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,iBAAiB;;IAEjB,kCAAkC;AACtC;;AAEA;IACI,cAAc;;IAEd,WAAW;IACX,eAAe;IACf,kBAAkB;;IAElB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,qCAAqC;IACrC,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;;IAER,mCAAmC;IACnC,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;;IAEV,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;IACxB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;;IAEV,kBAAkB;IAClB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,aAAa;;IAEb,kBAAkB;IAClB,QAAQ;;IAER,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,cAAc;IACd,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,qCAAqC;IACrC,SAAS;IACT,oBAAoB;IACpB,WAAW;IACX,aAAa;IACb,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI;6BACyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,oBAAoB;AACxB;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,qCAAqC;IACrC,mBAAmB;IACnB,WAAW;IACX,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,4BAA4B;IAC5B,eAAe;IACf,SAAS;IACT,WAAW;IACX,4BAA4B;IAC5B,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;;IAEjB,kBAAkB;;IAElB,kCAAkC;AACtC;;AAEA;IACI,WAAW;AACf","sourcesContent":["@font-face {\n    font-family: 'Inter medium';\n    src: url('./Inter-Medium.woff');\n}\n\n* {\n    padding: 0;\n    margin: 0;\n\n    font-family: 'Inter medium';\n    list-style: none;\n    text-decoration: none;\n}\n\n:root {\n    --primaryColor:#d65e78;\n    --lightColor:#ff8fa7;\n    --darkColor:#a12d4c;\n}\n\nbody {\n    display:grid;\n    height: 100vh;\n    grid-template-rows: auto 1fr auto;\n    grid-template-columns: max(6em,15%) auto;\n}\n\n.header {\n    text-align: center;\n    font-weight: 900;\n}\n\n.sidebar input {\n    /* z-index: 1; */\n}\n\n.modalBg {\n    display: none;\n    /* display: flex; */\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0,0,0,.6);\n    position:fixed;\n    z-index: 3;\n    \n    height: 100vh;\n    height: 100dvh;\n    width: 100vw;\n    width: 100dvw;\n\n}\n\n.modalContainer {\n    /* display: none; */\n    display: flex;\n    background-color: white;\n    border-radius: 1em;\n    padding: 2em;\n    position: absolute;\n}\n\nli input,li textarea{\n    width: 100%;\n}\n\nli:last-child {\n    margin: 0 auto;\n}\n\nli:last-child button {\n    padding: .25em .75em;\n    margin: .5em;\n}\n\n.newTaskHeader,.editTaskHeader {\n    font-size: 1.3rem;\n    /* padding: .25em 0; */\n}\n\n.addTaskModal,.editTaskModal {\n    display: none;\n}\n\n/* .newTaskCancelButton {\n    position: absolute;\n    top:1.5em;\n    right: 2em;\n    padding: .2em .5em;\n} */\n\n.modalCornerButton {\n    position: absolute;\n    top:1.5em;\n    right: 2em;\n    padding: .2em .5em;\n}\n\n.modalBg ul {\n    display: flex;\n    flex-direction: column;\n    gap:1em;\n}\n\n.listNameContainer, .addListButton{\n    margin: 0 auto;\n}\n\n.headerContainer {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-column: 1/-1;\n\n    background-color: var(--darkColor);\n}\n\n.pageHeader {\n    grid-column: 2;\n\n    color:white;\n    font-size: 3rem;\n    text-align: center;\n\n    min-width: 150px;\n    padding: .5em 0;\n}\n\n.sidebarContainer {\n    background-color: var(--lightColor);\n}\n\n.sidebarHeader {\n    background-color: var(--primaryColor);\n    font-size: 1.2rem;\n    padding: .5em 0;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap:.5em;\n\n    background-color: var(--lightColor);\n    text-align: center;\n}\n\n.sidebar li {\n    padding: .75em;\n}\n\n.sidebarItemContainer {\n    display: flex;\n    align-items: center;\n    gap: .25em;\n\n    text-align: left;\n    position: relative;\n}\n\n.sidebarItemContainer div:first-child{\n    max-width: max(80px,90%);\n    word-wrap: break-word;\n}\n\n.listNameContainer {\n    display: flex;\n    align-items: center;\n    gap: .25em;\n\n    position: absolute;\n    top:.3rem;\n    z-index: 2;\n}\n\n.listNameField {\n    /* max-width: 82%; */\n}\n\n.sidebarItemContainer .buttonOverlay {\n    display: flex;\n\n    position: absolute;\n    right:5%;\n\n    visibility: hidden;\n    z-index: 1;\n}\n\n.sidebarItemContainer:hover .buttonOverlay {\n    visibility: visible;\n}\n\n.sidebar button {\n    width: 2em;\n    min-width: 2em;\n    height: 2em;\n}\n\n.sidebar .addListButton {\n    font-size: 1.2rem;\n    background-color: var(--primaryColor);\n    border: 0;\n    border-radius: .25em;\n    color:white;\n    height: 1.5em;\n    width: 5em;\n    margin-top: .7em;\n}\n\n.addListButton:hover {\n    border: 1px solid white;\n}\n\n.sidebar .editButton {\n    /* position: absolute; */\n}\n\n.sidebar .deleteButton {\n    /* position: absolute;\n    left: calc(100% - 2em); */\n    margin-left: .3em;\n}\n\n.contentContainer {\n    display:grid;\n    /* grid-template-rows: 3rem; */\n    grid-auto-rows: 2rem;\n}\n\n.content {\n    /* background-color: var(--primaryColor); */\n}\n\n.contentHeader {\n    /* display: flex; */\n}\n\n.checklistContainer {\n    background-color: white;\n}\n\n.addTaskButton {\n    background-color: var(--primaryColor);\n    border-radius: 5rem;\n    border:none;\n    color:white;\n    font-size: 2rem;\n    font-weight: 900;\n    text-align: center;\n    /* padding: 5rem; */\n    height:3.5rem;\n    width:3.5rem;\n    /* margin: 90% 5% 5% auto; */\n    position: fixed;\n    bottom:5%;\n    right:3vmin;\n    /* vertical-align: middle; */\n    /* margin:auto; */\n}\n\n.footerContainer {\n    grid-column: 1/-1;\n\n    text-align: center;\n\n    background-color: var(--darkColor);\n}\n\n.footer {\n    color:white;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/functions/append.js":
/*!*********************************!*\
  !*** ./src/functions/append.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function append(parent, child) {
  if (child.length) {
    child.forEach((elem) => {
      parent.appendChild(elem);
    });
  } else {
    parent.appendChild(child);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (append);


/***/ }),

/***/ "./src/functions/displayController.js":
/*!********************************************!*\
  !*** ./src/functions/displayController.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeActiveList": () => (/* binding */ changeActiveList),
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "display": () => (/* binding */ display)
/* harmony export */ });
// displays tasks according to the matching list
// import lists
function display(form) {
  document.querySelector('.modalBg').style.display = 'flex';
  if (form === 'add') {
    document.querySelector('.addTaskModal').style.display = 'flex';
  } else if (form === 'edit') {
    document.querySelector('.editTaskModal').style.display = 'flex';
  }
  // modalcontainer display:flex
}

function changeActiveList() {

}

function closeModal(event) {
  event.preventDefault();

  // activeModal
}




/***/ }),

/***/ "./src/functions/initialize.js":
/*!*************************************!*\
  !*** ./src/functions/initialize.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./append */ "./src/functions/append.js");
/* harmony import */ var _makeElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeElement */ "./src/functions/makeElement.js");
/* harmony import */ var _listFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listFunctions */ "./src/functions/listFunctions.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayController */ "./src/functions/displayController.js");





function initialLoad() {
  // todo - finish functionality
  const modalBg = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'modalBg');
  // todo - stop propogation when hiding modal and bg
  const modalContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'modalContainer');

  const addModal = createAddTaskModal();
  const editModal = createEditTaskModal();

  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(modalContainer, [addModal, editModal]);
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(modalBg, modalContainer);

  const headerContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'headerContainer');
  const header = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', ['header', 'pageHeader'], 'To Do');
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(headerContainer, header);

  const sidebarContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'sidebarContainer');
  const sidebarHeader = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', ['header', 'sidebarHeader'], 'Your Lists');
  const sidebar = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('ul', 'sidebar');
  const addListButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'addListButton', '+');

  addListButton.addEventListener('click', _listFunctions__WEBPACK_IMPORTED_MODULE_2__.newList);

  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(sidebar, addListButton);
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(sidebarContainer, [sidebarHeader, sidebar]);

  const contentContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'contentContainer');

  const contentHeader = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', ['header', 'contentHeader'], 'LIST NAME HERE');// todo - change name to current list's name

  const content = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'content');
  const checklistContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'checklistContainer');
  const checklist = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('ol', 'checklist');

  const newTaskButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'addTaskButton', '+');
  newTaskButton.addEventListener('click', () => { (0,_displayController__WEBPACK_IMPORTED_MODULE_3__.display)('add'); });

  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(checklistContainer, checklist);
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(content, checklistContainer);
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(contentContainer, [contentHeader, content, newTaskButton]);
  // checklistitems

  const footerContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'footerContainer');
  const url = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('a', '', 'Github');// todo - fix after finding new icon
  url.href = '';// todo - get github icon from different source
  const image = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('img', 'githubUrl');
  const footer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('a', 'footer');
  footer.href = 'https:github.com/KKeyfun';
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(footer, image);
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(footerContainer, [footer, url]);
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelector('body'), [modalBg, headerContainer, sidebarContainer, contentContainer, footerContainer]);
}

function createAddTaskModal() {
  const addTaskModal = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'addTaskModal');
  const newTaskForm = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('form', 'newTaskForm');

  const uList = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('ul');

  const listItemA = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const newTaskHeader = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', ['header', 'newTaskHeader'], 'New Task');
  //   const newTaskCancelButton = makeElement('button', 'newTaskCancelButton', 'Cancel');
  const newTaskCancelButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'modalCornerButton', 'Cancel');
  newTaskCancelButton.addEventListener('click', () => {
    closeModal();// import from displaycontroller
  });
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemA, [newTaskHeader, newTaskCancelButton]);

  const listItemB = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const newTaskName = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('input');
  newTaskName.setAttribute('type', 'text');
  const newTaskNameLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('label', 'label', 'Task Name: ');
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemB, [newTaskNameLabel, newTaskName]);

  const listItemC = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const listSelectLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('label', 'label', 'List: ');
  const listSelectDropdown = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('select', 'listSelectDropdown');// dynamically add lists later
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemC, [listSelectLabel, listSelectDropdown]);

  const listItemD = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const newTaskDescriptionLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('label', 'label', 'Description: ');
  const newTaskDescription = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('textarea');// todo - should be textarea
  newTaskDescription.setAttribute('rows', '3');
  //   newTaskDescription
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemD, [newTaskDescriptionLabel, newTaskDescription]);

  const listItemE = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const newTaskDueDateLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('label', 'label', 'Due Date: ');
  const newTaskDueDate = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('input');// todo - calendar widget
  //   newTaskDescription.setAttribute('type', 'text');
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemE, [newTaskDueDateLabel, newTaskDueDate]);

  const listItemF = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const newTaskPriorityLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('label', 'label', 'Task Priority: ');
  const newTaskPriority = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('select');
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(newTaskPriority, [(0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('option', '', 'Low'), (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('option', '', 'Moderate'), (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('option', '', 'High')]);
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemF, [newTaskPriorityLabel, newTaskPriority]);

  const listItemG = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const newTaskAddButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'newTaskAddButton', 'Add Task');
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemG, newTaskAddButton);

  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(uList, [listItemA, listItemB, listItemC, listItemD, listItemE, listItemF, listItemG]);
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(newTaskForm, uList);

  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(addTaskModal, [newTaskForm]);
  return addTaskModal;
}

function createEditTaskModal() {
  // todo - all buttons need override
  const editTaskModal = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'editTaskModal');// may need a wrapper
  const editTaskForm = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('form', 'editTaskForm');

  const uList = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('ul');

  const listItemA = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const editTaskHeader = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', ['header', 'editTaskHeader'], 'Edit Task');
  const deleteTaskButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'modalCornerButton', 'Delete Task');// todo - garbage bin icon
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemA, [editTaskHeader, deleteTaskButton]);

  // TODO, this needs to go into task list
  const listItemB = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const editTaskTitleLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('label', 'label', 'Task Title: ');
  const editTaskTitle = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('input', 'editTaskTitle');// todo - needs to know which task it's editing, this might need to go into the task functions
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemB, [editTaskTitleLabel, editTaskTitle]);

  const listItemC = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const editTaskDescriptionLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('label', 'label', 'Task Description: ');
  const editTaskDescription = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('input', 'editTaskDescription');
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemC, [editTaskDescriptionLabel, editTaskDescription]);

  const listItemD = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const editDueDateLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('label', 'label', 'Due Date: ');
  const editDueDate = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('input', 'editDueDate');// todo - calendar widget
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemD, [editDueDateLabel, editDueDate]);

  const listItemE = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const editPriorityLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('label', 'label', 'Priority: ');
  const editPriority = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('select');
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(editPriority, [(0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('option', '', 'Low'), (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('option', '', 'Moderate'), (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('option', '', 'High')]);
  // todo - change default value
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemE, [editPriorityLabel, editPriority]);

  const listItemF = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const saveEdit = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'saveEdit', 'Save Changes');// todo - Save icon
  const cancelEdit = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'cancelEdit', 'Cancel');
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemF, [saveEdit, cancelEdit]);

  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(uList, [listItemA, listItemB, listItemC, listItemD, listItemE, listItemF]);
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(editTaskForm, uList);
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(editTaskModal, [editTaskForm]);

  return editTaskModal;
}

function createInfoModal() {

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);


/***/ }),

/***/ "./src/functions/listFunctions.js":
/*!****************************************!*\
  !*** ./src/functions/listFunctions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeList": () => (/* binding */ activeList),
/* harmony export */   "lists": () => (/* binding */ lists),
/* harmony export */   "newList": () => (/* binding */ newList)
/* harmony export */ });
/* harmony import */ var _makeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeElement */ "./src/functions/makeElement.js");
/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./append */ "./src/functions/append.js");



let lists = [];
let activeList = null;
let addingList = false;

function createList(listName) {
  const tasks = [];
  return { listName, tasks };
  // should be pushed to a global lists array
}

function modifyListName(list) {
  const listName = list.children[0].children[0].value;
  // should hide the original stuff
  // list.children[1].style.display = 'none';
  // list.children[2].style.display = 'none';

  // hide the text field then redisplay the rest
  const previousValue = list.children[1].textContent;
  list.children[1].textContent = listName;
  list.children[1].style.display = 'block';
  list.children[2].style.display = 'flex';
  list.children[0].style.display = 'none';

  // let textField = list.children[0];
  // textField.style.display = 'flex';
  // let temp = lists.filter(elem => elem.name !== list.textContent);
  // finds list in the list array to edit the name
  // temp[0].taskName = listName;
  const index = lists.findIndex((elem) => elem.listName === previousValue);
  lists[index].listName = listName;
  // change to a text field
}

function deleteList(list) {
  lists = lists.filter((elem) => elem.listName !== list.children[1].textContent);

  // TODO adjust task display if active list is deleted
  list.parentElement.removeChild(list);
}

// adds a new list with edit + delete buttons to the sidebar
const addList = (listName, container) => {
  const listItem = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', null, listName);
  lists.push(createList(listName));

  const buttonOverlay = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'buttonOverlay');
  const editButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'editButton', 'edit');
  const deleteButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'deleteButton', 'del');

  editButton.addEventListener('click', () => { // shows text field to edit list name, hides label and save/delete buttons
    buttonOverlay.style.display = 'none';
    listItem.style.display = 'none';
    container.children[0].style.display = 'flex';
  });
  deleteButton.addEventListener('click', () => {
    deleteList(container);
  });

  (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(buttonOverlay, [editButton, deleteButton]);
  (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(container, [listItem, buttonOverlay]);
  activeList = lists[lists.length - 1];
};

function newList() { // Creates a text field to create a new list
  if (!addingList) {
    addingList = true;
    const sidebar = document.querySelector('.sidebar');
    const sidebarItemContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'sidebarItemContainer');

    // add functionality
    const listNameContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'listNameContainer');
    const listName = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', 'listNameField');
    listName.setAttribute('type', 'text');
    const saveListName = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'saveButton');
    (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(listNameContainer, [listName, saveListName]);
    (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(sidebarItemContainer, listNameContainer);

    sidebar.insertBefore(sidebarItemContainer, document.querySelector('.addListButton'));
    saveListName.addEventListener('click', function add() {
      addingList = false;
      let lName = 'New List';
      if (listName.value) {
        lName = listName.value;
      }
      addList(lName, sidebarItemContainer);
      console.log(lists);
      listNameContainer.style.display = 'none';
      // listName.style.display = 'none';
      // saveListName.style.display = 'none';
      // console.log(sidebarItemContainer)
      saveListName.removeEventListener('click', add);
      saveListName.addEventListener('click', () => { modifyListName(sidebarItemContainer); });
    });
  }
}

// function createModal(){//needs access to lists, creates tasks
//     const addTaskModal = makeElement('div', 'addTaskModal');
//     const newForm = makeElement('form', 'newTaskForm');
//     const listSelect = makeElement('select','listSelectDropdown');//when new list is created, add an option too this

//     const newTaskHeader = makeElement('div', 'newTaskHeader', 'New Task');
//     const newTaskName = makeElement('input');
//     newTaskName.setAttribute('type', 'text');
//     const newTaskDescription = makeElement('input');
//     newTaskDescription.setAttribute('type', 'text');
//     const newTaskPriority = makeElement('select');
//     append(newTaskPriority, [makeElement('option', '', 'High'), makeElement('option', '', 'Moderate'), makeElement('option', '', 'Low')]);

//     const editTaskModal = makeElement('div', 'editTaskModal');
//     const modalContainer = document.querySelector('.modalContainer');
//     const modalBg = document.querySelector('.modalBg');
//     append(modalContainer, [addTaskModal, editTaskModal]);
//     append(modalBg, modalContainer);
// }




/***/ }),

/***/ "./src/functions/makeElement.js":
/*!**************************************!*\
  !*** ./src/functions/makeElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function makeElement(type, className, content) {
  const elem = document.createElement(type);
  if (className) {
    if (typeof (className) === 'object') {
      className.forEach((el) => {
        elem.classList.add(el);
      });
    } else { elem.classList.add(className); }
  }
  if (content) {
    elem.textContent = content;
  }
  return elem;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeElement);


/***/ }),

/***/ "./src/Inter-Medium.woff":
/*!*******************************!*\
  !*** ./src/Inter-Medium.woff ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9053572c46aeb4b16caa.woff";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _functions_initialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/initialize */ "./src/functions/initialize.js");



(0,_functions_initialize__WEBPACK_IMPORTED_MODULE_1__["default"])();
// todos should be dynamically created objects

// title, description, duedate,priority minimum

// projects / separate lists todos

// modules
// list management

// edit task module, gets task module

// list controller, gets todolist, calls update display

// edit/create task should be a composition of some sort

// priority sort should be a thing

// switch controller

// maybe a button handler?

// modal controller, abstracts modal functions

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDNEI7O0FBRWpELGlFQUFXO0FBQ1g7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvYXBwZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9pbml0aWFsaXplLmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvbGlzdEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL21ha2VFbGVtZW50LmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL0ludGVyLU1lZGl1bS53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXIgbWVkaXVtJztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICBmb250LWZhbWlseTogJ0ludGVyIG1lZGl1bSc7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnlDb2xvcjojZDY1ZTc4O1xcbiAgICAtLWxpZ2h0Q29sb3I6I2ZmOGZhNztcXG4gICAgLS1kYXJrQ29sb3I6I2ExMmQ0YztcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heCg2ZW0sMTUlKSBhdXRvO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uc2lkZWJhciBpbnB1dCB7XFxuICAgIC8qIHotaW5kZXg6IDE7ICovXFxufVxcblxcbi5tb2RhbEJnIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xcbiAgICBwb3NpdGlvbjpmaXhlZDtcXG4gICAgei1pbmRleDogMztcXG4gICAgXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGhlaWdodDogMTAwZHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHdpZHRoOiAxMDBkdnc7XFxuXFxufVxcblxcbi5tb2RhbENvbnRhaW5lciB7XFxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIHBhZGRpbmc6IDJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG5saSBpbnB1dCxsaSB0ZXh0YXJlYXtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmxpOmxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxubGk6bGFzdC1jaGlsZCBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAuMjVlbSAuNzVlbTtcXG4gICAgbWFyZ2luOiAuNWVtO1xcbn1cXG5cXG4ubmV3VGFza0hlYWRlciwuZWRpdFRhc2tIZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgLyogcGFkZGluZzogLjI1ZW0gMDsgKi9cXG59XFxuXFxuLmFkZFRhc2tNb2RhbCwuZWRpdFRhc2tNb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIC5uZXdUYXNrQ2FuY2VsQnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6MS41ZW07XFxuICAgIHJpZ2h0OiAyZW07XFxuICAgIHBhZGRpbmc6IC4yZW0gLjVlbTtcXG59ICovXFxuXFxuLm1vZGFsQ29ybmVyQnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6MS41ZW07XFxuICAgIHJpZ2h0OiAyZW07XFxuICAgIHBhZGRpbmc6IC4yZW0gLjVlbTtcXG59XFxuXFxuLm1vZGFsQmcgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6MWVtO1xcbn1cXG5cXG4ubGlzdE5hbWVDb250YWluZXIsIC5hZGRMaXN0QnV0dG9ue1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmhlYWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQ29sb3IpO1xcbn1cXG5cXG4ucGFnZUhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcblxcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIG1pbi13aWR0aDogMTUwcHg7XFxuICAgIHBhZGRpbmc6IC41ZW0gMDtcXG59XFxuXFxuLnNpZGViYXJDb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodENvbG9yKTtcXG59XFxuXFxuLnNpZGViYXJIZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogLjVlbSAwO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDouNWVtO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodENvbG9yKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhciBsaSB7XFxuICAgIHBhZGRpbmc6IC43NWVtO1xcbn1cXG5cXG4uc2lkZWJhckl0ZW1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC4yNWVtO1xcblxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zaWRlYmFySXRlbUNvbnRhaW5lciBkaXY6Zmlyc3QtY2hpbGR7XFxuICAgIG1heC13aWR0aDogbWF4KDgwcHgsOTAlKTtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4ubGlzdE5hbWVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC4yNWVtO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDouM3JlbTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLmxpc3ROYW1lRmllbGQge1xcbiAgICAvKiBtYXgtd2lkdGg6IDgyJTsgKi9cXG59XFxuXFxuLnNpZGViYXJJdGVtQ29udGFpbmVyIC5idXR0b25PdmVybGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDo1JTtcXG5cXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uc2lkZWJhckl0ZW1Db250YWluZXI6aG92ZXIgLmJ1dHRvbk92ZXJsYXkge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uc2lkZWJhciBidXR0b24ge1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICBtaW4td2lkdGg6IDJlbTtcXG4gICAgaGVpZ2h0OiAyZW07XFxufVxcblxcbi5zaWRlYmFyIC5hZGRMaXN0QnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogLjI1ZW07XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbiAgICB3aWR0aDogNWVtO1xcbiAgICBtYXJnaW4tdG9wOiAuN2VtO1xcbn1cXG5cXG4uYWRkTGlzdEJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhciAuZWRpdEJ1dHRvbiB7XFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cXG59XFxuXFxuLnNpZGViYXIgLmRlbGV0ZUJ1dHRvbiB7XFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogY2FsYygxMDAlIC0gMmVtKTsgKi9cXG4gICAgbWFyZ2luLWxlZnQ6IC4zZW07XFxufVxcblxcbi5jb250ZW50Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW07ICovXFxuICAgIGdyaWQtYXV0by1yb3dzOiAycmVtO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7ICovXFxufVxcblxcbi5jb250ZW50SGVhZGVyIHtcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG59XFxuXFxuLmNoZWNrbGlzdENvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWRkVGFza0J1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIHBhZGRpbmc6IDVyZW07ICovXFxuICAgIGhlaWdodDozLjVyZW07XFxuICAgIHdpZHRoOjMuNXJlbTtcXG4gICAgLyogbWFyZ2luOiA5MCUgNSUgNSUgYXV0bzsgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206NSU7XFxuICAgIHJpZ2h0OjN2bWluO1xcbiAgICAvKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xcbiAgICAvKiBtYXJnaW46YXV0bzsgKi9cXG59XFxuXFxuLmZvb3RlckNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQiw0Q0FBK0I7QUFDbkM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUzs7SUFFVCwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLFVBQVU7O0lBRVYsYUFBYTtJQUNiLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBOzs7OztHQUtHOztBQUVIO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxpQkFBaUI7O0lBRWpCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGNBQWM7O0lBRWQsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7O0lBRWxCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFROztJQUVSLG1DQUFtQztJQUNuQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVOztJQUVWLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVOztJQUVWLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTs7SUFFYixrQkFBa0I7SUFDbEIsUUFBUTs7SUFFUixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUNBQXFDO0lBQ3JDLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0k7NkJBQ3lCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCOztJQUVqQixrQkFBa0I7O0lBRWxCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlciBtZWRpdW0nO1xcbiAgICBzcmM6IHVybCgnLi9JbnRlci1NZWRpdW0ud29mZicpO1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcblxcbiAgICBmb250LWZhbWlseTogJ0ludGVyIG1lZGl1bSc7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXByaW1hcnlDb2xvcjojZDY1ZTc4O1xcbiAgICAtLWxpZ2h0Q29sb3I6I2ZmOGZhNztcXG4gICAgLS1kYXJrQ29sb3I6I2ExMmQ0YztcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heCg2ZW0sMTUlKSBhdXRvO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uc2lkZWJhciBpbnB1dCB7XFxuICAgIC8qIHotaW5kZXg6IDE7ICovXFxufVxcblxcbi5tb2RhbEJnIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xcbiAgICBwb3NpdGlvbjpmaXhlZDtcXG4gICAgei1pbmRleDogMztcXG4gICAgXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGhlaWdodDogMTAwZHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHdpZHRoOiAxMDBkdnc7XFxuXFxufVxcblxcbi5tb2RhbENvbnRhaW5lciB7XFxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIHBhZGRpbmc6IDJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG5saSBpbnB1dCxsaSB0ZXh0YXJlYXtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmxpOmxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxubGk6bGFzdC1jaGlsZCBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAuMjVlbSAuNzVlbTtcXG4gICAgbWFyZ2luOiAuNWVtO1xcbn1cXG5cXG4ubmV3VGFza0hlYWRlciwuZWRpdFRhc2tIZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgLyogcGFkZGluZzogLjI1ZW0gMDsgKi9cXG59XFxuXFxuLmFkZFRhc2tNb2RhbCwuZWRpdFRhc2tNb2RhbCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIC5uZXdUYXNrQ2FuY2VsQnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6MS41ZW07XFxuICAgIHJpZ2h0OiAyZW07XFxuICAgIHBhZGRpbmc6IC4yZW0gLjVlbTtcXG59ICovXFxuXFxuLm1vZGFsQ29ybmVyQnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6MS41ZW07XFxuICAgIHJpZ2h0OiAyZW07XFxuICAgIHBhZGRpbmc6IC4yZW0gLjVlbTtcXG59XFxuXFxuLm1vZGFsQmcgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6MWVtO1xcbn1cXG5cXG4ubGlzdE5hbWVDb250YWluZXIsIC5hZGRMaXN0QnV0dG9ue1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmhlYWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQ29sb3IpO1xcbn1cXG5cXG4ucGFnZUhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcblxcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIG1pbi13aWR0aDogMTUwcHg7XFxuICAgIHBhZGRpbmc6IC41ZW0gMDtcXG59XFxuXFxuLnNpZGViYXJDb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodENvbG9yKTtcXG59XFxuXFxuLnNpZGViYXJIZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogLjVlbSAwO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDouNWVtO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodENvbG9yKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhciBsaSB7XFxuICAgIHBhZGRpbmc6IC43NWVtO1xcbn1cXG5cXG4uc2lkZWJhckl0ZW1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC4yNWVtO1xcblxcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zaWRlYmFySXRlbUNvbnRhaW5lciBkaXY6Zmlyc3QtY2hpbGR7XFxuICAgIG1heC13aWR0aDogbWF4KDgwcHgsOTAlKTtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4ubGlzdE5hbWVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC4yNWVtO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDouM3JlbTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLmxpc3ROYW1lRmllbGQge1xcbiAgICAvKiBtYXgtd2lkdGg6IDgyJTsgKi9cXG59XFxuXFxuLnNpZGViYXJJdGVtQ29udGFpbmVyIC5idXR0b25PdmVybGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDo1JTtcXG5cXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uc2lkZWJhckl0ZW1Db250YWluZXI6aG92ZXIgLmJ1dHRvbk92ZXJsYXkge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uc2lkZWJhciBidXR0b24ge1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICBtaW4td2lkdGg6IDJlbTtcXG4gICAgaGVpZ2h0OiAyZW07XFxufVxcblxcbi5zaWRlYmFyIC5hZGRMaXN0QnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogLjI1ZW07XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbiAgICB3aWR0aDogNWVtO1xcbiAgICBtYXJnaW4tdG9wOiAuN2VtO1xcbn1cXG5cXG4uYWRkTGlzdEJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhciAuZWRpdEJ1dHRvbiB7XFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cXG59XFxuXFxuLnNpZGViYXIgLmRlbGV0ZUJ1dHRvbiB7XFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogY2FsYygxMDAlIC0gMmVtKTsgKi9cXG4gICAgbWFyZ2luLWxlZnQ6IC4zZW07XFxufVxcblxcbi5jb250ZW50Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IDNyZW07ICovXFxuICAgIGdyaWQtYXV0by1yb3dzOiAycmVtO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7ICovXFxufVxcblxcbi5jb250ZW50SGVhZGVyIHtcXG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cXG59XFxuXFxuLmNoZWNrbGlzdENvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWRkVGFza0J1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIC8qIHBhZGRpbmc6IDVyZW07ICovXFxuICAgIGhlaWdodDozLjVyZW07XFxuICAgIHdpZHRoOjMuNXJlbTtcXG4gICAgLyogbWFyZ2luOiA5MCUgNSUgNSUgYXV0bzsgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206NSU7XFxuICAgIHJpZ2h0OjN2bWluO1xcbiAgICAvKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xcbiAgICAvKiBtYXJnaW46YXV0bzsgKi9cXG59XFxuXFxuLmZvb3RlckNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGFwcGVuZChwYXJlbnQsIGNoaWxkKSB7XG4gIGlmIChjaGlsZC5sZW5ndGgpIHtcbiAgICBjaGlsZC5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBlbmQ7XG4iLCIvLyBkaXNwbGF5cyB0YXNrcyBhY2NvcmRpbmcgdG8gdGhlIG1hdGNoaW5nIGxpc3Rcbi8vIGltcG9ydCBsaXN0c1xuZnVuY3Rpb24gZGlzcGxheShmb3JtKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbEJnJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgaWYgKGZvcm0gPT09ICdhZGQnKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2tNb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIH0gZWxzZSBpZiAoZm9ybSA9PT0gJ2VkaXQnKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRUYXNrTW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICB9XG4gIC8vIG1vZGFsY29udGFpbmVyIGRpc3BsYXk6ZmxleFxufVxuXG5mdW5jdGlvbiBjaGFuZ2VBY3RpdmVMaXN0KCkge1xuXG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAvLyBhY3RpdmVNb2RhbFxufVxuXG5leHBvcnQgeyBkaXNwbGF5LCBjaGFuZ2VBY3RpdmVMaXN0LCBjbG9zZU1vZGFsIH07XG4iLCJpbXBvcnQgYXBwZW5kIGZyb20gJy4vYXBwZW5kJztcbmltcG9ydCBtYWtlRWxlbWVudCBmcm9tICcuL21ha2VFbGVtZW50JztcbmltcG9ydCB7IG5ld0xpc3QgfSBmcm9tICcuL2xpc3RGdW5jdGlvbnMnO1xuaW1wb3J0IHsgZGlzcGxheSB9IGZyb20gJy4vZGlzcGxheUNvbnRyb2xsZXInO1xuXG5mdW5jdGlvbiBpbml0aWFsTG9hZCgpIHtcbiAgLy8gdG9kbyAtIGZpbmlzaCBmdW5jdGlvbmFsaXR5XG4gIGNvbnN0IG1vZGFsQmcgPSBtYWtlRWxlbWVudCgnZGl2JywgJ21vZGFsQmcnKTtcbiAgLy8gdG9kbyAtIHN0b3AgcHJvcG9nYXRpb24gd2hlbiBoaWRpbmcgbW9kYWwgYW5kIGJnXG4gIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsICdtb2RhbENvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGFkZE1vZGFsID0gY3JlYXRlQWRkVGFza01vZGFsKCk7XG4gIGNvbnN0IGVkaXRNb2RhbCA9IGNyZWF0ZUVkaXRUYXNrTW9kYWwoKTtcblxuICBhcHBlbmQobW9kYWxDb250YWluZXIsIFthZGRNb2RhbCwgZWRpdE1vZGFsXSk7XG4gIGFwcGVuZChtb2RhbEJnLCBtb2RhbENvbnRhaW5lcik7XG5cbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsICdoZWFkZXJDb250YWluZXInKTtcbiAgY29uc3QgaGVhZGVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIFsnaGVhZGVyJywgJ3BhZ2VIZWFkZXInXSwgJ1RvIERvJyk7XG4gIGFwcGVuZChoZWFkZXJDb250YWluZXIsIGhlYWRlcik7XG5cbiAgY29uc3Qgc2lkZWJhckNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCAnc2lkZWJhckNvbnRhaW5lcicpO1xuICBjb25zdCBzaWRlYmFySGVhZGVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIFsnaGVhZGVyJywgJ3NpZGViYXJIZWFkZXInXSwgJ1lvdXIgTGlzdHMnKTtcbiAgY29uc3Qgc2lkZWJhciA9IG1ha2VFbGVtZW50KCd1bCcsICdzaWRlYmFyJyk7XG4gIGNvbnN0IGFkZExpc3RCdXR0b24gPSBtYWtlRWxlbWVudCgnYnV0dG9uJywgJ2FkZExpc3RCdXR0b24nLCAnKycpO1xuXG4gIGFkZExpc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdMaXN0KTtcblxuICBhcHBlbmQoc2lkZWJhciwgYWRkTGlzdEJ1dHRvbik7XG4gIGFwcGVuZChzaWRlYmFyQ29udGFpbmVyLCBbc2lkZWJhckhlYWRlciwgc2lkZWJhcl0pO1xuXG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgJ2NvbnRlbnRDb250YWluZXInKTtcblxuICBjb25zdCBjb250ZW50SGVhZGVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIFsnaGVhZGVyJywgJ2NvbnRlbnRIZWFkZXInXSwgJ0xJU1QgTkFNRSBIRVJFJyk7Ly8gdG9kbyAtIGNoYW5nZSBuYW1lIHRvIGN1cnJlbnQgbGlzdCdzIG5hbWVcblxuICBjb25zdCBjb250ZW50ID0gbWFrZUVsZW1lbnQoJ2RpdicsICdjb250ZW50Jyk7XG4gIGNvbnN0IGNoZWNrbGlzdENvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCAnY2hlY2tsaXN0Q29udGFpbmVyJyk7XG4gIGNvbnN0IGNoZWNrbGlzdCA9IG1ha2VFbGVtZW50KCdvbCcsICdjaGVja2xpc3QnKTtcblxuICBjb25zdCBuZXdUYXNrQnV0dG9uID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsICdhZGRUYXNrQnV0dG9uJywgJysnKTtcbiAgbmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgZGlzcGxheSgnYWRkJyk7IH0pO1xuXG4gIGFwcGVuZChjaGVja2xpc3RDb250YWluZXIsIGNoZWNrbGlzdCk7XG4gIGFwcGVuZChjb250ZW50LCBjaGVja2xpc3RDb250YWluZXIpO1xuICBhcHBlbmQoY29udGVudENvbnRhaW5lciwgW2NvbnRlbnRIZWFkZXIsIGNvbnRlbnQsIG5ld1Rhc2tCdXR0b25dKTtcbiAgLy8gY2hlY2tsaXN0aXRlbXNcblxuICBjb25zdCBmb290ZXJDb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgJ2Zvb3RlckNvbnRhaW5lcicpO1xuICBjb25zdCB1cmwgPSBtYWtlRWxlbWVudCgnYScsICcnLCAnR2l0aHViJyk7Ly8gdG9kbyAtIGZpeCBhZnRlciBmaW5kaW5nIG5ldyBpY29uXG4gIHVybC5ocmVmID0gJyc7Ly8gdG9kbyAtIGdldCBnaXRodWIgaWNvbiBmcm9tIGRpZmZlcmVudCBzb3VyY2VcbiAgY29uc3QgaW1hZ2UgPSBtYWtlRWxlbWVudCgnaW1nJywgJ2dpdGh1YlVybCcpO1xuICBjb25zdCBmb290ZXIgPSBtYWtlRWxlbWVudCgnYScsICdmb290ZXInKTtcbiAgZm9vdGVyLmhyZWYgPSAnaHR0cHM6Z2l0aHViLmNvbS9LS2V5ZnVuJztcbiAgYXBwZW5kKGZvb3RlciwgaW1hZ2UpO1xuICBhcHBlbmQoZm9vdGVyQ29udGFpbmVyLCBbZm9vdGVyLCB1cmxdKTtcbiAgYXBwZW5kKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgW21vZGFsQmcsIGhlYWRlckNvbnRhaW5lciwgc2lkZWJhckNvbnRhaW5lciwgY29udGVudENvbnRhaW5lciwgZm9vdGVyQ29udGFpbmVyXSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZFRhc2tNb2RhbCgpIHtcbiAgY29uc3QgYWRkVGFza01vZGFsID0gbWFrZUVsZW1lbnQoJ2RpdicsICdhZGRUYXNrTW9kYWwnKTtcbiAgY29uc3QgbmV3VGFza0Zvcm0gPSBtYWtlRWxlbWVudCgnZm9ybScsICduZXdUYXNrRm9ybScpO1xuXG4gIGNvbnN0IHVMaXN0ID0gbWFrZUVsZW1lbnQoJ3VsJyk7XG5cbiAgY29uc3QgbGlzdEl0ZW1BID0gbWFrZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IG5ld1Rhc2tIZWFkZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgWydoZWFkZXInLCAnbmV3VGFza0hlYWRlciddLCAnTmV3IFRhc2snKTtcbiAgLy8gICBjb25zdCBuZXdUYXNrQ2FuY2VsQnV0dG9uID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsICduZXdUYXNrQ2FuY2VsQnV0dG9uJywgJ0NhbmNlbCcpO1xuICBjb25zdCBuZXdUYXNrQ2FuY2VsQnV0dG9uID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsICdtb2RhbENvcm5lckJ1dHRvbicsICdDYW5jZWwnKTtcbiAgbmV3VGFza0NhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbG9zZU1vZGFsKCk7Ly8gaW1wb3J0IGZyb20gZGlzcGxheWNvbnRyb2xsZXJcbiAgfSk7XG4gIGFwcGVuZChsaXN0SXRlbUEsIFtuZXdUYXNrSGVhZGVyLCBuZXdUYXNrQ2FuY2VsQnV0dG9uXSk7XG5cbiAgY29uc3QgbGlzdEl0ZW1CID0gbWFrZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IG5ld1Rhc2tOYW1lID0gbWFrZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG5ld1Rhc2tOYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGNvbnN0IG5ld1Rhc2tOYW1lTGFiZWwgPSBtYWtlRWxlbWVudCgnbGFiZWwnLCAnbGFiZWwnLCAnVGFzayBOYW1lOiAnKTtcbiAgYXBwZW5kKGxpc3RJdGVtQiwgW25ld1Rhc2tOYW1lTGFiZWwsIG5ld1Rhc2tOYW1lXSk7XG5cbiAgY29uc3QgbGlzdEl0ZW1DID0gbWFrZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGxpc3RTZWxlY3RMYWJlbCA9IG1ha2VFbGVtZW50KCdsYWJlbCcsICdsYWJlbCcsICdMaXN0OiAnKTtcbiAgY29uc3QgbGlzdFNlbGVjdERyb3Bkb3duID0gbWFrZUVsZW1lbnQoJ3NlbGVjdCcsICdsaXN0U2VsZWN0RHJvcGRvd24nKTsvLyBkeW5hbWljYWxseSBhZGQgbGlzdHMgbGF0ZXJcbiAgYXBwZW5kKGxpc3RJdGVtQywgW2xpc3RTZWxlY3RMYWJlbCwgbGlzdFNlbGVjdERyb3Bkb3duXSk7XG5cbiAgY29uc3QgbGlzdEl0ZW1EID0gbWFrZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbkxhYmVsID0gbWFrZUVsZW1lbnQoJ2xhYmVsJywgJ2xhYmVsJywgJ0Rlc2NyaXB0aW9uOiAnKTtcbiAgY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID0gbWFrZUVsZW1lbnQoJ3RleHRhcmVhJyk7Ly8gdG9kbyAtIHNob3VsZCBiZSB0ZXh0YXJlYVxuICBuZXdUYXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdyb3dzJywgJzMnKTtcbiAgLy8gICBuZXdUYXNrRGVzY3JpcHRpb25cbiAgYXBwZW5kKGxpc3RJdGVtRCwgW25ld1Rhc2tEZXNjcmlwdGlvbkxhYmVsLCBuZXdUYXNrRGVzY3JpcHRpb25dKTtcblxuICBjb25zdCBsaXN0SXRlbUUgPSBtYWtlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbmV3VGFza0R1ZURhdGVMYWJlbCA9IG1ha2VFbGVtZW50KCdsYWJlbCcsICdsYWJlbCcsICdEdWUgRGF0ZTogJyk7XG4gIGNvbnN0IG5ld1Rhc2tEdWVEYXRlID0gbWFrZUVsZW1lbnQoJ2lucHV0Jyk7Ly8gdG9kbyAtIGNhbGVuZGFyIHdpZGdldFxuICAvLyAgIG5ld1Rhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBhcHBlbmQobGlzdEl0ZW1FLCBbbmV3VGFza0R1ZURhdGVMYWJlbCwgbmV3VGFza0R1ZURhdGVdKTtcblxuICBjb25zdCBsaXN0SXRlbUYgPSBtYWtlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbmV3VGFza1ByaW9yaXR5TGFiZWwgPSBtYWtlRWxlbWVudCgnbGFiZWwnLCAnbGFiZWwnLCAnVGFzayBQcmlvcml0eTogJyk7XG4gIGNvbnN0IG5ld1Rhc2tQcmlvcml0eSA9IG1ha2VFbGVtZW50KCdzZWxlY3QnKTtcbiAgYXBwZW5kKG5ld1Rhc2tQcmlvcml0eSwgW21ha2VFbGVtZW50KCdvcHRpb24nLCAnJywgJ0xvdycpLCBtYWtlRWxlbWVudCgnb3B0aW9uJywgJycsICdNb2RlcmF0ZScpLCBtYWtlRWxlbWVudCgnb3B0aW9uJywgJycsICdIaWdoJyldKTtcbiAgYXBwZW5kKGxpc3RJdGVtRiwgW25ld1Rhc2tQcmlvcml0eUxhYmVsLCBuZXdUYXNrUHJpb3JpdHldKTtcblxuICBjb25zdCBsaXN0SXRlbUcgPSBtYWtlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbmV3VGFza0FkZEJ1dHRvbiA9IG1ha2VFbGVtZW50KCdidXR0b24nLCAnbmV3VGFza0FkZEJ1dHRvbicsICdBZGQgVGFzaycpO1xuICBhcHBlbmQobGlzdEl0ZW1HLCBuZXdUYXNrQWRkQnV0dG9uKTtcblxuICBhcHBlbmQodUxpc3QsIFtsaXN0SXRlbUEsIGxpc3RJdGVtQiwgbGlzdEl0ZW1DLCBsaXN0SXRlbUQsIGxpc3RJdGVtRSwgbGlzdEl0ZW1GLCBsaXN0SXRlbUddKTtcbiAgYXBwZW5kKG5ld1Rhc2tGb3JtLCB1TGlzdCk7XG5cbiAgYXBwZW5kKGFkZFRhc2tNb2RhbCwgW25ld1Rhc2tGb3JtXSk7XG4gIHJldHVybiBhZGRUYXNrTW9kYWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVkaXRUYXNrTW9kYWwoKSB7XG4gIC8vIHRvZG8gLSBhbGwgYnV0dG9ucyBuZWVkIG92ZXJyaWRlXG4gIGNvbnN0IGVkaXRUYXNrTW9kYWwgPSBtYWtlRWxlbWVudCgnZGl2JywgJ2VkaXRUYXNrTW9kYWwnKTsvLyBtYXkgbmVlZCBhIHdyYXBwZXJcbiAgY29uc3QgZWRpdFRhc2tGb3JtID0gbWFrZUVsZW1lbnQoJ2Zvcm0nLCAnZWRpdFRhc2tGb3JtJyk7XG5cbiAgY29uc3QgdUxpc3QgPSBtYWtlRWxlbWVudCgndWwnKTtcblxuICBjb25zdCBsaXN0SXRlbUEgPSBtYWtlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgZWRpdFRhc2tIZWFkZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgWydoZWFkZXInLCAnZWRpdFRhc2tIZWFkZXInXSwgJ0VkaXQgVGFzaycpO1xuICBjb25zdCBkZWxldGVUYXNrQnV0dG9uID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsICdtb2RhbENvcm5lckJ1dHRvbicsICdEZWxldGUgVGFzaycpOy8vIHRvZG8gLSBnYXJiYWdlIGJpbiBpY29uXG4gIGFwcGVuZChsaXN0SXRlbUEsIFtlZGl0VGFza0hlYWRlciwgZGVsZXRlVGFza0J1dHRvbl0pO1xuXG4gIC8vIFRPRE8sIHRoaXMgbmVlZHMgdG8gZ28gaW50byB0YXNrIGxpc3RcbiAgY29uc3QgbGlzdEl0ZW1CID0gbWFrZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGVkaXRUYXNrVGl0bGVMYWJlbCA9IG1ha2VFbGVtZW50KCdsYWJlbCcsICdsYWJlbCcsICdUYXNrIFRpdGxlOiAnKTtcbiAgY29uc3QgZWRpdFRhc2tUaXRsZSA9IG1ha2VFbGVtZW50KCdpbnB1dCcsICdlZGl0VGFza1RpdGxlJyk7Ly8gdG9kbyAtIG5lZWRzIHRvIGtub3cgd2hpY2ggdGFzayBpdCdzIGVkaXRpbmcsIHRoaXMgbWlnaHQgbmVlZCB0byBnbyBpbnRvIHRoZSB0YXNrIGZ1bmN0aW9uc1xuICBhcHBlbmQobGlzdEl0ZW1CLCBbZWRpdFRhc2tUaXRsZUxhYmVsLCBlZGl0VGFza1RpdGxlXSk7XG5cbiAgY29uc3QgbGlzdEl0ZW1DID0gbWFrZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGVkaXRUYXNrRGVzY3JpcHRpb25MYWJlbCA9IG1ha2VFbGVtZW50KCdsYWJlbCcsICdsYWJlbCcsICdUYXNrIERlc2NyaXB0aW9uOiAnKTtcbiAgY29uc3QgZWRpdFRhc2tEZXNjcmlwdGlvbiA9IG1ha2VFbGVtZW50KCdpbnB1dCcsICdlZGl0VGFza0Rlc2NyaXB0aW9uJyk7XG4gIGFwcGVuZChsaXN0SXRlbUMsIFtlZGl0VGFza0Rlc2NyaXB0aW9uTGFiZWwsIGVkaXRUYXNrRGVzY3JpcHRpb25dKTtcblxuICBjb25zdCBsaXN0SXRlbUQgPSBtYWtlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgZWRpdER1ZURhdGVMYWJlbCA9IG1ha2VFbGVtZW50KCdsYWJlbCcsICdsYWJlbCcsICdEdWUgRGF0ZTogJyk7XG4gIGNvbnN0IGVkaXREdWVEYXRlID0gbWFrZUVsZW1lbnQoJ2lucHV0JywgJ2VkaXREdWVEYXRlJyk7Ly8gdG9kbyAtIGNhbGVuZGFyIHdpZGdldFxuICBhcHBlbmQobGlzdEl0ZW1ELCBbZWRpdER1ZURhdGVMYWJlbCwgZWRpdER1ZURhdGVdKTtcblxuICBjb25zdCBsaXN0SXRlbUUgPSBtYWtlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgZWRpdFByaW9yaXR5TGFiZWwgPSBtYWtlRWxlbWVudCgnbGFiZWwnLCAnbGFiZWwnLCAnUHJpb3JpdHk6ICcpO1xuICBjb25zdCBlZGl0UHJpb3JpdHkgPSBtYWtlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGFwcGVuZChlZGl0UHJpb3JpdHksIFttYWtlRWxlbWVudCgnb3B0aW9uJywgJycsICdMb3cnKSwgbWFrZUVsZW1lbnQoJ29wdGlvbicsICcnLCAnTW9kZXJhdGUnKSwgbWFrZUVsZW1lbnQoJ29wdGlvbicsICcnLCAnSGlnaCcpXSk7XG4gIC8vIHRvZG8gLSBjaGFuZ2UgZGVmYXVsdCB2YWx1ZVxuICBhcHBlbmQobGlzdEl0ZW1FLCBbZWRpdFByaW9yaXR5TGFiZWwsIGVkaXRQcmlvcml0eV0pO1xuXG4gIGNvbnN0IGxpc3RJdGVtRiA9IG1ha2VFbGVtZW50KCdsaScpO1xuICBjb25zdCBzYXZlRWRpdCA9IG1ha2VFbGVtZW50KCdidXR0b24nLCAnc2F2ZUVkaXQnLCAnU2F2ZSBDaGFuZ2VzJyk7Ly8gdG9kbyAtIFNhdmUgaWNvblxuICBjb25zdCBjYW5jZWxFZGl0ID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsICdjYW5jZWxFZGl0JywgJ0NhbmNlbCcpO1xuICBhcHBlbmQobGlzdEl0ZW1GLCBbc2F2ZUVkaXQsIGNhbmNlbEVkaXRdKTtcblxuICBhcHBlbmQodUxpc3QsIFtsaXN0SXRlbUEsIGxpc3RJdGVtQiwgbGlzdEl0ZW1DLCBsaXN0SXRlbUQsIGxpc3RJdGVtRSwgbGlzdEl0ZW1GXSk7XG4gIGFwcGVuZChlZGl0VGFza0Zvcm0sIHVMaXN0KTtcbiAgYXBwZW5kKGVkaXRUYXNrTW9kYWwsIFtlZGl0VGFza0Zvcm1dKTtcblxuICByZXR1cm4gZWRpdFRhc2tNb2RhbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mb01vZGFsKCkge1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxMb2FkO1xuIiwiaW1wb3J0IG1ha2VFbGVtZW50IGZyb20gJy4vbWFrZUVsZW1lbnQnO1xuaW1wb3J0IGFwcGVuZCBmcm9tICcuL2FwcGVuZCc7XG5cbmxldCBsaXN0cyA9IFtdO1xubGV0IGFjdGl2ZUxpc3QgPSBudWxsO1xubGV0IGFkZGluZ0xpc3QgPSBmYWxzZTtcblxuZnVuY3Rpb24gY3JlYXRlTGlzdChsaXN0TmFtZSkge1xuICBjb25zdCB0YXNrcyA9IFtdO1xuICByZXR1cm4geyBsaXN0TmFtZSwgdGFza3MgfTtcbiAgLy8gc2hvdWxkIGJlIHB1c2hlZCB0byBhIGdsb2JhbCBsaXN0cyBhcnJheVxufVxuXG5mdW5jdGlvbiBtb2RpZnlMaXN0TmFtZShsaXN0KSB7XG4gIGNvbnN0IGxpc3ROYW1lID0gbGlzdC5jaGlsZHJlblswXS5jaGlsZHJlblswXS52YWx1ZTtcbiAgLy8gc2hvdWxkIGhpZGUgdGhlIG9yaWdpbmFsIHN0dWZmXG4gIC8vIGxpc3QuY2hpbGRyZW5bMV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgLy8gbGlzdC5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIC8vIGhpZGUgdGhlIHRleHQgZmllbGQgdGhlbiByZWRpc3BsYXkgdGhlIHJlc3RcbiAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IGxpc3QuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XG4gIGxpc3QuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSBsaXN0TmFtZTtcbiAgbGlzdC5jaGlsZHJlblsxXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgbGlzdC5jaGlsZHJlblsyXS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBsaXN0LmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgLy8gbGV0IHRleHRGaWVsZCA9IGxpc3QuY2hpbGRyZW5bMF07XG4gIC8vIHRleHRGaWVsZC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAvLyBsZXQgdGVtcCA9IGxpc3RzLmZpbHRlcihlbGVtID0+IGVsZW0ubmFtZSAhPT0gbGlzdC50ZXh0Q29udGVudCk7XG4gIC8vIGZpbmRzIGxpc3QgaW4gdGhlIGxpc3QgYXJyYXkgdG8gZWRpdCB0aGUgbmFtZVxuICAvLyB0ZW1wWzBdLnRhc2tOYW1lID0gbGlzdE5hbWU7XG4gIGNvbnN0IGluZGV4ID0gbGlzdHMuZmluZEluZGV4KChlbGVtKSA9PiBlbGVtLmxpc3ROYW1lID09PSBwcmV2aW91c1ZhbHVlKTtcbiAgbGlzdHNbaW5kZXhdLmxpc3ROYW1lID0gbGlzdE5hbWU7XG4gIC8vIGNoYW5nZSB0byBhIHRleHQgZmllbGRcbn1cblxuZnVuY3Rpb24gZGVsZXRlTGlzdChsaXN0KSB7XG4gIGxpc3RzID0gbGlzdHMuZmlsdGVyKChlbGVtKSA9PiBlbGVtLmxpc3ROYW1lICE9PSBsaXN0LmNoaWxkcmVuWzFdLnRleHRDb250ZW50KTtcblxuICAvLyBUT0RPIGFkanVzdCB0YXNrIGRpc3BsYXkgaWYgYWN0aXZlIGxpc3QgaXMgZGVsZXRlZFxuICBsaXN0LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobGlzdCk7XG59XG5cbi8vIGFkZHMgYSBuZXcgbGlzdCB3aXRoIGVkaXQgKyBkZWxldGUgYnV0dG9ucyB0byB0aGUgc2lkZWJhclxuY29uc3QgYWRkTGlzdCA9IChsaXN0TmFtZSwgY29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGxpc3RJdGVtID0gbWFrZUVsZW1lbnQoJ2RpdicsIG51bGwsIGxpc3ROYW1lKTtcbiAgbGlzdHMucHVzaChjcmVhdGVMaXN0KGxpc3ROYW1lKSk7XG5cbiAgY29uc3QgYnV0dG9uT3ZlcmxheSA9IG1ha2VFbGVtZW50KCdkaXYnLCAnYnV0dG9uT3ZlcmxheScpO1xuICBjb25zdCBlZGl0QnV0dG9uID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsICdlZGl0QnV0dG9uJywgJ2VkaXQnKTtcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsICdkZWxldGVCdXR0b24nLCAnZGVsJyk7XG5cbiAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgLy8gc2hvd3MgdGV4dCBmaWVsZCB0byBlZGl0IGxpc3QgbmFtZSwgaGlkZXMgbGFiZWwgYW5kIHNhdmUvZGVsZXRlIGJ1dHRvbnNcbiAgICBidXR0b25PdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbGlzdEl0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjb250YWluZXIuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfSk7XG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkZWxldGVMaXN0KGNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIGFwcGVuZChidXR0b25PdmVybGF5LCBbZWRpdEJ1dHRvbiwgZGVsZXRlQnV0dG9uXSk7XG4gIGFwcGVuZChjb250YWluZXIsIFtsaXN0SXRlbSwgYnV0dG9uT3ZlcmxheV0pO1xuICBhY3RpdmVMaXN0ID0gbGlzdHNbbGlzdHMubGVuZ3RoIC0gMV07XG59O1xuXG5mdW5jdGlvbiBuZXdMaXN0KCkgeyAvLyBDcmVhdGVzIGEgdGV4dCBmaWVsZCB0byBjcmVhdGUgYSBuZXcgbGlzdFxuICBpZiAoIWFkZGluZ0xpc3QpIHtcbiAgICBhZGRpbmdMaXN0ID0gdHJ1ZTtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBjb25zdCBzaWRlYmFySXRlbUNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdsaScsICdzaWRlYmFySXRlbUNvbnRhaW5lcicpO1xuXG4gICAgLy8gYWRkIGZ1bmN0aW9uYWxpdHlcbiAgICBjb25zdCBsaXN0TmFtZUNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCAnbGlzdE5hbWVDb250YWluZXInKTtcbiAgICBjb25zdCBsaXN0TmFtZSA9IG1ha2VFbGVtZW50KCdpbnB1dCcsICdsaXN0TmFtZUZpZWxkJyk7XG4gICAgbGlzdE5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBjb25zdCBzYXZlTGlzdE5hbWUgPSBtYWtlRWxlbWVudCgnYnV0dG9uJywgJ3NhdmVCdXR0b24nKTtcbiAgICBhcHBlbmQobGlzdE5hbWVDb250YWluZXIsIFtsaXN0TmFtZSwgc2F2ZUxpc3ROYW1lXSk7XG4gICAgYXBwZW5kKHNpZGViYXJJdGVtQ29udGFpbmVyLCBsaXN0TmFtZUNvbnRhaW5lcik7XG5cbiAgICBzaWRlYmFyLmluc2VydEJlZm9yZShzaWRlYmFySXRlbUNvbnRhaW5lciwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZExpc3RCdXR0b24nKSk7XG4gICAgc2F2ZUxpc3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gYWRkKCkge1xuICAgICAgYWRkaW5nTGlzdCA9IGZhbHNlO1xuICAgICAgbGV0IGxOYW1lID0gJ05ldyBMaXN0JztcbiAgICAgIGlmIChsaXN0TmFtZS52YWx1ZSkge1xuICAgICAgICBsTmFtZSA9IGxpc3ROYW1lLnZhbHVlO1xuICAgICAgfVxuICAgICAgYWRkTGlzdChsTmFtZSwgc2lkZWJhckl0ZW1Db250YWluZXIpO1xuICAgICAgY29uc29sZS5sb2cobGlzdHMpO1xuICAgICAgbGlzdE5hbWVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIC8vIGxpc3ROYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAvLyBzYXZlTGlzdE5hbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIC8vIGNvbnNvbGUubG9nKHNpZGViYXJJdGVtQ29udGFpbmVyKVxuICAgICAgc2F2ZUxpc3ROYW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkKTtcbiAgICAgIHNhdmVMaXN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgbW9kaWZ5TGlzdE5hbWUoc2lkZWJhckl0ZW1Db250YWluZXIpOyB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBmdW5jdGlvbiBjcmVhdGVNb2RhbCgpey8vbmVlZHMgYWNjZXNzIHRvIGxpc3RzLCBjcmVhdGVzIHRhc2tzXG4vLyAgICAgY29uc3QgYWRkVGFza01vZGFsID0gbWFrZUVsZW1lbnQoJ2RpdicsICdhZGRUYXNrTW9kYWwnKTtcbi8vICAgICBjb25zdCBuZXdGb3JtID0gbWFrZUVsZW1lbnQoJ2Zvcm0nLCAnbmV3VGFza0Zvcm0nKTtcbi8vICAgICBjb25zdCBsaXN0U2VsZWN0ID0gbWFrZUVsZW1lbnQoJ3NlbGVjdCcsJ2xpc3RTZWxlY3REcm9wZG93bicpOy8vd2hlbiBuZXcgbGlzdCBpcyBjcmVhdGVkLCBhZGQgYW4gb3B0aW9uIHRvbyB0aGlzXG5cbi8vICAgICBjb25zdCBuZXdUYXNrSGVhZGVyID0gbWFrZUVsZW1lbnQoJ2RpdicsICduZXdUYXNrSGVhZGVyJywgJ05ldyBUYXNrJyk7XG4vLyAgICAgY29uc3QgbmV3VGFza05hbWUgPSBtYWtlRWxlbWVudCgnaW5wdXQnKTtcbi8vICAgICBuZXdUYXNrTmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuLy8gICAgIGNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IG1ha2VFbGVtZW50KCdpbnB1dCcpO1xuLy8gICAgIG5ld1Rhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuLy8gICAgIGNvbnN0IG5ld1Rhc2tQcmlvcml0eSA9IG1ha2VFbGVtZW50KCdzZWxlY3QnKTtcbi8vICAgICBhcHBlbmQobmV3VGFza1ByaW9yaXR5LCBbbWFrZUVsZW1lbnQoJ29wdGlvbicsICcnLCAnSGlnaCcpLCBtYWtlRWxlbWVudCgnb3B0aW9uJywgJycsICdNb2RlcmF0ZScpLCBtYWtlRWxlbWVudCgnb3B0aW9uJywgJycsICdMb3cnKV0pO1xuXG4vLyAgICAgY29uc3QgZWRpdFRhc2tNb2RhbCA9IG1ha2VFbGVtZW50KCdkaXYnLCAnZWRpdFRhc2tNb2RhbCcpO1xuLy8gICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsQ29udGFpbmVyJyk7XG4vLyAgICAgY29uc3QgbW9kYWxCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbEJnJyk7XG4vLyAgICAgYXBwZW5kKG1vZGFsQ29udGFpbmVyLCBbYWRkVGFza01vZGFsLCBlZGl0VGFza01vZGFsXSk7XG4vLyAgICAgYXBwZW5kKG1vZGFsQmcsIG1vZGFsQ29udGFpbmVyKTtcbi8vIH1cblxuZXhwb3J0IHsgbmV3TGlzdCwgbGlzdHMsIGFjdGl2ZUxpc3QgfTtcbiIsImZ1bmN0aW9uIG1ha2VFbGVtZW50KHR5cGUsIGNsYXNzTmFtZSwgY29udGVudCkge1xuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGlmICh0eXBlb2YgKGNsYXNzTmFtZSkgPT09ICdvYmplY3QnKSB7XG4gICAgICBjbGFzc05hbWUuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKGVsKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7IGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG4gIH1cbiAgaWYgKGNvbnRlbnQpIHtcbiAgICBlbGVtLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgfVxuICByZXR1cm4gZWxlbTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZUVsZW1lbnQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaW5pdGlhbExvYWQgZnJvbSAnLi9mdW5jdGlvbnMvaW5pdGlhbGl6ZSc7XG5cbmluaXRpYWxMb2FkKCk7XG4vLyB0b2RvcyBzaG91bGQgYmUgZHluYW1pY2FsbHkgY3JlYXRlZCBvYmplY3RzXG5cbi8vIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSxwcmlvcml0eSBtaW5pbXVtXG5cbi8vIHByb2plY3RzIC8gc2VwYXJhdGUgbGlzdHMgdG9kb3NcblxuLy8gbW9kdWxlc1xuLy8gbGlzdCBtYW5hZ2VtZW50XG5cbi8vIGVkaXQgdGFzayBtb2R1bGUsIGdldHMgdGFzayBtb2R1bGVcblxuLy8gbGlzdCBjb250cm9sbGVyLCBnZXRzIHRvZG9saXN0LCBjYWxscyB1cGRhdGUgZGlzcGxheVxuXG4vLyBlZGl0L2NyZWF0ZSB0YXNrIHNob3VsZCBiZSBhIGNvbXBvc2l0aW9uIG9mIHNvbWUgc29ydFxuXG4vLyBwcmlvcml0eSBzb3J0IHNob3VsZCBiZSBhIHRoaW5nXG5cbi8vIHN3aXRjaCBjb250cm9sbGVyXG5cbi8vIG1heWJlIGEgYnV0dG9uIGhhbmRsZXI/XG5cbi8vIG1vZGFsIGNvbnRyb2xsZXIsIGFic3RyYWN0cyBtb2RhbCBmdW5jdGlvbnNcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==