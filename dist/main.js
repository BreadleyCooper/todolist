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
___CSS_LOADER_EXPORT___.push([module.id, "\n:root {\n  font-size: 18px;\n  margin: 0;\n  font-family: kanit, sans-serif\n}\n* {\n  outline: 2px red solid\n}\nbody {\n  margin: 0\n}\n.container {\n  display: grid;\n  grid-template: auto 1fr auto / auto 1fr;\n  background-color: hsl(250, 100%, 8%);\n  height: 100vh;\n  color: white\n}\n.header {\n  grid-column: 1 / -1;\n  padding: 1.5rem;\n  font-size: 2rem;\n}\n.leftSidebar {\n  grid-column: 1 / 2 ;\n  padding: 2rem;\n  display: grid;\n  grid-template-rows: 1fr 4fr\n  \n}\n.viewAll {\n  grid-row: 1 / 2;\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n}\n.viewAll:hover{\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.projects {\n  grid-row: 2 / -1;\n  padding-top: 1.5rem;\n  display: grid;\n  grid-template-rows: auto 1fr;\n}\n.addNewProject {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n  \n}\n.addNewProject:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.addNewTodo {\n    background-color: transparent;\n    color: white;\n    border-radius: 10px;\n    height: 4rem;\n    transition: 0.5s;\n    cursor: pointer;\n    border: hsl(4, 53%, 90%) solid 5px;\n    font-size: 1.5rem;\n    font-family: inherit;\n    margin: 10px;\n    \n  }\n.addNewTodo:hover {\n    background-color: hsl(4, 53%, 90%);\n    color: black\n}\n.projectListContainer { \n  display: flex;\n  flex-wrap: wrap;\n  overflow: scroll;\n  max-width: 400px;\n\n}\n.projectButton {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 2rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 3px;\n  font-size: 0.8rem;\n  font-family: inherit;\n  margin: 10px;\n}\n.projectButton:hover {\n  background-color: hsl(4, 53%, 90%);\n    color: black\n}\n\n.main {\n  grid-column: 2 / -1;\n  display: flex;\n  flex-direction: column;\n}\n.todoHead {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 2rem;\n}\n.completedTodoContainer {\n  justify-self: flex-end;\n  margin-top: auto;\n}\n.completedTodoBtn {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n}\n.completedTodoBtn:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.footer {\n  grid-column: 1 / -1;\n  padding: 1rem;\n  text-align: center;\n}\n.todo {\n    display: flex;\n    justify-content: space-around;\n}\n.todo.completed {\n  text-decoration: line-through;\n}\n.overlayForm {\n  position:absolute;\n  top:50vh;\n  left:0px;\n  width:100vw;\n  height:0vh;\n  background:rgba(0,0,0,0.8);\n  z-index: -1;\n  opacity: 0;\n  padding: 80px 50px 0px 10px;\n  overflow:scroll;\n  box-sizing: border-box;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 500ms;\n}\n.overlayForm .closeForm {\n  position:absolute;\n  top: 20px;\n  right: 40px;\n  color: #fff;\n  font-size: 5rem;\n  font-weight: 600;\n  cursor:pointer;\n}\n\nbody.activeForm .overlayForm{\n  z-index: 2;\n  opacity: 1;\n  top: 0px;\n  height: 100vh;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 0ms;\n}\n.overlayForm h1 {\n  font-size: 3rem;\n  color: #fff;\n}\n\n.overlayForm p {\n  font-size: 2em;\n  color: #fff;\n}\n\n.overlayForm label {\n  display: block;\n  font-size: 2em;\n  color: #eb5e28;\n  margin-bottom: 20px;\n  font-weight: 500;\n}\n.overlayForm input {\n  width: 100%;\n  padding: 17px;\n  font-size: 25px;\n  border: 4px solid #fff;\n  background: transparent;\n  outline: none;\n  border-radius: 10px;\n  margin-bottom: 50px;\n  color: #fff;\n  font-weight: 500;\n}\nselect {\n  width: 100%;\n  font-size: inherit;\n}\nh2 {\n  font-family: inherit;\n  color: #eb5e28;\n}\n.currentProjects {\n  font-family: inherit;\n  color: #ffffff;\n}\n#submit {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n  \n}\n#submit:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AAEA;EACE,eAAe;EACf,SAAS;EACT;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,aAAa;EACb;AACF;AACA;EACE,mBAAmB;EACnB,eAAe;EACf,eAAe;AACjB;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb;;AAEF;AACA;EACE,eAAe;EACf,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,kCAAkC;EAClC;AACF;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,4BAA4B;AAC9B;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;;AAEd;AACA;EACE,kCAAkC;EAClC;AACF;AACA;IACI,6BAA6B;IAC7B,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,kCAAkC;IAClC,iBAAiB;IACjB,oBAAoB;IACpB,YAAY;;EAEd;AACF;IACI,kCAAkC;IAClC;AACJ;AACA;EACE,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,gBAAgB;;AAElB;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;AACd;AACA;EACE,kCAAkC;IAChC;AACJ;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;AACA;EACE,sBAAsB;EACtB,gBAAgB;AAClB;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;AACd;AACA;EACE,kCAAkC;EAClC;AACF;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,kBAAkB;AACpB;AACA;IACI,aAAa;IACb,6BAA6B;AACjC;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,iBAAiB;EACjB,QAAQ;EACR,QAAQ;EACR,WAAW;EACX,UAAU;EACV,0BAA0B;EAC1B,WAAW;EACX,UAAU;EACV,2BAA2B;EAC3B,eAAe;EACf,sBAAsB;EACtB;;0CAEwC;AAC1C;AACA;EACE,iBAAiB;EACjB,SAAS;EACT,WAAW;EACX,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,UAAU;EACV,QAAQ;EACR,aAAa;EACb;;wCAEsC;AACxC;AACA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,cAAc;EACd,cAAc;EACd,cAAc;EACd,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,oBAAoB;EACpB,cAAc;AAChB;AACA;EACE,oBAAoB;EACpB,cAAc;AAChB;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;;AAEd;AACA;EACE,kCAAkC;EAClC;AACF","sourcesContent":["\n@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n:root {\n  font-size: 18px;\n  margin: 0;\n  font-family: kanit, sans-serif\n}\n* {\n  outline: 2px red solid\n}\nbody {\n  margin: 0\n}\n.container {\n  display: grid;\n  grid-template: auto 1fr auto / auto 1fr;\n  background-color: hsl(250, 100%, 8%);\n  height: 100vh;\n  color: white\n}\n.header {\n  grid-column: 1 / -1;\n  padding: 1.5rem;\n  font-size: 2rem;\n}\n.leftSidebar {\n  grid-column: 1 / 2 ;\n  padding: 2rem;\n  display: grid;\n  grid-template-rows: 1fr 4fr\n  \n}\n.viewAll {\n  grid-row: 1 / 2;\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n}\n.viewAll:hover{\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.projects {\n  grid-row: 2 / -1;\n  padding-top: 1.5rem;\n  display: grid;\n  grid-template-rows: auto 1fr;\n}\n.addNewProject {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n  \n}\n.addNewProject:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.addNewTodo {\n    background-color: transparent;\n    color: white;\n    border-radius: 10px;\n    height: 4rem;\n    transition: 0.5s;\n    cursor: pointer;\n    border: hsl(4, 53%, 90%) solid 5px;\n    font-size: 1.5rem;\n    font-family: inherit;\n    margin: 10px;\n    \n  }\n.addNewTodo:hover {\n    background-color: hsl(4, 53%, 90%);\n    color: black\n}\n.projectListContainer { \n  display: flex;\n  flex-wrap: wrap;\n  overflow: scroll;\n  max-width: 400px;\n\n}\n.projectButton {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 2rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 3px;\n  font-size: 0.8rem;\n  font-family: inherit;\n  margin: 10px;\n}\n.projectButton:hover {\n  background-color: hsl(4, 53%, 90%);\n    color: black\n}\n\n.main {\n  grid-column: 2 / -1;\n  display: flex;\n  flex-direction: column;\n}\n.todoHead {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 2rem;\n}\n.completedTodoContainer {\n  justify-self: flex-end;\n  margin-top: auto;\n}\n.completedTodoBtn {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n}\n.completedTodoBtn:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.footer {\n  grid-column: 1 / -1;\n  padding: 1rem;\n  text-align: center;\n}\n.todo {\n    display: flex;\n    justify-content: space-around;\n}\n.todo.completed {\n  text-decoration: line-through;\n}\n.overlayForm {\n  position:absolute;\n  top:50vh;\n  left:0px;\n  width:100vw;\n  height:0vh;\n  background:rgba(0,0,0,0.8);\n  z-index: -1;\n  opacity: 0;\n  padding: 80px 50px 0px 10px;\n  overflow:scroll;\n  box-sizing: border-box;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 500ms;\n}\n.overlayForm .closeForm {\n  position:absolute;\n  top: 20px;\n  right: 40px;\n  color: #fff;\n  font-size: 5rem;\n  font-weight: 600;\n  cursor:pointer;\n}\n\nbody.activeForm .overlayForm{\n  z-index: 2;\n  opacity: 1;\n  top: 0px;\n  height: 100vh;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 0ms;\n}\n.overlayForm h1 {\n  font-size: 3rem;\n  color: #fff;\n}\n\n.overlayForm p {\n  font-size: 2em;\n  color: #fff;\n}\n\n.overlayForm label {\n  display: block;\n  font-size: 2em;\n  color: #eb5e28;\n  margin-bottom: 20px;\n  font-weight: 500;\n}\n.overlayForm input {\n  width: 100%;\n  padding: 17px;\n  font-size: 25px;\n  border: 4px solid #fff;\n  background: transparent;\n  outline: none;\n  border-radius: 10px;\n  margin-bottom: 50px;\n  color: #fff;\n  font-weight: 500;\n}\nselect {\n  width: 100%;\n  font-size: inherit;\n}\nh2 {\n  font-family: inherit;\n  color: #eb5e28;\n}\n.currentProjects {\n  font-family: inherit;\n  color: #ffffff;\n}\n#submit {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n  \n}\n#submit:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}"],"sourceRoot":""}]);
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






//*NEW TODO FORM
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

// **NEW PROJECT FORM 
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
viewAll.addEventListener("click", () => {
    (0,_mainContent__WEBPACK_IMPORTED_MODULE_2__.clearTodos)();
    (0,_mainContent__WEBPACK_IMPORTED_MODULE_2__["default"])();
})
viewAll.classList.toggle("viewAll")
viewAll.textContent = "View All Uncompleted"
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
        const todoHead = document.querySelector(".todoHead")
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
        todoHead.after(todoContainer)
        todoContainer.append(todo)
        todo.append(todoName, todoPriority, todoDueDate, todoProject, todoCompleteBtn)
        // eventlistener for complete button
        todoCompleteBtn.addEventListener("click", () => {
            // push todo to completed 
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
        const todoHead = document.querySelector(".todoHead")
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
        todoHead.after(todoContainer)
        todoContainer.append(todo)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFlBQVksS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxLQUFLLEtBQUssWUFBWSxNQUFNLHVHQUF1RyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLHFCQUFxQixTQUFTLG9CQUFvQixjQUFjLHFDQUFxQyxLQUFLLDZCQUE2QixRQUFRLGdCQUFnQixjQUFjLGtCQUFrQiw0Q0FBNEMseUNBQXlDLGtCQUFrQixtQkFBbUIsV0FBVyx3QkFBd0Isb0JBQW9CLG9CQUFvQixHQUFHLGdCQUFnQix3QkFBd0Isa0JBQWtCLGtCQUFrQixzQ0FBc0MsWUFBWSxvQkFBb0Isa0NBQWtDLGlCQUFpQix3QkFBd0IsaUJBQWlCLHFCQUFxQixvQkFBb0IsdUNBQXVDLHNCQUFzQix5QkFBeUIsR0FBRyxpQkFBaUIsdUNBQXVDLG1CQUFtQixhQUFhLHFCQUFxQix3QkFBd0Isa0JBQWtCLGlDQUFpQyxHQUFHLGtCQUFrQixrQ0FBa0MsaUJBQWlCLHdCQUF3QixpQkFBaUIscUJBQXFCLG9CQUFvQix1Q0FBdUMsc0JBQXNCLHlCQUF5QixpQkFBaUIsT0FBTyx3QkFBd0IsdUNBQXVDLG1CQUFtQixlQUFlLG9DQUFvQyxtQkFBbUIsMEJBQTBCLG1CQUFtQix1QkFBdUIsc0JBQXNCLHlDQUF5Qyx3QkFBd0IsMkJBQTJCLG1CQUFtQixXQUFXLHFCQUFxQix5Q0FBeUMscUJBQXFCLDBCQUEwQixrQkFBa0Isb0JBQW9CLHFCQUFxQixxQkFBcUIsS0FBSyxrQkFBa0Isa0NBQWtDLGlCQUFpQix3QkFBd0IsaUJBQWlCLHFCQUFxQixvQkFBb0IsdUNBQXVDLHNCQUFzQix5QkFBeUIsaUJBQWlCLEdBQUcsd0JBQXdCLHVDQUF1QyxxQkFBcUIsV0FBVyx3QkFBd0Isa0JBQWtCLDJCQUEyQixHQUFHLGFBQWEsa0JBQWtCLGtDQUFrQyx3QkFBd0IsR0FBRywyQkFBMkIsMkJBQTJCLHFCQUFxQixHQUFHLHFCQUFxQixrQ0FBa0MsaUJBQWlCLHdCQUF3QixpQkFBaUIscUJBQXFCLG9CQUFvQix1Q0FBdUMsc0JBQXNCLHlCQUF5QixpQkFBaUIsR0FBRywyQkFBMkIsdUNBQXVDLG1CQUFtQixXQUFXLHdCQUF3QixrQkFBa0IsdUJBQXVCLEdBQUcsU0FBUyxvQkFBb0Isb0NBQW9DLEdBQUcsbUJBQW1CLGtDQUFrQyxHQUFHLGdCQUFnQixzQkFBc0IsYUFBYSxhQUFhLGdCQUFnQixlQUFlLCtCQUErQixnQkFBZ0IsZUFBZSxnQ0FBZ0Msb0JBQW9CLDJCQUEyQiw2SEFBNkgsR0FBRywyQkFBMkIsc0JBQXNCLGNBQWMsZ0JBQWdCLGdCQUFnQixvQkFBb0IscUJBQXFCLG1CQUFtQixHQUFHLGlDQUFpQyxlQUFlLGVBQWUsYUFBYSxrQkFBa0IsMkhBQTJILEdBQUcsbUJBQW1CLG9CQUFvQixnQkFBZ0IsR0FBRyxvQkFBb0IsbUJBQW1CLGdCQUFnQixHQUFHLHdCQUF3QixtQkFBbUIsbUJBQW1CLG1CQUFtQix3QkFBd0IscUJBQXFCLEdBQUcsc0JBQXNCLGdCQUFnQixrQkFBa0Isb0JBQW9CLDJCQUEyQiw0QkFBNEIsa0JBQWtCLHdCQUF3Qix3QkFBd0IsZ0JBQWdCLHFCQUFxQixHQUFHLFVBQVUsZ0JBQWdCLHVCQUF1QixHQUFHLE1BQU0seUJBQXlCLG1CQUFtQixHQUFHLG9CQUFvQix5QkFBeUIsbUJBQW1CLEdBQUcsV0FBVyxrQ0FBa0MsaUJBQWlCLHdCQUF3QixpQkFBaUIscUJBQXFCLG9CQUFvQix1Q0FBdUMsc0JBQXNCLHlCQUF5QixpQkFBaUIsT0FBTyxpQkFBaUIsdUNBQXVDLG1CQUFtQixtQkFBbUI7QUFDMTlXO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUV3RDtBQUNsQjtBQUNTO0FBQ0g7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUFvQjtBQUN4QjtBQUNBO0FBQ0EsZ0NBQWdDLFFBQVE7QUFDeEM7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBVTtBQUNsQixvQkFBb0IsbURBQVM7QUFDN0IsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFJO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUFvQixlQUFlO0FBQ3ZDLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1EQUFnQjtBQUM1QixZQUFZLHNEQUFrQjtBQUM5Qix3QkFBd0Isc0RBQVk7QUFDcEM7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDJEQUFpQjtBQUNyQjtBQU1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdPbUI7QUFDbUQ7QUFDRztBQUNiO0FBQ0w7QUFDeEQsV0FBVyx5QkFBeUI7QUFDcEM7O0FBRUE7QUFDQTtBQUNBLElBQUksdUVBQXNCO0FBQzFCLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFVO0FBQ2QsSUFBSSx3REFBVTtBQUNkLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFjO0FBQ2xCLElBQUksa0RBQVU7QUFDZCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxJQUFJLDhEQUFvQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlEQUFVLElBQUk7QUFDMUIsWUFBWSwyREFBaUI7QUFDN0I7QUFDQSxvQkFBb0IsdURBQWE7QUFDakMsK0RBQStELGtEQUFRO0FBQ3ZFO0FBQ0EsZ0JBQWdCLGdFQUFrQjtBQUNsQztBQUNBLGdCQUFnQix5REFBZTtBQUMvQiwwREFBMEQsa0RBQVE7QUFDbEU7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVU7QUFDZCxJQUFJLGdEQUFRO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixvREFBSTtBQUMxQjs7QUFFQSxpQkFBaUIsb0RBQUk7QUFDckI7OztBQUdBLGlFQUFlLElBQUk7QUFDbkIseURBQVU7O0FBS1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0pEO0FBQ2tDO0FBQzhDO0FBQ2xEOztBQUU5QjtBQUNBO0FBQ0EsSUFBSSwyREFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2REFBbUI7QUFDL0I7QUFDQTtBQUNBLFlBQVksMERBQWdCLENBQUMsMkRBQWlCO0FBQzlDLHdCQUF3QixtREFBUztBQUNqQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLElBQUksMERBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkRBQW1CO0FBQy9CO0FBQ0E7QUFDQSxZQUFZLDBEQUFnQixDQUFDLDJEQUFpQjtBQUM5Qyx3QkFBd0IsbURBQVM7QUFDakMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEdpQjtBQUNJOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUkseURBQVU7QUFDZCxJQUFJLGdFQUFzQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkRBQW1CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7OztBQ3hEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxJQUFJOzs7Ozs7O1VDakJuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWFpbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2hvd0NvbXBsZXRlZC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvTG9vcC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYW5pdDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IGthbml0LCBzYW5zLXNlcmlmXFxufVxcbioge1xcbiAgb3V0bGluZTogMnB4IHJlZCBzb2xpZFxcbn1cXG5ib2R5IHtcXG4gIG1hcmdpbjogMFxcbn1cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciBhdXRvIC8gYXV0byAxZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjUwLCAxMDAlLCA4JSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgY29sb3I6IHdoaXRlXFxufVxcbi5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLmxlZnRTaWRlYmFyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMiA7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmclxcbiAgXFxufVxcbi52aWV3QWxsIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IGhzbCg0LCA1MyUsIDkwJSkgc29saWQgNXB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuLnZpZXdBbGw6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNCwgNTMlLCA5MCUpO1xcbiAgY29sb3I6IGJsYWNrXFxufVxcbi5wcm9qZWN0cyB7XFxuICBncmlkLXJvdzogMiAvIC0xO1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbn1cXG4uYWRkTmV3UHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBtYXJnaW46IDEwcHg7XFxuICBcXG59XFxuLmFkZE5ld1Byb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQsIDUzJSwgOTAlKTtcXG4gIGNvbG9yOiBibGFja1xcbn1cXG4uYWRkTmV3VG9kbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IGhzbCg0LCA1MyUsIDkwJSkgc29saWQgNXB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgXFxuICB9XFxuLmFkZE5ld1RvZG86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNCwgNTMlLCA5MCUpO1xcbiAgICBjb2xvcjogYmxhY2tcXG59XFxuLnByb2plY3RMaXN0Q29udGFpbmVyIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuXFxufVxcbi5wcm9qZWN0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IGhzbCg0LCA1MyUsIDkwJSkgc29saWQgM3B4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuLnByb2plY3RCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQsIDUzJSwgOTAlKTtcXG4gICAgY29sb3I6IGJsYWNrXFxufVxcblxcbi5tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gLTE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnRvZG9IZWFkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbi5jb21wbGV0ZWRUb2RvQ29udGFpbmVyIHtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG4uY29tcGxldGVkVG9kb0J0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcbi5jb21wbGV0ZWRUb2RvQnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0LCA1MyUsIDkwJSk7XFxuICBjb2xvcjogYmxhY2tcXG59XFxuLmZvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLnRvZG8uY29tcGxldGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG4ub3ZlcmxheUZvcm0ge1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB0b3A6NTB2aDtcXG4gIGxlZnQ6MHB4O1xcbiAgd2lkdGg6MTAwdnc7XFxuICBoZWlnaHQ6MHZoO1xcbiAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuOCk7XFxuICB6LWluZGV4OiAtMTtcXG4gIG9wYWNpdHk6IDA7XFxuICBwYWRkaW5nOiA4MHB4IDUwcHggMHB4IDEwcHg7XFxuICBvdmVyZmxvdzpzY3JvbGw7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdHJhbnNpdGlvbjogdG9wIDUwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgIGhlaWdodCAwbXMgZWFzZS1pbi1vdXQgNTAwbXM7XFxufVxcbi5vdmVybGF5Rm9ybSAuY2xvc2VGb3JtIHtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgcmlnaHQ6IDQwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuYm9keS5hY3RpdmVGb3JtIC5vdmVybGF5Rm9ybXtcXG4gIHotaW5kZXg6IDI7XFxuICBvcGFjaXR5OiAxO1xcbiAgdG9wOiAwcHg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdHJhbnNpdGlvbjogdG9wIDUwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgIGhlaWdodCAwbXMgZWFzZS1pbi1vdXQgMG1zO1xcbn1cXG4ub3ZlcmxheUZvcm0gaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5vdmVybGF5Rm9ybSBwIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5vdmVybGF5Rm9ybSBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgY29sb3I6ICNlYjVlMjg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLm92ZXJsYXlGb3JtIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTdweDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5oMiB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiAjZWI1ZTI4O1xcbn1cXG4uY3VycmVudFByb2plY3RzIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbiNzdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogaHNsKDQsIDUzJSwgOTAlKSBzb2xpZCA1cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgXFxufVxcbiNzdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQsIDUzJSwgOTAlKTtcXG4gIGNvbG9yOiBibGFja1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1Q7QUFDRjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiO0FBQ0Y7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2I7O0FBRUY7QUFDQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDO0FBQ0Y7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsWUFBWTs7QUFFZDtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDO0FBQ0Y7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFlBQVk7O0VBRWQ7QUFDRjtJQUNJLGtDQUFrQztJQUNsQztBQUNKO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7O0FBRWxCO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtDQUFrQztJQUNoQztBQUNKOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtDQUFrQztFQUNsQztBQUNGO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsUUFBUTtFQUNSLFFBQVE7RUFDUixXQUFXO0VBQ1gsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCOzswQ0FFd0M7QUFDMUM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLFFBQVE7RUFDUixhQUFhO0VBQ2I7O3dDQUVzQztBQUN4QztBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsWUFBWTs7QUFFZDtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FuaXQ6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBrYW5pdCwgc2Fucy1zZXJpZlxcbn1cXG4qIHtcXG4gIG91dGxpbmU6IDJweCByZWQgc29saWRcXG59XFxuYm9keSB7XFxuICBtYXJnaW46IDBcXG59XFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogYXV0byAxZnIgYXV0byAvIGF1dG8gMWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI1MCwgMTAwJSwgOCUpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGNvbG9yOiB3aGl0ZVxcbn1cXG4uaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbi5sZWZ0U2lkZWJhciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDIgO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnJcXG4gIFxcbn1cXG4udmlld0FsbCB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcbi52aWV3QWxsOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQsIDUzJSwgOTAlKTtcXG4gIGNvbG9yOiBibGFja1xcbn1cXG4ucHJvamVjdHMge1xcbiAgZ3JpZC1yb3c6IDIgLyAtMTtcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxuLmFkZE5ld1Byb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogaHNsKDQsIDUzJSwgOTAlKSBzb2xpZCA1cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgXFxufVxcbi5hZGROZXdQcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0LCA1MyUsIDkwJSk7XFxuICBjb2xvcjogYmxhY2tcXG59XFxuLmFkZE5ld1RvZG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDVweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIFxcbiAgfVxcbi5hZGROZXdUb2RvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQsIDUzJSwgOTAlKTtcXG4gICAgY29sb3I6IGJsYWNrXFxufVxcbi5wcm9qZWN0TGlzdENvbnRhaW5lciB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcblxcbn1cXG4ucHJvamVjdEJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDNweDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcbi5wcm9qZWN0QnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0LCA1MyUsIDkwJSk7XFxuICAgIGNvbG9yOiBibGFja1xcbn1cXG5cXG4ubWFpbiB7XFxuICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi50b2RvSGVhZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG4uY29tcGxldGVkVG9kb0NvbnRhaW5lciB7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuLmNvbXBsZXRlZFRvZG9CdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogaHNsKDQsIDUzJSwgOTAlKSBzb2xpZCA1cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG4uY29tcGxldGVkVG9kb0J0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNCwgNTMlLCA5MCUpO1xcbiAgY29sb3I6IGJsYWNrXFxufVxcbi5mb290ZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi50b2RvLmNvbXBsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuLm92ZXJsYXlGb3JtIHtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgdG9wOjUwdmg7XFxuICBsZWZ0OjBweDtcXG4gIHdpZHRoOjEwMHZ3O1xcbiAgaGVpZ2h0OjB2aDtcXG4gIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjgpO1xcbiAgei1pbmRleDogLTE7XFxuICBvcGFjaXR5OiAwO1xcbiAgcGFkZGluZzogODBweCA1MHB4IDBweCAxMHB4O1xcbiAgb3ZlcmZsb3c6c2Nyb2xsO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRyYW5zaXRpb246IHRvcCA1MDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgIG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQsXFxuICAgICAgICAgICAgICBoZWlnaHQgMG1zIGVhc2UtaW4tb3V0IDUwMG1zO1xcbn1cXG4ub3ZlcmxheUZvcm0gLmNsb3NlRm9ybSB7XFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gIHRvcDogMjBweDtcXG4gIHJpZ2h0OiA0MHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbmJvZHkuYWN0aXZlRm9ybSAub3ZlcmxheUZvcm17XFxuICB6LWluZGV4OiAyO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRvcDogMHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHRyYW5zaXRpb246IHRvcCA1MDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgIG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQsXFxuICAgICAgICAgICAgICBoZWlnaHQgMG1zIGVhc2UtaW4tb3V0IDBtcztcXG59XFxuLm92ZXJsYXlGb3JtIGgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ub3ZlcmxheUZvcm0gcCB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ub3ZlcmxheUZvcm0gbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGNvbG9yOiAjZWI1ZTI4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5vdmVybGF5Rm9ybSBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE3cHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbnNlbGVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuaDIge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjb2xvcjogI2ViNWUyODtcXG59XFxuLmN1cnJlbnRQcm9qZWN0cyB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4jc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IGhzbCg0LCA1MyUsIDkwJSkgc29saWQgNXB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIFxcbn1cXG4jc3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0LCA1MyUsIDkwJSk7XFxuICBjb2xvcjogYmxhY2tcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyAvLyBET00gbWFuaXB1bGF0aW9uIGZvciBpbnB1dCBuZXcgdG9kbyBmb3JtIGFuZCBuZXcgcHJvamVjdCBmb3JtXG5cbmltcG9ydCB7IGNsZWFyUHJvamVjdExpc3QsIHJlZnJlc2hQcm9qZWN0TGlzdCB9IGZyb20gXCIuXCJcbmltcG9ydCB1cGRhdGVNYWluIGZyb20gXCIuL21haW5Db250ZW50XCJcbmltcG9ydCBUb2RvLCB7IHRvZG9BcnJheSB9IGZyb20gXCIuL3RvZG9PYmplY3RzXCJcbmltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gXCIuL3RvZG9PYmplY3RzXCJcblxuLy8qTkVXIFRPRE8gRk9STVxuZnVuY3Rpb24gdG9kb0Zvcm0gKCl7XG4gICAgLy8gY29udGFpbmVyIGVsZW1lbnRzIGZvciBmb3JtXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybVwiKVxuICAgIGNvbnN0IG92ZXJsYXlGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG92ZXJsYXlGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJvdmVybGF5Rm9ybVwiKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQob3ZlcmxheUZvcm0pXG4gICAgLy8gY2xvc2UgZm9ybSAneCcgYnV0dG9uXG4gICAgY29uc3QgY2xvc2VGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNsb3NlRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiY2xvc2VGb3JtXCIpXG4gICAgY2xvc2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZUZvcm0oKTtcbiAgICAgICAgcmVtb3ZlRm9ybSgpO1xuICAgIH0pXG4gICAgY2xvc2VGb3JtLmlubmVySFRNTCA9IFwiJnRpbWVzXCJcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChjbG9zZUZvcm0pXG4gICAgLy8gZm9ybSBoZWFkZXJcbiAgICBjb25zdCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgZm9ybUhlYWRlci50ZXh0Q29udGVudCA9IFwiQWRkIGEgbmV3IFRvRG9cIlxuICAgIG92ZXJsYXlGb3JtLmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpO1xuXG4gICAgLy8gZm9ybSBlbGVtZW50ICdOYW1lJyBjb250YWluZXIgXG4gICAgY29uc3QgZm9ybUVsZW1lbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZvcm1FbGVtZW50TmFtZS5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUVsZW1lbnRcIilcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudE5hbWUpXG4gICAgLy8gJ05hbWUnIGlucHV0IGZpZWxkcyAtIHRleHRyXG4gICAgY29uc3QgZm9ybU5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGZvcm1OYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiTmFtZVwiKVxuICAgIGZvcm1OYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWUgb2YgVG9Eb1wiO1xuICAgIGNvbnN0IGZvcm1OYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBmb3JtTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpXG4gICAgZm9ybU5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm1OYW1lXCIpXG4gICAgZm9ybUVsZW1lbnROYW1lLmFwcGVuZChmb3JtTmFtZUxhYmVsLCBmb3JtTmFtZUlucHV0KTtcbiAgICBcbiAgICAvLyBmb3JtICdQcm9qZWN0JyBjb250YWluZXJcbiAgICBjb25zdCBmb3JtRWxlbWVudFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZm9ybUVsZW1lbnRQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtRWxlbWVudFwiKVxuICAgIG92ZXJsYXlGb3JtLmFwcGVuZENoaWxkKGZvcm1FbGVtZW50UHJvamVjdClcbiAgICAvLyAnUHJvamVjdCcgaW5wdXQgZmllbGRzIC0gRHJvcGRvd25cbiAgICBjb25zdCBmb3JtUHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgZm9ybVByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qZWN0SW5wdXRcIilcbiAgICBmb3JtUHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJTZWxlY3QgcHJvamVjdDpcIjtcbiAgICBjb25zdCBmb3JtUHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKVxuICAgIGZvcm1Qcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3RzXCIpXG4gICAgZm9ybVByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RJbnB1dFwiKVxuICAgIGZvcm1FbGVtZW50UHJvamVjdC5hcHBlbmQoZm9ybVByb2plY3RMYWJlbCwgZm9ybVByb2plY3RJbnB1dCk7XG4gICAgLy8gbG9vcCB0aHJvdWdoIHByb2plY3QgYXJyYXkgdG8gZ3JhYiB0aGUgcHJvamVjdHMgZm9yIHRoZSBkcm9wZG93blxuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe1xuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgICAgICBvcHRpb24udmFsdWUgPSBlbGVtZW50O1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBgJHtlbGVtZW50fWBcbiAgICAgICAgZm9ybVByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIC8vIGZvcm0gJ3ByaW9yaXR5JyBjb250YWluZXJcbiAgICBjb25zdCBmb3JtRWxlbWVudFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZvcm1FbGVtZW50UHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZShcImZvcm1FbGVtZW50XCIpXG4gICAgb3ZlcmxheUZvcm0uYXBwZW5kQ2hpbGQoZm9ybUVsZW1lbnRQcmlvcml0eSlcbiAgICAvLyAnUHJpb3JpdHknIGlucHV0IGZpZWxkcyAtIERyb3Bkb3duXG4gICAgY29uc3QgZm9ybVByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICBmb3JtUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eUlucHV0XCIpXG4gICAgZm9ybVByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlNlbGVjdCBwcmlvcml0eTpcIjtcbiAgICBjb25zdCBmb3JtUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcbiAgICBmb3JtUHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIilcbiAgICBmb3JtUHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5SW5wdXRcIilcbiAgICBmb3JtRWxlbWVudFByb2plY3QuYXBwZW5kKGZvcm1Qcmlvcml0eUxhYmVsLCBmb3JtUHJpb3JpdHlJbnB1dCk7XG4gICAgLy8gcHJpb3JpdHkgZHJvcGRvd24gb3B0aW9uc1xuICAgIGNvbnN0IHByaW9yaXR5VXJnZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgIHByaW9yaXR5VXJnZW50LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiVXJnZW50XCIpXG4gICAgcHJpb3JpdHlVcmdlbnQudGV4dENvbnRlbnQgPSBcIlVyZ2VudFwiXG4gICAgY29uc3QgcHJpb3JpdHlSb3V0aW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgIHByaW9yaXR5Um91dGluZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlJvdXRpbmVcIilcbiAgICBwcmlvcml0eVJvdXRpbmUudGV4dENvbnRlbnQgPSBcIlJvdXRpbmVcIlxuICAgIGNvbnN0IHByaW9yaXR5QmFja0J1cm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICBwcmlvcml0eUJhY2tCdXJuZXIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJCYWNrYnVybmVyXCIpXG4gICAgcHJpb3JpdHlCYWNrQnVybmVyLnRleHRDb250ZW50ID0gXCJCYWNrLUJ1cm5lclwiXG4gICAgZm9ybVByaW9yaXR5SW5wdXQuYXBwZW5kKHByaW9yaXR5VXJnZW50LCBwcmlvcml0eVJvdXRpbmUsIHByaW9yaXR5QmFja0J1cm5lcilcblxuICAgIC8vIGZvcm0gJ2RhdGUgZHVlJyBjb250YWluZXJcbiAgICBjb25zdCBmb3JtRWxlbWVudER1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBmb3JtRWxlbWVudER1ZS5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUVsZW1lbnRcIilcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudER1ZSlcbiAgICAvLyAnZGF0ZSBkdWUnIGlucHV0IGZpZWxkcyAtIGRhdGUgcGlja2VyXG4gICAgY29uc3QgZm9ybUR1ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgZm9ybUR1ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZUlucHV0XCIpXG4gICAgZm9ybUR1ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgYnk6XCJcbiAgICBjb25zdCBmb3JtRHVlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBmb3JtRHVlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIilcbiAgICBmb3JtRHVlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVJbnB1dFwiKVxuICAgIGZvcm1EdWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVlRGF0ZVwiKVxuICAgIGZvcm1EdWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKVxuICAgIGZvcm1FbGVtZW50RHVlLmFwcGVuZChmb3JtRHVlTGFiZWwsIGZvcm1EdWVJbnB1dClcblxuICAgIC8vIGZvcm0gc3VibWl0IGJ1dHRvbiBjb250YWluZXJcbiAgICBjb25zdCBmb3JtRWxlbWVudFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBmb3JtRWxlbWVudFN1Ym1pdC5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUVsZW1lbnRcIilcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudFN1Ym1pdClcbiAgICAvLyBzdWJtaXQgYnV0dG9uIFxuICAgIGNvbnN0IGZvcm1TdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgZm9ybVN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIE5ldyBUb2RvXCJcbiAgICBmb3JtU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGFkZFRvZG8oKTtcbiAgICAgICAgdG9nZ2xlRm9ybSgpO1xuICAgICAgICByZW1vdmVGb3JtKCk7XG4gICAgICAgIHVwZGF0ZU1haW4oKTtcbiAgICAgICAgY29uc29sZS5sb2codG9kb0FycmF5KVxuICAgIH0pIFxuXG4gICAgZm9ybVN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpXG4gICAgZm9ybVN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdFwiKVxuICAgIGZvcm1FbGVtZW50U3VibWl0LmFwcGVuZENoaWxkKGZvcm1TdWJtaXRCdXR0b24pXG4gICAgLy8gYXBwZW5kIHRoZSBlbnRpcmUgZm9ybSBjb250YWluZXIgdG8gdGhlIGJvZHkgd2hlbiBjYWxsZWRcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICBjb25zb2xlLmxvZyhcInRvZG9Gb3JtIGZ1bmN0aW9uIGlzIGZpcmluZ1wiKVxufVxuXG4vLyBmdW5jdGlvbiB0byB0b2dnbGUgY2xhc3MgdGhhdCBicmluZ3MgdXAgYSBuZXcgdG9kbyBmb3JtXG5mdW5jdGlvbiB0b2dnbGVGb3JtKCl7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlRm9ybVwiKVxuICAgIGNvbnNvbGUubG9nKFwidG9nZ2xlRm9ybSBpcyBmaXJpbmdcIilcbn1cbi8vIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjcmVhdGUgYSBuZXcgVG9kbyBmb3JtIGJ1dHRvbiBjbGlja2VkLCBhZnRlciBjb21wbGV0aW5nIHRoZSBmb3JtXG5mdW5jdGlvbiBhZGRUb2RvKG5hbWUsIHByb2plY3QsIHByaW9yaXR5LCBkdWVEYXRlKXtcbiAgICBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtTmFtZVwiKS52YWx1ZTtcbiAgICBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0SW5wdXRcIikudmFsdWU7XG4gICAgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5SW5wdXRcIikudmFsdWU7XG4gICAgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlSW5wdXRcIikudmFsdWU7XG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKG5hbWUscHJvamVjdCxwcmlvcml0eSxkdWVEYXRlKVxuICAgIG5ld1RvZG8ucHVzaFRvZG8oKTtcbn1cblxuLy8gZnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBmb3JtIGVsZW1lbnQgZnJvbSBET00gd2hlbiBjbG9zZWRcbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9ybVwiKVxuICAgIHdoaWxlIChlbGVtZW50cy5sZW5ndGggPiAwKXtcbiAgICAgICAgZWxlbWVudHNbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50c1swXSlcbiAgICB9XG59IFxuXG4vLyAqKk5FVyBQUk9KRUNUIEZPUk0gXG5mdW5jdGlvbiBuZXdQcm9qZWN0Rm9ybSgpe1xuICAgIC8vIGNvbnRhaW5lciBlbGVtZW50cyBmb3IgZm9ybVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImZvcm1cIilcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcInBvc3RcIilcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcImFjdGlvblwiLCBcIiNcIilcbiAgICBjb25zdCBvdmVybGF5Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBvdmVybGF5Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwib3ZlcmxheUZvcm1cIilcbiAgICBmb3JtLmFwcGVuZENoaWxkKG92ZXJsYXlGb3JtKVxuXG4gICAgLy8gY2xvc2UgZm9ybSAneCcgYnV0dG9uXG4gICAgY29uc3QgY2xvc2VGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNsb3NlRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiY2xvc2VGb3JtXCIpXG4gICAgY2xvc2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZUZvcm0oKTtcbiAgICAgICAgcmVtb3ZlRm9ybSgpO1xuICAgIH0pXG4gICAgY2xvc2VGb3JtLmlubmVySFRNTCA9IFwiJnRpbWVzXCJcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChjbG9zZUZvcm0pXG5cbiAgICAvLyBmb3JtIGhlYWRlclxuICAgIGNvbnN0IGZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBmb3JtSGVhZGVyLnRleHRDb250ZW50ID0gXCJBZGQgYSBuZXcgUHJvamVjdFwiXG4gICAgb3ZlcmxheUZvcm0uYXBwZW5kQ2hpbGQoZm9ybUhlYWRlcik7XG5cbiAgICAvLyBwcm9qZWN0IG5hbWUgaW5wdXRcbiAgICBjb25zdCBmb3JtRWxlbWVudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZm9ybUVsZW1lbnROYW1lLmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtRWxlbWVudFwiKVxuICAgIG92ZXJsYXlGb3JtLmFwcGVuZENoaWxkKGZvcm1FbGVtZW50TmFtZSlcbiAgICAvLyAnTmFtZScgaW5wdXQgZmllbGRzIC0gdGV4dFxuICAgIGNvbnN0IGZvcm1OYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICBmb3JtTmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIk5hbWVcIilcbiAgICBmb3JtTmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lIG9mIE5ldyBQcm9qZWN0XCI7XG4gICAgY29uc3QgZm9ybU5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGZvcm1OYW1lSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgIGZvcm1OYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdQcm9qZWN0SW5wdXRcIilcbiAgICBmb3JtTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpXG4gICAgZm9ybU5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibmV3UHJvamVjdElucHV0XCIpXG4gICAgZm9ybU5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5sZW5ndGhcIiwgXCIxXCIpXG4gICAgZm9ybU5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIzMFwiKVxuICAgIGZvcm1FbGVtZW50TmFtZS5hcHBlbmQoZm9ybU5hbWVMYWJlbCwgZm9ybU5hbWVJbnB1dCk7XG5cbiAgICAvLyBsaXN0IG9mIGN1cnJlbnQgUHJvamVjdHNcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY3VycmVudFByb2plY3RzLmNsYXNzTGlzdC50b2dnbGUoXCJjdXJyZW50UHJvamVjdHNcIilcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChjdXJyZW50UHJvamVjdHMpXG4gICAgY29uc3QgY3VycmVudFByb2plY3RzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcbiAgICBjdXJyZW50UHJvamVjdHNUaXRsZS50ZXh0Q29udGVudCA9IFwiTGlzdCBvZiBDdXJyZW50IFByb2plY3RzXCJcbiAgICBjdXJyZW50UHJvamVjdHMuYXBwZW5kKGN1cnJlbnRQcm9qZWN0c1RpdGxlKVxuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7Y3VycmVudFByb2plY3RzLmFwcGVuZChlbGVtZW50ICsgXCIsIFwiKVxuICAgIH0pXG5cbiAgICAvLyBzdWJtaXQgbmV3IHByb2plY3QgYnV0dG9uXG4gICAgY29uc3QgbmV3UHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBuZXdQcm9qZWN0U3VibWl0LmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtRWxlbWVudFwiKVxuICAgIG92ZXJsYXlGb3JtLmFwcGVuZENoaWxkKG5ld1Byb2plY3RTdWJtaXQpXG4gICAgLy8gc3VibWl0IGJ1dHRvbiBcbiAgICBjb25zdCBuZXdQcm9qZWN0U3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIG5ld1Byb2plY3RTdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIisgQWRkIE5ldyBQcm9qZWN0XCJcbiAgICBuZXdQcm9qZWN0U3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vIGNoZWNrIHRoYXQgdGhlIGlucHV0IGlzIHZhbGlkLCBiZWZvcmUgcnVubmluZyB0aGUgdG9nZ2xlIGFuZCByZW1vdmUgZnVuY3Rpb25zXG4gICAgICAgIGlmIChmb3JtTmFtZUlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICAgICAgcHVzaE5ld1Byb2plY3QoKTtcbiAgICAgICAgICAgIHRvZ2dsZUZvcm0oKTtcbiAgICAgICAgICAgIHJlbW92ZUZvcm0oKTsgXG4gICAgICAgICAgICBjbGVhclByb2plY3RMaXN0KCkgXG4gICAgICAgICAgICByZWZyZXNoUHJvamVjdExpc3QoKTsgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpXG4gICAgICAgIH0gIFxuICAgIH0pIFxuXG4gICAgbmV3UHJvamVjdFN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpXG4gICAgbmV3UHJvamVjdFN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdFwiKVxuICAgIG5ld1Byb2plY3RTdWJtaXQuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFN1Ym1pdEJ0bilcblxuXG4gICAgLy8gYXBwZW5kIGZvcm0gY29udGFpbmVyIHRvIGJvZHlcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uYXBwZW5kQ2hpbGQoZm9ybSlcbn1cblxuZnVuY3Rpb24gcHVzaE5ld1Byb2plY3QoKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdElucHV0XCIpXG4gICAgcHJvamVjdEFycmF5LnB1c2gobmV3UHJvamVjdC52YWx1ZSlcbn1cbmV4cG9ydCB7XG4gICAgdG9kb0Zvcm0sXG4gICAgdG9nZ2xlRm9ybSxcbiAgICByZW1vdmVGb3JtLFxuICAgIG5ld1Byb2plY3RGb3JtXG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5pbXBvcnQgVG9kbywgeyBmaWx0ZXJlZCwgcHJvamVjdEFycmF5LCB0b2RvQXJyYXkgfSBmcm9tIFwiLi90b2RvT2JqZWN0c1wiXG5pbXBvcnQgdXBkYXRlTWFpbiwgeyBjbGVhclRvZG9zLCB1cGRhdGVNYWluRmlsdGVyZWQgfSBmcm9tIFwiLi9tYWluQ29udGVudFwiXG5pbXBvcnQgeyB0b2dnbGVGb3JtLCB0b2RvRm9ybSwgbmV3UHJvamVjdEZvcm0gfSBmcm9tIFwiLi9mb3JtXCJcbmltcG9ydCB7IHJlbmRlclNob3dDb21wbGV0ZWRCdG4gfSBmcm9tIFwiLi9zaG93Q29tcGxldGVkXCJcbi8vIGltcG9ydCB7dG9kb0FycmF5LCBwcm9qZWN0QXJyYXl9IGZyb20gXCIuL3RvZG9PYmplY3RzXCJcbi8vIGdyYWJiaW5nIHRoZSByb290IG5vZGUgZWxlbWVudFxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIHJlZnJlc2hQcm9qZWN0TGlzdCgpXG4gICAgcmVuZGVyU2hvd0NvbXBsZXRlZEJ0bigpXG59KVxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG5cbi8vIGdyaWQgY29udGFpbmVyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5jb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImNvbnRhaW5lclwiKVxuXG4vLyBoZWFkZXJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGVhZGVyXCIpXG5oZWFkZXIudGV4dENvbnRlbnQgPSBcIlRvIERvXCJcblxuLy8gbGVmdCBzaWRlYmFyXG5jb25zdCBsZWZ0U2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmxlZnRTaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoXCJsZWZ0U2lkZWJhclwiKVxuY29uc3Qgdmlld0FsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG52aWV3QWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJUb2RvcygpO1xuICAgIHVwZGF0ZU1haW4oKTtcbn0pXG52aWV3QWxsLmNsYXNzTGlzdC50b2dnbGUoXCJ2aWV3QWxsXCIpXG52aWV3QWxsLnRleHRDb250ZW50ID0gXCJWaWV3IEFsbCBVbmNvbXBsZXRlZFwiXG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbnByb2plY3RzLmNsYXNzTGlzdC50b2dnbGUoXCJwcm9qZWN0c1wiKVxucHJvamVjdHMudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCJcbmNvbnN0IGFkZE5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG5hZGROZXdQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJhZGROZXdQcm9qZWN0XCIpXG5hZGROZXdQcm9qZWN0LnRleHRDb250ZW50ID0gXCIrIEFkZCBOZXcgUHJvamVjdFwiXG5hZGROZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICBuZXdQcm9qZWN0Rm9ybSgpXG4gICAgdG9nZ2xlRm9ybSgpXG59KVxucHJvamVjdHMuYXBwZW5kQ2hpbGQoYWRkTmV3UHJvamVjdClcblxuY29uc3QgcHJvamVjdEluc3RydWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbnByb2plY3RJbnN0cnVjdGlvbnMudGV4dENvbnRlbnQgPSBcIkxpc3Qgb2YgY3VycmVudCBwcm9qZWN0cywgY2xpY2sgdG8gdmlldyBUb2Rvc1wiXG5wcm9qZWN0SW5zdHJ1Y3Rpb25zLmNsYXNzTGlzdC50b2dnbGUoXCJwcm9qZWN0SW5zdHJ1Y3Rpb25zXCIpXG5wcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0SW5zdHJ1Y3Rpb25zKVxuXG4vLyBwcm9qZWN0cyBjb250YWluZXJcbmNvbnN0IHByb2plY3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxucHJvamVjdExpc3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInByb2plY3RMaXN0Q29udGFpbmVyXCIpXG5wcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdENvbnRhaW5lcilcblxuXG4vLyBsb29wIHRocm91Z2ggcHJvamVjdHMgdG8gbGlzdCB0aGVtIG9uIHRoZSBzaWRlIHBhbmVsXG5mdW5jdGlvbiByZWZyZXNoUHJvamVjdExpc3QoKSB7XG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgcHJvamVjdExpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbkNvbnRhaW5lcilcbiAgICAgICAgcHJvamVjdEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwicHJvamVjdEJ1dHRvbkNvbnRhaW5lclwiKVxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LnRvZ2dsZShcInByb2plY3RCdXR0b25cIilcbiAgICAgICAgcHJvamVjdExpc3QudGV4dENvbnRlbnQgPSBlbGVtZW50XG4gICAgICAgIHByb2plY3RMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0KVxuICAgICAgICAvLyBldmVudCBsaXN0ZW5lcnMgZm9yIGVhY2ggcHJvamVjdCBidXR0b25cbiAgICAgICAgcHJvamVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVG9kb3MoKTsgLy90aGlzIG9ubHkgd29ya3Mgb25jZSEgZG9lc250IGNsZWFyIGFmdGVyIHRoZSBmaXJzdCBjbGlja1xuICAgICAgICAgICAgdG9kb0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5wcm9qZWN0ID09IHByb2plY3RMaXN0LnRleHRDb250ZW50KXtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWQucHVzaChlbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbHRlcmVkIGFycmF5IGJlZm9yZSByZXNldFwiLCBmaWx0ZXJlZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdXBkYXRlTWFpbkZpbHRlcmVkKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZmlsdGVyZWQubGVuZ3RoID0gMFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlsdGVyZWQgYXJyYXkgYWZ0ZXIgcmVzZXRcIiwgZmlsdGVyZWQpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfSlcbn1cbi8vIGZ1bmN0aW9uIHRvIGNsZWFyIHRoZSBsaXN0IG9mIHByb2plY3RzIGJlZm9yZSBsb29waW5nIHRocm91Z2ggdG8gcHJldmVudCByZXBlYXRpbmcgb2YgZWxlbWVudHNcbmZ1bmN0aW9uIGNsZWFyUHJvamVjdExpc3QgKCkge1xuICAgIHdoaWxlKHByb2plY3RMaXN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpe1xuICAgICAgICBwcm9qZWN0TGlzdENvbnRhaW5lci5yZW1vdmVDaGlsZChwcm9qZWN0TGlzdENvbnRhaW5lci5sYXN0Q2hpbGQpXG4gICAgfVxufVxuXG4vLyBuZWVkIHRvIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgY2xlYXJzIHRoZSBmaWx0ZXJlZCBhcnJheVxuXG5cblxuLy8gbWFpbiBjb250ZW50XG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxubWFpbi5jbGFzc0xpc3QudG9nZ2xlKFwibWFpblwiKVxuY29uc3QgYWRkTmV3VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbmFkZE5ld1RvZG8uY2xhc3NMaXN0LnRvZ2dsZShcImFkZE5ld1RvZG9cIilcbmFkZE5ld1RvZG8udGV4dENvbnRlbnQgPSBcIisgQWRkIE5ldyBUb0RvXCJcbmFkZE5ld1RvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0b2dnbGVGb3JtKClcbiAgICB0b2RvRm9ybSgpXG59KVxuLy8gaGVhZCByb3cgb2YgVG9kb3NcbmNvbnN0IHRvZG9IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxudG9kb0hlYWQuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9IZWFkXCIpXG5jb25zdCB0b2RvSGVhZFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5jb25zdCB0b2RvSGVhZFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuY29uc3QgdG9kb0hlYWREdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5jb25zdCB0b2RvSGVhZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5jb25zdCB0b2RvSGVhZENvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuLy8gaGVhZCByb3cgY2xhc3MgdG9nZ2xlc1xudG9kb0hlYWRUb2RvLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvSGVhZEl0ZW1cIilcbnRvZG9IZWFkUHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9IZWFkSXRlbVwiKVxudG9kb0hlYWREdWUuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9IZWFkSXRlbVwiKVxudG9kb0hlYWRQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvSGVhZEl0ZW1cIilcbnRvZG9IZWFkQ29tcGxldGUuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9IZWFkSXRlbVwiKVxuLy9oZWFkIHJvdyB0ZXh0IGNvbnRlbnRzXG50b2RvSGVhZFRvZG8udGV4dENvbnRlbnQgPSBcIlRvRG9cIlxudG9kb0hlYWRQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIlxudG9kb0hlYWREdWUudGV4dENvbnRlbnQgPSBcIkR1ZSBCeVwiXG50b2RvSGVhZFByb2plY3QudGV4dENvbnRlbnQgPSBcIlByb2plY3RcIlxudG9kb0hlYWRDb21wbGV0ZS50ZXh0Q29udGVudCA9IFwiTWFyayBhcyBDb21wbGV0ZVwiXG4vLyBhcHBlbmRpbmcgVG9kbyBoZWFkIHRvIG1haW5cbm1haW4uYXBwZW5kQ2hpbGQodG9kb0hlYWQpXG50b2RvSGVhZC5hcHBlbmQodG9kb0hlYWRUb2RvLCB0b2RvSGVhZFByaW9yaXR5LCB0b2RvSGVhZER1ZSwgdG9kb0hlYWRQcm9qZWN0LCB0b2RvSGVhZENvbXBsZXRlKVxuXG5jb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxudG9kb0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb0NvbnRhaW5lclwiKVxubWFpbi5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKVxubWFpbi5pbnNlcnRCZWZvcmUoYWRkTmV3VG9kbywgbWFpbi5maXJzdENoaWxkKVxuXG4vLyBmb290ZXJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmZvb3Rlci5jbGFzc0xpc3QudG9nZ2xlKFwiZm9vdGVyXCIpXG5mb290ZXIudGV4dENvbnRlbnQgPSBcIkNyZWF0ZWQgYnkgSm9yZGFuIFVsbWVyLCAyMDIyXCJcbi8vIGFwcGVuZGluZyB0byB0aGUgcGFyZW50IGVsZW1lbnRzXG5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbmNvbnRhaW5lci5hcHBlbmQoaGVhZGVyLCBsZWZ0U2lkZWJhciwgbWFpbiwgZm9vdGVyKVxubGVmdFNpZGViYXIuYXBwZW5kKHZpZXdBbGwsIHByb2plY3RzKVxuXG4vLyB0ZXN0aW5nIGEgcmFuZG9tIFRvZG9cbmNvbnN0IGdhcmRlbmluZyA9IG5ldyBUb2RvKFwiR2FyZGVuaW5nXCIsXCJHYXJkZW5pbmdcIixcIlVyZ2VudFwiLFwibW9uZGF5XCIpXG5nYXJkZW5pbmcucHVzaFRvZG8oKVxuXG5jb25zdCB3b3JrID0gbmV3IFRvZG8oXCJXb3JrXCIsIFwiV29ya1wiLCBcIlVyZ2VudFwiLCBcIlRvZGF5XCIpXG53b3JrLnB1c2hUb2RvKClcblxuXG5leHBvcnQgZGVmYXVsdCBtYWluXG51cGRhdGVNYWluKClcblxuZXhwb3J0IHtcbiAgICByZWZyZXNoUHJvamVjdExpc3QsXG4gICAgY2xlYXJQcm9qZWN0TGlzdFxufVxuXG5cblxuXG4iLCIvLyBpbXBvcnRpbmcgdGhlIGFycmF5cyBhbmQgdGhlIERPTSBlbGVtZW50XG5pbXBvcnQgdG9kb0xvb3AgZnJvbSBcIi4vdG9kb0xvb3BcIjtcbmltcG9ydCB7Y29tcGxldGVkVG9kb3MsIGZpbHRlcmVkLCBwcm9qZWN0QXJyYXksdG9kb0FycmF5IH0gZnJvbSBcIi4vdG9kb09iamVjdHNcIjtcbmltcG9ydCB0b2RvRm9ybSBmcm9tIFwiLi9mb3JtXCI7XG5cbi8vIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhbmQgYXBwZW5kIHRoZSBtYWluIHNlY3Rpb24gd2l0aCBlYWNoIHRvZG9cbmZ1bmN0aW9uIHVwZGF0ZU1haW4gKCkge1xuICAgIHRvZG9BcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpXG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9Db250YWluZXJcIilcbiAgICAgICAgY29uc3QgdG9kb0hlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9IZWFkXCIpXG4gICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHRvZG9Db21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHRvZG9Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICB0b2RvLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvXCIpXG4gICAgICAgIHRvZG9Db21wbGV0ZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb0NvbXBsZXRCdG5cIilcbiAgICAgICAgdG9kb0NvbXBsZXRlQnRuLnRleHRDb250ZW50ID0gXCLinJTvuI9cIlxuICAgICAgICB0b2RvTmFtZS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb05hbWVcIilcbiAgICAgICAgdG9kb1ByaW9yaXR5LmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvUHJpb3JpdHlcIilcbiAgICAgICAgdG9kb1Byb2plY3QuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9Qcm9qZWN0XCIpXG4gICAgICAgIHRvZG9IZWFkLmFmdGVyKHRvZG9Db250YWluZXIpXG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG8pXG4gICAgICAgIHRvZG8uYXBwZW5kKHRvZG9OYW1lLCB0b2RvUHJpb3JpdHksIHRvZG9EdWVEYXRlLCB0b2RvUHJvamVjdCwgdG9kb0NvbXBsZXRlQnRuKVxuICAgICAgICAvLyBldmVudGxpc3RlbmVyIGZvciBjb21wbGV0ZSBidXR0b25cbiAgICAgICAgdG9kb0NvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBwdXNoIHRvZG8gdG8gY29tcGxldGVkIFxuICAgICAgICAgICAgY29tcGxldGVkVG9kb3MucHVzaChlbGVtZW50KVxuICAgICAgICAgICAgLy8gbG9naWMgaGVyZSB0byByZW1vdmUgdGhpcyBzaW5nbGUgaW5zdGFuY2VcbiAgICAgICAgICAgIHRvZG9Db250YWluZXIucmVtb3ZlQ2hpbGQodG9kbylcbiAgICAgICAgICAgIHRvZG9BcnJheS5zcGxpY2UodG9kb0FycmF5LmluZGV4T2YoZWxlbWVudCksIDEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9kb0FycmF5KVxuICAgICAgICB9KVxuICAgICAgICAvLyBsb29wcyBvdmVyIGVhY2ggb2JqZWN0IGFuZCBleHRyYWN0cyB0aGUgdmFsdWUuICh0ZXh0Q29udGVudCBmb3Igbm93LCB3aWxsIGNoYW5nZSBsYXRlcilcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGVsZW1lbnQpe1xuICAgICAgICAgICAgdG9kb05hbWUudGV4dENvbnRlbnQgPSBlbGVtZW50Lm5hbWU7XG4gICAgICAgICAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBlbGVtZW50LnByaW9yaXR5O1xuICAgICAgICAgICAgdG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSBlbGVtZW50LmR1ZURhdGU7XG4gICAgICAgICAgICB0b2RvUHJvamVjdC50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJvamVjdDtcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kKClcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVNYWluRmlsdGVyZWQgKCkge1xuICAgIGZpbHRlcmVkLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIilcbiAgICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0NvbnRhaW5lclwiKVxuICAgICAgICBjb25zdCB0b2RvSGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0hlYWRcIilcbiAgICAgICAgY29uc3QgdG9kb0NvbXBsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdG9kb1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9cIilcbiAgICAgICAgdG9kb0NvbXBsZXRlQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvQ29tcGxldEJ0blwiKVxuICAgICAgICB0b2RvQ29tcGxldGVCdG4udGV4dENvbnRlbnQgPSBcIuKclO+4j1wiXG4gICAgICAgIHRvZG9OYW1lLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvTmFtZVwiKVxuICAgICAgICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9Qcmlvcml0eVwiKVxuICAgICAgICB0b2RvUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb1Byb2plY3RcIilcbiAgICAgICAgdG9kb0hlYWQuYWZ0ZXIodG9kb0NvbnRhaW5lcilcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQodG9kbylcbiAgICAgICAgdG9kby5hcHBlbmQodG9kb05hbWUsIHRvZG9Qcmlvcml0eSwgdG9kb0R1ZURhdGUsIHRvZG9Qcm9qZWN0LCB0b2RvQ29tcGxldGVCdG4pXG4gICAgICAgIC8vIGV2ZW50bGlzdGVuZXIgZm9yIGNvbXBsZXRlIGJ1dHRvblxuICAgICAgICB0b2RvQ29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIC8vIHB1c2ggdGhlIHRvZG8gT2JqZWN0IGludG8gdGhlIGNvbXBsZXRlZCB0b2Rvc1xuICAgICAgICAgICAgY29tcGxldGVkVG9kb3MucHVzaChlbGVtZW50KVxuICAgICAgICAgICAgLy8gbG9naWMgaGVyZSB0byByZW1vdmUgdGhpcyBzaW5nbGUgaW5zdGFuY2VcbiAgICAgICAgICAgIHRvZG9Db250YWluZXIucmVtb3ZlQ2hpbGQodG9kbylcbiAgICAgICAgICAgIHRvZG9BcnJheS5zcGxpY2UodG9kb0FycmF5LmluZGV4T2YoZWxlbWVudCksIDEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9kb0FycmF5KVxuICAgICAgICB9KVxuICAgICAgICAvLyBsb29wcyBvdmVyIGVhY2ggb2JqZWN0IGFuZCBleHRyYWN0cyB0aGUgdmFsdWUuICh0ZXh0Q29udGVudCBmb3Igbm93LCB3aWxsIGNoYW5nZSBsYXRlcilcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGVsZW1lbnQpe1xuICAgICAgICAgICAgdG9kb05hbWUudGV4dENvbnRlbnQgPSBlbGVtZW50Lm5hbWU7XG4gICAgICAgICAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBlbGVtZW50LnByaW9yaXR5O1xuICAgICAgICAgICAgdG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSBlbGVtZW50LmR1ZURhdGU7XG4gICAgICAgICAgICB0b2RvUHJvamVjdC50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJvamVjdDtcbiAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKClcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cblxuLy8gZnVuY3Rpb24gdG8gY2xlYXIgdGhlIHRvZG8gbGlzdCwgdXNlZCB3aGVuIGZpbHRlcmluZyBieSBwcm9qZWN0cyBOT1QgV09SS0lOR1xuZnVuY3Rpb24gY2xlYXJUb2RvcyAoKSB7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0NvbnRhaW5lclwiKVxuICAgIHdoaWxlICh0b2RvQ29udGFpbmVyLmZpcnN0Q2hpbGQpe1xuICAgICAgICB0b2RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvZG9Db250YWluZXIubGFzdENoaWxkKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0b2RvQ29udGFpbmVyLCBcImNsZWFyVG9kb3MgaXMgZmlyaW5nXCIpXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlTWFpblxuZXhwb3J0IHtcbiAgICB1cGRhdGVNYWluRmlsdGVyZWQsXG4gICAgY2xlYXJUb2Rvcyxcbn0iLCJpbXBvcnQgeyBjbGVhclRvZG9zIH0gZnJvbSBcIi4vbWFpbkNvbnRlbnRcIlxuaW1wb3J0IHsgY29tcGxldGVkVG9kb3MgfSBmcm9tIFwiLi90b2RvT2JqZWN0c1wiXG5cbmZ1bmN0aW9uIHJlbmRlclNob3dDb21wbGV0ZWRCdG4oKSB7XG4gICAgLy8gY3JlYXRlIGNvbnRhaW5lciBmb3IgQ29tcGxldGVkIFRvRG9zIGJ1dHRvbiBhbmQgYnV0dG9uIFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIilcbiAgICBjb25zdCBjb21wbGV0ZWRUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbXBsZXRlZFRvZG9Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFRvZG9Db250YWluZXJcIilcbiAgICBjb25zdCBjb21wbGV0ZWRUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGNvbXBsZXRlZFRvZG9CdG4uY2xhc3NMaXN0LnRvZ2dsZShcImNvbXBsZXRlZFRvZG9CdG5cIilcbiAgICBjb21wbGV0ZWRUb2RvQnRuLnRleHRDb250ZW50ID0gXCJTaG93IENvbXBsZXRlZCBUb0Rvc1wiXG4gICAgY29tcGxldGVkVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZW5kZXJDb21wbGV0ZWQoKVxuICAgIH0pXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb21wbGV0ZWRUb2RvQ29udGFpbmVyKVxuICAgIGNvbXBsZXRlZFRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoY29tcGxldGVkVG9kb0J0bilcbn1cblxuZnVuY3Rpb24gcmVuZGVyQ29tcGxldGVkKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIilcbiAgICBjbGVhclRvZG9zKClcbiAgICBjb21wbGV0ZWRUb2Rvcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpXG4gICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9Db250YWluZXJcIilcbiAgICAgICAgY29uc3QgdG9kb0NvbXBsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdG9kb1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9cIilcbiAgICAgICAgdG9kby5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIpXG4gICAgICAgIHRvZG9OYW1lLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvTmFtZVwiKVxuICAgICAgICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9Qcmlvcml0eVwiKVxuICAgICAgICB0b2RvUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb1Byb2plY3RcIilcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKVxuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pXG4gICAgICAgIHRvZG8uYXBwZW5kKHRvZG9OYW1lLCB0b2RvUHJpb3JpdHksIHRvZG9EdWVEYXRlLCB0b2RvUHJvamVjdClcbiAgICAgICAgLy8gZXZlbnRsaXN0ZW5lciBmb3IgY29tcGxldGUgYnV0dG9uXG4gICAgICAgIHRvZG9Db21wbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gcHVzaCB0aGUgdG9kbyBPYmplY3QgaW50byB0aGUgY29tcGxldGVkIHRvZG9zXG4gICAgICAgICAgICBjb21wbGV0ZWRUb2Rvcy5wdXNoKGVsZW1lbnQpXG4gICAgICAgICAgICAvLyBsb2dpYyBoZXJlIHRvIHJlbW92ZSB0aGlzIHNpbmdsZSBpbnN0YW5jZVxuICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b2RvKVxuICAgICAgICAgICAgdG9kb0FycmF5LnNwbGljZSh0b2RvQXJyYXkuaW5kZXhPZihlbGVtZW50KSwgMSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvQXJyYXkpXG4gICAgICAgIH0pXG4gICAgICAgIC8vIGxvb3BzIG92ZXIgZWFjaCBvYmplY3QgYW5kIGV4dHJhY3RzIHRoZSB2YWx1ZS4gKHRleHRDb250ZW50IGZvciBub3csIHdpbGwgY2hhbmdlIGxhdGVyKVxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZWxlbWVudCl7XG4gICAgICAgICAgICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZTtcbiAgICAgICAgICAgIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJpb3JpdHk7XG4gICAgICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGVsZW1lbnQuZHVlRGF0ZTtcbiAgICAgICAgICAgIHRvZG9Qcm9qZWN0LnRleHRDb250ZW50ID0gZWxlbWVudC5wcm9qZWN0O1xuICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQoKVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7XG4gICAgcmVuZGVyU2hvd0NvbXBsZXRlZEJ0bixcbiAgICByZW5kZXJDb21wbGV0ZWRcbn0iLCIvLyBtYWtlIGEgZnVuY3Rpb24gdGhhdCBsb29wcyB0aHJvdWdoIHRoZSBvYmplY3Qgb24gY3JlYXRpb24gdG8gZmlsbCBpbiB0aGUgRE9NPyIsImxldCBwcm9qZWN0QXJyYXkgPSBbXCJHYXJkZW5pbmdcIiwgXCJXb3JrXCJdLy9wdXNoIHRoZSBwcm9qZWN0IG5hbWUgb2Ygd2hlbiBhIG5ldyB0b2RvIGlzIG1hZGUgaW4gaGVyZVxubGV0IHRvZG9BcnJheSA9IFtdIC8vcHVzaCBlYWNoIHRvZG8gb2JqZWN0IGludG8gdGhpcyBhcnJheSB0byBsaXN0IHRoZW0gZWFzaWVyXG5sZXQgZmlsdGVyZWQgPSBbXSAvL2luaXRpYWxpc2luZyBhbiBlbXB0eSBhcnJheSBmb3IgZmlsdGVyaW5nIHRvZG9zXG5sZXQgY29tcGxldGVkVG9kb3MgPSBbXSAvL2luaXRpYWxpc2luZyBhbiBhcnJheSB0byBob2xkIGNvbXBsZXRlZCB0b2Rvc1xuXG4vLyBmYWN0b3J5IGZ1bmN0aW9uIGZvciBuZXcgVG9kbyBvYmplY3RzXG5mdW5jdGlvbiBUb2RvIChuYW1lLCBwcm9qZWN0LCBwcmlvcml0eSwgZHVlRGF0ZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnB1c2hUb2RvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRvZG9BcnJheS5wdXNoKHRoaXMpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRvZG8gXG5leHBvcnQge1xuICAgIHByb2plY3RBcnJheSxcbiAgICB0b2RvQXJyYXksXG4gICAgZmlsdGVyZWQsXG4gICAgY29tcGxldGVkVG9kb3Ncbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=