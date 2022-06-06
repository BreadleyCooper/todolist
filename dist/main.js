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
___CSS_LOADER_EXPORT___.push([module.id, "\n:root {\n  font-size: 18px;\n  margin: 0;\n  font-family: kanit, sans-serif\n}\n* {\n  border: 2px red solid\n}\nbody {\n  margin: 0\n}\n.container {\n  display: grid;\n  grid-template: auto 1fr auto / auto 1fr;\n  background-color: hsl(250, 100%, 8%);\n  height: 100vh;\n  color: white\n}\n.header {\n  grid-column: 1 / -1;\n  padding: 1.5rem;\n  font-size: 2rem;\n}\n.leftSidebar {\n  grid-column: 1 / 2 ;\n  padding: 2rem;\n  display: grid;\n  grid-template-rows: 1fr 4fr\n  \n}\n.viewAll {\n  grid-row: 1 / 2;\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n}\n.viewAll:hover{\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.projects {\n  grid-row: 2 / -1;\n  padding-top: 1.5rem;\n  display: grid;\n  grid-template-rows: auto 1fr;\n}\n.addNewProject {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n  \n}\n.addNewProject:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.addNewTodo {\n    background-color: transparent;\n    color: white;\n    border-radius: 10px;\n    height: 4rem;\n    transition: 0.5s;\n    cursor: pointer;\n    border: hsl(4, 53%, 90%) solid 5px;\n    font-size: 1.5rem;\n    font-family: inherit;\n    margin: 10px;\n    \n  }\n  .addNewTodo:hover {\n    background-color: hsl(4, 53%, 90%);\n    color: black\n  }\n.main {\n  grid-column: 2 / -1;\n  ;\n}\n.footer {\n  grid-column: 1 / -1;\n  padding: 1rem;\n  text-align: center;\n}\n.todo {\n    display: flex;\n    justify-content: space-around;\n}\n.overlayForm {\n  position:absolute;\n  top:50vh;\n  left:0px;\n  width:100vw;\n  height:0vh;\n  background:rgba(0,0,0,0.8);\n  z-index: -1;\n  opacity: 0;\n  padding: 80px 50px 0px 10px;\n  overflow:scroll;\n  box-sizing: border-box;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 500ms;\n}\n.overlayForm .closeForm {\n  position:absolute;\n  top: 20px;\n  right: 40px;\n  color: #fff;\n  font-size: 5rem;\n  font-weight: 600;\n  cursor:pointer;\n}\n\nbody.activeForm .overlayForm{\n  z-index: 2;\n  opacity: 1;\n  top: 0px;\n  height: 100vh;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 0ms;\n}\n.overlayForm h1 {\n  font-size: 3rem;\n  color: #fff;\n}\n\n.overlayForm p {\n  font-size: 2em;\n  color: #fff;\n}\n\n.overlayForm label {\n  display: block;\n  font-size: 2em;\n  color: #eb5e28;\n  margin-bottom: 20px;\n  font-weight: 500;\n}\n.overlayForm input {\n  width: 100%;\n  padding: 17px;\n  font-size: 25px;\n  border: 4px solid #fff;\n  background: transparent;\n  outline: none;\n  border-radius: 10px;\n  margin-bottom: 50px;\n  color: #fff;\n  font-weight: 500;\n}\nselect {\n  width: 100%;\n  font-size: inherit;\n}\nh2 {\n  font-family: inherit;\n  color: #eb5e28;\n}\n.currentProjects {\n  font-family: inherit;\n  color: #ffffff;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AAEA;EACE,eAAe;EACf,SAAS;EACT;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,aAAa;EACb;AACF;AACA;EACE,mBAAmB;EACnB,eAAe;EACf,eAAe;AACjB;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb;;AAEF;AACA;EACE,eAAe;EACf,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,kCAAkC;EAClC;AACF;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,4BAA4B;AAC9B;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;;AAEd;AACA;EACE,kCAAkC;EAClC;AACF;AACA;IACI,6BAA6B;IAC7B,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,kCAAkC;IAClC,iBAAiB;IACjB,oBAAoB;IACpB,YAAY;;EAEd;EACA;IACE,kCAAkC;IAClC;EACF;AACF;EACE,mBAAmB;;AAErB;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,kBAAkB;AACpB;AACA;IACI,aAAa;IACb,6BAA6B;AACjC;AACA;EACE,iBAAiB;EACjB,QAAQ;EACR,QAAQ;EACR,WAAW;EACX,UAAU;EACV,0BAA0B;EAC1B,WAAW;EACX,UAAU;EACV,2BAA2B;EAC3B,eAAe;EACf,sBAAsB;EACtB;;0CAEwC;AAC1C;AACA;EACE,iBAAiB;EACjB,SAAS;EACT,WAAW;EACX,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,UAAU;EACV,QAAQ;EACR,aAAa;EACb;;wCAEsC;AACxC;AACA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,cAAc;EACd,cAAc;EACd,cAAc;EACd,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,oBAAoB;EACpB,cAAc;AAChB;AACA;EACE,oBAAoB;EACpB,cAAc;AAChB","sourcesContent":["\n@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n:root {\n  font-size: 18px;\n  margin: 0;\n  font-family: kanit, sans-serif\n}\n* {\n  border: 2px red solid\n}\nbody {\n  margin: 0\n}\n.container {\n  display: grid;\n  grid-template: auto 1fr auto / auto 1fr;\n  background-color: hsl(250, 100%, 8%);\n  height: 100vh;\n  color: white\n}\n.header {\n  grid-column: 1 / -1;\n  padding: 1.5rem;\n  font-size: 2rem;\n}\n.leftSidebar {\n  grid-column: 1 / 2 ;\n  padding: 2rem;\n  display: grid;\n  grid-template-rows: 1fr 4fr\n  \n}\n.viewAll {\n  grid-row: 1 / 2;\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n}\n.viewAll:hover{\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.projects {\n  grid-row: 2 / -1;\n  padding-top: 1.5rem;\n  display: grid;\n  grid-template-rows: auto 1fr;\n}\n.addNewProject {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n  \n}\n.addNewProject:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.addNewTodo {\n    background-color: transparent;\n    color: white;\n    border-radius: 10px;\n    height: 4rem;\n    transition: 0.5s;\n    cursor: pointer;\n    border: hsl(4, 53%, 90%) solid 5px;\n    font-size: 1.5rem;\n    font-family: inherit;\n    margin: 10px;\n    \n  }\n  .addNewTodo:hover {\n    background-color: hsl(4, 53%, 90%);\n    color: black\n  }\n.main {\n  grid-column: 2 / -1;\n  ;\n}\n.footer {\n  grid-column: 1 / -1;\n  padding: 1rem;\n  text-align: center;\n}\n.todo {\n    display: flex;\n    justify-content: space-around;\n}\n.overlayForm {\n  position:absolute;\n  top:50vh;\n  left:0px;\n  width:100vw;\n  height:0vh;\n  background:rgba(0,0,0,0.8);\n  z-index: -1;\n  opacity: 0;\n  padding: 80px 50px 0px 10px;\n  overflow:scroll;\n  box-sizing: border-box;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 500ms;\n}\n.overlayForm .closeForm {\n  position:absolute;\n  top: 20px;\n  right: 40px;\n  color: #fff;\n  font-size: 5rem;\n  font-weight: 600;\n  cursor:pointer;\n}\n\nbody.activeForm .overlayForm{\n  z-index: 2;\n  opacity: 1;\n  top: 0px;\n  height: 100vh;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 0ms;\n}\n.overlayForm h1 {\n  font-size: 3rem;\n  color: #fff;\n}\n\n.overlayForm p {\n  font-size: 2em;\n  color: #fff;\n}\n\n.overlayForm label {\n  display: block;\n  font-size: 2em;\n  color: #eb5e28;\n  margin-bottom: 20px;\n  font-weight: 500;\n}\n.overlayForm input {\n  width: 100%;\n  padding: 17px;\n  font-size: 25px;\n  border: 4px solid #fff;\n  background: transparent;\n  outline: none;\n  border-radius: 10px;\n  margin-bottom: 50px;\n  color: #fff;\n  font-weight: 500;\n}\nselect {\n  width: 100%;\n  font-size: inherit;\n}\nh2 {\n  font-family: inherit;\n  color: #eb5e28;\n}\n.currentProjects {\n  font-family: inherit;\n  color: #ffffff;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainContent */ "./src/mainContent.js");
/* harmony import */ var _todoObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoObjects */ "./src/todoObjects.js");
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
    _todoObjects__WEBPACK_IMPORTED_MODULE_1__.projectArray.forEach(function(element){
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
    formElementDue.append(formDueLabel, formDueInput)

    // form submit button container
    const formElementSubmit = document.createElement("div")
    formElementSubmit.classList.toggle("formElement")
    overlayForm.appendChild(formElementSubmit)
    // submit button 
    const formSubmitButton = document.createElement("button")
    formSubmitButton.addEventListener("click", () => {
        addTodo();
        toggleForm();
        removeForm();
        (0,_mainContent__WEBPACK_IMPORTED_MODULE_0__["default"])();
        console.log(_todoObjects__WEBPACK_IMPORTED_MODULE_1__.todoArray)
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
    const newTodo = new _todoObjects__WEBPACK_IMPORTED_MODULE_1__["default"](name,project,priority,dueDate)
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
    formNameInput.setAttribute("type", "text")
    formNameInput.setAttribute("id", "newProjectInput")
    formElementName.append(formNameLabel, formNameInput);

    // list of current Projects
    const currentProjects = document.createElement("div")
    currentProjects.classList.toggle("currentProjects")
    overlayForm.appendChild(currentProjects)
    const currentProjectsTitle = document.createElement("h2")
    currentProjectsTitle.textContent = "List of Current Projects"
    currentProjects.append(currentProjectsTitle)
    _todoObjects__WEBPACK_IMPORTED_MODULE_1__.projectArray.forEach((element) => {currentProjects.append(element)
    })

    // append form container to body
    document.getElementsByTagName("body")[0].appendChild(form)
}




/***/ }),

/***/ "./src/mainContent.js":
/*!****************************!*\
  !*** ./src/mainContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
        const todo = document.createElement("div")
        const todoCompleteBtn = document.createElement("div")
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
        main.appendChild(todo)
        todo.append(todoName, todoPriority, todoDueDate, todoProject, todoCompleteBtn)
        // eventlistener for complete button
        todoCompleteBtn.addEventListener("click", () => {
            // logic here to remove this single instance
            main.removeChild(todo)
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateMain);

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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "projectArray": () => (/* binding */ projectArray),
/* harmony export */   "todoArray": () => (/* binding */ todoArray)
/* harmony export */ });
let projectArray = ["gardening"]//push the project name of when a new todo is made in here
let todoArray = [] //push each todo object into this array to list them easier

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todoObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoObjects */ "./src/todoObjects.js");
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainContent */ "./src/mainContent.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ "./src/form.js");




// import {todoArray, projectArray} from "./todoObjects"
// grabbing the root node element

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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);
;(0,_mainContent__WEBPACK_IMPORTED_MODULE_2__["default"])()



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNZO0FBQ007QUFDdUI7QUFDN0QsV0FBVyx5QkFBeUI7QUFDcEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBYztBQUNsQixJQUFJLGtEQUFVO0FBQ2QsQ0FBQztBQUNEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVU7QUFDZCxJQUFJLGdEQUFRO0FBQ1osQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0Isb0RBQUk7QUFDMUI7OztBQUdBLGlFQUFlLElBQUk7QUFDbkIseURBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21haW5Db250ZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9Mb29wLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9PYmplY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FuaXQ6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBrYW5pdCwgc2Fucy1zZXJpZlxcbn1cXG4qIHtcXG4gIGJvcmRlcjogMnB4IHJlZCBzb2xpZFxcbn1cXG5ib2R5IHtcXG4gIG1hcmdpbjogMFxcbn1cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciBhdXRvIC8gYXV0byAxZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjUwLCAxMDAlLCA4JSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgY29sb3I6IHdoaXRlXFxufVxcbi5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLmxlZnRTaWRlYmFyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMiA7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmclxcbiAgXFxufVxcbi52aWV3QWxsIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IGhzbCg0LCA1MyUsIDkwJSkgc29saWQgNXB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuLnZpZXdBbGw6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNCwgNTMlLCA5MCUpO1xcbiAgY29sb3I6IGJsYWNrXFxufVxcbi5wcm9qZWN0cyB7XFxuICBncmlkLXJvdzogMiAvIC0xO1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbn1cXG4uYWRkTmV3UHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBtYXJnaW46IDEwcHg7XFxuICBcXG59XFxuLmFkZE5ld1Byb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQsIDUzJSwgOTAlKTtcXG4gIGNvbG9yOiBibGFja1xcbn1cXG4uYWRkTmV3VG9kbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IGhzbCg0LCA1MyUsIDkwJSkgc29saWQgNXB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgXFxuICB9XFxuICAuYWRkTmV3VG9kbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCg0LCA1MyUsIDkwJSk7XFxuICAgIGNvbG9yOiBibGFja1xcbiAgfVxcbi5tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gLTE7XFxuICA7XFxufVxcbi5mb290ZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5vdmVybGF5Rm9ybSB7XFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gIHRvcDo1MHZoO1xcbiAgbGVmdDowcHg7XFxuICB3aWR0aDoxMDB2dztcXG4gIGhlaWdodDowdmg7XFxuICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC44KTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBhZGRpbmc6IDgwcHggNTBweCAwcHggMTBweDtcXG4gIG92ZXJmbG93OnNjcm9sbDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0cmFuc2l0aW9uOiB0b3AgNTAwbXMgZWFzZS1pbi1vdXQsXFxuICAgICAgICAgICAgICBvcGFjaXR5IDUwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgaGVpZ2h0IDBtcyBlYXNlLWluLW91dCA1MDBtcztcXG59XFxuLm92ZXJsYXlGb3JtIC5jbG9zZUZvcm0ge1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogNDBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG5ib2R5LmFjdGl2ZUZvcm0gLm92ZXJsYXlGb3Jte1xcbiAgei1pbmRleDogMjtcXG4gIG9wYWNpdHk6IDE7XFxuICB0b3A6IDBweDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB0cmFuc2l0aW9uOiB0b3AgNTAwbXMgZWFzZS1pbi1vdXQsXFxuICAgICAgICAgICAgICBvcGFjaXR5IDUwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgaGVpZ2h0IDBtcyBlYXNlLWluLW91dCAwbXM7XFxufVxcbi5vdmVybGF5Rm9ybSBoMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm92ZXJsYXlGb3JtIHAge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm92ZXJsYXlGb3JtIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBjb2xvcjogI2ViNWUyODtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4ub3ZlcmxheUZvcm0gaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxN3B4O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5zZWxlY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcbmgyIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6ICNlYjVlMjg7XFxufVxcbi5jdXJyZW50UHJvamVjdHMge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNUO0FBQ0Y7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFLGFBQWE7RUFDYix1Q0FBdUM7RUFDdkMsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYjtBQUNGO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtFQUNiOztBQUVGO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGtDQUFrQztFQUNsQztBQUNGO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFlBQVk7O0FBRWQ7QUFDQTtFQUNFLGtDQUFrQztFQUNsQztBQUNGO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixZQUFZOztFQUVkO0VBQ0E7SUFDRSxrQ0FBa0M7SUFDbEM7RUFDRjtBQUNGO0VBQ0UsbUJBQW1COztBQUVyQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsUUFBUTtFQUNSLFdBQVc7RUFDWCxVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEI7OzBDQUV3QztBQUMxQztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YsUUFBUTtFQUNSLGFBQWE7RUFDYjs7d0NBRXNDO0FBQ3hDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthbml0Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXG46cm9vdCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseToga2FuaXQsIHNhbnMtc2VyaWZcXG59XFxuKiB7XFxuICBib3JkZXI6IDJweCByZWQgc29saWRcXG59XFxuYm9keSB7XFxuICBtYXJnaW46IDBcXG59XFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogYXV0byAxZnIgYXV0byAvIGF1dG8gMWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI1MCwgMTAwJSwgOCUpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGNvbG9yOiB3aGl0ZVxcbn1cXG4uaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbi5sZWZ0U2lkZWJhciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDIgO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnJcXG4gIFxcbn1cXG4udmlld0FsbCB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcbi52aWV3QWxsOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQsIDUzJSwgOTAlKTtcXG4gIGNvbG9yOiBibGFja1xcbn1cXG4ucHJvamVjdHMge1xcbiAgZ3JpZC1yb3c6IDIgLyAtMTtcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxuLmFkZE5ld1Byb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogaHNsKDQsIDUzJSwgOTAlKSBzb2xpZCA1cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgXFxufVxcbi5hZGROZXdQcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0LCA1MyUsIDkwJSk7XFxuICBjb2xvcjogYmxhY2tcXG59XFxuLmFkZE5ld1RvZG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDVweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIFxcbiAgfVxcbiAgLmFkZE5ld1RvZG86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNCwgNTMlLCA5MCUpO1xcbiAgICBjb2xvcjogYmxhY2tcXG4gIH1cXG4ubWFpbiB7XFxuICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbiAgO1xcbn1cXG4uZm9vdGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4ub3ZlcmxheUZvcm0ge1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB0b3A6NTB2aDtcXG4gIGxlZnQ6MHB4O1xcbiAgd2lkdGg6MTAwdnc7XFxuICBoZWlnaHQ6MHZoO1xcbiAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuOCk7XFxuICB6LWluZGV4OiAtMTtcXG4gIG9wYWNpdHk6IDA7XFxuICBwYWRkaW5nOiA4MHB4IDUwcHggMHB4IDEwcHg7XFxuICBvdmVyZmxvdzpzY3JvbGw7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdHJhbnNpdGlvbjogdG9wIDUwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgIGhlaWdodCAwbXMgZWFzZS1pbi1vdXQgNTAwbXM7XFxufVxcbi5vdmVybGF5Rm9ybSAuY2xvc2VGb3JtIHtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgcmlnaHQ6IDQwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuYm9keS5hY3RpdmVGb3JtIC5vdmVybGF5Rm9ybXtcXG4gIHotaW5kZXg6IDI7XFxuICBvcGFjaXR5OiAxO1xcbiAgdG9wOiAwcHg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdHJhbnNpdGlvbjogdG9wIDUwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgIGhlaWdodCAwbXMgZWFzZS1pbi1vdXQgMG1zO1xcbn1cXG4ub3ZlcmxheUZvcm0gaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5vdmVybGF5Rm9ybSBwIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5vdmVybGF5Rm9ybSBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgY29sb3I6ICNlYjVlMjg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLm92ZXJsYXlGb3JtIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTdweDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5oMiB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiAjZWI1ZTI4O1xcbn1cXG4uY3VycmVudFByb2plY3RzIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gLy8gRE9NIG1hbmlwdWxhdGlvbiBmb3IgaW5wdXQgbmV3IHRvZG8gZm9ybSBhbmQgbmV3IHByb2plY3QgZm9ybVxuXG5pbXBvcnQgdXBkYXRlTWFpbiBmcm9tIFwiLi9tYWluQ29udGVudFwiXG5pbXBvcnQgVG9kbywgeyB0b2RvQXJyYXkgfSBmcm9tIFwiLi90b2RvT2JqZWN0c1wiXG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi90b2RvT2JqZWN0c1wiXG5cbmZ1bmN0aW9uIHRvZG9Gb3JtICgpe1xuICAgIC8vIGNvbnRhaW5lciBlbGVtZW50cyBmb3IgZm9ybVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImZvcm1cIilcbiAgICBjb25zdCBvdmVybGF5Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBvdmVybGF5Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwib3ZlcmxheUZvcm1cIilcbiAgICBmb3JtLmFwcGVuZENoaWxkKG92ZXJsYXlGb3JtKVxuICAgIC8vIGNsb3NlIGZvcm0gJ3gnIGJ1dHRvblxuICAgIGNvbnN0IGNsb3NlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjbG9zZUZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImNsb3NlRm9ybVwiKVxuICAgIGNsb3NlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0b2dnbGVGb3JtKCk7XG4gICAgICAgIHJlbW92ZUZvcm0oKTtcbiAgICB9KVxuICAgIGNsb3NlRm9ybS5pbm5lckhUTUwgPSBcIiZ0aW1lc1wiXG4gICAgb3ZlcmxheUZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VGb3JtKVxuICAgIC8vIGZvcm0gaGVhZGVyXG4gICAgY29uc3QgZm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGZvcm1IZWFkZXIudGV4dENvbnRlbnQgPSBcIkFkZCBhIG5ldyBUb0RvXCJcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKTtcblxuICAgIC8vIGZvcm0gZWxlbWVudCAnTmFtZScgY29udGFpbmVyIFxuICAgIGNvbnN0IGZvcm1FbGVtZW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBmb3JtRWxlbWVudE5hbWUuY2xhc3NMaXN0LnRvZ2dsZShcImZvcm1FbGVtZW50XCIpXG4gICAgb3ZlcmxheUZvcm0uYXBwZW5kQ2hpbGQoZm9ybUVsZW1lbnROYW1lKVxuICAgIC8vICdOYW1lJyBpbnB1dCBmaWVsZHMgLSB0ZXh0clxuICAgIGNvbnN0IGZvcm1OYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICBmb3JtTmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIk5hbWVcIilcbiAgICBmb3JtTmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lIG9mIFRvRG9cIjtcbiAgICBjb25zdCBmb3JtTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZm9ybU5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKVxuICAgIGZvcm1OYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtTmFtZVwiKVxuICAgIGZvcm1FbGVtZW50TmFtZS5hcHBlbmQoZm9ybU5hbWVMYWJlbCwgZm9ybU5hbWVJbnB1dCk7XG4gICAgXG4gICAgLy8gZm9ybSAnUHJvamVjdCcgY29udGFpbmVyXG4gICAgY29uc3QgZm9ybUVsZW1lbnRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZvcm1FbGVtZW50UHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUVsZW1lbnRcIilcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudFByb2plY3QpXG4gICAgLy8gJ1Byb2plY3QnIGlucHV0IGZpZWxkcyAtIERyb3Bkb3duXG4gICAgY29uc3QgZm9ybVByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGZvcm1Qcm9qZWN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdElucHV0XCIpXG4gICAgZm9ybVByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiU2VsZWN0IHByb2plY3Q6XCI7XG4gICAgY29uc3QgZm9ybVByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcbiAgICBmb3JtUHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0c1wiKVxuICAgIGZvcm1Qcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0SW5wdXRcIilcbiAgICBmb3JtRWxlbWVudFByb2plY3QuYXBwZW5kKGZvcm1Qcm9qZWN0TGFiZWwsIGZvcm1Qcm9qZWN0SW5wdXQpO1xuICAgIC8vIGxvb3AgdGhyb3VnaCBwcm9qZWN0IGFycmF5IHRvIGdyYWIgdGhlIHByb2plY3RzIGZvciB0aGUgZHJvcGRvd25cbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KXtcbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gZWxlbWVudDtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gYCR7ZWxlbWVudH1gXG4gICAgICAgIGZvcm1Qcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICAvLyBmb3JtICdwcmlvcml0eScgY29udGFpbmVyXG4gICAgY29uc3QgZm9ybUVsZW1lbnRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBmb3JtRWxlbWVudFByaW9yaXR5LmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtRWxlbWVudFwiKVxuICAgIG92ZXJsYXlGb3JtLmFwcGVuZENoaWxkKGZvcm1FbGVtZW50UHJpb3JpdHkpXG4gICAgLy8gJ1ByaW9yaXR5JyBpbnB1dCBmaWVsZHMgLSBEcm9wZG93blxuICAgIGNvbnN0IGZvcm1Qcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgZm9ybVByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlJbnB1dFwiKVxuICAgIGZvcm1Qcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJTZWxlY3QgcHJpb3JpdHk6XCI7XG4gICAgY29uc3QgZm9ybVByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpXG4gICAgZm9ybVByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpXG4gICAgZm9ybVByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eUlucHV0XCIpXG4gICAgZm9ybUVsZW1lbnRQcm9qZWN0LmFwcGVuZChmb3JtUHJpb3JpdHlMYWJlbCwgZm9ybVByaW9yaXR5SW5wdXQpO1xuICAgIC8vIHByaW9yaXR5IGRyb3Bkb3duIG9wdGlvbnNcbiAgICBjb25zdCBwcmlvcml0eVVyZ2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICBwcmlvcml0eVVyZ2VudC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlVyZ2VudFwiKVxuICAgIHByaW9yaXR5VXJnZW50LnRleHRDb250ZW50ID0gXCJVcmdlbnRcIlxuICAgIGNvbnN0IHByaW9yaXR5Um91dGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICBwcmlvcml0eVJvdXRpbmUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJSb3V0aW5lXCIpXG4gICAgcHJpb3JpdHlSb3V0aW5lLnRleHRDb250ZW50ID0gXCJSb3V0aW5lXCJcbiAgICBjb25zdCBwcmlvcml0eUJhY2tCdXJuZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXG4gICAgcHJpb3JpdHlCYWNrQnVybmVyLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQmFja2J1cm5lclwiKVxuICAgIHByaW9yaXR5QmFja0J1cm5lci50ZXh0Q29udGVudCA9IFwiQmFjay1CdXJuZXJcIlxuICAgIGZvcm1Qcmlvcml0eUlucHV0LmFwcGVuZChwcmlvcml0eVVyZ2VudCwgcHJpb3JpdHlSb3V0aW5lLCBwcmlvcml0eUJhY2tCdXJuZXIpXG5cbiAgICAvLyBmb3JtICdkYXRlIGR1ZScgY29udGFpbmVyXG4gICAgY29uc3QgZm9ybUVsZW1lbnREdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZm9ybUVsZW1lbnREdWUuY2xhc3NMaXN0LnRvZ2dsZShcImZvcm1FbGVtZW50XCIpXG4gICAgb3ZlcmxheUZvcm0uYXBwZW5kQ2hpbGQoZm9ybUVsZW1lbnREdWUpXG4gICAgLy8gJ2RhdGUgZHVlJyBpbnB1dCBmaWVsZHMgLSBkYXRlIHBpY2tlclxuICAgIGNvbnN0IGZvcm1EdWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGZvcm1EdWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkdWVJbnB1dFwiKVxuICAgIGZvcm1EdWVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIGJ5OlwiXG4gICAgY29uc3QgZm9ybUR1ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZm9ybUR1ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpXG4gICAgZm9ybUR1ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlSW5wdXRcIilcbiAgICBmb3JtRHVlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZURhdGVcIilcbiAgICBmb3JtRWxlbWVudER1ZS5hcHBlbmQoZm9ybUR1ZUxhYmVsLCBmb3JtRHVlSW5wdXQpXG5cbiAgICAvLyBmb3JtIHN1Ym1pdCBidXR0b24gY29udGFpbmVyXG4gICAgY29uc3QgZm9ybUVsZW1lbnRTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZm9ybUVsZW1lbnRTdWJtaXQuY2xhc3NMaXN0LnRvZ2dsZShcImZvcm1FbGVtZW50XCIpXG4gICAgb3ZlcmxheUZvcm0uYXBwZW5kQ2hpbGQoZm9ybUVsZW1lbnRTdWJtaXQpXG4gICAgLy8gc3VibWl0IGJ1dHRvbiBcbiAgICBjb25zdCBmb3JtU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGZvcm1TdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgYWRkVG9kbygpO1xuICAgICAgICB0b2dnbGVGb3JtKCk7XG4gICAgICAgIHJlbW92ZUZvcm0oKTtcbiAgICAgICAgdXBkYXRlTWFpbigpO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvQXJyYXkpXG4gICAgfSkgXG5cbiAgICBmb3JtU3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIilcbiAgICBmb3JtU3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0XCIpXG4gICAgZm9ybUVsZW1lbnRTdWJtaXQuYXBwZW5kQ2hpbGQoZm9ybVN1Ym1pdEJ1dHRvbilcbiAgICAvLyBhcHBlbmQgdGhlIGVudGlyZSBmb3JtIGNvbnRhaW5lciB0byB0aGUgYm9keSB3aGVuIGNhbGxlZFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5hcHBlbmRDaGlsZChmb3JtKVxuICAgIGNvbnNvbGUubG9nKFwidG9kb0Zvcm0gZnVuY3Rpb24gaXMgZmlyaW5nXCIpXG59XG5cbi8vIGZ1bmN0aW9uIHRvIHRvZ2dsZSBjbGFzcyB0aGF0IGJyaW5ncyB1cCBhIG5ldyB0b2RvIGZvcm1cbmZ1bmN0aW9uIHRvZ2dsZUZvcm0oKXtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVGb3JtXCIpXG4gICAgY29uc29sZS5sb2coXCJ0b2dnbGVGb3JtIGlzIGZpcmluZ1wiKVxufVxuLy8gZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGNyZWF0ZSBhIG5ldyBUb2RvIGZvcm0gYnV0dG9uIGNsaWNrZWQsIGFmdGVyIGNvbXBsZXRpbmcgdGhlIGZvcm1cbmZ1bmN0aW9uIGFkZFRvZG8obmFtZSwgcHJvamVjdCwgcHJpb3JpdHksIGR1ZURhdGUpe1xuICAgIG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1OYW1lXCIpLnZhbHVlO1xuICAgIHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RJbnB1dFwiKS52YWx1ZTtcbiAgICBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlJbnB1dFwiKS52YWx1ZTtcbiAgICBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVJbnB1dFwiKS52YWx1ZTtcbiAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8obmFtZSxwcm9qZWN0LHByaW9yaXR5LGR1ZURhdGUpXG4gICAgbmV3VG9kby5wdXNoVG9kbygpO1xufVxuXG4vLyBmdW5jdGlvbiB0byByZW1vdmUgdGhlIGZvcm0gZWxlbWVudCBmcm9tIERPTSB3aGVuIGNsb3NlZFxuZnVuY3Rpb24gcmVtb3ZlRm9ybSgpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmb3JtXCIpXG4gICAgd2hpbGUgKGVsZW1lbnRzLmxlbmd0aCA+IDApe1xuICAgICAgICBlbGVtZW50c1swXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnRzWzBdKVxuICAgIH1cbn0gXG5cbi8vIGZvcm0gZm9yIGFkZGluZyBhIG5ldyBQcm9qZWN0IChyZW1lbWJlciB0byBpbmNsdWRlIGEgbGlzdCBvZiBjdXJyZW50IHByb2plY3RzKVxuZnVuY3Rpb24gbmV3UHJvamVjdEZvcm0oKXtcbiAgICAvLyBjb250YWluZXIgZWxlbWVudHMgZm9yIGZvcm1cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcbiAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtXCIpXG4gICAgY29uc3Qgb3ZlcmxheUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgb3ZlcmxheUZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcIm92ZXJsYXlGb3JtXCIpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChvdmVybGF5Rm9ybSlcblxuICAgIC8vIGNsb3NlIGZvcm0gJ3gnIGJ1dHRvblxuICAgIGNvbnN0IGNsb3NlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjbG9zZUZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImNsb3NlRm9ybVwiKVxuICAgIGNsb3NlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0b2dnbGVGb3JtKCk7XG4gICAgICAgIHJlbW92ZUZvcm0oKTtcbiAgICB9KVxuICAgIGNsb3NlRm9ybS5pbm5lckhUTUwgPSBcIiZ0aW1lc1wiXG4gICAgb3ZlcmxheUZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VGb3JtKVxuXG4gICAgLy8gZm9ybSBoZWFkZXJcbiAgICBjb25zdCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgZm9ybUhlYWRlci50ZXh0Q29udGVudCA9IFwiQWRkIGEgbmV3IFByb2plY3RcIlxuICAgIG92ZXJsYXlGb3JtLmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpO1xuXG4gICAgLy8gcHJvamVjdCBuYW1lIGlucHV0XG4gICAgY29uc3QgZm9ybUVsZW1lbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZvcm1FbGVtZW50TmFtZS5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUVsZW1lbnRcIilcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudE5hbWUpXG4gICAgLy8gJ05hbWUnIGlucHV0IGZpZWxkcyAtIHRleHRcbiAgICBjb25zdCBmb3JtTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgZm9ybU5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJOYW1lXCIpXG4gICAgZm9ybU5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZSBvZiBOZXcgUHJvamVjdFwiO1xuICAgIGNvbnN0IGZvcm1OYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBmb3JtTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpXG4gICAgZm9ybU5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ld1Byb2plY3RJbnB1dFwiKVxuICAgIGZvcm1FbGVtZW50TmFtZS5hcHBlbmQoZm9ybU5hbWVMYWJlbCwgZm9ybU5hbWVJbnB1dCk7XG5cbiAgICAvLyBsaXN0IG9mIGN1cnJlbnQgUHJvamVjdHNcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY3VycmVudFByb2plY3RzLmNsYXNzTGlzdC50b2dnbGUoXCJjdXJyZW50UHJvamVjdHNcIilcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChjdXJyZW50UHJvamVjdHMpXG4gICAgY29uc3QgY3VycmVudFByb2plY3RzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIilcbiAgICBjdXJyZW50UHJvamVjdHNUaXRsZS50ZXh0Q29udGVudCA9IFwiTGlzdCBvZiBDdXJyZW50IFByb2plY3RzXCJcbiAgICBjdXJyZW50UHJvamVjdHMuYXBwZW5kKGN1cnJlbnRQcm9qZWN0c1RpdGxlKVxuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7Y3VycmVudFByb2plY3RzLmFwcGVuZChlbGVtZW50KVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmQgZm9ybSBjb250YWluZXIgdG8gYm9keVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5hcHBlbmRDaGlsZChmb3JtKVxufVxuXG5leHBvcnQge1xuICAgIHRvZG9Gb3JtLFxuICAgIHRvZ2dsZUZvcm0sXG4gICAgcmVtb3ZlRm9ybSxcbiAgICBuZXdQcm9qZWN0Rm9ybVxufVxuIiwiLy8gaW1wb3J0aW5nIHRoZSBhcnJheXMgYW5kIHRoZSBET00gZWxlbWVudFxuaW1wb3J0IHRvZG9Mb29wIGZyb20gXCIuL3RvZG9Mb29wXCI7XG5pbXBvcnQge3Byb2plY3RBcnJheSx0b2RvQXJyYXkgfSBmcm9tIFwiLi90b2RvT2JqZWN0c1wiO1xuaW1wb3J0IHRvZG9Gb3JtIGZyb20gXCIuL2Zvcm1cIjtcblxuLy8gZnVuY3Rpb24gdG8gY3JlYXRlIGFuZCBhcHBlbmQgdGhlIG1haW4gc2VjdGlvbiB3aXRoIGVhY2ggdG9kb1xuZnVuY3Rpb24gdXBkYXRlTWFpbiAoKSB7XG4gICAgdG9kb0FycmF5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIilcbiAgICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdG9kb0NvbXBsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdG9kb1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9cIilcbiAgICAgICAgdG9kb0NvbXBsZXRlQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvQ29tcGxldEJ0blwiKVxuICAgICAgICB0b2RvQ29tcGxldGVCdG4udGV4dENvbnRlbnQgPSBcIuKclO+4j1wiXG4gICAgICAgIHRvZG9OYW1lLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvTmFtZVwiKVxuICAgICAgICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9Qcmlvcml0eVwiKVxuICAgICAgICB0b2RvUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb1Byb2plY3RcIilcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0b2RvKVxuICAgICAgICB0b2RvLmFwcGVuZCh0b2RvTmFtZSwgdG9kb1ByaW9yaXR5LCB0b2RvRHVlRGF0ZSwgdG9kb1Byb2plY3QsIHRvZG9Db21wbGV0ZUJ0bilcbiAgICAgICAgLy8gZXZlbnRsaXN0ZW5lciBmb3IgY29tcGxldGUgYnV0dG9uXG4gICAgICAgIHRvZG9Db21wbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gbG9naWMgaGVyZSB0byByZW1vdmUgdGhpcyBzaW5nbGUgaW5zdGFuY2VcbiAgICAgICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQodG9kbylcbiAgICAgICAgICAgIHRvZG9BcnJheS5zcGxpY2UodG9kb0FycmF5LmluZGV4T2YoZWxlbWVudCksIDEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9kb0FycmF5KVxuICAgICAgICB9KVxuICAgICAgICAvLyBsb29wcyBvdmVyIGVhY2ggb2JqZWN0IGFuZCBleHRyYWN0cyB0aGUgdmFsdWUuICh0ZXh0Q29udGVudCBmb3Igbm93LCB3aWxsIGNoYW5nZSBsYXRlcilcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGVsZW1lbnQpe1xuICAgICAgICAgICAgdG9kb05hbWUudGV4dENvbnRlbnQgPSBlbGVtZW50Lm5hbWU7XG4gICAgICAgICAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBlbGVtZW50LnByaW9yaXR5O1xuICAgICAgICAgICAgdG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSBlbGVtZW50LmR1ZURhdGU7XG4gICAgICAgICAgICB0b2RvUHJvamVjdC50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJvamVjdDtcbiAgICAgICAgICAgIHRvZG8uYXBwZW5kKClcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZU1haW4iLCIvLyBtYWtlIGEgZnVuY3Rpb24gdGhhdCBsb29wcyB0aHJvdWdoIHRoZSBvYmplY3Qgb24gY3JlYXRpb24gdG8gZmlsbCBpbiB0aGUgRE9NPyIsImxldCBwcm9qZWN0QXJyYXkgPSBbXCJnYXJkZW5pbmdcIl0vL3B1c2ggdGhlIHByb2plY3QgbmFtZSBvZiB3aGVuIGEgbmV3IHRvZG8gaXMgbWFkZSBpbiBoZXJlXG5sZXQgdG9kb0FycmF5ID0gW10gLy9wdXNoIGVhY2ggdG9kbyBvYmplY3QgaW50byB0aGlzIGFycmF5IHRvIGxpc3QgdGhlbSBlYXNpZXJcblxuLy8gZmFjdG9yeSBmdW5jdGlvbiBmb3IgbmV3IFRvZG8gb2JqZWN0c1xuZnVuY3Rpb24gVG9kbyAobmFtZSwgcHJvamVjdCwgcHJpb3JpdHksIGR1ZURhdGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wdXNoVG9kbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0b2RvQXJyYXkucHVzaCh0aGlzKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUb2RvIFxuZXhwb3J0IHtcbiAgICBwcm9qZWN0QXJyYXksXG4gICAgdG9kb0FycmF5XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9PYmplY3RzXCJcbmltcG9ydCB1cGRhdGVNYWluIGZyb20gXCIuL21haW5Db250ZW50XCJcbmltcG9ydCB7IHRvZ2dsZUZvcm0sIHRvZG9Gb3JtLCBuZXdQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL2Zvcm1cIlxuLy8gaW1wb3J0IHt0b2RvQXJyYXksIHByb2plY3RBcnJheX0gZnJvbSBcIi4vdG9kb09iamVjdHNcIlxuLy8gZ3JhYmJpbmcgdGhlIHJvb3Qgbm9kZSBlbGVtZW50XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIilcblxuLy8gZ3JpZCBjb250YWluZXJcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiY29udGFpbmVyXCIpXG5cbi8vIGhlYWRlclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuaGVhZGVyLmNsYXNzTGlzdC50b2dnbGUoXCJoZWFkZXJcIilcbmhlYWRlci50ZXh0Q29udGVudCA9IFwiVG8gRG9cIlxuXG4vLyBsZWZ0IHNpZGViYXJcbmNvbnN0IGxlZnRTaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxubGVmdFNpZGViYXIuY2xhc3NMaXN0LnRvZ2dsZShcImxlZnRTaWRlYmFyXCIpXG5jb25zdCB2aWV3QWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnZpZXdBbGwuY2xhc3NMaXN0LnRvZ2dsZShcInZpZXdBbGxcIilcbnZpZXdBbGwudGV4dENvbnRlbnQgPSBcIlZpZXcgQWxsIFRvZG9zXCJcbmNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxucHJvamVjdHMuY2xhc3NMaXN0LnRvZ2dsZShcInByb2plY3RzXCIpXG5wcm9qZWN0cy50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIlxuY29uc3QgYWRkTmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbmFkZE5ld1Byb2plY3QuY2xhc3NMaXN0LnRvZ2dsZShcImFkZE5ld1Byb2plY3RcIilcbmFkZE5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBcIisgQWRkIE5ldyBQcm9qZWN0XCJcbmFkZE5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgIG5ld1Byb2plY3RGb3JtKClcbiAgICB0b2dnbGVGb3JtKClcbn0pXG5wcm9qZWN0cy5hcHBlbmRDaGlsZChhZGROZXdQcm9qZWN0KVxuXG5cbi8vIG1haW4gY29udGVudFxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbm1haW4uY2xhc3NMaXN0LnRvZ2dsZShcIm1haW5cIilcbmNvbnN0IGFkZE5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG5hZGROZXdUb2RvLmNsYXNzTGlzdC50b2dnbGUoXCJhZGROZXdUb2RvXCIpXG5hZGROZXdUb2RvLnRleHRDb250ZW50ID0gXCIrIEFkZCBOZXcgVG9Eb1wiXG5hZGROZXdUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9nZ2xlRm9ybSgpXG4gICAgdG9kb0Zvcm0oKVxufSlcbm1haW4uaW5zZXJ0QmVmb3JlKGFkZE5ld1RvZG8sIG1haW4uZmlyc3RDaGlsZClcblxuLy8gZm9vdGVyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5mb290ZXIuY2xhc3NMaXN0LnRvZ2dsZShcImZvb3RlclwiKVxuZm9vdGVyLnRleHRDb250ZW50ID0gXCJDcmVhdGVkIGJ5IEpvcmRhbiBVbG1lciwgMjAyMlwiXG4vLyBhcHBlbmRpbmcgdG8gdGhlIHBhcmVudCBlbGVtZW50c1xuY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpXG5jb250YWluZXIuYXBwZW5kKGhlYWRlciwgbGVmdFNpZGViYXIsIG1haW4sIGZvb3RlcilcbmxlZnRTaWRlYmFyLmFwcGVuZCh2aWV3QWxsLCBwcm9qZWN0cylcblxuLy8gdGVzdGluZyBhIHJhbmRvbSBUb2RvXG5jb25zdCBnYXJkZW5pbmcgPSBuZXcgVG9kbyhcIkdhcmRlbmluZ1wiLFwiR2FyZGVuaW5nXCIsXCJVcmdlbnRcIixcIm1vbmRheVwiKVxuZ2FyZGVuaW5nLnB1c2hUb2RvKClcblxuXG5leHBvcnQgZGVmYXVsdCBtYWluXG51cGRhdGVNYWluKClcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=