/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n:root {\n  font-size: 18px;\n  margin: 0;\n  font-family: kanit, sans-serif\n}\n* {\n  outline: 2px red solid\n}\nbody {\n  margin: 0\n}\n.container {\n  display: grid;\n  grid-template: auto 1fr auto / auto 1fr;\n  background-color: hsl(250, 100%, 8%);\n  height: 100vh;\n  color: white\n}\n.header {\n  grid-column: 1 / -1;\n  padding: 1.5rem;\n  font-size: 2rem;\n}\n.leftSidebar {\n  grid-column: 1 / 2 ;\n  padding: 2rem;\n  display: grid;\n  grid-template-rows: 1fr 4fr\n  \n}\n.viewAll {\n  grid-row: 1 / 2;\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n}\n.viewAll:hover{\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.projects {\n  grid-row: 2 / -1;\n  padding-top: 1.5rem;\n  display: grid;\n  grid-template-rows: auto 1fr;\n}\n.addNewProject {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n  \n}\n.addNewProject:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.addNewTodo {\n    background-color: transparent;\n    color: white;\n    border-radius: 10px;\n    height: 4rem;\n    transition: 0.5s;\n    cursor: pointer;\n    border: hsl(4, 53%, 90%) solid 5px;\n    font-size: 1.5rem;\n    font-family: inherit;\n    margin: 10px;\n    \n  }\n.addNewTodo:hover {\n    background-color: hsl(4, 53%, 90%);\n    color: black\n}\n.projectListContainer { \n  display: flex;\n\n}\n.projectButton {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 2rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 3px;\n  font-size: 0.8rem;\n  font-family: inherit;\n  margin: 10px;\n}\n.projectButton:hover {\n  background-color: hsl(4, 53%, 90%);\n    color: black\n}\n\n.main {\n  grid-column: 2 / -1;\n  display: flex;\n  flex-direction: column;\n}\n.todoHead {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 2rem;\n}\n.completedTodoContainer {\n  justify-self: flex-end;\n  margin-top: auto;\n}\n.completedTodoBtn {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n}\n.completedTodoBtn:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.footer {\n  grid-column: 1 / -1;\n  padding: 1rem;\n  text-align: center;\n}\n.todo {\n    display: flex;\n    justify-content: space-around;\n}\n.todo.completed {\n  text-decoration: line-through;\n}\n.overlayForm {\n  position:absolute;\n  top:50vh;\n  left:0px;\n  width:100vw;\n  height:0vh;\n  background:rgba(0,0,0,0.8);\n  z-index: -1;\n  opacity: 0;\n  padding: 80px 50px 0px 10px;\n  overflow:scroll;\n  box-sizing: border-box;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 500ms;\n}\n.overlayForm .closeForm {\n  position:absolute;\n  top: 20px;\n  right: 40px;\n  color: #fff;\n  font-size: 5rem;\n  font-weight: 600;\n  cursor:pointer;\n}\n\nbody.activeForm .overlayForm{\n  z-index: 2;\n  opacity: 1;\n  top: 0px;\n  height: 100vh;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 0ms;\n}\n.overlayForm h1 {\n  font-size: 3rem;\n  color: #fff;\n}\n\n.overlayForm p {\n  font-size: 2em;\n  color: #fff;\n}\n\n.overlayForm label {\n  display: block;\n  font-size: 2em;\n  color: #eb5e28;\n  margin-bottom: 20px;\n  font-weight: 500;\n}\n.overlayForm input {\n  width: 100%;\n  padding: 17px;\n  font-size: 25px;\n  border: 4px solid #fff;\n  background: transparent;\n  outline: none;\n  border-radius: 10px;\n  margin-bottom: 50px;\n  color: #fff;\n  font-weight: 500;\n}\nselect {\n  width: 100%;\n  font-size: inherit;\n}\nh2 {\n  font-family: inherit;\n  color: #eb5e28;\n}\n.currentProjects {\n  font-family: inherit;\n  color: #ffffff;\n}\n#submit {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n  \n}\n#submit:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AAEA;EACE,eAAe;EACf,SAAS;EACT;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,aAAa;EACb;AACF;AACA;EACE,mBAAmB;EACnB,eAAe;EACf,eAAe;AACjB;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb;;AAEF;AACA;EACE,eAAe;EACf,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,kCAAkC;EAClC;AACF;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,4BAA4B;AAC9B;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;;AAEd;AACA;EACE,kCAAkC;EAClC;AACF;AACA;IACI,6BAA6B;IAC7B,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,kCAAkC;IAClC,iBAAiB;IACjB,oBAAoB;IACpB,YAAY;;EAEd;AACF;IACI,kCAAkC;IAClC;AACJ;AACA;EACE,aAAa;;AAEf;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;AACd;AACA;EACE,kCAAkC;IAChC;AACJ;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;EACE,sBAAsB;EACtB,gBAAgB;AAClB;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;AACd;AACA;EACE,kCAAkC;EAClC;AACF;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,kBAAkB;AACpB;AACA;IACI,aAAa;IACb,6BAA6B;AACjC;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,iBAAiB;EACjB,QAAQ;EACR,QAAQ;EACR,WAAW;EACX,UAAU;EACV,0BAA0B;EAC1B,WAAW;EACX,UAAU;EACV,2BAA2B;EAC3B,eAAe;EACf,sBAAsB;EACtB;;0CAEwC;AAC1C;AACA;EACE,iBAAiB;EACjB,SAAS;EACT,WAAW;EACX,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,UAAU;EACV,QAAQ;EACR,aAAa;EACb;;wCAEsC;AACxC;AACA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,cAAc;EACd,cAAc;EACd,cAAc;EACd,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,oBAAoB;EACpB,cAAc;AAChB;AACA;EACE,oBAAoB;EACpB,cAAc;AAChB;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;;AAEd;AACA;EACE,kCAAkC;EAClC;AACF","sourcesContent":["\n@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n:root {\n  font-size: 18px;\n  margin: 0;\n  font-family: kanit, sans-serif\n}\n* {\n  outline: 2px red solid\n}\nbody {\n  margin: 0\n}\n.container {\n  display: grid;\n  grid-template: auto 1fr auto / auto 1fr;\n  background-color: hsl(250, 100%, 8%);\n  height: 100vh;\n  color: white\n}\n.header {\n  grid-column: 1 / -1;\n  padding: 1.5rem;\n  font-size: 2rem;\n}\n.leftSidebar {\n  grid-column: 1 / 2 ;\n  padding: 2rem;\n  display: grid;\n  grid-template-rows: 1fr 4fr\n  \n}\n.viewAll {\n  grid-row: 1 / 2;\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n}\n.viewAll:hover{\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.projects {\n  grid-row: 2 / -1;\n  padding-top: 1.5rem;\n  display: grid;\n  grid-template-rows: auto 1fr;\n}\n.addNewProject {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n  \n}\n.addNewProject:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.addNewTodo {\n    background-color: transparent;\n    color: white;\n    border-radius: 10px;\n    height: 4rem;\n    transition: 0.5s;\n    cursor: pointer;\n    border: hsl(4, 53%, 90%) solid 5px;\n    font-size: 1.5rem;\n    font-family: inherit;\n    margin: 10px;\n    \n  }\n.addNewTodo:hover {\n    background-color: hsl(4, 53%, 90%);\n    color: black\n}\n.projectListContainer { \n  display: flex;\n\n}\n.projectButton {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 2rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 3px;\n  font-size: 0.8rem;\n  font-family: inherit;\n  margin: 10px;\n}\n.projectButton:hover {\n  background-color: hsl(4, 53%, 90%);\n    color: black\n}\n\n.main {\n  grid-column: 2 / -1;\n  display: flex;\n  flex-direction: column;\n}\n.todoHead {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 2rem;\n}\n.completedTodoContainer {\n  justify-self: flex-end;\n  margin-top: auto;\n}\n.completedTodoBtn {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n}\n.completedTodoBtn:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.footer {\n  grid-column: 1 / -1;\n  padding: 1rem;\n  text-align: center;\n}\n.todo {\n    display: flex;\n    justify-content: space-around;\n}\n.todo.completed {\n  text-decoration: line-through;\n}\n.overlayForm {\n  position:absolute;\n  top:50vh;\n  left:0px;\n  width:100vw;\n  height:0vh;\n  background:rgba(0,0,0,0.8);\n  z-index: -1;\n  opacity: 0;\n  padding: 80px 50px 0px 10px;\n  overflow:scroll;\n  box-sizing: border-box;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 500ms;\n}\n.overlayForm .closeForm {\n  position:absolute;\n  top: 20px;\n  right: 40px;\n  color: #fff;\n  font-size: 5rem;\n  font-weight: 600;\n  cursor:pointer;\n}\n\nbody.activeForm .overlayForm{\n  z-index: 2;\n  opacity: 1;\n  top: 0px;\n  height: 100vh;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 0ms;\n}\n.overlayForm h1 {\n  font-size: 3rem;\n  color: #fff;\n}\n\n.overlayForm p {\n  font-size: 2em;\n  color: #fff;\n}\n\n.overlayForm label {\n  display: block;\n  font-size: 2em;\n  color: #eb5e28;\n  margin-bottom: 20px;\n  font-weight: 500;\n}\n.overlayForm input {\n  width: 100%;\n  padding: 17px;\n  font-size: 25px;\n  border: 4px solid #fff;\n  background: transparent;\n  outline: none;\n  border-radius: 10px;\n  margin-bottom: 50px;\n  color: #fff;\n  font-weight: 500;\n}\nselect {\n  width: 100%;\n  font-size: inherit;\n}\nh2 {\n  font-family: inherit;\n  color: #eb5e28;\n}\n.currentProjects {\n  font-family: inherit;\n  color: #ffffff;\n}\n#submit {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n  \n}\n#submit:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProjectForm": () => (/* binding */ newProjectForm),
/* harmony export */   "removeForm": () => (/* binding */ removeForm),
/* harmony export */   "todoForm": () => (/* binding */ todoForm),
/* harmony export */   "toggleForm": () => (/* binding */ toggleForm)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainContent */ "./src/mainContent.js");
/* harmony import */ var _todoObjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoObjects */ "./src/todoObjects.js");
// // DOM manipulation for input new todo form and new project form






function todoForm (){
    // container elements for form
    const form = document.createElement("form")
    form.classList.toggle("form")
    const overlayForm = document.createElement("div")
    overlayForm.classList.toggle("overlayForm")
    form.appendChild(overlayForm)
    // close form 'x' button
    const closeForm = document.createElement("div")
    closeForm.classList.toggle("closeForm")
    closeForm.addEventListener("click", () => {
        toggleForm();
        removeForm();
    })
    closeForm.innerHTML = "&times"
    overlayForm.appendChild(closeForm)
    // form header
    const formHeader = document.createElement("h1")
    formHeader.textContent = "Add a new ToDo"
    overlayForm.appendChild(formHeader);

    // form element 'Name' container 
    const formElementName = document.createElement("div")
    formElementName.classList.toggle("formElement")
    overlayForm.appendChild(formElementName)
    // 'Name' input fields - textr
    const formNameLabel = document.createElement("label")
    formNameLabel.setAttribute("for", "Name")
    formNameLabel.textContent = "Name of ToDo";
    const formNameInput = document.createElement("input")
    formNameInput.setAttribute("type", "text")
    formNameInput.setAttribute("id", "formName")
    formElementName.append(formNameLabel, formNameInput);
    
    // form 'Project' container
    const formElementProject = document.createElement("div")
    formElementProject.classList.toggle("formElement")
    overlayForm.appendChild(formElementProject)
    // 'Project' input fields - Dropdown
    const formProjectLabel = document.createElement("label")
    formProjectLabel.setAttribute("for", "projectInput")
    formProjectLabel.textContent = "Select project:";
    const formProjectInput = document.createElement("select")
    formProjectInput.setAttribute("name", "projects")
    formProjectInput.setAttribute("id", "projectInput")
    formElementProject.append(formProjectLabel, formProjectInput);
    // loop through project array to grab the projects for the dropdown
    _todoObjects__WEBPACK_IMPORTED_MODULE_2__.projectArray.forEach(function(element){
        let option = document.createElement("option")
        option.value = element;
        option.textContent = `${element}`
        formProjectInput.appendChild(option)
    })

    // form 'priority' container
    const formElementPriority = document.createElement("div")
    formElementPriority.classList.toggle("formElement")
    overlayForm.appendChild(formElementPriority)
    // 'Priority' input fields - Dropdown
    const formPriorityLabel = document.createElement("label")
    formPriorityLabel.setAttribute("for", "priorityInput")
    formPriorityLabel.textContent = "Select priority:";
    const formPriorityInput = document.createElement("select")
    formPriorityInput.setAttribute("name", "priority")
    formPriorityInput.setAttribute("id", "priorityInput")
    formElementProject.append(formPriorityLabel, formPriorityInput);
    // priority dropdown options
    const priorityUrgent = document.createElement("option")
    priorityUrgent.setAttribute("value", "Urgent")
    priorityUrgent.textContent = "Urgent"
    const priorityRoutine = document.createElement("option")
    priorityRoutine.setAttribute("value", "Routine")
    priorityRoutine.textContent = "Routine"
    const priorityBackBurner = document.createElement("option")
    priorityBackBurner.setAttribute("value", "Backburner")
    priorityBackBurner.textContent = "Back-Burner"
    formPriorityInput.append(priorityUrgent, priorityRoutine, priorityBackBurner)

    // form 'date due' container
    const formElementDue = document.createElement("div")
    formElementDue.classList.toggle("formElement")
    overlayForm.appendChild(formElementDue)
    // 'date due' input fields - date picker
    const formDueLabel = document.createElement("label")
    formDueLabel.setAttribute("for", "dueInput")
    formDueLabel.textContent = "Due by:"
    const formDueInput = document.createElement("input")
    formDueInput.setAttribute("type", "date")
    formDueInput.setAttribute("id", "dueInput")
    formDueInput.setAttribute("name", "dueDate")
    formDueInput.setAttribute("required", "")
    formElementDue.append(formDueLabel, formDueInput)

    // form submit button container
    const formElementSubmit = document.createElement("div")
    formElementSubmit.classList.toggle("formElement")
    overlayForm.appendChild(formElementSubmit)
    // submit button 
    const formSubmitButton = document.createElement("button")
    formSubmitButton.textContent = "Add New Todo"
    formSubmitButton.addEventListener("click", () => {
        addTodo();
        toggleForm();
        removeForm();
        (0,_mainContent__WEBPACK_IMPORTED_MODULE_1__["default"])();
        console.log(_todoObjects__WEBPACK_IMPORTED_MODULE_2__.todoArray)
    }) 

    formSubmitButton.setAttribute("type", "button")
    formSubmitButton.setAttribute("id", "submit")
    formElementSubmit.appendChild(formSubmitButton)
    // append the entire form container to the body when called
    document.getElementsByTagName("body")[0].appendChild(form)
    console.log("todoForm function is firing")
}

// function to toggle class that brings up a new todo form
function toggleForm(){
    document.body.classList.toggle("activeForm")
    console.log("toggleForm is firing")
}
// function to call when create a new Todo form button clicked, after completing the form
function addTodo(name, project, priority, dueDate){
    name = document.querySelector("#formName").value;
    project = document.querySelector("#projectInput").value;
    priority = document.querySelector("#priorityInput").value;
    dueDate = document.querySelector("#dueInput").value;
    const newTodo = new _todoObjects__WEBPACK_IMPORTED_MODULE_2__["default"](name,project,priority,dueDate)
    newTodo.pushTodo();
}

// function to remove the form element from DOM when closed
function removeForm() {
    const elements = document.getElementsByClassName("form")
    while (elements.length > 0){
        elements[0].parentNode.removeChild(elements[0])
    }
} 

// form for adding a new Project (remember to include a list of current projects)
function newProjectForm(){
    // container elements for form
    const form = document.createElement("form")
    form.classList.toggle("form")
    form.setAttribute("method", "post")
    form.setAttribute("action", "#")
    const overlayForm = document.createElement("div")
    overlayForm.classList.toggle("overlayForm")
    form.appendChild(overlayForm)

    // close form 'x' button
    const closeForm = document.createElement("div")
    closeForm.classList.toggle("closeForm")
    closeForm.addEventListener("click", () => {
        toggleForm();
        removeForm();
    })
    closeForm.innerHTML = "&times"
    overlayForm.appendChild(closeForm)

    // form header
    const formHeader = document.createElement("h1")
    formHeader.textContent = "Add a new Project"
    overlayForm.appendChild(formHeader);

    // project name input
    const formElementName = document.createElement("div")
    formElementName.classList.toggle("formElement")
    overlayForm.appendChild(formElementName)
    // 'Name' input fields - text
    const formNameLabel = document.createElement("label")
    formNameLabel.setAttribute("for", "Name")
    formNameLabel.textContent = "Name of New Project";
    const formNameInput = document.createElement("input")
    formNameInput.required = true;
    formNameInput.setAttribute("id", "newProjectInput")
    formNameInput.setAttribute("required", "")
    formNameInput.setAttribute("name", "newProjectInput")
    formNameInput.setAttribute("minlength", "1")
    formNameInput.setAttribute("maxlength", "30")
    formElementName.append(formNameLabel, formNameInput);

    // list of current Projects
    const currentProjects = document.createElement("div")
    currentProjects.classList.toggle("currentProjects")
    overlayForm.appendChild(currentProjects)
    const currentProjectsTitle = document.createElement("h2")
    currentProjectsTitle.textContent = "List of Current Projects"
    currentProjects.append(currentProjectsTitle)
    _todoObjects__WEBPACK_IMPORTED_MODULE_2__.projectArray.forEach((element) => {currentProjects.append(element + ", ")
    })

    // submit new project button
    const newProjectSubmit = document.createElement("div")
    newProjectSubmit.classList.toggle("formElement")
    overlayForm.appendChild(newProjectSubmit)
    // submit button 
    const newProjectSubmitBtn = document.createElement("button")
    newProjectSubmitBtn.textContent = "+ Add New Project"
    newProjectSubmitBtn.addEventListener("click", () => {
        // check that the input is valid, before running the toggle and remove functions
        if (formNameInput.checkValidity()) {
            pushNewProject();
            toggleForm();
            removeForm(); 
            (0,___WEBPACK_IMPORTED_MODULE_0__.clearProjectList)() 
            ;(0,___WEBPACK_IMPORTED_MODULE_0__.refreshProjectList)(); 
            console.log(_todoObjects__WEBPACK_IMPORTED_MODULE_2__.projectArray)
        }  
    }) 

    newProjectSubmitBtn.setAttribute("type", "submit")
    newProjectSubmitBtn.setAttribute("id", "submit")
    newProjectSubmit.appendChild(newProjectSubmitBtn)


    // append form container to body
    document.getElementsByTagName("body")[0].appendChild(form)
}

function pushNewProject() {
    const newProject = document.getElementById("newProjectInput")
    _todoObjects__WEBPACK_IMPORTED_MODULE_2__.projectArray.push(newProject.value)
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearProjectList": () => (/* binding */ clearProjectList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "refreshProjectList": () => (/* binding */ refreshProjectList)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todoObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoObjects */ "./src/todoObjects.js");
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainContent */ "./src/mainContent.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _showCompleted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showCompleted */ "./src/showCompleted.js");





// import {todoArray, projectArray} from "./todoObjects"
// grabbing the root node element

window.addEventListener("DOMContentLoaded", () => {
    refreshProjectList()
    ;(0,_showCompleted__WEBPACK_IMPORTED_MODULE_4__.renderShowCompletedBtn)()
})

const content = document.querySelector("#content")

// grid container
const container = document.createElement("div")
container.classList.toggle("container")

// header
const header = document.createElement("div")
header.classList.toggle("header")
header.textContent = "To Do"

// left sidebar
const leftSidebar = document.createElement("div")
leftSidebar.classList.toggle("leftSidebar")
const viewAll = document.createElement("button");
viewAll.classList.toggle("viewAll")
viewAll.textContent = "View All Todos"
const projects = document.createElement("div")
projects.classList.toggle("projects")
projects.textContent = "Projects"
const addNewProject = document.createElement("button")
addNewProject.classList.toggle("addNewProject")
addNewProject.textContent = "+ Add New Project"
addNewProject.addEventListener("click", () =>{
    ;(0,_form__WEBPACK_IMPORTED_MODULE_3__.newProjectForm)()
    ;(0,_form__WEBPACK_IMPORTED_MODULE_3__.toggleForm)()
})
projects.appendChild(addNewProject)

const projectInstructions = document.createElement("div")
projectInstructions.textContent = "List of current projects, click to view Todos"
projectInstructions.classList.toggle("projectInstructions")
projects.appendChild(projectInstructions)

// projects container
const projectListContainer = document.createElement("div")
projectListContainer.classList.toggle("projectListContainer")
projects.appendChild(projectListContainer)


// loop through projects to list them on the side panel
function refreshProjectList() {
    _todoObjects__WEBPACK_IMPORTED_MODULE_1__.projectArray.forEach((element) => {
        const projectButtonContainer = document.createElement("div")
        projectListContainer.appendChild(projectButtonContainer)
        projectButtonContainer.classList.toggle("projectButtonContainer")
        const projectList = document.createElement("button")
        projectList.classList.toggle("projectButton")
        projectList.textContent = element
        projectListContainer.appendChild(projectList)
        // event listeners for each project button
        projectList.addEventListener("click", () => {
            ;(0,_mainContent__WEBPACK_IMPORTED_MODULE_2__.clearTodos)(); //this only works once! doesnt clear after the first click
            _todoObjects__WEBPACK_IMPORTED_MODULE_1__.todoArray.forEach((element) => {
                if (element.project == projectList.textContent){
                    _todoObjects__WEBPACK_IMPORTED_MODULE_1__.filtered.push(element)
                    console.log("filtered array before reset", _todoObjects__WEBPACK_IMPORTED_MODULE_1__.filtered)
                }
                (0,_mainContent__WEBPACK_IMPORTED_MODULE_2__.updateMainFiltered)();
                
                _todoObjects__WEBPACK_IMPORTED_MODULE_1__.filtered.length = 0
                console.log("filtered array after reset", _todoObjects__WEBPACK_IMPORTED_MODULE_1__.filtered)
                
            })
        })
        
        
    })
}
// function to clear the list of projects before looping through to prevent repeating of elements
function clearProjectList () {
    while(projectListContainer.firstChild){
        projectListContainer.removeChild(projectListContainer.lastChild)
    }
}

// need to create a function that clears the filtered array



// main content
const main = document.createElement("div")
main.classList.toggle("main")
const addNewTodo = document.createElement("button")
addNewTodo.classList.toggle("addNewTodo")
addNewTodo.textContent = "+ Add New ToDo"
addNewTodo.addEventListener("click", () => {
    ;(0,_form__WEBPACK_IMPORTED_MODULE_3__.toggleForm)()
    ;(0,_form__WEBPACK_IMPORTED_MODULE_3__.todoForm)()
})
// head row of Todos
const todoHead = document.createElement("div")
todoHead.classList.toggle("todoHead")
const todoHeadTodo = document.createElement("div")
const todoHeadPriority = document.createElement("div")
const todoHeadDue = document.createElement("div")
const todoHeadProject = document.createElement("div")
const todoHeadComplete = document.createElement("div")
// head row class toggles
todoHeadTodo.classList.toggle("todoHeadItem")
todoHeadPriority.classList.toggle("todoHeadItem")
todoHeadDue.classList.toggle("todoHeadItem")
todoHeadProject.classList.toggle("todoHeadItem")
todoHeadComplete.classList.toggle("todoHeadItem")
//head row text contents
todoHeadTodo.textContent = "ToDo"
todoHeadPriority.textContent = "Priority"
todoHeadDue.textContent = "Due By"
todoHeadProject.textContent = "Project"
todoHeadComplete.textContent = "Mark as Complete"
// appending Todo head to main
main.appendChild(todoHead)
todoHead.append(todoHeadTodo, todoHeadPriority, todoHeadDue, todoHeadProject, todoHeadComplete)

const todoContainer = document.createElement("div")
todoContainer.classList.toggle("todoContainer")
main.appendChild(todoContainer)
main.insertBefore(addNewTodo, main.firstChild)

// footer
const footer = document.createElement("div")
footer.classList.toggle("footer")
footer.textContent = "Created by Jordan Ulmer, 2022"
// appending to the parent elements
content.appendChild(container)
container.append(header, leftSidebar, main, footer)
leftSidebar.append(viewAll, projects)

// testing a random Todo
const gardening = new _todoObjects__WEBPACK_IMPORTED_MODULE_1__["default"]("Gardening","Gardening","Urgent","monday")
gardening.pushTodo()

const work = new _todoObjects__WEBPACK_IMPORTED_MODULE_1__["default"]("Work", "Work", "Urgent", "Today")
work.pushTodo()


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);
;(0,_mainContent__WEBPACK_IMPORTED_MODULE_2__["default"])()








/***/ }),

/***/ "./src/mainContent.js":
/*!****************************!*\
  !*** ./src/mainContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearTodos": () => (/* binding */ clearTodos),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "updateMainFiltered": () => (/* binding */ updateMainFiltered)
/* harmony export */ });
/* harmony import */ var _todoLoop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoLoop */ "./src/todoLoop.js");
/* harmony import */ var _todoLoop__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_todoLoop__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _todoObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoObjects */ "./src/todoObjects.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ "./src/form.js");
// importing the arrays and the DOM element




// function to create and append the main section with each todo
function updateMain () {
    _todoObjects__WEBPACK_IMPORTED_MODULE_1__.todoArray.forEach(element => {
        const main = document.querySelector(".main")
        const todoContainer = document.querySelector(".todoContainer")
        const todo = document.createElement("div")
        const todoCompleteBtn = document.createElement("button")
        const todoName = document.createElement("div")
        const todoPriority = document.createElement("div")
        const todoDueDate = document.createElement("div")
        const todoProject = document.createElement("div")
        todo.classList.toggle("todo")
        todoCompleteBtn.classList.toggle("todoCompletBtn")
        todoCompleteBtn.textContent = "✔️"
        todoName.classList.toggle("todoName")
        todoPriority.classList.toggle("todoPriority")
        todoProject.classList.toggle("todoProject")
        main.appendChild(todoContainer)
        todoContainer.appendChild(todo)
        todo.append(todoName, todoPriority, todoDueDate, todoProject, todoCompleteBtn)
        // eventlistener for complete button
        todoCompleteBtn.addEventListener("click", () => {
            // push todo to completed array
            _todoObjects__WEBPACK_IMPORTED_MODULE_1__.completedTodos.push(element)
            // logic here to remove this single instance
            todoContainer.removeChild(todo)
            _todoObjects__WEBPACK_IMPORTED_MODULE_1__.todoArray.splice(_todoObjects__WEBPACK_IMPORTED_MODULE_1__.todoArray.indexOf(element), 1);
            console.log(_todoObjects__WEBPACK_IMPORTED_MODULE_1__.todoArray)
        })
        // loops over each object and extracts the value. (textContent for now, will change later)
        for (let key in element){
            todoName.textContent = element.name;
            todoPriority.textContent = element.priority;
            todoDueDate.textContent = element.dueDate;
            todoProject.textContent = element.project;
            todo.append()
        }
    });
}

function updateMainFiltered () {
    _todoObjects__WEBPACK_IMPORTED_MODULE_1__.filtered.forEach(element => {
        const main = document.querySelector(".main")
        const todo = document.createElement("div")
        const todoContainer = document.querySelector(".todoContainer")
        const todoCompleteBtn = document.createElement("button")
        const todoName = document.createElement("div")
        const todoPriority = document.createElement("div")
        const todoDueDate = document.createElement("div")
        const todoProject = document.createElement("div")
        todo.classList.toggle("todo")
        todoCompleteBtn.classList.toggle("todoCompletBtn")
        todoCompleteBtn.textContent = "✔️"
        todoName.classList.toggle("todoName")
        todoPriority.classList.toggle("todoPriority")
        todoProject.classList.toggle("todoProject")
        main.appendChild(todoContainer)
        todoContainer.appendChild(todo)
        todo.append(todoName, todoPriority, todoDueDate, todoProject, todoCompleteBtn)
        // eventlistener for complete button
        todoCompleteBtn.addEventListener("click", () => {
            // push the todo Object into the completed todos
            _todoObjects__WEBPACK_IMPORTED_MODULE_1__.completedTodos.push(element)
            // logic here to remove this single instance
            todoContainer.removeChild(todo)
            _todoObjects__WEBPACK_IMPORTED_MODULE_1__.todoArray.splice(_todoObjects__WEBPACK_IMPORTED_MODULE_1__.todoArray.indexOf(element), 1);
            console.log(_todoObjects__WEBPACK_IMPORTED_MODULE_1__.todoArray)
        })
        // loops over each object and extracts the value. (textContent for now, will change later)
        for (let key in element){
            todoName.textContent = element.name;
            todoPriority.textContent = element.priority;
            todoDueDate.textContent = element.dueDate;
            todoProject.textContent = element.project;
            todoContainer.append()
        }
    });
}



// function to clear the todo list, used when filtering by projects NOT WORKING
function clearTodos () {
    const todoContainer = document.querySelector(".todoContainer")
    while (todoContainer.firstChild){
        todoContainer.removeChild(todoContainer.lastChild)
    }
    console.log(todoContainer, "clearTodos is firing")
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateMain);


/***/ }),

/***/ "./src/showCompleted.js":
/*!******************************!*\
  !*** ./src/showCompleted.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderCompleted": () => (/* binding */ renderCompleted),
/* harmony export */   "renderShowCompletedBtn": () => (/* binding */ renderShowCompletedBtn)
/* harmony export */ });
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainContent */ "./src/mainContent.js");
/* harmony import */ var _todoObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoObjects */ "./src/todoObjects.js");



function renderShowCompletedBtn() {
    // create container for Completed ToDos button and button 
    const main = document.querySelector(".main")
    const completedTodoContainer = document.createElement("div")
    completedTodoContainer.classList.toggle("completedTodoContainer")
    const completedTodoBtn = document.createElement("button")
    completedTodoBtn.classList.toggle("completedTodoBtn")
    completedTodoBtn.textContent = "Show Completed ToDos"
    completedTodoBtn.addEventListener("click", () => {
        renderCompleted()
    })
    main.appendChild(completedTodoContainer)
    completedTodoContainer.appendChild(completedTodoBtn)
}

function renderCompleted() {
    const main = document.querySelector(".main")
    ;(0,_mainContent__WEBPACK_IMPORTED_MODULE_0__.clearTodos)()
    _todoObjects__WEBPACK_IMPORTED_MODULE_1__.completedTodos.forEach(element => {
        const main = document.querySelector(".main")
        const todo = document.createElement("div")
        const todoContainer = document.querySelector(".todoContainer")
        const todoCompleteBtn = document.createElement("button")
        const todoName = document.createElement("div")
        const todoPriority = document.createElement("div")
        const todoDueDate = document.createElement("div")
        const todoProject = document.createElement("div")
        todo.classList.toggle("todo")
        todo.classList.toggle("completed")
        todoName.classList.toggle("todoName")
        todoPriority.classList.toggle("todoPriority")
        todoProject.classList.toggle("todoProject")
        main.appendChild(todoContainer)
        todoContainer.appendChild(todo)
        todo.append(todoName, todoPriority, todoDueDate, todoProject)
        // eventlistener for complete button
        todoCompleteBtn.addEventListener("click", () => {
            // push the todo Object into the completed todos
            _todoObjects__WEBPACK_IMPORTED_MODULE_1__.completedTodos.push(element)
            // logic here to remove this single instance
            todoContainer.removeChild(todo)
            todoArray.splice(todoArray.indexOf(element), 1);
            console.log(todoArray)
        })
        // loops over each object and extracts the value. (textContent for now, will change later)
        for (let key in element){
            todoName.textContent = element.name;
            todoPriority.textContent = element.priority;
            todoDueDate.textContent = element.dueDate;
            todoProject.textContent = element.project;
            todoContainer.append()
        }
    });
}



/***/ }),

/***/ "./src/todoLoop.js":
/*!*************************!*\
  !*** ./src/todoLoop.js ***!
  \*************************/
/***/ (() => {

// make a function that loops through the object on creation to fill in the DOM?

/***/ }),

/***/ "./src/todoObjects.js":
/*!****************************!*\
  !*** ./src/todoObjects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "completedTodos": () => (/* binding */ completedTodos),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "filtered": () => (/* binding */ filtered),
/* harmony export */   "projectArray": () => (/* binding */ projectArray),
/* harmony export */   "todoArray": () => (/* binding */ todoArray)
/* harmony export */ });
let projectArray = ["Gardening", "Work"]//push the project name of when a new todo is made in here
let todoArray = [] //push each todo object into this array to list them easier
let filtered = [] //initialising an empty array for filtering todos
let completedTodos = [] //initialising an array to hold completed todos

// factory function for new Todo objects
function Todo (name, project, priority, dueDate) {
    this.name = name;
    this.project = project;
    this.priority = priority;
    this.dueDate = dueDate;
    this.pushTodo = function() {
        todoArray.push(this)
    }
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo); 


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFlBQVksS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7QUN4REE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWUsSUFBSTs7Ozs7OztVQ2pCbkI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21haW5Db250ZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Nob3dDb21wbGV0ZWQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb0xvb3AuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb09iamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FuaXQ6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBrYW5pdCwgc2Fucy1zZXJpZlxcbn1cXG4qIHtcXG4gIG91dGxpbmU6IDJweCByZWQgc29saWRcXG59XFxuYm9keSB7XFxuICBtYXJnaW46IDBcXG59XFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogYXV0byAxZnIgYXV0byAvIGF1dG8gMWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI1MCwgMTAwJSwgOCUpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGNvbG9yOiB3aGl0ZVxcbn1cXG4uaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbi5sZWZ0U2lkZWJhciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDIgO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnJcXG4gIFxcbn1cXG4udmlld0FsbCB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcbi52aWV3QWxsOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQsIDUzJSwgOTAlKTtcXG4gIGNvbG9yOiBibGFja1xcbn1cXG4ucHJvamVjdHMge1xcbiAgZ3JpZC1yb3c6IDIgLyAtMTtcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxuLmFkZE5ld1Byb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogaHNsKDQsIDUzJSwgOTAlKSBzb2xpZCA1cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgXFxufVxcbi5hZGROZXdQcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0LCA1MyUsIDkwJSk7XFxuICBjb2xvcjogYmxhY2tcXG59XFxuLmFkZE5ld1RvZG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDVweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIFxcbiAgfVxcbi5hZGROZXdUb2RvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQsIDUzJSwgOTAlKTtcXG4gICAgY29sb3I6IGJsYWNrXFxufVxcbi5wcm9qZWN0TGlzdENvbnRhaW5lciB7IFxcbiAgZGlzcGxheTogZmxleDtcXG5cXG59XFxuLnByb2plY3RCdXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogaHNsKDQsIDUzJSwgOTAlKSBzb2xpZCAzcHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG4ucHJvamVjdEJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNCwgNTMlLCA5MCUpO1xcbiAgICBjb2xvcjogYmxhY2tcXG59XFxuXFxuLm1haW4ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4udG9kb0hlYWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuLmNvbXBsZXRlZFRvZG9Db250YWluZXIge1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcbi5jb21wbGV0ZWRUb2RvQnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IGhzbCg0LCA1MyUsIDkwJSkgc29saWQgNXB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuLmNvbXBsZXRlZFRvZG9CdG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQsIDUzJSwgOTAlKTtcXG4gIGNvbG9yOiBibGFja1xcbn1cXG4uZm9vdGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4udG9kby5jb21wbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcbi5vdmVybGF5Rm9ybSB7XFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gIHRvcDo1MHZoO1xcbiAgbGVmdDowcHg7XFxuICB3aWR0aDoxMDB2dztcXG4gIGhlaWdodDowdmg7XFxuICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC44KTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBhZGRpbmc6IDgwcHggNTBweCAwcHggMTBweDtcXG4gIG92ZXJmbG93OnNjcm9sbDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0cmFuc2l0aW9uOiB0b3AgNTAwbXMgZWFzZS1pbi1vdXQsXFxuICAgICAgICAgICAgICBvcGFjaXR5IDUwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgaGVpZ2h0IDBtcyBlYXNlLWluLW91dCA1MDBtcztcXG59XFxuLm92ZXJsYXlGb3JtIC5jbG9zZUZvcm0ge1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogNDBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG5ib2R5LmFjdGl2ZUZvcm0gLm92ZXJsYXlGb3Jte1xcbiAgei1pbmRleDogMjtcXG4gIG9wYWNpdHk6IDE7XFxuICB0b3A6IDBweDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB0cmFuc2l0aW9uOiB0b3AgNTAwbXMgZWFzZS1pbi1vdXQsXFxuICAgICAgICAgICAgICBvcGFjaXR5IDUwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgaGVpZ2h0IDBtcyBlYXNlLWluLW91dCAwbXM7XFxufVxcbi5vdmVybGF5Rm9ybSBoMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm92ZXJsYXlGb3JtIHAge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm92ZXJsYXlGb3JtIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBjb2xvcjogI2ViNWUyODtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4ub3ZlcmxheUZvcm0gaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxN3B4O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5zZWxlY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcbmgyIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6ICNlYjVlMjg7XFxufVxcbi5jdXJyZW50UHJvamVjdHMge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuI3N1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBtYXJnaW46IDEwcHg7XFxuICBcXG59XFxuI3N1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNCwgNTMlLCA5MCUpO1xcbiAgY29sb3I6IGJsYWNrXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVDtBQUNGO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2I7QUFDRjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGFBQWE7RUFDYjs7QUFFRjtBQUNBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEM7QUFDRjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixZQUFZOztBQUVkO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEM7QUFDRjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsWUFBWTs7RUFFZDtBQUNGO0lBQ0ksa0NBQWtDO0lBQ2xDO0FBQ0o7QUFDQTtFQUNFLGFBQWE7O0FBRWY7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0NBQWtDO0lBQ2hDO0FBQ0o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDO0FBQ0Y7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsUUFBUTtFQUNSLFdBQVc7RUFDWCxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEI7OzBDQUV3QztBQUMxQztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YsUUFBUTtFQUNSLGFBQWE7RUFDYjs7d0NBRXNDO0FBQ3hDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixZQUFZOztBQUVkO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYW5pdDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IGthbml0LCBzYW5zLXNlcmlmXFxufVxcbioge1xcbiAgb3V0bGluZTogMnB4IHJlZCBzb2xpZFxcbn1cXG5ib2R5IHtcXG4gIG1hcmdpbjogMFxcbn1cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciBhdXRvIC8gYXV0byAxZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjUwLCAxMDAlLCA4JSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgY29sb3I6IHdoaXRlXFxufVxcbi5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLmxlZnRTaWRlYmFyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMiA7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmclxcbiAgXFxufVxcbi52aWV3QWxsIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IGhzbCg0LCA1MyUsIDkwJSkgc29saWQgNXB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuLnZpZXdBbGw6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNCwgNTMlLCA5MCUpO1xcbiAgY29sb3I6IGJsYWNrXFxufVxcbi5wcm9qZWN0cyB7XFxuICBncmlkLXJvdzogMiAvIC0xO1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbn1cXG4uYWRkTmV3UHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBtYXJnaW46IDEwcHg7XFxuICBcXG59XFxuLmFkZE5ld1Byb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQsIDUzJSwgOTAlKTtcXG4gIGNvbG9yOiBibGFja1xcbn1cXG4uYWRkTmV3VG9kbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IGhzbCg0LCA1MyUsIDkwJSkgc29saWQgNXB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgXFxuICB9XFxuLmFkZE5ld1RvZG86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNCwgNTMlLCA5MCUpO1xcbiAgICBjb2xvcjogYmxhY2tcXG59XFxuLnByb2plY3RMaXN0Q29udGFpbmVyIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbn1cXG4ucHJvamVjdEJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDNweDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcbi5wcm9qZWN0QnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0LCA1MyUsIDkwJSk7XFxuICAgIGNvbG9yOiBibGFja1xcbn1cXG5cXG4ubWFpbiB7XFxuICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi50b2RvSGVhZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG4uY29tcGxldGVkVG9kb0NvbnRhaW5lciB7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuLmNvbXBsZXRlZFRvZG9CdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogaHNsKDQsIDUzJSwgOTAlKSBzb2xpZCA1cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG4uY29tcGxldGVkVG9kb0J0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNCwgNTMlLCA5MCUpO1xcbiAgY29sb3I6IGJsYWNrXFxufVxcbi5mb290ZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi50b2RvLmNvbXBsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuLm92ZXJsYXlGb3JtIHtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgdG9wOjUwdmg7XFxuICBsZWZ0OjBweDtcXG4gIHdpZHRoOjEwMHZ3O1xcbiAgaGVpZ2h0OjB2aDtcXG4gIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjgpO1xcbiAgei1pbmRleDogLTE7XFxuICBvcGFjaXR5OiAwO1xcbiAgcGFkZGluZzogODBweCA1MHB4IDBweCAxMHB4O1xcbiAgb3ZlcmZsb3c6c2Nyb2xsO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRyYW5zaXRpb246IHRvcCA1MDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgIG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQsXFxuICAgICAgICAgICAgICBoZWlnaHQgMG1zIGVhc2UtaW4tb3V0IDUwMG1zO1xcbn1cXG4ub3ZlcmxheUZvcm0gLmNsb3NlRm9ybSB7XFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gIHRvcDogMjBweDtcXG4gIHJpZ2h0OiA0MHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbmJvZHkuYWN0aXZlRm9ybSAub3ZlcmxheUZvcm17XFxuICB6LWluZGV4OiAyO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRvcDogMHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHRyYW5zaXRpb246IHRvcCA1MDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgIG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQsXFxuICAgICAgICAgICAgICBoZWlnaHQgMG1zIGVhc2UtaW4tb3V0IDBtcztcXG59XFxuLm92ZXJsYXlGb3JtIGgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ub3ZlcmxheUZvcm0gcCB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ub3ZlcmxheUZvcm0gbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGNvbG9yOiAjZWI1ZTI4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5vdmVybGF5Rm9ybSBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE3cHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbnNlbGVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuaDIge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjb2xvcjogI2ViNWUyODtcXG59XFxuLmN1cnJlbnRQcm9qZWN0cyB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4jc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IGhzbCg0LCA1MyUsIDkwJSkgc29saWQgNXB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIFxcbn1cXG4jc3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0LCA1MyUsIDkwJSk7XFxuICBjb2xvcjogYmxhY2tcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyAvLyBET00gbWFuaXB1bGF0aW9uIGZvciBpbnB1dCBuZXcgdG9kbyBmb3JtIGFuZCBuZXcgcHJvamVjdCBmb3JtXG5cbmltcG9ydCB7IGNsZWFyUHJvamVjdExpc3QsIHJlZnJlc2hQcm9qZWN0TGlzdCB9IGZyb20gXCIuXCJcbmltcG9ydCB1cGRhdGVNYWluIGZyb20gXCIuL21haW5Db250ZW50XCJcbmltcG9ydCBUb2RvLCB7IHRvZG9BcnJheSB9IGZyb20gXCIuL3RvZG9PYmplY3RzXCJcbmltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gXCIuL3RvZG9PYmplY3RzXCJcblxuZnVuY3Rpb24gdG9kb0Zvcm0gKCl7XG4gICAgLy8gY29udGFpbmVyIGVsZW1lbnRzIGZvciBmb3JtXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybVwiKVxuICAgIGNvbnN0IG92ZXJsYXlGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG92ZXJsYXlGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJvdmVybGF5Rm9ybVwiKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQob3ZlcmxheUZvcm0pXG4gICAgLy8gY2xvc2UgZm9ybSAneCcgYnV0dG9uXG4gICAgY29uc3QgY2xvc2VGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNsb3NlRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiY2xvc2VGb3JtXCIpXG4gICAgY2xvc2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZUZvcm0oKTtcbiAgICAgICAgcmVtb3ZlRm9ybSgpO1xuICAgIH0pXG4gICAgY2xvc2VGb3JtLmlubmVySFRNTCA9IFwiJnRpbWVzXCJcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChjbG9zZUZvcm0pXG4gICAgLy8gZm9ybSBoZWFkZXJcbiAgICBjb25zdCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgZm9ybUhlYWRlci50ZXh0Q29udGVudCA9IFwiQWRkIGEgbmV3IFRvRG9cIlxuICAgIG92ZXJsYXlGb3JtLmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpO1xuXG4gICAgLy8gZm9ybSBlbGVtZW50ICdOYW1lJyBjb250YWluZXIgXG4gICAgY29uc3QgZm9ybUVsZW1lbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZvcm1FbGVtZW50TmFtZS5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUVsZW1lbnRcIilcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudE5hbWUpXG4gICAgLy8gJ05hbWUnIGlucHV0IGZpZWxkcyAtIHRleHRyXG4gICAgY29uc3QgZm9ybU5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGZvcm1OYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiTmFtZVwiKVxuICAgIGZvcm1OYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWUgb2YgVG9Eb1wiO1xuICAgIGNvbnN0IGZvcm1OYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBmb3JtTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpXG4gICAgZm9ybU5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm1OYW1lXCIpXG4gICAgZm9ybUVsZW1lbnROYW1lLmFwcGVuZChmb3JtTmFtZUxhYmVsLCBmb3JtTmFtZUlucHV0KTtcbiAgICBcbiAgICAvLyBmb3JtICdQcm9qZWN0JyBjb250YWluZXJcbiAgICBjb25zdCBmb3JtRWxlbWVudFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZm9ybUVsZW1lbnRQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtRWxlbWVudFwiKVxuICAgIG92ZXJsYXlGb3JtLmFwcGVuZENoaWxkKGZvcm1FbGVtZW50UHJvamVjdClcbiAgICAvLyAnUHJvamVjdCcgaW5wdXQgZmllbGRzIC0gRHJvcGRvd25cbiAgICBjb25zdCBmb3JtUHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgZm9ybVByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qZWN0SW5wdXRcIilcbiAgICBmb3JtUHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJTZWxlY3QgcHJvamVjdDpcIjtcbiAgICBjb25zdCBmb3JtUHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKVxuICAgIGZvcm1Qcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3RzXCIpXG4gICAgZm9ybVByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RJbnB1dFwiKVxuICAgIGZvcm1FbGVtZW50UHJvamVjdC5hcHBlbmQoZm9ybVByb2plY3RMYWJlbCwgZm9ybVByb2plY3RJbnB1dCk7XG4gICAgLy8gbG9vcCB0aHJvdWdoIHByb2plY3QgYXJyYXkgdG8gZ3JhYiB0aGUgcHJvamVjdHMgZm9yIHRoZSBkcm9wZG93blxuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe1xuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgICAgICBvcHRpb24udmFsdWUgPSBlbGVtZW50O1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBgJHtlbGVtZW50fWBcbiAgICAgICAgZm9ybVByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIC8vIGZvcm0gJ3ByaW9yaXR5JyBjb250YWluZXJcbiAgICBjb25zdCBmb3JtRWxlbWVudFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZvcm1FbGVtZW50UHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZShcImZvcm1FbGVtZW50XCIpXG4gICAgb3ZlcmxheUZvcm0uYXBwZW5kQ2hpbGQoZm9ybUVsZW1lbnRQcmlvcml0eSlcbiAgICAvLyAnUHJpb3JpdHknIGlucHV0IGZpZWxkcyAtIERyb3Bkb3duXG4gICAgY29uc3QgZm9ybVByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICBmb3JtUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eUlucHV0XCIpXG4gICAgZm9ybVByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlNlbGVjdCBwcmlvcml0eTpcIjtcbiAgICBjb25zdCBmb3JtUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcbiAgICBmb3JtUHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIilcbiAgICBmb3JtUHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5SW5wdXRcIilcbiAgICBmb3JtRWxlbWVudFByb2plY3QuYXBwZW5kKGZvcm1Qcmlvcml0eUxhYmVsLCBmb3JtUHJpb3JpdHlJbnB1dCk7XG4gICAgLy8gcHJpb3JpdHkgZHJvcGRvd24gb3B0aW9uc1xuICAgIGNvbnN0IHByaW9yaXR5VXJnZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgIHByaW9yaXR5VXJnZW50LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiVXJnZW50XCIpXG4gICAgcHJpb3JpdHlVcmdlbnQudGV4dENvbnRlbnQgPSBcIlVyZ2VudFwiXG4gICAgY29uc3QgcHJpb3JpdHlSb3V0aW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgIHByaW9yaXR5Um91dGluZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlJvdXRpbmVcIilcbiAgICBwcmlvcml0eVJvdXRpbmUudGV4dENvbnRlbnQgPSBcIlJvdXRpbmVcIlxuICAgIGNvbnN0IHByaW9yaXR5QmFja0J1cm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICBwcmlvcml0eUJhY2tCdXJuZXIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJCYWNrYnVybmVyXCIpXG4gICAgcHJpb3JpdHlCYWNrQnVybmVyLnRleHRDb250ZW50ID0gXCJCYWNrLUJ1cm5lclwiXG4gICAgZm9ybVByaW9yaXR5SW5wdXQuYXBwZW5kKHByaW9yaXR5VXJnZW50LCBwcmlvcml0eVJvdXRpbmUsIHByaW9yaXR5QmFja0J1cm5lcilcblxuICAgIC8vIGZvcm0gJ2RhdGUgZHVlJyBjb250YWluZXJcbiAgICBjb25zdCBmb3JtRWxlbWVudER1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBmb3JtRWxlbWVudER1ZS5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUVsZW1lbnRcIilcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudER1ZSlcbiAgICAvLyAnZGF0ZSBkdWUnIGlucHV0IGZpZWxkcyAtIGRhdGUgcGlja2VyXG4gICAgY29uc3QgZm9ybUR1ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgZm9ybUR1ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZUlucHV0XCIpXG4gICAgZm9ybUR1ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgYnk6XCJcbiAgICBjb25zdCBmb3JtRHVlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBmb3JtRHVlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIilcbiAgICBmb3JtRHVlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVJbnB1dFwiKVxuICAgIGZvcm1EdWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVlRGF0ZVwiKVxuICAgIGZvcm1EdWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKVxuICAgIGZvcm1FbGVtZW50RHVlLmFwcGVuZChmb3JtRHVlTGFiZWwsIGZvcm1EdWVJbnB1dClcblxuICAgIC8vIGZvcm0gc3VibWl0IGJ1dHRvbiBjb250YWluZXJcbiAgICBjb25zdCBmb3JtRWxlbWVudFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBmb3JtRWxlbWVudFN1Ym1pdC5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUVsZW1lbnRcIilcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudFN1Ym1pdClcbiAgICAvLyBzdWJtaXQgYnV0dG9uIFxuICAgIGNvbnN0IGZvcm1TdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgZm9ybVN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIE5ldyBUb2RvXCJcbiAgICBmb3JtU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGFkZFRvZG8oKTtcbiAgICAgICAgdG9nZ2xlRm9ybSgpO1xuICAgICAgICByZW1vdmVGb3JtKCk7XG4gICAgICAgIHVwZGF0ZU1haW4oKTtcbiAgICAgICAgY29uc29sZS5sb2codG9kb0FycmF5KVxuICAgIH0pIFxuXG4gICAgZm9ybVN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpXG4gICAgZm9ybVN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdFwiKVxuICAgIGZvcm1FbGVtZW50U3VibWl0LmFwcGVuZENoaWxkKGZvcm1TdWJtaXRCdXR0b24pXG4gICAgLy8gYXBwZW5kIHRoZSBlbnRpcmUgZm9ybSBjb250YWluZXIgdG8gdGhlIGJvZHkgd2hlbiBjYWxsZWRcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICBjb25zb2xlLmxvZyhcInRvZG9Gb3JtIGZ1bmN0aW9uIGlzIGZpcmluZ1wiKVxufVxuXG4vLyBmdW5jdGlvbiB0byB0b2dnbGUgY2xhc3MgdGhhdCBicmluZ3MgdXAgYSBuZXcgdG9kbyBmb3JtXG5mdW5jdGlvbiB0b2dnbGVGb3JtKCl7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlRm9ybVwiKVxuICAgIGNvbnNvbGUubG9nKFwidG9nZ2xlRm9ybSBpcyBmaXJpbmdcIilcbn1cbi8vIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjcmVhdGUgYSBuZXcgVG9kbyBmb3JtIGJ1dHRvbiBjbGlja2VkLCBhZnRlciBjb21wbGV0aW5nIHRoZSBmb3JtXG5mdW5jdGlvbiBhZGRUb2RvKG5hbWUsIHByb2plY3QsIHByaW9yaXR5LCBkdWVEYXRlKXtcbiAgICBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtTmFtZVwiKS52YWx1ZTtcbiAgICBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0SW5wdXRcIikudmFsdWU7XG4gICAgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5SW5wdXRcIikudmFsdWU7XG4gICAgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlSW5wdXRcIikudmFsdWU7XG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKG5hbWUscHJvamVjdCxwcmlvcml0eSxkdWVEYXRlKVxuICAgIG5ld1RvZG8ucHVzaFRvZG8oKTtcbn1cblxuLy8gZnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBmb3JtIGVsZW1lbnQgZnJvbSBET00gd2hlbiBjbG9zZWRcbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9ybVwiKVxuICAgIHdoaWxlIChlbGVtZW50cy5sZW5ndGggPiAwKXtcbiAgICAgICAgZWxlbWVudHNbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50c1swXSlcbiAgICB9XG59IFxuXG4vLyBmb3JtIGZvciBhZGRpbmcgYSBuZXcgUHJvamVjdCAocmVtZW1iZXIgdG8gaW5jbHVkZSBhIGxpc3Qgb2YgY3VycmVudCBwcm9qZWN0cylcbmZ1bmN0aW9uIG5ld1Byb2plY3RGb3JtKCl7XG4gICAgLy8gY29udGFpbmVyIGVsZW1lbnRzIGZvciBmb3JtXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybVwiKVxuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwicG9zdFwiKVxuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiI1wiKVxuICAgIGNvbnN0IG92ZXJsYXlGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG92ZXJsYXlGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJvdmVybGF5Rm9ybVwiKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQob3ZlcmxheUZvcm0pXG5cbiAgICAvLyBjbG9zZSBmb3JtICd4JyBidXR0b25cbiAgICBjb25zdCBjbG9zZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY2xvc2VGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJjbG9zZUZvcm1cIilcbiAgICBjbG9zZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlRm9ybSgpO1xuICAgICAgICByZW1vdmVGb3JtKCk7XG4gICAgfSlcbiAgICBjbG9zZUZvcm0uaW5uZXJIVE1MID0gXCImdGltZXNcIlxuICAgIG92ZXJsYXlGb3JtLmFwcGVuZENoaWxkKGNsb3NlRm9ybSlcblxuICAgIC8vIGZvcm0gaGVhZGVyXG4gICAgY29uc3QgZm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGZvcm1IZWFkZXIudGV4dENvbnRlbnQgPSBcIkFkZCBhIG5ldyBQcm9qZWN0XCJcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKTtcblxuICAgIC8vIHByb2plY3QgbmFtZSBpbnB1dFxuICAgIGNvbnN0IGZvcm1FbGVtZW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBmb3JtRWxlbWVudE5hbWUuY2xhc3NMaXN0LnRvZ2dsZShcImZvcm1FbGVtZW50XCIpXG4gICAgb3ZlcmxheUZvcm0uYXBwZW5kQ2hpbGQoZm9ybUVsZW1lbnROYW1lKVxuICAgIC8vICdOYW1lJyBpbnB1dCBmaWVsZHMgLSB0ZXh0XG4gICAgY29uc3QgZm9ybU5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGZvcm1OYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiTmFtZVwiKVxuICAgIGZvcm1OYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWUgb2YgTmV3IFByb2plY3RcIjtcbiAgICBjb25zdCBmb3JtTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZm9ybU5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgZm9ybU5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ld1Byb2plY3RJbnB1dFwiKVxuICAgIGZvcm1OYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIilcbiAgICBmb3JtTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuZXdQcm9qZWN0SW5wdXRcIilcbiAgICBmb3JtTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm1pbmxlbmd0aFwiLCBcIjFcIilcbiAgICBmb3JtTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjMwXCIpXG4gICAgZm9ybUVsZW1lbnROYW1lLmFwcGVuZChmb3JtTmFtZUxhYmVsLCBmb3JtTmFtZUlucHV0KTtcblxuICAgIC8vIGxpc3Qgb2YgY3VycmVudCBQcm9qZWN0c1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjdXJyZW50UHJvamVjdHMuY2xhc3NMaXN0LnRvZ2dsZShcImN1cnJlbnRQcm9qZWN0c1wiKVxuICAgIG92ZXJsYXlGb3JtLmFwcGVuZENoaWxkKGN1cnJlbnRQcm9qZWN0cylcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxuICAgIGN1cnJlbnRQcm9qZWN0c1RpdGxlLnRleHRDb250ZW50ID0gXCJMaXN0IG9mIEN1cnJlbnQgUHJvamVjdHNcIlxuICAgIGN1cnJlbnRQcm9qZWN0cy5hcHBlbmQoY3VycmVudFByb2plY3RzVGl0bGUpXG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtjdXJyZW50UHJvamVjdHMuYXBwZW5kKGVsZW1lbnQgKyBcIiwgXCIpXG4gICAgfSlcblxuICAgIC8vIHN1Ym1pdCBuZXcgcHJvamVjdCBidXR0b25cbiAgICBjb25zdCBuZXdQcm9qZWN0U3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG5ld1Byb2plY3RTdWJtaXQuY2xhc3NMaXN0LnRvZ2dsZShcImZvcm1FbGVtZW50XCIpXG4gICAgb3ZlcmxheUZvcm0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdFN1Ym1pdClcbiAgICAvLyBzdWJtaXQgYnV0dG9uIFxuICAgIGNvbnN0IG5ld1Byb2plY3RTdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgbmV3UHJvamVjdFN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiKyBBZGQgTmV3IFByb2plY3RcIlxuICAgIG5ld1Byb2plY3RTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgLy8gY2hlY2sgdGhhdCB0aGUgaW5wdXQgaXMgdmFsaWQsIGJlZm9yZSBydW5uaW5nIHRoZSB0b2dnbGUgYW5kIHJlbW92ZSBmdW5jdGlvbnNcbiAgICAgICAgaWYgKGZvcm1OYW1lSW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICBwdXNoTmV3UHJvamVjdCgpO1xuICAgICAgICAgICAgdG9nZ2xlRm9ybSgpO1xuICAgICAgICAgICAgcmVtb3ZlRm9ybSgpOyBcbiAgICAgICAgICAgIGNsZWFyUHJvamVjdExpc3QoKSBcbiAgICAgICAgICAgIHJlZnJlc2hQcm9qZWN0TGlzdCgpOyBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSlcbiAgICAgICAgfSAgXG4gICAgfSkgXG5cbiAgICBuZXdQcm9qZWN0U3VibWl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIilcbiAgICBuZXdQcm9qZWN0U3VibWl0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0XCIpXG4gICAgbmV3UHJvamVjdFN1Ym1pdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0U3VibWl0QnRuKVxuXG5cbiAgICAvLyBhcHBlbmQgZm9ybSBjb250YWluZXIgdG8gYm9keVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5hcHBlbmRDaGlsZChmb3JtKVxufVxuXG5mdW5jdGlvbiBwdXNoTmV3UHJvamVjdCgpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0SW5wdXRcIilcbiAgICBwcm9qZWN0QXJyYXkucHVzaChuZXdQcm9qZWN0LnZhbHVlKVxufVxuZXhwb3J0IHtcbiAgICB0b2RvRm9ybSxcbiAgICB0b2dnbGVGb3JtLFxuICAgIHJlbW92ZUZvcm0sXG4gICAgbmV3UHJvamVjdEZvcm1cbn1cbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcbmltcG9ydCBUb2RvLCB7IGZpbHRlcmVkLCBwcm9qZWN0QXJyYXksIHRvZG9BcnJheSB9IGZyb20gXCIuL3RvZG9PYmplY3RzXCJcbmltcG9ydCB1cGRhdGVNYWluLCB7IGNsZWFyVG9kb3MsIHVwZGF0ZU1haW5GaWx0ZXJlZCB9IGZyb20gXCIuL21haW5Db250ZW50XCJcbmltcG9ydCB7IHRvZ2dsZUZvcm0sIHRvZG9Gb3JtLCBuZXdQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL2Zvcm1cIlxuaW1wb3J0IHsgcmVuZGVyU2hvd0NvbXBsZXRlZEJ0biB9IGZyb20gXCIuL3Nob3dDb21wbGV0ZWRcIlxuLy8gaW1wb3J0IHt0b2RvQXJyYXksIHByb2plY3RBcnJheX0gZnJvbSBcIi4vdG9kb09iamVjdHNcIlxuLy8gZ3JhYmJpbmcgdGhlIHJvb3Qgbm9kZSBlbGVtZW50XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgcmVmcmVzaFByb2plY3RMaXN0KClcbiAgICByZW5kZXJTaG93Q29tcGxldGVkQnRuKClcbn0pXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIilcblxuLy8gZ3JpZCBjb250YWluZXJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiY29udGFpbmVyXCIpXG5cbi8vIGhlYWRlclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoZWFkZXJcIilcbmhlYWRlci50ZXh0Q29udGVudCA9IFwiVG8gRG9cIlxuXG4vLyBsZWZ0IHNpZGViYXJcbmNvbnN0IGxlZnRTaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxubGVmdFNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZShcImxlZnRTaWRlYmFyXCIpXG5jb25zdCB2aWV3QWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnZpZXdBbGwuY2xhc3NMaXN0LnRvZ2dsZShcInZpZXdBbGxcIilcbnZpZXdBbGwudGV4dENvbnRlbnQgPSBcIlZpZXcgQWxsIFRvZG9zXCJcbmNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxucHJvamVjdHMuY2xhc3NMaXN0LnRvZ2dsZShcInByb2plY3RzXCIpXG5wcm9qZWN0cy50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIlxuY29uc3QgYWRkTmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbmFkZE5ld1Byb2plY3QuY2xhc3NMaXN0LnRvZ2dsZShcImFkZE5ld1Byb2plY3RcIilcbmFkZE5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBcIisgQWRkIE5ldyBQcm9qZWN0XCJcbmFkZE5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIG5ld1Byb2plY3RGb3JtKClcbiAgICB0b2dnbGVGb3JtKClcbn0pXG5wcm9qZWN0cy5hcHBlbmRDaGlsZChhZGROZXdQcm9qZWN0KVxuXG5jb25zdCBwcm9qZWN0SW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxucHJvamVjdEluc3RydWN0aW9ucy50ZXh0Q29udGVudCA9IFwiTGlzdCBvZiBjdXJyZW50IHByb2plY3RzLCBjbGljayB0byB2aWV3IFRvZG9zXCJcbnByb2plY3RJbnN0cnVjdGlvbnMuY2xhc3NMaXN0LnRvZ2dsZShcInByb2plY3RJbnN0cnVjdGlvbnNcIilcbnByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RJbnN0cnVjdGlvbnMpXG5cbi8vIHByb2plY3RzIGNvbnRhaW5lclxuY29uc3QgcHJvamVjdExpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5wcm9qZWN0TGlzdENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwicHJvamVjdExpc3RDb250YWluZXJcIilcbnByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RMaXN0Q29udGFpbmVyKVxuXG5cbi8vIGxvb3AgdGhyb3VnaCBwcm9qZWN0cyB0byBsaXN0IHRoZW0gb24gdGhlIHNpZGUgcGFuZWxcbmZ1bmN0aW9uIHJlZnJlc2hQcm9qZWN0TGlzdCgpIHtcbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBwcm9qZWN0TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uQ29udGFpbmVyKVxuICAgICAgICBwcm9qZWN0QnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJwcm9qZWN0QnV0dG9uQ29udGFpbmVyXCIpXG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwicHJvamVjdEJ1dHRvblwiKVxuICAgICAgICBwcm9qZWN0TGlzdC50ZXh0Q29udGVudCA9IGVsZW1lbnRcbiAgICAgICAgcHJvamVjdExpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpXG4gICAgICAgIC8vIGV2ZW50IGxpc3RlbmVycyBmb3IgZWFjaCBwcm9qZWN0IGJ1dHRvblxuICAgICAgICBwcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUb2RvcygpOyAvL3RoaXMgb25seSB3b3JrcyBvbmNlISBkb2VzbnQgY2xlYXIgYWZ0ZXIgdGhlIGZpcnN0IGNsaWNrXG4gICAgICAgICAgICB0b2RvQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnByb2plY3QgPT0gcHJvamVjdExpc3QudGV4dENvbnRlbnQpe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZC5wdXNoKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlsdGVyZWQgYXJyYXkgYmVmb3JlIHJlc2V0XCIsIGZpbHRlcmVkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1cGRhdGVNYWluRmlsdGVyZWQoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZC5sZW5ndGggPSAwXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaWx0ZXJlZCBhcnJheSBhZnRlciByZXNldFwiLCBmaWx0ZXJlZClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9KVxufVxuLy8gZnVuY3Rpb24gdG8gY2xlYXIgdGhlIGxpc3Qgb2YgcHJvamVjdHMgYmVmb3JlIGxvb3BpbmcgdGhyb3VnaCB0byBwcmV2ZW50IHJlcGVhdGluZyBvZiBlbGVtZW50c1xuZnVuY3Rpb24gY2xlYXJQcm9qZWN0TGlzdCAoKSB7XG4gICAgd2hpbGUocHJvamVjdExpc3RDb250YWluZXIuZmlyc3RDaGlsZCl7XG4gICAgICAgIHByb2plY3RMaXN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RMaXN0Q29udGFpbmVyLmxhc3RDaGlsZClcbiAgICB9XG59XG5cbi8vIG5lZWQgdG8gY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCBjbGVhcnMgdGhlIGZpbHRlcmVkIGFycmF5XG5cblxuXG4vLyBtYWluIGNvbnRlbnRcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5tYWluLmNsYXNzTGlzdC50b2dnbGUoXCJtYWluXCIpXG5jb25zdCBhZGROZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuYWRkTmV3VG9kby5jbGFzc0xpc3QudG9nZ2xlKFwiYWRkTmV3VG9kb1wiKVxuYWRkTmV3VG9kby50ZXh0Q29udGVudCA9IFwiKyBBZGQgTmV3IFRvRG9cIlxuYWRkTmV3VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRvZ2dsZUZvcm0oKVxuICAgIHRvZG9Gb3JtKClcbn0pXG4vLyBoZWFkIHJvdyBvZiBUb2Rvc1xuY29uc3QgdG9kb0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG50b2RvSGVhZC5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb0hlYWRcIilcbmNvbnN0IHRvZG9IZWFkVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmNvbnN0IHRvZG9IZWFkUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5jb25zdCB0b2RvSGVhZER1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmNvbnN0IHRvZG9IZWFkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmNvbnN0IHRvZG9IZWFkQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4vLyBoZWFkIHJvdyBjbGFzcyB0b2dnbGVzXG50b2RvSGVhZFRvZG8uY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9IZWFkSXRlbVwiKVxudG9kb0hlYWRQcmlvcml0eS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb0hlYWRJdGVtXCIpXG50b2RvSGVhZER1ZS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb0hlYWRJdGVtXCIpXG50b2RvSGVhZFByb2plY3QuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9IZWFkSXRlbVwiKVxudG9kb0hlYWRDb21wbGV0ZS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb0hlYWRJdGVtXCIpXG4vL2hlYWQgcm93IHRleHQgY29udGVudHNcbnRvZG9IZWFkVG9kby50ZXh0Q29udGVudCA9IFwiVG9Eb1wiXG50b2RvSGVhZFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiXG50b2RvSGVhZER1ZS50ZXh0Q29udGVudCA9IFwiRHVlIEJ5XCJcbnRvZG9IZWFkUHJvamVjdC50ZXh0Q29udGVudCA9IFwiUHJvamVjdFwiXG50b2RvSGVhZENvbXBsZXRlLnRleHRDb250ZW50ID0gXCJNYXJrIGFzIENvbXBsZXRlXCJcbi8vIGFwcGVuZGluZyBUb2RvIGhlYWQgdG8gbWFpblxubWFpbi5hcHBlbmRDaGlsZCh0b2RvSGVhZClcbnRvZG9IZWFkLmFwcGVuZCh0b2RvSGVhZFRvZG8sIHRvZG9IZWFkUHJpb3JpdHksIHRvZG9IZWFkRHVlLCB0b2RvSGVhZFByb2plY3QsIHRvZG9IZWFkQ29tcGxldGUpXG5cbmNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG50b2RvQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvQ29udGFpbmVyXCIpXG5tYWluLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpXG5tYWluLmluc2VydEJlZm9yZShhZGROZXdUb2RvLCBtYWluLmZpcnN0Q2hpbGQpXG5cbi8vIGZvb3RlclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuZm9vdGVyLmNsYXNzTGlzdC50b2dnbGUoXCJmb290ZXJcIilcbmZvb3Rlci50ZXh0Q29udGVudCA9IFwiQ3JlYXRlZCBieSBKb3JkYW4gVWxtZXIsIDIwMjJcIlxuLy8gYXBwZW5kaW5nIHRvIHRoZSBwYXJlbnQgZWxlbWVudHNcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxuY29udGFpbmVyLmFwcGVuZChoZWFkZXIsIGxlZnRTaWRlYmFyLCBtYWluLCBmb290ZXIpXG5sZWZ0U2lkZWJhci5hcHBlbmQodmlld0FsbCwgcHJvamVjdHMpXG5cbi8vIHRlc3RpbmcgYSByYW5kb20gVG9kb1xuY29uc3QgZ2FyZGVuaW5nID0gbmV3IFRvZG8oXCJHYXJkZW5pbmdcIixcIkdhcmRlbmluZ1wiLFwiVXJnZW50XCIsXCJtb25kYXlcIilcbmdhcmRlbmluZy5wdXNoVG9kbygpXG5cbmNvbnN0IHdvcmsgPSBuZXcgVG9kbyhcIldvcmtcIiwgXCJXb3JrXCIsIFwiVXJnZW50XCIsIFwiVG9kYXlcIilcbndvcmsucHVzaFRvZG8oKVxuXG5cbmV4cG9ydCBkZWZhdWx0IG1haW5cbnVwZGF0ZU1haW4oKVxuXG5leHBvcnQge1xuICAgIHJlZnJlc2hQcm9qZWN0TGlzdCxcbiAgICBjbGVhclByb2plY3RMaXN0XG59XG5cblxuXG5cbiIsIi8vIGltcG9ydGluZyB0aGUgYXJyYXlzIGFuZCB0aGUgRE9NIGVsZW1lbnRcbmltcG9ydCB0b2RvTG9vcCBmcm9tIFwiLi90b2RvTG9vcFwiO1xuaW1wb3J0IHtjb21wbGV0ZWRUb2RvcywgZmlsdGVyZWQsIHByb2plY3RBcnJheSx0b2RvQXJyYXkgfSBmcm9tIFwiLi90b2RvT2JqZWN0c1wiO1xuaW1wb3J0IHRvZG9Gb3JtIGZyb20gXCIuL2Zvcm1cIjtcblxuLy8gZnVuY3Rpb24gdG8gY3JlYXRlIGFuZCBhcHBlbmQgdGhlIG1haW4gc2VjdGlvbiB3aXRoIGVhY2ggdG9kb1xuZnVuY3Rpb24gdXBkYXRlTWFpbiAoKSB7XG4gICAgdG9kb0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIilcbiAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0NvbnRhaW5lclwiKVxuICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0b2RvQ29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0b2RvUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgdG9kby5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb1wiKVxuICAgICAgICB0b2RvQ29tcGxldGVCdG4uY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9Db21wbGV0QnRuXCIpXG4gICAgICAgIHRvZG9Db21wbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwi4pyU77iPXCJcbiAgICAgICAgdG9kb05hbWUuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9OYW1lXCIpXG4gICAgICAgIHRvZG9Qcmlvcml0eS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb1ByaW9yaXR5XCIpXG4gICAgICAgIHRvZG9Qcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvUHJvamVjdFwiKVxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpXG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kbylcbiAgICAgICAgdG9kby5hcHBlbmQodG9kb05hbWUsIHRvZG9Qcmlvcml0eSwgdG9kb0R1ZURhdGUsIHRvZG9Qcm9qZWN0LCB0b2RvQ29tcGxldGVCdG4pXG4gICAgICAgIC8vIGV2ZW50bGlzdGVuZXIgZm9yIGNvbXBsZXRlIGJ1dHRvblxuICAgICAgICB0b2RvQ29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIC8vIHB1c2ggdG9kbyB0byBjb21wbGV0ZWQgYXJyYXlcbiAgICAgICAgICAgIGNvbXBsZXRlZFRvZG9zLnB1c2goZWxlbWVudClcbiAgICAgICAgICAgIC8vIGxvZ2ljIGhlcmUgdG8gcmVtb3ZlIHRoaXMgc2luZ2xlIGluc3RhbmNlXG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvZG8pXG4gICAgICAgICAgICB0b2RvQXJyYXkuc3BsaWNlKHRvZG9BcnJheS5pbmRleE9mKGVsZW1lbnQpLCAxKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG9BcnJheSlcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbG9vcHMgb3ZlciBlYWNoIG9iamVjdCBhbmQgZXh0cmFjdHMgdGhlIHZhbHVlLiAodGV4dENvbnRlbnQgZm9yIG5vdywgd2lsbCBjaGFuZ2UgbGF0ZXIpXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBlbGVtZW50KXtcbiAgICAgICAgICAgIHRvZG9OYW1lLnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuICAgICAgICAgICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gZWxlbWVudC5wcmlvcml0eTtcbiAgICAgICAgICAgIHRvZG9EdWVEYXRlLnRleHRDb250ZW50ID0gZWxlbWVudC5kdWVEYXRlO1xuICAgICAgICAgICAgdG9kb1Byb2plY3QudGV4dENvbnRlbnQgPSBlbGVtZW50LnByb2plY3Q7XG4gICAgICAgICAgICB0b2RvLmFwcGVuZCgpXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTWFpbkZpbHRlcmVkICgpIHtcbiAgICBmaWx0ZXJlZC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpXG4gICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9Db250YWluZXJcIilcbiAgICAgICAgY29uc3QgdG9kb0NvbXBsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdG9kb1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9cIilcbiAgICAgICAgdG9kb0NvbXBsZXRlQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvQ29tcGxldEJ0blwiKVxuICAgICAgICB0b2RvQ29tcGxldGVCdG4udGV4dENvbnRlbnQgPSBcIuKclO+4j1wiXG4gICAgICAgIHRvZG9OYW1lLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvTmFtZVwiKVxuICAgICAgICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9Qcmlvcml0eVwiKVxuICAgICAgICB0b2RvUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb1Byb2plY3RcIilcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKVxuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pXG4gICAgICAgIHRvZG8uYXBwZW5kKHRvZG9OYW1lLCB0b2RvUHJpb3JpdHksIHRvZG9EdWVEYXRlLCB0b2RvUHJvamVjdCwgdG9kb0NvbXBsZXRlQnRuKVxuICAgICAgICAvLyBldmVudGxpc3RlbmVyIGZvciBjb21wbGV0ZSBidXR0b25cbiAgICAgICAgdG9kb0NvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBwdXNoIHRoZSB0b2RvIE9iamVjdCBpbnRvIHRoZSBjb21wbGV0ZWQgdG9kb3NcbiAgICAgICAgICAgIGNvbXBsZXRlZFRvZG9zLnB1c2goZWxlbWVudClcbiAgICAgICAgICAgIC8vIGxvZ2ljIGhlcmUgdG8gcmVtb3ZlIHRoaXMgc2luZ2xlIGluc3RhbmNlXG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvZG8pXG4gICAgICAgICAgICB0b2RvQXJyYXkuc3BsaWNlKHRvZG9BcnJheS5pbmRleE9mKGVsZW1lbnQpLCAxKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG9BcnJheSlcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbG9vcHMgb3ZlciBlYWNoIG9iamVjdCBhbmQgZXh0cmFjdHMgdGhlIHZhbHVlLiAodGV4dENvbnRlbnQgZm9yIG5vdywgd2lsbCBjaGFuZ2UgbGF0ZXIpXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBlbGVtZW50KXtcbiAgICAgICAgICAgIHRvZG9OYW1lLnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuICAgICAgICAgICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gZWxlbWVudC5wcmlvcml0eTtcbiAgICAgICAgICAgIHRvZG9EdWVEYXRlLnRleHRDb250ZW50ID0gZWxlbWVudC5kdWVEYXRlO1xuICAgICAgICAgICAgdG9kb1Byb2plY3QudGV4dENvbnRlbnQgPSBlbGVtZW50LnByb2plY3Q7XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCgpXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG5cbi8vIGZ1bmN0aW9uIHRvIGNsZWFyIHRoZSB0b2RvIGxpc3QsIHVzZWQgd2hlbiBmaWx0ZXJpbmcgYnkgcHJvamVjdHMgTk9UIFdPUktJTkdcbmZ1bmN0aW9uIGNsZWFyVG9kb3MgKCkge1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9Db250YWluZXJcIilcbiAgICB3aGlsZSAodG9kb0NvbnRhaW5lci5maXJzdENoaWxkKXtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b2RvQ29udGFpbmVyLmxhc3RDaGlsZClcbiAgICB9XG4gICAgY29uc29sZS5sb2codG9kb0NvbnRhaW5lciwgXCJjbGVhclRvZG9zIGlzIGZpcmluZ1wiKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZU1haW5cbmV4cG9ydCB7XG4gICAgdXBkYXRlTWFpbkZpbHRlcmVkLFxuICAgIGNsZWFyVG9kb3MsXG59IiwiaW1wb3J0IHsgY2xlYXJUb2RvcyB9IGZyb20gXCIuL21haW5Db250ZW50XCJcbmltcG9ydCB7IGNvbXBsZXRlZFRvZG9zIH0gZnJvbSBcIi4vdG9kb09iamVjdHNcIlxuXG5mdW5jdGlvbiByZW5kZXJTaG93Q29tcGxldGVkQnRuKCkge1xuICAgIC8vIGNyZWF0ZSBjb250YWluZXIgZm9yIENvbXBsZXRlZCBUb0RvcyBidXR0b24gYW5kIGJ1dHRvbiBcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpXG4gICAgY29uc3QgY29tcGxldGVkVG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb21wbGV0ZWRUb2RvQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRUb2RvQ29udGFpbmVyXCIpXG4gICAgY29uc3QgY29tcGxldGVkVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBjb21wbGV0ZWRUb2RvQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRUb2RvQnRuXCIpXG4gICAgY29tcGxldGVkVG9kb0J0bi50ZXh0Q29udGVudCA9IFwiU2hvdyBDb21wbGV0ZWQgVG9Eb3NcIlxuICAgIGNvbXBsZXRlZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcmVuZGVyQ29tcGxldGVkKClcbiAgICB9KVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29tcGxldGVkVG9kb0NvbnRhaW5lcilcbiAgICBjb21wbGV0ZWRUb2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBsZXRlZFRvZG9CdG4pXG59XG5cbmZ1bmN0aW9uIHJlbmRlckNvbXBsZXRlZCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpXG4gICAgY2xlYXJUb2RvcygpXG4gICAgY29tcGxldGVkVG9kb3MuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKVxuICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvQ29udGFpbmVyXCIpXG4gICAgICAgIGNvbnN0IHRvZG9Db21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHRvZG9Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICB0b2RvLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvXCIpXG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFwiKVxuICAgICAgICB0b2RvTmFtZS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb05hbWVcIilcbiAgICAgICAgdG9kb1ByaW9yaXR5LmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvUHJpb3JpdHlcIilcbiAgICAgICAgdG9kb1Byb2plY3QuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9Qcm9qZWN0XCIpXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcilcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvKVxuICAgICAgICB0b2RvLmFwcGVuZCh0b2RvTmFtZSwgdG9kb1ByaW9yaXR5LCB0b2RvRHVlRGF0ZSwgdG9kb1Byb2plY3QpXG4gICAgICAgIC8vIGV2ZW50bGlzdGVuZXIgZm9yIGNvbXBsZXRlIGJ1dHRvblxuICAgICAgICB0b2RvQ29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIC8vIHB1c2ggdGhlIHRvZG8gT2JqZWN0IGludG8gdGhlIGNvbXBsZXRlZCB0b2Rvc1xuICAgICAgICAgICAgY29tcGxldGVkVG9kb3MucHVzaChlbGVtZW50KVxuICAgICAgICAgICAgLy8gbG9naWMgaGVyZSB0byByZW1vdmUgdGhpcyBzaW5nbGUgaW5zdGFuY2VcbiAgICAgICAgICAgIHRvZG9Db250YWluZXIucmVtb3ZlQ2hpbGQodG9kbylcbiAgICAgICAgICAgIHRvZG9BcnJheS5zcGxpY2UodG9kb0FycmF5LmluZGV4T2YoZWxlbWVudCksIDEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9kb0FycmF5KVxuICAgICAgICB9KVxuICAgICAgICAvLyBsb29wcyBvdmVyIGVhY2ggb2JqZWN0IGFuZCBleHRyYWN0cyB0aGUgdmFsdWUuICh0ZXh0Q29udGVudCBmb3Igbm93LCB3aWxsIGNoYW5nZSBsYXRlcilcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGVsZW1lbnQpe1xuICAgICAgICAgICAgdG9kb05hbWUudGV4dENvbnRlbnQgPSBlbGVtZW50Lm5hbWU7XG4gICAgICAgICAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBlbGVtZW50LnByaW9yaXR5O1xuICAgICAgICAgICAgdG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSBlbGVtZW50LmR1ZURhdGU7XG4gICAgICAgICAgICB0b2RvUHJvamVjdC50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJvamVjdDtcbiAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKClcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQge1xuICAgIHJlbmRlclNob3dDb21wbGV0ZWRCdG4sXG4gICAgcmVuZGVyQ29tcGxldGVkXG59IiwiLy8gbWFrZSBhIGZ1bmN0aW9uIHRoYXQgbG9vcHMgdGhyb3VnaCB0aGUgb2JqZWN0IG9uIGNyZWF0aW9uIHRvIGZpbGwgaW4gdGhlIERPTT8iLCJsZXQgcHJvamVjdEFycmF5ID0gW1wiR2FyZGVuaW5nXCIsIFwiV29ya1wiXS8vcHVzaCB0aGUgcHJvamVjdCBuYW1lIG9mIHdoZW4gYSBuZXcgdG9kbyBpcyBtYWRlIGluIGhlcmVcbmxldCB0b2RvQXJyYXkgPSBbXSAvL3B1c2ggZWFjaCB0b2RvIG9iamVjdCBpbnRvIHRoaXMgYXJyYXkgdG8gbGlzdCB0aGVtIGVhc2llclxubGV0IGZpbHRlcmVkID0gW10gLy9pbml0aWFsaXNpbmcgYW4gZW1wdHkgYXJyYXkgZm9yIGZpbHRlcmluZyB0b2Rvc1xubGV0IGNvbXBsZXRlZFRvZG9zID0gW10gLy9pbml0aWFsaXNpbmcgYW4gYXJyYXkgdG8gaG9sZCBjb21wbGV0ZWQgdG9kb3NcblxuLy8gZmFjdG9yeSBmdW5jdGlvbiBmb3IgbmV3IFRvZG8gb2JqZWN0c1xuZnVuY3Rpb24gVG9kbyAobmFtZSwgcHJvamVjdCwgcHJpb3JpdHksIGR1ZURhdGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wdXNoVG9kbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0b2RvQXJyYXkucHVzaCh0aGlzKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUb2RvIFxuZXhwb3J0IHtcbiAgICBwcm9qZWN0QXJyYXksXG4gICAgdG9kb0FycmF5LFxuICAgIGZpbHRlcmVkLFxuICAgIGNvbXBsZXRlZFRvZG9zXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9