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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Inter medium';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n* {\n    padding: 0;\n    margin: 0;\n\n    font-family: 'Inter medium';\n    list-style: none;\n    text-decoration: none;\n}\n\n*,*:before,*:after {\n    box-sizing: border-box;\n}\n\n:root {\n    --primaryColor:#d65e78;\n    --lightColor:#ff8fa7;\n    --darkColor:#a12d4c;\n    --lowPriority:rgb(30, 226, 30);\n    --moderatePriority:rgb(255, 238, 0);\n}\n\nbody {\n    display:grid;\n    height: 100vh;\n    grid-template-rows: auto 1fr auto;\n    grid-template-columns: max(6em,15%) auto;\n}\n\n.header {\n    text-align: center;\n    font-weight: 900;\n}\n\n.modalBg {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0,0,0,.6);\n    position:fixed;\n    z-index: 3;\n    \n    height: 100vh;\n    height: 100dvh;\n    width: 100vw;\n    width: 100dvw;\n}\n\n.modalContainer {\n    display: flex;\n    background-color: white;\n    border-radius: 1em;\n    padding: 2em;\n    position: absolute;\n}\n\nli input,li textarea{\n    width: 100%;\n}\n\n.addTaskModal li:last-child, .editTaskModal li:last-child {\n    margin: 0 auto;\n}\n\nli:last-child>button {\n    padding: .25em .75em;\n    margin: .5em;\n}\n\n.newTaskHeader,.editTaskHeader {\n    font-size: 1.3rem;\n}\n\n.addTaskModal,.editTaskModal,.infoPanelContainer {\n    display: none;\n}\n\n.modalCornerButton {\n    position: absolute;\n    top:1.5em;\n    right: 2em;\n    padding: .2em .5em;\n}\n\n.modalBg ul {\n    display: flex;\n    flex-direction: column;\n    gap:1em;\n}\n\n.listNameContainer, .addListButton{\n    margin: 0 auto;\n}\n\n.headerContainer {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-column: 1/-1;\n\n    background-color: var(--darkColor);\n}\n\n.pageHeader {\n    grid-column: 2;\n\n    color:white;\n    font-size: 3rem;\n    text-align: center;\n\n    min-width: 150px;\n    padding: .5em 0;\n}\n\n.sidebarContainer {\n    background-color: var(--lightColor);\n}\n\n.sidebarHeader {\n    background-color: var(--primaryColor);\n    font-size: 1.2rem;\n    padding: .5em 0;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap:.5em;\n\n    background-color: var(--lightColor);\n    text-align: center;\n}\n\n.sidebar li {\n    padding: .75em;\n}\n\n.sidebarItemContainer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    min-height: 2.65rem;\n    position: relative;\n    text-align: left;\n}\n\n.sidebarItemContainer div {\n    -webkit-user-select: none; /* Safari */\n    -ms-user-select: none; /* IE 10 and IE 11 */\n    user-select: none;\n}\n\n.sidebarItemContainer div:first-child{\n    max-width: max(80px,90%);\n    word-wrap: break-word;\n}\n\n.sidebarItemContainer.active {\n    background-color: var(--darkColor);\n    color: white;\n    text-decoration: underline;\n}\n\n.saveButton>img{\n    height: 90%;\n    position:relative;\n    top:5%;\n}\n\n.listNameContainer {\n    display: flex;\n    align-items: center;\n    gap: .25em;\n\n    position: absolute;\n    z-index: 2;\n}\n\n.taskButtonContainer {\n    display: flex;\n}\n\n.sidebarItemContainer .buttonOverlay {\n    display: flex;\n\n    position: absolute;\n    right:5%;\n\n    visibility: hidden;\n    z-index: 1;\n}\n\n.sidebarItemContainer:hover .buttonOverlay {\n    visibility: visible;\n}\n\n.sidebar button,.taskButtonContainer button{\n    width: 2em;\n    min-width: 2em;\n    height: 2em;\n}\n\n.sidebar .addListButton {\n    font-size: 1.2rem;\n    background-color: var(--primaryColor);\n    border: 0;\n    border-radius: .25em;\n    color:white;\n    height: 1.5em;\n    width: 5em;\n    margin-top: .7em;\n    margin-bottom: 1.25em;\n}\n\n.addListButton:hover {\n    border: 1px solid white;\n}\n\n.sidebar .editButton,.editTaskButton {\n    background-color: rgb(113, 255, 100);\n}\n\n.sidebar .deleteButton,.deleteTaskButton {\n    margin-left: .3em;\n    background-color: rgb(255, 78, 78);\n}\n\n.buttonOverlay button,.taskButtonContainer button {\n    border: none;\n    border-radius: 20%;\n}\n\n.deleteButton>img,.deleteTaskButton>img{\n    position: relative;\n    top: 7%;\n    height: 80%;\n}\n\n.tasklistContainer {\n    margin: 1em;\n    height: 100%;\n    width: 100%;\n}\n\n.contentContainer {\n    display:flex;\n}\n\n.contentHeader {\n    display: none;\n    background-color: var(--darkColor);\n    color: white;\n    font-size: 1.25rem;\n    padding: 1em 2em;\n}\n\n.checklistContainer {\n    background-color: white;\n}\n\n.checklist {\n    display: flex;\n    flex-direction: column;\n    gap: 0.1rem;\n}\n\n.taskContainer {\n    display: flex;\n    gap:.5em;\n    align-items: center;\n    background-color: var(--lightColor);\n    font-size: 1.1rem;\n    padding: .5em;\n}\n\n.taskContainer:nth-child(even){\n    background-color: var(--primaryColor);\n}\n\n.taskContainer.checked {\n    background-color: gray;\n    text-decoration: 2px line-through;\n}\n\n.taskContainer.low {\n    border-left: 4px solid var(--lowPriority);\n}\n\n.taskContainer.moderate {\n    border-left: 4px solid var(--moderatePriority);\n}\n\n.taskContainer.high {\n    border-left: 4px solid red;\n}\n\n.taskContainer input {\n    height: 1.5em;\n    width: 1.5em;\n}\n\n.taskName {\n    max-width: min(65%,350px);\n    word-wrap: anywhere;\n}\n\n.taskButtonContainer>button {\n    margin: 0 .15rem;\n}\n\n.taskDueDate {\n    font-size: .75rem;\n    margin-left: auto;\n}\n\n.addTaskButton {\n    display: none;\n    background-color: var(--primaryColor);\n    border-radius: 5rem;\n    border:none;\n    color:white;\n    height:3.5rem;\n    width:3.5rem;\n\n    font-size: 2rem;\n    font-weight: 900;\n    text-align: center;\n\n\n    position: fixed;\n    bottom:5%;\n    right:3vmin;\n}\n\n.infoPanelContainer {\n    display: none;\n    background-color: var(--lightColor);\n    margin: 1em;\n    min-height: 30%;\n    position: relative;\n    height: max-content;\n    width: 35%;\n}\n\n.infoPanelHeader {\n    background-color: var(--darkColor);\n    color: white;\n    font-size: 1.1rem;\n    padding: 1em 2em;\n    min-height: 3.1rem;\n    width: 100%;\n}\n\n.infoPanelHeader.low {\n    border-bottom: 4px solid var(--lowPriority);\n}\n\n.infoPanelHeader.moderate {\n    border-bottom: 4px solid var(--moderatePriority);\n}\n\n.infoPanelHeader.high {\n    border-bottom: 4px solid red;\n}\n\n.infoPanelBody {\n    padding: 1em;\n    word-wrap: break-word;\n}\n\n.infoPanelFooter {\n    position: absolute;\n    bottom: 0;\n\n    background-color: var(--primaryColor);\n    width: 100%;\n}\n\n.infoPanelDueDate {\n    text-align: right;\n}\n\ntextarea {\n    resize: none;\n}\n\n.footerContainer {\n    grid-column: 1/-1;\n\n    text-align: center;\n\n    background-color: var(--darkColor);\n}\n\n.footer {\n    color:white;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'Inter medium';\n    src: url('./Inter-Medium.woff');\n}\n\n* {\n    padding: 0;\n    margin: 0;\n\n    font-family: 'Inter medium';\n    list-style: none;\n    text-decoration: none;\n}\n\n*,*:before,*:after {\n    box-sizing: border-box;\n}\n\n:root {\n    --primaryColor:#d65e78;\n    --lightColor:#ff8fa7;\n    --darkColor:#a12d4c;\n    --lowPriority:rgb(30, 226, 30);\n    --moderatePriority:rgb(255, 238, 0);\n}\n\nbody {\n    display:grid;\n    height: 100vh;\n    grid-template-rows: auto 1fr auto;\n    grid-template-columns: max(6em,15%) auto;\n}\n\n.header {\n    text-align: center;\n    font-weight: 900;\n}\n\n.modalBg {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0,0,0,.6);\n    position:fixed;\n    z-index: 3;\n    \n    height: 100vh;\n    height: 100dvh;\n    width: 100vw;\n    width: 100dvw;\n}\n\n.modalContainer {\n    display: flex;\n    background-color: white;\n    border-radius: 1em;\n    padding: 2em;\n    position: absolute;\n}\n\nli input,li textarea{\n    width: 100%;\n}\n\n.addTaskModal li:last-child, .editTaskModal li:last-child {\n    margin: 0 auto;\n}\n\nli:last-child>button {\n    padding: .25em .75em;\n    margin: .5em;\n}\n\n.newTaskHeader,.editTaskHeader {\n    font-size: 1.3rem;\n}\n\n.addTaskModal,.editTaskModal,.infoPanelContainer {\n    display: none;\n}\n\n.modalCornerButton {\n    position: absolute;\n    top:1.5em;\n    right: 2em;\n    padding: .2em .5em;\n}\n\n.modalBg ul {\n    display: flex;\n    flex-direction: column;\n    gap:1em;\n}\n\n.listNameContainer, .addListButton{\n    margin: 0 auto;\n}\n\n.headerContainer {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-column: 1/-1;\n\n    background-color: var(--darkColor);\n}\n\n.pageHeader {\n    grid-column: 2;\n\n    color:white;\n    font-size: 3rem;\n    text-align: center;\n\n    min-width: 150px;\n    padding: .5em 0;\n}\n\n.sidebarContainer {\n    background-color: var(--lightColor);\n}\n\n.sidebarHeader {\n    background-color: var(--primaryColor);\n    font-size: 1.2rem;\n    padding: .5em 0;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap:.5em;\n\n    background-color: var(--lightColor);\n    text-align: center;\n}\n\n.sidebar li {\n    padding: .75em;\n}\n\n.sidebarItemContainer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    min-height: 2.65rem;\n    position: relative;\n    text-align: left;\n}\n\n.sidebarItemContainer div {\n    -webkit-user-select: none; /* Safari */\n    -ms-user-select: none; /* IE 10 and IE 11 */\n    user-select: none;\n}\n\n.sidebarItemContainer div:first-child{\n    max-width: max(80px,90%);\n    word-wrap: break-word;\n}\n\n.sidebarItemContainer.active {\n    background-color: var(--darkColor);\n    color: white;\n    text-decoration: underline;\n}\n\n.saveButton>img{\n    height: 90%;\n    position:relative;\n    top:5%;\n}\n\n.listNameContainer {\n    display: flex;\n    align-items: center;\n    gap: .25em;\n\n    position: absolute;\n    z-index: 2;\n}\n\n.taskButtonContainer {\n    display: flex;\n}\n\n.sidebarItemContainer .buttonOverlay {\n    display: flex;\n\n    position: absolute;\n    right:5%;\n\n    visibility: hidden;\n    z-index: 1;\n}\n\n.sidebarItemContainer:hover .buttonOverlay {\n    visibility: visible;\n}\n\n.sidebar button,.taskButtonContainer button{\n    width: 2em;\n    min-width: 2em;\n    height: 2em;\n}\n\n.sidebar .addListButton {\n    font-size: 1.2rem;\n    background-color: var(--primaryColor);\n    border: 0;\n    border-radius: .25em;\n    color:white;\n    height: 1.5em;\n    width: 5em;\n    margin-top: .7em;\n    margin-bottom: 1.25em;\n}\n\n.addListButton:hover {\n    border: 1px solid white;\n}\n\n.sidebar .editButton,.editTaskButton {\n    background-color: rgb(113, 255, 100);\n}\n\n.sidebar .deleteButton,.deleteTaskButton {\n    margin-left: .3em;\n    background-color: rgb(255, 78, 78);\n}\n\n.buttonOverlay button,.taskButtonContainer button {\n    border: none;\n    border-radius: 20%;\n}\n\n.deleteButton>img,.deleteTaskButton>img{\n    position: relative;\n    top: 7%;\n    height: 80%;\n}\n\n.tasklistContainer {\n    margin: 1em;\n    height: 100%;\n    width: 100%;\n}\n\n.contentContainer {\n    display:flex;\n}\n\n.contentHeader {\n    display: none;\n    background-color: var(--darkColor);\n    color: white;\n    font-size: 1.25rem;\n    padding: 1em 2em;\n}\n\n.checklistContainer {\n    background-color: white;\n}\n\n.checklist {\n    display: flex;\n    flex-direction: column;\n    gap: 0.1rem;\n}\n\n.taskContainer {\n    display: flex;\n    gap:.5em;\n    align-items: center;\n    background-color: var(--lightColor);\n    font-size: 1.1rem;\n    padding: .5em;\n}\n\n.taskContainer:nth-child(even){\n    background-color: var(--primaryColor);\n}\n\n.taskContainer.checked {\n    background-color: gray;\n    text-decoration: 2px line-through;\n}\n\n.taskContainer.low {\n    border-left: 4px solid var(--lowPriority);\n}\n\n.taskContainer.moderate {\n    border-left: 4px solid var(--moderatePriority);\n}\n\n.taskContainer.high {\n    border-left: 4px solid red;\n}\n\n.taskContainer input {\n    height: 1.5em;\n    width: 1.5em;\n}\n\n.taskName {\n    max-width: min(65%,350px);\n    word-wrap: anywhere;\n}\n\n.taskButtonContainer>button {\n    margin: 0 .15rem;\n}\n\n.taskDueDate {\n    font-size: .75rem;\n    margin-left: auto;\n}\n\n.addTaskButton {\n    display: none;\n    background-color: var(--primaryColor);\n    border-radius: 5rem;\n    border:none;\n    color:white;\n    height:3.5rem;\n    width:3.5rem;\n\n    font-size: 2rem;\n    font-weight: 900;\n    text-align: center;\n\n\n    position: fixed;\n    bottom:5%;\n    right:3vmin;\n}\n\n.infoPanelContainer {\n    display: none;\n    background-color: var(--lightColor);\n    margin: 1em;\n    min-height: 30%;\n    position: relative;\n    height: max-content;\n    width: 35%;\n}\n\n.infoPanelHeader {\n    background-color: var(--darkColor);\n    color: white;\n    font-size: 1.1rem;\n    padding: 1em 2em;\n    min-height: 3.1rem;\n    width: 100%;\n}\n\n.infoPanelHeader.low {\n    border-bottom: 4px solid var(--lowPriority);\n}\n\n.infoPanelHeader.moderate {\n    border-bottom: 4px solid var(--moderatePriority);\n}\n\n.infoPanelHeader.high {\n    border-bottom: 4px solid red;\n}\n\n.infoPanelBody {\n    padding: 1em;\n    word-wrap: break-word;\n}\n\n.infoPanelFooter {\n    position: absolute;\n    bottom: 0;\n\n    background-color: var(--primaryColor);\n    width: 100%;\n}\n\n.infoPanelDueDate {\n    text-align: right;\n}\n\ntextarea {\n    resize: none;\n}\n\n.footerContainer {\n    grid-column: 1/-1;\n\n    text-align: center;\n\n    background-color: var(--darkColor);\n}\n\n.footer {\n    color:white;\n}"],"sourceRoot":""}]);
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

/***/ "./src/functions/assets.js":
/*!*********************************!*\
  !*** ./src/functions/assets.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _makeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeElement */ "./src/functions/makeElement.js");


function makeAsset(type) {
  const image = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('img');
  if (type === 'edit') {
    image.src = 'data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTEuMjUgNmMuMzk4IDAgLjc1LjM1Mi43NS43NSAwIC40MTQtLjMzNi43NS0uNzUuNzUtMS41MDUgMC03Ljc1IDAtNy43NSAwdjEyaDE3di04Ljc0OWMwLS40MTQuMzM2LS43NS43NS0uNzVzLjc1LjMzNi43NS43NXY5LjI0OWMwIC42MjEtLjUyMiAxLTEgMWgtMThjLS40OCAwLTEtLjM3OS0xLTF2LTEzYzAtLjQ4MS4zOC0xIDEtMXptMS41MjEgOS42ODkgOS4wMTItOS4wMTJjLjEzMy0uMTMzLjIxNy0uMzI5LjIxNy0uNTMyIDAtLjE3OS0uMDY1LS4zNjMtLjIxOC0uNTE1bC0yLjQyMy0yLjQxNWMtLjE0My0uMTQzLS4zMzMtLjIxNS0uNTIyLS4yMTVzLS4zNzguMDcyLS41MjMuMjE1bC05LjAyNyA4Ljk5NmMtLjQ0MiAxLjM3MS0xLjE1OCAzLjU4Ni0xLjI2NCAzLjk1Mi0uMTI2LjQzMy4xOTguODM0LjU3Mi44MzQuNDEgMCAuNjk2LS4wOTkgNC4xNzYtMS4zMDh6bS0yLjI1OC0yLjM5MiAxLjE3IDEuMTcxYy0uNzA0LjIzMi0xLjI3NC40MTgtMS43MjkuNTY2em0uOTY4LTEuMTU0IDcuMzU2LTcuMzMxIDEuMzQ3IDEuMzQyLTcuMzQ2IDcuMzQ3eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+';
  } else if (type === 'delete') {
    image.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMyA2djE4aDE4di0xOGgtMTh6bTUgMTRjMCAuNTUyLS40NDggMS0xIDFzLTEtLjQ0OC0xLTF2LTEwYzAtLjU1Mi40NDgtMSAxLTFzMSAuNDQ4IDEgMXYxMHptNSAwYzAgLjU1Mi0uNDQ4IDEtMSAxcy0xLS40NDgtMS0xdi0xMGMwLS41NTIuNDQ4LTEgMS0xczEgLjQ0OCAxIDF2MTB6bTUgMGMwIC41NTItLjQ0OCAxLTEgMXMtMS0uNDQ4LTEtMXYtMTBjMC0uNTUyLjQ0OC0xIDEtMXMxIC40NDggMSAxdjEwem00LTE4djJoLTIwdi0yaDUuNzExYy45IDAgMS42MzEtMS4wOTkgMS42MzEtMmg1LjMxNWMwIC45MDEuNzMgMiAxLjYzMSAyaDUuNzEyeiIvPjwvc3ZnPg==';
  } else if (type === 'cancel') {
    image.src = 'data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTIgMTAuOTMgNS43MTktNS43MmMuMTQ2LS4xNDYuMzM5LS4yMTkuNTMxLS4yMTkuNDA0IDAgLjc1LjMyNC43NS43NDkgMCAuMTkzLS4wNzMuMzg1LS4yMTkuNTMybC01LjcyIDUuNzE5IDUuNzE5IDUuNzE5Yy4xNDcuMTQ3LjIyLjMzOS4yMi41MzEgMCAuNDI3LS4zNDkuNzUtLjc1Ljc1LS4xOTIgMC0uMzg1LS4wNzMtLjUzMS0uMjE5bC01LjcxOS01LjcxOS01LjcxOSA1LjcxOWMtLjE0Ni4xNDYtLjMzOS4yMTktLjUzMS4yMTktLjQwMSAwLS43NS0uMzIzLS43NS0uNzUgMC0uMTkyLjA3My0uMzg0LjIyLS41MzFsNS43MTktNS43MTktNS43Mi01LjcxOWMtLjE0Ni0uMTQ3LS4yMTktLjMzOS0uMjE5LS41MzIgMC0uNDI1LjM0Ni0uNzQ5Ljc1LS43NDkuMTkyIDAgLjM4NS4wNzMuNTMxLjIxOXoiLz48L3N2Zz4=';
  } else if (type === 'save') {
    image.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTQgM2gyLjk5N3Y1aC0yLjk5N3YtNXptOSAxdjIwaC0yMnYtMjRoMTcuOTk3bDQuMDAzIDR6bS0xNyA1aDEydi03aC0xMnY3em0xNCA0aC0xNnY5aDE2di05eiIvPjwvc3ZnPg==';
  }
  return image;
}

function getAsset(asset) {
  return makeAsset(asset);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAsset);


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
/* harmony export */   "display": () => (/* binding */ display),
/* harmony export */   "togglePanel": () => (/* binding */ togglePanel),
/* harmony export */   "updateInfoPanel": () => (/* binding */ updateInfoPanel)
/* harmony export */ });
/* harmony import */ var _makeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeElement */ "./src/functions/makeElement.js");
/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./append */ "./src/functions/append.js");



function display(form, lists, activeList) {
  document.querySelector('.modalBg').style.display = 'flex';
  if (form === 'add') {
    document.querySelector('.addTaskModal').style.display = 'flex';
  } else if (form === 'edit') {
    document.querySelector('.editTaskModal').style.display = 'flex';
  }

  const dropdown = document.querySelector('.listSelectDropdown');
  if (dropdown.children.length !== lists.length) {
    while (dropdown.firstChild) {
      dropdown.removeChild(dropdown.firstChild);
    }
    lists.forEach((list) => {
      const aList = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('option', '', list.listName);
      aList.setAttribute('data-id', list.id);
      (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(dropdown, aList);
    });
  }
  dropdown.selectedIndex = lists.map((elem) => elem.id).indexOf(activeList.id);// defaults list select to current active list
}

function changeActiveList(activeList, hidePanel) { // change content area text, display respective list tasks
  if (hidePanel) { // Hide info panel when changing lists
    document.querySelector('.infoPanelContainer').style.display = 'none';
  }
  const taskList = document.querySelector('.checklist');
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  document.querySelector('.contentHeader').textContent = activeList.listName;
  const tasks = activeList.tasks.map((elem) => elem.taskContainer);
  if (tasks.length > 0) {
    (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(taskList, tasks);
  }
}

function closeModal(form) {
  document.querySelector('.modalBg').style.display = 'none';
  document.querySelector('.addTaskModal').style.display = 'none';
  document.querySelector('.editTaskModal').style.display = 'none';
  form.reset();
}

function updateInfoPanel(task) {
  document.querySelector('.infoPanelHeader').textContent = task.task;
  document.querySelector('.infoPanelBody').textContent = task.description;
  if (task.dueDate) {
    document.querySelector('.infoPanelDueDate').textContent = `Due ${task.dueDate}`;// make sure worky
  } else {
    document.querySelector('.infoPanelDueDate').textContent = '';
  }
}

function togglePanel(activeTask) {
  const panel = document.querySelector('.infoPanelContainer');
  panel.style.display = activeTask ? 'block' : 'none';
}




/***/ }),

/***/ "./src/functions/idFunctions.js":
/*!**************************************!*\
  !*** ./src/functions/idFunctions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function generateId(list) {
  let id = Math.floor(Math.random() * 1000000);
  while (checkIfIdExists(list, id)) {
    id = Math.floor(Math.random() * 1000000);
  }
  return id;
}

function checkIfIdExists(list, id) {
  if (list.length === 0) {
    return false;
  }
  let exists = false;
  list.forEach((elem) => {
    if (elem.id === id) {
      exists = true;
    }
  });
  return exists;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateId);


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
/* harmony import */ var _taskFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./taskFunctions */ "./src/functions/taskFunctions.js");






function initialLoad() {
  const modalBg = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'modalBg');
  modalBg.addEventListener('click', () => {
    if (document.querySelector('.modalContainer').firstChild.style.display === 'flex') {
      (0,_displayController__WEBPACK_IMPORTED_MODULE_3__.closeModal)(document.querySelector('.newTaskForm'));
    } else {
      (0,_displayController__WEBPACK_IMPORTED_MODULE_3__.closeModal)(document.querySelector('.editTaskForm'));
    }
  });
  const modalContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'modalContainer');
  modalContainer.addEventListener('click', (event) => {
    event.stopPropagation();
  });

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

  addListButton.addEventListener('click', _listFunctions__WEBPACK_IMPORTED_MODULE_2__.newListInput);

  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(sidebar, addListButton);
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(sidebarContainer, [sidebarHeader, sidebar]);

  const contentContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'contentContainer');

  const tasklistContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'tasklistContainer');
  const contentHeader = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', ['header', 'contentHeader']);

  const content = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'content');
  const checklistContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'checklistContainer');
  const checklist = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('ol', 'checklist');

  const infoPanel = createInfoPanel();

  const newTaskButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'addTaskButton', '+');
  newTaskButton.addEventListener('click', () => {
    (0,_displayController__WEBPACK_IMPORTED_MODULE_3__.display)('add', _listFunctions__WEBPACK_IMPORTED_MODULE_2__.lists, _listFunctions__WEBPACK_IMPORTED_MODULE_2__.activeList);
  });

  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(checklistContainer, checklist);
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(content, checklistContainer);
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(tasklistContainer, [contentHeader, content, newTaskButton]);
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(contentContainer, [tasklistContainer, infoPanel]);

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
  const newTaskCancelButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'modalCornerButton', 'Cancel');
  newTaskCancelButton.addEventListener('click', (event) => {
    event.preventDefault();
    (0,_displayController__WEBPACK_IMPORTED_MODULE_3__.closeModal)(newTaskForm);
  });
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemA, [newTaskHeader, newTaskCancelButton]);

  const listItemB = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const newTaskName = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('input', 'newTaskName');
  newTaskName.setAttribute('type', 'text');
  const newTaskNameLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('label', 'label', 'Task Name: ');
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemB, [newTaskNameLabel, newTaskName]);

  const listItemC = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const listSelectLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('label', 'label', 'List: ');
  const listSelectDropdown = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('select', 'listSelectDropdown');
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemC, [listSelectLabel, listSelectDropdown]);

  const listItemD = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const newTaskDescriptionLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('label', 'label', 'Description: ');
  const newTaskDescription = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('textarea', 'newTaskDescription');
  newTaskDescription.setAttribute('rows', '3');
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemD, [newTaskDescriptionLabel, newTaskDescription]);

  const listItemE = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const newTaskDueDateLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('label', 'label', 'Due Date: ');
  const newTaskDueDate = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('input', 'newTaskDueDate');
  newTaskDueDate.setAttribute('type', 'date');
  newTaskDueDate.setAttribute('min', '2023-01-01');
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemE, [newTaskDueDateLabel, newTaskDueDate]);

  const listItemF = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const newTaskPriorityLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('label', 'label', 'Task Priority: ');
  const newTaskPriority = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('select', 'newTaskPriority');
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(newTaskPriority, [(0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('option', '', 'Low'), (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('option', '', 'Moderate'), (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('option', '', 'High')]);
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemF, [newTaskPriorityLabel, newTaskPriority]);

  const listItemG = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const newTaskAddButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'newTaskAddButton', 'Add Task');
  newTaskAddButton.addEventListener('click', (event) => {
    event.preventDefault();
    (0,_taskFunctions__WEBPACK_IMPORTED_MODULE_4__.addTask)();
  });

  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemG, newTaskAddButton);

  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(uList, [listItemA, listItemB, listItemC, listItemD, listItemE, listItemF, listItemG]);
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(newTaskForm, uList);

  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(addTaskModal, [newTaskForm]);
  return addTaskModal;
}

function createEditTaskModal() {
  const editTaskModal = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'editTaskModal');
  const editTaskForm = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('form', 'editTaskForm');

  const uList = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('ul');

  const listItemA = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const editTaskHeader = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', ['header', 'editTaskHeader'], 'Edit Task');
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemA, editTaskHeader);

  const listItemB = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const editTaskTitleLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('label', 'label', 'Task Title: ');
  const editTaskTitle = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('input', 'editTaskTitle');
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemB, [editTaskTitleLabel, editTaskTitle]);

  const listItemC = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const editTaskDescriptionLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('label', 'label', 'Task Description: ');
  const editTaskDescription = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('textarea', 'editTaskDescription');
  editTaskDescription.setAttribute('rows', '3');
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemC, [editTaskDescriptionLabel, editTaskDescription]);

  const listItemD = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const editDueDateLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('label', 'label', 'Due Date: ');
  const editDueDate = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('input', 'editDueDate');
  editDueDate.setAttribute('type', 'date');
  editDueDate.setAttribute('min', '2023-01-01');
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemD, [editDueDateLabel, editDueDate]);

  const listItemE = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const editPriorityLabel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('label', 'label', 'Priority: ');
  const editPriority = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('select', 'editPriority');
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(editPriority, [(0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('option', '', 'Low'), (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('option', '', 'Moderate'), (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('option', '', 'High')]);
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemE, [editPriorityLabel, editPriority]);

  const listItemF = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const saveEdit = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'saveEdit', 'Save Changes');// todo - Save icon

  saveEdit.addEventListener('click', (event) => {
    event.preventDefault();
    (0,_taskFunctions__WEBPACK_IMPORTED_MODULE_4__.editTask)();
    (0,_displayController__WEBPACK_IMPORTED_MODULE_3__.closeModal)(editTaskForm);
  });
  const cancelEdit = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'cancelEdit', 'Cancel');
  cancelEdit.addEventListener('click', (event) => {
    event.preventDefault();
    (0,_displayController__WEBPACK_IMPORTED_MODULE_3__.closeModal)(editTaskForm);
  });
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemF, [saveEdit, cancelEdit]);

  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(uList, [listItemA, listItemB, listItemC, listItemD, listItemE, listItemF]);
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(editTaskForm, uList);
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(editTaskModal, [editTaskForm]);

  return editTaskModal;
}

function createInfoPanel() {
  const infoPanelContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'infoPanelContainer');
  const infoPanel = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'infoPanel');
  const infoPanelHeader = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', ['header', 'infoPanelHeader']);
  const infoPanelBody = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'infoPanelBody');
  const infoPanelFooter = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'infoPanelFooter');
  const infoPanelDueDate = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'infoPanelDueDate');

  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(infoPanelFooter, infoPanelDueDate);
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(infoPanel, [infoPanelHeader, infoPanelBody, infoPanelFooter]);
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(infoPanelContainer, infoPanel);

  return infoPanelContainer;
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
/* harmony export */   "newListInput": () => (/* binding */ newListInput)
/* harmony export */ });
/* harmony import */ var _makeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeElement */ "./src/functions/makeElement.js");
/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./append */ "./src/functions/append.js");
/* harmony import */ var _idFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./idFunctions */ "./src/functions/idFunctions.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayController */ "./src/functions/displayController.js");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets */ "./src/functions/assets.js");






let lists = []; // lists and their sidebar containers
let activeList = null;
let addingList = false;

function createList(listName, container) { // Create List Object
  const tasks = [];
  const id = (0,_idFunctions__WEBPACK_IMPORTED_MODULE_2__["default"])(lists);

  const addTaskToList = function (task) {
    this.tasks.push(task);
    if (activeList.id === id) { // If adding task to active list, update the display
      (0,_displayController__WEBPACK_IMPORTED_MODULE_3__.changeActiveList)(activeList);
    }
  };

  const removeTaskFromList = function (taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  };

  const toggleActive = () => {
    container.classList.toggle('active');
  };

  return {
    listName, tasks, id, addTaskToList, removeTaskFromList, container, toggleActive,
  };
}

function modifyListName(list) {
  const listName = list.children[0].children[0].value;
  list.children[1].textContent = listName;
  list.children[1].style.display = 'block';
  list.children[2].style.display = 'flex';
  list.children[0].style.display = 'none';

  const index = lists.map((elem) => elem.id).indexOf(+list.getAttribute('data-id'));
  lists[index].listName = listName;
  if (list === activeList.container) {
    (0,_displayController__WEBPACK_IMPORTED_MODULE_3__.changeActiveList)(activeList);
  }
}

function deleteList(list, event) {
  lists = lists.filter((elem) => elem.container !== list);

  event.stopPropagation();
  list.parentElement.removeChild(list);
  toggleAddTaskButton();

  if (list === activeList.container && lists.length > 0) {
    activeList = lists[0];
    activeList.toggleActive();
    (0,_displayController__WEBPACK_IMPORTED_MODULE_3__.changeActiveList)(activeList, true);
  } else if (lists.length === 1) {
    activeList = null;
    document.querySelector('.contentContainer').style.display = 'none';
  }
}

// adds a new list with edit + delete buttons to the sidebar
const addList = (listName, container) => {
  const listItem = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', null, listName);

  container.addEventListener('click', () => {
    if (container !== activeList.container) {
      activeList.toggleActive();
      activeList = lists[lists.map((elem) => elem.container).indexOf(container)];
      activeList.toggleActive();
      (0,_displayController__WEBPACK_IMPORTED_MODULE_3__.changeActiveList)(activeList, true);
    }
  });
  lists.push(createList(listName, container));// Creates a new list object with reference to its container in the sidebar
  container.setAttribute('data-id', lists[lists.length - 1].id);

  if (lists.length > 1) {
    activeList.toggleActive(); // removes 'active' class from previously active list
  }

  activeList = lists[lists.length - 1];
  activeList.toggleActive();
  if (lists.length > 0) {
    document.querySelector('.contentHeader').style.display = 'block';
  }
  (0,_displayController__WEBPACK_IMPORTED_MODULE_3__.changeActiveList)(activeList, true);
  // todo - need to remove with the list swap fxn, need to remove previous active
  // move to displaycontroller, changeActiveList(list,container)

  const buttonOverlay = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'buttonOverlay');
  const editButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'editButton');
  // testing
  // const editImg = makeElement('img');
  // editImg.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOSAxM3Y2YzAgLjU1Mi0uNDQ4IDEtMSAxcy0xLS40NDgtMS0xdi02YzAtLjU1Mi40NDgtMSAxLTFzMSAuNDQ4IDEgMXptNy0xYy0uNTUyIDAtMSAuNDQ4LTEgMXY2YzAgLjU1Mi40NDggMSAxIDFzMS0uNDQ4IDEtMXYtNmMwLS41NTItLjQ0OC0xLTEtMXptLTQgMGMtLjU1MiAwLTEgLjQ0OC0xIDF2NmMwIC41NTIuNDQ4IDEgMSAxczEtLjQ0OCAxLTF2LTZjMC0uNTUyLS40NDgtMS0xLTF6bTQuMzMzLTguNjIzYy0uODgyLS4xODQtMS4zNzMtMS40MDktMS4xODktMi4yOTFsLTUuMjAzLTEuMDg2Yy0uMTg0Ljg4My0xLjEyMyAxLjgxLTIuMDA0IDEuNjI1bC01LjUyOC0xLjA5OS0uNDA5IDEuOTU4IDE5LjU5MSA0LjA5OS40MDktMS45NTgtNS42NjctMS4yNDh6bTQuNjY3IDQuNjIzdjE2aC0xOHYtMTZoMTh6bS0yIDE0di0xMmgtMTR2MTJoMTR6Ii8+PC9zdmc+';
  (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(editButton, (0,_assets__WEBPACK_IMPORTED_MODULE_4__["default"])('edit'));
  // testiong
  const deleteButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'deleteButton');
  // testing
  (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(deleteButton, (0,_assets__WEBPACK_IMPORTED_MODULE_4__["default"])('delete'));
  // testing

  editButton.addEventListener('click', (event) => { // shows text field to edit list name, hides label and save/delete buttons
    event.stopPropagation(); // todo - need to fix for the save button
    buttonOverlay.style.display = 'none';
    listItem.style.display = 'none';
    container.children[0].style.display = 'flex';
    container.firstChild.firstChild.focus(); // maybe replace all children[0] with firstchild?
  });
  deleteButton.addEventListener('click', (event) => {
    deleteList(container, event);
    if (lists.length === 0) {
      document.querySelector('.contentHeader').style.display = 'none';
    }
  });
  // todo - add a remaining tasks counter
  (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(buttonOverlay, [editButton, deleteButton]);
  (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(container, [listItem, buttonOverlay]);
  activeList = lists[lists.length - 1];
  toggleAddTaskButton();
};

function newListInput() { // Creates a text field to create a new list
  if (!addingList) {
    addingList = true;
    const sidebar = document.querySelector('.sidebar');
    const sidebarItemContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'sidebarItemContainer');

    const listNameContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'listNameContainer');
    const listName = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input', 'listNameField');
    listName.setAttribute('type', 'text');
    const saveListName = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'saveButton');
    // testing
    (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(saveListName, (0,_assets__WEBPACK_IMPORTED_MODULE_4__["default"])('save'));
    // testing
    (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(listNameContainer, [listName, saveListName]);
    (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(sidebarItemContainer, listNameContainer);

    sidebar.insertBefore(sidebarItemContainer, document.querySelector('.addListButton'));
    saveListName.addEventListener('click', function add() {
      addingList = false; // to prevent duplicate new list input forms
      let lName = 'New List';
      if (listName.value) {
        lName = listName.value;
      } else {
        listName.value = lName;
      }

      // // testing
      // const taskListContainer = makeElement('div','taskListContainer');
      // const taskList = makeElement('ul','taskList');
      // append(taskListContainer,taskList);
      // // add reference to the list object task
      // // testing

      addList(lName, sidebarItemContainer);
      console.log(lists);
      listNameContainer.style.display = 'none';
      // listName.style.display = 'none';
      // saveListName.style.display = 'none';
      // console.log(sidebarItemContainer)
      saveListName.removeEventListener('click', add);
      saveListName.addEventListener('click', () => {
        modifyListName(sidebarItemContainer);
      });
    });
    listName.focus();
  }
}

function toggleAddTaskButton() {
  const addTask = document.querySelector('.addTaskButton');
  if (lists.length) {
    addTask.style.display = 'block';
  } else {
    addTask.style.display = 'none';
  }
}




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

/***/ "./src/functions/taskFunctions.js":
/*!****************************************!*\
  !*** ./src/functions/taskFunctions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "editTask": () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _makeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeElement */ "./src/functions/makeElement.js");
/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./append */ "./src/functions/append.js");
/* harmony import */ var _listFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listFunctions */ "./src/functions/listFunctions.js");
/* harmony import */ var _idFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./idFunctions */ "./src/functions/idFunctions.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayController */ "./src/functions/displayController.js");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets */ "./src/functions/assets.js");







let activeTask = null;

function createTask(task, description, dueDate, priority, completed, list, taskContainer) {
  const id = (0,_idFunctions__WEBPACK_IMPORTED_MODULE_3__["default"])(list);

  return {
    task, description, dueDate, priority, completed, id, taskContainer,
  };
}

const priority = {
  Low: 'low',
  Moderate: 'moderate',
  High: 'high',
};

function addTask() {
  const form = document.querySelector('.newTaskForm');
  const taskName = document.querySelector('.newTaskName').value;
  const selectedListIndex = document.querySelector('.listSelectDropdown').selectedIndex; //
  const taskDescription = document.querySelector('.newTaskDescription').value;
  const taskDueDate = document.querySelector('.newTaskDueDate').value;
  const taskPriority = document.querySelector('.newTaskPriority').value;
  // console.log(taskName + selectedList + taskDescription + taskDueDate + taskPriority);

  // console.log(selectedList);
  // todo - add to tasklist container
  // const newTask = createTask(task, taskDescription, priority, dueDate);
  // list.tasks.push(newTask);

  const taskContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'taskContainer');
  const checkbox = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input');
  checkbox.setAttribute('type', 'checkbox');

  // taskContainer.addEventListener('click','')

  taskContainer.classList.add(priority[taskPriority]);// for styling a task base on priority

  taskContainer.addEventListener('click', () => {
    changeActiveTask(taskContainer);
  });

  const name = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'taskName', taskName);
  // const description = makeElement('div', 'taskDescription', taskDescription);
  // let taskPriority = makeElement('div','taskPriority',taskPriority);
  // change so priority has weight, maybe in another function
  const due = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'taskDueDate');
  // NOTE - for the more details modal just take info from the task object
  // NOTE - for the priority styling do the same
  // buttons add icon
  const taskButtonContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'taskButtonContainer');
  const editTaskButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'editTaskButton');
  // testing
  (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(editTaskButton, (0,_assets__WEBPACK_IMPORTED_MODULE_5__["default"])('edit'));
  // testing
  const deleteTaskButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'deleteTaskButton');
  // testing
  (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(deleteTaskButton, (0,_assets__WEBPACK_IMPORTED_MODULE_5__["default"])('delete'));
  // testing
  (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(taskButtonContainer, [editTaskButton, deleteTaskButton]);
  // buttons
  // duedate
  if (taskDueDate) {
    dateString(due, taskDueDate);
  }
  // duedate
  (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(taskContainer, [checkbox, name, due, taskButtonContainer]);
  const selectedList = _listFunctions__WEBPACK_IMPORTED_MODULE_2__.lists[selectedListIndex];
  // selectedList.addTaskToList(createTask(taskName, taskDescription, taskDueDate, taskPriority, false, selectedList.tasks, taskContainer));
  const task = createTask(taskName, taskDescription, taskDueDate, taskPriority, false, selectedList.tasks, taskContainer);
  selectedList.addTaskToList(task);// testing task variable
  // testing below

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      this.parentElement.classList.add('checked');
      task.completed = true;
    } else {
      this.parentElement.classList.remove('checked');
      task.completed = false;
    }
  });

  checkbox.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  editTaskButton.addEventListener('click', (event) => { // needs to find which task is clicked
    event.stopPropagation();
    // const selectedTask = activeList.tasks.filter((task) => task.taskContainer === taskContainer)[0];

    // TESTING TASK VARIABLE
    // activeTask = selectedTask;
    // console.log(activeList.tasks);
    // console.log(selectedTask);
    // document.querySelector('.editTaskTitle').value = selectedTask.task;
    // document.querySelector('.editTaskDescription').value = selectedTask.description;
    // document.querySelector('.editDueDate').value = selectedTask.dueDate;
    // document.querySelector('.editPriority').value = selectedTask.priority;

    activeTask = task;
    document.querySelector('.editTaskTitle').value = activeTask.task;
    document.querySelector('.editTaskDescription').value = activeTask.description;
    document.querySelector('.editDueDate').value = activeTask.dueDate;
    document.querySelector('.editPriority').value = activeTask.priority;
    // TESTING TASK VARIABLE

    // editTask(editTaskHeader.value, editTaskDescription.value, editDueDate.value, editPriority.value);

    (0,_displayController__WEBPACK_IMPORTED_MODULE_4__.display)('edit', _listFunctions__WEBPACK_IMPORTED_MODULE_2__.lists, _listFunctions__WEBPACK_IMPORTED_MODULE_2__.activeList);
    // taskName =
  });

  deleteTaskButton.addEventListener('click', (event) => {
    event.stopPropagation();
    deleteTask(taskContainer);
  });
  // // priority testing make sure this works when changing active task
  // const header = document.querySelector('.infoPanelHeader');
  // // header.classList.remove(priority[activeTask.priority]);
  // const classes = header.className.split(' ');
  // if (classes.length > 2) {
  //   header.classList.remove(classes[2]);
  // }
  // header.classList.add(priority[taskPriority]);
  // // priority testing

  (0,_displayController__WEBPACK_IMPORTED_MODULE_4__.closeModal)(form);
}

function deleteTask(taskContainer) {
  // event.stopPropagation();
  // const taskId = activeList.tasks[activeList.tasks.length - 1].id;
  const selected = _listFunctions__WEBPACK_IMPORTED_MODULE_2__.activeList.tasks.filter((task) => task.taskContainer === taskContainer)[0];
  console.log(selected);
  _listFunctions__WEBPACK_IMPORTED_MODULE_2__.activeList.removeTaskFromList(selected.id);
  taskContainer.remove();

  if (selected === activeTask) { // testing
    activeTask = null;
    (0,_displayController__WEBPACK_IMPORTED_MODULE_4__.togglePanel)();
  }
}

function changeActiveTask(taskContainer) {
  const t = _listFunctions__WEBPACK_IMPORTED_MODULE_2__.activeList.tasks.filter((task) => task.taskContainer === taskContainer)[0];
  activeTask = t;
  (0,_displayController__WEBPACK_IMPORTED_MODULE_4__.togglePanel)(activeTask);
  (0,_displayController__WEBPACK_IMPORTED_MODULE_4__.updateInfoPanel)(t);

  // testing
  const header = document.querySelector('.infoPanelHeader');
  const classes = header.className.split(' ');

  header.classList.remove(classes[2]);

  header.classList.add(priority[t.priority]);
}

function editTask() {
  // let editedTask =// document.querySelector('.saveEdit');

  // should also update the list display to reflect changes
  // document.querySelector('.saveEdit').addEventListener('click',);
  const prio = document.querySelector('.editPriority').value;
  if (prio !== activeTask.priority) {
    const infoPanel = document.querySelector('.infoPanelHeader');
    infoPanel.classList.remove(priority[activeTask.priority]);
    infoPanel.classList.add(priority[prio]);

    activeTask.taskContainer.classList.remove(priority[activeTask.priority]);
    activeTask.priority = prio;
    activeTask.taskContainer.classList.add(priority[activeTask.priority]);
  }
  activeTask.task = document.querySelector('.editTaskTitle').value;
  activeTask.description = document.querySelector('.editTaskDescription').value;
  activeTask.dueDate = document.querySelector('.editDueDate').value;

  const taskElement = activeTask.taskContainer.children;
  taskElement[1].textContent = activeTask.task;

  if (activeTask.dueDate) {
    // taskElement[2].dueDate =
    dateString(taskElement[2], activeTask.dueDate);
  }
  (0,_displayController__WEBPACK_IMPORTED_MODULE_4__.updateInfoPanel)(activeTask);
  console.log(_listFunctions__WEBPACK_IMPORTED_MODULE_2__.lists);
}

function dateString(due, taskDueDate) {
  console.log(due, taskDueDate);
  const currentDate = new Date();
  const tempDue = new Date(`${taskDueDate} 00:00:00`);
  let daysFromDue = (tempDue - currentDate) / (1000 * 3600 * 24);
  if (daysFromDue > -1 && daysFromDue < 1) {
    daysFromDue = Math.floor((tempDue - currentDate) / (1000 * 3600));
    due.textContent = (daysFromDue >= 0) ? `Due in ${daysFromDue} hour(s)` : `Due ${daysFromDue * -1} hour(s) ago`;
  } else {
    due.textContent = (daysFromDue >= 0) ? `Due in ${Math.floor(daysFromDue)} day(s)` : `Due ${Math.floor(daysFromDue * -1)} day(s) ago`;
  }
}




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLHNCQUFzQix5QkFBeUIsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxZQUFZLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssV0FBVyxZQUFZLFlBQVksWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLGVBQWUs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QUFDQTtBQUNBLDhCQUE4QixhQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxhQUFhLGtCQUFrQixrQkFBa0I7QUFDdEcsSUFBSTtBQUNKLHFEQUFxRCx5QkFBeUIsaUJBQWlCLDhCQUE4QjtBQUM3SDtBQUNBOztBQUU2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuTjdCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUM0Qjs7QUFFakQsaUVBQVc7QUFDWDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9hcHBlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9hc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2lkRnVuY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvaW5pdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2xpc3RGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9tYWtlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL3Rhc2tGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vSW50ZXItTWVkaXVtLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlciBtZWRpdW0nO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXIgbWVkaXVtJztcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4qLCo6YmVmb3JlLCo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeUNvbG9yOiNkNjVlNzg7XFxuICAgIC0tbGlnaHRDb2xvcjojZmY4ZmE3O1xcbiAgICAtLWRhcmtDb2xvcjojYTEyZDRjO1xcbiAgICAtLWxvd1ByaW9yaXR5OnJnYigzMCwgMjI2LCAzMCk7XFxuICAgIC0tbW9kZXJhdGVQcmlvcml0eTpyZ2IoMjU1LCAyMzgsIDApO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4KDZlbSwxNSUpIGF1dG87XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5tb2RhbEJnIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xcbiAgICBwb3NpdGlvbjpmaXhlZDtcXG4gICAgei1pbmRleDogMztcXG4gICAgXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGhlaWdodDogMTAwZHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHdpZHRoOiAxMDBkdnc7XFxufVxcblxcbi5tb2RhbENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIHBhZGRpbmc6IDJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG5saSBpbnB1dCxsaSB0ZXh0YXJlYXtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGRUYXNrTW9kYWwgbGk6bGFzdC1jaGlsZCwgLmVkaXRUYXNrTW9kYWwgbGk6bGFzdC1jaGlsZCB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5saTpsYXN0LWNoaWxkPmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC4yNWVtIC43NWVtO1xcbiAgICBtYXJnaW46IC41ZW07XFxufVxcblxcbi5uZXdUYXNrSGVhZGVyLC5lZGl0VGFza0hlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uYWRkVGFza01vZGFsLC5lZGl0VGFza01vZGFsLC5pbmZvUGFuZWxDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWxDb3JuZXJCdXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDoxLjVlbTtcXG4gICAgcmlnaHQ6IDJlbTtcXG4gICAgcGFkZGluZzogLjJlbSAuNWVtO1xcbn1cXG5cXG4ubW9kYWxCZyB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDoxZW07XFxufVxcblxcbi5saXN0TmFtZUNvbnRhaW5lciwgLmFkZExpc3RCdXR0b257XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uaGVhZGVyQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XFxufVxcblxcbi5wYWdlSGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDI7XFxuXFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgbWluLXdpZHRoOiAxNTBweDtcXG4gICAgcGFkZGluZzogLjVlbSAwO1xcbn1cXG5cXG4uc2lkZWJhckNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Q29sb3IpO1xcbn1cXG5cXG4uc2lkZWJhckhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiAuNWVtIDA7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOi41ZW07XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Q29sb3IpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlYmFyIGxpIHtcXG4gICAgcGFkZGluZzogLjc1ZW07XFxufVxcblxcbi5zaWRlYmFySXRlbUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgbWluLWhlaWdodDogMi42NXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uc2lkZWJhckl0ZW1Db250YWluZXIgZGl2IHtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUgMTAgYW5kIElFIDExICovXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uc2lkZWJhckl0ZW1Db250YWluZXIgZGl2OmZpcnN0LWNoaWxke1xcbiAgICBtYXgtd2lkdGg6IG1heCg4MHB4LDkwJSk7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLnNpZGViYXJJdGVtQ29udGFpbmVyLmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5zYXZlQnV0dG9uPmltZ3tcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICB0b3A6NSU7XFxufVxcblxcbi5saXN0TmFtZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogLjI1ZW07XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLnRhc2tCdXR0b25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2lkZWJhckl0ZW1Db250YWluZXIgLmJ1dHRvbk92ZXJsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OjUlO1xcblxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5zaWRlYmFySXRlbUNvbnRhaW5lcjpob3ZlciAuYnV0dG9uT3ZlcmxheSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbiwudGFza0J1dHRvbkNvbnRhaW5lciBidXR0b257XFxuICAgIHdpZHRoOiAyZW07XFxuICAgIG1pbi13aWR0aDogMmVtO1xcbiAgICBoZWlnaHQ6IDJlbTtcXG59XFxuXFxuLnNpZGViYXIgLmFkZExpc3RCdXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMjVlbTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGhlaWdodDogMS41ZW07XFxuICAgIHdpZHRoOiA1ZW07XFxuICAgIG1hcmdpbi10b3A6IC43ZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcXG59XFxuXFxuLmFkZExpc3RCdXR0b246aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnNpZGViYXIgLmVkaXRCdXR0b24sLmVkaXRUYXNrQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMywgMjU1LCAxMDApO1xcbn1cXG5cXG4uc2lkZWJhciAuZGVsZXRlQnV0dG9uLC5kZWxldGVUYXNrQnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC4zZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc4LCA3OCk7XFxufVxcblxcbi5idXR0b25PdmVybGF5IGJ1dHRvbiwudGFza0J1dHRvbkNvbnRhaW5lciBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcXG59XFxuXFxuLmRlbGV0ZUJ1dHRvbj5pbWcsLmRlbGV0ZVRhc2tCdXR0b24+aW1ne1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNyU7XFxuICAgIGhlaWdodDogODAlO1xcbn1cXG5cXG4udGFza2xpc3RDb250YWluZXIge1xcbiAgICBtYXJnaW46IDFlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcbi5jb250ZW50SGVhZGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0NvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHBhZGRpbmc6IDFlbSAyZW07XFxufVxcblxcbi5jaGVja2xpc3RDb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNoZWNrbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC4xcmVtO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDouNWVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodENvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IC41ZW07XFxufVxcblxcbi50YXNrQ29udGFpbmVyOm50aC1jaGlsZChldmVuKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcXG59XFxuXFxuLnRhc2tDb250YWluZXIuY2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogMnB4IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2tDb250YWluZXIubG93IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1sb3dQcmlvcml0eSk7XFxufVxcblxcbi50YXNrQ29udGFpbmVyLm1vZGVyYXRlIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1tb2RlcmF0ZVByaW9yaXR5KTtcXG59XFxuXFxuLnRhc2tDb250YWluZXIuaGlnaCB7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmVkO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciBpbnB1dCB7XFxuICAgIGhlaWdodDogMS41ZW07XFxuICAgIHdpZHRoOiAxLjVlbTtcXG59XFxuXFxuLnRhc2tOYW1lIHtcXG4gICAgbWF4LXdpZHRoOiBtaW4oNjUlLDM1MHB4KTtcXG4gICAgd29yZC13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLnRhc2tCdXR0b25Db250YWluZXI+YnV0dG9uIHtcXG4gICAgbWFyZ2luOiAwIC4xNXJlbTtcXG59XFxuXFxuLnRhc2tEdWVEYXRlIHtcXG4gICAgZm9udC1zaXplOiAuNzVyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uYWRkVGFza0J1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgaGVpZ2h0OjMuNXJlbTtcXG4gICAgd2lkdGg6My41cmVtO1xcblxcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG5cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206NSU7XFxuICAgIHJpZ2h0OjN2bWluO1xcbn1cXG5cXG4uaW5mb1BhbmVsQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRDb2xvcik7XFxuICAgIG1hcmdpbjogMWVtO1xcbiAgICBtaW4taGVpZ2h0OiAzMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgd2lkdGg6IDM1JTtcXG59XFxuXFxuLmluZm9QYW5lbEhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IDFlbSAyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDMuMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pbmZvUGFuZWxIZWFkZXIubG93IHtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLWxvd1ByaW9yaXR5KTtcXG59XFxuXFxuLmluZm9QYW5lbEhlYWRlci5tb2RlcmF0ZSB7XFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1tb2RlcmF0ZVByaW9yaXR5KTtcXG59XFxuXFxuLmluZm9QYW5lbEhlYWRlci5oaWdoIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmluZm9QYW5lbEJvZHkge1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLmluZm9QYW5lbEZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmluZm9QYW5lbER1ZURhdGUge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5mb290ZXJDb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQ29sb3IpO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgY29sb3I6d2hpdGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsNENBQStCO0FBQ25DOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7O0lBRVQsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsVUFBVTs7SUFFVixhQUFhO0lBQ2IsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNi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QjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZOztJQUVaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCOzs7SUFHbEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUzs7SUFFVCxxQ0FBcUM7SUFDckMsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjs7SUFFakIsa0JBQWtCOztJQUVsQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXIgbWVkaXVtJztcXG4gICAgc3JjOiB1cmwoJy4vSW50ZXItTWVkaXVtLndvZmYnKTtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlciBtZWRpdW0nO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbiosKjpiZWZvcmUsKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5Q29sb3I6I2Q2NWU3ODtcXG4gICAgLS1saWdodENvbG9yOiNmZjhmYTc7XFxuICAgIC0tZGFya0NvbG9yOiNhMTJkNGM7XFxuICAgIC0tbG93UHJpb3JpdHk6cmdiKDMwLCAyMjYsIDMwKTtcXG4gICAgLS1tb2RlcmF0ZVByaW9yaXR5OnJnYigyNTUsIDIzOCwgMCk7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgoNmVtLDE1JSkgYXV0bztcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLm1vZGFsQmcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNik7XFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgaGVpZ2h0OiAxMDBkdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgd2lkdGg6IDEwMGR2dztcXG59XFxuXFxuLm1vZGFsQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgcGFkZGluZzogMmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbmxpIGlucHV0LGxpIHRleHRhcmVhe1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFkZFRhc2tNb2RhbCBsaTpsYXN0LWNoaWxkLCAuZWRpdFRhc2tNb2RhbCBsaTpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmxpOmxhc3QtY2hpbGQ+YnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjI1ZW0gLjc1ZW07XFxuICAgIG1hcmdpbjogLjVlbTtcXG59XFxuXFxuLm5ld1Rhc2tIZWFkZXIsLmVkaXRUYXNrSGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5hZGRUYXNrTW9kYWwsLmVkaXRUYXNrTW9kYWwsLmluZm9QYW5lbENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2RhbENvcm5lckJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOjEuNWVtO1xcbiAgICByaWdodDogMmVtO1xcbiAgICBwYWRkaW5nOiAuMmVtIC41ZW07XFxufVxcblxcbi5tb2RhbEJnIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOjFlbTtcXG59XFxuXFxuLmxpc3ROYW1lQ29udGFpbmVyLCAuYWRkTGlzdEJ1dHRvbntcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5oZWFkZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0NvbG9yKTtcXG59XFxuXFxuLnBhZ2VIZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG5cXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xcbiAgICBwYWRkaW5nOiAuNWVtIDA7XFxufVxcblxcbi5zaWRlYmFyQ29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRDb2xvcik7XFxufVxcblxcbi5zaWRlYmFySGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IC41ZW0gMDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6LjVlbTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRDb2xvcik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNpZGViYXIgbGkge1xcbiAgICBwYWRkaW5nOiAuNzVlbTtcXG59XFxuXFxuLnNpZGViYXJJdGVtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICBtaW4taGVpZ2h0OiAyLjY1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5zaWRlYmFySXRlbUNvbnRhaW5lciBkaXYge1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCBhbmQgSUUgMTEgKi9cXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFySXRlbUNvbnRhaW5lciBkaXY6Zmlyc3QtY2hpbGR7XFxuICAgIG1heC13aWR0aDogbWF4KDgwcHgsOTAlKTtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uc2lkZWJhckl0ZW1Db250YWluZXIuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0NvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnNhdmVCdXR0b24+aW1ne1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIHRvcDo1JTtcXG59XFxuXFxuLmxpc3ROYW1lQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAuMjVlbTtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG5cXG4udGFza0J1dHRvbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaWRlYmFySXRlbUNvbnRhaW5lciAuYnV0dG9uT3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6NSU7XFxuXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnNpZGViYXJJdGVtQ29udGFpbmVyOmhvdmVyIC5idXR0b25PdmVybGF5IHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnNpZGViYXIgYnV0dG9uLC50YXNrQnV0dG9uQ29udGFpbmVyIGJ1dHRvbntcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgbWluLXdpZHRoOiAyZW07XFxuICAgIGhlaWdodDogMmVtO1xcbn1cXG5cXG4uc2lkZWJhciAuYWRkTGlzdEJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG4gICAgd2lkdGg6IDVlbTtcXG4gICAgbWFyZ2luLXRvcDogLjdlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNWVtO1xcbn1cXG5cXG4uYWRkTGlzdEJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uc2lkZWJhciAuZWRpdEJ1dHRvbiwuZWRpdFRhc2tCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEzLCAyNTUsIDEwMCk7XFxufVxcblxcbi5zaWRlYmFyIC5kZWxldGVCdXR0b24sLmRlbGV0ZVRhc2tCdXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogLjNlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgNzgsIDc4KTtcXG59XFxuXFxuLmJ1dHRvbk92ZXJsYXkgYnV0dG9uLC50YXNrQnV0dG9uQ29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xcbn1cXG5cXG4uZGVsZXRlQnV0dG9uPmltZywuZGVsZXRlVGFza0J1dHRvbj5pbWd7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiA3JTtcXG4gICAgaGVpZ2h0OiA4MCU7XFxufVxcblxcbi50YXNrbGlzdENvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMWVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGVudENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG59XFxuXFxuLmNvbnRlbnRIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQ29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gICAgcGFkZGluZzogMWVtIDJlbTtcXG59XFxuXFxuLmNoZWNrbGlzdENvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY2hlY2tsaXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjFyZW07XFxufVxcblxcbi50YXNrQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOi41ZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Q29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogLjVlbTtcXG59XFxuXFxuLnRhc2tDb250YWluZXI6bnRoLWNoaWxkKGV2ZW4pe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lci5jaGVja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiAycHggbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lci5sb3cge1xcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLWxvd1ByaW9yaXR5KTtcXG59XFxuXFxuLnRhc2tDb250YWluZXIubW9kZXJhdGUge1xcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLW1vZGVyYXRlUHJpb3JpdHkpO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lci5oaWdoIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCByZWQ7XFxufVxcblxcbi50YXNrQ29udGFpbmVyIGlucHV0IHtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG4gICAgd2lkdGg6IDEuNWVtO1xcbn1cXG5cXG4udGFza05hbWUge1xcbiAgICBtYXgtd2lkdGg6IG1pbig2NSUsMzUwcHgpO1xcbiAgICB3b3JkLXdyYXA6IGFueXdoZXJlO1xcbn1cXG5cXG4udGFza0J1dHRvbkNvbnRhaW5lcj5idXR0b24ge1xcbiAgICBtYXJnaW46IDAgLjE1cmVtO1xcbn1cXG5cXG4udGFza0R1ZURhdGUge1xcbiAgICBmb250LXNpemU6IC43NXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5hZGRUYXNrQnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBoZWlnaHQ6My41cmVtO1xcbiAgICB3aWR0aDozLjVyZW07XFxuXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcblxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTo1JTtcXG4gICAgcmlnaHQ6M3ZtaW47XFxufVxcblxcbi5pbmZvUGFuZWxDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodENvbG9yKTtcXG4gICAgbWFyZ2luOiAxZW07XFxuICAgIG1pbi1oZWlnaHQ6IDMwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgICB3aWR0aDogMzUlO1xcbn1cXG5cXG4uaW5mb1BhbmVsSGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0NvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogMWVtIDJlbTtcXG4gICAgbWluLWhlaWdodDogMy4xcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmluZm9QYW5lbEhlYWRlci5sb3cge1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tbG93UHJpb3JpdHkpO1xcbn1cXG5cXG4uaW5mb1BhbmVsSGVhZGVyLm1vZGVyYXRlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLW1vZGVyYXRlUHJpb3JpdHkpO1xcbn1cXG5cXG4uaW5mb1BhbmVsSGVhZGVyLmhpZ2gge1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgcmVkO1xcbn1cXG5cXG4uaW5mb1BhbmVsQm9keSB7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uaW5mb1BhbmVsRm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW5mb1BhbmVsRHVlRGF0ZSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmZvb3RlckNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGFwcGVuZChwYXJlbnQsIGNoaWxkKSB7XG4gIGlmIChjaGlsZC5sZW5ndGgpIHtcbiAgICBjaGlsZC5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBlbmQ7XG4iLCJpbXBvcnQgbWFrZUVsZW1lbnQgZnJvbSAnLi9tYWtlRWxlbWVudCc7XG5cbmZ1bmN0aW9uIG1ha2VBc3NldCh0eXBlKSB7XG4gIGNvbnN0IGltYWdlID0gbWFrZUVsZW1lbnQoJ2ltZycpO1xuICBpZiAodHlwZSA9PT0gJ2VkaXQnKSB7XG4gICAgaW1hZ2Uuc3JjID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnYzNSeWIydGxMV3hwYm1WcWIybHVQU0p5YjNWdVpDSWdjM1J5YjJ0bExXMXBkR1Z5YkdsdGFYUTlJaklpSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0OGNHRjBhQ0JrUFNKdE1URXVNalVnTm1NdU16azRJREFnTGpjMUxqTTFNaTQzTlM0M05TQXdJQzQwTVRRdExqTXpOaTQzTlMwdU56VXVOelV0TVM0MU1EVWdNQzAzTGpjMUlEQXROeTQzTlNBd2RqRXlhREUzZGkwNExqYzBPV013TFM0ME1UUXVNek0yTFM0M05TNDNOUzB1TnpWekxqYzFMak16Tmk0M05TNDNOWFk1TGpJME9XTXdJQzQyTWpFdExqVXlNaUF4TFRFZ01XZ3RNVGhqTFM0ME9DQXdMVEV0TGpNM09TMHhMVEYyTFRFell6QXRMalE0TVM0ek9DMHhJREV0TVhwdE1TNDFNakVnT1M0Mk9Ea2dPUzR3TVRJdE9TNHdNVEpqTGpFek15MHVNVE16TGpJeE55MHVNekk1TGpJeE55MHVOVE15SURBdExqRTNPUzB1TURZMUxTNHpOak10TGpJeE9DMHVOVEUxYkMweUxqUXlNeTB5TGpReE5XTXRMakUwTXkwdU1UUXpMUzR6TXpNdExqSXhOUzB1TlRJeUxTNHlNVFZ6TFM0ek56Z3VNRGN5TFM0MU1qTXVNakUxYkMwNUxqQXlOeUE0TGprNU5tTXRMalEwTWlBeExqTTNNUzB4TGpFMU9DQXpMalU0TmkweExqSTJOQ0F6TGprMU1pMHVNVEkyTGpRek15NHhPVGd1T0RNMExqVTNNaTQ0TXpRdU5ERWdNQ0F1TmprMkxTNHdPVGtnTkM0eE56WXRNUzR6TURoNmJTMHlMakkxT0MweUxqTTVNaUF4TGpFM0lERXVNVGN4WXkwdU56QTBMakl6TWkweExqSTNOQzQwTVRndE1TNDNNamt1TlRZMmVtMHVPVFk0TFRFdU1UVTBJRGN1TXpVMkxUY3VNek14SURFdU16UTNJREV1TXpReUxUY3VNelEySURjdU16UTNlaUlnWm1sc2JDMXlkV3hsUFNKdWIyNTZaWEp2SWk4K1BDOXpkbWMrJztcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnZGVsZXRlJykge1xuICAgIGltYWdlLnNyYyA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXlOQ0lnYUdWcFoyaDBQU0l5TkNJZ2RtbGxkMEp2ZUQwaU1DQXdJREkwSURJMElqNDhjR0YwYUNCa1BTSk5NeUEyZGpFNGFERTRkaTB4T0dndE1UaDZiVFVnTVRSak1DQXVOVFV5TFM0ME5EZ2dNUzB4SURGekxURXRMalEwT0MweExURjJMVEV3WXpBdExqVTFNaTQwTkRndE1TQXhMVEZ6TVNBdU5EUTRJREVnTVhZeE1IcHROU0F3WXpBZ0xqVTFNaTB1TkRRNElERXRNU0F4Y3kweExTNDBORGd0TVMweGRpMHhNR013TFM0MU5USXVORFE0TFRFZ01TMHhjekVnTGpRME9DQXhJREYyTVRCNmJUVWdNR013SUM0MU5USXRMalEwT0NBeExURWdNWE10TVMwdU5EUTRMVEV0TVhZdE1UQmpNQzB1TlRVeUxqUTBPQzB4SURFdE1YTXhJQzQwTkRnZ01TQXhkakV3ZW0wMExURTRkakpvTFRJd2RpMHlhRFV1TnpFeFl5NDVJREFnTVM0Mk16RXRNUzR3T1RrZ01TNDJNekV0TW1nMUxqTXhOV013SUM0NU1ERXVOek1nTWlBeExqWXpNU0F5YURVdU56RXllaUl2UGp3dmMzWm5QZz09JztcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnY2FuY2VsJykge1xuICAgIGltYWdlLnNyYyA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ2MzUnliMnRsTFd4cGJtVnFiMmx1UFNKeWIzVnVaQ0lnYzNSeWIydGxMVzFwZEdWeWJHbHRhWFE5SWpJaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNDhjR0YwYUNCa1BTSnRNVElnTVRBdU9UTWdOUzQzTVRrdE5TNDNNbU11TVRRMkxTNHhORFl1TXpNNUxTNHlNVGt1TlRNeExTNHlNVGt1TkRBMElEQWdMamMxTGpNeU5DNDNOUzQzTkRrZ01DQXVNVGt6TFM0d056TXVNemcxTFM0eU1Ua3VOVE15YkMwMUxqY3lJRFV1TnpFNUlEVXVOekU1SURVdU56RTVZeTR4TkRjdU1UUTNMakl5TGpNek9TNHlNaTQxTXpFZ01DQXVOREkzTFM0ek5Ea3VOelV0TGpjMUxqYzFMUzR4T1RJZ01DMHVNemcxTFM0d056TXRMalV6TVMwdU1qRTViQzAxTGpjeE9TMDFMamN4T1MwMUxqY3hPU0ExTGpjeE9XTXRMakUwTmk0eE5EWXRMak16T1M0eU1Ua3RMalV6TVM0eU1Ua3RMalF3TVNBd0xTNDNOUzB1TXpJekxTNDNOUzB1TnpVZ01DMHVNVGt5TGpBM015MHVNemcwTGpJeUxTNDFNekZzTlM0M01Ua3ROUzQzTVRrdE5TNDNNaTAxTGpjeE9XTXRMakUwTmkwdU1UUTNMUzR5TVRrdExqTXpPUzB1TWpFNUxTNDFNeklnTUMwdU5ESTFMak0wTmkwdU56UTVMamMxTFM0M05Ea3VNVGt5SURBZ0xqTTROUzR3TnpNdU5UTXhMakl4T1hvaUx6NDhMM04yWno0PSc7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NhdmUnKSB7XG4gICAgaW1hZ2Uuc3JjID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeU5DSWdhR1ZwWjJoMFBTSXlOQ0lnZG1sbGQwSnZlRDBpTUNBd0lESTBJREkwSWo0OGNHRjBhQ0JrUFNKTk1UUWdNMmd5TGprNU4zWTFhQzB5TGprNU4zWXROWHB0T1NBeGRqSXdhQzB5TW5ZdE1qUm9NVGN1T1RrM2JEUXVNREF6SURSNmJTMHhOeUExYURFeWRpMDNhQzB4TW5ZM2VtMHhOQ0EwYUMweE5uWTVhREUyZGkwNWVpSXZQand2YzNablBnPT0nO1xuICB9XG4gIHJldHVybiBpbWFnZTtcbn1cblxuZnVuY3Rpb24gZ2V0QXNzZXQoYXNzZXQpIHtcbiAgcmV0dXJuIG1ha2VBc3NldChhc3NldCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEFzc2V0O1xuIiwiaW1wb3J0IG1ha2VFbGVtZW50IGZyb20gJy4vbWFrZUVsZW1lbnQnO1xuaW1wb3J0IGFwcGVuZCBmcm9tICcuL2FwcGVuZCc7XG5cbmZ1bmN0aW9uIGRpc3BsYXkoZm9ybSwgbGlzdHMsIGFjdGl2ZUxpc3QpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsQmcnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBpZiAoZm9ybSA9PT0gJ2FkZCcpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFza01vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfSBlbHNlIGlmIChmb3JtID09PSAnZWRpdCcpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFRhc2tNb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIH1cblxuICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0U2VsZWN0RHJvcGRvd24nKTtcbiAgaWYgKGRyb3Bkb3duLmNoaWxkcmVuLmxlbmd0aCAhPT0gbGlzdHMubGVuZ3RoKSB7XG4gICAgd2hpbGUgKGRyb3Bkb3duLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGRyb3Bkb3duLnJlbW92ZUNoaWxkKGRyb3Bkb3duLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBsaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICBjb25zdCBhTGlzdCA9IG1ha2VFbGVtZW50KCdvcHRpb24nLCAnJywgbGlzdC5saXN0TmFtZSk7XG4gICAgICBhTGlzdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBsaXN0LmlkKTtcbiAgICAgIGFwcGVuZChkcm9wZG93biwgYUxpc3QpO1xuICAgIH0pO1xuICB9XG4gIGRyb3Bkb3duLnNlbGVjdGVkSW5kZXggPSBsaXN0cy5tYXAoKGVsZW0pID0+IGVsZW0uaWQpLmluZGV4T2YoYWN0aXZlTGlzdC5pZCk7Ly8gZGVmYXVsdHMgbGlzdCBzZWxlY3QgdG8gY3VycmVudCBhY3RpdmUgbGlzdFxufVxuXG5mdW5jdGlvbiBjaGFuZ2VBY3RpdmVMaXN0KGFjdGl2ZUxpc3QsIGhpZGVQYW5lbCkgeyAvLyBjaGFuZ2UgY29udGVudCBhcmVhIHRleHQsIGRpc3BsYXkgcmVzcGVjdGl2ZSBsaXN0IHRhc2tzXG4gIGlmIChoaWRlUGFuZWwpIHsgLy8gSGlkZSBpbmZvIHBhbmVsIHdoZW4gY2hhbmdpbmcgbGlzdHNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mb1BhbmVsQ29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2xpc3QnKTtcbiAgd2hpbGUgKHRhc2tMaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICB0YXNrTGlzdC5yZW1vdmVDaGlsZCh0YXNrTGlzdC5maXJzdENoaWxkKTtcbiAgfVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudEhlYWRlcicpLnRleHRDb250ZW50ID0gYWN0aXZlTGlzdC5saXN0TmFtZTtcbiAgY29uc3QgdGFza3MgPSBhY3RpdmVMaXN0LnRhc2tzLm1hcCgoZWxlbSkgPT4gZWxlbS50YXNrQ29udGFpbmVyKTtcbiAgaWYgKHRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICBhcHBlbmQodGFza0xpc3QsIHRhc2tzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKGZvcm0pIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsQmcnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFza01vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRUYXNrTW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBmb3JtLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUluZm9QYW5lbCh0YXNrKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvUGFuZWxIZWFkZXInKS50ZXh0Q29udGVudCA9IHRhc2sudGFzaztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm9QYW5lbEJvZHknKS50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gIGlmICh0YXNrLmR1ZURhdGUpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mb1BhbmVsRHVlRGF0ZScpLnRleHRDb250ZW50ID0gYER1ZSAke3Rhc2suZHVlRGF0ZX1gOy8vIG1ha2Ugc3VyZSB3b3JreVxuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvUGFuZWxEdWVEYXRlJykudGV4dENvbnRlbnQgPSAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVQYW5lbChhY3RpdmVUYXNrKSB7XG4gIGNvbnN0IHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm9QYW5lbENvbnRhaW5lcicpO1xuICBwYW5lbC5zdHlsZS5kaXNwbGF5ID0gYWN0aXZlVGFzayA/ICdibG9jaycgOiAnbm9uZSc7XG59XG5cbmV4cG9ydCB7XG4gIGRpc3BsYXksIGNoYW5nZUFjdGl2ZUxpc3QsIGNsb3NlTW9kYWwsIHVwZGF0ZUluZm9QYW5lbCwgdG9nZ2xlUGFuZWwsXG59O1xuIiwiZnVuY3Rpb24gZ2VuZXJhdGVJZChsaXN0KSB7XG4gIGxldCBpZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApO1xuICB3aGlsZSAoY2hlY2tJZklkRXhpc3RzKGxpc3QsIGlkKSkge1xuICAgIGlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XG4gIH1cbiAgcmV0dXJuIGlkO1xufVxuXG5mdW5jdGlvbiBjaGVja0lmSWRFeGlzdHMobGlzdCwgaWQpIHtcbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGxldCBleGlzdHMgPSBmYWxzZTtcbiAgbGlzdC5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgaWYgKGVsZW0uaWQgPT09IGlkKSB7XG4gICAgICBleGlzdHMgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBleGlzdHM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlSWQ7XG4iLCJpbXBvcnQgYXBwZW5kIGZyb20gJy4vYXBwZW5kJztcbmltcG9ydCBtYWtlRWxlbWVudCBmcm9tICcuL21ha2VFbGVtZW50JztcbmltcG9ydCB7IG5ld0xpc3RJbnB1dCwgbGlzdHMsIGFjdGl2ZUxpc3QgfSBmcm9tICcuL2xpc3RGdW5jdGlvbnMnO1xuaW1wb3J0IHsgY2xvc2VNb2RhbCwgZGlzcGxheSB9IGZyb20gJy4vZGlzcGxheUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgYWRkVGFzaywgZWRpdFRhc2sgfSBmcm9tICcuL3Rhc2tGdW5jdGlvbnMnO1xuXG5mdW5jdGlvbiBpbml0aWFsTG9hZCgpIHtcbiAgY29uc3QgbW9kYWxCZyA9IG1ha2VFbGVtZW50KCdkaXYnLCAnbW9kYWxCZycpO1xuICBtb2RhbEJnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxDb250YWluZXInKS5maXJzdENoaWxkLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgY2xvc2VNb2RhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VGFza0Zvcm0nKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsb3NlTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRUYXNrRm9ybScpKTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBtb2RhbENvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCAnbW9kYWxDb250YWluZXInKTtcbiAgbW9kYWxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG5cbiAgY29uc3QgYWRkTW9kYWwgPSBjcmVhdGVBZGRUYXNrTW9kYWwoKTtcbiAgY29uc3QgZWRpdE1vZGFsID0gY3JlYXRlRWRpdFRhc2tNb2RhbCgpO1xuXG4gIGFwcGVuZChtb2RhbENvbnRhaW5lciwgW2FkZE1vZGFsLCBlZGl0TW9kYWxdKTtcbiAgYXBwZW5kKG1vZGFsQmcsIG1vZGFsQ29udGFpbmVyKTtcblxuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgJ2hlYWRlckNvbnRhaW5lcicpO1xuICBjb25zdCBoZWFkZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgWydoZWFkZXInLCAncGFnZUhlYWRlciddLCAnVG8gRG8nKTtcbiAgYXBwZW5kKGhlYWRlckNvbnRhaW5lciwgaGVhZGVyKTtcblxuICBjb25zdCBzaWRlYmFyQ29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsICdzaWRlYmFyQ29udGFpbmVyJyk7XG4gIGNvbnN0IHNpZGViYXJIZWFkZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgWydoZWFkZXInLCAnc2lkZWJhckhlYWRlciddLCAnWW91ciBMaXN0cycpO1xuICBjb25zdCBzaWRlYmFyID0gbWFrZUVsZW1lbnQoJ3VsJywgJ3NpZGViYXInKTtcbiAgY29uc3QgYWRkTGlzdEJ1dHRvbiA9IG1ha2VFbGVtZW50KCdidXR0b24nLCAnYWRkTGlzdEJ1dHRvbicsICcrJyk7XG5cbiAgYWRkTGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld0xpc3RJbnB1dCk7XG5cbiAgYXBwZW5kKHNpZGViYXIsIGFkZExpc3RCdXR0b24pO1xuICBhcHBlbmQoc2lkZWJhckNvbnRhaW5lciwgW3NpZGViYXJIZWFkZXIsIHNpZGViYXJdKTtcblxuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsICdjb250ZW50Q29udGFpbmVyJyk7XG5cbiAgY29uc3QgdGFza2xpc3RDb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgJ3Rhc2tsaXN0Q29udGFpbmVyJyk7XG4gIGNvbnN0IGNvbnRlbnRIZWFkZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgWydoZWFkZXInLCAnY29udGVudEhlYWRlciddKTtcblxuICBjb25zdCBjb250ZW50ID0gbWFrZUVsZW1lbnQoJ2RpdicsICdjb250ZW50Jyk7XG4gIGNvbnN0IGNoZWNrbGlzdENvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCAnY2hlY2tsaXN0Q29udGFpbmVyJyk7XG4gIGNvbnN0IGNoZWNrbGlzdCA9IG1ha2VFbGVtZW50KCdvbCcsICdjaGVja2xpc3QnKTtcblxuICBjb25zdCBpbmZvUGFuZWwgPSBjcmVhdGVJbmZvUGFuZWwoKTtcblxuICBjb25zdCBuZXdUYXNrQnV0dG9uID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsICdhZGRUYXNrQnV0dG9uJywgJysnKTtcbiAgbmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkaXNwbGF5KCdhZGQnLCBsaXN0cywgYWN0aXZlTGlzdCk7XG4gIH0pO1xuXG4gIGFwcGVuZChjaGVja2xpc3RDb250YWluZXIsIGNoZWNrbGlzdCk7XG4gIGFwcGVuZChjb250ZW50LCBjaGVja2xpc3RDb250YWluZXIpO1xuICBhcHBlbmQodGFza2xpc3RDb250YWluZXIsIFtjb250ZW50SGVhZGVyLCBjb250ZW50LCBuZXdUYXNrQnV0dG9uXSk7XG4gIGFwcGVuZChjb250ZW50Q29udGFpbmVyLCBbdGFza2xpc3RDb250YWluZXIsIGluZm9QYW5lbF0pO1xuXG4gIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCAnZm9vdGVyQ29udGFpbmVyJyk7XG4gIGNvbnN0IHVybCA9IG1ha2VFbGVtZW50KCdhJywgJycsICdHaXRodWInKTsvLyB0b2RvIC0gZml4IGFmdGVyIGZpbmRpbmcgbmV3IGljb25cbiAgdXJsLmhyZWYgPSAnJzsvLyB0b2RvIC0gZ2V0IGdpdGh1YiBpY29uIGZyb20gZGlmZmVyZW50IHNvdXJjZVxuICBjb25zdCBpbWFnZSA9IG1ha2VFbGVtZW50KCdpbWcnLCAnZ2l0aHViVXJsJyk7XG4gIGNvbnN0IGZvb3RlciA9IG1ha2VFbGVtZW50KCdhJywgJ2Zvb3RlcicpO1xuICBmb290ZXIuaHJlZiA9ICdodHRwczpnaXRodWIuY29tL0tLZXlmdW4nO1xuICBhcHBlbmQoZm9vdGVyLCBpbWFnZSk7XG4gIGFwcGVuZChmb290ZXJDb250YWluZXIsIFtmb290ZXIsIHVybF0pO1xuICBhcHBlbmQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLCBbbW9kYWxCZywgaGVhZGVyQ29udGFpbmVyLCBzaWRlYmFyQ29udGFpbmVyLCBjb250ZW50Q29udGFpbmVyLCBmb290ZXJDb250YWluZXJdKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWRkVGFza01vZGFsKCkge1xuICBjb25zdCBhZGRUYXNrTW9kYWwgPSBtYWtlRWxlbWVudCgnZGl2JywgJ2FkZFRhc2tNb2RhbCcpO1xuICBjb25zdCBuZXdUYXNrRm9ybSA9IG1ha2VFbGVtZW50KCdmb3JtJywgJ25ld1Rhc2tGb3JtJyk7XG5cbiAgY29uc3QgdUxpc3QgPSBtYWtlRWxlbWVudCgndWwnKTtcblxuICBjb25zdCBsaXN0SXRlbUEgPSBtYWtlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbmV3VGFza0hlYWRlciA9IG1ha2VFbGVtZW50KCdkaXYnLCBbJ2hlYWRlcicsICduZXdUYXNrSGVhZGVyJ10sICdOZXcgVGFzaycpO1xuICBjb25zdCBuZXdUYXNrQ2FuY2VsQnV0dG9uID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsICdtb2RhbENvcm5lckJ1dHRvbicsICdDYW5jZWwnKTtcbiAgbmV3VGFza0NhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2xvc2VNb2RhbChuZXdUYXNrRm9ybSk7XG4gIH0pO1xuICBhcHBlbmQobGlzdEl0ZW1BLCBbbmV3VGFza0hlYWRlciwgbmV3VGFza0NhbmNlbEJ1dHRvbl0pO1xuXG4gIGNvbnN0IGxpc3RJdGVtQiA9IG1ha2VFbGVtZW50KCdsaScpO1xuICBjb25zdCBuZXdUYXNrTmFtZSA9IG1ha2VFbGVtZW50KCdpbnB1dCcsICduZXdUYXNrTmFtZScpO1xuICBuZXdUYXNrTmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBjb25zdCBuZXdUYXNrTmFtZUxhYmVsID0gbWFrZUVsZW1lbnQoJ2xhYmVsJywgJ2xhYmVsJywgJ1Rhc2sgTmFtZTogJyk7XG4gIGFwcGVuZChsaXN0SXRlbUIsIFtuZXdUYXNrTmFtZUxhYmVsLCBuZXdUYXNrTmFtZV0pO1xuXG4gIGNvbnN0IGxpc3RJdGVtQyA9IG1ha2VFbGVtZW50KCdsaScpO1xuICBjb25zdCBsaXN0U2VsZWN0TGFiZWwgPSBtYWtlRWxlbWVudCgnbGFiZWwnLCAnbGFiZWwnLCAnTGlzdDogJyk7XG4gIGNvbnN0IGxpc3RTZWxlY3REcm9wZG93biA9IG1ha2VFbGVtZW50KCdzZWxlY3QnLCAnbGlzdFNlbGVjdERyb3Bkb3duJyk7XG4gIGFwcGVuZChsaXN0SXRlbUMsIFtsaXN0U2VsZWN0TGFiZWwsIGxpc3RTZWxlY3REcm9wZG93bl0pO1xuXG4gIGNvbnN0IGxpc3RJdGVtRCA9IG1ha2VFbGVtZW50KCdsaScpO1xuICBjb25zdCBuZXdUYXNrRGVzY3JpcHRpb25MYWJlbCA9IG1ha2VFbGVtZW50KCdsYWJlbCcsICdsYWJlbCcsICdEZXNjcmlwdGlvbjogJyk7XG4gIGNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IG1ha2VFbGVtZW50KCd0ZXh0YXJlYScsICduZXdUYXNrRGVzY3JpcHRpb24nKTtcbiAgbmV3VGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncm93cycsICczJyk7XG4gIGFwcGVuZChsaXN0SXRlbUQsIFtuZXdUYXNrRGVzY3JpcHRpb25MYWJlbCwgbmV3VGFza0Rlc2NyaXB0aW9uXSk7XG5cbiAgY29uc3QgbGlzdEl0ZW1FID0gbWFrZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IG5ld1Rhc2tEdWVEYXRlTGFiZWwgPSBtYWtlRWxlbWVudCgnbGFiZWwnLCAnbGFiZWwnLCAnRHVlIERhdGU6ICcpO1xuICBjb25zdCBuZXdUYXNrRHVlRGF0ZSA9IG1ha2VFbGVtZW50KCdpbnB1dCcsICduZXdUYXNrRHVlRGF0ZScpO1xuICBuZXdUYXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICBuZXdUYXNrRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ21pbicsICcyMDIzLTAxLTAxJyk7XG4gIGFwcGVuZChsaXN0SXRlbUUsIFtuZXdUYXNrRHVlRGF0ZUxhYmVsLCBuZXdUYXNrRHVlRGF0ZV0pO1xuXG4gIGNvbnN0IGxpc3RJdGVtRiA9IG1ha2VFbGVtZW50KCdsaScpO1xuICBjb25zdCBuZXdUYXNrUHJpb3JpdHlMYWJlbCA9IG1ha2VFbGVtZW50KCdsYWJlbCcsICdsYWJlbCcsICdUYXNrIFByaW9yaXR5OiAnKTtcbiAgY29uc3QgbmV3VGFza1ByaW9yaXR5ID0gbWFrZUVsZW1lbnQoJ3NlbGVjdCcsICduZXdUYXNrUHJpb3JpdHknKTtcbiAgYXBwZW5kKG5ld1Rhc2tQcmlvcml0eSwgW21ha2VFbGVtZW50KCdvcHRpb24nLCAnJywgJ0xvdycpLCBtYWtlRWxlbWVudCgnb3B0aW9uJywgJycsICdNb2RlcmF0ZScpLCBtYWtlRWxlbWVudCgnb3B0aW9uJywgJycsICdIaWdoJyldKTtcbiAgYXBwZW5kKGxpc3RJdGVtRiwgW25ld1Rhc2tQcmlvcml0eUxhYmVsLCBuZXdUYXNrUHJpb3JpdHldKTtcblxuICBjb25zdCBsaXN0SXRlbUcgPSBtYWtlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbmV3VGFza0FkZEJ1dHRvbiA9IG1ha2VFbGVtZW50KCdidXR0b24nLCAnbmV3VGFza0FkZEJ1dHRvbicsICdBZGQgVGFzaycpO1xuICBuZXdUYXNrQWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGRUYXNrKCk7XG4gIH0pO1xuXG4gIGFwcGVuZChsaXN0SXRlbUcsIG5ld1Rhc2tBZGRCdXR0b24pO1xuXG4gIGFwcGVuZCh1TGlzdCwgW2xpc3RJdGVtQSwgbGlzdEl0ZW1CLCBsaXN0SXRlbUMsIGxpc3RJdGVtRCwgbGlzdEl0ZW1FLCBsaXN0SXRlbUYsIGxpc3RJdGVtR10pO1xuICBhcHBlbmQobmV3VGFza0Zvcm0sIHVMaXN0KTtcblxuICBhcHBlbmQoYWRkVGFza01vZGFsLCBbbmV3VGFza0Zvcm1dKTtcbiAgcmV0dXJuIGFkZFRhc2tNb2RhbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWRpdFRhc2tNb2RhbCgpIHtcbiAgY29uc3QgZWRpdFRhc2tNb2RhbCA9IG1ha2VFbGVtZW50KCdkaXYnLCAnZWRpdFRhc2tNb2RhbCcpO1xuICBjb25zdCBlZGl0VGFza0Zvcm0gPSBtYWtlRWxlbWVudCgnZm9ybScsICdlZGl0VGFza0Zvcm0nKTtcblxuICBjb25zdCB1TGlzdCA9IG1ha2VFbGVtZW50KCd1bCcpO1xuXG4gIGNvbnN0IGxpc3RJdGVtQSA9IG1ha2VFbGVtZW50KCdsaScpO1xuICBjb25zdCBlZGl0VGFza0hlYWRlciA9IG1ha2VFbGVtZW50KCdkaXYnLCBbJ2hlYWRlcicsICdlZGl0VGFza0hlYWRlciddLCAnRWRpdCBUYXNrJyk7XG4gIGFwcGVuZChsaXN0SXRlbUEsIGVkaXRUYXNrSGVhZGVyKTtcblxuICBjb25zdCBsaXN0SXRlbUIgPSBtYWtlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgZWRpdFRhc2tUaXRsZUxhYmVsID0gbWFrZUVsZW1lbnQoJ2xhYmVsJywgJ2xhYmVsJywgJ1Rhc2sgVGl0bGU6ICcpO1xuICBjb25zdCBlZGl0VGFza1RpdGxlID0gbWFrZUVsZW1lbnQoJ2lucHV0JywgJ2VkaXRUYXNrVGl0bGUnKTtcbiAgYXBwZW5kKGxpc3RJdGVtQiwgW2VkaXRUYXNrVGl0bGVMYWJlbCwgZWRpdFRhc2tUaXRsZV0pO1xuXG4gIGNvbnN0IGxpc3RJdGVtQyA9IG1ha2VFbGVtZW50KCdsaScpO1xuICBjb25zdCBlZGl0VGFza0Rlc2NyaXB0aW9uTGFiZWwgPSBtYWtlRWxlbWVudCgnbGFiZWwnLCAnbGFiZWwnLCAnVGFzayBEZXNjcmlwdGlvbjogJyk7XG4gIGNvbnN0IGVkaXRUYXNrRGVzY3JpcHRpb24gPSBtYWtlRWxlbWVudCgndGV4dGFyZWEnLCAnZWRpdFRhc2tEZXNjcmlwdGlvbicpO1xuICBlZGl0VGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncm93cycsICczJyk7XG4gIGFwcGVuZChsaXN0SXRlbUMsIFtlZGl0VGFza0Rlc2NyaXB0aW9uTGFiZWwsIGVkaXRUYXNrRGVzY3JpcHRpb25dKTtcblxuICBjb25zdCBsaXN0SXRlbUQgPSBtYWtlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgZWRpdER1ZURhdGVMYWJlbCA9IG1ha2VFbGVtZW50KCdsYWJlbCcsICdsYWJlbCcsICdEdWUgRGF0ZTogJyk7XG4gIGNvbnN0IGVkaXREdWVEYXRlID0gbWFrZUVsZW1lbnQoJ2lucHV0JywgJ2VkaXREdWVEYXRlJyk7XG4gIGVkaXREdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGVkaXREdWVEYXRlLnNldEF0dHJpYnV0ZSgnbWluJywgJzIwMjMtMDEtMDEnKTtcbiAgYXBwZW5kKGxpc3RJdGVtRCwgW2VkaXREdWVEYXRlTGFiZWwsIGVkaXREdWVEYXRlXSk7XG5cbiAgY29uc3QgbGlzdEl0ZW1FID0gbWFrZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGVkaXRQcmlvcml0eUxhYmVsID0gbWFrZUVsZW1lbnQoJ2xhYmVsJywgJ2xhYmVsJywgJ1ByaW9yaXR5OiAnKTtcbiAgY29uc3QgZWRpdFByaW9yaXR5ID0gbWFrZUVsZW1lbnQoJ3NlbGVjdCcsICdlZGl0UHJpb3JpdHknKTtcbiAgYXBwZW5kKGVkaXRQcmlvcml0eSwgW21ha2VFbGVtZW50KCdvcHRpb24nLCAnJywgJ0xvdycpLCBtYWtlRWxlbWVudCgnb3B0aW9uJywgJycsICdNb2RlcmF0ZScpLCBtYWtlRWxlbWVudCgnb3B0aW9uJywgJycsICdIaWdoJyldKTtcbiAgYXBwZW5kKGxpc3RJdGVtRSwgW2VkaXRQcmlvcml0eUxhYmVsLCBlZGl0UHJpb3JpdHldKTtcblxuICBjb25zdCBsaXN0SXRlbUYgPSBtYWtlRWxlbWVudCgnbGknKTtcbiAgY29uc3Qgc2F2ZUVkaXQgPSBtYWtlRWxlbWVudCgnYnV0dG9uJywgJ3NhdmVFZGl0JywgJ1NhdmUgQ2hhbmdlcycpOy8vIHRvZG8gLSBTYXZlIGljb25cblxuICBzYXZlRWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZWRpdFRhc2soKTtcbiAgICBjbG9zZU1vZGFsKGVkaXRUYXNrRm9ybSk7XG4gIH0pO1xuICBjb25zdCBjYW5jZWxFZGl0ID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsICdjYW5jZWxFZGl0JywgJ0NhbmNlbCcpO1xuICBjYW5jZWxFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjbG9zZU1vZGFsKGVkaXRUYXNrRm9ybSk7XG4gIH0pO1xuICBhcHBlbmQobGlzdEl0ZW1GLCBbc2F2ZUVkaXQsIGNhbmNlbEVkaXRdKTtcblxuICBhcHBlbmQodUxpc3QsIFtsaXN0SXRlbUEsIGxpc3RJdGVtQiwgbGlzdEl0ZW1DLCBsaXN0SXRlbUQsIGxpc3RJdGVtRSwgbGlzdEl0ZW1GXSk7XG4gIGFwcGVuZChlZGl0VGFza0Zvcm0sIHVMaXN0KTtcbiAgYXBwZW5kKGVkaXRUYXNrTW9kYWwsIFtlZGl0VGFza0Zvcm1dKTtcblxuICByZXR1cm4gZWRpdFRhc2tNb2RhbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mb1BhbmVsKCkge1xuICBjb25zdCBpbmZvUGFuZWxDb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgJ2luZm9QYW5lbENvbnRhaW5lcicpO1xuICBjb25zdCBpbmZvUGFuZWwgPSBtYWtlRWxlbWVudCgnZGl2JywgJ2luZm9QYW5lbCcpO1xuICBjb25zdCBpbmZvUGFuZWxIZWFkZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgWydoZWFkZXInLCAnaW5mb1BhbmVsSGVhZGVyJ10pO1xuICBjb25zdCBpbmZvUGFuZWxCb2R5ID0gbWFrZUVsZW1lbnQoJ2RpdicsICdpbmZvUGFuZWxCb2R5Jyk7XG4gIGNvbnN0IGluZm9QYW5lbEZvb3RlciA9IG1ha2VFbGVtZW50KCdkaXYnLCAnaW5mb1BhbmVsRm9vdGVyJyk7XG4gIGNvbnN0IGluZm9QYW5lbER1ZURhdGUgPSBtYWtlRWxlbWVudCgnZGl2JywgJ2luZm9QYW5lbER1ZURhdGUnKTtcblxuICBhcHBlbmQoaW5mb1BhbmVsRm9vdGVyLCBpbmZvUGFuZWxEdWVEYXRlKTtcbiAgYXBwZW5kKGluZm9QYW5lbCwgW2luZm9QYW5lbEhlYWRlciwgaW5mb1BhbmVsQm9keSwgaW5mb1BhbmVsRm9vdGVyXSk7XG4gIGFwcGVuZChpbmZvUGFuZWxDb250YWluZXIsIGluZm9QYW5lbCk7XG5cbiAgcmV0dXJuIGluZm9QYW5lbENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbExvYWQ7XG4iLCJpbXBvcnQgbWFrZUVsZW1lbnQgZnJvbSAnLi9tYWtlRWxlbWVudCc7XG5pbXBvcnQgYXBwZW5kIGZyb20gJy4vYXBwZW5kJztcbmltcG9ydCBnZW5lcmF0ZUlkIGZyb20gJy4vaWRGdW5jdGlvbnMnO1xuaW1wb3J0IHsgY2hhbmdlQWN0aXZlTGlzdCB9IGZyb20gJy4vZGlzcGxheUNvbnRyb2xsZXInO1xuaW1wb3J0IGdldEFzc2V0IGZyb20gJy4vYXNzZXRzJztcblxubGV0IGxpc3RzID0gW107IC8vIGxpc3RzIGFuZCB0aGVpciBzaWRlYmFyIGNvbnRhaW5lcnNcbmxldCBhY3RpdmVMaXN0ID0gbnVsbDtcbmxldCBhZGRpbmdMaXN0ID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3QobGlzdE5hbWUsIGNvbnRhaW5lcikgeyAvLyBDcmVhdGUgTGlzdCBPYmplY3RcbiAgY29uc3QgdGFza3MgPSBbXTtcbiAgY29uc3QgaWQgPSBnZW5lcmF0ZUlkKGxpc3RzKTtcblxuICBjb25zdCBhZGRUYXNrVG9MaXN0ID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgaWYgKGFjdGl2ZUxpc3QuaWQgPT09IGlkKSB7IC8vIElmIGFkZGluZyB0YXNrIHRvIGFjdGl2ZSBsaXN0LCB1cGRhdGUgdGhlIGRpc3BsYXlcbiAgICAgIGNoYW5nZUFjdGl2ZUxpc3QoYWN0aXZlTGlzdCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRhc2tGcm9tTGlzdCA9IGZ1bmN0aW9uICh0YXNrSWQpIHtcbiAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IHRhc2tJZCk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlQWN0aXZlID0gKCkgPT4ge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGxpc3ROYW1lLCB0YXNrcywgaWQsIGFkZFRhc2tUb0xpc3QsIHJlbW92ZVRhc2tGcm9tTGlzdCwgY29udGFpbmVyLCB0b2dnbGVBY3RpdmUsXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1vZGlmeUxpc3ROYW1lKGxpc3QpIHtcbiAgY29uc3QgbGlzdE5hbWUgPSBsaXN0LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLnZhbHVlO1xuICBsaXN0LmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gbGlzdE5hbWU7XG4gIGxpc3QuY2hpbGRyZW5bMV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGxpc3QuY2hpbGRyZW5bMl0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgbGlzdC5jaGlsZHJlblswXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIGNvbnN0IGluZGV4ID0gbGlzdHMubWFwKChlbGVtKSA9PiBlbGVtLmlkKS5pbmRleE9mKCtsaXN0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKTtcbiAgbGlzdHNbaW5kZXhdLmxpc3ROYW1lID0gbGlzdE5hbWU7XG4gIGlmIChsaXN0ID09PSBhY3RpdmVMaXN0LmNvbnRhaW5lcikge1xuICAgIGNoYW5nZUFjdGl2ZUxpc3QoYWN0aXZlTGlzdCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlTGlzdChsaXN0LCBldmVudCkge1xuICBsaXN0cyA9IGxpc3RzLmZpbHRlcigoZWxlbSkgPT4gZWxlbS5jb250YWluZXIgIT09IGxpc3QpO1xuXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICBsaXN0LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobGlzdCk7XG4gIHRvZ2dsZUFkZFRhc2tCdXR0b24oKTtcblxuICBpZiAobGlzdCA9PT0gYWN0aXZlTGlzdC5jb250YWluZXIgJiYgbGlzdHMubGVuZ3RoID4gMCkge1xuICAgIGFjdGl2ZUxpc3QgPSBsaXN0c1swXTtcbiAgICBhY3RpdmVMaXN0LnRvZ2dsZUFjdGl2ZSgpO1xuICAgIGNoYW5nZUFjdGl2ZUxpc3QoYWN0aXZlTGlzdCwgdHJ1ZSk7XG4gIH0gZWxzZSBpZiAobGlzdHMubGVuZ3RoID09PSAxKSB7XG4gICAgYWN0aXZlTGlzdCA9IG51bGw7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRDb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG59XG5cbi8vIGFkZHMgYSBuZXcgbGlzdCB3aXRoIGVkaXQgKyBkZWxldGUgYnV0dG9ucyB0byB0aGUgc2lkZWJhclxuY29uc3QgYWRkTGlzdCA9IChsaXN0TmFtZSwgY29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGxpc3RJdGVtID0gbWFrZUVsZW1lbnQoJ2RpdicsIG51bGwsIGxpc3ROYW1lKTtcblxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGNvbnRhaW5lciAhPT0gYWN0aXZlTGlzdC5jb250YWluZXIpIHtcbiAgICAgIGFjdGl2ZUxpc3QudG9nZ2xlQWN0aXZlKCk7XG4gICAgICBhY3RpdmVMaXN0ID0gbGlzdHNbbGlzdHMubWFwKChlbGVtKSA9PiBlbGVtLmNvbnRhaW5lcikuaW5kZXhPZihjb250YWluZXIpXTtcbiAgICAgIGFjdGl2ZUxpc3QudG9nZ2xlQWN0aXZlKCk7XG4gICAgICBjaGFuZ2VBY3RpdmVMaXN0KGFjdGl2ZUxpc3QsIHRydWUpO1xuICAgIH1cbiAgfSk7XG4gIGxpc3RzLnB1c2goY3JlYXRlTGlzdChsaXN0TmFtZSwgY29udGFpbmVyKSk7Ly8gQ3JlYXRlcyBhIG5ldyBsaXN0IG9iamVjdCB3aXRoIHJlZmVyZW5jZSB0byBpdHMgY29udGFpbmVyIGluIHRoZSBzaWRlYmFyXG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBsaXN0c1tsaXN0cy5sZW5ndGggLSAxXS5pZCk7XG5cbiAgaWYgKGxpc3RzLmxlbmd0aCA+IDEpIHtcbiAgICBhY3RpdmVMaXN0LnRvZ2dsZUFjdGl2ZSgpOyAvLyByZW1vdmVzICdhY3RpdmUnIGNsYXNzIGZyb20gcHJldmlvdXNseSBhY3RpdmUgbGlzdFxuICB9XG5cbiAgYWN0aXZlTGlzdCA9IGxpc3RzW2xpc3RzLmxlbmd0aCAtIDFdO1xuICBhY3RpdmVMaXN0LnRvZ2dsZUFjdGl2ZSgpO1xuICBpZiAobGlzdHMubGVuZ3RoID4gMCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50SGVhZGVyJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH1cbiAgY2hhbmdlQWN0aXZlTGlzdChhY3RpdmVMaXN0LCB0cnVlKTtcbiAgLy8gdG9kbyAtIG5lZWQgdG8gcmVtb3ZlIHdpdGggdGhlIGxpc3Qgc3dhcCBmeG4sIG5lZWQgdG8gcmVtb3ZlIHByZXZpb3VzIGFjdGl2ZVxuICAvLyBtb3ZlIHRvIGRpc3BsYXljb250cm9sbGVyLCBjaGFuZ2VBY3RpdmVMaXN0KGxpc3QsY29udGFpbmVyKVxuXG4gIGNvbnN0IGJ1dHRvbk92ZXJsYXkgPSBtYWtlRWxlbWVudCgnZGl2JywgJ2J1dHRvbk92ZXJsYXknKTtcbiAgY29uc3QgZWRpdEJ1dHRvbiA9IG1ha2VFbGVtZW50KCdidXR0b24nLCAnZWRpdEJ1dHRvbicpO1xuICAvLyB0ZXN0aW5nXG4gIC8vIGNvbnN0IGVkaXRJbWcgPSBtYWtlRWxlbWVudCgnaW1nJyk7XG4gIC8vIGVkaXRJbWcuc3JjID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeU5DSWdhR1ZwWjJoMFBTSXlOQ0lnZG1sbGQwSnZlRDBpTUNBd0lESTBJREkwSWo0OGNHRjBhQ0JrUFNKTk9TQXhNM1kyWXpBZ0xqVTFNaTB1TkRRNElERXRNU0F4Y3kweExTNDBORGd0TVMweGRpMDJZekF0TGpVMU1pNDBORGd0TVNBeExURnpNU0F1TkRRNElERWdNWHB0TnkweFl5MHVOVFV5SURBdE1TQXVORFE0TFRFZ01YWTJZekFnTGpVMU1pNDBORGdnTVNBeElERnpNUzB1TkRRNElERXRNWFl0Tm1Nd0xTNDFOVEl0TGpRME9DMHhMVEV0TVhwdExUUWdNR010TGpVMU1pQXdMVEVnTGpRME9DMHhJREYyTm1Nd0lDNDFOVEl1TkRRNElERWdNU0F4Y3pFdExqUTBPQ0F4TFRGMkxUWmpNQzB1TlRVeUxTNDBORGd0TVMweExURjZiVFF1TXpNekxUZ3VOakl6WXkwdU9EZ3lMUzR4T0RRdE1TNHpOek10TVM0ME1Ea3RNUzR4T0RrdE1pNHlPVEZzTFRVdU1qQXpMVEV1TURnMll5MHVNVGcwTGpnNE15MHhMakV5TXlBeExqZ3hMVEl1TURBMElERXVOakkxYkMwMUxqVXlPQzB4TGpBNU9TMHVOREE1SURFdU9UVTRJREU1TGpVNU1TQTBMakE1T1M0ME1Ea3RNUzQ1TlRndE5TNDJOamN0TVM0eU5EaDZiVFF1TmpZM0lEUXVOakl6ZGpFMmFDMHhPSFl0TVRab01UaDZiUzB5SURFMGRpMHhNbWd0TVRSMk1USm9NVFI2SWk4K1BDOXpkbWMrJztcbiAgYXBwZW5kKGVkaXRCdXR0b24sIGdldEFzc2V0KCdlZGl0JykpO1xuICAvLyB0ZXN0aW9uZ1xuICBjb25zdCBkZWxldGVCdXR0b24gPSBtYWtlRWxlbWVudCgnYnV0dG9uJywgJ2RlbGV0ZUJ1dHRvbicpO1xuICAvLyB0ZXN0aW5nXG4gIGFwcGVuZChkZWxldGVCdXR0b24sIGdldEFzc2V0KCdkZWxldGUnKSk7XG4gIC8vIHRlc3RpbmdcblxuICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7IC8vIHNob3dzIHRleHQgZmllbGQgdG8gZWRpdCBsaXN0IG5hbWUsIGhpZGVzIGxhYmVsIGFuZCBzYXZlL2RlbGV0ZSBidXR0b25zXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IC8vIHRvZG8gLSBuZWVkIHRvIGZpeCBmb3IgdGhlIHNhdmUgYnV0dG9uXG4gICAgYnV0dG9uT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGxpc3RJdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29udGFpbmVyLmNoaWxkcmVuWzBdLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgY29udGFpbmVyLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZC5mb2N1cygpOyAvLyBtYXliZSByZXBsYWNlIGFsbCBjaGlsZHJlblswXSB3aXRoIGZpcnN0Y2hpbGQ/XG4gIH0pO1xuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBkZWxldGVMaXN0KGNvbnRhaW5lciwgZXZlbnQpO1xuICAgIGlmIChsaXN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50SGVhZGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xuICAvLyB0b2RvIC0gYWRkIGEgcmVtYWluaW5nIHRhc2tzIGNvdW50ZXJcbiAgYXBwZW5kKGJ1dHRvbk92ZXJsYXksIFtlZGl0QnV0dG9uLCBkZWxldGVCdXR0b25dKTtcbiAgYXBwZW5kKGNvbnRhaW5lciwgW2xpc3RJdGVtLCBidXR0b25PdmVybGF5XSk7XG4gIGFjdGl2ZUxpc3QgPSBsaXN0c1tsaXN0cy5sZW5ndGggLSAxXTtcbiAgdG9nZ2xlQWRkVGFza0J1dHRvbigpO1xufTtcblxuZnVuY3Rpb24gbmV3TGlzdElucHV0KCkgeyAvLyBDcmVhdGVzIGEgdGV4dCBmaWVsZCB0byBjcmVhdGUgYSBuZXcgbGlzdFxuICBpZiAoIWFkZGluZ0xpc3QpIHtcbiAgICBhZGRpbmdMaXN0ID0gdHJ1ZTtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBjb25zdCBzaWRlYmFySXRlbUNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdsaScsICdzaWRlYmFySXRlbUNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbGlzdE5hbWVDb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgJ2xpc3ROYW1lQ29udGFpbmVyJyk7XG4gICAgY29uc3QgbGlzdE5hbWUgPSBtYWtlRWxlbWVudCgnaW5wdXQnLCAnbGlzdE5hbWVGaWVsZCcpO1xuICAgIGxpc3ROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgY29uc3Qgc2F2ZUxpc3ROYW1lID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsICdzYXZlQnV0dG9uJyk7XG4gICAgLy8gdGVzdGluZ1xuICAgIGFwcGVuZChzYXZlTGlzdE5hbWUsIGdldEFzc2V0KCdzYXZlJykpO1xuICAgIC8vIHRlc3RpbmdcbiAgICBhcHBlbmQobGlzdE5hbWVDb250YWluZXIsIFtsaXN0TmFtZSwgc2F2ZUxpc3ROYW1lXSk7XG4gICAgYXBwZW5kKHNpZGViYXJJdGVtQ29udGFpbmVyLCBsaXN0TmFtZUNvbnRhaW5lcik7XG5cbiAgICBzaWRlYmFyLmluc2VydEJlZm9yZShzaWRlYmFySXRlbUNvbnRhaW5lciwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZExpc3RCdXR0b24nKSk7XG4gICAgc2F2ZUxpc3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gYWRkKCkge1xuICAgICAgYWRkaW5nTGlzdCA9IGZhbHNlOyAvLyB0byBwcmV2ZW50IGR1cGxpY2F0ZSBuZXcgbGlzdCBpbnB1dCBmb3Jtc1xuICAgICAgbGV0IGxOYW1lID0gJ05ldyBMaXN0JztcbiAgICAgIGlmIChsaXN0TmFtZS52YWx1ZSkge1xuICAgICAgICBsTmFtZSA9IGxpc3ROYW1lLnZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGlzdE5hbWUudmFsdWUgPSBsTmFtZTtcbiAgICAgIH1cblxuICAgICAgLy8gLy8gdGVzdGluZ1xuICAgICAgLy8gY29uc3QgdGFza0xpc3RDb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywndGFza0xpc3RDb250YWluZXInKTtcbiAgICAgIC8vIGNvbnN0IHRhc2tMaXN0ID0gbWFrZUVsZW1lbnQoJ3VsJywndGFza0xpc3QnKTtcbiAgICAgIC8vIGFwcGVuZCh0YXNrTGlzdENvbnRhaW5lcix0YXNrTGlzdCk7XG4gICAgICAvLyAvLyBhZGQgcmVmZXJlbmNlIHRvIHRoZSBsaXN0IG9iamVjdCB0YXNrXG4gICAgICAvLyAvLyB0ZXN0aW5nXG5cbiAgICAgIGFkZExpc3QobE5hbWUsIHNpZGViYXJJdGVtQ29udGFpbmVyKTtcbiAgICAgIGNvbnNvbGUubG9nKGxpc3RzKTtcbiAgICAgIGxpc3ROYW1lQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAvLyBsaXN0TmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgLy8gc2F2ZUxpc3ROYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzaWRlYmFySXRlbUNvbnRhaW5lcilcbiAgICAgIHNhdmVMaXN0TmFtZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZCk7XG4gICAgICBzYXZlTGlzdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1vZGlmeUxpc3ROYW1lKHNpZGViYXJJdGVtQ29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGxpc3ROYW1lLmZvY3VzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlQWRkVGFza0J1dHRvbigpIHtcbiAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrQnV0dG9uJyk7XG4gIGlmIChsaXN0cy5sZW5ndGgpIHtcbiAgICBhZGRUYXNrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9IGVsc2Uge1xuICAgIGFkZFRhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufVxuXG5leHBvcnQgeyBuZXdMaXN0SW5wdXQsIGxpc3RzLCBhY3RpdmVMaXN0IH07XG4iLCJmdW5jdGlvbiBtYWtlRWxlbWVudCh0eXBlLCBjbGFzc05hbWUsIGNvbnRlbnQpIHtcbiAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBpZiAodHlwZW9mIChjbGFzc05hbWUpID09PSAnb2JqZWN0Jykge1xuICAgICAgY2xhc3NOYW1lLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChlbCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgeyBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuICB9XG4gIGlmIChjb250ZW50KSB7XG4gICAgZWxlbS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gIH1cbiAgcmV0dXJuIGVsZW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1ha2VFbGVtZW50O1xuIiwiaW1wb3J0IG1ha2VFbGVtZW50IGZyb20gJy4vbWFrZUVsZW1lbnQnO1xuaW1wb3J0IGFwcGVuZCBmcm9tICcuL2FwcGVuZCc7XG5pbXBvcnQgeyBhY3RpdmVMaXN0LCBsaXN0cyB9IGZyb20gJy4vbGlzdEZ1bmN0aW9ucyc7XG5pbXBvcnQgZ2VuZXJhdGVJZCBmcm9tICcuL2lkRnVuY3Rpb25zJztcbmltcG9ydCB7XG4gIGNsb3NlTW9kYWwsIGRpc3BsYXksIHVwZGF0ZUluZm9QYW5lbCwgdG9nZ2xlUGFuZWwsXG59IGZyb20gJy4vZGlzcGxheUNvbnRyb2xsZXInO1xuaW1wb3J0IGdldEFzc2V0IGZyb20gJy4vYXNzZXRzJztcblxubGV0IGFjdGl2ZVRhc2sgPSBudWxsO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkLCBsaXN0LCB0YXNrQ29udGFpbmVyKSB7XG4gIGNvbnN0IGlkID0gZ2VuZXJhdGVJZChsaXN0KTtcblxuICByZXR1cm4ge1xuICAgIHRhc2ssIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29tcGxldGVkLCBpZCwgdGFza0NvbnRhaW5lcixcbiAgfTtcbn1cblxuY29uc3QgcHJpb3JpdHkgPSB7XG4gIExvdzogJ2xvdycsXG4gIE1vZGVyYXRlOiAnbW9kZXJhdGUnLFxuICBIaWdoOiAnaGlnaCcsXG59O1xuXG5mdW5jdGlvbiBhZGRUYXNrKCkge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Rhc2tGb3JtJyk7XG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Rhc2tOYW1lJykudmFsdWU7XG4gIGNvbnN0IHNlbGVjdGVkTGlzdEluZGV4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3RTZWxlY3REcm9wZG93bicpLnNlbGVjdGVkSW5kZXg7IC8vXG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUYXNrRGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VGFza0R1ZURhdGUnKS52YWx1ZTtcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Rhc2tQcmlvcml0eScpLnZhbHVlO1xuICAvLyBjb25zb2xlLmxvZyh0YXNrTmFtZSArIHNlbGVjdGVkTGlzdCArIHRhc2tEZXNjcmlwdGlvbiArIHRhc2tEdWVEYXRlICsgdGFza1ByaW9yaXR5KTtcblxuICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZExpc3QpO1xuICAvLyB0b2RvIC0gYWRkIHRvIHRhc2tsaXN0IGNvbnRhaW5lclxuICAvLyBjb25zdCBuZXdUYXNrID0gY3JlYXRlVGFzayh0YXNrLCB0YXNrRGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKTtcbiAgLy8gbGlzdC50YXNrcy5wdXNoKG5ld1Rhc2spO1xuXG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBtYWtlRWxlbWVudCgnbGknLCAndGFza0NvbnRhaW5lcicpO1xuICBjb25zdCBjaGVja2JveCA9IG1ha2VFbGVtZW50KCdpbnB1dCcpO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcblxuICAvLyB0YXNrQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywnJylcblxuICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQocHJpb3JpdHlbdGFza1ByaW9yaXR5XSk7Ly8gZm9yIHN0eWxpbmcgYSB0YXNrIGJhc2Ugb24gcHJpb3JpdHlcblxuICB0YXNrQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNoYW5nZUFjdGl2ZVRhc2sodGFza0NvbnRhaW5lcik7XG4gIH0pO1xuXG4gIGNvbnN0IG5hbWUgPSBtYWtlRWxlbWVudCgnZGl2JywgJ3Rhc2tOYW1lJywgdGFza05hbWUpO1xuICAvLyBjb25zdCBkZXNjcmlwdGlvbiA9IG1ha2VFbGVtZW50KCdkaXYnLCAndGFza0Rlc2NyaXB0aW9uJywgdGFza0Rlc2NyaXB0aW9uKTtcbiAgLy8gbGV0IHRhc2tQcmlvcml0eSA9IG1ha2VFbGVtZW50KCdkaXYnLCd0YXNrUHJpb3JpdHknLHRhc2tQcmlvcml0eSk7XG4gIC8vIGNoYW5nZSBzbyBwcmlvcml0eSBoYXMgd2VpZ2h0LCBtYXliZSBpbiBhbm90aGVyIGZ1bmN0aW9uXG4gIGNvbnN0IGR1ZSA9IG1ha2VFbGVtZW50KCdkaXYnLCAndGFza0R1ZURhdGUnKTtcbiAgLy8gTk9URSAtIGZvciB0aGUgbW9yZSBkZXRhaWxzIG1vZGFsIGp1c3QgdGFrZSBpbmZvIGZyb20gdGhlIHRhc2sgb2JqZWN0XG4gIC8vIE5PVEUgLSBmb3IgdGhlIHByaW9yaXR5IHN0eWxpbmcgZG8gdGhlIHNhbWVcbiAgLy8gYnV0dG9ucyBhZGQgaWNvblxuICBjb25zdCB0YXNrQnV0dG9uQ29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsICd0YXNrQnV0dG9uQ29udGFpbmVyJyk7XG4gIGNvbnN0IGVkaXRUYXNrQnV0dG9uID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsICdlZGl0VGFza0J1dHRvbicpO1xuICAvLyB0ZXN0aW5nXG4gIGFwcGVuZChlZGl0VGFza0J1dHRvbiwgZ2V0QXNzZXQoJ2VkaXQnKSk7XG4gIC8vIHRlc3RpbmdcbiAgY29uc3QgZGVsZXRlVGFza0J1dHRvbiA9IG1ha2VFbGVtZW50KCdidXR0b24nLCAnZGVsZXRlVGFza0J1dHRvbicpO1xuICAvLyB0ZXN0aW5nXG4gIGFwcGVuZChkZWxldGVUYXNrQnV0dG9uLCBnZXRBc3NldCgnZGVsZXRlJykpO1xuICAvLyB0ZXN0aW5nXG4gIGFwcGVuZCh0YXNrQnV0dG9uQ29udGFpbmVyLCBbZWRpdFRhc2tCdXR0b24sIGRlbGV0ZVRhc2tCdXR0b25dKTtcbiAgLy8gYnV0dG9uc1xuICAvLyBkdWVkYXRlXG4gIGlmICh0YXNrRHVlRGF0ZSkge1xuICAgIGRhdGVTdHJpbmcoZHVlLCB0YXNrRHVlRGF0ZSk7XG4gIH1cbiAgLy8gZHVlZGF0ZVxuICBhcHBlbmQodGFza0NvbnRhaW5lciwgW2NoZWNrYm94LCBuYW1lLCBkdWUsIHRhc2tCdXR0b25Db250YWluZXJdKTtcbiAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gbGlzdHNbc2VsZWN0ZWRMaXN0SW5kZXhdO1xuICAvLyBzZWxlY3RlZExpc3QuYWRkVGFza1RvTGlzdChjcmVhdGVUYXNrKHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWVEYXRlLCB0YXNrUHJpb3JpdHksIGZhbHNlLCBzZWxlY3RlZExpc3QudGFza3MsIHRhc2tDb250YWluZXIpKTtcbiAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2sodGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eSwgZmFsc2UsIHNlbGVjdGVkTGlzdC50YXNrcywgdGFza0NvbnRhaW5lcik7XG4gIHNlbGVjdGVkTGlzdC5hZGRUYXNrVG9MaXN0KHRhc2spOy8vIHRlc3RpbmcgdGFzayB2YXJpYWJsZVxuICAvLyB0ZXN0aW5nIGJlbG93XG5cbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgIHRoaXMucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gICAgICB0YXNrLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkJyk7XG4gICAgICB0YXNrLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG5cbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG5cbiAgZWRpdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHsgLy8gbmVlZHMgdG8gZmluZCB3aGljaCB0YXNrIGlzIGNsaWNrZWRcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAvLyBjb25zdCBzZWxlY3RlZFRhc2sgPSBhY3RpdmVMaXN0LnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50YXNrQ29udGFpbmVyID09PSB0YXNrQ29udGFpbmVyKVswXTtcblxuICAgIC8vIFRFU1RJTkcgVEFTSyBWQVJJQUJMRVxuICAgIC8vIGFjdGl2ZVRhc2sgPSBzZWxlY3RlZFRhc2s7XG4gICAgLy8gY29uc29sZS5sb2coYWN0aXZlTGlzdC50YXNrcyk7XG4gICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWRUYXNrKTtcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFRhc2tUaXRsZScpLnZhbHVlID0gc2VsZWN0ZWRUYXNrLnRhc2s7XG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRUYXNrRGVzY3JpcHRpb24nKS52YWx1ZSA9IHNlbGVjdGVkVGFzay5kZXNjcmlwdGlvbjtcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdER1ZURhdGUnKS52YWx1ZSA9IHNlbGVjdGVkVGFzay5kdWVEYXRlO1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0UHJpb3JpdHknKS52YWx1ZSA9IHNlbGVjdGVkVGFzay5wcmlvcml0eTtcblxuICAgIGFjdGl2ZVRhc2sgPSB0YXNrO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0VGFza1RpdGxlJykudmFsdWUgPSBhY3RpdmVUYXNrLnRhc2s7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRUYXNrRGVzY3JpcHRpb24nKS52YWx1ZSA9IGFjdGl2ZVRhc2suZGVzY3JpcHRpb247XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXREdWVEYXRlJykudmFsdWUgPSBhY3RpdmVUYXNrLmR1ZURhdGU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRQcmlvcml0eScpLnZhbHVlID0gYWN0aXZlVGFzay5wcmlvcml0eTtcbiAgICAvLyBURVNUSU5HIFRBU0sgVkFSSUFCTEVcblxuICAgIC8vIGVkaXRUYXNrKGVkaXRUYXNrSGVhZGVyLnZhbHVlLCBlZGl0VGFza0Rlc2NyaXB0aW9uLnZhbHVlLCBlZGl0RHVlRGF0ZS52YWx1ZSwgZWRpdFByaW9yaXR5LnZhbHVlKTtcblxuICAgIGRpc3BsYXkoJ2VkaXQnLCBsaXN0cywgYWN0aXZlTGlzdCk7XG4gICAgLy8gdGFza05hbWUgPVxuICB9KTtcblxuICBkZWxldGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZGVsZXRlVGFzayh0YXNrQ29udGFpbmVyKTtcbiAgfSk7XG4gIC8vIC8vIHByaW9yaXR5IHRlc3RpbmcgbWFrZSBzdXJlIHRoaXMgd29ya3Mgd2hlbiBjaGFuZ2luZyBhY3RpdmUgdGFza1xuICAvLyBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mb1BhbmVsSGVhZGVyJyk7XG4gIC8vIC8vIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKHByaW9yaXR5W2FjdGl2ZVRhc2sucHJpb3JpdHldKTtcbiAgLy8gY29uc3QgY2xhc3NlcyA9IGhlYWRlci5jbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgLy8gaWYgKGNsYXNzZXMubGVuZ3RoID4gMikge1xuICAvLyAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXNbMl0pO1xuICAvLyB9XG4gIC8vIGhlYWRlci5jbGFzc0xpc3QuYWRkKHByaW9yaXR5W3Rhc2tQcmlvcml0eV0pO1xuICAvLyAvLyBwcmlvcml0eSB0ZXN0aW5nXG5cbiAgY2xvc2VNb2RhbChmb3JtKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayh0YXNrQ29udGFpbmVyKSB7XG4gIC8vIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAvLyBjb25zdCB0YXNrSWQgPSBhY3RpdmVMaXN0LnRhc2tzW2FjdGl2ZUxpc3QudGFza3MubGVuZ3RoIC0gMV0uaWQ7XG4gIGNvbnN0IHNlbGVjdGVkID0gYWN0aXZlTGlzdC50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sudGFza0NvbnRhaW5lciA9PT0gdGFza0NvbnRhaW5lcilbMF07XG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkKTtcbiAgYWN0aXZlTGlzdC5yZW1vdmVUYXNrRnJvbUxpc3Qoc2VsZWN0ZWQuaWQpO1xuICB0YXNrQ29udGFpbmVyLnJlbW92ZSgpO1xuXG4gIGlmIChzZWxlY3RlZCA9PT0gYWN0aXZlVGFzaykgeyAvLyB0ZXN0aW5nXG4gICAgYWN0aXZlVGFzayA9IG51bGw7XG4gICAgdG9nZ2xlUGFuZWwoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VBY3RpdmVUYXNrKHRhc2tDb250YWluZXIpIHtcbiAgY29uc3QgdCA9IGFjdGl2ZUxpc3QudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnRhc2tDb250YWluZXIgPT09IHRhc2tDb250YWluZXIpWzBdO1xuICBhY3RpdmVUYXNrID0gdDtcbiAgdG9nZ2xlUGFuZWwoYWN0aXZlVGFzayk7XG4gIHVwZGF0ZUluZm9QYW5lbCh0KTtcblxuICAvLyB0ZXN0aW5nXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvUGFuZWxIZWFkZXInKTtcbiAgY29uc3QgY2xhc3NlcyA9IGhlYWRlci5jbGFzc05hbWUuc3BsaXQoJyAnKTtcblxuICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzWzJdKTtcblxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChwcmlvcml0eVt0LnByaW9yaXR5XSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKCkge1xuICAvLyBsZXQgZWRpdGVkVGFzayA9Ly8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNhdmVFZGl0Jyk7XG5cbiAgLy8gc2hvdWxkIGFsc28gdXBkYXRlIHRoZSBsaXN0IGRpc3BsYXkgdG8gcmVmbGVjdCBjaGFuZ2VzXG4gIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlRWRpdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywpO1xuICBjb25zdCBwcmlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRQcmlvcml0eScpLnZhbHVlO1xuICBpZiAocHJpbyAhPT0gYWN0aXZlVGFzay5wcmlvcml0eSkge1xuICAgIGNvbnN0IGluZm9QYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvUGFuZWxIZWFkZXInKTtcbiAgICBpbmZvUGFuZWwuY2xhc3NMaXN0LnJlbW92ZShwcmlvcml0eVthY3RpdmVUYXNrLnByaW9yaXR5XSk7XG4gICAgaW5mb1BhbmVsLmNsYXNzTGlzdC5hZGQocHJpb3JpdHlbcHJpb10pO1xuXG4gICAgYWN0aXZlVGFzay50YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUocHJpb3JpdHlbYWN0aXZlVGFzay5wcmlvcml0eV0pO1xuICAgIGFjdGl2ZVRhc2sucHJpb3JpdHkgPSBwcmlvO1xuICAgIGFjdGl2ZVRhc2sudGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHByaW9yaXR5W2FjdGl2ZVRhc2sucHJpb3JpdHldKTtcbiAgfVxuICBhY3RpdmVUYXNrLnRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFRhc2tUaXRsZScpLnZhbHVlO1xuICBhY3RpdmVUYXNrLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRUYXNrRGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgYWN0aXZlVGFzay5kdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXREdWVEYXRlJykudmFsdWU7XG5cbiAgY29uc3QgdGFza0VsZW1lbnQgPSBhY3RpdmVUYXNrLnRhc2tDb250YWluZXIuY2hpbGRyZW47XG4gIHRhc2tFbGVtZW50WzFdLnRleHRDb250ZW50ID0gYWN0aXZlVGFzay50YXNrO1xuXG4gIGlmIChhY3RpdmVUYXNrLmR1ZURhdGUpIHtcbiAgICAvLyB0YXNrRWxlbWVudFsyXS5kdWVEYXRlID1cbiAgICBkYXRlU3RyaW5nKHRhc2tFbGVtZW50WzJdLCBhY3RpdmVUYXNrLmR1ZURhdGUpO1xuICB9XG4gIHVwZGF0ZUluZm9QYW5lbChhY3RpdmVUYXNrKTtcbiAgY29uc29sZS5sb2cobGlzdHMpO1xufVxuXG5mdW5jdGlvbiBkYXRlU3RyaW5nKGR1ZSwgdGFza0R1ZURhdGUpIHtcbiAgY29uc29sZS5sb2coZHVlLCB0YXNrRHVlRGF0ZSk7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdGVtcER1ZSA9IG5ldyBEYXRlKGAke3Rhc2tEdWVEYXRlfSAwMDowMDowMGApO1xuICBsZXQgZGF5c0Zyb21EdWUgPSAodGVtcER1ZSAtIGN1cnJlbnREYXRlKSAvICgxMDAwICogMzYwMCAqIDI0KTtcbiAgaWYgKGRheXNGcm9tRHVlID4gLTEgJiYgZGF5c0Zyb21EdWUgPCAxKSB7XG4gICAgZGF5c0Zyb21EdWUgPSBNYXRoLmZsb29yKCh0ZW1wRHVlIC0gY3VycmVudERhdGUpIC8gKDEwMDAgKiAzNjAwKSk7XG4gICAgZHVlLnRleHRDb250ZW50ID0gKGRheXNGcm9tRHVlID49IDApID8gYER1ZSBpbiAke2RheXNGcm9tRHVlfSBob3VyKHMpYCA6IGBEdWUgJHtkYXlzRnJvbUR1ZSAqIC0xfSBob3VyKHMpIGFnb2A7XG4gIH0gZWxzZSB7XG4gICAgZHVlLnRleHRDb250ZW50ID0gKGRheXNGcm9tRHVlID49IDApID8gYER1ZSBpbiAke01hdGguZmxvb3IoZGF5c0Zyb21EdWUpfSBkYXkocylgIDogYER1ZSAke01hdGguZmxvb3IoZGF5c0Zyb21EdWUgKiAtMSl9IGRheShzKSBhZ29gO1xuICB9XG59XG5cbmV4cG9ydCB7IGFkZFRhc2ssIGVkaXRUYXNrIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaW5pdGlhbExvYWQgZnJvbSAnLi9mdW5jdGlvbnMvaW5pdGlhbGl6ZSc7XG5cbmluaXRpYWxMb2FkKCk7XG4vLyB0b2RvcyBzaG91bGQgYmUgZHluYW1pY2FsbHkgY3JlYXRlZCBvYmplY3RzXG5cbi8vIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSxwcmlvcml0eSBtaW5pbXVtXG5cbi8vIHByb2plY3RzIC8gc2VwYXJhdGUgbGlzdHMgdG9kb3NcblxuLy8gbW9kdWxlc1xuLy8gbGlzdCBtYW5hZ2VtZW50XG5cbi8vIGVkaXQgdGFzayBtb2R1bGUsIGdldHMgdGFzayBtb2R1bGVcblxuLy8gbGlzdCBjb250cm9sbGVyLCBnZXRzIHRvZG9saXN0LCBjYWxscyB1cGRhdGUgZGlzcGxheVxuXG4vLyBlZGl0L2NyZWF0ZSB0YXNrIHNob3VsZCBiZSBhIGNvbXBvc2l0aW9uIG9mIHNvbWUgc29ydFxuXG4vLyBwcmlvcml0eSBzb3J0IHNob3VsZCBiZSBhIHRoaW5nXG5cbi8vIHN3aXRjaCBjb250cm9sbGVyXG5cbi8vIG1heWJlIGEgYnV0dG9uIGhhbmRsZXI/XG5cbi8vIG1vZGFsIGNvbnRyb2xsZXIsIGFic3RyYWN0cyBtb2RhbCBmdW5jdGlvbnNcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==