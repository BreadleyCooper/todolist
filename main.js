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
___CSS_LOADER_EXPORT___.push([module.id, "\n:root {\n  font-size: 18px;\n  margin: 0;\n  font-family: kanit, sans-serif\n}\n* {\n  border: 2px red solid\n}\nbody {\n  margin: 0\n}\n.container {\n  display: grid;\n  grid-template: auto 1fr auto / auto 1fr;\n  background-color: hsl(250, 100%, 8%);\n  height: 100vh;\n  color: white\n}\n.header {\n  grid-column: 1 / -1;\n  padding: 1.5rem;\n  font-size: 2rem;\n}\n.leftSidebar {\n  grid-column: 1 / 2 ;\n  padding: 2rem;\n  display: grid;\n  grid-template-rows: 1fr 4fr\n  \n}\n.viewAll {\n  grid-row: 1 / 2;\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n}\n.viewAll:hover{\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.projects {\n  grid-row: 2 / -1;\n  padding-top: 1.5rem;\n  display: grid;\n  grid-template-rows: auto 1fr;\n}\n.addNewProject {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n  \n}\n.addNewProject:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.addNewTodo {\n    background-color: transparent;\n    color: white;\n    border-radius: 10px;\n    height: 4rem;\n    transition: 0.5s;\n    cursor: pointer;\n    border: hsl(4, 53%, 90%) solid 5px;\n    font-size: 1.5rem;\n    font-family: inherit;\n    margin: 10px;\n    \n  }\n  .addNewTodo:hover {\n    background-color: hsl(4, 53%, 90%);\n    color: black\n  }\n.main {\n  grid-column: 2 / -1;\n  ;\n}\n.footer {\n  grid-column: 1 / -1;\n  padding: 1rem;\n  text-align: center;\n}\n.todo {\n    display: flex;\n    justify-content: space-around;\n}\n.overlayForm {\n  position:absolute;\n  top:50vh;\n  left:0px;\n  width:100vw;\n  height:0vh;\n  background:rgba(0,0,0,0.8);\n  z-index: -1;\n  opacity: 0;\n  padding: 80px 50px 0px 10px;\n  overflow:scroll;\n  box-sizing: border-box;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 500ms;\n}\n.overlayForm .closeForm {\n  position:absolute;\n  top: 20px;\n  right: 40px;\n  color: #fff;\n  font-size: 5rem;\n  font-weight: 600;\n  cursor:pointer;\n}\n\nbody.activeForm .overlayForm{\n  z-index: 2;\n  opacity: 1;\n  top: 0px;\n  height: 100vh;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 0ms;\n}\n.overlayForm h1 {\n  font-size: 3rem;\n  color: #fff;\n}\n\n.overlayForm p {\n  font-size: 2em;\n  color: #fff;\n}\n\n.overlayForm label {\n  display: block;\n  font-size: 2em;\n  color: #eb5e28;\n  margin-bottom: 20px;\n  font-weight: 500;\n}\n.overlayForm input {\n  width: 100%;\n  padding: 17px;\n  font-size: 25px;\n  border: 4px solid #fff;\n  background: transparent;\n  outline: none;\n  border-radius: 10px;\n  margin-bottom: 50px;\n  color: #fff;\n  font-weight: 500;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AAEA;EACE,eAAe;EACf,SAAS;EACT;AACF;AACA;EACE;AACF;AACA;EACE;AACF;AACA;EACE,aAAa;EACb,uCAAuC;EACvC,oCAAoC;EACpC,aAAa;EACb;AACF;AACA;EACE,mBAAmB;EACnB,eAAe;EACf,eAAe;AACjB;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb;;AAEF;AACA;EACE,eAAe;EACf,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,kCAAkC;EAClC;AACF;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,4BAA4B;AAC9B;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;;AAEd;AACA;EACE,kCAAkC;EAClC;AACF;AACA;IACI,6BAA6B;IAC7B,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,kCAAkC;IAClC,iBAAiB;IACjB,oBAAoB;IACpB,YAAY;;EAEd;EACA;IACE,kCAAkC;IAClC;EACF;AACF;EACE,mBAAmB;;AAErB;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,kBAAkB;AACpB;AACA;IACI,aAAa;IACb,6BAA6B;AACjC;AACA;EACE,iBAAiB;EACjB,QAAQ;EACR,QAAQ;EACR,WAAW;EACX,UAAU;EACV,0BAA0B;EAC1B,WAAW;EACX,UAAU;EACV,2BAA2B;EAC3B,eAAe;EACf,sBAAsB;EACtB;;0CAEwC;AAC1C;AACA;EACE,iBAAiB;EACjB,SAAS;EACT,WAAW;EACX,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,UAAU;EACV,QAAQ;EACR,aAAa;EACb;;wCAEsC;AACxC;AACA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,cAAc;EACd,cAAc;EACd,cAAc;EACd,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,WAAW;EACX,gBAAgB;AAClB","sourcesContent":["\n@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n:root {\n  font-size: 18px;\n  margin: 0;\n  font-family: kanit, sans-serif\n}\n* {\n  border: 2px red solid\n}\nbody {\n  margin: 0\n}\n.container {\n  display: grid;\n  grid-template: auto 1fr auto / auto 1fr;\n  background-color: hsl(250, 100%, 8%);\n  height: 100vh;\n  color: white\n}\n.header {\n  grid-column: 1 / -1;\n  padding: 1.5rem;\n  font-size: 2rem;\n}\n.leftSidebar {\n  grid-column: 1 / 2 ;\n  padding: 2rem;\n  display: grid;\n  grid-template-rows: 1fr 4fr\n  \n}\n.viewAll {\n  grid-row: 1 / 2;\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n}\n.viewAll:hover{\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.projects {\n  grid-row: 2 / -1;\n  padding-top: 1.5rem;\n  display: grid;\n  grid-template-rows: auto 1fr;\n}\n.addNewProject {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n  \n}\n.addNewProject:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.addNewTodo {\n    background-color: transparent;\n    color: white;\n    border-radius: 10px;\n    height: 4rem;\n    transition: 0.5s;\n    cursor: pointer;\n    border: hsl(4, 53%, 90%) solid 5px;\n    font-size: 1.5rem;\n    font-family: inherit;\n    margin: 10px;\n    \n  }\n  .addNewTodo:hover {\n    background-color: hsl(4, 53%, 90%);\n    color: black\n  }\n.main {\n  grid-column: 2 / -1;\n  ;\n}\n.footer {\n  grid-column: 1 / -1;\n  padding: 1rem;\n  text-align: center;\n}\n.todo {\n    display: flex;\n    justify-content: space-around;\n}\n.overlayForm {\n  position:absolute;\n  top:50vh;\n  left:0px;\n  width:100vw;\n  height:0vh;\n  background:rgba(0,0,0,0.8);\n  z-index: -1;\n  opacity: 0;\n  padding: 80px 50px 0px 10px;\n  overflow:scroll;\n  box-sizing: border-box;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 500ms;\n}\n.overlayForm .closeForm {\n  position:absolute;\n  top: 20px;\n  right: 40px;\n  color: #fff;\n  font-size: 5rem;\n  font-weight: 600;\n  cursor:pointer;\n}\n\nbody.activeForm .overlayForm{\n  z-index: 2;\n  opacity: 1;\n  top: 0px;\n  height: 100vh;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 0ms;\n}\n.overlayForm h1 {\n  font-size: 3rem;\n  color: #fff;\n}\n\n.overlayForm p {\n  font-size: 2em;\n  color: #fff;\n}\n\n.overlayForm label {\n  display: block;\n  font-size: 2em;\n  color: #eb5e28;\n  margin-bottom: 20px;\n  font-weight: 500;\n}\n.overlayForm input {\n  width: 100%;\n  padding: 17px;\n  font-size: 25px;\n  border: 4px solid #fff;\n  background: transparent;\n  outline: none;\n  border-radius: 10px;\n  margin-bottom: 50px;\n  color: #fff;\n  font-weight: 500;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "todoForm": () => (/* binding */ todoForm),
/* harmony export */   "toggleForm": () => (/* binding */ toggleForm)
/* harmony export */ });
/* harmony import */ var _todoObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoObjects */ "./src/todoObjects.js");
// // DOM manipulation for input new todo form



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
    closeForm.addEventListener("click", toggleForm())
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
    const formProjectInput = document.createElement("input")
    formProjectInput.setAttribute("list", "projects")
    formProjectInput.setAttribute("id", "projectInput")
    const formProjectList = document.createElement("datalist")
    formProjectList.setAttribute("id", "projects")
    formElementProject.append(formProjectLabel, formProjectInput, formProjectList);
    // loop through project array to grab the projects for the dropdown
    _todoObjects__WEBPACK_IMPORTED_MODULE_0__.projectArray.forEach(function(element){
        let option = document.createElement("option")
        option.value = element;
        formProjectList.appendChild(option)
    })

    // form 'priority' container
    const formElementPriority = document.createElement("div")
    formElementPriority.classList.toggle("formElement")
    overlayForm.appendChild(formElementPriority)
    // 'Priority' input fields - Dropdown
    const formPriorityLabel = document.createElement("label")
    formPriorityLabel.setAttribute("for", "priorityInput")
    formPriorityLabel.textContent = "Select priority:";
    const formPriorityInput = document.createElement("input")
    formPriorityInput.setAttribute("list", "priority")
    formPriorityInput.setAttribute("id", "priorityInput")
    const formPriorityList = document.createElement("datalist")
    formPriorityList.setAttribute("id", "priority")
    formElementProject.append(formPriorityLabel, formPriorityInput, formPriorityList);
    // priority dropdown options
    const priorityUrgent = document.createElement("option")
    priorityUrgent.setAttribute("value", "Urgent")
    const priorityRoutine = document.createElement("option")
    priorityRoutine.setAttribute("value", "Routine")
    const priorityBackBurner = document.createElement("option")
    priorityBackBurner.setAttribute("value", "Backburner")
    formPriorityList.append(priorityUrgent, priorityRoutine, priorityBackBurner)

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
    formSubmitButton.setAttribute("onclick", `${toggleForm()}`)
    formSubmitButton.setAttribute("type", "button")
    formSubmitButton.setAttribute("id", "submit")
    formElementSubmit.appendChild(formSubmitButton)
    // append the entire form container to the body when called
    document.getElementsByTagName("body")[0].appendChild(form)
    console.log("todoForm function is firing")
    // NEED TO CHANGE PROJECT AND PRIORITY INPUTS TO DROPDOWNS, AND CODE THE SUBMIT BUTTON
}

// function to toggle class that brings up a new todo form
function toggleForm(){
    document.body.classList.toggle("activeForm")
}
// function to call when create a new Todo form button clicked, after completing the form
function addTodo(name, project, priority, dueDate){
    name = document.querySelector("#newName").value;
    project = document.querySelector("#newProject").value;
    priority = document.querySelector("newPriority").value;
    dueDate = document.querySelector("#newDueDate").value;
    let newToto = new _todoObjects__WEBPACK_IMPORTED_MODULE_0__["default"](name,project,priority,dueDate)
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
let projectArray = []//push the project name of when a new todo is made in here
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
    this.pushProject = function() {
        projectArray.push(this.project)
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
projects.appendChild(addNewProject)


// main content
const main = document.createElement("div")
main.classList.toggle("main")
const addNewTodo = document.createElement("button")
addNewTodo.classList.toggle("addNewTodo")
addNewTodo.textContent = "+ Add New ToDo"
addNewTodo.addEventListener("click", () => {
    ;(0,_form__WEBPACK_IMPORTED_MODULE_3__.todoForm)()
    ;(0,_form__WEBPACK_IMPORTED_MODULE_3__.toggleForm)()
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
gardening.pushProject()
gardening.pushTodo()


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);
;(0,_mainContent__WEBPACK_IMPORTED_MODULE_2__["default"])()



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztBQ0FBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLGlFQUFlLElBQUk7Ozs7Ozs7VUNsQm5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ1k7QUFDTTtBQUNPO0FBQzdDLFdBQVcseUJBQXlCO0FBQ3BDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFRO0FBQ1osSUFBSSxrREFBVTtBQUNkLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG9EQUFJO0FBQzFCO0FBQ0E7OztBQUdBLGlFQUFlLElBQUk7QUFDbkIseURBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21haW5Db250ZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9Mb29wLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9PYmplY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FuaXQ6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBrYW5pdCwgc2Fucy1zZXJpZlxcbn1cXG4qIHtcXG4gIGJvcmRlcjogMnB4IHJlZCBzb2xpZFxcbn1cXG5ib2R5IHtcXG4gIG1hcmdpbjogMFxcbn1cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciBhdXRvIC8gYXV0byAxZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjUwLCAxMDAlLCA4JSk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgY29sb3I6IHdoaXRlXFxufVxcbi5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLmxlZnRTaWRlYmFyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMiA7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmclxcbiAgXFxufVxcbi52aWV3QWxsIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IGhzbCg0LCA1MyUsIDkwJSkgc29saWQgNXB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuLnZpZXdBbGw6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNCwgNTMlLCA5MCUpO1xcbiAgY29sb3I6IGJsYWNrXFxufVxcbi5wcm9qZWN0cyB7XFxuICBncmlkLXJvdzogMiAvIC0xO1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbn1cXG4uYWRkTmV3UHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBtYXJnaW46IDEwcHg7XFxuICBcXG59XFxuLmFkZE5ld1Byb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQsIDUzJSwgOTAlKTtcXG4gIGNvbG9yOiBibGFja1xcbn1cXG4uYWRkTmV3VG9kbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IGhzbCg0LCA1MyUsIDkwJSkgc29saWQgNXB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgXFxuICB9XFxuICAuYWRkTmV3VG9kbzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCg0LCA1MyUsIDkwJSk7XFxuICAgIGNvbG9yOiBibGFja1xcbiAgfVxcbi5tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gLTE7XFxuICA7XFxufVxcbi5mb290ZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50b2RvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5vdmVybGF5Rm9ybSB7XFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gIHRvcDo1MHZoO1xcbiAgbGVmdDowcHg7XFxuICB3aWR0aDoxMDB2dztcXG4gIGhlaWdodDowdmg7XFxuICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC44KTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBhZGRpbmc6IDgwcHggNTBweCAwcHggMTBweDtcXG4gIG92ZXJmbG93OnNjcm9sbDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0cmFuc2l0aW9uOiB0b3AgNTAwbXMgZWFzZS1pbi1vdXQsXFxuICAgICAgICAgICAgICBvcGFjaXR5IDUwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgaGVpZ2h0IDBtcyBlYXNlLWluLW91dCA1MDBtcztcXG59XFxuLm92ZXJsYXlGb3JtIC5jbG9zZUZvcm0ge1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogNDBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG5ib2R5LmFjdGl2ZUZvcm0gLm92ZXJsYXlGb3Jte1xcbiAgei1pbmRleDogMjtcXG4gIG9wYWNpdHk6IDE7XFxuICB0b3A6IDBweDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB0cmFuc2l0aW9uOiB0b3AgNTAwbXMgZWFzZS1pbi1vdXQsXFxuICAgICAgICAgICAgICBvcGFjaXR5IDUwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgaGVpZ2h0IDBtcyBlYXNlLWluLW91dCAwbXM7XFxufVxcbi5vdmVybGF5Rm9ybSBoMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm92ZXJsYXlGb3JtIHAge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm92ZXJsYXlGb3JtIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBjb2xvcjogI2ViNWUyODtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4ub3ZlcmxheUZvcm0gaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxN3B4O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1Q7QUFDRjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVDQUF1QztFQUN2QyxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiO0FBQ0Y7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2I7O0FBRUY7QUFDQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDO0FBQ0Y7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsWUFBWTs7QUFFZDtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDO0FBQ0Y7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFlBQVk7O0VBRWQ7RUFDQTtJQUNFLGtDQUFrQztJQUNsQztFQUNGO0FBQ0Y7RUFDRSxtQkFBbUI7O0FBRXJCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUixRQUFRO0VBQ1IsV0FBVztFQUNYLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qjs7MENBRXdDO0FBQzFDO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVixRQUFRO0VBQ1IsYUFBYTtFQUNiOzt3Q0FFc0M7QUFDeEM7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthbml0Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXG46cm9vdCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseToga2FuaXQsIHNhbnMtc2VyaWZcXG59XFxuKiB7XFxuICBib3JkZXI6IDJweCByZWQgc29saWRcXG59XFxuYm9keSB7XFxuICBtYXJnaW46IDBcXG59XFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogYXV0byAxZnIgYXV0byAvIGF1dG8gMWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI1MCwgMTAwJSwgOCUpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGNvbG9yOiB3aGl0ZVxcbn1cXG4uaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbi5sZWZ0U2lkZWJhciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDIgO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnJcXG4gIFxcbn1cXG4udmlld0FsbCB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcbi52aWV3QWxsOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQsIDUzJSwgOTAlKTtcXG4gIGNvbG9yOiBibGFja1xcbn1cXG4ucHJvamVjdHMge1xcbiAgZ3JpZC1yb3c6IDIgLyAtMTtcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxuLmFkZE5ld1Byb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogaHNsKDQsIDUzJSwgOTAlKSBzb2xpZCA1cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgXFxufVxcbi5hZGROZXdQcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0LCA1MyUsIDkwJSk7XFxuICBjb2xvcjogYmxhY2tcXG59XFxuLmFkZE5ld1RvZG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDVweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIFxcbiAgfVxcbiAgLmFkZE5ld1RvZG86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNCwgNTMlLCA5MCUpO1xcbiAgICBjb2xvcjogYmxhY2tcXG4gIH1cXG4ubWFpbiB7XFxuICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbiAgO1xcbn1cXG4uZm9vdGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udG9kbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4ub3ZlcmxheUZvcm0ge1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB0b3A6NTB2aDtcXG4gIGxlZnQ6MHB4O1xcbiAgd2lkdGg6MTAwdnc7XFxuICBoZWlnaHQ6MHZoO1xcbiAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuOCk7XFxuICB6LWluZGV4OiAtMTtcXG4gIG9wYWNpdHk6IDA7XFxuICBwYWRkaW5nOiA4MHB4IDUwcHggMHB4IDEwcHg7XFxuICBvdmVyZmxvdzpzY3JvbGw7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdHJhbnNpdGlvbjogdG9wIDUwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgIGhlaWdodCAwbXMgZWFzZS1pbi1vdXQgNTAwbXM7XFxufVxcbi5vdmVybGF5Rm9ybSAuY2xvc2VGb3JtIHtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgcmlnaHQ6IDQwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuYm9keS5hY3RpdmVGb3JtIC5vdmVybGF5Rm9ybXtcXG4gIHotaW5kZXg6IDI7XFxuICBvcGFjaXR5OiAxO1xcbiAgdG9wOiAwcHg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdHJhbnNpdGlvbjogdG9wIDUwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgIGhlaWdodCAwbXMgZWFzZS1pbi1vdXQgMG1zO1xcbn1cXG4ub3ZlcmxheUZvcm0gaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5vdmVybGF5Rm9ybSBwIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5vdmVybGF5Rm9ybSBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgY29sb3I6ICNlYjVlMjg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLm92ZXJsYXlGb3JtIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTdweDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyAvLyBET00gbWFuaXB1bGF0aW9uIGZvciBpbnB1dCBuZXcgdG9kbyBmb3JtXG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvT2JqZWN0c1wiXG5pbXBvcnQgeyBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi90b2RvT2JqZWN0c1wiXG5cbmZ1bmN0aW9uIHRvZG9Gb3JtICgpe1xuICAgIC8vIGNvbnRhaW5lciBlbGVtZW50cyBmb3IgZm9ybVxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuICAgIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImZvcm1cIilcbiAgICBjb25zdCBvdmVybGF5Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBvdmVybGF5Rm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwib3ZlcmxheUZvcm1cIilcbiAgICBmb3JtLmFwcGVuZENoaWxkKG92ZXJsYXlGb3JtKVxuICAgIC8vIGNsb3NlIGZvcm0gJ3gnIGJ1dHRvblxuICAgIGNvbnN0IGNsb3NlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjbG9zZUZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImNsb3NlRm9ybVwiKVxuICAgIGNsb3NlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlRm9ybSgpKVxuICAgIGNsb3NlRm9ybS5pbm5lckhUTUwgPSBcIiZ0aW1lc1wiXG4gICAgb3ZlcmxheUZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VGb3JtKVxuICAgIC8vIGZvcm0gaGVhZGVyXG4gICAgY29uc3QgZm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGZvcm1IZWFkZXIudGV4dENvbnRlbnQgPSBcIkFkZCBhIG5ldyBUb0RvXCJcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKTtcblxuICAgIC8vIGZvcm0gZWxlbWVudCAnTmFtZScgY29udGFpbmVyIFxuICAgIGNvbnN0IGZvcm1FbGVtZW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBmb3JtRWxlbWVudE5hbWUuY2xhc3NMaXN0LnRvZ2dsZShcImZvcm1FbGVtZW50XCIpXG4gICAgb3ZlcmxheUZvcm0uYXBwZW5kQ2hpbGQoZm9ybUVsZW1lbnROYW1lKVxuICAgIC8vICdOYW1lJyBpbnB1dCBmaWVsZHMgLSB0ZXh0clxuICAgIGNvbnN0IGZvcm1OYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICBmb3JtTmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIk5hbWVcIilcbiAgICBmb3JtTmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lIG9mIFRvRG9cIjtcbiAgICBjb25zdCBmb3JtTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZm9ybU5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKVxuICAgIGZvcm1OYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb3JtTmFtZVwiKVxuICAgIGZvcm1FbGVtZW50TmFtZS5hcHBlbmQoZm9ybU5hbWVMYWJlbCwgZm9ybU5hbWVJbnB1dCk7XG4gICAgXG4gICAgLy8gZm9ybSAnUHJvamVjdCcgY29udGFpbmVyXG4gICAgY29uc3QgZm9ybUVsZW1lbnRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZvcm1FbGVtZW50UHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUVsZW1lbnRcIilcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudFByb2plY3QpXG4gICAgLy8gJ1Byb2plY3QnIGlucHV0IGZpZWxkcyAtIERyb3Bkb3duXG4gICAgY29uc3QgZm9ybVByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGZvcm1Qcm9qZWN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdElucHV0XCIpXG4gICAgZm9ybVByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiU2VsZWN0IHByb2plY3Q6XCI7XG4gICAgY29uc3QgZm9ybVByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGZvcm1Qcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwibGlzdFwiLCBcInByb2plY3RzXCIpXG4gICAgZm9ybVByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RJbnB1dFwiKVxuICAgIGNvbnN0IGZvcm1Qcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkYXRhbGlzdFwiKVxuICAgIGZvcm1Qcm9qZWN0TGlzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzXCIpXG4gICAgZm9ybUVsZW1lbnRQcm9qZWN0LmFwcGVuZChmb3JtUHJvamVjdExhYmVsLCBmb3JtUHJvamVjdElucHV0LCBmb3JtUHJvamVjdExpc3QpO1xuICAgIC8vIGxvb3AgdGhyb3VnaCBwcm9qZWN0IGFycmF5IHRvIGdyYWIgdGhlIHByb2plY3RzIGZvciB0aGUgZHJvcGRvd25cbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KXtcbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gZWxlbWVudDtcbiAgICAgICAgZm9ybVByb2plY3RMaXN0LmFwcGVuZENoaWxkKG9wdGlvbilcbiAgICB9KVxuXG4gICAgLy8gZm9ybSAncHJpb3JpdHknIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvcm1FbGVtZW50UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZm9ybUVsZW1lbnRQcmlvcml0eS5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUVsZW1lbnRcIilcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudFByaW9yaXR5KVxuICAgIC8vICdQcmlvcml0eScgaW5wdXQgZmllbGRzIC0gRHJvcGRvd25cbiAgICBjb25zdCBmb3JtUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGZvcm1Qcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByaW9yaXR5SW5wdXRcIilcbiAgICBmb3JtUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiU2VsZWN0IHByaW9yaXR5OlwiO1xuICAgIGNvbnN0IGZvcm1Qcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZm9ybVByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwibGlzdFwiLCBcInByaW9yaXR5XCIpXG4gICAgZm9ybVByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eUlucHV0XCIpXG4gICAgY29uc3QgZm9ybVByaW9yaXR5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkYXRhbGlzdFwiKVxuICAgIGZvcm1Qcmlvcml0eUxpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eVwiKVxuICAgIGZvcm1FbGVtZW50UHJvamVjdC5hcHBlbmQoZm9ybVByaW9yaXR5TGFiZWwsIGZvcm1Qcmlvcml0eUlucHV0LCBmb3JtUHJpb3JpdHlMaXN0KTtcbiAgICAvLyBwcmlvcml0eSBkcm9wZG93biBvcHRpb25zXG4gICAgY29uc3QgcHJpb3JpdHlVcmdlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXG4gICAgcHJpb3JpdHlVcmdlbnQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJVcmdlbnRcIilcbiAgICBjb25zdCBwcmlvcml0eVJvdXRpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXG4gICAgcHJpb3JpdHlSb3V0aW5lLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiUm91dGluZVwiKVxuICAgIGNvbnN0IHByaW9yaXR5QmFja0J1cm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICBwcmlvcml0eUJhY2tCdXJuZXIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJCYWNrYnVybmVyXCIpXG4gICAgZm9ybVByaW9yaXR5TGlzdC5hcHBlbmQocHJpb3JpdHlVcmdlbnQsIHByaW9yaXR5Um91dGluZSwgcHJpb3JpdHlCYWNrQnVybmVyKVxuXG4gICAgLy8gZm9ybSAnZGF0ZSBkdWUnIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvcm1FbGVtZW50RHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZvcm1FbGVtZW50RHVlLmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtRWxlbWVudFwiKVxuICAgIG92ZXJsYXlGb3JtLmFwcGVuZENoaWxkKGZvcm1FbGVtZW50RHVlKVxuICAgIC8vICdkYXRlIGR1ZScgaW5wdXQgZmllbGRzIC0gZGF0ZSBwaWNrZXJcbiAgICBjb25zdCBmb3JtRHVlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIilcbiAgICBmb3JtRHVlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlSW5wdXRcIilcbiAgICBmb3JtRHVlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBieTpcIlxuICAgIGNvbnN0IGZvcm1EdWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgIGZvcm1EdWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKVxuICAgIGZvcm1EdWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZUlucHV0XCIpXG4gICAgZm9ybUR1ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkdWVEYXRlXCIpXG4gICAgZm9ybUVsZW1lbnREdWUuYXBwZW5kKGZvcm1EdWVMYWJlbCwgZm9ybUR1ZUlucHV0KVxuXG4gICAgLy8gZm9ybSBzdWJtaXQgYnV0dG9uIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvcm1FbGVtZW50U3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZvcm1FbGVtZW50U3VibWl0LmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtRWxlbWVudFwiKVxuICAgIG92ZXJsYXlGb3JtLmFwcGVuZENoaWxkKGZvcm1FbGVtZW50U3VibWl0KVxuICAgIC8vIHN1Ym1pdCBidXR0b24gXG4gICAgY29uc3QgZm9ybVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBmb3JtU3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcIm9uY2xpY2tcIiwgYCR7dG9nZ2xlRm9ybSgpfWApXG4gICAgZm9ybVN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpXG4gICAgZm9ybVN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdFwiKVxuICAgIGZvcm1FbGVtZW50U3VibWl0LmFwcGVuZENoaWxkKGZvcm1TdWJtaXRCdXR0b24pXG4gICAgLy8gYXBwZW5kIHRoZSBlbnRpcmUgZm9ybSBjb250YWluZXIgdG8gdGhlIGJvZHkgd2hlbiBjYWxsZWRcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uYXBwZW5kQ2hpbGQoZm9ybSlcbiAgICBjb25zb2xlLmxvZyhcInRvZG9Gb3JtIGZ1bmN0aW9uIGlzIGZpcmluZ1wiKVxuICAgIC8vIE5FRUQgVE8gQ0hBTkdFIFBST0pFQ1QgQU5EIFBSSU9SSVRZIElOUFVUUyBUTyBEUk9QRE9XTlMsIEFORCBDT0RFIFRIRSBTVUJNSVQgQlVUVE9OXG59XG5cbi8vIGZ1bmN0aW9uIHRvIHRvZ2dsZSBjbGFzcyB0aGF0IGJyaW5ncyB1cCBhIG5ldyB0b2RvIGZvcm1cbmZ1bmN0aW9uIHRvZ2dsZUZvcm0oKXtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVGb3JtXCIpXG59XG4vLyBmdW5jdGlvbiB0byBjYWxsIHdoZW4gY3JlYXRlIGEgbmV3IFRvZG8gZm9ybSBidXR0b24gY2xpY2tlZCwgYWZ0ZXIgY29tcGxldGluZyB0aGUgZm9ybVxuZnVuY3Rpb24gYWRkVG9kbyhuYW1lLCBwcm9qZWN0LCBwcmlvcml0eSwgZHVlRGF0ZSl7XG4gICAgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3TmFtZVwiKS52YWx1ZTtcbiAgICBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXdQcm9qZWN0XCIpLnZhbHVlO1xuICAgIHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5ld1ByaW9yaXR5XCIpLnZhbHVlO1xuICAgIGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld0R1ZURhdGVcIikudmFsdWU7XG4gICAgbGV0IG5ld1RvdG8gPSBuZXcgVG9kbyhuYW1lLHByb2plY3QscHJpb3JpdHksZHVlRGF0ZSlcbn1cblxuZXhwb3J0IHtcbiAgICB0b2RvRm9ybSxcbiAgICB0b2dnbGVGb3JtXG59XG4iLCIvLyBpbXBvcnRpbmcgdGhlIGFycmF5cyBhbmQgdGhlIERPTSBlbGVtZW50XG5pbXBvcnQgdG9kb0xvb3AgZnJvbSBcIi4vdG9kb0xvb3BcIjtcbmltcG9ydCB7cHJvamVjdEFycmF5LHRvZG9BcnJheSB9IGZyb20gXCIuL3RvZG9PYmplY3RzXCI7XG5pbXBvcnQgdG9kb0Zvcm0gZnJvbSBcIi4vZm9ybVwiO1xuXG4vLyBmdW5jdGlvbiB0byBjcmVhdGUgYW5kIGFwcGVuZCB0aGUgbWFpbiBzZWN0aW9uIHdpdGggZWFjaCB0b2RvXG5mdW5jdGlvbiB1cGRhdGVNYWluICgpIHtcbiAgICB0b2RvQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKVxuICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0b2RvQ29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0b2RvUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgdG9kby5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb1wiKVxuICAgICAgICB0b2RvQ29tcGxldGVCdG4uY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9Db21wbGV0QnRuXCIpXG4gICAgICAgIHRvZG9Db21wbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwi4pyU77iPXCJcbiAgICAgICAgdG9kb05hbWUuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9OYW1lXCIpXG4gICAgICAgIHRvZG9Qcmlvcml0eS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb1ByaW9yaXR5XCIpXG4gICAgICAgIHRvZG9Qcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvUHJvamVjdFwiKVxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRvZG8pXG4gICAgICAgIHRvZG8uYXBwZW5kKHRvZG9OYW1lLCB0b2RvUHJpb3JpdHksIHRvZG9EdWVEYXRlLCB0b2RvUHJvamVjdCwgdG9kb0NvbXBsZXRlQnRuKVxuICAgICAgICAvLyBldmVudGxpc3RlbmVyIGZvciBjb21wbGV0ZSBidXR0b25cbiAgICAgICAgdG9kb0NvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBsb2dpYyBoZXJlIHRvIHJlbW92ZSB0aGlzIHNpbmdsZSBpbnN0YW5jZVxuICAgICAgICAgICAgbWFpbi5yZW1vdmVDaGlsZCh0b2RvKVxuICAgICAgICAgICAgdG9kb0FycmF5LnNwbGljZSh0b2RvQXJyYXkuaW5kZXhPZihlbGVtZW50KSwgMSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvQXJyYXkpXG4gICAgICAgIH0pXG4gICAgICAgIC8vIGxvb3BzIG92ZXIgZWFjaCBvYmplY3QgYW5kIGV4dHJhY3RzIHRoZSB2YWx1ZS4gKHRleHRDb250ZW50IGZvciBub3csIHdpbGwgY2hhbmdlIGxhdGVyKVxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZWxlbWVudCl7XG4gICAgICAgICAgICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZTtcbiAgICAgICAgICAgIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJpb3JpdHk7XG4gICAgICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGVsZW1lbnQuZHVlRGF0ZTtcbiAgICAgICAgICAgIHRvZG9Qcm9qZWN0LnRleHRDb250ZW50ID0gZWxlbWVudC5wcm9qZWN0O1xuICAgICAgICAgICAgdG9kby5hcHBlbmQoKVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlTWFpbiIsIi8vIG1ha2UgYSBmdW5jdGlvbiB0aGF0IGxvb3BzIHRocm91Z2ggdGhlIG9iamVjdCBvbiBjcmVhdGlvbiB0byBmaWxsIGluIHRoZSBET00/IiwibGV0IHByb2plY3RBcnJheSA9IFtdLy9wdXNoIHRoZSBwcm9qZWN0IG5hbWUgb2Ygd2hlbiBhIG5ldyB0b2RvIGlzIG1hZGUgaW4gaGVyZVxubGV0IHRvZG9BcnJheSA9IFtdIC8vcHVzaCBlYWNoIHRvZG8gb2JqZWN0IGludG8gdGhpcyBhcnJheSB0byBsaXN0IHRoZW0gZWFzaWVyXG5cbi8vIGZhY3RvcnkgZnVuY3Rpb24gZm9yIG5ldyBUb2RvIG9iamVjdHNcbmZ1bmN0aW9uIFRvZG8gKG5hbWUsIHByb2plY3QsIHByaW9yaXR5LCBkdWVEYXRlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHVzaFRvZG8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdG9kb0FycmF5LnB1c2godGhpcylcbiAgICB9XG4gICAgdGhpcy5wdXNoUHJvamVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaCh0aGlzLnByb2plY3QpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRvZG8gXG5leHBvcnQge1xuICAgIHByb2plY3RBcnJheSxcbiAgICB0b2RvQXJyYXlcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb09iamVjdHNcIlxuaW1wb3J0IHVwZGF0ZU1haW4gZnJvbSBcIi4vbWFpbkNvbnRlbnRcIlxuaW1wb3J0IHsgdG9nZ2xlRm9ybSwgdG9kb0Zvcm0gfSBmcm9tIFwiLi9mb3JtXCJcbi8vIGltcG9ydCB7dG9kb0FycmF5LCBwcm9qZWN0QXJyYXl9IGZyb20gXCIuL3RvZG9PYmplY3RzXCJcbi8vIGdyYWJiaW5nIHRoZSByb290IG5vZGUgZWxlbWVudFxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG5cbi8vIGdyaWQgY29udGFpbmVyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5jb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImNvbnRhaW5lclwiKVxuXG4vLyBoZWFkZXJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGVhZGVyXCIpXG5oZWFkZXIudGV4dENvbnRlbnQgPSBcIlRvIERvXCJcblxuLy8gbGVmdCBzaWRlYmFyXG5jb25zdCBsZWZ0U2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmxlZnRTaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoXCJsZWZ0U2lkZWJhclwiKVxuY29uc3Qgdmlld0FsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG52aWV3QWxsLmNsYXNzTGlzdC50b2dnbGUoXCJ2aWV3QWxsXCIpXG52aWV3QWxsLnRleHRDb250ZW50ID0gXCJWaWV3IEFsbCBUb2Rvc1wiXG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbnByb2plY3RzLmNsYXNzTGlzdC50b2dnbGUoXCJwcm9qZWN0c1wiKVxucHJvamVjdHMudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCJcbmNvbnN0IGFkZE5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG5hZGROZXdQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJhZGROZXdQcm9qZWN0XCIpXG5hZGROZXdQcm9qZWN0LnRleHRDb250ZW50ID0gXCIrIEFkZCBOZXcgUHJvamVjdFwiXG5wcm9qZWN0cy5hcHBlbmRDaGlsZChhZGROZXdQcm9qZWN0KVxuXG5cbi8vIG1haW4gY29udGVudFxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbm1haW4uY2xhc3NMaXN0LnRvZ2dsZShcIm1haW5cIilcbmNvbnN0IGFkZE5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG5hZGROZXdUb2RvLmNsYXNzTGlzdC50b2dnbGUoXCJhZGROZXdUb2RvXCIpXG5hZGROZXdUb2RvLnRleHRDb250ZW50ID0gXCIrIEFkZCBOZXcgVG9Eb1wiXG5hZGROZXdUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdG9kb0Zvcm0oKVxuICAgIHRvZ2dsZUZvcm0oKVxufSlcbm1haW4uaW5zZXJ0QmVmb3JlKGFkZE5ld1RvZG8sIG1haW4uZmlyc3RDaGlsZClcblxuLy8gZm9vdGVyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5mb290ZXIuY2xhc3NMaXN0LnRvZ2dsZShcImZvb3RlclwiKVxuZm9vdGVyLnRleHRDb250ZW50ID0gXCJDcmVhdGVkIGJ5IEpvcmRhbiBVbG1lciwgMjAyMlwiXG4vLyBhcHBlbmRpbmcgdG8gdGhlIHBhcmVudCBlbGVtZW50c1xuY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpXG5jb250YWluZXIuYXBwZW5kKGhlYWRlciwgbGVmdFNpZGViYXIsIG1haW4sIGZvb3RlcilcbmxlZnRTaWRlYmFyLmFwcGVuZCh2aWV3QWxsLCBwcm9qZWN0cylcblxuLy8gdGVzdGluZyBhIHJhbmRvbSBUb2RvXG5jb25zdCBnYXJkZW5pbmcgPSBuZXcgVG9kbyhcIkdhcmRlbmluZ1wiLFwiR2FyZGVuaW5nXCIsXCJVcmdlbnRcIixcIm1vbmRheVwiKVxuZ2FyZGVuaW5nLnB1c2hQcm9qZWN0KClcbmdhcmRlbmluZy5wdXNoVG9kbygpXG5cblxuZXhwb3J0IGRlZmF1bHQgbWFpblxudXBkYXRlTWFpbigpXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9