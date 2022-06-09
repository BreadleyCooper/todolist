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
___CSS_LOADER_EXPORT___.push([module.id, "\n:root {\n  font-size: 18px;\n  margin: 0;\n  font-family: kanit, sans-serif\n}\n* {\n  border: 2px red solid\n}\nbody {\n  margin: 0\n}\n.container {\n  display: grid;\n  grid-template: auto 1fr auto / auto 1fr;\n  background-color: hsl(250, 100%, 8%);\n  height: 100vh;\n  color: white\n}\n.header {\n  grid-column: 1 / -1;\n  padding: 1.5rem;\n  font-size: 2rem;\n}\n.leftSidebar {\n  grid-column: 1 / 2 ;\n  padding: 2rem;\n  display: grid;\n  grid-template-rows: 1fr 4fr\n  \n}\n.viewAll {\n  grid-row: 1 / 2;\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n}\n.viewAll:hover{\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.projects {\n  grid-row: 2 / -1;\n  padding-top: 1.5rem;\n  display: grid;\n  grid-template-rows: auto 1fr;\n}\n.addNewProject {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n  \n}\n.addNewProject:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.addNewTodo {\n    background-color: transparent;\n    color: white;\n    border-radius: 10px;\n    height: 4rem;\n    transition: 0.5s;\n    cursor: pointer;\n    border: hsl(4, 53%, 90%) solid 5px;\n    font-size: 1.5rem;\n    font-family: inherit;\n    margin: 10px;\n    \n  }\n  .addNewTodo:hover {\n    background-color: hsl(4, 53%, 90%);\n    color: black\n  }\n.main {\n  grid-column: 2 / -1;\n  ;\n}\n.footer {\n  grid-column: 1 / -1;\n  padding: 1rem;\n  text-align: center;\n}\n.todo {\n    display: flex;\n    justify-content: space-around;\n}\n.todo.completed {\n  text-decoration: line-through;\n}\n.overlayForm {\n  position:absolute;\n  top:50vh;\n  left:0px;\n  width:100vw;\n  height:0vh;\n  background:rgba(0,0,0,0.8);\n  z-index: -1;\n  opacity: 0;\n  padding: 80px 50px 0px 10px;\n  overflow:scroll;\n  box-sizing: border-box;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 500ms;\n}\n.overlayForm .closeForm {\n  position:absolute;\n  top: 20px;\n  right: 40px;\n  color: #fff;\n  font-size: 5rem;\n  font-weight: 600;\n  cursor:pointer;\n}\n\nbody.activeForm .overlayForm{\n  z-index: 2;\n  opacity: 1;\n  top: 0px;\n  height: 100vh;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 0ms;\n}\n.overlayForm h1 {\n  font-size: 3rem;\n  color: #fff;\n}\n\n.overlayForm p {\n  font-size: 2em;\n  color: #fff;\n}\n\n.overlayForm label {\n  display: block;\n  font-size: 2em;\n  color: #eb5e28;\n  margin-bottom: 20px;\n  font-weight: 500;\n}\n.overlayForm input {\n  width: 100%;\n  padding: 17px;\n  font-size: 25px;\n  border: 4px solid #fff;\n  background: transparent;\n  outline: none;\n  border-radius: 10px;\n  margin-bottom: 50px;\n  color: #fff;\n  font-weight: 500;\n}\nselect {\n  width: 100%;\n  font-size: inherit;\n}\nh2 {\n  font-family: inherit;\n  color: #eb5e28;\n}\n.currentProjects {\n  font-family: inherit;\n  color: #ffffff;\n}\n#submit {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n  \n}\n#submit:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AAEA;EACE,eAAe;EACf,SAAS;EACT;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,aAAa;EACb;AACF;AACA;EACE,mBAAmB;EACnB,eAAe;EACf,eAAe;AACjB;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb;;AAEF;AACA;EACE,eAAe;EACf,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,kCAAkC;EAClC;AACF;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,4BAA4B;AAC9B;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;;AAEd;AACA;EACE,kCAAkC;EAClC;AACF;AACA;IACI,6BAA6B;IAC7B,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,kCAAkC;IAClC,iBAAiB;IACjB,oBAAoB;IACpB,YAAY;;EAEd;EACA;IACE,kCAAkC;IAClC;EACF;AACF;EACE,mBAAmB;;AAErB;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,kBAAkB;AACpB;AACA;IACI,aAAa;IACb,6BAA6B;AACjC;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,iBAAiB;EACjB,QAAQ;EACR,QAAQ;EACR,WAAW;EACX,UAAU;EACV,0BAA0B;EAC1B,WAAW;EACX,UAAU;EACV,2BAA2B;EAC3B,eAAe;EACf,sBAAsB;EACtB;;0CAEwC;AAC1C;AACA;EACE,iBAAiB;EACjB,SAAS;EACT,WAAW;EACX,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,UAAU;EACV,QAAQ;EACR,aAAa;EACb;;wCAEsC;AACxC;AACA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,cAAc;EACd,cAAc;EACd,cAAc;EACd,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,oBAAoB;EACpB,cAAc;AAChB;AACA;EACE,oBAAoB;EACpB,cAAc;AAChB;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;;AAEd;AACA;EACE,kCAAkC;EAClC;AACF","sourcesContent":["\n@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n:root {\n  font-size: 18px;\n  margin: 0;\n  font-family: kanit, sans-serif\n}\n* {\n  border: 2px red solid\n}\nbody {\n  margin: 0\n}\n.container {\n  display: grid;\n  grid-template: auto 1fr auto / auto 1fr;\n  background-color: hsl(250, 100%, 8%);\n  height: 100vh;\n  color: white\n}\n.header {\n  grid-column: 1 / -1;\n  padding: 1.5rem;\n  font-size: 2rem;\n}\n.leftSidebar {\n  grid-column: 1 / 2 ;\n  padding: 2rem;\n  display: grid;\n  grid-template-rows: 1fr 4fr\n  \n}\n.viewAll {\n  grid-row: 1 / 2;\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n}\n.viewAll:hover{\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.projects {\n  grid-row: 2 / -1;\n  padding-top: 1.5rem;\n  display: grid;\n  grid-template-rows: auto 1fr;\n}\n.addNewProject {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n  \n}\n.addNewProject:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.addNewTodo {\n    background-color: transparent;\n    color: white;\n    border-radius: 10px;\n    height: 4rem;\n    transition: 0.5s;\n    cursor: pointer;\n    border: hsl(4, 53%, 90%) solid 5px;\n    font-size: 1.5rem;\n    font-family: inherit;\n    margin: 10px;\n    \n  }\n  .addNewTodo:hover {\n    background-color: hsl(4, 53%, 90%);\n    color: black\n  }\n.main {\n  grid-column: 2 / -1;\n  ;\n}\n.footer {\n  grid-column: 1 / -1;\n  padding: 1rem;\n  text-align: center;\n}\n.todo {\n    display: flex;\n    justify-content: space-around;\n}\n.todo.completed {\n  text-decoration: line-through;\n}\n.overlayForm {\n  position:absolute;\n  top:50vh;\n  left:0px;\n  width:100vw;\n  height:0vh;\n  background:rgba(0,0,0,0.8);\n  z-index: -1;\n  opacity: 0;\n  padding: 80px 50px 0px 10px;\n  overflow:scroll;\n  box-sizing: border-box;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 500ms;\n}\n.overlayForm .closeForm {\n  position:absolute;\n  top: 20px;\n  right: 40px;\n  color: #fff;\n  font-size: 5rem;\n  font-weight: 600;\n  cursor:pointer;\n}\n\nbody.activeForm .overlayForm{\n  z-index: 2;\n  opacity: 1;\n  top: 0px;\n  height: 100vh;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 0ms;\n}\n.overlayForm h1 {\n  font-size: 3rem;\n  color: #fff;\n}\n\n.overlayForm p {\n  font-size: 2em;\n  color: #fff;\n}\n\n.overlayForm label {\n  display: block;\n  font-size: 2em;\n  color: #eb5e28;\n  margin-bottom: 20px;\n  font-weight: 500;\n}\n.overlayForm input {\n  width: 100%;\n  padding: 17px;\n  font-size: 25px;\n  border: 4px solid #fff;\n  background: transparent;\n  outline: none;\n  border-radius: 10px;\n  margin-bottom: 50px;\n  color: #fff;\n  font-weight: 500;\n}\nselect {\n  width: 100%;\n  font-size: inherit;\n}\nh2 {\n  font-family: inherit;\n  color: #eb5e28;\n}\n.currentProjects {\n  font-family: inherit;\n  color: #ffffff;\n}\n#submit {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n  \n}\n#submit:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFVO0FBQ2xCLG9CQUFvQixtREFBUztBQUM3QixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0RBQUk7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQW9CLGVBQWU7QUFDdkMsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQWdCO0FBQzVCLFlBQVksc0RBQWtCO0FBQzlCLHdCQUF3QixzREFBWTtBQUNwQztBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksMkRBQWlCO0FBQ3JCO0FBTUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNU9tQjtBQUNtRDtBQUNHO0FBQ2I7QUFDTDtB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Q0w7Ozs7Ozs7Ozs7OztBQ3hEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxJQUFJOzs7Ozs7O1VDakJuQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWFpbkNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc2hvd0NvbXBsZXRlZC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvTG9vcC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYW5pdDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IGthbml0LCBzYW5zLXNlcmlmXFxufVxcbioge1xcbiAgYm9yZGVyOiAycHggcmVkIHNvbGlkXFxufVxcbmJvZHkge1xcbiAgbWFyZ2luOiAwXFxufVxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IGF1dG8gMWZyIGF1dG8gLyBhdXRvIDFmcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgyNTAsIDEwMCUsIDglKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogd2hpdGVcXG59XFxuLmhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4ubGVmdFNpZGViYXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyIDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyXFxuICBcXG59XFxuLnZpZXdBbGwge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogaHNsKDQsIDUzJSwgOTAlKSBzb2xpZCA1cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG4udmlld0FsbDpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0LCA1MyUsIDkwJSk7XFxuICBjb2xvcjogYmxhY2tcXG59XFxuLnByb2plY3RzIHtcXG4gIGdyaWQtcm93OiAyIC8gLTE7XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxufVxcbi5hZGROZXdQcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IGhzbCg0LCA1MyUsIDkwJSkgc29saWQgNXB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIFxcbn1cXG4uYWRkTmV3UHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNCwgNTMlLCA5MCUpO1xcbiAgY29sb3I6IGJsYWNrXFxufVxcbi5hZGROZXdUb2RvIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogaHNsKDQsIDUzJSwgOTAlKSBzb2xpZCA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBcXG4gIH1cXG4gIC5hZGROZXdUb2RvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQsIDUzJSwgOTAlKTtcXG4gICAgY29sb3I6IGJsYWNrXFxuICB9XFxuLm1haW4ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXG4gIDtcXG59XFxuLmZvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRvZG8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLnRvZG8uY29tcGxldGVkIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG4ub3ZlcmxheUZvcm0ge1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB0b3A6NTB2aDtcXG4gIGxlZnQ6MHB4O1xcbiAgd2lkdGg6MTAwdnc7XFxuICBoZWlnaHQ6MHZoO1xcbiAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuOCk7XFxuICB6LWluZGV4OiAtMTtcXG4gIG9wYWNpdHk6IDA7XFxuICBwYWRkaW5nOiA4MHB4IDUwcHggMHB4IDEwcHg7XFxuICBvdmVyZmxvdzpzY3JvbGw7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdHJhbnNpdGlvbjogdG9wIDUwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgIGhlaWdodCAwbXMgZWFzZS1pbi1vdXQgNTAwbXM7XFxufVxcbi5vdmVybGF5Rm9ybSAuY2xvc2VGb3JtIHtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgcmlnaHQ6IDQwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuYm9keS5hY3RpdmVGb3JtIC5vdmVybGF5Rm9ybXtcXG4gIHotaW5kZXg6IDI7XFxuICBvcGFjaXR5OiAxO1xcbiAgdG9wOiAwcHg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdHJhbnNpdGlvbjogdG9wIDUwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgIGhlaWdodCAwbXMgZWFzZS1pbi1vdXQgMG1zO1xcbn1cXG4ub3ZlcmxheUZvcm0gaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5vdmVybGF5Rm9ybSBwIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5vdmVybGF5Rm9ybSBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgY29sb3I6ICNlYjVlMjg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLm92ZXJsYXlGb3JtIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTdweDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5oMiB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiAjZWI1ZTI4O1xcbn1cXG4uY3VycmVudFByb2plY3RzIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbiNzdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogaHNsKDQsIDUzJSwgOTAlKSBzb2xpZCA1cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgXFxufVxcbiNzdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQsIDUzJSwgOTAlKTtcXG4gIGNvbG9yOiBibGFja1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1Q7QUFDRjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiO0FBQ0Y7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2I7O0FBRUY7QUFDQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDO0FBQ0Y7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsWUFBWTs7QUFFZDtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDO0FBQ0Y7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFlBQVk7O0VBRWQ7RUFDQTtJQUNFLGtDQUFrQztJQUNsQztFQUNGO0FBQ0Y7RUFDRSxtQkFBbUI7O0FBRXJCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsUUFBUTtFQUNSLFFBQVE7RUFDUixXQUFXO0VBQ1gsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCOzswQ0FFd0M7QUFDMUM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLFFBQVE7RUFDUixhQUFhO0VBQ2I7O3dDQUVzQztBQUN4QztBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsWUFBWTs7QUFFZDtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FuaXQ6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBrYW5pdCwgc2Fucy1zZXJpZlxcbn1cXG4qIHtcXG4gIGJvcmRlcjogMnB4IHJlZCBzb2xpZFxcbn1cXG5ib2R5IHtcXG4gIG1hcmdpbjogMFxcbn1cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciBhdXRvIC8gYXV0byAxZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjUwLCAxMDAlLCA4JSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgY29sb3I6IHdoaXRlXFxufVxcbi5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLmxlZnRTaWRlYmFyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMiA7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmclxcbiAgXFxufVxcbi52aWV3QWxsIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IGhzbCg0LCA1MyUsIDkwJSkgc29saWQgNXB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuLnZpZXdBbGw6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNCwgNTMlLCA5MCUpO1xcbiAgY29sb3I6IGJsYWNrXFxufVxcbi5wcm9qZWN0cyB7XFxuICBncmlkLXJvdzogMiAvIC0xO1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbn1cXG4uYWRkTmV3UHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBtYXJnaW46IDEwcHg7XFxuICBcXG59XFxuLmFkZE5ld1Byb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQsIDUzJSwgOTAlKTtcXG4gIGNvbG9yOiBibGFja1xcbn1cXG4uYWRkTmV3VG9kbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IGhzbCg0LCA1MyUsIDkwJSkgc29saWQgNXB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgXFxuICB9XFxuICAuYWRkTmV3VG9kbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCg0LCA1MyUsIDkwJSk7XFxuICAgIGNvbG9yOiBibGFja1xcbiAgfVxcbi5tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gLTE7XFxuICA7XFxufVxcbi5mb290ZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi50b2RvLmNvbXBsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuLm92ZXJsYXlGb3JtIHtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgdG9wOjUwdmg7XFxuICBsZWZ0OjBweDtcXG4gIHdpZHRoOjEwMHZ3O1xcbiAgaGVpZ2h0OjB2aDtcXG4gIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjgpO1xcbiAgei1pbmRleDogLTE7XFxuICBvcGFjaXR5OiAwO1xcbiAgcGFkZGluZzogODBweCA1MHB4IDBweCAxMHB4O1xcbiAgb3ZlcmZsb3c6c2Nyb2xsO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRyYW5zaXRpb246IHRvcCA1MDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgIG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQsXFxuICAgICAgICAgICAgICBoZWlnaHQgMG1zIGVhc2UtaW4tb3V0IDUwMG1zO1xcbn1cXG4ub3ZlcmxheUZvcm0gLmNsb3NlRm9ybSB7XFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gIHRvcDogMjBweDtcXG4gIHJpZ2h0OiA0MHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxufVxcblxcbmJvZHkuYWN0aXZlRm9ybSAub3ZlcmxheUZvcm17XFxuICB6LWluZGV4OiAyO1xcbiAgb3BhY2l0eTogMTtcXG4gIHRvcDogMHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHRyYW5zaXRpb246IHRvcCA1MDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgIG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQsXFxuICAgICAgICAgICAgICBoZWlnaHQgMG1zIGVhc2UtaW4tb3V0IDBtcztcXG59XFxuLm92ZXJsYXlGb3JtIGgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ub3ZlcmxheUZvcm0gcCB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ub3ZlcmxheUZvcm0gbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGNvbG9yOiAjZWI1ZTI4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5vdmVybGF5Rm9ybSBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE3cHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbnNlbGVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuaDIge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjb2xvcjogI2ViNWUyODtcXG59XFxuLmN1cnJlbnRQcm9qZWN0cyB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG4jc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IGhzbCg0LCA1MyUsIDkwJSkgc29saWQgNXB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMTBweDtcXG4gIFxcbn1cXG4jc3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0LCA1MyUsIDkwJSk7XFxuICBjb2xvcjogYmxhY2tcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyAvLyBET00gbWFuaXB1bGF0aW9uIGZvciBpbnB1dCBuZXcgdG9kbyBmb3JtIGFuZCBuZXcgcHJvamVjdCBmb3JtXG5cbmltcG9ydCB7IGNsZWFyUHJvamVjdExpc3QsIHJlZnJlc2hQcm9qZWN0TGlzdCB9IGZyb20gXCIuXCJcbmltcG9ydCB1cGRhdGVNYWluIGZyb20gXCIuL21haW5Db250ZW50XCJcbmltcG9ydCBUb2RvLCB7IHRvZG9BcnJheSB9IGZyb20gXCIuL3RvZG9PYmplY3RzXCJcbmltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gXCIuL3RvZG9PYmplY3RzXCJcblxuZnVuY3Rpb24gdG9kb0Zvcm0gKCl7XG4gICAgLy8gY29udGFpbmVyIGVsZW1lbnRzIGZvciBmb3JtXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybVwiKVxuICAgIGNvbnN0IG92ZXJsYXlGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG92ZXJsYXlGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJvdmVybGF5Rm9ybVwiKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQob3ZlcmxheUZvcm0pXG4gICAgLy8gY2xvc2UgZm9ybSAneCcgYnV0dG9uXG4gICAgY29uc3QgY2xvc2VGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNsb3NlRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiY2xvc2VGb3JtXCIpXG4gICAgY2xvc2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZUZvcm0oKTtcbiAgICAgICAgcmVtb3ZlRm9ybSgpO1xuICAgIH0pXG4gICAgY2xvc2VGb3JtLmlubmVySFRNTCA9IFwiJnRpbWVzXCJcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChjbG9zZUZvcm0pXG4gICAgLy8gZm9ybSBoZWFkZXJcbiAgICBjb25zdCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgZm9ybUhlYWRlci50ZXh0Q29udGVudCA9IFwiQWRkIGEgbmV3IFRvRG9cIlxuICAgIG92ZXJsYXlGb3JtLmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpO1xuXG4gICAgLy8gZm9ybSBlbGVtZW50ICdOYW1lJyBjb250YWluZXIgXG4gICAgY29uc3QgZm9ybUVsZW1lbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZvcm1FbGVtZW50TmFtZS5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUVsZW1lbnRcIilcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudE5hbWUpXG4gICAgLy8gJ05hbWUnIGlucHV0IGZpZWxkcyAtIHRleHRyXG4gICAgY29uc3QgZm9ybU5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGZvcm1OYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiTmFtZVwiKVxuICAgIGZvcm1OYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWUgb2YgVG9Eb1wiO1xuICAgIGNvbnN0IGZvcm1OYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBmb3JtTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpXG4gICAgZm9ybU5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm1OYW1lXCIpXG4gICAgZm9ybUVsZW1lbnROYW1lLmFwcGVuZChmb3JtTmFtZUxhYmVsLCBmb3JtTmFtZUlucHV0KTtcbiAgICBcbiAgICAvLyBmb3JtICdQcm9qZWN0JyBjb250YWluZXJcbiAgICBjb25zdCBmb3JtRWxlbWVudFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZm9ybUVsZW1lbnRQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtRWxlbWVudFwiKVxuICAgIG92ZXJsYXlGb3JtLmFwcGVuZENoaWxkKGZvcm1FbGVtZW50UHJvamVjdClcbiAgICAvLyAnUHJvamVjdCcgaW5wdXQgZmllbGRzIC0gRHJvcGRvd25cbiAgICBjb25zdCBmb3JtUHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgZm9ybVByb2plY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcm9qZWN0SW5wdXRcIilcbiAgICBmb3JtUHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJTZWxlY3QgcHJvamVjdDpcIjtcbiAgICBjb25zdCBmb3JtUHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKVxuICAgIGZvcm1Qcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByb2plY3RzXCIpXG4gICAgZm9ybVByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RJbnB1dFwiKVxuICAgIGZvcm1FbGVtZW50UHJvamVjdC5hcHBlbmQoZm9ybVByb2plY3RMYWJlbCwgZm9ybVByb2plY3RJbnB1dCk7XG4gICAgLy8gbG9vcCB0aHJvdWdoIHByb2plY3QgYXJyYXkgdG8gZ3JhYiB0aGUgcHJvamVjdHMgZm9yIHRoZSBkcm9wZG93blxuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpe1xuICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgICAgICBvcHRpb24udmFsdWUgPSBlbGVtZW50O1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBgJHtlbGVtZW50fWBcbiAgICAgICAgZm9ybVByb2plY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcblxuICAgIC8vIGZvcm0gJ3ByaW9yaXR5JyBjb250YWluZXJcbiAgICBjb25zdCBmb3JtRWxlbWVudFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZvcm1FbGVtZW50UHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZShcImZvcm1FbGVtZW50XCIpXG4gICAgb3ZlcmxheUZvcm0uYXBwZW5kQ2hpbGQoZm9ybUVsZW1lbnRQcmlvcml0eSlcbiAgICAvLyAnUHJpb3JpdHknIGlucHV0IGZpZWxkcyAtIERyb3Bkb3duXG4gICAgY29uc3QgZm9ybVByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICBmb3JtUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eUlucHV0XCIpXG4gICAgZm9ybVByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlNlbGVjdCBwcmlvcml0eTpcIjtcbiAgICBjb25zdCBmb3JtUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcbiAgICBmb3JtUHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIilcbiAgICBmb3JtUHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5SW5wdXRcIilcbiAgICBmb3JtRWxlbWVudFByb2plY3QuYXBwZW5kKGZvcm1Qcmlvcml0eUxhYmVsLCBmb3JtUHJpb3JpdHlJbnB1dCk7XG4gICAgLy8gcHJpb3JpdHkgZHJvcGRvd24gb3B0aW9uc1xuICAgIGNvbnN0IHByaW9yaXR5VXJnZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgIHByaW9yaXR5VXJnZW50LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiVXJnZW50XCIpXG4gICAgcHJpb3JpdHlVcmdlbnQudGV4dENvbnRlbnQgPSBcIlVyZ2VudFwiXG4gICAgY29uc3QgcHJpb3JpdHlSb3V0aW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgIHByaW9yaXR5Um91dGluZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlJvdXRpbmVcIilcbiAgICBwcmlvcml0eVJvdXRpbmUudGV4dENvbnRlbnQgPSBcIlJvdXRpbmVcIlxuICAgIGNvbnN0IHByaW9yaXR5QmFja0J1cm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICBwcmlvcml0eUJhY2tCdXJuZXIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJCYWNrYnVybmVyXCIpXG4gICAgcHJpb3JpdHlCYWNrQnVybmVyLnRleHRDb250ZW50ID0gXCJCYWNrLUJ1cm5lclwiXG4gICAgZm9ybVByaW9yaXR5SW5wdXQuYXBwZW5kKHByaW9yaXR5VXJnZW50LCBwcmlvcml0eVJvdXRpbmUsIHByaW9yaXR5QmFja0J1cm5lcilcblxuICAgIC8vIGZvcm0gJ2RhdGUgZHVlJyBjb250YWluZXJcbiAgICBjb25zdCBmb3JtRWxlbWVudER1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBmb3JtRWxlbWVudER1ZS5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUVsZW1lbnRcIilcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudER1ZSlcbiAgICAvLyAnZGF0ZSBkdWUnIGlucHV0IGZpZWxkcyAtIGRhdGUgcGlja2VyXG4gICAgY29uc3QgZm9ybUR1ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgZm9ybUR1ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZUlucHV0XCIpXG4gICAgZm9ybUR1ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgYnk6XCJcbiAgICBjb25zdCBmb3JtRHVlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBmb3JtRHVlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIilcbiAgICBmb3JtRHVlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVJbnB1dFwiKVxuICAgIGZvcm1EdWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVlRGF0ZVwiKVxuICAgIGZvcm1EdWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKVxuICAgIGZvcm1FbGVtZW50RHVlLmFwcGVuZChmb3JtRHVlTGFiZWwsIGZvcm1EdWVJbnB1dClcblxuICAgIC8vIGZvcm0gc3VibWl0IGJ1dHRvbiBjb250YWluZXJcbiAgICBjb25zdCBmb3JtRWxlbWVudFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBmb3JtRWxlbWVudFN1Ym1pdC5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUVsZW1lbnRcIilcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudFN1Ym1pdClcbiAgICAvLyBzdWJtaXQgYnV0dG9uIFxuICAgIGNvbnN0IGZvcm1TdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgZm9ybVN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIE5ldyBUb2RvXCJcbiAgICBmb3JtU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGFkZFRvZG8oKTtcbiAgICAgICAgdG9nZ2xlRm9ybSgpO1xuICAgICAgICByZW1vdmVGb3JtKCk7XG4gICAgICAgIHVwZGF0ZU1haW4oKTtcbiAgICAgICAgY29uc29sZS5sb2codG9kb0FycmF5KVxuICAgIH0pIFxuXG4gICAgZm9ybVN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpXG4gICAgZm9ybVN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdFwiKVxuICAgIGZvcm1FbGVtZW50U3VibWl0LmFwcGVuZENoaWxkKGZvcm1TdWJtaXRCdXR0b24pXG4gICAgLy8gYXBwZW5kIHRoZSBlbnRpcmUgZm9ybSBjb250YWluZXIgdG8gdGhlIGJvZHkgd2hlbiBjYWxsZWRcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICBjb25zb2xlLmxvZyhcInRvZG9Gb3JtIGZ1bmN0aW9uIGlzIGZpcmluZ1wiKVxufVxuXG4vLyBmdW5jdGlvbiB0byB0b2dnbGUgY2xhc3MgdGhhdCBicmluZ3MgdXAgYSBuZXcgdG9kbyBmb3JtXG5mdW5jdGlvbiB0b2dnbGVGb3JtKCl7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlRm9ybVwiKVxuICAgIGNvbnNvbGUubG9nKFwidG9nZ2xlRm9ybSBpcyBmaXJpbmdcIilcbn1cbi8vIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBjcmVhdGUgYSBuZXcgVG9kbyBmb3JtIGJ1dHRvbiBjbGlja2VkLCBhZnRlciBjb21wbGV0aW5nIHRoZSBmb3JtXG5mdW5jdGlvbiBhZGRUb2RvKG5hbWUsIHByb2plY3QsIHByaW9yaXR5LCBkdWVEYXRlKXtcbiAgICBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtTmFtZVwiKS52YWx1ZTtcbiAgICBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0SW5wdXRcIikudmFsdWU7XG4gICAgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5SW5wdXRcIikudmFsdWU7XG4gICAgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlSW5wdXRcIikudmFsdWU7XG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKG5hbWUscHJvamVjdCxwcmlvcml0eSxkdWVEYXRlKVxuICAgIG5ld1RvZG8ucHVzaFRvZG8oKTtcbn1cblxuLy8gZnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBmb3JtIGVsZW1lbnQgZnJvbSBET00gd2hlbiBjbG9zZWRcbmZ1bmN0aW9uIHJlbW92ZUZvcm0oKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9ybVwiKVxuICAgIHdoaWxlIChlbGVtZW50cy5sZW5ndGggPiAwKXtcbiAgICAgICAgZWxlbWVudHNbMF0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50c1swXSlcbiAgICB9XG59IFxuXG4vLyBmb3JtIGZvciBhZGRpbmcgYSBuZXcgUHJvamVjdCAocmVtZW1iZXIgdG8gaW5jbHVkZSBhIGxpc3Qgb2YgY3VycmVudCBwcm9qZWN0cylcbmZ1bmN0aW9uIG5ld1Byb2plY3RGb3JtKCl7XG4gICAgLy8gY29udGFpbmVyIGVsZW1lbnRzIGZvciBmb3JtXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybVwiKVxuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwicG9zdFwiKVxuICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiI1wiKVxuICAgIGNvbnN0IG92ZXJsYXlGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG92ZXJsYXlGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJvdmVybGF5Rm9ybVwiKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQob3ZlcmxheUZvcm0pXG5cbiAgICAvLyBjbG9zZSBmb3JtICd4JyBidXR0b25cbiAgICBjb25zdCBjbG9zZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY2xvc2VGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJjbG9zZUZvcm1cIilcbiAgICBjbG9zZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdG9nZ2xlRm9ybSgpO1xuICAgICAgICByZW1vdmVGb3JtKCk7XG4gICAgfSlcbiAgICBjbG9zZUZvcm0uaW5uZXJIVE1MID0gXCImdGltZXNcIlxuICAgIG92ZXJsYXlGb3JtLmFwcGVuZENoaWxkKGNsb3NlRm9ybSlcblxuICAgIC8vIGZvcm0gaGVhZGVyXG4gICAgY29uc3QgZm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGZvcm1IZWFkZXIudGV4dENvbnRlbnQgPSBcIkFkZCBhIG5ldyBQcm9qZWN0XCJcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKTtcblxuICAgIC8vIHByb2plY3QgbmFtZSBpbnB1dFxuICAgIGNvbnN0IGZvcm1FbGVtZW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBmb3JtRWxlbWVudE5hbWUuY2xhc3NMaXN0LnRvZ2dsZShcImZvcm1FbGVtZW50XCIpXG4gICAgb3ZlcmxheUZvcm0uYXBwZW5kQ2hpbGQoZm9ybUVsZW1lbnROYW1lKVxuICAgIC8vICdOYW1lJyBpbnB1dCBmaWVsZHMgLSB0ZXh0XG4gICAgY29uc3QgZm9ybU5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGZvcm1OYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiTmFtZVwiKVxuICAgIGZvcm1OYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWUgb2YgTmV3IFByb2plY3RcIjtcbiAgICBjb25zdCBmb3JtTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZm9ybU5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgZm9ybU5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ld1Byb2plY3RJbnB1dFwiKVxuICAgIGZvcm1OYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIilcbiAgICBmb3JtTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuZXdQcm9qZWN0SW5wdXRcIilcbiAgICBmb3JtTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm1pbmxlbmd0aFwiLCBcIjFcIilcbiAgICBmb3JtTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjMwXCIpXG4gICAgZm9ybUVsZW1lbnROYW1lLmFwcGVuZChmb3JtTmFtZUxhYmVsLCBmb3JtTmFtZUlucHV0KTtcblxuICAgIC8vIGxpc3Qgb2YgY3VycmVudCBQcm9qZWN0c1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjdXJyZW50UHJvamVjdHMuY2xhc3NMaXN0LnRvZ2dsZShcImN1cnJlbnRQcm9qZWN0c1wiKVxuICAgIG92ZXJsYXlGb3JtLmFwcGVuZENoaWxkKGN1cnJlbnRQcm9qZWN0cylcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxuICAgIGN1cnJlbnRQcm9qZWN0c1RpdGxlLnRleHRDb250ZW50ID0gXCJMaXN0IG9mIEN1cnJlbnQgUHJvamVjdHNcIlxuICAgIGN1cnJlbnRQcm9qZWN0cy5hcHBlbmQoY3VycmVudFByb2plY3RzVGl0bGUpXG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtjdXJyZW50UHJvamVjdHMuYXBwZW5kKGVsZW1lbnQgKyBcIiwgXCIpXG4gICAgfSlcblxuICAgIC8vIHN1Ym1pdCBuZXcgcHJvamVjdCBidXR0b25cbiAgICBjb25zdCBuZXdQcm9qZWN0U3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG5ld1Byb2plY3RTdWJtaXQuY2xhc3NMaXN0LnRvZ2dsZShcImZvcm1FbGVtZW50XCIpXG4gICAgb3ZlcmxheUZvcm0uYXBwZW5kQ2hpbGQobmV3UHJvamVjdFN1Ym1pdClcbiAgICAvLyBzdWJtaXQgYnV0dG9uIFxuICAgIGNvbnN0IG5ld1Byb2plY3RTdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgbmV3UHJvamVjdFN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiKyBBZGQgTmV3IFByb2plY3RcIlxuICAgIG5ld1Byb2plY3RTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgLy8gY2hlY2sgdGhhdCB0aGUgaW5wdXQgaXMgdmFsaWQsIGJlZm9yZSBydW5uaW5nIHRoZSB0b2dnbGUgYW5kIHJlbW92ZSBmdW5jdGlvbnNcbiAgICAgICAgaWYgKGZvcm1OYW1lSW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICBwdXNoTmV3UHJvamVjdCgpO1xuICAgICAgICAgICAgdG9nZ2xlRm9ybSgpO1xuICAgICAgICAgICAgcmVtb3ZlRm9ybSgpOyBcbiAgICAgICAgICAgIGNsZWFyUHJvamVjdExpc3QoKSBcbiAgICAgICAgICAgIHJlZnJlc2hQcm9qZWN0TGlzdCgpOyBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSlcbiAgICAgICAgfSAgXG4gICAgfSkgXG5cbiAgICBuZXdQcm9qZWN0U3VibWl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIilcbiAgICBuZXdQcm9qZWN0U3VibWl0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0XCIpXG4gICAgbmV3UHJvamVjdFN1Ym1pdC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0U3VibWl0QnRuKVxuXG5cbiAgICAvLyBhcHBlbmQgZm9ybSBjb250YWluZXIgdG8gYm9keVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5hcHBlbmRDaGlsZChmb3JtKVxufVxuXG5mdW5jdGlvbiBwdXNoTmV3UHJvamVjdCgpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0SW5wdXRcIilcbiAgICBwcm9qZWN0QXJyYXkucHVzaChuZXdQcm9qZWN0LnZhbHVlKVxufVxuZXhwb3J0IHtcbiAgICB0b2RvRm9ybSxcbiAgICB0b2dnbGVGb3JtLFxuICAgIHJlbW92ZUZvcm0sXG4gICAgbmV3UHJvamVjdEZvcm1cbn1cbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcbmltcG9ydCBUb2RvLCB7IGZpbHRlcmVkLCBwcm9qZWN0QXJyYXksIHRvZG9BcnJheSB9IGZyb20gXCIuL3RvZG9PYmplY3RzXCJcbmltcG9ydCB1cGRhdGVNYWluLCB7IGNsZWFyVG9kb3MsIHVwZGF0ZU1haW5GaWx0ZXJlZCB9IGZyb20gXCIuL21haW5Db250ZW50XCJcbmltcG9ydCB7IHRvZ2dsZUZvcm0sIHRvZG9Gb3JtLCBuZXdQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL2Zvcm1cIlxuaW1wb3J0IHsgcmVuZGVyU2hvd0NvbXBsZXRlZEJ0biB9IGZyb20gXCIuL3Nob3dDb21wbGV0ZWRcIlxuLy8gaW1wb3J0IHt0b2RvQXJyYXksIHByb2plY3RBcnJheX0gZnJvbSBcIi4vdG9kb09iamVjdHNcIlxuLy8gZ3JhYmJpbmcgdGhlIHJvb3Qgbm9kZSBlbGVtZW50XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgcmVmcmVzaFByb2plY3RMaXN0KClcbiAgICByZW5kZXJTaG93Q29tcGxldGVkQnRuKClcbn0pXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIilcblxuLy8gZ3JpZCBjb250YWluZXJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiY29udGFpbmVyXCIpXG5cbi8vIGhlYWRlclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoZWFkZXJcIilcbmhlYWRlci50ZXh0Q29udGVudCA9IFwiVG8gRG9cIlxuXG4vLyBsZWZ0IHNpZGViYXJcbmNvbnN0IGxlZnRTaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxubGVmdFNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZShcImxlZnRTaWRlYmFyXCIpXG5jb25zdCB2aWV3QWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnZpZXdBbGwuY2xhc3NMaXN0LnRvZ2dsZShcInZpZXdBbGxcIilcbnZpZXdBbGwudGV4dENvbnRlbnQgPSBcIlZpZXcgQWxsIFRvZG9zXCJcbmNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxucHJvamVjdHMuY2xhc3NMaXN0LnRvZ2dsZShcInByb2plY3RzXCIpXG5wcm9qZWN0cy50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIlxuY29uc3QgYWRkTmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbmFkZE5ld1Byb2plY3QuY2xhc3NMaXN0LnRvZ2dsZShcImFkZE5ld1Byb2plY3RcIilcbmFkZE5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBcIisgQWRkIE5ldyBQcm9qZWN0XCJcbmFkZE5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIG5ld1Byb2plY3RGb3JtKClcbiAgICB0b2dnbGVGb3JtKClcbn0pXG5wcm9qZWN0cy5hcHBlbmRDaGlsZChhZGROZXdQcm9qZWN0KVxuXG5jb25zdCBwcm9qZWN0SW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxucHJvamVjdEluc3RydWN0aW9ucy50ZXh0Q29udGVudCA9IFwiTGlzdCBvZiBjdXJyZW50IHByb2plY3RzLCBjbGljayB0byB2aWV3IFRvZG9zXCJcbnByb2plY3RJbnN0cnVjdGlvbnMuY2xhc3NMaXN0LnRvZ2dsZShcInByb2plY3RJbnN0cnVjdGlvbnNcIilcbnByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RJbnN0cnVjdGlvbnMpXG5cbi8vIHByb2plY3RzIGNvbnRhaW5lclxuY29uc3QgcHJvamVjdExpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5wcm9qZWN0TGlzdENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwicHJvamVjdExpc3RDb250YWluZXJcIilcbnByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RMaXN0Q29udGFpbmVyKVxuXG5cbi8vIGxvb3AgdGhyb3VnaCBwcm9qZWN0cyB0byBsaXN0IHRoZW0gb24gdGhlIHNpZGUgcGFuZWxcbmZ1bmN0aW9uIHJlZnJlc2hQcm9qZWN0TGlzdCgpIHtcbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBwcm9qZWN0TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0QnV0dG9uQ29udGFpbmVyKVxuICAgICAgICBwcm9qZWN0QnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJwcm9qZWN0QnV0dG9uQ29udGFpbmVyXCIpXG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwicHJvamVjdEJ1dHRvblwiKVxuICAgICAgICBwcm9qZWN0TGlzdC50ZXh0Q29udGVudCA9IGVsZW1lbnRcbiAgICAgICAgcHJvamVjdExpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExpc3QpXG4gICAgICAgIC8vIGV2ZW50IGxpc3RlbmVycyBmb3IgZWFjaCBwcm9qZWN0IGJ1dHRvblxuICAgICAgICBwcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUb2RvcygpOyAvL3RoaXMgb25seSB3b3JrcyBvbmNlISBkb2VzbnQgY2xlYXIgYWZ0ZXIgdGhlIGZpcnN0IGNsaWNrXG4gICAgICAgICAgICB0b2RvQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnByb2plY3QgPT0gcHJvamVjdExpc3QudGV4dENvbnRlbnQpe1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZC5wdXNoKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlsdGVyZWQgYXJyYXkgYmVmb3JlIHJlc2V0XCIsIGZpbHRlcmVkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1cGRhdGVNYWluRmlsdGVyZWQoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZC5sZW5ndGggPSAwXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaWx0ZXJlZCBhcnJheSBhZnRlciByZXNldFwiLCBmaWx0ZXJlZClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9KVxufVxuLy8gZnVuY3Rpb24gdG8gY2xlYXIgdGhlIGxpc3Qgb2YgcHJvamVjdHMgYmVmb3JlIGxvb3BpbmcgdGhyb3VnaCB0byBwcmV2ZW50IHJlcGVhdGluZyBvZiBlbGVtZW50c1xuZnVuY3Rpb24gY2xlYXJQcm9qZWN0TGlzdCAoKSB7XG4gICAgd2hpbGUocHJvamVjdExpc3RDb250YWluZXIuZmlyc3RDaGlsZCl7XG4gICAgICAgIHByb2plY3RMaXN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKHByb2plY3RMaXN0Q29udGFpbmVyLmxhc3RDaGlsZClcbiAgICB9XG59XG5cbi8vIG5lZWQgdG8gY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCBjbGVhcnMgdGhlIGZpbHRlcmVkIGFycmF5XG5cblxuXG4vLyBtYWluIGNvbnRlbnRcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5tYWluLmNsYXNzTGlzdC50b2dnbGUoXCJtYWluXCIpXG5jb25zdCBhZGROZXdUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuYWRkTmV3VG9kby5jbGFzc0xpc3QudG9nZ2xlKFwiYWRkTmV3VG9kb1wiKVxuYWRkTmV3VG9kby50ZXh0Q29udGVudCA9IFwiKyBBZGQgTmV3IFRvRG9cIlxuYWRkTmV3VG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRvZ2dsZUZvcm0oKVxuICAgIHRvZG9Gb3JtKClcbn0pXG5jb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxudG9kb0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb0NvbnRhaW5lclwiKVxubWFpbi5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKVxubWFpbi5pbnNlcnRCZWZvcmUoYWRkTmV3VG9kbywgbWFpbi5maXJzdENoaWxkKVxuXG4vLyBmb290ZXJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmZvb3Rlci5jbGFzc0xpc3QudG9nZ2xlKFwiZm9vdGVyXCIpXG5mb290ZXIudGV4dENvbnRlbnQgPSBcIkNyZWF0ZWQgYnkgSm9yZGFuIFVsbWVyLCAyMDIyXCJcbi8vIGFwcGVuZGluZyB0byB0aGUgcGFyZW50IGVsZW1lbnRzXG5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbmNvbnRhaW5lci5hcHBlbmQoaGVhZGVyLCBsZWZ0U2lkZWJhciwgbWFpbiwgZm9vdGVyKVxubGVmdFNpZGViYXIuYXBwZW5kKHZpZXdBbGwsIHByb2plY3RzKVxuXG4vLyB0ZXN0aW5nIGEgcmFuZG9tIFRvZG9cbmNvbnN0IGdhcmRlbmluZyA9IG5ldyBUb2RvKFwiR2FyZGVuaW5nXCIsXCJHYXJkZW5pbmdcIixcIlVyZ2VudFwiLFwibW9uZGF5XCIpXG5nYXJkZW5pbmcucHVzaFRvZG8oKVxuXG5jb25zdCB3b3JrID0gbmV3IFRvZG8oXCJXb3JrXCIsIFwiV29ya1wiLCBcIlVyZ2VudFwiLCBcIlRvZGF5XCIpXG53b3JrLnB1c2hUb2RvKClcblxuXG5leHBvcnQgZGVmYXVsdCBtYWluXG51cGRhdGVNYWluKClcblxuZXhwb3J0IHtcbiAgICByZWZyZXNoUHJvamVjdExpc3QsXG4gICAgY2xlYXJQcm9qZWN0TGlzdFxufVxuXG5cblxuXG4iLCIvLyBpbXBvcnRpbmcgdGhlIGFycmF5cyBhbmQgdGhlIERPTSBlbGVtZW50XG5pbXBvcnQgdG9kb0xvb3AgZnJvbSBcIi4vdG9kb0xvb3BcIjtcbmltcG9ydCB7Y29tcGxldGVkVG9kb3MsIGZpbHRlcmVkLCBwcm9qZWN0QXJyYXksdG9kb0FycmF5IH0gZnJvbSBcIi4vdG9kb09iamVjdHNcIjtcbmltcG9ydCB0b2RvRm9ybSBmcm9tIFwiLi9mb3JtXCI7XG5cbi8vIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhbmQgYXBwZW5kIHRoZSBtYWluIHNlY3Rpb24gd2l0aCBlYWNoIHRvZG9cbmZ1bmN0aW9uIHVwZGF0ZU1haW4gKCkge1xuICAgIHRvZG9BcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpXG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9Db250YWluZXJcIilcbiAgICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdG9kb0NvbXBsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdG9kb1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9cIilcbiAgICAgICAgdG9kb0NvbXBsZXRlQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvQ29tcGxldEJ0blwiKVxuICAgICAgICB0b2RvQ29tcGxldGVCdG4udGV4dENvbnRlbnQgPSBcIuKclO+4j1wiXG4gICAgICAgIHRvZG9OYW1lLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvTmFtZVwiKVxuICAgICAgICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9Qcmlvcml0eVwiKVxuICAgICAgICB0b2RvUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb1Byb2plY3RcIilcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKVxuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG8pXG4gICAgICAgIHRvZG8uYXBwZW5kKHRvZG9OYW1lLCB0b2RvUHJpb3JpdHksIHRvZG9EdWVEYXRlLCB0b2RvUHJvamVjdCwgdG9kb0NvbXBsZXRlQnRuKVxuICAgICAgICAvLyBldmVudGxpc3RlbmVyIGZvciBjb21wbGV0ZSBidXR0b25cbiAgICAgICAgdG9kb0NvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBwdXNoIHRvZG8gdG8gY29tcGxldGVkIGFycmF5XG4gICAgICAgICAgICBjb21wbGV0ZWRUb2Rvcy5wdXNoKGVsZW1lbnQpXG4gICAgICAgICAgICAvLyBsb2dpYyBoZXJlIHRvIHJlbW92ZSB0aGlzIHNpbmdsZSBpbnN0YW5jZVxuICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b2RvKVxuICAgICAgICAgICAgdG9kb0FycmF5LnNwbGljZSh0b2RvQXJyYXkuaW5kZXhPZihlbGVtZW50KSwgMSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvQXJyYXkpXG4gICAgICAgIH0pXG4gICAgICAgIC8vIGxvb3BzIG92ZXIgZWFjaCBvYmplY3QgYW5kIGV4dHJhY3RzIHRoZSB2YWx1ZS4gKHRleHRDb250ZW50IGZvciBub3csIHdpbGwgY2hhbmdlIGxhdGVyKVxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZWxlbWVudCl7XG4gICAgICAgICAgICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZTtcbiAgICAgICAgICAgIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJpb3JpdHk7XG4gICAgICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGVsZW1lbnQuZHVlRGF0ZTtcbiAgICAgICAgICAgIHRvZG9Qcm9qZWN0LnRleHRDb250ZW50ID0gZWxlbWVudC5wcm9qZWN0O1xuICAgICAgICAgICAgdG9kby5hcHBlbmQoKVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU1haW5GaWx0ZXJlZCAoKSB7XG4gICAgZmlsdGVyZWQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKVxuICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvQ29udGFpbmVyXCIpXG4gICAgICAgIGNvbnN0IHRvZG9Db21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHRvZG9Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICB0b2RvLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvXCIpXG4gICAgICAgIHRvZG9Db21wbGV0ZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb0NvbXBsZXRCdG5cIilcbiAgICAgICAgdG9kb0NvbXBsZXRlQnRuLnRleHRDb250ZW50ID0gXCLinJTvuI9cIlxuICAgICAgICB0b2RvTmFtZS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb05hbWVcIilcbiAgICAgICAgdG9kb1ByaW9yaXR5LmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvUHJpb3JpdHlcIilcbiAgICAgICAgdG9kb1Byb2plY3QuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9Qcm9qZWN0XCIpXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcilcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvKVxuICAgICAgICB0b2RvLmFwcGVuZCh0b2RvTmFtZSwgdG9kb1ByaW9yaXR5LCB0b2RvRHVlRGF0ZSwgdG9kb1Byb2plY3QsIHRvZG9Db21wbGV0ZUJ0bilcbiAgICAgICAgLy8gZXZlbnRsaXN0ZW5lciBmb3IgY29tcGxldGUgYnV0dG9uXG4gICAgICAgIHRvZG9Db21wbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gcHVzaCB0aGUgdG9kbyBPYmplY3QgaW50byB0aGUgY29tcGxldGVkIHRvZG9zXG4gICAgICAgICAgICBjb21wbGV0ZWRUb2Rvcy5wdXNoKGVsZW1lbnQpXG4gICAgICAgICAgICAvLyBsb2dpYyBoZXJlIHRvIHJlbW92ZSB0aGlzIHNpbmdsZSBpbnN0YW5jZVxuICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b2RvKVxuICAgICAgICAgICAgdG9kb0FycmF5LnNwbGljZSh0b2RvQXJyYXkuaW5kZXhPZihlbGVtZW50KSwgMSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvQXJyYXkpXG4gICAgICAgIH0pXG4gICAgICAgIC8vIGxvb3BzIG92ZXIgZWFjaCBvYmplY3QgYW5kIGV4dHJhY3RzIHRoZSB2YWx1ZS4gKHRleHRDb250ZW50IGZvciBub3csIHdpbGwgY2hhbmdlIGxhdGVyKVxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZWxlbWVudCl7XG4gICAgICAgICAgICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZTtcbiAgICAgICAgICAgIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJpb3JpdHk7XG4gICAgICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGVsZW1lbnQuZHVlRGF0ZTtcbiAgICAgICAgICAgIHRvZG9Qcm9qZWN0LnRleHRDb250ZW50ID0gZWxlbWVudC5wcm9qZWN0O1xuICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQoKVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuXG4vLyBmdW5jdGlvbiB0byBjbGVhciB0aGUgdG9kbyBsaXN0LCB1c2VkIHdoZW4gZmlsdGVyaW5nIGJ5IHByb2plY3RzIE5PVCBXT1JLSU5HXG5mdW5jdGlvbiBjbGVhclRvZG9zICgpIHtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvQ29udGFpbmVyXCIpXG4gICAgd2hpbGUgKHRvZG9Db250YWluZXIuZmlyc3RDaGlsZCl7XG4gICAgICAgIHRvZG9Db250YWluZXIucmVtb3ZlQ2hpbGQodG9kb0NvbnRhaW5lci5sYXN0Q2hpbGQpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRvZG9Db250YWluZXIsIFwiY2xlYXJUb2RvcyBpcyBmaXJpbmdcIilcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVNYWluXG5leHBvcnQge1xuICAgIHVwZGF0ZU1haW5GaWx0ZXJlZCxcbiAgICBjbGVhclRvZG9zLFxufSIsImltcG9ydCB7IGNsZWFyVG9kb3MgfSBmcm9tIFwiLi9tYWluQ29udGVudFwiXG5pbXBvcnQgeyBjb21wbGV0ZWRUb2RvcyB9IGZyb20gXCIuL3RvZG9PYmplY3RzXCJcblxuZnVuY3Rpb24gcmVuZGVyU2hvd0NvbXBsZXRlZEJ0bigpIHtcbiAgICAvLyBjcmVhdGUgY29udGFpbmVyIGZvciBDb21wbGV0ZWQgVG9Eb3MgYnV0dG9uIGFuZCBidXR0b24gXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKVxuICAgIGNvbnN0IGNvbXBsZXRlZFRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29tcGxldGVkVG9kb0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkVG9kb0NvbnRhaW5lclwiKVxuICAgIGNvbnN0IGNvbXBsZXRlZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgY29tcGxldGVkVG9kb0J0bi5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkVG9kb0J0blwiKVxuICAgIGNvbXBsZXRlZFRvZG9CdG4udGV4dENvbnRlbnQgPSBcIlNob3cgQ29tcGxldGVkIFRvRG9zXCJcbiAgICBjb21wbGV0ZWRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHJlbmRlckNvbXBsZXRlZCgpXG4gICAgfSlcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbXBsZXRlZFRvZG9Db250YWluZXIpXG4gICAgY29tcGxldGVkVG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZWRUb2RvQnRuKVxufVxuXG5mdW5jdGlvbiByZW5kZXJDb21wbGV0ZWQoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKVxuICAgIGNsZWFyVG9kb3MoKVxuICAgIGNvbXBsZXRlZFRvZG9zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIilcbiAgICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0NvbnRhaW5lclwiKVxuICAgICAgICBjb25zdCB0b2RvQ29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0b2RvUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgdG9kby5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb1wiKVxuICAgICAgICB0b2RvLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIilcbiAgICAgICAgdG9kb05hbWUuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9OYW1lXCIpXG4gICAgICAgIHRvZG9Qcmlvcml0eS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb1ByaW9yaXR5XCIpXG4gICAgICAgIHRvZG9Qcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvUHJvamVjdFwiKVxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpXG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kbylcbiAgICAgICAgdG9kby5hcHBlbmQodG9kb05hbWUsIHRvZG9Qcmlvcml0eSwgdG9kb0R1ZURhdGUsIHRvZG9Qcm9qZWN0KVxuICAgICAgICAvLyBldmVudGxpc3RlbmVyIGZvciBjb21wbGV0ZSBidXR0b25cbiAgICAgICAgdG9kb0NvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBwdXNoIHRoZSB0b2RvIE9iamVjdCBpbnRvIHRoZSBjb21wbGV0ZWQgdG9kb3NcbiAgICAgICAgICAgIGNvbXBsZXRlZFRvZG9zLnB1c2goZWxlbWVudClcbiAgICAgICAgICAgIC8vIGxvZ2ljIGhlcmUgdG8gcmVtb3ZlIHRoaXMgc2luZ2xlIGluc3RhbmNlXG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvZG8pXG4gICAgICAgICAgICB0b2RvQXJyYXkuc3BsaWNlKHRvZG9BcnJheS5pbmRleE9mKGVsZW1lbnQpLCAxKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG9BcnJheSlcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbG9vcHMgb3ZlciBlYWNoIG9iamVjdCBhbmQgZXh0cmFjdHMgdGhlIHZhbHVlLiAodGV4dENvbnRlbnQgZm9yIG5vdywgd2lsbCBjaGFuZ2UgbGF0ZXIpXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBlbGVtZW50KXtcbiAgICAgICAgICAgIHRvZG9OYW1lLnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuICAgICAgICAgICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gZWxlbWVudC5wcmlvcml0eTtcbiAgICAgICAgICAgIHRvZG9EdWVEYXRlLnRleHRDb250ZW50ID0gZWxlbWVudC5kdWVEYXRlO1xuICAgICAgICAgICAgdG9kb1Byb2plY3QudGV4dENvbnRlbnQgPSBlbGVtZW50LnByb2plY3Q7XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCgpXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IHtcbiAgICByZW5kZXJTaG93Q29tcGxldGVkQnRuLFxuICAgIHJlbmRlckNvbXBsZXRlZFxufSIsIi8vIG1ha2UgYSBmdW5jdGlvbiB0aGF0IGxvb3BzIHRocm91Z2ggdGhlIG9iamVjdCBvbiBjcmVhdGlvbiB0byBmaWxsIGluIHRoZSBET00/IiwibGV0IHByb2plY3RBcnJheSA9IFtcIkdhcmRlbmluZ1wiLCBcIldvcmtcIl0vL3B1c2ggdGhlIHByb2plY3QgbmFtZSBvZiB3aGVuIGEgbmV3IHRvZG8gaXMgbWFkZSBpbiBoZXJlXG5sZXQgdG9kb0FycmF5ID0gW10gLy9wdXNoIGVhY2ggdG9kbyBvYmplY3QgaW50byB0aGlzIGFycmF5IHRvIGxpc3QgdGhlbSBlYXNpZXJcbmxldCBmaWx0ZXJlZCA9IFtdIC8vaW5pdGlhbGlzaW5nIGFuIGVtcHR5IGFycmF5IGZvciBmaWx0ZXJpbmcgdG9kb3NcbmxldCBjb21wbGV0ZWRUb2RvcyA9IFtdIC8vaW5pdGlhbGlzaW5nIGFuIGFycmF5IHRvIGhvbGQgY29tcGxldGVkIHRvZG9zXG5cbi8vIGZhY3RvcnkgZnVuY3Rpb24gZm9yIG5ldyBUb2RvIG9iamVjdHNcbmZ1bmN0aW9uIFRvZG8gKG5hbWUsIHByb2plY3QsIHByaW9yaXR5LCBkdWVEYXRlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHVzaFRvZG8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdG9kb0FycmF5LnB1c2godGhpcylcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVG9kbyBcbmV4cG9ydCB7XG4gICAgcHJvamVjdEFycmF5LFxuICAgIHRvZG9BcnJheSxcbiAgICBmaWx0ZXJlZCxcbiAgICBjb21wbGV0ZWRUb2Rvc1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==