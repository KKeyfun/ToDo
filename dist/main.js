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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'Inter medium';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n* {\n    padding: 0;\n    margin: 0;\n\n    font-family: 'Inter medium';\n    list-style: none;\n    text-decoration: none;\n}\n\n*,*:before,*:after {\n    box-sizing: border-box;\n}\n\n:root {\n    --primaryColor:#d65e78;\n    --lightColor:#ff8fa7;\n    --darkColor:#a12d4c;\n    --lowPriority:rgb(30, 226, 30);\n    --moderatePriority:rgb(255, 238, 0);\n}\n\nbody {\n    display:grid;\n    height: 100vh;\n    grid-template-rows: auto 1fr auto;\n    grid-template-columns: max(6em,15%) auto;\n}\n\n.header {\n    text-align: center;\n    font-weight: 900;\n}\n\n.modalBg {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0,0,0,.6);\n    position:fixed;\n    z-index: 3;\n    \n    height: 100vh;\n    height: 100dvh;\n    width: 100vw;\n    width: 100dvw;\n}\n\n.modalContainer {\n    display: flex;\n    background-color: white;\n    border-radius: 1em;\n    padding: 2em;\n    position: absolute;\n}\n\nli input,li textarea{\n    width: 100%;\n}\n\n.addTaskModal li:last-child, .editTaskModal li:last-child {\n    margin: 0 auto;\n}\n\nli:last-child>button {\n    padding: .25em .75em;\n    margin: .5em;\n}\n\n.newTaskHeader,.editTaskHeader {\n    font-size: 1.3rem;\n}\n\n.addTaskModal,.editTaskModal,.infoPanelContainer {\n    display: none;\n}\n\n\n\n.modalCornerButton {\n    display: flex;\n    position: absolute;\n    top:1.5em;\n    right: 2em;\n}\n\n.modalCornerButton>img {\n    width: 1.5rem;\n}\n\n.modalBg ul {\n    display: flex;\n    flex-direction: column;\n    gap:1em;\n}\n\n.listNameContainer, .addListButton{\n    margin: 0 auto;\n}\n\n.headerContainer {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-column: 1/-1;\n\n    background-color: var(--darkColor);\n}\n\n.pageHeader {\n    grid-column: 2;\n\n    color:white;\n    font-size: 3rem;\n    text-align: center;\n\n    min-width: 150px;\n    padding: .5em 0;\n}\n\n.sidebarContainer {\n    background-color: var(--lightColor);\n}\n\n.sidebarHeader {\n    background-color: var(--primaryColor);\n    font-size: 1.2rem;\n    padding: .5em 0;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap:.5em;\n\n    background-color: var(--lightColor);\n    text-align: center;\n}\n\n.sidebar li {\n    padding: .75em;\n}\n\n.sidebarItemContainer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    min-height: 2.65rem;\n    position: relative;\n    text-align: left;\n}\n\n.sidebarItemContainer:hover,.taskContainer {\n    cursor: pointer;\n}\n\n.sidebarItemContainer div,.taskName {\n    -webkit-user-select: none; /* Safari */\n    -ms-user-select: none; /* IE 10 and IE 11 */\n    user-select: none;\n}\n\n.sidebarItemContainer div:first-child{\n    max-width: max(80px,90%);\n    word-wrap: break-word;\n}\n\n.sidebarItemContainer.active {\n    background-color: var(--darkColor);\n    color: white;\n    text-decoration: underline;\n}\n\n.saveButton {\n    background-color: rgb(113, 255, 100);\n    border: none;\n    border-radius: 20%;\n}\n\n.saveButton>img{\n    height: 80%;\n    position:relative;\n    top:5%;\n}\n\n.listNameContainer {\n    display: flex;\n    align-items: center;\n    gap: .25em;\n\n    position: absolute;\n    z-index: 2;\n}\n\n.taskButtonContainer {\n    display: flex;\n}\n\n.sidebarItemContainer .buttonOverlay {\n    display: flex;\n\n    position: absolute;\n    right:5%;\n\n    visibility: hidden;\n    z-index: 1;\n}\n\n.sidebarItemContainer:hover .buttonOverlay {\n    visibility: visible;\n}\n\n.sidebar button,.taskButtonContainer button{\n    width: 2em;\n    min-width: 2em;\n    height: 2em;\n}\n\n.sidebar .addListButton {\n    font-size: 1.2rem;\n    background-color: var(--primaryColor);\n    border: 0;\n    border-radius: .25em;\n    color:white;\n    height: 1.5em;\n    width: 5em;\n    margin-top: .7em;\n    margin-bottom: 1.25em;\n}\n\n.addListButton:hover,.saveButton:hover,.editButton:hover,.deleteButton:hover,.editTaskButton:hover,.deleteTaskButton:hover {\n    border: 1px solid white;\n}\n\n.sidebar .editButton,.editTaskButton {\n    background-color: rgb(113, 255, 100);\n}\n\n.sidebar .deleteButton,.deleteTaskButton {\n    margin-left: .3em;\n    background-color: rgb(255, 78, 78);\n}\n\n.buttonOverlay button,.taskButtonContainer button {\n    border: none;\n    border-radius: 20%;\n}\n\n.deleteButton>img,.deleteTaskButton>img{\n    position: relative;\n    top: 7%;\n    height: 80%;\n}\n\n.tasklistContainer {\n    margin: 1em;\n    height: 100%;\n    width: 100%;\n}\n\n.contentContainer {\n    display:flex;\n}\n\n.contentHeader {\n    display: none;\n    background-color: var(--darkColor);\n    color: white;\n    font-size: 1.25rem;\n    padding: 1em 2em;\n}\n\n.checklistContainer {\n    background-color: white;\n}\n\n.checklist {\n    display: flex;\n    flex-direction: column;\n    gap: 0.1rem;\n}\n\n.taskContainer {\n    display: flex;\n    gap:.5em;\n    align-items: center;\n    background-color: var(--lightColor);\n    font-size: 1.1rem;\n    padding: .5em;\n}\n\n.taskContainer:nth-child(even){\n    background-color: var(--primaryColor);\n}\n\n.taskContainer.checked {\n    background-color: gray;\n    text-decoration: 2px line-through;\n}\n\n.taskContainer.low {\n    border-left: 4px solid var(--lowPriority);\n}\n\n.taskContainer.moderate {\n    border-left: 4px solid var(--moderatePriority);\n}\n\n.taskContainer.high {\n    border-left: 4px solid red;\n}\n\n.taskContainer input {\n    height: 1.5em;\n    width: 1.5em;\n}\n\n.taskName {\n    max-width: min(65%,350px);\n    word-wrap: anywhere;\n}\n\n.taskButtonContainer>button {\n    margin: 0 .15rem;\n}\n\n.taskDueDate {\n    font-size: .75rem;\n    margin-left: auto;\n}\n\n.addTaskButton {\n    display: none;\n    background-color: var(--primaryColor);\n    border-radius: 5rem;\n    border:none;\n    color:white;\n    height:3.5rem;\n    width:3.5rem;\n\n    font-size: 2rem;\n    font-weight: 900;\n    text-align: center;\n\n\n    position: fixed;\n    bottom:5%;\n    right:3vmin;\n}\n\n.infoPanelContainer {\n    display: none;\n    background-color: var(--lightColor);\n    margin: 1em;\n    min-height: 30%;\n    position: relative;\n    height: max-content;\n    width: 35%;\n}\n\n.infoPanelHeader {\n    background-color: var(--darkColor);\n    color: white;\n    font-size: 1.1rem;\n    padding: 1em 2em;\n    min-height: 3.1rem;\n    width: 100%;\n}\n\n.infoPanelHeader.low {\n    border-bottom: 4px solid var(--lowPriority);\n}\n\n.infoPanelHeader.moderate {\n    border-bottom: 4px solid var(--moderatePriority);\n}\n\n.infoPanelHeader.high {\n    border-bottom: 4px solid red;\n}\n\n.infoPanelBody {\n    padding: 1em;\n    word-wrap: break-word;\n}\n\n.infoPanelFooter {\n    position: absolute;\n    bottom: 0;\n\n    background-color: var(--primaryColor);\n    width: 100%;\n}\n\n.infoPanelDueDate {\n    text-align: right;\n}\n\ntextarea {\n    resize: none;\n}\n\n.footerContainer {\n    grid-column: 1/-1;\n\n    background-color: var(--darkColor);\n    text-align: center;\n\n}\n\n.footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap:.25em;\n    color:white;\n    padding: .25em;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,4CAA+B;AACnC;;AAEA;IACI,UAAU;IACV,SAAS;;IAET,2BAA2B;IAC3B,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,sBAAsB;IACtB,oBAAoB;IACpB,mBAAmB;IACnB,8BAA8B;IAC9B,mCAAmC;AACvC;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,iCAAiC;IACjC,wCAAwC;AAC5C;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gCAAgC;IAChC,cAAc;IACd,UAAU;;IAEV,aAAa;IACb,cAAc;IACd,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,oBAAoB;IACpB,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;;;AAIA;IACI,aAAa;IACb,kBAAkB;IAClB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,OAAO;AACX;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,iBAAiB;;IAEjB,kCAAkC;AACtC;;AAEA;IACI,cAAc;;IAEd,WAAW;IACX,eAAe;IACf,kBAAkB;;IAElB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,qCAAqC;IACrC,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;;IAER,mCAAmC;IACnC,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;;IAE9B,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,yBAAyB,EAAE,WAAW;IACtC,qBAAqB,EAAE,oBAAoB;IAC3C,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,qBAAqB;AACzB;;AAEA;IACI,kCAAkC;IAClC,YAAY;IACZ,0BAA0B;AAC9B;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,MAAM;AACV;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;;IAEV,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;;IAEb,kBAAkB;IAClB,QAAQ;;IAER,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,cAAc;IACd,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,qCAAqC;IACrC,SAAS;IACT,oBAAoB;IACpB,WAAW;IACX,aAAa;IACb,UAAU;IACV,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,iBAAiB;IACjB,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;IACnB,mCAAmC;IACnC,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,sBAAsB;IACtB,iCAAiC;AACrC;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,8CAA8C;AAClD;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,mBAAmB;IACnB,WAAW;IACX,WAAW;IACX,aAAa;IACb,YAAY;;IAEZ,eAAe;IACf,gBAAgB;IAChB,kBAAkB;;;IAGlB,eAAe;IACf,SAAS;IACT,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mCAAmC;IACnC,WAAW;IACX,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,kCAAkC;IAClC,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,gDAAgD;AACpD;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,SAAS;;IAET,qCAAqC;IACrC,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iBAAiB;;IAEjB,kCAAkC;IAClC,kBAAkB;;AAEtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,WAAW;IACX,cAAc;AAClB","sourcesContent":["@font-face {\n    font-family: 'Inter medium';\n    src: url('./Inter-Medium.woff');\n}\n\n* {\n    padding: 0;\n    margin: 0;\n\n    font-family: 'Inter medium';\n    list-style: none;\n    text-decoration: none;\n}\n\n*,*:before,*:after {\n    box-sizing: border-box;\n}\n\n:root {\n    --primaryColor:#d65e78;\n    --lightColor:#ff8fa7;\n    --darkColor:#a12d4c;\n    --lowPriority:rgb(30, 226, 30);\n    --moderatePriority:rgb(255, 238, 0);\n}\n\nbody {\n    display:grid;\n    height: 100vh;\n    grid-template-rows: auto 1fr auto;\n    grid-template-columns: max(6em,15%) auto;\n}\n\n.header {\n    text-align: center;\n    font-weight: 900;\n}\n\n.modalBg {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0,0,0,.6);\n    position:fixed;\n    z-index: 3;\n    \n    height: 100vh;\n    height: 100dvh;\n    width: 100vw;\n    width: 100dvw;\n}\n\n.modalContainer {\n    display: flex;\n    background-color: white;\n    border-radius: 1em;\n    padding: 2em;\n    position: absolute;\n}\n\nli input,li textarea{\n    width: 100%;\n}\n\n.addTaskModal li:last-child, .editTaskModal li:last-child {\n    margin: 0 auto;\n}\n\nli:last-child>button {\n    padding: .25em .75em;\n    margin: .5em;\n}\n\n.newTaskHeader,.editTaskHeader {\n    font-size: 1.3rem;\n}\n\n.addTaskModal,.editTaskModal,.infoPanelContainer {\n    display: none;\n}\n\n\n\n.modalCornerButton {\n    display: flex;\n    position: absolute;\n    top:1.5em;\n    right: 2em;\n}\n\n.modalCornerButton>img {\n    width: 1.5rem;\n}\n\n.modalBg ul {\n    display: flex;\n    flex-direction: column;\n    gap:1em;\n}\n\n.listNameContainer, .addListButton{\n    margin: 0 auto;\n}\n\n.headerContainer {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-column: 1/-1;\n\n    background-color: var(--darkColor);\n}\n\n.pageHeader {\n    grid-column: 2;\n\n    color:white;\n    font-size: 3rem;\n    text-align: center;\n\n    min-width: 150px;\n    padding: .5em 0;\n}\n\n.sidebarContainer {\n    background-color: var(--lightColor);\n}\n\n.sidebarHeader {\n    background-color: var(--primaryColor);\n    font-size: 1.2rem;\n    padding: .5em 0;\n}\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap:.5em;\n\n    background-color: var(--lightColor);\n    text-align: center;\n}\n\n.sidebar li {\n    padding: .75em;\n}\n\n.sidebarItemContainer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n\n    min-height: 2.65rem;\n    position: relative;\n    text-align: left;\n}\n\n.sidebarItemContainer:hover,.taskContainer {\n    cursor: pointer;\n}\n\n.sidebarItemContainer div,.taskName {\n    -webkit-user-select: none; /* Safari */\n    -ms-user-select: none; /* IE 10 and IE 11 */\n    user-select: none;\n}\n\n.sidebarItemContainer div:first-child{\n    max-width: max(80px,90%);\n    word-wrap: break-word;\n}\n\n.sidebarItemContainer.active {\n    background-color: var(--darkColor);\n    color: white;\n    text-decoration: underline;\n}\n\n.saveButton {\n    background-color: rgb(113, 255, 100);\n    border: none;\n    border-radius: 20%;\n}\n\n.saveButton>img{\n    height: 80%;\n    position:relative;\n    top:5%;\n}\n\n.listNameContainer {\n    display: flex;\n    align-items: center;\n    gap: .25em;\n\n    position: absolute;\n    z-index: 2;\n}\n\n.taskButtonContainer {\n    display: flex;\n}\n\n.sidebarItemContainer .buttonOverlay {\n    display: flex;\n\n    position: absolute;\n    right:5%;\n\n    visibility: hidden;\n    z-index: 1;\n}\n\n.sidebarItemContainer:hover .buttonOverlay {\n    visibility: visible;\n}\n\n.sidebar button,.taskButtonContainer button{\n    width: 2em;\n    min-width: 2em;\n    height: 2em;\n}\n\n.sidebar .addListButton {\n    font-size: 1.2rem;\n    background-color: var(--primaryColor);\n    border: 0;\n    border-radius: .25em;\n    color:white;\n    height: 1.5em;\n    width: 5em;\n    margin-top: .7em;\n    margin-bottom: 1.25em;\n}\n\n.addListButton:hover,.saveButton:hover,.editButton:hover,.deleteButton:hover,.editTaskButton:hover,.deleteTaskButton:hover {\n    border: 1px solid white;\n}\n\n.sidebar .editButton,.editTaskButton {\n    background-color: rgb(113, 255, 100);\n}\n\n.sidebar .deleteButton,.deleteTaskButton {\n    margin-left: .3em;\n    background-color: rgb(255, 78, 78);\n}\n\n.buttonOverlay button,.taskButtonContainer button {\n    border: none;\n    border-radius: 20%;\n}\n\n.deleteButton>img,.deleteTaskButton>img{\n    position: relative;\n    top: 7%;\n    height: 80%;\n}\n\n.tasklistContainer {\n    margin: 1em;\n    height: 100%;\n    width: 100%;\n}\n\n.contentContainer {\n    display:flex;\n}\n\n.contentHeader {\n    display: none;\n    background-color: var(--darkColor);\n    color: white;\n    font-size: 1.25rem;\n    padding: 1em 2em;\n}\n\n.checklistContainer {\n    background-color: white;\n}\n\n.checklist {\n    display: flex;\n    flex-direction: column;\n    gap: 0.1rem;\n}\n\n.taskContainer {\n    display: flex;\n    gap:.5em;\n    align-items: center;\n    background-color: var(--lightColor);\n    font-size: 1.1rem;\n    padding: .5em;\n}\n\n.taskContainer:nth-child(even){\n    background-color: var(--primaryColor);\n}\n\n.taskContainer.checked {\n    background-color: gray;\n    text-decoration: 2px line-through;\n}\n\n.taskContainer.low {\n    border-left: 4px solid var(--lowPriority);\n}\n\n.taskContainer.moderate {\n    border-left: 4px solid var(--moderatePriority);\n}\n\n.taskContainer.high {\n    border-left: 4px solid red;\n}\n\n.taskContainer input {\n    height: 1.5em;\n    width: 1.5em;\n}\n\n.taskName {\n    max-width: min(65%,350px);\n    word-wrap: anywhere;\n}\n\n.taskButtonContainer>button {\n    margin: 0 .15rem;\n}\n\n.taskDueDate {\n    font-size: .75rem;\n    margin-left: auto;\n}\n\n.addTaskButton {\n    display: none;\n    background-color: var(--primaryColor);\n    border-radius: 5rem;\n    border:none;\n    color:white;\n    height:3.5rem;\n    width:3.5rem;\n\n    font-size: 2rem;\n    font-weight: 900;\n    text-align: center;\n\n\n    position: fixed;\n    bottom:5%;\n    right:3vmin;\n}\n\n.infoPanelContainer {\n    display: none;\n    background-color: var(--lightColor);\n    margin: 1em;\n    min-height: 30%;\n    position: relative;\n    height: max-content;\n    width: 35%;\n}\n\n.infoPanelHeader {\n    background-color: var(--darkColor);\n    color: white;\n    font-size: 1.1rem;\n    padding: 1em 2em;\n    min-height: 3.1rem;\n    width: 100%;\n}\n\n.infoPanelHeader.low {\n    border-bottom: 4px solid var(--lowPriority);\n}\n\n.infoPanelHeader.moderate {\n    border-bottom: 4px solid var(--moderatePriority);\n}\n\n.infoPanelHeader.high {\n    border-bottom: 4px solid red;\n}\n\n.infoPanelBody {\n    padding: 1em;\n    word-wrap: break-word;\n}\n\n.infoPanelFooter {\n    position: absolute;\n    bottom: 0;\n\n    background-color: var(--primaryColor);\n    width: 100%;\n}\n\n.infoPanelDueDate {\n    text-align: right;\n}\n\ntextarea {\n    resize: none;\n}\n\n.footerContainer {\n    grid-column: 1/-1;\n\n    background-color: var(--darkColor);\n    text-align: center;\n\n}\n\n.footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap:.25em;\n    color:white;\n    padding: .25em;\n}"],"sourceRoot":""}]);
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
  } else if (type === 'github') {
    image.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tNC40NjYgMTkuNTljLS40MDUuMDc4LS41MzQtLjE3MS0uNTM0LS4zODR2LTIuMTk1YzAtLjc0Ny0uMjYyLTEuMjMzLS41NS0xLjQ4MSAxLjc4Mi0uMTk4IDMuNjU0LS44NzUgMy42NTQtMy45NDcgMC0uODc0LS4zMTItMS41ODgtLjgyMy0yLjE0Ny4wODItLjIwMi4zNTYtMS4wMTYtLjA3OS0yLjExNyAwIDAtLjY3MS0uMjE1LTIuMTk4LjgyLS42NC0uMTgtMS4zMjQtLjI2Ny0yLjAwNC0uMjcxLS42OC4wMDMtMS4zNjQuMDkxLTIuMDAzLjI2OS0xLjUyOC0xLjAzNS0yLjItLjgyLTIuMi0uODItLjQzNCAxLjEwMi0uMTYgMS45MTUtLjA3NyAyLjExOC0uNTEyLjU2LS44MjQgMS4yNzMtLjgyNCAyLjE0NyAwIDMuMDY0IDEuODY3IDMuNzUxIDMuNjQ1IDMuOTU0LS4yMjkuMi0uNDM2LjU1Mi0uNTA4IDEuMDctLjQ1Ny4yMDQtMS42MTQuNTU3LTIuMzI4LS42NjYgMCAwLS40MjMtLjc2OC0xLjIyNy0uODI1IDAgMC0uNzgtLjAxLS4wNTUuNDg3IDAgMCAuNTI1LjI0Ni44ODkgMS4xNyAwIDAgLjQ2MyAxLjQyOCAyLjY4OC45NDR2MS40ODljMCAuMjExLS4xMjkuNDU5LS41MjguMzg1LTMuMTgtMS4wNTctNS40NzItNC4wNTYtNS40NzItNy41OSAwLTQuNDE5IDMuNTgyLTggOC04czggMy41ODEgOCA4YzAgMy41MzMtMi4yODkgNi41MzEtNS40NjYgNy41OXoiLz48L3N2Zz4=';
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
/* harmony export */   "updateInfoPanel": () => (/* binding */ updateInfoPanel),
/* harmony export */   "updateTaskCount": () => (/* binding */ updateTaskCount)
/* harmony export */ });
/* harmony import */ var _makeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeElement */ "./src/functions/makeElement.js");
/* harmony import */ var _append__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./append */ "./src/functions/append.js");



function display(form, lists, activeList) { // displays respective modal
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
  const header = document.querySelector('.infoPanelHeader');
  header.textContent = task.task;
  const prevPrio = header.className.split(' ');
  header.classList.remove(prevPrio[2]);
  header.classList.add(task.priority.toLowerCase());

  document.querySelector('.infoPanelBody').textContent = task.description;
  const due = document.querySelector('.infoPanelDueDate');
  if (task.dueDate) {
    due.textContent = `Due ${task.dueDate}`;
    due.style.padding = '.25em';
  } else {
    due.textContent = '';
    due.style.padding = '0';
  }
}

function togglePanel(activeTask) {
  const panel = document.querySelector('.infoPanelContainer');
  panel.style.display = activeTask ? 'block' : 'none';
}

function updateTaskCount(list) {
  const taskCounter = document.querySelector(`li[data-id="${list.id}"] > .taskCount`);
  const taskCount = list.tasks.reduce((acc, curr) => ((curr.completed) ? acc : acc + 1), 0);
  taskCounter.textContent = (taskCount === 0) ? '' : taskCount;
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
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets */ "./src/functions/assets.js");







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
  const footer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('a', 'footer', 'Kkeyfun');
  footer.href = 'https:github.com/KKeyfun';
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(footer, (0,_assets__WEBPACK_IMPORTED_MODULE_5__["default"])('github'));
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(footerContainer, footer);
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelector('body'), [modalBg, headerContainer, sidebarContainer, contentContainer, footerContainer]);
}

function createAddTaskModal() {
  const addTaskModal = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', 'addTaskModal');
  const newTaskForm = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('form', 'newTaskForm');

  const uList = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('ul');

  const listItemA = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const newTaskHeader = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', ['header', 'newTaskHeader'], 'New Task');
  const newTaskCancelButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'modalCornerButton');
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(newTaskCancelButton, (0,_assets__WEBPACK_IMPORTED_MODULE_5__["default"])('cancel'));
  newTaskCancelButton.addEventListener('click', (event) => {
    event.preventDefault();
    (0,_displayController__WEBPACK_IMPORTED_MODULE_3__.closeModal)(newTaskForm);
  });
  (0,_append__WEBPACK_IMPORTED_MODULE_0__["default"])(listItemA, [newTaskHeader, newTaskCancelButton]);

  const listItemB = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
  const newTaskName = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('input', 'newTaskName');
  newTaskName.setAttribute('type', 'text');
  newTaskName.required = true;
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
    if (newTaskName.checkValidity()) {
      newTaskName.style.border = '';
      (0,_taskFunctions__WEBPACK_IMPORTED_MODULE_4__.addTask)();
    } else {
      newTaskName.style.border = '2px solid red';
    }
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
  editTaskTitle.required = true;
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
  const saveEdit = (0,_makeElement__WEBPACK_IMPORTED_MODULE_1__["default"])('button', 'saveEdit', 'Save Changes');

  saveEdit.addEventListener('click', (event) => {
    event.preventDefault();
    if (editTaskTitle.checkValidity()) {
      editTaskTitle.style.border = '';
      (0,_taskFunctions__WEBPACK_IMPORTED_MODULE_4__.editTask)();
      (0,_displayController__WEBPACK_IMPORTED_MODULE_3__.closeModal)(editTaskForm);
    } else {
      editTaskTitle.style.border = '2px solid red';
    }
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

const addList = (listName, container) => { // adds a new list with edit + delete buttons to the sidebar
  const listItem = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', null, listName);
  const taskCount = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'taskCount');

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

  activeList = lists[lists.length - 1];// changes activelist to the new list
  activeList.toggleActive();
  if (lists.length > 0) { // displays tasklist header if at least 1 list exists
    document.querySelector('.contentHeader').style.display = 'block';
  }
  (0,_displayController__WEBPACK_IMPORTED_MODULE_3__.changeActiveList)(activeList, true);

  const buttonOverlay = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'buttonOverlay');
  const editButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'editButton');
  (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(editButton, (0,_assets__WEBPACK_IMPORTED_MODULE_4__["default"])('edit'));

  const deleteButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'deleteButton');
  (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(deleteButton, (0,_assets__WEBPACK_IMPORTED_MODULE_4__["default"])('delete'));

  editButton.addEventListener('click', (event) => { // shows text field to edit list name, hides label and save/delete buttons
    event.stopPropagation();
    buttonOverlay.style.display = 'none';
    listItem.style.display = 'none';
    taskCount.style.display = 'none';
    container.children[0].style.display = 'flex';
    container.firstChild.firstChild.focus();
  });

  deleteButton.addEventListener('click', (event) => {
    deleteList(container, event);
    if (lists.length === 0) {
      document.querySelector('.contentHeader').style.display = 'none';
    }
  });

  (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(buttonOverlay, [editButton, deleteButton]);
  (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(container, [listItem, taskCount, buttonOverlay]);
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
    (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(saveListName, (0,_assets__WEBPACK_IMPORTED_MODULE_4__["default"])('save'));
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

      addList(lName, sidebarItemContainer);
      // console.log(lists);
      listNameContainer.style.display = 'none';
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
  const selectedListIndex = document.querySelector('.listSelectDropdown').selectedIndex;
  const taskDescription = document.querySelector('.newTaskDescription').value;
  const taskDueDate = document.querySelector('.newTaskDueDate').value;
  const taskPriority = document.querySelector('.newTaskPriority').value;

  const taskContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('li', 'taskContainer');
  const checkbox = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('input');
  checkbox.setAttribute('type', 'checkbox');

  taskContainer.classList.add(priority[taskPriority]);// for styling a task based on priority

  taskContainer.addEventListener('click', () => {
    changeActiveTask(taskContainer);
  });

  const name = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'taskName', taskName);
  const due = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'taskDueDate');
  const taskButtonContainer = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', 'taskButtonContainer');

  const editTaskButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'editTaskButton');
  (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(editTaskButton, (0,_assets__WEBPACK_IMPORTED_MODULE_5__["default"])('edit'));

  const deleteTaskButton = (0,_makeElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', 'deleteTaskButton');
  (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(deleteTaskButton, (0,_assets__WEBPACK_IMPORTED_MODULE_5__["default"])('delete'));
  (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(taskButtonContainer, [editTaskButton, deleteTaskButton]);

  if (taskDueDate) { // Displays remaining/overdue time if date is set
    dateString(due, taskDueDate);
  }

  (0,_append__WEBPACK_IMPORTED_MODULE_1__["default"])(taskContainer, [checkbox, name, due, taskButtonContainer]);

  const selectedList = _listFunctions__WEBPACK_IMPORTED_MODULE_2__.lists[selectedListIndex];
  const task = createTask(taskName, taskDescription, taskDueDate, taskPriority, false, selectedList.tasks, taskContainer);
  selectedList.addTaskToList(task);

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      this.parentElement.classList.add('checked');
      task.completed = true;
    } else {
      this.parentElement.classList.remove('checked');
      task.completed = false;
    }

    (0,_displayController__WEBPACK_IMPORTED_MODULE_4__.updateTaskCount)(selectedList);
  });

  checkbox.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  editTaskButton.addEventListener('click', (event) => {
    event.stopPropagation();
    activeTask = task;
    document.querySelector('.editTaskTitle').value = activeTask.task;
    document.querySelector('.editTaskDescription').value = activeTask.description;
    document.querySelector('.editDueDate').value = activeTask.dueDate;
    document.querySelector('.editPriority').value = activeTask.priority;

    (0,_displayController__WEBPACK_IMPORTED_MODULE_4__.display)('edit', _listFunctions__WEBPACK_IMPORTED_MODULE_2__.lists, _listFunctions__WEBPACK_IMPORTED_MODULE_2__.activeList);
  });

  deleteTaskButton.addEventListener('click', (event) => {
    event.stopPropagation();
    deleteTask(taskContainer);
  });
  (0,_displayController__WEBPACK_IMPORTED_MODULE_4__.updateTaskCount)(selectedList);
  (0,_displayController__WEBPACK_IMPORTED_MODULE_4__.closeModal)(form);
}

function deleteTask(taskContainer) {
  const selected = _listFunctions__WEBPACK_IMPORTED_MODULE_2__.activeList.tasks.filter((task) => task.taskContainer === taskContainer)[0];
  _listFunctions__WEBPACK_IMPORTED_MODULE_2__.activeList.removeTaskFromList(selected.id);
  taskContainer.remove();

  if (selected === activeTask) {
    activeTask = null;
    (0,_displayController__WEBPACK_IMPORTED_MODULE_4__.togglePanel)();
  }
  (0,_displayController__WEBPACK_IMPORTED_MODULE_4__.updateTaskCount)(_listFunctions__WEBPACK_IMPORTED_MODULE_2__.activeList);
}

function changeActiveTask(taskContainer) {
  const t = _listFunctions__WEBPACK_IMPORTED_MODULE_2__.activeList.tasks.filter((task) => task.taskContainer === taskContainer)[0];
  activeTask = t;
  (0,_displayController__WEBPACK_IMPORTED_MODULE_4__.togglePanel)(activeTask);
  (0,_displayController__WEBPACK_IMPORTED_MODULE_4__.updateInfoPanel)(t);

  const header = document.querySelector('.infoPanelHeader');
  const classes = header.className.split(' ');

  header.classList.remove(classes[2]);

  header.classList.add(priority[t.priority]);
}

function editTask() {
  const prio = document.querySelector('.editPriority').value;
  if (prio !== activeTask.priority) {
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
    dateString(taskElement[2], activeTask.dueDate);
  }
  (0,_displayController__WEBPACK_IMPORTED_MODULE_4__.updateInfoPanel)(activeTask);
  // console.log(lists);
}

function dateString(due, taskDueDate) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssV0FBVyxVQUFVLFVBQVUsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxzQkFBc0IseUJBQXlCLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFlBQVksWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxXQUFXLFlBQVksWUFBWSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFP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RUE7O0FBRUE7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2FwcGVuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2Fzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvaWRGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9pbml0aWFsaXplLmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvbGlzdEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZnVuY3Rpb25zL21ha2VFbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9mdW5jdGlvbnMvdGFza0Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9JbnRlci1NZWRpdW0ud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyIG1lZGl1bSc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG5cXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlciBtZWRpdW0nO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbiosKjpiZWZvcmUsKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1wcmltYXJ5Q29sb3I6I2Q2NWU3ODtcXG4gICAgLS1saWdodENvbG9yOiNmZjhmYTc7XFxuICAgIC0tZGFya0NvbG9yOiNhMTJkNGM7XFxuICAgIC0tbG93UHJpb3JpdHk6cmdiKDMwLCAyMjYsIDMwKTtcXG4gICAgLS1tb2RlcmF0ZVByaW9yaXR5OnJnYigyNTUsIDIzOCwgMCk7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OmdyaWQ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgoNmVtLDE1JSkgYXV0bztcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLm1vZGFsQmcge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNik7XFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgaGVpZ2h0OiAxMDBkdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgd2lkdGg6IDEwMGR2dztcXG59XFxuXFxuLm1vZGFsQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gICAgcGFkZGluZzogMmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbmxpIGlucHV0LGxpIHRleHRhcmVhe1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFkZFRhc2tNb2RhbCBsaTpsYXN0LWNoaWxkLCAuZWRpdFRhc2tNb2RhbCBsaTpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmxpOmxhc3QtY2hpbGQ+YnV0dG9uIHtcXG4gICAgcGFkZGluZzogLjI1ZW0gLjc1ZW07XFxuICAgIG1hcmdpbjogLjVlbTtcXG59XFxuXFxuLm5ld1Rhc2tIZWFkZXIsLmVkaXRUYXNrSGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5hZGRUYXNrTW9kYWwsLmVkaXRUYXNrTW9kYWwsLmluZm9QYW5lbENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcblxcbi5tb2RhbENvcm5lckJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOjEuNWVtO1xcbiAgICByaWdodDogMmVtO1xcbn1cXG5cXG4ubW9kYWxDb3JuZXJCdXR0b24+aW1nIHtcXG4gICAgd2lkdGg6IDEuNXJlbTtcXG59XFxuXFxuLm1vZGFsQmcgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6MWVtO1xcbn1cXG5cXG4ubGlzdE5hbWVDb250YWluZXIsIC5hZGRMaXN0QnV0dG9ue1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmhlYWRlckNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtY29sdW1uOiAxLy0xO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQ29sb3IpO1xcbn1cXG5cXG4ucGFnZUhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAyO1xcblxcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIG1pbi13aWR0aDogMTUwcHg7XFxuICAgIHBhZGRpbmc6IC41ZW0gMDtcXG59XFxuXFxuLnNpZGViYXJDb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodENvbG9yKTtcXG59XFxuXFxuLnNpZGViYXJIZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogLjVlbSAwO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDouNWVtO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodENvbG9yKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWJhciBsaSB7XFxuICAgIHBhZGRpbmc6IC43NWVtO1xcbn1cXG5cXG4uc2lkZWJhckl0ZW1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIG1pbi1oZWlnaHQ6IDIuNjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnNpZGViYXJJdGVtQ29udGFpbmVyOmhvdmVyLC50YXNrQ29udGFpbmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhckl0ZW1Db250YWluZXIgZGl2LC50YXNrTmFtZSB7XFxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwIGFuZCBJRSAxMSAqL1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnNpZGViYXJJdGVtQ29udGFpbmVyIGRpdjpmaXJzdC1jaGlsZHtcXG4gICAgbWF4LXdpZHRoOiBtYXgoODBweCw5MCUpO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5zaWRlYmFySXRlbUNvbnRhaW5lci5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQ29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uc2F2ZUJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTMsIDI1NSwgMTAwKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XFxufVxcblxcbi5zYXZlQnV0dG9uPmltZ3tcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICB0b3A6NSU7XFxufVxcblxcbi5saXN0TmFtZUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogLjI1ZW07XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLnRhc2tCdXR0b25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2lkZWJhckl0ZW1Db250YWluZXIgLmJ1dHRvbk92ZXJsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OjUlO1xcblxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5zaWRlYmFySXRlbUNvbnRhaW5lcjpob3ZlciAuYnV0dG9uT3ZlcmxheSB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbiwudGFza0J1dHRvbkNvbnRhaW5lciBidXR0b257XFxuICAgIHdpZHRoOiAyZW07XFxuICAgIG1pbi13aWR0aDogMmVtO1xcbiAgICBoZWlnaHQ6IDJlbTtcXG59XFxuXFxuLnNpZGViYXIgLmFkZExpc3RCdXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMjVlbTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGhlaWdodDogMS41ZW07XFxuICAgIHdpZHRoOiA1ZW07XFxuICAgIG1hcmdpbi10b3A6IC43ZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcXG59XFxuXFxuLmFkZExpc3RCdXR0b246aG92ZXIsLnNhdmVCdXR0b246aG92ZXIsLmVkaXRCdXR0b246aG92ZXIsLmRlbGV0ZUJ1dHRvbjpob3ZlciwuZWRpdFRhc2tCdXR0b246aG92ZXIsLmRlbGV0ZVRhc2tCdXR0b246aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnNpZGViYXIgLmVkaXRCdXR0b24sLmVkaXRUYXNrQnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExMywgMjU1LCAxMDApO1xcbn1cXG5cXG4uc2lkZWJhciAuZGVsZXRlQnV0dG9uLC5kZWxldGVUYXNrQnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC4zZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDc4LCA3OCk7XFxufVxcblxcbi5idXR0b25PdmVybGF5IGJ1dHRvbiwudGFza0J1dHRvbkNvbnRhaW5lciBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcXG59XFxuXFxuLmRlbGV0ZUJ1dHRvbj5pbWcsLmRlbGV0ZVRhc2tCdXR0b24+aW1ne1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNyU7XFxuICAgIGhlaWdodDogODAlO1xcbn1cXG5cXG4udGFza2xpc3RDb250YWluZXIge1xcbiAgICBtYXJnaW46IDFlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnRDb250YWluZXIge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxufVxcblxcbi5jb250ZW50SGVhZGVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0NvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIHBhZGRpbmc6IDFlbSAyZW07XFxufVxcblxcbi5jaGVja2xpc3RDb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNoZWNrbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC4xcmVtO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDouNWVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodENvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IC41ZW07XFxufVxcblxcbi50YXNrQ29udGFpbmVyOm50aC1jaGlsZChldmVuKXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcXG59XFxuXFxuLnRhc2tDb250YWluZXIuY2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogMnB4IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2tDb250YWluZXIubG93IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1sb3dQcmlvcml0eSk7XFxufVxcblxcbi50YXNrQ29udGFpbmVyLm1vZGVyYXRlIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1tb2RlcmF0ZVByaW9yaXR5KTtcXG59XFxuXFxuLnRhc2tDb250YWluZXIuaGlnaCB7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgcmVkO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciBpbnB1dCB7XFxuICAgIGhlaWdodDogMS41ZW07XFxuICAgIHdpZHRoOiAxLjVlbTtcXG59XFxuXFxuLnRhc2tOYW1lIHtcXG4gICAgbWF4LXdpZHRoOiBtaW4oNjUlLDM1MHB4KTtcXG4gICAgd29yZC13cmFwOiBhbnl3aGVyZTtcXG59XFxuXFxuLnRhc2tCdXR0b25Db250YWluZXI+YnV0dG9uIHtcXG4gICAgbWFyZ2luOiAwIC4xNXJlbTtcXG59XFxuXFxuLnRhc2tEdWVEYXRlIHtcXG4gICAgZm9udC1zaXplOiAuNzVyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uYWRkVGFza0J1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVyZW07XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG4gICAgaGVpZ2h0OjMuNXJlbTtcXG4gICAgd2lkdGg6My41cmVtO1xcblxcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG5cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206NSU7XFxuICAgIHJpZ2h0OjN2bWluO1xcbn1cXG5cXG4uaW5mb1BhbmVsQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRDb2xvcik7XFxuICAgIG1hcmdpbjogMWVtO1xcbiAgICBtaW4taGVpZ2h0OiAzMCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gICAgd2lkdGg6IDM1JTtcXG59XFxuXFxuLmluZm9QYW5lbEhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IDFlbSAyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDMuMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pbmZvUGFuZWxIZWFkZXIubG93IHtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLWxvd1ByaW9yaXR5KTtcXG59XFxuXFxuLmluZm9QYW5lbEhlYWRlci5tb2RlcmF0ZSB7XFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1tb2RlcmF0ZVByaW9yaXR5KTtcXG59XFxuXFxuLmluZm9QYW5lbEhlYWRlci5oaWdoIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmluZm9QYW5lbEJvZHkge1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLmluZm9QYW5lbEZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmluZm9QYW5lbER1ZURhdGUge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5mb290ZXJDb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0NvbG9yKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDouMjVlbTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIHBhZGRpbmc6IC4yNWVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLDRDQUErQjtBQUNuQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTOztJQUVULDJCQUEyQjtJQUMzQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLFVBQVU7O0lBRVYsYUFBYTtJQUNiLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixPQUFPO0FBQ1g7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QUFhO0lBQ2IsWUFBWTs7SUFFWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7O0lBR2xCLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7O0lBRVQscUNBQXFDO0lBQ3JDLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7O0lBRWpCLGtDQUFrQztJQUNsQyxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULFdBQVc7SUFDWCxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0ludGVyIG1lZGl1bSc7XFxuICAgIHNyYzogdXJsKCcuL0ludGVyLU1lZGl1bS53b2ZmJyk7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnSW50ZXIgbWVkaXVtJztcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4qLCo6YmVmb3JlLCo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tcHJpbWFyeUNvbG9yOiNkNjVlNzg7XFxuICAgIC0tbGlnaHRDb2xvcjojZmY4ZmE3O1xcbiAgICAtLWRhcmtDb2xvcjojYTEyZDRjO1xcbiAgICAtLWxvd1ByaW9yaXR5OnJnYigzMCwgMjI2LCAzMCk7XFxuICAgIC0tbW9kZXJhdGVQcmlvcml0eTpyZ2IoMjU1LCAyMzgsIDApO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4KDZlbSwxNSUpIGF1dG87XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5tb2RhbEJnIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjYpO1xcbiAgICBwb3NpdGlvbjpmaXhlZDtcXG4gICAgei1pbmRleDogMztcXG4gICAgXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGhlaWdodDogMTAwZHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHdpZHRoOiAxMDBkdnc7XFxufVxcblxcbi5tb2RhbENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxuICAgIHBhZGRpbmc6IDJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG5saSBpbnB1dCxsaSB0ZXh0YXJlYXtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGRUYXNrTW9kYWwgbGk6bGFzdC1jaGlsZCwgLmVkaXRUYXNrTW9kYWwgbGk6bGFzdC1jaGlsZCB7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5saTpsYXN0LWNoaWxkPmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IC4yNWVtIC43NWVtO1xcbiAgICBtYXJnaW46IC41ZW07XFxufVxcblxcbi5uZXdUYXNrSGVhZGVyLC5lZGl0VGFza0hlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uYWRkVGFza01vZGFsLC5lZGl0VGFza01vZGFsLC5pbmZvUGFuZWxDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG5cXG4ubW9kYWxDb3JuZXJCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDoxLjVlbTtcXG4gICAgcmlnaHQ6IDJlbTtcXG59XFxuXFxuLm1vZGFsQ29ybmVyQnV0dG9uPmltZyB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxufVxcblxcbi5tb2RhbEJnIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOjFlbTtcXG59XFxuXFxuLmxpc3ROYW1lQ29udGFpbmVyLCAuYWRkTGlzdEJ1dHRvbntcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5oZWFkZXJDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgICBncmlkLWNvbHVtbjogMS8tMTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0NvbG9yKTtcXG59XFxuXFxuLnBhZ2VIZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMjtcXG5cXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xcbiAgICBwYWRkaW5nOiAuNWVtIDA7XFxufVxcblxcbi5zaWRlYmFyQ29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRDb2xvcik7XFxufVxcblxcbi5zaWRlYmFySGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IC41ZW0gMDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6LjVlbTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRDb2xvcik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNpZGViYXIgbGkge1xcbiAgICBwYWRkaW5nOiAuNzVlbTtcXG59XFxuXFxuLnNpZGViYXJJdGVtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICBtaW4taGVpZ2h0OiAyLjY1cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5zaWRlYmFySXRlbUNvbnRhaW5lcjpob3ZlciwudGFza0NvbnRhaW5lciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGViYXJJdGVtQ29udGFpbmVyIGRpdiwudGFza05hbWUge1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOyAvKiBTYWZhcmkgKi9cXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCBhbmQgSUUgMTEgKi9cXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFySXRlbUNvbnRhaW5lciBkaXY6Zmlyc3QtY2hpbGR7XFxuICAgIG1heC13aWR0aDogbWF4KDgwcHgsOTAlKTtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uc2lkZWJhckl0ZW1Db250YWluZXIuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya0NvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnNhdmVCdXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEzLCAyNTUsIDEwMCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xcbn1cXG5cXG4uc2F2ZUJ1dHRvbj5pbWd7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgdG9wOjUlO1xcbn1cXG5cXG4ubGlzdE5hbWVDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IC4yNWVtO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi50YXNrQnV0dG9uQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNpZGViYXJJdGVtQ29udGFpbmVyIC5idXR0b25PdmVybGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDo1JTtcXG5cXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uc2lkZWJhckl0ZW1Db250YWluZXI6aG92ZXIgLmJ1dHRvbk92ZXJsYXkge1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uc2lkZWJhciBidXR0b24sLnRhc2tCdXR0b25Db250YWluZXIgYnV0dG9ue1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICBtaW4td2lkdGg6IDJlbTtcXG4gICAgaGVpZ2h0OiAyZW07XFxufVxcblxcbi5zaWRlYmFyIC5hZGRMaXN0QnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogLjI1ZW07XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbiAgICB3aWR0aDogNWVtO1xcbiAgICBtYXJnaW4tdG9wOiAuN2VtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1ZW07XFxufVxcblxcbi5hZGRMaXN0QnV0dG9uOmhvdmVyLC5zYXZlQnV0dG9uOmhvdmVyLC5lZGl0QnV0dG9uOmhvdmVyLC5kZWxldGVCdXR0b246aG92ZXIsLmVkaXRUYXNrQnV0dG9uOmhvdmVyLC5kZWxldGVUYXNrQnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5zaWRlYmFyIC5lZGl0QnV0dG9uLC5lZGl0VGFza0J1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTMsIDI1NSwgMTAwKTtcXG59XFxuXFxuLnNpZGViYXIgLmRlbGV0ZUJ1dHRvbiwuZGVsZXRlVGFza0J1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAuM2VtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA3OCwgNzgpO1xcbn1cXG5cXG4uYnV0dG9uT3ZlcmxheSBidXR0b24sLnRhc2tCdXR0b25Db250YWluZXIgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XFxufVxcblxcbi5kZWxldGVCdXR0b24+aW1nLC5kZWxldGVUYXNrQnV0dG9uPmltZ3tcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDclO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG59XFxuXFxuLnRhc2tsaXN0Q29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAxZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250ZW50Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbn1cXG5cXG4uY29udGVudEhlYWRlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgICBwYWRkaW5nOiAxZW0gMmVtO1xcbn1cXG5cXG4uY2hlY2tsaXN0Q29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5jaGVja2xpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuMXJlbTtcXG59XFxuXFxuLnRhc2tDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6LjVlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRDb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwYWRkaW5nOiAuNWVtO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lcjpudGgtY2hpbGQoZXZlbil7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnlDb2xvcik7XFxufVxcblxcbi50YXNrQ29udGFpbmVyLmNoZWNrZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IDJweCBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrQ29udGFpbmVyLmxvdyB7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tbG93UHJpb3JpdHkpO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lci5tb2RlcmF0ZSB7XFxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tbW9kZXJhdGVQcmlvcml0eSk7XFxufVxcblxcbi50YXNrQ29udGFpbmVyLmhpZ2gge1xcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnRhc2tDb250YWluZXIgaW5wdXQge1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbiAgICB3aWR0aDogMS41ZW07XFxufVxcblxcbi50YXNrTmFtZSB7XFxuICAgIG1heC13aWR0aDogbWluKDY1JSwzNTBweCk7XFxuICAgIHdvcmQtd3JhcDogYW55d2hlcmU7XFxufVxcblxcbi50YXNrQnV0dG9uQ29udGFpbmVyPmJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMCAuMTVyZW07XFxufVxcblxcbi50YXNrRHVlRGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmFkZFRhc2tCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGhlaWdodDozLjVyZW07XFxuICAgIHdpZHRoOjMuNXJlbTtcXG5cXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOjUlO1xcbiAgICByaWdodDozdm1pbjtcXG59XFxuXFxuLmluZm9QYW5lbENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0Q29sb3IpO1xcbiAgICBtYXJnaW46IDFlbTtcXG4gICAgbWluLWhlaWdodDogMzAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICAgIHdpZHRoOiAzNSU7XFxufVxcblxcbi5pbmZvUGFuZWxIZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrQ29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwYWRkaW5nOiAxZW0gMmVtO1xcbiAgICBtaW4taGVpZ2h0OiAzLjFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW5mb1BhbmVsSGVhZGVyLmxvdyB7XFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1sb3dQcmlvcml0eSk7XFxufVxcblxcbi5pbmZvUGFuZWxIZWFkZXIubW9kZXJhdGUge1xcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tbW9kZXJhdGVQcmlvcml0eSk7XFxufVxcblxcbi5pbmZvUGFuZWxIZWFkZXIuaGlnaCB7XFxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCByZWQ7XFxufVxcblxcbi5pbmZvUGFuZWxCb2R5IHtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5pbmZvUGFuZWxGb290ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeUNvbG9yKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pbmZvUGFuZWxEdWVEYXRlIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uZm9vdGVyQ29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtDb2xvcik7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6LjI1ZW07XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBwYWRkaW5nOiAuMjVlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGFwcGVuZChwYXJlbnQsIGNoaWxkKSB7XG4gIGlmIChjaGlsZC5sZW5ndGgpIHtcbiAgICBjaGlsZC5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBlbmQ7XG4iLCJpbXBvcnQgbWFrZUVsZW1lbnQgZnJvbSAnLi9tYWtlRWxlbWVudCc7XG5cbmZ1bmN0aW9uIG1ha2VBc3NldCh0eXBlKSB7XG4gIGNvbnN0IGltYWdlID0gbWFrZUVsZW1lbnQoJ2ltZycpO1xuICBpZiAodHlwZSA9PT0gJ2VkaXQnKSB7XG4gICAgaW1hZ2Uuc3JjID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0lnYzNSeWIydGxMV3hwYm1WcWIybHVQU0p5YjNWdVpDSWdjM1J5YjJ0bExXMXBkR1Z5YkdsdGFYUTlJaklpSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0OGNHRjBhQ0JrUFNKdE1URXVNalVnTm1NdU16azRJREFnTGpjMUxqTTFNaTQzTlM0M05TQXdJQzQwTVRRdExqTXpOaTQzTlMwdU56VXVOelV0TVM0MU1EVWdNQzAzTGpjMUlEQXROeTQzTlNBd2RqRXlhREUzZGkwNExqYzBPV013TFM0ME1UUXVNek0yTFM0M05TNDNOUzB1TnpWekxqYzFMak16Tmk0M05TNDNOWFk1TGpJME9XTXdJQzQyTWpFdExqVXlNaUF4TFRFZ01XZ3RNVGhqTFM0ME9DQXdMVEV0TGpNM09TMHhMVEYyTFRFell6QXRMalE0TVM0ek9DMHhJREV0TVhwdE1TNDFNakVnT1M0Mk9Ea2dPUzR3TVRJdE9TNHdNVEpqTGpFek15MHVNVE16TGpJeE55MHVNekk1TGpJeE55MHVOVE15SURBdExqRTNPUzB1TURZMUxTNHpOak10TGpJeE9DMHVOVEUxYkMweUxqUXlNeTB5TGpReE5XTXRMakUwTXkwdU1UUXpMUzR6TXpNdExqSXhOUzB1TlRJeUxTNHlNVFZ6TFM0ek56Z3VNRGN5TFM0MU1qTXVNakUxYkMwNUxqQXlOeUE0TGprNU5tTXRMalEwTWlBeExqTTNNUzB4TGpFMU9DQXpMalU0TmkweExqSTJOQ0F6TGprMU1pMHVNVEkyTGpRek15NHhPVGd1T0RNMExqVTNNaTQ0TXpRdU5ERWdNQ0F1TmprMkxTNHdPVGtnTkM0eE56WXRNUzR6TURoNmJTMHlMakkxT0MweUxqTTVNaUF4TGpFM0lERXVNVGN4WXkwdU56QTBMakl6TWkweExqSTNOQzQwTVRndE1TNDNNamt1TlRZMmVtMHVPVFk0TFRFdU1UVTBJRGN1TXpVMkxUY3VNek14SURFdU16UTNJREV1TXpReUxUY3VNelEySURjdU16UTNlaUlnWm1sc2JDMXlkV3hsUFNKdWIyNTZaWEp2SWk4K1BDOXpkbWMrJztcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnZGVsZXRlJykge1xuICAgIGltYWdlLnNyYyA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXlOQ0lnYUdWcFoyaDBQU0l5TkNJZ2RtbGxkMEp2ZUQwaU1DQXdJREkwSURJMElqNDhjR0YwYUNCa1BTSk5NeUEyZGpFNGFERTRkaTB4T0dndE1UaDZiVFVnTVRSak1DQXVOVFV5TFM0ME5EZ2dNUzB4SURGekxURXRMalEwT0MweExURjJMVEV3WXpBdExqVTFNaTQwTkRndE1TQXhMVEZ6TVNBdU5EUTRJREVnTVhZeE1IcHROU0F3WXpBZ0xqVTFNaTB1TkRRNElERXRNU0F4Y3kweExTNDBORGd0TVMweGRpMHhNR013TFM0MU5USXVORFE0TFRFZ01TMHhjekVnTGpRME9DQXhJREYyTVRCNmJUVWdNR013SUM0MU5USXRMalEwT0NBeExURWdNWE10TVMwdU5EUTRMVEV0TVhZdE1UQmpNQzB1TlRVeUxqUTBPQzB4SURFdE1YTXhJQzQwTkRnZ01TQXhkakV3ZW0wMExURTRkakpvTFRJd2RpMHlhRFV1TnpFeFl5NDVJREFnTVM0Mk16RXRNUzR3T1RrZ01TNDJNekV0TW1nMUxqTXhOV013SUM0NU1ERXVOek1nTWlBeExqWXpNU0F5YURVdU56RXllaUl2UGp3dmMzWm5QZz09JztcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnY2FuY2VsJykge1xuICAgIGltYWdlLnNyYyA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUJqYkdsd0xYSjFiR1U5SW1WMlpXNXZaR1FpSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ2MzUnliMnRsTFd4cGJtVnFiMmx1UFNKeWIzVnVaQ0lnYzNSeWIydGxMVzFwZEdWeWJHbHRhWFE5SWpJaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TkNBeU5DSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNDhjR0YwYUNCa1BTSnRNVElnTVRBdU9UTWdOUzQzTVRrdE5TNDNNbU11TVRRMkxTNHhORFl1TXpNNUxTNHlNVGt1TlRNeExTNHlNVGt1TkRBMElEQWdMamMxTGpNeU5DNDNOUzQzTkRrZ01DQXVNVGt6TFM0d056TXVNemcxTFM0eU1Ua3VOVE15YkMwMUxqY3lJRFV1TnpFNUlEVXVOekU1SURVdU56RTVZeTR4TkRjdU1UUTNMakl5TGpNek9TNHlNaTQxTXpFZ01DQXVOREkzTFM0ek5Ea3VOelV0TGpjMUxqYzFMUzR4T1RJZ01DMHVNemcxTFM0d056TXRMalV6TVMwdU1qRTViQzAxTGpjeE9TMDFMamN4T1MwMUxqY3hPU0ExTGpjeE9XTXRMakUwTmk0eE5EWXRMak16T1M0eU1Ua3RMalV6TVM0eU1Ua3RMalF3TVNBd0xTNDNOUzB1TXpJekxTNDNOUzB1TnpVZ01DMHVNVGt5TGpBM015MHVNemcwTGpJeUxTNDFNekZzTlM0M01Ua3ROUzQzTVRrdE5TNDNNaTAxTGpjeE9XTXRMakUwTmkwdU1UUTNMUzR5TVRrdExqTXpPUzB1TWpFNUxTNDFNeklnTUMwdU5ESTFMak0wTmkwdU56UTVMamMxTFM0M05Ea3VNVGt5SURBZ0xqTTROUzR3TnpNdU5UTXhMakl4T1hvaUx6NDhMM04yWno0PSc7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3NhdmUnKSB7XG4gICAgaW1hZ2Uuc3JjID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeU5DSWdhR1ZwWjJoMFBTSXlOQ0lnZG1sbGQwSnZlRDBpTUNBd0lESTBJREkwSWo0OGNHRjBhQ0JrUFNKTk1UUWdNMmd5TGprNU4zWTFhQzB5TGprNU4zWXROWHB0T1NBeGRqSXdhQzB5TW5ZdE1qUm9NVGN1T1RrM2JEUXVNREF6SURSNmJTMHhOeUExYURFeWRpMDNhQzB4TW5ZM2VtMHhOQ0EwYUMweE5uWTVhREUyZGkwNWVpSXZQand2YzNablBnPT0nO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdnaXRodWInKSB7XG4gICAgaW1hZ2Uuc3JjID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeU5DSWdhR1ZwWjJoMFBTSXlOQ0lnZG1sbGQwSnZlRDBpTUNBd0lESTBJREkwSWo0OGNHRjBhQ0JrUFNKTk1Ua2dNR2d0TVRSakxUSXVOell4SURBdE5TQXlMakl6T1MwMUlEVjJNVFJqTUNBeUxqYzJNU0F5TGpJek9TQTFJRFVnTldneE5HTXlMamMyTWlBd0lEVXRNaTR5TXprZ05TMDFkaTB4TkdNd0xUSXVOell4TFRJdU1qTTRMVFV0TlMwMWVtMHROQzQwTmpZZ01Ua3VOVGxqTFM0ME1EVXVNRGM0TFM0MU16UXRMakUzTVMwdU5UTTBMUzR6T0RSMkxUSXVNVGsxWXpBdExqYzBOeTB1TWpZeUxURXVNak16TFM0MU5TMHhMalE0TVNBeExqYzRNaTB1TVRrNElETXVOalUwTFM0NE56VWdNeTQyTlRRdE15NDVORGNnTUMwdU9EYzBMUzR6TVRJdE1TNDFPRGd0TGpneU15MHlMakUwTnk0d09ESXRMakl3TWk0ek5UWXRNUzR3TVRZdExqQTNPUzB5TGpFeE55QXdJREF0TGpZM01TMHVNakUxTFRJdU1UazRMamd5TFM0Mk5DMHVNVGd0TVM0ek1qUXRMakkyTnkweUxqQXdOQzB1TWpjeExTNDJPQzR3TURNdE1TNHpOalF1TURreExUSXVNREF6TGpJMk9TMHhMalV5T0MweExqQXpOUzB5TGpJdExqZ3lMVEl1TWkwdU9ESXRMalF6TkNBeExqRXdNaTB1TVRZZ01TNDVNVFV0TGpBM055QXlMakV4T0MwdU5URXlMalUyTFM0NE1qUWdNUzR5TnpNdExqZ3lOQ0F5TGpFME55QXdJRE11TURZMElERXVPRFkzSURNdU56VXhJRE11TmpRMUlETXVPVFUwTFM0eU1qa3VNaTB1TkRNMkxqVTFNaTB1TlRBNElERXVNRGN0TGpRMU55NHlNRFF0TVM0Mk1UUXVOVFUzTFRJdU16STRMUzQyTmpZZ01DQXdMUzQwTWpNdExqYzJPQzB4TGpJeU55MHVPREkxSURBZ01DMHVOemd0TGpBeExTNHdOVFV1TkRnM0lEQWdNQ0F1TlRJMUxqSTBOaTQ0T0RrZ01TNHhOeUF3SURBZ0xqUTJNeUF4TGpReU9DQXlMalk0T0M0NU5EUjJNUzQwT0Rsak1DQXVNakV4TFM0eE1qa3VORFU1TFM0MU1qZ3VNemcxTFRNdU1UZ3RNUzR3TlRjdE5TNDBOekl0TkM0d05UWXROUzQwTnpJdE55NDFPU0F3TFRRdU5ERTVJRE11TlRneUxUZ2dPQzA0Y3pnZ015NDFPREVnT0NBNFl6QWdNeTQxTXpNdE1pNHlPRGtnTmk0MU16RXROUzQwTmpZZ055NDFPWG9pTHo0OEwzTjJaejQ9JztcbiAgfVxuICByZXR1cm4gaW1hZ2U7XG59XG5cbmZ1bmN0aW9uIGdldEFzc2V0KGFzc2V0KSB7XG4gIHJldHVybiBtYWtlQXNzZXQoYXNzZXQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRBc3NldDtcbiIsImltcG9ydCBtYWtlRWxlbWVudCBmcm9tICcuL21ha2VFbGVtZW50JztcbmltcG9ydCBhcHBlbmQgZnJvbSAnLi9hcHBlbmQnO1xuXG5mdW5jdGlvbiBkaXNwbGF5KGZvcm0sIGxpc3RzLCBhY3RpdmVMaXN0KSB7IC8vIGRpc3BsYXlzIHJlc3BlY3RpdmUgbW9kYWxcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsQmcnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBpZiAoZm9ybSA9PT0gJ2FkZCcpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFza01vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgfSBlbHNlIGlmIChmb3JtID09PSAnZWRpdCcpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFRhc2tNb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIH1cblxuICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0U2VsZWN0RHJvcGRvd24nKTtcbiAgaWYgKGRyb3Bkb3duLmNoaWxkcmVuLmxlbmd0aCAhPT0gbGlzdHMubGVuZ3RoKSB7XG4gICAgd2hpbGUgKGRyb3Bkb3duLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGRyb3Bkb3duLnJlbW92ZUNoaWxkKGRyb3Bkb3duLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBsaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICBjb25zdCBhTGlzdCA9IG1ha2VFbGVtZW50KCdvcHRpb24nLCAnJywgbGlzdC5saXN0TmFtZSk7XG4gICAgICBhTGlzdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBsaXN0LmlkKTtcbiAgICAgIGFwcGVuZChkcm9wZG93biwgYUxpc3QpO1xuICAgIH0pO1xuICB9XG4gIGRyb3Bkb3duLnNlbGVjdGVkSW5kZXggPSBsaXN0cy5tYXAoKGVsZW0pID0+IGVsZW0uaWQpLmluZGV4T2YoYWN0aXZlTGlzdC5pZCk7Ly8gZGVmYXVsdHMgbGlzdCBzZWxlY3QgdG8gY3VycmVudCBhY3RpdmUgbGlzdFxufVxuXG5mdW5jdGlvbiBjaGFuZ2VBY3RpdmVMaXN0KGFjdGl2ZUxpc3QsIGhpZGVQYW5lbCkgeyAvLyBjaGFuZ2UgY29udGVudCBhcmVhIHRleHQsIGRpc3BsYXkgcmVzcGVjdGl2ZSBsaXN0IHRhc2tzXG4gIGlmIChoaWRlUGFuZWwpIHsgLy8gSGlkZSBpbmZvIHBhbmVsIHdoZW4gY2hhbmdpbmcgbGlzdHNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mb1BhbmVsQ29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2xpc3QnKTtcbiAgd2hpbGUgKHRhc2tMaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICB0YXNrTGlzdC5yZW1vdmVDaGlsZCh0YXNrTGlzdC5maXJzdENoaWxkKTtcbiAgfVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudEhlYWRlcicpLnRleHRDb250ZW50ID0gYWN0aXZlTGlzdC5saXN0TmFtZTtcbiAgY29uc3QgdGFza3MgPSBhY3RpdmVMaXN0LnRhc2tzLm1hcCgoZWxlbSkgPT4gZWxlbS50YXNrQ29udGFpbmVyKTtcbiAgaWYgKHRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICBhcHBlbmQodGFza0xpc3QsIHRhc2tzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKGZvcm0pIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsQmcnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFza01vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRUYXNrTW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBmb3JtLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUluZm9QYW5lbCh0YXNrKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvUGFuZWxIZWFkZXInKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gdGFzay50YXNrO1xuICBjb25zdCBwcmV2UHJpbyA9IGhlYWRlci5jbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUocHJldlByaW9bMl0pO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZCh0YXNrLnByaW9yaXR5LnRvTG93ZXJDYXNlKCkpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvUGFuZWxCb2R5JykudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICBjb25zdCBkdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mb1BhbmVsRHVlRGF0ZScpO1xuICBpZiAodGFzay5kdWVEYXRlKSB7XG4gICAgZHVlLnRleHRDb250ZW50ID0gYER1ZSAke3Rhc2suZHVlRGF0ZX1gO1xuICAgIGR1ZS5zdHlsZS5wYWRkaW5nID0gJy4yNWVtJztcbiAgfSBlbHNlIHtcbiAgICBkdWUudGV4dENvbnRlbnQgPSAnJztcbiAgICBkdWUuc3R5bGUucGFkZGluZyA9ICcwJztcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVQYW5lbChhY3RpdmVUYXNrKSB7XG4gIGNvbnN0IHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm9QYW5lbENvbnRhaW5lcicpO1xuICBwYW5lbC5zdHlsZS5kaXNwbGF5ID0gYWN0aXZlVGFzayA/ICdibG9jaycgOiAnbm9uZSc7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tDb3VudChsaXN0KSB7XG4gIGNvbnN0IHRhc2tDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlbZGF0YS1pZD1cIiR7bGlzdC5pZH1cIl0gPiAudGFza0NvdW50YCk7XG4gIGNvbnN0IHRhc2tDb3VudCA9IGxpc3QudGFza3MucmVkdWNlKChhY2MsIGN1cnIpID0+ICgoY3Vyci5jb21wbGV0ZWQpID8gYWNjIDogYWNjICsgMSksIDApO1xuICB0YXNrQ291bnRlci50ZXh0Q29udGVudCA9ICh0YXNrQ291bnQgPT09IDApID8gJycgOiB0YXNrQ291bnQ7XG59XG5cbmV4cG9ydCB7XG4gIGRpc3BsYXksIGNoYW5nZUFjdGl2ZUxpc3QsIGNsb3NlTW9kYWwsIHVwZGF0ZUluZm9QYW5lbCwgdG9nZ2xlUGFuZWwsIHVwZGF0ZVRhc2tDb3VudCxcbn07XG4iLCJmdW5jdGlvbiBnZW5lcmF0ZUlkKGxpc3QpIHtcbiAgbGV0IGlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XG4gIHdoaWxlIChjaGVja0lmSWRFeGlzdHMobGlzdCwgaWQpKSB7XG4gICAgaWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKTtcbiAgfVxuICByZXR1cm4gaWQ7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZJZEV4aXN0cyhsaXN0LCBpZCkge1xuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgbGV0IGV4aXN0cyA9IGZhbHNlO1xuICBsaXN0LmZvckVhY2goKGVsZW0pID0+IHtcbiAgICBpZiAoZWxlbS5pZCA9PT0gaWQpIHtcbiAgICAgIGV4aXN0cyA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGV4aXN0cztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVJZDtcbiIsImltcG9ydCBhcHBlbmQgZnJvbSAnLi9hcHBlbmQnO1xuaW1wb3J0IG1ha2VFbGVtZW50IGZyb20gJy4vbWFrZUVsZW1lbnQnO1xuaW1wb3J0IHsgbmV3TGlzdElucHV0LCBsaXN0cywgYWN0aXZlTGlzdCB9IGZyb20gJy4vbGlzdEZ1bmN0aW9ucyc7XG5pbXBvcnQgeyBjbG9zZU1vZGFsLCBkaXNwbGF5IH0gZnJvbSAnLi9kaXNwbGF5Q29udHJvbGxlcic7XG5pbXBvcnQgeyBhZGRUYXNrLCBlZGl0VGFzayB9IGZyb20gJy4vdGFza0Z1bmN0aW9ucyc7XG5pbXBvcnQgZ2V0QXNzZXQgZnJvbSAnLi9hc3NldHMnO1xuXG5mdW5jdGlvbiBpbml0aWFsTG9hZCgpIHtcbiAgY29uc3QgbW9kYWxCZyA9IG1ha2VFbGVtZW50KCdkaXYnLCAnbW9kYWxCZycpO1xuICBtb2RhbEJnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxDb250YWluZXInKS5maXJzdENoaWxkLnN0eWxlLmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgY2xvc2VNb2RhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VGFza0Zvcm0nKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsb3NlTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRUYXNrRm9ybScpKTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBtb2RhbENvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCAnbW9kYWxDb250YWluZXInKTtcbiAgbW9kYWxDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG5cbiAgY29uc3QgYWRkTW9kYWwgPSBjcmVhdGVBZGRUYXNrTW9kYWwoKTtcbiAgY29uc3QgZWRpdE1vZGFsID0gY3JlYXRlRWRpdFRhc2tNb2RhbCgpO1xuXG4gIGFwcGVuZChtb2RhbENvbnRhaW5lciwgW2FkZE1vZGFsLCBlZGl0TW9kYWxdKTtcbiAgYXBwZW5kKG1vZGFsQmcsIG1vZGFsQ29udGFpbmVyKTtcblxuICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgJ2hlYWRlckNvbnRhaW5lcicpO1xuICBjb25zdCBoZWFkZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgWydoZWFkZXInLCAncGFnZUhlYWRlciddLCAnVG8gRG8nKTtcbiAgYXBwZW5kKGhlYWRlckNvbnRhaW5lciwgaGVhZGVyKTtcblxuICBjb25zdCBzaWRlYmFyQ29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsICdzaWRlYmFyQ29udGFpbmVyJyk7XG4gIGNvbnN0IHNpZGViYXJIZWFkZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgWydoZWFkZXInLCAnc2lkZWJhckhlYWRlciddLCAnWW91ciBMaXN0cycpO1xuICBjb25zdCBzaWRlYmFyID0gbWFrZUVsZW1lbnQoJ3VsJywgJ3NpZGViYXInKTtcbiAgY29uc3QgYWRkTGlzdEJ1dHRvbiA9IG1ha2VFbGVtZW50KCdidXR0b24nLCAnYWRkTGlzdEJ1dHRvbicsICcrJyk7XG5cbiAgYWRkTGlzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld0xpc3RJbnB1dCk7XG5cbiAgYXBwZW5kKHNpZGViYXIsIGFkZExpc3RCdXR0b24pO1xuICBhcHBlbmQoc2lkZWJhckNvbnRhaW5lciwgW3NpZGViYXJIZWFkZXIsIHNpZGViYXJdKTtcblxuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsICdjb250ZW50Q29udGFpbmVyJyk7XG5cbiAgY29uc3QgdGFza2xpc3RDb250YWluZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgJ3Rhc2tsaXN0Q29udGFpbmVyJyk7XG4gIGNvbnN0IGNvbnRlbnRIZWFkZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgWydoZWFkZXInLCAnY29udGVudEhlYWRlciddKTtcblxuICBjb25zdCBjb250ZW50ID0gbWFrZUVsZW1lbnQoJ2RpdicsICdjb250ZW50Jyk7XG4gIGNvbnN0IGNoZWNrbGlzdENvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCAnY2hlY2tsaXN0Q29udGFpbmVyJyk7XG4gIGNvbnN0IGNoZWNrbGlzdCA9IG1ha2VFbGVtZW50KCdvbCcsICdjaGVja2xpc3QnKTtcblxuICBjb25zdCBpbmZvUGFuZWwgPSBjcmVhdGVJbmZvUGFuZWwoKTtcblxuICBjb25zdCBuZXdUYXNrQnV0dG9uID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsICdhZGRUYXNrQnV0dG9uJywgJysnKTtcbiAgbmV3VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkaXNwbGF5KCdhZGQnLCBsaXN0cywgYWN0aXZlTGlzdCk7XG4gIH0pO1xuXG4gIGFwcGVuZChjaGVja2xpc3RDb250YWluZXIsIGNoZWNrbGlzdCk7XG4gIGFwcGVuZChjb250ZW50LCBjaGVja2xpc3RDb250YWluZXIpO1xuICBhcHBlbmQodGFza2xpc3RDb250YWluZXIsIFtjb250ZW50SGVhZGVyLCBjb250ZW50LCBuZXdUYXNrQnV0dG9uXSk7XG4gIGFwcGVuZChjb250ZW50Q29udGFpbmVyLCBbdGFza2xpc3RDb250YWluZXIsIGluZm9QYW5lbF0pO1xuXG4gIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCAnZm9vdGVyQ29udGFpbmVyJyk7XG4gIGNvbnN0IGZvb3RlciA9IG1ha2VFbGVtZW50KCdhJywgJ2Zvb3RlcicsICdLa2V5ZnVuJyk7XG4gIGZvb3Rlci5ocmVmID0gJ2h0dHBzOmdpdGh1Yi5jb20vS0tleWZ1bic7XG4gIGFwcGVuZChmb290ZXIsIGdldEFzc2V0KCdnaXRodWInKSk7XG4gIGFwcGVuZChmb290ZXJDb250YWluZXIsIGZvb3Rlcik7XG4gIGFwcGVuZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksIFttb2RhbEJnLCBoZWFkZXJDb250YWluZXIsIHNpZGViYXJDb250YWluZXIsIGNvbnRlbnRDb250YWluZXIsIGZvb3RlckNvbnRhaW5lcl0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGRUYXNrTW9kYWwoKSB7XG4gIGNvbnN0IGFkZFRhc2tNb2RhbCA9IG1ha2VFbGVtZW50KCdkaXYnLCAnYWRkVGFza01vZGFsJyk7XG4gIGNvbnN0IG5ld1Rhc2tGb3JtID0gbWFrZUVsZW1lbnQoJ2Zvcm0nLCAnbmV3VGFza0Zvcm0nKTtcblxuICBjb25zdCB1TGlzdCA9IG1ha2VFbGVtZW50KCd1bCcpO1xuXG4gIGNvbnN0IGxpc3RJdGVtQSA9IG1ha2VFbGVtZW50KCdsaScpO1xuICBjb25zdCBuZXdUYXNrSGVhZGVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIFsnaGVhZGVyJywgJ25ld1Rhc2tIZWFkZXInXSwgJ05ldyBUYXNrJyk7XG4gIGNvbnN0IG5ld1Rhc2tDYW5jZWxCdXR0b24gPSBtYWtlRWxlbWVudCgnYnV0dG9uJywgJ21vZGFsQ29ybmVyQnV0dG9uJyk7XG4gIGFwcGVuZChuZXdUYXNrQ2FuY2VsQnV0dG9uLCBnZXRBc3NldCgnY2FuY2VsJykpO1xuICBuZXdUYXNrQ2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjbG9zZU1vZGFsKG5ld1Rhc2tGb3JtKTtcbiAgfSk7XG4gIGFwcGVuZChsaXN0SXRlbUEsIFtuZXdUYXNrSGVhZGVyLCBuZXdUYXNrQ2FuY2VsQnV0dG9uXSk7XG5cbiAgY29uc3QgbGlzdEl0ZW1CID0gbWFrZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IG5ld1Rhc2tOYW1lID0gbWFrZUVsZW1lbnQoJ2lucHV0JywgJ25ld1Rhc2tOYW1lJyk7XG4gIG5ld1Rhc2tOYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIG5ld1Rhc2tOYW1lLnJlcXVpcmVkID0gdHJ1ZTtcbiAgY29uc3QgbmV3VGFza05hbWVMYWJlbCA9IG1ha2VFbGVtZW50KCdsYWJlbCcsICdsYWJlbCcsICdUYXNrIE5hbWU6ICcpO1xuICBhcHBlbmQobGlzdEl0ZW1CLCBbbmV3VGFza05hbWVMYWJlbCwgbmV3VGFza05hbWVdKTtcblxuICBjb25zdCBsaXN0SXRlbUMgPSBtYWtlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbGlzdFNlbGVjdExhYmVsID0gbWFrZUVsZW1lbnQoJ2xhYmVsJywgJ2xhYmVsJywgJ0xpc3Q6ICcpO1xuICBjb25zdCBsaXN0U2VsZWN0RHJvcGRvd24gPSBtYWtlRWxlbWVudCgnc2VsZWN0JywgJ2xpc3RTZWxlY3REcm9wZG93bicpO1xuICBhcHBlbmQobGlzdEl0ZW1DLCBbbGlzdFNlbGVjdExhYmVsLCBsaXN0U2VsZWN0RHJvcGRvd25dKTtcblxuICBjb25zdCBsaXN0SXRlbUQgPSBtYWtlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uTGFiZWwgPSBtYWtlRWxlbWVudCgnbGFiZWwnLCAnbGFiZWwnLCAnRGVzY3JpcHRpb246ICcpO1xuICBjb25zdCBuZXdUYXNrRGVzY3JpcHRpb24gPSBtYWtlRWxlbWVudCgndGV4dGFyZWEnLCAnbmV3VGFza0Rlc2NyaXB0aW9uJyk7XG4gIG5ld1Rhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMycpO1xuICBhcHBlbmQobGlzdEl0ZW1ELCBbbmV3VGFza0Rlc2NyaXB0aW9uTGFiZWwsIG5ld1Rhc2tEZXNjcmlwdGlvbl0pO1xuXG4gIGNvbnN0IGxpc3RJdGVtRSA9IG1ha2VFbGVtZW50KCdsaScpO1xuICBjb25zdCBuZXdUYXNrRHVlRGF0ZUxhYmVsID0gbWFrZUVsZW1lbnQoJ2xhYmVsJywgJ2xhYmVsJywgJ0R1ZSBEYXRlOiAnKTtcbiAgY29uc3QgbmV3VGFza0R1ZURhdGUgPSBtYWtlRWxlbWVudCgnaW5wdXQnLCAnbmV3VGFza0R1ZURhdGUnKTtcbiAgbmV3VGFza0R1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgbmV3VGFza0R1ZURhdGUuc2V0QXR0cmlidXRlKCdtaW4nLCAnMjAyMy0wMS0wMScpO1xuICBhcHBlbmQobGlzdEl0ZW1FLCBbbmV3VGFza0R1ZURhdGVMYWJlbCwgbmV3VGFza0R1ZURhdGVdKTtcblxuICBjb25zdCBsaXN0SXRlbUYgPSBtYWtlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgbmV3VGFza1ByaW9yaXR5TGFiZWwgPSBtYWtlRWxlbWVudCgnbGFiZWwnLCAnbGFiZWwnLCAnVGFzayBQcmlvcml0eTogJyk7XG4gIGNvbnN0IG5ld1Rhc2tQcmlvcml0eSA9IG1ha2VFbGVtZW50KCdzZWxlY3QnLCAnbmV3VGFza1ByaW9yaXR5Jyk7XG4gIGFwcGVuZChuZXdUYXNrUHJpb3JpdHksIFttYWtlRWxlbWVudCgnb3B0aW9uJywgJycsICdMb3cnKSwgbWFrZUVsZW1lbnQoJ29wdGlvbicsICcnLCAnTW9kZXJhdGUnKSwgbWFrZUVsZW1lbnQoJ29wdGlvbicsICcnLCAnSGlnaCcpXSk7XG4gIGFwcGVuZChsaXN0SXRlbUYsIFtuZXdUYXNrUHJpb3JpdHlMYWJlbCwgbmV3VGFza1ByaW9yaXR5XSk7XG5cbiAgY29uc3QgbGlzdEl0ZW1HID0gbWFrZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IG5ld1Rhc2tBZGRCdXR0b24gPSBtYWtlRWxlbWVudCgnYnV0dG9uJywgJ25ld1Rhc2tBZGRCdXR0b24nLCAnQWRkIFRhc2snKTtcbiAgbmV3VGFza0FkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKG5ld1Rhc2tOYW1lLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgbmV3VGFza05hbWUuc3R5bGUuYm9yZGVyID0gJyc7XG4gICAgICBhZGRUYXNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1Rhc2tOYW1lLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgcmVkJztcbiAgICB9XG4gIH0pO1xuXG4gIGFwcGVuZChsaXN0SXRlbUcsIG5ld1Rhc2tBZGRCdXR0b24pO1xuXG4gIGFwcGVuZCh1TGlzdCwgW2xpc3RJdGVtQSwgbGlzdEl0ZW1CLCBsaXN0SXRlbUMsIGxpc3RJdGVtRCwgbGlzdEl0ZW1FLCBsaXN0SXRlbUYsIGxpc3RJdGVtR10pO1xuICBhcHBlbmQobmV3VGFza0Zvcm0sIHVMaXN0KTtcblxuICBhcHBlbmQoYWRkVGFza01vZGFsLCBbbmV3VGFza0Zvcm1dKTtcbiAgcmV0dXJuIGFkZFRhc2tNb2RhbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRWRpdFRhc2tNb2RhbCgpIHtcbiAgY29uc3QgZWRpdFRhc2tNb2RhbCA9IG1ha2VFbGVtZW50KCdkaXYnLCAnZWRpdFRhc2tNb2RhbCcpO1xuICBjb25zdCBlZGl0VGFza0Zvcm0gPSBtYWtlRWxlbWVudCgnZm9ybScsICdlZGl0VGFza0Zvcm0nKTtcblxuICBjb25zdCB1TGlzdCA9IG1ha2VFbGVtZW50KCd1bCcpO1xuXG4gIGNvbnN0IGxpc3RJdGVtQSA9IG1ha2VFbGVtZW50KCdsaScpO1xuICBjb25zdCBlZGl0VGFza0hlYWRlciA9IG1ha2VFbGVtZW50KCdkaXYnLCBbJ2hlYWRlcicsICdlZGl0VGFza0hlYWRlciddLCAnRWRpdCBUYXNrJyk7XG4gIGFwcGVuZChsaXN0SXRlbUEsIGVkaXRUYXNrSGVhZGVyKTtcblxuICBjb25zdCBsaXN0SXRlbUIgPSBtYWtlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgZWRpdFRhc2tUaXRsZUxhYmVsID0gbWFrZUVsZW1lbnQoJ2xhYmVsJywgJ2xhYmVsJywgJ1Rhc2sgVGl0bGU6ICcpO1xuICBjb25zdCBlZGl0VGFza1RpdGxlID0gbWFrZUVsZW1lbnQoJ2lucHV0JywgJ2VkaXRUYXNrVGl0bGUnKTtcbiAgZWRpdFRhc2tUaXRsZS5yZXF1aXJlZCA9IHRydWU7XG4gIGFwcGVuZChsaXN0SXRlbUIsIFtlZGl0VGFza1RpdGxlTGFiZWwsIGVkaXRUYXNrVGl0bGVdKTtcblxuICBjb25zdCBsaXN0SXRlbUMgPSBtYWtlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgZWRpdFRhc2tEZXNjcmlwdGlvbkxhYmVsID0gbWFrZUVsZW1lbnQoJ2xhYmVsJywgJ2xhYmVsJywgJ1Rhc2sgRGVzY3JpcHRpb246ICcpO1xuICBjb25zdCBlZGl0VGFza0Rlc2NyaXB0aW9uID0gbWFrZUVsZW1lbnQoJ3RleHRhcmVhJywgJ2VkaXRUYXNrRGVzY3JpcHRpb24nKTtcbiAgZWRpdFRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMycpO1xuICBhcHBlbmQobGlzdEl0ZW1DLCBbZWRpdFRhc2tEZXNjcmlwdGlvbkxhYmVsLCBlZGl0VGFza0Rlc2NyaXB0aW9uXSk7XG5cbiAgY29uc3QgbGlzdEl0ZW1EID0gbWFrZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IGVkaXREdWVEYXRlTGFiZWwgPSBtYWtlRWxlbWVudCgnbGFiZWwnLCAnbGFiZWwnLCAnRHVlIERhdGU6ICcpO1xuICBjb25zdCBlZGl0RHVlRGF0ZSA9IG1ha2VFbGVtZW50KCdpbnB1dCcsICdlZGl0RHVlRGF0ZScpO1xuICBlZGl0RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICBlZGl0RHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ21pbicsICcyMDIzLTAxLTAxJyk7XG4gIGFwcGVuZChsaXN0SXRlbUQsIFtlZGl0RHVlRGF0ZUxhYmVsLCBlZGl0RHVlRGF0ZV0pO1xuXG4gIGNvbnN0IGxpc3RJdGVtRSA9IG1ha2VFbGVtZW50KCdsaScpO1xuICBjb25zdCBlZGl0UHJpb3JpdHlMYWJlbCA9IG1ha2VFbGVtZW50KCdsYWJlbCcsICdsYWJlbCcsICdQcmlvcml0eTogJyk7XG4gIGNvbnN0IGVkaXRQcmlvcml0eSA9IG1ha2VFbGVtZW50KCdzZWxlY3QnLCAnZWRpdFByaW9yaXR5Jyk7XG4gIGFwcGVuZChlZGl0UHJpb3JpdHksIFttYWtlRWxlbWVudCgnb3B0aW9uJywgJycsICdMb3cnKSwgbWFrZUVsZW1lbnQoJ29wdGlvbicsICcnLCAnTW9kZXJhdGUnKSwgbWFrZUVsZW1lbnQoJ29wdGlvbicsICcnLCAnSGlnaCcpXSk7XG4gIGFwcGVuZChsaXN0SXRlbUUsIFtlZGl0UHJpb3JpdHlMYWJlbCwgZWRpdFByaW9yaXR5XSk7XG5cbiAgY29uc3QgbGlzdEl0ZW1GID0gbWFrZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IHNhdmVFZGl0ID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsICdzYXZlRWRpdCcsICdTYXZlIENoYW5nZXMnKTtcblxuICBzYXZlRWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGVkaXRUYXNrVGl0bGUuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICBlZGl0VGFza1RpdGxlLnN0eWxlLmJvcmRlciA9ICcnO1xuICAgICAgZWRpdFRhc2soKTtcbiAgICAgIGNsb3NlTW9kYWwoZWRpdFRhc2tGb3JtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWRpdFRhc2tUaXRsZS5zdHlsZS5ib3JkZXIgPSAnMnB4IHNvbGlkIHJlZCc7XG4gICAgfVxuICB9KTtcbiAgY29uc3QgY2FuY2VsRWRpdCA9IG1ha2VFbGVtZW50KCdidXR0b24nLCAnY2FuY2VsRWRpdCcsICdDYW5jZWwnKTtcbiAgY2FuY2VsRWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2xvc2VNb2RhbChlZGl0VGFza0Zvcm0pO1xuICB9KTtcbiAgYXBwZW5kKGxpc3RJdGVtRiwgW3NhdmVFZGl0LCBjYW5jZWxFZGl0XSk7XG5cbiAgYXBwZW5kKHVMaXN0LCBbbGlzdEl0ZW1BLCBsaXN0SXRlbUIsIGxpc3RJdGVtQywgbGlzdEl0ZW1ELCBsaXN0SXRlbUUsIGxpc3RJdGVtRl0pO1xuICBhcHBlbmQoZWRpdFRhc2tGb3JtLCB1TGlzdCk7XG4gIGFwcGVuZChlZGl0VGFza01vZGFsLCBbZWRpdFRhc2tGb3JtXSk7XG5cbiAgcmV0dXJuIGVkaXRUYXNrTW9kYWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUluZm9QYW5lbCgpIHtcbiAgY29uc3QgaW5mb1BhbmVsQ29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2RpdicsICdpbmZvUGFuZWxDb250YWluZXInKTtcbiAgY29uc3QgaW5mb1BhbmVsID0gbWFrZUVsZW1lbnQoJ2RpdicsICdpbmZvUGFuZWwnKTtcbiAgY29uc3QgaW5mb1BhbmVsSGVhZGVyID0gbWFrZUVsZW1lbnQoJ2RpdicsIFsnaGVhZGVyJywgJ2luZm9QYW5lbEhlYWRlciddKTtcbiAgY29uc3QgaW5mb1BhbmVsQm9keSA9IG1ha2VFbGVtZW50KCdkaXYnLCAnaW5mb1BhbmVsQm9keScpO1xuICBjb25zdCBpbmZvUGFuZWxGb290ZXIgPSBtYWtlRWxlbWVudCgnZGl2JywgJ2luZm9QYW5lbEZvb3RlcicpO1xuICBjb25zdCBpbmZvUGFuZWxEdWVEYXRlID0gbWFrZUVsZW1lbnQoJ2RpdicsICdpbmZvUGFuZWxEdWVEYXRlJyk7XG5cbiAgYXBwZW5kKGluZm9QYW5lbEZvb3RlciwgaW5mb1BhbmVsRHVlRGF0ZSk7XG4gIGFwcGVuZChpbmZvUGFuZWwsIFtpbmZvUGFuZWxIZWFkZXIsIGluZm9QYW5lbEJvZHksIGluZm9QYW5lbEZvb3Rlcl0pO1xuICBhcHBlbmQoaW5mb1BhbmVsQ29udGFpbmVyLCBpbmZvUGFuZWwpO1xuXG4gIHJldHVybiBpbmZvUGFuZWxDb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxMb2FkO1xuIiwiaW1wb3J0IG1ha2VFbGVtZW50IGZyb20gJy4vbWFrZUVsZW1lbnQnO1xuaW1wb3J0IGFwcGVuZCBmcm9tICcuL2FwcGVuZCc7XG5pbXBvcnQgZ2VuZXJhdGVJZCBmcm9tICcuL2lkRnVuY3Rpb25zJztcbmltcG9ydCB7IGNoYW5nZUFjdGl2ZUxpc3QgfSBmcm9tICcuL2Rpc3BsYXlDb250cm9sbGVyJztcbmltcG9ydCBnZXRBc3NldCBmcm9tICcuL2Fzc2V0cyc7XG5cbmxldCBsaXN0cyA9IFtdOyAvLyBsaXN0cyBhbmQgdGhlaXIgc2lkZWJhciBjb250YWluZXJzXG5sZXQgYWN0aXZlTGlzdCA9IG51bGw7XG5sZXQgYWRkaW5nTGlzdCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBjcmVhdGVMaXN0KGxpc3ROYW1lLCBjb250YWluZXIpIHsgLy8gQ3JlYXRlIExpc3QgT2JqZWN0XG4gIGNvbnN0IHRhc2tzID0gW107XG4gIGNvbnN0IGlkID0gZ2VuZXJhdGVJZChsaXN0cyk7XG5cbiAgY29uc3QgYWRkVGFza1RvTGlzdCA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgIGlmIChhY3RpdmVMaXN0LmlkID09PSBpZCkgeyAvLyBJZiBhZGRpbmcgdGFzayB0byBhY3RpdmUgbGlzdCwgdXBkYXRlIHRoZSBkaXNwbGF5XG4gICAgICBjaGFuZ2VBY3RpdmVMaXN0KGFjdGl2ZUxpc3QpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW1vdmVUYXNrRnJvbUxpc3QgPSBmdW5jdGlvbiAodGFza0lkKSB7XG4gICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSB0YXNrSWQpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUFjdGl2ZSA9ICgpID0+IHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBsaXN0TmFtZSwgdGFza3MsIGlkLCBhZGRUYXNrVG9MaXN0LCByZW1vdmVUYXNrRnJvbUxpc3QsIGNvbnRhaW5lciwgdG9nZ2xlQWN0aXZlLFxuICB9O1xufVxuXG5mdW5jdGlvbiBtb2RpZnlMaXN0TmFtZShsaXN0KSB7XG4gIGNvbnN0IGxpc3ROYW1lID0gbGlzdC5jaGlsZHJlblswXS5jaGlsZHJlblswXS52YWx1ZTtcbiAgbGlzdC5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IGxpc3ROYW1lO1xuICBsaXN0LmNoaWxkcmVuWzFdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBsaXN0LmNoaWxkcmVuWzJdLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIGxpc3QuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICBjb25zdCBpbmRleCA9IGxpc3RzLm1hcCgoZWxlbSkgPT4gZWxlbS5pZCkuaW5kZXhPZigrbGlzdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XG4gIGxpc3RzW2luZGV4XS5saXN0TmFtZSA9IGxpc3ROYW1lO1xuICBpZiAobGlzdCA9PT0gYWN0aXZlTGlzdC5jb250YWluZXIpIHtcbiAgICBjaGFuZ2VBY3RpdmVMaXN0KGFjdGl2ZUxpc3QpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUxpc3QobGlzdCwgZXZlbnQpIHtcbiAgbGlzdHMgPSBsaXN0cy5maWx0ZXIoKGVsZW0pID0+IGVsZW0uY29udGFpbmVyICE9PSBsaXN0KTtcblxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgbGlzdC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGxpc3QpO1xuICB0b2dnbGVBZGRUYXNrQnV0dG9uKCk7XG5cbiAgaWYgKGxpc3QgPT09IGFjdGl2ZUxpc3QuY29udGFpbmVyICYmIGxpc3RzLmxlbmd0aCA+IDApIHtcbiAgICBhY3RpdmVMaXN0ID0gbGlzdHNbMF07XG4gICAgYWN0aXZlTGlzdC50b2dnbGVBY3RpdmUoKTtcbiAgICBjaGFuZ2VBY3RpdmVMaXN0KGFjdGl2ZUxpc3QsIHRydWUpO1xuICB9IGVsc2UgaWYgKGxpc3RzLmxlbmd0aCA9PT0gMSkge1xuICAgIGFjdGl2ZUxpc3QgPSBudWxsO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Q29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufVxuXG5jb25zdCBhZGRMaXN0ID0gKGxpc3ROYW1lLCBjb250YWluZXIpID0+IHsgLy8gYWRkcyBhIG5ldyBsaXN0IHdpdGggZWRpdCArIGRlbGV0ZSBidXR0b25zIHRvIHRoZSBzaWRlYmFyXG4gIGNvbnN0IGxpc3RJdGVtID0gbWFrZUVsZW1lbnQoJ2RpdicsIG51bGwsIGxpc3ROYW1lKTtcbiAgY29uc3QgdGFza0NvdW50ID0gbWFrZUVsZW1lbnQoJ2RpdicsICd0YXNrQ291bnQnKTtcblxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGNvbnRhaW5lciAhPT0gYWN0aXZlTGlzdC5jb250YWluZXIpIHtcbiAgICAgIGFjdGl2ZUxpc3QudG9nZ2xlQWN0aXZlKCk7XG4gICAgICBhY3RpdmVMaXN0ID0gbGlzdHNbbGlzdHMubWFwKChlbGVtKSA9PiBlbGVtLmNvbnRhaW5lcikuaW5kZXhPZihjb250YWluZXIpXTtcbiAgICAgIGFjdGl2ZUxpc3QudG9nZ2xlQWN0aXZlKCk7XG4gICAgICBjaGFuZ2VBY3RpdmVMaXN0KGFjdGl2ZUxpc3QsIHRydWUpO1xuICAgIH1cbiAgfSk7XG4gIGxpc3RzLnB1c2goY3JlYXRlTGlzdChsaXN0TmFtZSwgY29udGFpbmVyKSk7Ly8gQ3JlYXRlcyBhIG5ldyBsaXN0IG9iamVjdCB3aXRoIHJlZmVyZW5jZSB0byBpdHMgY29udGFpbmVyIGluIHRoZSBzaWRlYmFyXG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBsaXN0c1tsaXN0cy5sZW5ndGggLSAxXS5pZCk7XG5cbiAgaWYgKGxpc3RzLmxlbmd0aCA+IDEpIHtcbiAgICBhY3RpdmVMaXN0LnRvZ2dsZUFjdGl2ZSgpOyAvLyByZW1vdmVzICdhY3RpdmUnIGNsYXNzIGZyb20gcHJldmlvdXNseSBhY3RpdmUgbGlzdFxuICB9XG5cbiAgYWN0aXZlTGlzdCA9IGxpc3RzW2xpc3RzLmxlbmd0aCAtIDFdOy8vIGNoYW5nZXMgYWN0aXZlbGlzdCB0byB0aGUgbmV3IGxpc3RcbiAgYWN0aXZlTGlzdC50b2dnbGVBY3RpdmUoKTtcbiAgaWYgKGxpc3RzLmxlbmd0aCA+IDApIHsgLy8gZGlzcGxheXMgdGFza2xpc3QgaGVhZGVyIGlmIGF0IGxlYXN0IDEgbGlzdCBleGlzdHNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudEhlYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG4gIGNoYW5nZUFjdGl2ZUxpc3QoYWN0aXZlTGlzdCwgdHJ1ZSk7XG5cbiAgY29uc3QgYnV0dG9uT3ZlcmxheSA9IG1ha2VFbGVtZW50KCdkaXYnLCAnYnV0dG9uT3ZlcmxheScpO1xuICBjb25zdCBlZGl0QnV0dG9uID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsICdlZGl0QnV0dG9uJyk7XG4gIGFwcGVuZChlZGl0QnV0dG9uLCBnZXRBc3NldCgnZWRpdCcpKTtcblxuICBjb25zdCBkZWxldGVCdXR0b24gPSBtYWtlRWxlbWVudCgnYnV0dG9uJywgJ2RlbGV0ZUJ1dHRvbicpO1xuICBhcHBlbmQoZGVsZXRlQnV0dG9uLCBnZXRBc3NldCgnZGVsZXRlJykpO1xuXG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHsgLy8gc2hvd3MgdGV4dCBmaWVsZCB0byBlZGl0IGxpc3QgbmFtZSwgaGlkZXMgbGFiZWwgYW5kIHNhdmUvZGVsZXRlIGJ1dHRvbnNcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBidXR0b25PdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbGlzdEl0ZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0YXNrQ291bnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjb250YWluZXIuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBjb250YWluZXIuZmlyc3RDaGlsZC5maXJzdENoaWxkLmZvY3VzKCk7XG4gIH0pO1xuXG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGRlbGV0ZUxpc3QoY29udGFpbmVyLCBldmVudCk7XG4gICAgaWYgKGxpc3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRIZWFkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfSk7XG5cbiAgYXBwZW5kKGJ1dHRvbk92ZXJsYXksIFtlZGl0QnV0dG9uLCBkZWxldGVCdXR0b25dKTtcbiAgYXBwZW5kKGNvbnRhaW5lciwgW2xpc3RJdGVtLCB0YXNrQ291bnQsIGJ1dHRvbk92ZXJsYXldKTtcbiAgYWN0aXZlTGlzdCA9IGxpc3RzW2xpc3RzLmxlbmd0aCAtIDFdO1xuICB0b2dnbGVBZGRUYXNrQnV0dG9uKCk7XG59O1xuXG5mdW5jdGlvbiBuZXdMaXN0SW5wdXQoKSB7IC8vIENyZWF0ZXMgYSB0ZXh0IGZpZWxkIHRvIGNyZWF0ZSBhIG5ldyBsaXN0XG4gIGlmICghYWRkaW5nTGlzdCkge1xuICAgIGFkZGluZ0xpc3QgPSB0cnVlO1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIGNvbnN0IHNpZGViYXJJdGVtQ29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2xpJywgJ3NpZGViYXJJdGVtQ29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBsaXN0TmFtZUNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCAnbGlzdE5hbWVDb250YWluZXInKTtcbiAgICBjb25zdCBsaXN0TmFtZSA9IG1ha2VFbGVtZW50KCdpbnB1dCcsICdsaXN0TmFtZUZpZWxkJyk7XG4gICAgbGlzdE5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcblxuICAgIGNvbnN0IHNhdmVMaXN0TmFtZSA9IG1ha2VFbGVtZW50KCdidXR0b24nLCAnc2F2ZUJ1dHRvbicpO1xuICAgIGFwcGVuZChzYXZlTGlzdE5hbWUsIGdldEFzc2V0KCdzYXZlJykpO1xuICAgIGFwcGVuZChsaXN0TmFtZUNvbnRhaW5lciwgW2xpc3ROYW1lLCBzYXZlTGlzdE5hbWVdKTtcbiAgICBhcHBlbmQoc2lkZWJhckl0ZW1Db250YWluZXIsIGxpc3ROYW1lQ29udGFpbmVyKTtcblxuICAgIHNpZGViYXIuaW5zZXJ0QmVmb3JlKHNpZGViYXJJdGVtQ29udGFpbmVyLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkTGlzdEJ1dHRvbicpKTtcbiAgICBzYXZlTGlzdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBhZGQoKSB7XG4gICAgICBhZGRpbmdMaXN0ID0gZmFsc2U7IC8vIHRvIHByZXZlbnQgZHVwbGljYXRlIG5ldyBsaXN0IGlucHV0IGZvcm1zXG4gICAgICBsZXQgbE5hbWUgPSAnTmV3IExpc3QnO1xuICAgICAgaWYgKGxpc3ROYW1lLnZhbHVlKSB7XG4gICAgICAgIGxOYW1lID0gbGlzdE5hbWUudmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0TmFtZS52YWx1ZSA9IGxOYW1lO1xuICAgICAgfVxuXG4gICAgICBhZGRMaXN0KGxOYW1lLCBzaWRlYmFySXRlbUNvbnRhaW5lcik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhsaXN0cyk7XG4gICAgICBsaXN0TmFtZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgc2F2ZUxpc3ROYW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkKTtcbiAgICAgIHNhdmVMaXN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbW9kaWZ5TGlzdE5hbWUoc2lkZWJhckl0ZW1Db250YWluZXIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgbGlzdE5hbWUuZm9jdXMoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVBZGRUYXNrQnV0dG9uKCkge1xuICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2tCdXR0b24nKTtcbiAgaWYgKGxpc3RzLmxlbmd0aCkge1xuICAgIGFkZFRhc2suc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0gZWxzZSB7XG4gICAgYWRkVGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG59XG5cbmV4cG9ydCB7IG5ld0xpc3RJbnB1dCwgbGlzdHMsIGFjdGl2ZUxpc3QgfTtcbiIsImZ1bmN0aW9uIG1ha2VFbGVtZW50KHR5cGUsIGNsYXNzTmFtZSwgY29udGVudCkge1xuICBjb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIGlmICh0eXBlb2YgKGNsYXNzTmFtZSkgPT09ICdvYmplY3QnKSB7XG4gICAgICBjbGFzc05hbWUuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKGVsKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7IGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpOyB9XG4gIH1cbiAgaWYgKGNvbnRlbnQpIHtcbiAgICBlbGVtLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgfVxuICByZXR1cm4gZWxlbTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZUVsZW1lbnQ7XG4iLCJpbXBvcnQgbWFrZUVsZW1lbnQgZnJvbSAnLi9tYWtlRWxlbWVudCc7XG5pbXBvcnQgYXBwZW5kIGZyb20gJy4vYXBwZW5kJztcbmltcG9ydCB7IGFjdGl2ZUxpc3QsIGxpc3RzIH0gZnJvbSAnLi9saXN0RnVuY3Rpb25zJztcbmltcG9ydCBnZW5lcmF0ZUlkIGZyb20gJy4vaWRGdW5jdGlvbnMnO1xuaW1wb3J0IHtcbiAgY2xvc2VNb2RhbCwgZGlzcGxheSwgdXBkYXRlSW5mb1BhbmVsLCB0b2dnbGVQYW5lbCwgdXBkYXRlVGFza0NvdW50LFxufSBmcm9tICcuL2Rpc3BsYXlDb250cm9sbGVyJztcbmltcG9ydCBnZXRBc3NldCBmcm9tICcuL2Fzc2V0cyc7XG5cbmxldCBhY3RpdmVUYXNrID0gbnVsbDtcblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCwgbGlzdCwgdGFza0NvbnRhaW5lcikge1xuICBjb25zdCBpZCA9IGdlbmVyYXRlSWQobGlzdCk7XG5cbiAgcmV0dXJuIHtcbiAgICB0YXNrLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCwgaWQsIHRhc2tDb250YWluZXIsXG4gIH07XG59XG5cbmNvbnN0IHByaW9yaXR5ID0ge1xuICBMb3c6ICdsb3cnLFxuICBNb2RlcmF0ZTogJ21vZGVyYXRlJyxcbiAgSGlnaDogJ2hpZ2gnLFxufTtcblxuZnVuY3Rpb24gYWRkVGFzaygpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUYXNrRm9ybScpO1xuICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUYXNrTmFtZScpLnZhbHVlO1xuICBjb25zdCBzZWxlY3RlZExpc3RJbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0U2VsZWN0RHJvcGRvd24nKS5zZWxlY3RlZEluZGV4O1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VGFza0Rlc2NyaXB0aW9uJykudmFsdWU7XG4gIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Rhc2tEdWVEYXRlJykudmFsdWU7XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUYXNrUHJpb3JpdHknKS52YWx1ZTtcblxuICBjb25zdCB0YXNrQ29udGFpbmVyID0gbWFrZUVsZW1lbnQoJ2xpJywgJ3Rhc2tDb250YWluZXInKTtcbiAgY29uc3QgY2hlY2tib3ggPSBtYWtlRWxlbWVudCgnaW5wdXQnKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG5cbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHByaW9yaXR5W3Rhc2tQcmlvcml0eV0pOy8vIGZvciBzdHlsaW5nIGEgdGFzayBiYXNlZCBvbiBwcmlvcml0eVxuXG4gIHRhc2tDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2hhbmdlQWN0aXZlVGFzayh0YXNrQ29udGFpbmVyKTtcbiAgfSk7XG5cbiAgY29uc3QgbmFtZSA9IG1ha2VFbGVtZW50KCdkaXYnLCAndGFza05hbWUnLCB0YXNrTmFtZSk7XG4gIGNvbnN0IGR1ZSA9IG1ha2VFbGVtZW50KCdkaXYnLCAndGFza0R1ZURhdGUnKTtcbiAgY29uc3QgdGFza0J1dHRvbkNvbnRhaW5lciA9IG1ha2VFbGVtZW50KCdkaXYnLCAndGFza0J1dHRvbkNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGVkaXRUYXNrQnV0dG9uID0gbWFrZUVsZW1lbnQoJ2J1dHRvbicsICdlZGl0VGFza0J1dHRvbicpO1xuICBhcHBlbmQoZWRpdFRhc2tCdXR0b24sIGdldEFzc2V0KCdlZGl0JykpO1xuXG4gIGNvbnN0IGRlbGV0ZVRhc2tCdXR0b24gPSBtYWtlRWxlbWVudCgnYnV0dG9uJywgJ2RlbGV0ZVRhc2tCdXR0b24nKTtcbiAgYXBwZW5kKGRlbGV0ZVRhc2tCdXR0b24sIGdldEFzc2V0KCdkZWxldGUnKSk7XG4gIGFwcGVuZCh0YXNrQnV0dG9uQ29udGFpbmVyLCBbZWRpdFRhc2tCdXR0b24sIGRlbGV0ZVRhc2tCdXR0b25dKTtcblxuICBpZiAodGFza0R1ZURhdGUpIHsgLy8gRGlzcGxheXMgcmVtYWluaW5nL292ZXJkdWUgdGltZSBpZiBkYXRlIGlzIHNldFxuICAgIGRhdGVTdHJpbmcoZHVlLCB0YXNrRHVlRGF0ZSk7XG4gIH1cblxuICBhcHBlbmQodGFza0NvbnRhaW5lciwgW2NoZWNrYm94LCBuYW1lLCBkdWUsIHRhc2tCdXR0b25Db250YWluZXJdKTtcblxuICBjb25zdCBzZWxlY3RlZExpc3QgPSBsaXN0c1tzZWxlY3RlZExpc3RJbmRleF07XG4gIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWVEYXRlLCB0YXNrUHJpb3JpdHksIGZhbHNlLCBzZWxlY3RlZExpc3QudGFza3MsIHRhc2tDb250YWluZXIpO1xuICBzZWxlY3RlZExpc3QuYWRkVGFza1RvTGlzdCh0YXNrKTtcblxuICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgIHRhc2suY29tcGxldGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKTtcbiAgICAgIHRhc2suY29tcGxldGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdXBkYXRlVGFza0NvdW50KHNlbGVjdGVkTGlzdCk7XG4gIH0pO1xuXG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gIGVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgYWN0aXZlVGFzayA9IHRhc2s7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRUYXNrVGl0bGUnKS52YWx1ZSA9IGFjdGl2ZVRhc2sudGFzaztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFRhc2tEZXNjcmlwdGlvbicpLnZhbHVlID0gYWN0aXZlVGFzay5kZXNjcmlwdGlvbjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdER1ZURhdGUnKS52YWx1ZSA9IGFjdGl2ZVRhc2suZHVlRGF0ZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFByaW9yaXR5JykudmFsdWUgPSBhY3RpdmVUYXNrLnByaW9yaXR5O1xuXG4gICAgZGlzcGxheSgnZWRpdCcsIGxpc3RzLCBhY3RpdmVMaXN0KTtcbiAgfSk7XG5cbiAgZGVsZXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGRlbGV0ZVRhc2sodGFza0NvbnRhaW5lcik7XG4gIH0pO1xuICB1cGRhdGVUYXNrQ291bnQoc2VsZWN0ZWRMaXN0KTtcbiAgY2xvc2VNb2RhbChmb3JtKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayh0YXNrQ29udGFpbmVyKSB7XG4gIGNvbnN0IHNlbGVjdGVkID0gYWN0aXZlTGlzdC50YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2sudGFza0NvbnRhaW5lciA9PT0gdGFza0NvbnRhaW5lcilbMF07XG4gIGFjdGl2ZUxpc3QucmVtb3ZlVGFza0Zyb21MaXN0KHNlbGVjdGVkLmlkKTtcbiAgdGFza0NvbnRhaW5lci5yZW1vdmUoKTtcblxuICBpZiAoc2VsZWN0ZWQgPT09IGFjdGl2ZVRhc2spIHtcbiAgICBhY3RpdmVUYXNrID0gbnVsbDtcbiAgICB0b2dnbGVQYW5lbCgpO1xuICB9XG4gIHVwZGF0ZVRhc2tDb3VudChhY3RpdmVMaXN0KTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlQWN0aXZlVGFzayh0YXNrQ29udGFpbmVyKSB7XG4gIGNvbnN0IHQgPSBhY3RpdmVMaXN0LnRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay50YXNrQ29udGFpbmVyID09PSB0YXNrQ29udGFpbmVyKVswXTtcbiAgYWN0aXZlVGFzayA9IHQ7XG4gIHRvZ2dsZVBhbmVsKGFjdGl2ZVRhc2spO1xuICB1cGRhdGVJbmZvUGFuZWwodCk7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm9QYW5lbEhlYWRlcicpO1xuICBjb25zdCBjbGFzc2VzID0gaGVhZGVyLmNsYXNzTmFtZS5zcGxpdCgnICcpO1xuXG4gIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXNbMl0pO1xuXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKHByaW9yaXR5W3QucHJpb3JpdHldKTtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2soKSB7XG4gIGNvbnN0IHByaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFByaW9yaXR5JykudmFsdWU7XG4gIGlmIChwcmlvICE9PSBhY3RpdmVUYXNrLnByaW9yaXR5KSB7XG4gICAgYWN0aXZlVGFzay50YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUocHJpb3JpdHlbYWN0aXZlVGFzay5wcmlvcml0eV0pO1xuICAgIGFjdGl2ZVRhc2sucHJpb3JpdHkgPSBwcmlvO1xuICAgIGFjdGl2ZVRhc2sudGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHByaW9yaXR5W2FjdGl2ZVRhc2sucHJpb3JpdHldKTtcbiAgfVxuXG4gIGFjdGl2ZVRhc2sudGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0VGFza1RpdGxlJykudmFsdWU7XG4gIGFjdGl2ZVRhc2suZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFRhc2tEZXNjcmlwdGlvbicpLnZhbHVlO1xuICBhY3RpdmVUYXNrLmR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdER1ZURhdGUnKS52YWx1ZTtcblxuICBjb25zdCB0YXNrRWxlbWVudCA9IGFjdGl2ZVRhc2sudGFza0NvbnRhaW5lci5jaGlsZHJlbjtcbiAgdGFza0VsZW1lbnRbMV0udGV4dENvbnRlbnQgPSBhY3RpdmVUYXNrLnRhc2s7XG5cbiAgaWYgKGFjdGl2ZVRhc2suZHVlRGF0ZSkge1xuICAgIGRhdGVTdHJpbmcodGFza0VsZW1lbnRbMl0sIGFjdGl2ZVRhc2suZHVlRGF0ZSk7XG4gIH1cbiAgdXBkYXRlSW5mb1BhbmVsKGFjdGl2ZVRhc2spO1xuICAvLyBjb25zb2xlLmxvZyhsaXN0cyk7XG59XG5cbmZ1bmN0aW9uIGRhdGVTdHJpbmcoZHVlLCB0YXNrRHVlRGF0ZSkge1xuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHRlbXBEdWUgPSBuZXcgRGF0ZShgJHt0YXNrRHVlRGF0ZX0gMDA6MDA6MDBgKTtcbiAgbGV0IGRheXNGcm9tRHVlID0gKHRlbXBEdWUgLSBjdXJyZW50RGF0ZSkgLyAoMTAwMCAqIDM2MDAgKiAyNCk7XG4gIGlmIChkYXlzRnJvbUR1ZSA+IC0xICYmIGRheXNGcm9tRHVlIDwgMSkge1xuICAgIGRheXNGcm9tRHVlID0gTWF0aC5mbG9vcigodGVtcER1ZSAtIGN1cnJlbnREYXRlKSAvICgxMDAwICogMzYwMCkpO1xuICAgIGR1ZS50ZXh0Q29udGVudCA9IChkYXlzRnJvbUR1ZSA+PSAwKSA/IGBEdWUgaW4gJHtkYXlzRnJvbUR1ZX0gaG91cihzKWAgOiBgRHVlICR7ZGF5c0Zyb21EdWUgKiAtMX0gaG91cihzKSBhZ29gO1xuICB9IGVsc2Uge1xuICAgIGR1ZS50ZXh0Q29udGVudCA9IChkYXlzRnJvbUR1ZSA+PSAwKSA/IGBEdWUgaW4gJHtNYXRoLmZsb29yKGRheXNGcm9tRHVlKX0gZGF5KHMpYCA6IGBEdWUgJHtNYXRoLmZsb29yKGRheXNGcm9tRHVlICogLTEpfSBkYXkocykgYWdvYDtcbiAgfVxufVxuXG5leHBvcnQgeyBhZGRUYXNrLCBlZGl0VGFzayB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGluaXRpYWxMb2FkIGZyb20gJy4vZnVuY3Rpb25zL2luaXRpYWxpemUnO1xuXG5pbml0aWFsTG9hZCgpO1xuLy8gdG9kb3Mgc2hvdWxkIGJlIGR5bmFtaWNhbGx5IGNyZWF0ZWQgb2JqZWN0c1xuXG4vLyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZWRhdGUscHJpb3JpdHkgbWluaW11bVxuXG4vLyBwcm9qZWN0cyAvIHNlcGFyYXRlIGxpc3RzIHRvZG9zXG5cbi8vIG1vZHVsZXNcbi8vIGxpc3QgbWFuYWdlbWVudFxuXG4vLyBlZGl0IHRhc2sgbW9kdWxlLCBnZXRzIHRhc2sgbW9kdWxlXG5cbi8vIGxpc3QgY29udHJvbGxlciwgZ2V0cyB0b2RvbGlzdCwgY2FsbHMgdXBkYXRlIGRpc3BsYXlcblxuLy8gZWRpdC9jcmVhdGUgdGFzayBzaG91bGQgYmUgYSBjb21wb3NpdGlvbiBvZiBzb21lIHNvcnRcblxuLy8gcHJpb3JpdHkgc29ydCBzaG91bGQgYmUgYSB0aGluZ1xuXG4vLyBzd2l0Y2ggY29udHJvbGxlclxuXG4vLyBtYXliZSBhIGJ1dHRvbiBoYW5kbGVyP1xuXG4vLyBtb2RhbCBjb250cm9sbGVyLCBhYnN0cmFjdHMgbW9kYWwgZnVuY3Rpb25zXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=