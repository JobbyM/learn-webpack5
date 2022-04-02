/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hello-world.js":
/*!****************************!*\
  !*** ./src/hello-world.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function helloWorld() {
    console.log('Hello world~~')
}

// 导出函数模块
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (helloWorld);

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./src/style.less":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./src/style.less ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".world {\n  color: red;\n}\n", "",{"version":3,"sources":["webpack://./src/style.less"],"names":[],"mappings":"AACA;EACI,UAAA;AAAJ","sourcesContent":["@color: red;\n.world {\n    color: @color;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
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

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
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

/***/ "./src/assets/data.csv":
/*!*****************************!*\
  !*** ./src/assets/data.csv ***!
  \*****************************/
/***/ ((module) => {

module.exports = [["to","from","heading","body"],["Mary","John","Reminder","Call Cindy on Tuesday"],["Zoe","Bill","Reminder","Buy orange juice"],["Autumn","Lindsey","Letter","I miss you"]]

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/example.txt":
/*!********************************!*\
  !*** ./src/assets/example.txt ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("hello webpack");

/***/ }),

/***/ "./src/style.less":
/*!************************!*\
  !*** ./src/style.less ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./style.less */ "../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./src/style.less");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
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

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
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

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
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

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
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

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
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

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
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

/***/ "./src/assets/data.xml":
/*!*****************************!*\
  !*** ./src/assets/data.xml ***!
  \*****************************/
/***/ ((module) => {

module.exports = {"note":{"to":["Mary"],"from":["John"],"heading":["Reminder"],"body":["Call Cindy on Tuesday"]}}

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml,%3csvg xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 440 440' height='440px' width='440px'%3e %3ctitle%3e%e6%88%b4%e5%8f%a3%e7%bd%a9%3c/title%3e %3cdefs%3e %3clinearGradient id='linearGradient-1' y2='94.9598849%25' x2='50%25' y1='0.455533649%25' x1='50%25'%3e %3cstop offset='0%25' stop-color='%239ED7FC'%3e%3c/stop%3e %3cstop offset='100%25' stop-color='%23DDEBF8'%3e%3c/stop%3e %3c/linearGradient%3e %3clinearGradient id='linearGradient-2' y2='94.9598849%25' x2='50%25' y1='0.455533649%25' x1='50%25'%3e %3cstop offset='0%25' stop-color='%239ED7FC'%3e%3c/stop%3e %3cstop offset='100%25' stop-color='%23DDEBF8'%3e%3c/stop%3e %3c/linearGradient%3e %3clinearGradient id='linearGradient-3' y2='94.9598849%25' x2='50%25' y1='0.455533649%25' x1='50%25'%3e %3cstop offset='0%25' stop-color='%239ED7FC'%3e%3c/stop%3e %3cstop offset='100%25' stop-color='%23DDEBF8'%3e%3c/stop%3e %3c/linearGradient%3e %3c/defs%3e %3cg fill-rule='evenodd' fill='none' stroke-width='1' stroke='none' id='%e6%88%b4%e5%8f%a3%e7%bd%a9'%3e %3cg fill-rule='nonzero' transform='translate(29.000000%2c 79.270000)'%3e %3cg transform='translate(89.793495%2c 298.081437)' id='%e8%84%9a'%3e %3cpath fill='white' d='M22.9008525%2c1.32207136 C34.92485%2c1.32207136 44.8017051%2c8.19292706 44.8017051%2c16.6741396 C44.8017051%2c25.1553521 34.92485%2c32.0262078 22.9008525%2c32.0262078 C10.7694979%2c32.0262078 1%2c25.1553521 1%2c16.6741396 C1%2c8.19292706 10.7694979%2c1.32207136 22.9008525%2c1.32207136 L22.9008525%2c1.32207136 Z'%3e%3c/path%3e %3cpath fill='black' id='%e8%84%9a%e5%a4%87%e4%bb%bd' d='M22.9008525%2c0.322071361 C18.8281672%2c0.322071361 14.9977674%2c1.07488643 11.6778571%2c2.40183694 L11.0417403%2c2.66578731 C4.43095853%2c5.51153548 0%2c10.6808945 0%2c16.6741396 C0%2c25.8067034 10.2886656%2c33.0262078 22.9008525%2c33.0262078 C35.4424042%2c33.0262078 45.8017051%2c25.7816967 45.8017051%2c16.6741396 C45.8017051%2c7.56658247 35.4424042%2c0.322071361 22.9008525%2c0.322071361 Z M22.9008525%2c2.32207136 C34.4591592%2c2.32207136 43.8017051%2c8.85554095 43.8017051%2c16.6741396 C43.8017051%2c24.4927382 34.4591592%2c31.0262078 22.9008525%2c31.0262078 C11.2726315%2c31.0262078 2%2c24.5196494 2%2c16.6741396 C2%2c8.82862975 11.2726315%2c2.32207136 22.9008525%2c2.32207136 Z'%3e%3c/path%3e %3cpath fill='white' d='M109.323334%2c1 C121.347332%2c1 131.224187%2c7.8708557 131.224187%2c16.3520682 C131.224187%2c24.8332807 121.347332%2c31.7041364 109.323334%2c31.7041364 C97.2993369%2c31.7041364 87.4224818%2c24.8332807 87.4224818%2c16.3520682 C87.4224818%2c7.8708557 97.2993369%2c1 109.323334%2c1 Z'%3e%3c/path%3e %3cpath fill='black' id='%e8%84%9a%e5%a4%87%e4%bb%bd-2' d='M109.323334%2c0 C96.7817828%2c0 86.4224818%2c7.24451111 86.4224818%2c16.3520682 C86.4224818%2c25.4596253 96.7817828%2c32.7041364 109.323334%2c32.7041364 C121.864886%2c32.7041364 132.224187%2c25.4596253 132.224187%2c16.3520682 C132.224187%2c7.24451111 121.864886%2c0 109.323334%2c0 Z M109.323334%2c2 C120.881641%2c2 130.224187%2c8.53346959 130.224187%2c16.3520682 C130.224187%2c24.1706668 120.881641%2c30.7041364 109.323334%2c30.7041364 C97.7650277%2c30.7041364 88.4224818%2c24.1706668 88.4224818%2c16.3520682 C88.4224818%2c8.53346959 97.7650277%2c2 109.323334%2c2 Z'%3e%3c/path%3e %3c/g%3e %3cg transform='translate(85.286721%2c 159.946609)' id='%e8%a1%a3%e6%9c%8d'%3e %3cpath fill='url(%23linearGradient-1)' d='M112.541824%2c0.751499842 C114.366895%2c3.32807073 120.056822%2c3.97221345 120.056822%2c3.97221345 C148.935888%2c12.453426 142.159732%2c27.8610644 142.159732%2c27.8610644 C142.181026%2c31.2360209 132.685021%2c39.6670284 132.685021%2c39.6670284 C126.277141%2c44.9445554 126.472057%2c51.3295983 126.472057%2c51.3295983 L126.194554%2c57.6794528 L136.16039%2c142.462899 C112.005038%2c164.79318 87.8496861%2c149.977897 87.8496861%2c149.977897 L68.5254045%2c95.2257657 L51.992408%2c152.876539 C28.0517701%2c162.323966 2.60813263%2c147.508683 2.60813263%2c147.508683 L8.40541713%2c101.667193 L12.8521854%2c60.6850062 C11.9759275%2c53.1468529 8.67366252%2c38.9218453 8.67366252%2c38.9218453 C-1.95469239%2c31.514204 0.17415435%2c23.8249191 0.17415435%2c23.8249191 C11.0172235%2c-7.20128864 22.3618428%2c3.97221345 22.3618428%2c3.97221345 C31.0577695%2c2.79128513 28.0517701%2c0 28.0517701%2c0 L112.541824%2c0.751499842 Z'%3e%3c/path%3e %3cpath fill='black' id='%e8%a1%a3%e6%9c%8d%e5%a4%87%e4%bb%bd' d='M27.3677282%2c0.729441539 C27.5031862%2c0.864519018 27.5921546%2c1.0678149 27.5269661%2c1.19975466 C27.4192123%2c1.41784528 27.0783496%2c1.69565138 26.4093638%2c1.98574097 L26.2188794%2c2.06488832 C25.4324085%2c2.37825723 24.3509349%2c2.65261153 22.95282%2c2.87468841 L22.674%2c2.917 L22.5161171%2c2.79491824 C22.2324376%2c2.58130125 21.8801966%2c2.34845057 21.4628201%2c2.11768745 C18.8896339%2c0.694999581 15.8593737%2c0.494839795 12.6405982%2c2.2894763 C9.05843679%2c4.28671961 5.61525962%2c8.59946595 2.37186632%2c15.6320164 L1.93082946%2c16.6078969 C1.49104234%2c17.6007115 1.05502161%2c18.6444428 0.622921421%2c19.7401158 C0.152960301%2c20.9317925 -0.311363225%2c22.1830784 -0.76985668%2c23.4950052 L-0.800077927%2c23.5980068 C-0.904301625%2c24.0141524 -0.988360538%2c24.6136845 -0.999502945%2c25.3754573 L-0.999502945%2c25.622828 L-0.993443444%2c25.908712 C-0.850992759%2c30.2978907 1.57775355%2c34.9411033 7.33232688%2c39.1902896 L7.784%2c39.517 L8.17403193%2c41.2410531 L8.38311779%2c42.1823591 C8.89629613%2c44.5053406 9.40946921%2c46.9182078 9.88827003%2c49.2952926 L10.2154024%2c50.9424008 L10.5541446%2c52.705009 L10.7634521%2c53.8309036 L11.0510195%2c55.4387419 L11.2245476%2c56.4543995 L11.3830587%2c57.4232836 L11.5261499%2c58.3438636 L11.6534182%2c59.2146088 L11.7644605%2c60.0339884 L11.845%2c60.694 L7.41125231%2c101.559321 L1.61603451%2c147.383219 C1.56569016%2c147.781312 1.75817942%2c148.170946 2.1049419%2c148.372859 L2.42333545%2c148.55222 L2.79819005%2c148.755903 C2.98299034%2c148.855033 3.1779751%2c148.957846 3.382934%2c149.064033 L4.02752284%2c149.392412 L4.7306946%2c149.739189 C6.81657416%2c150.751752 9.1776615%2c151.763318 11.7687307%2c152.707165 C23.9098328%2c157.129795 36.472454%2c158.563912 48.2517101%2c155.199259 C49.6425918%2c154.801964 51.0122759%2c154.338364 52.3594795%2c153.806732 L52.4644662%2c153.758115 C52.7012552%2c153.631343 52.8787266%2c153.413504 52.9536613%2c153.152206 L68.623%2c98.509 L86.9066958%2c150.310717 C86.9830231%2c150.526978 87.1313638%2c150.710432 87.3268576%2c150.830335 L87.7228624%2c151.058713 L88.1197391%2c151.274123 L88.566669%2c151.505582 C88.6452827%2c151.545395 88.7259477%2c151.585801 88.808647%2c151.626762 C89.9822228%2c152.208041 91.3330913%2c152.78787 92.8441942%2c153.328323 C98.5242344%2c155.359816 104.826683%2c156.298887 111.475219%2c155.536998 C120.084987%2c154.550362 128.471228%2c150.768781 136.347605%2c143.646687 L136.867497%2c143.170005 L136.940623%2c143.093111 C137.100851%2c142.901005 137.186221%2c142.62408 137.153553%2c142.346158 L127.197%2c57.643 L127.471103%2c51.3732589 L127.47162%2c51.222775 L127.482757%2c50.921983 L127.512748%2c50.5592665 C127.532929%2c50.3632742 127.561239%2c50.1459663 127.599269%2c49.9102017 C127.731351%2c49.0913569 127.956519%2c48.2174676 128.294642%2c47.3112704 C129.220665%2c44.8294496 130.839071%2c42.4828509 133.320761%2c40.4389321 L133.766531%2c40.0373368 L134.285485%2c39.5588139 L134.853187%2c39.0257417 C135.976846%2c37.9612465 137.100721%2c36.8430492 138.15183%2c35.7222028 C138.79685%2c35.0343868 139.395081%2c34.3657269 139.937423%2c33.7222979 L140.181853%2c33.4296181 C141.941864%2c31.3019067 142.984939%2c29.5827293 143.139668%2c28.2181592 L143.152%2c28.074 L143.163193%2c28.0459494 C143.257371%2c27.7957161 143.367788%2c27.448876 143.475801%2c27.0145283 C144.605746%2c22.4707419 143.522102%2c17.3024174 138.60318%2c12.4812033 C134.733991%2c8.68887052 128.747406%2c5.48223445 120.338602%2c3.01273443 L120.169311%2c2.97856048 L119.857039%2c2.93599919 C119.595785%2c2.89716604 119.303383%2c2.84732677 118.98793%2c2.78553362 C118.088699%2c2.60938583 117.190714%2c2.37408575 116.360976%2c2.07434603 C115.027386%2c1.59259103 114.020905%2c0.994906561 113.469089%2c0.319409085 L113.357848%2c0.173482501 C113.172185%2c-0.0886308725 112.871913%2c-0.245603723 112.550718%2c-0.248460604 L28.0606643%2c-1.00079338 C27.1474857%2c-1.00808275 26.7021212%2c0.111395496 27.3677282%2c0.729441539 Z M29.554%2c1.012 L112.058%2c1.747 L112.237881%2c1.93946124 C113.060661%2c2.77759956 114.237001%2c3.43356591 115.681462%2c3.95537243 C116.617301%2c4.29344109 117.611004%2c4.55382206 118.603463%2c4.74823195 L119.10428%2c4.84051937 L119.562986%2c4.91426435 L119.851%2c4.954 L119.775042%2c4.93169247 C127.889882%2c7.31486115 133.589944%2c10.3680246 137.203224%2c13.9095317 C141.57417%2c18.193655 142.504746%2c22.6319385 141.534915%2c26.5318704 L141.449974%2c26.8514852 C141.436171%2c26.9000544 141.422599%2c26.9462425 141.409342%2c26.9900028 L141.334226%2c27.2230577 L141.270608%2c27.3956037 C141.261183%2c27.4191944 141.252402%2c27.4401705 141.244347%2c27.4584853 C141.187691%2c27.5873103 141.158864%2c27.7266433 141.159752%2c27.8673736 C141.162633%2c28.3239855 140.850209%2c29.047599 140.266264%2c29.9619244 L139.999506%2c30.3652319 C139.763567%2c30.710681 139.493794%2c31.0790655 139.19218%2c31.46691 L138.815088%2c31.9414419 C138.684381%2c32.1025845 138.548708%2c32.2666183 138.408195%2c32.4333209 C137.890042%2c33.048052 137.315039%2c33.6907498 136.69296%2c34.3541024 C135.875766%2c35.225515 135.010395%2c36.0981825 134.135278%2c36.944477 L133.195006%2c37.8404542 L132.66415%2c38.3344599 L132.021092%2c38.9192327 C129.287188%2c41.1699842 127.46629%2c43.8101844 126.420829%2c46.6121088 C125.740625%2c48.4351149 125.483067%2c50.0318492 125.471672%2c51.2164153 L125.472523%2c51.360111 L125.195507%2c57.6357921 L125.201391%2c57.7961937 L135.107%2c142.071 L135.453284%2c141.755792 C127.775208%2c148.852698 119.614878%2c152.591145 111.247519%2c153.550002 C104.928794%2c154.274096 98.9271184%2c153.37984 93.5177217%2c151.445145 C92.0822218%2c150.931732 90.8024485%2c150.382418 89.6963376%2c149.834555 L89.4717197%2c149.722078 L89.0589181%2c149.508353 L88.669%2c149.296 L69.4683948%2c94.8929456 L69.4206911%2c94.7786078 C69.0322358%2c93.97988 67.820896%2c94.0548266 67.5641512%2c94.950099 L51.168%2c152.121 L51.6253364%2c151.946347 C50.3391117%2c152.453915 49.0311131%2c152.896636 47.7023959%2c153.276174 C36.3916807%2c156.506992 24.233134%2c155.119004 12.4532671%2c150.82796 C10.1816737%2c150.000489 8.09267082%2c149.120067 6.22019184%2c148.235077 L5.25756392%2c147.770425 L4.60775295%2c147.444786 C4.50431114%2c147.392087 4.40331723%2c147.340199 4.30479802%2c147.289162 L3.685%2c146.962 L9.39751525%2c101.792657 L13.8463502%2c60.7928779 L13.8454969%2c60.5695406 C13.8142453%2c60.3006936 13.7797833%2c60.0218195 13.7421895%2c59.7331939 L13.6200908%2c58.8383377 C13.5982013%2c58.6844111 13.5755484%2c58.5281155 13.552142%2c58.3694853 L13.4027396%2c57.3899651 C13.3763583%2c57.2221345 13.3492431%2c57.0520382 13.3214038%2c56.8797107 L13.1457575%2c55.8192464 L12.9532039%2c54.7068862 L12.7442141%2c53.5442832 L12.5192591%2c52.3330908 L12.1784299%2c50.5596195 L11.8488928%2c48.900377 C11.4637119%2c46.9880833 11.0566308%2c45.0538002 10.6451723%2c43.1613912 L9.92974496%2c39.9315764 L9.64775926%2c38.6957136 C9.59180271%2c38.4546723 9.44846363%2c38.2429379 9.24545519%2c38.1014471 C3.33716036%2c33.9835447 1.04034183%2c29.6203493 1.00044564%2c25.614774 L1.00044564%2c25.3912751 L1.00649109%2c25.1773493 C1.02229622%2c24.7630541 1.06515409%2c24.4310492 1.11411056%2c24.1962375 L1.13790029%2c24.0917407 C1.56811405%2c22.8673561 2.02329963%2c21.6406956 2.48346509%2c20.4738577 C3.2430919%2c18.547678 4.01119237%2c16.7946701 4.78577967%2c15.2079191 L5.20891321%2c14.3588653 C5.56204069%2c13.6649914 5.91643379%2c13.0052084 6.27190591%2c12.3788669 L6.69897844%2c11.6432673 C8.97933355%2c7.80523672 11.3008283%2c5.32632859 13.6145487%2c4.03630788 C16.1803577%2c2.60573445 18.4877723%2c2.75814764 20.495102%2c3.86797931 C20.8343618%2c4.0555525 21.133084%2c4.25585793 21.3868236%2c4.45412776 L21.5901395%2c4.62084562 L21.6601296%2c4.68467303 C21.8807443%2c4.90196005 22.1895743%2c5.00478696 22.49641%2c4.96311791 C26.477002%2c4.42254369 28.625829%2c3.49075659 29.3200479%2c2.08567662 C29.495262%2c1.73104795 29.5676809%2c1.37018519 29.554%2c1.012 Z'%3e%3c/path%3e %3c/g%3e %3cg transform='translate(96.975087%2c 156.314131)' id='%e8%a1%a3%e6%9c%8d%e7%ba%bf%e6%9d%a1'%3e %3cpath fill='%2364BEF8' id='%e5%bd%a2%e7%8a%b6-16' d='M11.6396905%2c1.59269241 C11.6396905%2c1.59269241 52.4353962%2c17.3741891 103.107957%2c1.27062105 C103.107957%2c1.27062105 103.322671%2c4.7060489 105.791885%2c6.42376282 C105.791885%2c6.42376282 61.5607514%2c24.9965446 10.351405%2c7.06790554 C10.351405%2c7.06790554 11.7470476%2c4.38397753 11.6396905%2c1.59269241 Z'%3e%3c/path%3e %3cpath fill='%2364BEF8' id='%e5%bd%a2%e7%8a%b6-14' d='M54.5825386%2c90.484388 C60.4871802%2c53.87561 54.5825386%2c13.4019756 54.5825386%2c13.4019756 L60.8092516%2c13.4019756 C65.3182506%2c45.1796832 60.4871802%2c91.1285307 60.4871802%2c91.1285307 L54.7023714%2c109.77495 L55.3419719%2c100.719058 L54.5825386%2c90.484388 Z'%3e%3c/path%3e %3cpath fill='%2364BEF8' id='%e5%bd%a2%e7%8a%b6-13' d='M1.82686364%2c65.4783683 C1.82686364%2c65.4783683 57.6958951%2c85.4386034 113.092169%2c61.4979655 L113.736312%2c67.29525 C113.736312%2c67.29525 73.8088844%2c91.2674923 1.5575424%2c71.5137821 L1.82686364%2c65.4783683 Z'%3e%3c/path%3e %3cpath fill='black' id='%e8%b7%af%e5%be%84-2' d='M12.7209471%2c0.326775377 L11.7874182%2c0 L11.2588563%2c1.45940499 L10.5495001%2c3.44100947 L10.2289091%2c4.34995497 L9.65586993%2c6.0042399 L9.10704006%2c7.63234808 L9.96641881%2c7.99082786 C14.1668447%2c9.74298633 19.0027298%2c11.1774707 24.3714835%2c12.3325169 C30.2979093%2c13.6075419 36.5932268%2c14.4901928 43.2042761%2c15.0895339 C45.1075926%2c15.2620837 46.9360352%2c15.402586 48.8324951%2c15.5275785 L52.0554056%2c15.7227762 L53.7809131%2c15.823621 L53.9311685%2c16.4846731 C55.124723%2c21.8425583 55.9255627%2c28.1618246 56.3794642%2c35.2634489 C56.9696096%2c44.4967114 56.949111%2c54.1296552 56.5389224%2c64.1351972 L56.419416%2c66.8153771 L56.1389131%2c72.290621 L54.7618926%2c72.2977882 C35.1227058%2c72.323088 17.4971901%2c69.5665693 1.88215741%2c64.0327197 L0.71137896%2c63.6178046 L0.555978142%2c64.8501711 C0.518708617%2c65.1457276 0.483019617%2c65.4510314 0.448908057%2c65.7660922 L0.351302615%2c66.740555 C0.273903209%2c67.5770156 0.206343535%2c68.4745168 0.148575414%2c69.4332079 L0.0839505313%2c70.6130178 L0.0287070386%2c71.8516274 L0%2c72.5716054 L0.673882931%2c72.8267018 L1.46970885%2c73.1205409 L2.30690219%2c73.4146474 C2.44866658%2c73.4632273 2.59154711%2c73.5115883 2.73554387%2c73.5597304 L3.6129198%2c73.8459573 C3.9098438%2c73.9404911 4.21123337%2c74.0341498 4.5170892%2c74.1269339 L5.44805615%2c74.4026625 L6.4058247%2c74.6731454 L7.39039893%2c74.9383849 C7.55672867%2c74.9821547 7.72417547%2c75.0257061 7.89273944%2c75.0690391 L8.9175298%2c75.3264177 C9.09056273%2c75.3688776 9.26471299%2c75.4111193 9.43998066%2c75.4531427 L10.5049963%2c75.7026656 L11.5968339%2c75.9469541 L12.7154974%2c76.1860106 L13.8609911%2c76.4198373 C14.0541428%2c76.4583727 14.2484125%2c76.4966903 14.4438005%2c76.5347902 L15.6295468%2c76.7607764 C15.8294078%2c76.7980054 16.0303871%2c76.8350167 16.2324848%2c76.8718104 L17.4584931%2c77.0899614 L18.7113476%2c77.3028916 L19.9910526%2c77.5106035 L21.297612%2c77.7130992 L22.63103%2c77.9103811 C22.8555048%2c77.9428271 23.0810988%2c77.9750559 23.3078122%2c78.0070676 L24.6815255%2c78.1965329 L26.0821076%2c78.3807901 L27.5095624%2c78.5598413 L28.9638941%2c78.7336889 L31.1957945%2c78.9847085 L33.4881906%2c79.2240328 L35.0500702%2c79.3770886 L36.6388469%2c79.5249522 L38.2545249%2c79.6676258 L39.8971081%2c79.8051117 L41.5666007%2c79.9374121 L43.2630067%2c80.0645294 L44.9863302%2c80.1864658 L46.7365752%2c80.3032236 L48.5137458%2c80.414805 L50.3178462%2c80.5212124 L53.0744987%2c80.671127 L54.7469131%2c80.754621 L53.5897183%2c90.3647724 L53.5827299%2c90.4648279 L53.2564071%2c107.144686 L53.2658473%2c107.302703 C53.5991612%2c109.686863 53.5758118%2c111.679548 53.2075621%2c113.275812 L51.3232092%2c121.443977 L55.1429437%2c113.811349 L55.2794819%2c113.51034 L55.4199138%2c113.173577 L55.5641827%2c112.801512 L55.7122316%2c112.3946 L55.8640037%2c111.953295 L56.0194423%2c111.47805 L56.1784906%2c110.96932 L56.3410917%2c110.427557 L56.5071887%2c109.853216 L56.762765%2c108.931612 L56.9373535%2c108.277811 L57.2054006%2c107.239144 L57.3881254%2c106.508718 L57.7629834%2c104.958753 L58.1500073%2c103.292995 L58.4479856%2c101.969872 L58.855206%2c100.110213 L59.2733422%2c98.144744 L59.8022255%2c95.5857248 L60.2183157%2c93.5159731 L60.7969268%2c90.5609047 L61.576228%2c86.4483455 L62.1619229%2c83.2385045 L62.5490577%2c81.0165904 L62.5949131%2c80.740621 L63.9589684%2c80.6253752 C84.9420868%2c78.7859274 102.041546%2c74.5465081 115.259461%2c67.89379 L115.976902%2c67.5326942 L115.779077%2c66.7542491 C115.399528%2c65.2607193 115.077523%2c63.5613124 114.813871%2c61.6569685 L114.557803%2c59.6895586 L113.334468%2c60.2264002 C102.822395%2c64.8394598 91.7135376%2c68.106416 80.8003639%2c70.1630365 L79.1294792%2c70.4686857 L78.0704475%2c70.6522592 L77.0194814%2c70.8265955 L75.9791636%2c70.9916298 L74.9520769%2c71.147297 L73.4419048%2c71.3630923 L72.4591952%2c71.4950574 L71.027695%2c71.6749951 L70.1055043%2c71.782852 L69.2120408%2c71.8809519 L67.931359%2c72.0096653 L67.1210132%2c72.0830884 L66.3484342%2c72.1465271 L65.6162046%2c72.1999163 L64.9269072%2c72.2431911 L64.2831248%2c72.2762864 L63.6874399%2c72.2991374 L63.1424353%2c72.311679 L62.8569131%2c72.313621 L62.8878933%2c72.0434057 C63.0003488%2c71.0100427 63.1003696%2c69.8858649 63.1886189%2c68.6857599 L63.2729689%2c67.4608973 L63.3496186%2c66.1887249 C63.36176%2c65.9729375 63.3735868%2c65.7553167 63.3851019%2c65.5359314 L63.4504774%2c64.1989976 L63.5085212%2c62.8230248 L63.5593804%2c61.4113216 L63.6032025%2c59.9671962 L63.6401349%2c58.493957 L63.6703249%2c56.9949123 L63.6939199%2c55.4733705 L63.7110673%2c53.93264 L63.7219145%2c52.3760291 L63.7266947%2c50.0185741 L63.7181284%2c47.6439976 L63.7000755%2c45.560976 L63.6661341%2c43.0804173 L63.6192317%2c40.616715 L63.559934%2c38.1825695 L63.469243%2c35.2007997 L63.3841246%2c32.879592 L63.2629476%2c30.0791789 L63.1263811%2c27.4142467 L63.0375137%2c25.8906372 L62.9114371%2c23.9581787 L62.7772084%2c22.1505287 L62.7072137%2c21.2974758 L62.6353932%2c20.4803876 L62.5243936%2c19.3256618 L62.4483178%2c18.6054309 L62.3312668%2c17.6034325 L62.2513777%2c16.9899809 L62.1700871%2c16.4220192 L62.0999131%2c15.976621 L62.3566531%2c15.9901516 L62.9524216%2c16.0099506 L63.571578%2c16.0182521 C63.8870048%2c16.0195287 64.2112059%2c16.0164941 64.5441868%2c16.009149 L65.2218567%2c15.9887114 L65.9229496%2c15.9567799 L66.6474753%2c15.9133557 L67.3954438%2c15.8584397 C67.5220594%2c15.8483294 67.6496521%2c15.8377403 67.7782223%2c15.8266725 L68.5613738%2c15.7545208 L69.3679932%2c15.6708798 L70.1980903%2c15.5757506 L71.0516752%2c15.4691343 L71.9287579%2c15.3510318 C72.076897%2c15.330391 72.2260156%2c15.3092716 72.376114%2c15.2876736 L73.288462%2c15.1523439 L74.7010922%2c14.9278181 L75.6722657%2c14.7637814 L76.6669868%2c14.5882638 L77.6852657%2c14.4012662 L78.7271121%2c14.2027897 L79.7925362%2c13.9928354 L80.8815478%2c13.7714041 L82.5593139%2c13.4177404 L83.7073382%2c13.1676215 L84.8789851%2c12.9060294 L86.0742645%2c12.632965 L87.9115164%2c12.2018603 L89.8019976%2c11.7449489 L91.7457418%2c11.2622342 L93.7427827%2c10.7537198 L95.793154%2c10.219409 L97.1897129%2c9.84887227 L98.6099991%2c9.46687309 L100.784939%2c8.87238449 L102.264587%2c8.46173369 L103.767998%2c8.03962405 L106.06769%2c7.3849765 L107.495331%2c6.97533787 L106.578754%2c5.80664231 C106.432228%2c5.61981308 106.278473%2c5.39920665 106.117764%2c5.14508588 L105.871521%2c4.73880184 C105.662031%2c4.37934012 105.441894%2c3.96771763 105.211653%2c3.5044478 L104.930549%2c2.92376614 C104.882901%2c2.82286503 104.834858%2c2.71990624 104.786424%2c2.61489388 L104.491159%2c1.96020973 L104.186716%2c1.25643702 L103.675881%2c0.0331219301 L102.797464%2c0.320045435 C71.7175562%2c10.4718934 41.7034288%2c10.4718934 12.7209471%2c0.326775377 Z M102.545913%2c2.50362105 L102.702644%2c2.86110252 C103.146789%2c3.86186419 103.567707%2c4.71974543 103.967888%2c5.43710546 L104.198913%2c5.83862105 L102.550572%2c6.30462946 L100.373725%2c6.91091887 L97.5515768%2c7.68067932 L95.4952433%2c8.22903493 L94.1530759%2c8.58081446 L92.1829312%2c9.08779994 L90.2645432%2c9.5699678 L89.0143875%2c9.87762712 L86.5831667%2c10.459864 L84.820243%2c10.8675991 L83.6737844%2c11.1256421 L82.5503959%2c11.372662 L81.4500872%2c11.6086598 L80.372868%2c11.8336365 L78.8003529%2c12.150439 L77.7808993%2c12.3478672 L76.7845687%2c12.5342776 L75.8113709%2c12.7096715 L74.8613153%2c12.8740496 L73.4796447%2c13.0999645 L72.5874869%2c13.2368078 L71.7185049%2c13.3626388 L70.4585079%2c13.5307396 L69.6475079%2c13.6290444 L68.8597174%2c13.7163405 L68.095146%2c13.7926288 L67.3538034%2c13.8579104 L66.6356993%2c13.9121862 L65.9408431%2c13.9554572 L65.2692445%2c13.9877244 L64.6209131%2c14.0089888 L63.9958586%2c14.0192514 C63.8936231%2c14.020045 63.7923579%2c14.0203803 63.6920631%2c14.0202573 L63.1019419%2c14.014019 C62.8127056%2c14.00815 62.5322072%2c13.9981562 62.2604521%2c13.9840382 L61.7286009%2c13.9503034 C61.6419026%2c13.9437645 61.556176%2c13.9367674 61.4714216%2c13.9293122 L60.9745614%2c13.8790825 L59.5349298%2c13.7137313 L59.891138%2c15.1183651 C59.9564669%2c15.3759761 60.0209277%2c15.6829586 60.0843653%2c16.0358657 L60.1787352%2c16.5992388 C60.1943291%2c16.6987313 60.2098543%2c16.8009863 60.2253083%2c16.9059501 L60.3171582%2c17.5678062 L60.4071829%2c18.2920862 L60.4952661%2c19.0762047 L60.5812917%2c19.9175765 L60.6651433%2c20.8136165 L60.7865903%2c22.2545239 L60.8644985%2c23.2759238 L60.9764856%2c24.8927529 L61.0822736%2c26.6035015 L61.1491614%2c27.7918693 L61.2130034%2c29.0155161 L61.3310854%2c31.5583054 L61.3850929%2c32.8722776 L61.4594853%2c34.8891868 L61.5255865%2c36.9534814 L61.5830041%2c39.0564363 L61.6313458%2c41.1893264 L61.6702193%2c43.3434264 L61.6992324%2c45.5100114 L61.7179928%2c47.6803561 L61.726108%2c49.8457354 L61.7231859%2c51.9974243 L61.7088342%2c54.1266974 L61.6826605%2c56.2248298 L61.6584499%2c57.6019756 L61.6286945%2c58.9588179 L61.593278%2c60.2927717 L61.5520843%2c61.6012515 L61.5049971%2c62.8816723 L61.4230617%2c64.7440375 L61.3607323%2c65.9430002 L61.2921024%2c67.1048556 L61.2170561%2c68.2270183 L61.1354769%2c69.3069032 C61.1071821%2c69.6595313 61.0777792%2c70.0046822 61.0472487%2c70.3419251 L60.9522552%2c71.3294987 C60.9194502%2c71.6504946 60.8854983%2c71.9631516 60.8503802%2c72.2670388 L60.7415074%2c73.1519601 L60.6039024%2c74.2019589 L61.6600562%2c74.2792355 C61.7683476%2c74.287159 61.8844874%2c74.2936696 62.008184%2c74.2987758 L62.4016532%2c74.309889 L62.838715%2c74.3126254 L63.3176209%2c74.3070349 L63.8366224%2c74.2931676 L64.3939708%2c74.2710735 L64.9879176%2c74.2408027 L65.9436349%2c74.1801746 L66.6214277%2c74.129681 L67.6947176%2c74.0389533 L68.8306824%2c73.930391 L70.0234208%2c73.8041631 L71.2670314%2c73.6604385 L72.1214531%2c73.5549852 L72.9941132%2c73.4418806 L74.3334755%2c73.2579872 L75.2440817%2c73.1259737 L76.6321666%2c72.9139514 L78.0416166%2c72.685277 L78.9902051%2c72.5236597 L79.9439177%2c72.3547665 L81.1289468%2c72.1363151 C91.4061405%2c70.2023678 101.855684%2c67.2086963 111.842107%2c63.0405877 L112.925913%2c62.581621 C113.118087%2c63.8704499 113.337214%2c65.0657618 113.58429%2c66.1712677 L113.650913%2c66.459621 L113.005496%2c66.7738516 C100.003079%2c73.0265306 83.2463279%2c77.0136314 62.7372446%2c78.722526 L60.8662281%2c78.8725625 L60.6132744%2c80.4671497 L60.3879824%2c81.7840301 L59.8422037%2c84.8247914 L59.1652985%2c88.4480774 L58.6697011%2c91.0252621 L58.1183669%2c93.8196115 L57.8426483%2c95.1856553 L57.532011%2c96.6980842 L57.0953117%2c98.7765888 L56.810218%2c100.10147 L56.5303134%2c101.375773 L56.1208567%2c103.188743 L55.8552662%2c104.329298 L55.5959379%2c105.413433 L55.2649131%2c106.747621 L55.5809131%2c90.553621 L56.9904658%2c78.8584918 L54.0797901%2c78.7196573 L51.3249094%2c78.5746365 L48.6305113%2c78.418136 L46.8678542%2c78.3074285 L45.1320885%2c78.1916246 L43.4232182%2c78.0707266 L41.7412474%2c77.9447368 L40.0861802%2c77.8136574 L38.4580207%2c77.6774908 L36.8567728%2c77.5362391 L35.2824407%2c77.3899046 L32.9714185%2c77.1608778 L31.4643936%2c77.0018465 L29.9842987%2c76.8377403 L27.814659%2c76.5820709 L26.4019069%2c76.4052878 C26.1686934%2c76.3754016 25.9366026%2c76.3453043 25.7056346%2c76.314996 L24.3333004%2c76.1306135 L22.9879165%2c75.9411675 L21.6694869%2c75.7466605 L20.3780158%2c75.5470945 L19.1135073%2c75.342472 L17.8759653%2c75.1327952 L16.665394%2c74.9180663 C16.4658799%2c74.8818573 16.2674897%2c74.8454378 16.0702236%2c74.8088081 L14.9001159%2c74.5865054 L13.756989%2c74.3591563 L12.640847%2c74.1267632 C12.4570723%2c74.0876108 12.2744222%2c74.0482484 12.0928966%2c74.0086758 L11.0172396%2c73.7687209 L9.96857756%2c73.5237275 L8.94691467%2c73.273698 L7.95225496%2c73.0186347 L6.9846025%2c72.7585398 C6.82557792%2c72.7147714 6.66767881%2c72.6707936 6.51090525%2c72.6266062 L5.58377128%2c72.3589682 L4.68365472%2c72.0863043 C4.53588697%2c72.0404416 4.38924511%2c71.9943696 4.24372924%2c71.9480883 L3.38414641%2c71.6678898 C3.10212318%2c71.5736535 2.82460453%2c71.4785805 2.55159116%2c71.3826712 L2.05791309%2c71.205621 L2.08123603%2c70.7173508 C2.12033478%2c69.927774 2.16547106%2c69.1776664 2.2166202%2c68.4671044 L2.29785048%2c67.4309302 C2.31213945%2c67.2631809 2.32680344%2c67.0979055 2.34184208%2c66.9351054 L2.40091309%2c66.330621 L3.08681762%2c66.5652179 C19.0838892%2c71.9572853 37.0914367%2c74.5279922 57.1062722%2c74.281826 L58.0769178%2c74.2698878 L58.0948932%2c73.2625167 L58.4604867%2c65.9952579 C58.9455478%2c55.2883861 59.0056754%2c44.9971387 58.3753915%2c35.1358789 C57.8751712%2c27.3095623 56.9572703%2c20.4046801 55.5542093%2c14.6362122 L55.3820192%2c13.9282791 L54.1119476%2c13.8404064 L50.3915665%2c13.6223817 C47.9855968%2c13.4756576 45.7424403%2c13.3114355 43.3848505%2c13.0977023 C36.8485175%2c12.5051349 30.6303454%2c11.6333004 24.7921429%2c10.3772558 L23.8699846%2c10.1748554 C19.5927279%2c9.2172033 15.683002%2c8.0755149 12.2018811%2c6.73279313 L11.6009131%2c6.49662105 L11.9668476%2c5.43894584 L12.4356287%2c4.10623953 L12.9949131%2c2.53762105 L13.8256776%2c2.8196728 C42.0970921%2c12.3063618 71.3452336%2c12.3054801 101.539893%2c2.8229838 L102.545913%2c2.50362105 Z'%3e%3c/path%3e %3c/g%3e %3cg transform='translate(67.863777%2c 11.832167)' id='%e5%b8%bd%e5%ad%90'%3e %3cpath fill='url(%23linearGradient-2)' d='M87.6873065%2c1 C135.582043%2c1 174.374613%2c35.6749226 174.374613%2c78.4767802 C174.374613%2c121.278638 135.582043%2c155.95356 87.6873065%2c155.95356 C39.7925697%2c155.95356 1%2c121.278638 1%2c78.4767802 C1%2c35.6749226 39.7925697%2c1 87.6873065%2c1 Z'%3e%3c/path%3e %3cpath fill='black' id='%e5%b8%bd%e5%ad%90%e5%a4%87%e4%bb%bd' d='M87.6873065%2c0 C39.265319%2c0 0%2c35.0946504 0%2c78.4767802 C0%2c121.85891 39.265319%2c156.95356 87.6873065%2c156.95356 C136.109294%2c156.95356 175.374613%2c121.85891 175.374613%2c78.4767802 C175.374613%2c35.0946504 136.109294%2c0 87.6873065%2c0 Z M87.6873065%2c2 C135.051652%2c2 173.374613%2c36.2523875 173.374613%2c78.4767802 C173.374613%2c120.701173 135.051652%2c154.95356 87.6873065%2c154.95356 C40.3229611%2c154.95356 2%2c120.701173 2%2c78.4767802 C2%2c36.2523875 40.3229611%2c2 87.6873065%2c2 Z'%3e%3c/path%3e %3cpath fill='%2364BEF8' id='%e8%93%9d%e8%89%b2' d='M95.4891641%2c1.6501548 C86.2786378%2c30.1486068 88.6625387%2c41.8513932 88.6625387%2c41.8513932 C83.244582%2c41.8513932 79.5603715%2c41.7430341 79.5603715%2c41.7430341 C79.0185759%2c25.1640867 86.3869969%2c1.3250774 86.3869969%2c1.3250774 L95.4891641%2c1.6501548 Z'%3e%3c/path%3e %3cpath fill='black' id='%e8%93%9d%e8%89%b2%e5%a4%87%e4%bb%bd' d='M95.5248556%2c0.650791944 L86.4226884%2c0.325714545 C85.9706749%2c0.309571206 85.5641008%2c0.59884135 85.4311642%2c1.03116608 L85.1449772%2c1.98735907 L84.8860674%2c2.87933025 L84.6030853%2c3.87695597 L84.3066116%2c4.94638633 C84.2561616%2c5.13043252 84.2052145%2c5.31733864 84.1538027%2c5.5070387 C83.2953721%2c8.67448959 82.4544342%2c12.0727368 81.6871463%2c15.5880861 C79.5186814%2c25.5229643 78.3246952%2c34.5476736 78.5609051%2c41.7756964 C78.5769323%2c42.2661295 78.9447176%2c42.6663753 79.4201007%2c42.7332228 L79.5523365%2c42.7432169 L82.2756973%2c42.8006117 L83.7759874%2c42.8219938 L85.3438851%2c42.8379557 L86.9743993%2c42.8479411 L88.6625387%2c42.8513932 C89.2950377%2c42.8513932 89.7686649%2c42.2715596 89.6424152%2c41.6517887 L89.6311377%2c41.5923827 L89.6040169%2c41.42367 L89.5721655%2c41.1879194 L89.5372117%2c40.8845263 L89.5190804%2c40.7072749 C89.4997894%2c40.5108441 89.4821414%2c40.310806 89.4661729%2c40.1071473 L89.4233424%2c39.4852964 C89.4107693%2c39.2743833 89.3999123%2c39.0598364 89.3908078%2c38.8416423 L89.3687883%2c38.1761053 C89.3660068%2c38.0633545 89.3636725%2c37.9496885 89.3617901%2c37.8351058 L89.3559539%2c37.1365948 C89.3557832%2c36.7818253 89.3597611%2c36.418775 89.3680107%2c36.0473988 L89.390242%2c35.293532 L89.4240838%2c34.5173833 L89.4697549%2c33.7188729 C89.4783647%2c33.5839199 89.4874766%2c33.4480318 89.497095%2c33.311207 L89.5609211%2c32.4790043 L89.6371243%2c31.6242402 L89.7259236%2c30.7468351 C89.7417854%2c30.5987097 89.7581811%2c30.4496377 89.7751153%2c30.2996172 L89.8832197%2c29.3881008 C89.9023263%2c29.2342802 89.9219806%2c29.079508 89.9421871%2c28.9237824 L90.0700893%2c27.9779751 C90.092523%2c27.8184294 90.115518%2c27.6579271 90.1390789%2c27.4964664 L90.2872719%2c26.5161887 C90.3131148%2c26.350888 90.3395326%2c26.1846256 90.3665301%2c26.0173999 L90.5355068%2c25.0024722 L90.7186131%2c23.9643449 L90.9160681%2c22.902938 L91.1280909%2c21.8181717 L91.3549004%2c20.7099663 L91.5967159%2c19.5782419 L91.8537562%2c18.4229187 C91.8978772%2c18.2283939 91.9426417%2c18.0328824 91.9880542%2c17.8363827 L92.2683427%2c16.6455117 L92.5644039%2c15.4308424 L92.8764566%2c14.1922951 L93.2047201%2c12.9297898 C93.2607938%2c12.7173713 93.317552%2c12.5039513 93.3749994%2c12.289528 L93.7279897%2c10.9909362 L94.0977384%2c9.66818702 C94.1607719%2c9.44571127 94.2245128%2c9.22222563 94.2889657%2c8.99772845 L94.6842627%2c7.63859348 L95.0968658%2c6.25510156 L95.526994%2c4.84717289 L95.9748664%2c3.41472767 L96.4407021%2c1.95768608 C96.6448401%2c1.32605906 96.1882286%2c0.674483837 95.5248556%2c0.650791944 Z M87.1222229%2c2.35183282 L94.1342229%2c2.60183282 L94.0655292%2c2.81937857 C93.9068539%2c3.32129356 93.751377%2c3.81889187 93.5990592%2c4.31218781 L93.1515439%2c5.77918288 L92.7227471%2c7.22044975 L92.3124331%2c8.63607438 C92.2455745%2c8.86987974 92.1794763%2c9.10262026 92.1141334%2c9.33429772 L91.7311011%2c10.7116202 L91.3659617%2c12.0635153 C91.3065831%2c12.286717 91.2479402%2c12.5088628 91.1900282%2c12.7299545 L90.8512858%2c14.0438698 L90.5298466%2c15.3325727 L90.2254745%2c16.5961492 L89.9379337%2c17.8346851 L89.6669883%2c19.0482666 C89.6232005%2c19.2484554 89.5800945%2c19.447608 89.5376651%2c19.6457262 L89.2911703%2c20.822037 L89.0606811%2c21.9736082 L88.8459615%2c23.1005258 L88.6467755%2c24.2028757 L88.4628874%2c25.2807438 L88.2940611%2c26.3342162 C88.2402697%2c26.6813172 88.1889494%2c27.0243666 88.1400607%2c27.3633788 L88.0006504%2c28.3683175 L87.8755941%2c29.3491184 L87.764656%2c30.3058673 L87.6676001%2c31.2386504 C87.6375356%2c31.5455933 87.6097455%2c31.8485562 87.5841905%2c32.1475534 L87.5141914%2c33.0326624 C87.5036293%2c33.1782025 87.4936161%2c33.3227548 87.4841469%2c33.466321 L87.433821%2c34.3159002 L87.3963157%2c35.1419003 L87.371395%2c35.9444072 C87.3620415%2c36.3398017 87.3573188%2c36.7264186 87.3570942%2c37.104306 L87.362603%2c37.8484562 C87.3702215%2c38.336816 87.3856792%2c38.8097143 87.4086616%2c39.2672657 L87.4487395%2c39.9420969 C87.4639538%2c40.1632135 87.4810099%2c40.3805077 87.4998686%2c40.5939938 L87.5232229%2c40.8488328 L85.3605256%2c40.8380247 L83.8006968%2c40.8221463 L80.5382229%2c40.7668328 L80.5334508%2c40.4121825 C80.47606%2c33.6016854 81.634381%2c25.2086119 83.6411428%2c16.0145808 C84.4009157%2c12.5336613 85.233986%2c9.16720747 86.0841663%2c6.03019856 L86.3835772%2c4.93780709 L86.8083407%2c3.43147642 L87.1222229%2c2.35183282 Z'%3e%3c/path%3e %3c/g%3e %3cg transform='translate(97.662539%2c 52.791920)' id='%e8%84%b8'%3e %3cpath fill='%23F8E3DE' id='%e6%a4%ad%e5%9c%86-5' d='M57.996904%2c1 C89.4210526%2c1 114.885449%2c22.996904 114.885449%2c49.9783282 C114.885449%2c77.0681115 89.4210526%2c99.0650155 57.996904%2c99.0650155 C26.5727554%2c99.0650155 1%2c77.0681115 1%2c49.9783282 C1%2c22.996904 26.5727554%2c1 57.996904%2c1 Z'%3e%3c/path%3e %3cpath fill='black' id='%e6%a4%ad%e5%9c%86-5%e5%a4%87%e4%bb%bd' d='M57.996904%2c0 C26.060001%2c0 0%2c22.4006571 0%2c49.9783282 C0%2c77.6471885 26.0402198%2c100.065015 57.996904%2c100.065015 C89.9334185%2c100.065015 115.885449%2c77.6643155 115.885449%2c49.9783282 C115.885449%2c22.3835578 89.9136872%2c0 57.996904%2c0 Z M57.996904%2c2 C88.8696891%2c2 113.885449%2c23.5596351 113.885449%2c49.9783282 C113.885449%2c76.4890167 88.888865%2c98.0650155 57.996904%2c98.0650155 C27.0838174%2c98.0650155 2%2c76.470548 2%2c49.9783282 C2%2c23.5780774 27.1030458%2c2 57.996904%2c2 Z'%3e%3c/path%3e %3cg transform='translate(19.135781%2c 21.046440)' id='%e5%b7%a6%e7%9c%bc'%3e %3cpath fill='black' id='%e5%bd%a2%e7%8a%b6-11' d='M1.910659%2c-1.5398759e-14 C12.9632906%2c0.325077399 19.4648386%2c6.82662539 19.4648386%2c6.82662539 C20.656789%2c9.10216718 18.7063246%2c8.01857585 18.7063246%2c8.01857585 C11.7713401%2c4.33436533 0.17691287%2c0.866873065 0.17691287%2c0.866873065 C-0.689960195%2c0.108359133 1.910659%2c-1.5398759e-14 1.910659%2c-1.5398759e-14 Z'%3e%3c/path%3e %3cpath fill='black' id='%e6%a4%ad%e5%9c%86-1' d='M11.2295444%2c14.7368421 C14.913755%2c14.4117647 18.2728881%2c17.6625387 18.7063246%2c21.8885449 C19.1397612%2c26.2229102 16.4307828%2c29.9071207 12.7465723%2c30.123839 C8.95400265%2c30.4489164 5.59486953%2c27.1981424 5.26979213%2c22.8637771 C4.83635559%2c18.6377709 7.54533392%2c14.9535604 11.2295444%2c14.7368421 L11.2295444%2c14.7368421 Z'%3e%3c/path%3e %3cpath fill='white' id='%e6%a4%ad%e5%9c%86-2' d='M13.3967271%2c18.4210526 C14.5886776%2c18.3126935 15.5639098%2c19.3962848 15.6722689%2c20.9133127 C15.780628%2c22.4303406 14.913755%2c23.7306502 13.8301636%2c23.7306502 C12.7465723%2c23.8390093 11.662981%2c22.755418 11.5546218%2c21.2383901 C11.4462627%2c19.7213622 12.3131358%2c18.4210526 13.3967271%2c18.4210526 Z'%3e%3c/path%3e %3cpath fill='white' id='%e6%a4%ad%e5%9c%86-3-%e6%8b%b7%e8%b4%9d' d='M14.155241%2c25.1393189 C14.6970367%2c25.1393189 15.1304732%2c25.3560372 15.1304732%2c25.7894737 C15.1304732%2c26.1145511 14.6970367%2c26.4396285 14.155241%2c26.4396285 C13.6134454%2c26.4396285 13.0716497%2c26.1145511 13.0716497%2c25.7894737 C13.0716497%2c25.3560372 13.6134454%2c25.1393189 14.155241%2c25.1393189 Z'%3e%3c/path%3e %3c/g%3e %3cg transform='translate(72.998095%2c 21.046440)' id='%e5%8f%b3%e7%9c%bc'%3e %3cpath fill='black' id='%e5%bd%a2%e7%8a%b6-11' d='M19.7820904%2c0.866873065 C19.7820904%2c0.866873065 8.18766319%2c4.33436533 1.14431954%2c8.01857585 C1.14431954%2c8.01857585 -0.806144859%2c9.10216718 0.385805605%2c6.82662539 C0.385805605%2c6.82662539 6.88735359%2c0.325077399 18.0483443%2c-1.5398759e-14 C18.0483443%2c-1.5398759e-14 20.5406044%2c0.108359133 19.7820904%2c0.866873065 L19.7820904%2c0.866873065 Z'%3e%3c/path%3e %3cpath fill='black' id='%e6%a4%ad%e5%9c%86-1' d='M14.6892112%2c22.8637771 C14.2557746%2c27.1981424 10.8966415%2c30.4489164 7.21243099%2c30.123839 C3.41986133%2c29.9071207 0.819242138%2c26.2229102 1.14431954%2c21.8885449 C1.57775607%2c17.6625387 4.9368892%2c14.4117647 8.62109972%2c14.7368421 C12.4136694%2c14.9535604 15.1226477%2c18.6377709 14.6892112%2c22.8637771 L14.6892112%2c22.8637771 Z'%3e%3c/path%3e %3cpath fill='white' id='%e6%a4%ad%e5%9c%86-2' d='M10.3548459%2c21.2383901 C10.2464867%2c22.755418 9.27125452%2c23.8390093 8.07930406%2c23.7306502 C6.99571273%2c23.7306502 6.12883966%2c22.4303406 6.23719879%2c20.9133127 C6.34555793%2c19.3962848 7.32079013%2c18.3126935 8.51274059%2c18.4210526 C9.59633192%2c18.4210526 10.463205%2c19.7213622 10.3548459%2c21.2383901 Z'%3e%3c/path%3e %3cpath fill='white' id='%e6%a4%ad%e5%9c%86-3-%e6%8b%b7%e8%b4%9d' d='M5.80376226%2c25.1393189 C6.34555793%2c25.1393189 6.77899446%2c25.3560372 6.77899446%2c25.7894737 C6.77899446%2c26.1145511 6.34555793%2c26.4396285 5.80376226%2c26.4396285 C5.2619666%2c26.4396285 4.72017093%2c26.1145511 4.72017093%2c25.7894737 C4.72017093%2c25.3560372 5.2619666%2c25.1393189 5.80376226%2c25.1393189 Z'%3e%3c/path%3e %3c/g%3e %3c/g%3e %3cg transform='translate(71.527912%2c 98.435882)' id='%e5%8f%a3%e7%bd%a9'%3e %3cpolygon points='147.95506 1.08359133 158.790973 2.16718266 163.125338 13.003096 153.373016 22.755418 134.951964 30.3405573 136.035555 27.0897833 152.289425 21.6718266 160.958156 13.003096 157.707382 4.33436533 144.704286 3.25077399' fill='%2364BEF8' id='%e5%bd%a2%e7%8a%b6-512'%3e%3c/polygon%3e %3cpolygon points='19.0076913 2.16718266 6.00459536 3.25077399 2.75382137 11.9195046 11.422552 20.5882353 27.676422 26.006192 28.7600133 29.2569659 10.3389607 21.6718266 0.586638703 11.9195046 4.92100403 1.08359133 15.7569173 0' fill='%2364BEF8' id='%e5%bd%a2%e7%8a%b6-512-%e6%8b%b7%e8%b4%9d'%3e%3c/polygon%3e %3cpath fill='%2364BEF8' id='%e5%bd%a2%e7%8a%b6-510' d='M14.673326%2c0 L39.8126449%2c9.75232198 C39.8126449%2c9.75232198 58.1253384%2c14.1950464 64.9519638%2c9.75232198 C64.9519638%2c9.75232198 86.8405087%2c3.46749226 96.7011898%2c9.75232198 C96.7011898%2c9.75232198 115.772397%2c16.7956656 126.499951%2c9.75232198 L146.97997%2c2.16718266 C146.97997%2c2.16718266 147.521623%2c58.4055728 81.7476294%2c62.8482972 C81.7476294%2c62.8482972 28.8683724%2c63.9318885 23.0169793%2c16.25387 C23.0169793%2c16.25387 21.3915923%2c7.58513932 14.673326%2c3.25077399 L14.673326%2c0 Z'%3e%3c/path%3e %3cpath fill='black' id='%e5%bd%a2%e7%8a%b6%e7%bb%93%e5%90%88' d='M16.4984848%2c0.0365540051 L18.0443305%2c0.748569604 L19.4632008%2c1.38847151 C19.69839%2c1.49343185 19.9329347%2c1.59754723 20.1668347%2c1.70081772 L20.1668347%2c1.70081772 L21.5624986%2c2.31030224 C22.2564624%2c2.60997552 22.9446237%2c2.90204565 23.6269814%2c3.18651406 L23.6269814%2c3.18651406 L24.9839583%2c3.74531568 L26.3254568%2c4.28384859 C26.54775%2c4.37191516 26.7693981%2c4.45913731 26.9904011%2c4.54551508 L26.9904011%2c4.54551508 L28.3086786%2c5.05364972 C28.745524%2c5.21965073 29.1797888%2c5.38227469 29.6114728%2c5.54152201 L29.6114728%2c5.54152201 L30.8987819%2c6.00913452 C32.3916087%2c6.54286523 33.8528159%2c7.0352374 35.2823895%2c7.48626923 L35.2823895%2c7.48626923 L36.5%2c7.86274421 C36.7016332%2c7.92380282 36.9026298%2c7.98401786 37.1029807%2c8.04338937 L37.1029807%2c8.04338937 L38.2973374%2c8.38949663 C48.5812695%2c11.301374 57.1189862%2c11.9326572 63.9047222%2c10.2908073 L63.9047222%2c10.2908073 L73.0038566%2c8.06582588 L73.8556905%2c7.87147314 C74.2270923%2c7.78845 74.5878942%2c7.70984719 74.9393724%2c7.63550539 L74.9393724%2c7.63550539 L75.9671119%2c7.42510367 C77.8046997%2c7.06221855 79.3988486%2c6.82340948 80.9618812%2c6.68217 C85.0466729%2c6.31305816 89.1023693%2c6.62825615 94.2860661%2c7.86471634 L94.2860661%2c7.86471634 L95.212781%2c8.0925267 C95.525746%2c8.1716834 95.8428498%2c8.25407609 96.1643276%2c8.33975299 L96.1643276%2c8.33975299 L97.1421192%2c8.60668459 C97.4725809%2c8.69897816 97.8076522%2c8.79460418 98.1475688%2c8.89361087 L98.1475688%2c8.89361087 L99.1820895%2c9.20082122 L100.247094%2c9.528605 L101.343997%2c9.87725161 L102.474209%2c10.2470504 C102.665432%2c10.3104623 102.858102%2c10.3747676 103.052248%2c10.4399723 L103.052248%2c10.4399723 L104.235076%2c10.842042 L105.454747%2c11.2659873 L106.026088%2c11.4681176 L107.052095%2c11.5917294 L108.586292%2c11.7661914 L109.541764%2c11.8664073 L110.447467%2c11.9537937 L111.306911%2c12.0283887 L112.123605%2c12.0902302 C112.256353%2c12.0994764 112.387466%2c12.1081929 112.517017%2c12.1163803 L112.517017%2c12.1163803 L113.276164%2c12.1591628 L114.001332%2c12.1892867 L114.696031%2c12.2067901 C115.036347%2c12.212393 115.366553%2c12.2132775 115.688623%2c12.2094648 L115.688623%2c12.2094648 L116.322498%2c12.195583 L116.938183%2c12.1692135 C117.343357%2c12.1474798 117.738744%2c12.1174462 118.129022%2c12.0791636 L118.129022%2c12.0791636 L118.711192%2c12.0155591 C118.904362%2c11.9922995 119.096839%2c11.966984 119.289209%2c11.9396188 L119.289209%2c11.9396188 L119.56951%2c11.898294 C120.188056%2c11.8039231 120.808966%2c11.6873505 121.44918%2c11.5438593 L121.44918%2c11.5438593 L122.096455%2c11.3912206 C122.423937%2c11.3102401 122.757656%2c11.2221368 123.09973%2c11.1263213 L123.09973%2c11.1263213 L123.795644%2c10.9242324 C123.913695%2c10.8887788 124.032832%2c10.8524246 124.153132%2c10.815148 L124.153132%2c10.815148 L124.889522%2c10.5802444 C125.265326%2c10.4570832 125.653013%2c10.325227 126.054701%2c10.1840862 L126.054701%2c10.1840862 L126.877372%2c9.88925046 C127.017804%2c9.83798968 127.159949%2c9.7856536 127.303884%2c9.73222038 L127.303884%2c9.73222038 L128.189616%2c9.39828071 C128.341028%2c9.34037159 128.494389%2c9.28132166 128.649776%2c9.22110908 L128.649776%2c9.22110908 L129.607037%2c8.84570709 L130.11494%2c8.64158892 L132.556666%2c7.63729806 L146.704088%2c1.73911765 L146.879186%2c1.58005552 L147.236055%2c1.26459472 L148.050139%2c0.564390315 L159.142861%2c1.70061016 L163.712024%2c13.1235176 L153.72657%2c23.1089713 L153.570821%2c23.2146275 L140.372088%2c28.8991176 L140.063024%2c29.448903 C127.141133%2c52.1332186 107.975575%2c63.4494056 82.6082226%2c63.3560768 L82.6082226%2c63.3560768 L81.8297337%2c63.3496558 L79.7567749%2c63.2341305 L77.7760145%2c63.1097169 L75.8829851%2c62.9751492 L74.0732187%2c62.8291619 L72.9107589%2c62.7248679 L71.7819955%2c62.614561 L70.6856048%2c62.4978664 L69.620263%2c62.3744089 L68.5846464%2c62.2438136 C68.4144472%2c62.221432 68.2454314%2c62.1987375 68.0775714%2c62.1757221 L68.0775714%2c62.1757221 L67.0840604%2c62.033717 L66.1169653%2c61.8836366 C65.9579105%2c61.8579295 65.7999013%2c61.8318702 65.6429099%2c61.805451 L65.6429099%2c61.805451 L64.7129564%2c61.6425547 C64.5599264%2c61.6146647 64.4078592%2c61.5863991 64.2567272%2c61.5577502 L64.2567272%2c61.5577502 L63.3609368%2c61.3811941 C63.2134352%2c61.3509806 63.0668137%2c61.3203681 62.9210446%2c61.2893488 L62.9210446%2c61.2893488 L62.0564389%2c61.0982893 C61.3440909%2c60.9349011 60.6516753%2c60.7609528 59.9757447%2c60.5754678 L59.9757447%2c60.5754678 L59.1723203%2c60.3472858 L58.3833978%2c60.1076536 C58.1226936%2c60.0258262 57.8641857%2c59.942028 57.6076535%2c59.8561963 L57.6076535%2c59.8561963 L56.8437636%2c59.5925389 C55.8325582%2c59.2326956 54.8494346%2c58.8393187 53.8802726%2c58.4084083 L53.8802726%2c58.4084083 L53.1557982%2c58.0781254 L52.4352357%2c57.7333926 C52.3153944%2c57.6747121 52.195661%2c57.6154139 52.0760077%2c57.5554902 L52.0760077%2c57.5554902 L51.3588309%2c57.1883791 L51.0005512%2c56.9990767 C43.6990521%2c53.1014856 37.140825%2c46.7386889 30.3010537%2c36.6385789 L30.3010537%2c36.6385789 L29.5105416%2c35.4565236 C28.8506431%2c34.4575353 28.1877771%2c33.4235412 27.5210326%2c32.3534103 L27.5210326%2c32.3534103 L26.7190192%2c31.0518351 L25.9129326%2c29.7151342 L25.1910876%2c28.4931176 L23.3499885%2c27.758256 L21.8019496%2c27.1217658 L18.4485377%2c25.7122254 L15.3361782%2c24.3812988 L10.1392404%2c22.1302062 L9.98609797%2c22.0260693 L0%2c12.0788737 L4.57577436%2c0.599330175 L16.4984848%2c0.0365540051 Z M16.3000876%2c1.04711765 L5.26608762%2c1.56711765 L1.17308762%2c11.8361176 L10.6240876%2c21.2511176 L15.2468938%2c23.2541508 L17.9904033%2c24.4304222 L21.4975674%2c25.9119465 L23.7206524%2c26.8294747 L24.7926325%2c27.2615172 L25.8775356%2c27.6873568 L26.3675522%2c28.521996 C34.9276864%2c43.0158829 42.668813%2c51.4179805 51.4714647%2c56.1168973 L51.4714647%2c56.1168973 L52.1840164%2c56.4893076 C54.2045321%2c57.5226314 56.24431%2c58.3718628 58.4435886%2c59.0761932 L58.4435886%2c59.0761932 L59.2266557%2c59.3188275 C59.490038%2c59.3977426 59.7558562%2c59.474716 60.0243388%2c59.5498115 L60.0243388%2c59.5498115 L60.8380078%2c59.7695279 C61.386087%2c59.9123348 61.9457368%2c60.0478852 62.5187843%2c60.1766899 L62.5187843%2c60.1766899 L63.3886321%2c60.3649012 C63.682083%2c60.4259944 63.9791116%2c60.4854649 64.2799463%2c60.5433766 L64.2799463%2c60.5433766 L65.1940972%2c60.712499 C65.8114479%2c60.8222147 66.4449363%2c60.9259504 67.0963895%2c61.0242165 L67.0963895%2c61.0242165 L68.087271%2c61.1675773 C68.4222083%2c61.2140394 68.7618651%2c61.2591979 69.1064698%2c61.3031167 L69.1064698%2c61.3031167 L70.1553558%2c61.4312176 L71.2352992%2c61.5522629 C71.417954%2c61.5718704 71.6019599%2c61.5911999 71.7873456%2c61.6102593 L71.7873456%2c61.6102593 L72.9164441%2c61.7214391 L74.0800254%2c61.8265206 C74.2769053%2c61.8435473 74.475279%2c61.8603358 74.6751752%2c61.8768941 L74.6751752%2c61.8768941 L75.8930496%2c61.973546 L77.148832%2c62.0650568 L78.4438926%2c62.1518093 L79.7796015%2c62.2341866 L81.8623777%2c62.3503864 C107.486258%2c62.6778404 126.705183%2c51.3299706 139.583509%2c28.2634528 L139.583509%2c28.2634528 L139.666297%2c28.1151697 L153.085088%2c22.3351176 L162.538088%2c12.8821176 L158.438088%2c2.63311765 L148.374088%2c1.60211765 L147.773804%2c2.12292674 L147.466978%2c2.39681828 L147.325963%2c2.52813798 L147.170299%2c2.62954057 L134.47123%2c7.92516126 L130.302998%2c9.64421631 L129.004108%2c10.1562567 L128.081135%2c10.5091311 C127.931139%2c10.5656612 127.783007%2c10.6210647 127.636659%2c10.6753634 L127.636659%2c10.6753634 L126.779343%2c10.988072 L125.961022%2c11.2753104 L125.177874%2c11.5381246 C123.516396%2c12.081851 122.075686%2c12.4609536 120.680828%2c12.7232975 L120.680828%2c12.7232975 L120.039667%2c12.836263 L119.720333%2c12.8868547 L119.141531%2c12.9692304 L118.561127%2c13.0396407 L118.561127%2c13.0396407 L118.269305%2c13.0703518 L117.680386%2c13.1227716 C117.482635%2c13.1382425 117.283259%2c13.1517097 117.081714%2c13.1631694 L117.081714%2c13.1631694 L116.470029%2c13.1915225 C116.366816%2c13.195243 116.262925%2c13.1984608 116.158288%2c13.2011752 L116.158288%2c13.2011752 L115.52097%2c13.2114188 L114.86249%2c13.209561 L114.179585%2c13.1955792 L113.468995%2c13.1694508 L112.727462%2c13.131153 L111.951723%2c13.0806633 L111.138518%2c13.0179589 L110.284588%2c12.9430172 L109.386672%2c12.8558155 L108.44151%2c12.7563312 L107.44584%2c12.6445416 L105.850504%2c12.4537352 L105.744592%2c12.4287387 L104.519274%2c11.9983799 L103.331575%2c11.589889 L102.180089%2c11.2029708 L101.06341%2c10.8373304 L99.9801346%2c10.4926727 L98.9288564%2c10.1687025 C98.7562318%2c10.116415 98.5848818%2c10.0649773 98.4147772%2c10.0143831 L98.4147772%2c10.0143831 L97.4088603%2c9.72089103 C97.2436203%2c9.67364638 97.079567%2c9.62723298 96.9166713%2c9.58164468 L96.9166713%2c9.58164468 L95.952954%2c9.31796692 L95.015613%2c9.07379649 C94.707406%2c8.99562479 94.4033608%2c8.92065513 94.1032433%2c8.84883834 L94.1032433%2c8.84883834 L93.2144396%2c8.64279741 C93.0681914%2c8.61001729 92.9228666%2c8.5780131 92.7784358%2c8.54677869 L92.7784358%2c8.54677869 L91.9223463%2c8.36856033 L91.0863095%2c8.20852154 C87.3671555%2c7.52880835 84.2144234%2c7.39233667 81.051877%2c7.67811215 C79.8019765%2c7.79105624 78.528074%2c7.96847871 77.1154389%2c8.22503026 L77.1154389%2c8.22503026 L76.1518702%2c8.40794824 C75.3296704%2c8.57041687 74.4567828%2c8.75831291 73.513535%2c8.97414848 L73.513535%2c8.97414848 L72.8790919%2c9.12279443 L65.2911483%2c10.9792827 L63.7370232%2c11.3572076 C56.4508819%2c13.0110338 47.3019809%2c12.1699349 36.2838633%2c8.84226619 L36.2838633%2c8.84226619 L35.0519355%2c8.46229285 C33.6057113%2c8.00705335 32.128073%2c7.51003513 30.6190067%2c6.97125639 L30.6190067%2c6.97125639 L29.3178242%2c6.4992194 C28.0089444%2c6.01695619 26.6769717%2c5.5040156 25.3218971%2c4.9604091 L25.3218971%2c4.9604091 L23.9591215%2c4.40658105 L22.5809428%2c3.8323116 C22.3499626%2c3.73489671 22.1183405%2c3.63663021 21.8860766%2c3.53751215 L21.8860766%2c3.53751215 L20.4847893%2c2.93258537 C20.0151257%2c2.72753714 19.542894%2c2.51908306 19.068094%2c2.30722357 L19.068094%2c2.30722357 L17.6359886%2c1.66142929 L16.3000876%2c1.04711765 Z M148.867963%2c2.44008145 L158.007201%2c3.94160589 L161.54151%2c13.1268482 L152.558036%2c22.1103224 L151.460193%2c22.4691129 L150.519943%2c22.781711 L149.190894%2c23.2334863 L147.959536%2c23.6646576 L147.192959%2c23.9406263 L146.469884%2c24.2073893 L145.790346%2c24.4649273 L144.85274%2c24.8338951 C144.754012%2c24.8737335 144.657102%2c24.9131856 144.562009%2c24.9522509 L144.562009%2c24.9522509 L144.013279%2c25.1819979 L143.50822%2c25.4024425 L143.046863%2c25.6135655 C142.973614%2c25.6479748 142.902188%2c25.6819949 142.832585%2c25.7156253 L142.832585%2c25.7156253 L142.436847%2c25.9127296 L140.954513%2c26.7016759 L141.564942%2c25.3595953 L141.765103%2c24.9032154 C141.798504%2c24.8243443 141.831925%2c24.7440696 141.865366%2c24.6623913 L141.865366%2c24.6623913 L142.066254%2c24.155482 L142.26762%2c23.6149008 L142.469458%2c23.040659 L142.671762%2c22.4327683 L142.874525%2c21.79124 C142.908357%2c21.6815161 142.942208%2c21.5703912 142.976078%2c21.4578654 L142.976078%2c21.4578654 L143.179521%2c20.7659023 L143.383409%2c20.0403305 L143.587736%2c19.2811612 L143.792498%2c18.4884061 L144.10044%2c17.236325 L144.30626%2c16.3596554 L144.512493%2c15.44944 L144.719134%2c14.5056905 L144.926176%2c13.5284181 L145.237478%2c11.9996796 L145.445498%2c10.9386505 L145.75824%2c9.28433073 L145.967202%2c8.13961673 L146.176529%2c6.96144884 L146.491194%2c5.13149603 L146.740475%2c3.63236896 L148.867963%2c2.44008145 Z M14.959609%2c2.00133534 L15.4641155%2c2.54451402 L16.1195361%2c3.26092924 C16.2262623%2c3.3787092 16.3317334%2c3.49567875 16.4359495%2c3.61183916 L16.4359495%2c3.61183916 L17.0461877%2c4.29910237 L17.6263143%2c4.96700831 C17.8146722%2c5.18642429 17.9980128%2c5.40262439 18.1763376%2c5.61561891 L18.1763376%2c5.61561891 L18.6962654%2c6.24499611 L19.1861058%2c6.85520183 C19.265239%2c6.9553086 19.343119%2c7.05461914 19.4197458%2c7.15313474 L19.4197458%2c7.15313474 L19.8644702%2c7.73469936 L20.2791274%2c8.29724733 C21.8110279%2c10.4173117 22.6803729%2c12.1195824 22.8892005%2c13.419757 L22.8892005%2c13.419757 L23.0392374%2c14.3757947 L23.3032715%2c16.1346508 L23.8473209%2c19.9325075 L24.7095688%2c26.1967468 L11.2441988%2c21.0553436 L11.0689986%2c20.9417887 L2.17261026%2c12.0454003 L5.64756884%2c2.7788441 L14.959609%2c2.00133534 Z M14.5570876%2c3.03711765 L6.36108762%2c3.72211765 L3.33408762%2c11.7921176 L11.7020876%2c20.1601176 L23.4910876%2c24.6601176 L22.8575166%2c20.0749927 L22.2674174%2c15.9650487 L21.9018548%2c13.5783396 C21.764832%2c12.7252269 21.2725509%2c11.6268988 20.4258345%2c10.289694 L20.4258345%2c10.289694 L20.1122777%2c9.80783089 C19.9481421%2c9.5619503 19.7729718%2c9.30865386 19.5867712%2c9.04797641 L19.5867712%2c9.04797641 L19.1996644%2c8.51679049 L18.7831517%2c7.96598381 L18.337241%2c7.39561829 C18.2604732%2c7.29893091 18.1824808%2c7.20143116 18.103264%2c7.10312033 L18.103264%2c7.10312033 L17.6132716%2c6.50353268 C17.5291579%2c6.40198268 17.44382%2c6.29962419 17.3572583%2c6.19645848 L17.3572583%2c6.19645848 L16.8232022%2c5.56778804 C16.7317455%2c5.46139865 16.6390652%2c5.35420463 16.5451615%2c5.24620728 L16.5451615%2c5.24620728 L15.9670599%2c4.58859338 L15.3596046%2c3.91176127 L14.5570876%2c3.03711765 Z M149.050088%2c3.48311765 L147.649088%2c4.26811765 L147.471102%2c5.33439597 L147.249249%2c6.63115678 L146.917124%2c8.50705367 L146.696134%2c9.71150802 L146.365272%2c11.4490073 L146.145103%2c12.5612379 L145.92525%2c13.6366022 L145.705707%2c14.6751134 L145.486467%2c15.6767848 L145.158159%2c17.1102461 L144.939647%2c18.0198758 L144.721414%2c18.892712 L144.503453%2c19.728768 L144.285758%2c20.5280569 L144.068321%2c21.290592 L143.851137%2c22.0163866 L143.634199%2c22.7054538 C143.598062%2c22.8172385 143.561936%2c22.9274934 143.525819%2c23.0362189 L143.525819%2c23.0362189 L143.309236%2c23.67022 L143.092882%2c24.2675269 L142.989088%2c24.5391176 L143.075049%2c24.5008834 L143.591542%2c24.2749182 L144.151288%2c24.0400318 L145.072081%2c23.6709326 L146.090383%2c23.2816519 L146.823478%2c23.0108872 L147.599995%2c22.7311047 L148.419967%2c22.442285 L149.731475%2c21.9920683 L150.660231%2c21.680571 L152.020088%2c21.2331176 L160.374088%2c12.8791176 L157.279088%2c4.83511765 L149.050088%2c3.48311765 Z'%3e%3c/path%3e %3c/g%3e %3cg transform='translate(94.628518%2c 65.313009)' id='%e6%8a%a4%e7%9b%ae%e9%95%9c'%3e %3cpath fill='%23F9E2DC' fill-opacity='0.1' d='M6.8513582%2c6.4665267 C6.8513582%2c6.4665267 64.1733396%2c-6.42821014 115.42721%2c7.4417589 C115.42721%2c7.4417589 123.229067%2c11.1259694 120.628448%2c17.1940809 C120.628448%2c17.1940809 117.91947%2c37.673957 107.300275%2c44.2838642 C107.300275%2c44.2838642 86.6036802%2c62.3798394 70.3498102%2c38.3241118 C70.3498102%2c38.3241118 65.0402127%2c29.9804586 58.1052282%2c36.5903657 C58.1052282%2c36.5903657 40.6594077%2c63.5717899 14.6532158%2c42.2250406 C14.6532158%2c42.2250406 2.62535201%2c28.2467125 0.99996501%2c15.4603348 C0.99996501%2c15.4603348 0.99996501%2c7.65847717 6.8513582%2c6.4665267 L6.8513582%2c6.4665267 Z'%3e%3c/path%3e %3cpath fill='black' id='%e6%8a%a4%e7%9b%ae%e9%95%9c%e5%a4%87%e4%bb%bd' d='M41.8474189%2c0.755475563 C33.2234068%2c1.3750976 25.0975571%2c2.32939586 17.6798126%2c3.48641561 L15.7175794%2c3.79987488 L14.2967063%2c4.03650178 L12.9356906%2c4.27133359 L11.6356467%2c4.50367147 L10.3976887%2c4.73281656 C10.1965981%2c4.77070252 9.99814085%2c4.80842633 9.80234013%2c4.84597342 L8.51954116%2c5.09698965 L7.58217169%2c5.28787278 L6.63188989%2c5.49090707 C3.78072419%2c6.0714895 1.90882648%2c8.04475825 0.867924024%2c10.8562964 C0.507457212%2c11.8299382 0.269964793%2c12.8463338 0.130495192%2c13.8572763 C0.0794880755%2c14.2270004 0.0458211043%2c14.5612346 0.025432461%2c14.8507875 L0.00430051498%2c15.250457 L1.42108547e-14%2c15.4519694 L0.00794796588%2c15.5864386 C0.137964614%2c16.6092362 0.333991761%2c17.6558039 0.593005372%2c18.7245235 C1.69739897%2c23.2813772 3.90173832%2c28.114594 6.88120201%2c33.0247377 C8.41310341%2c35.5493048 10.0531627%2c37.9333974 11.6936297%2c40.1055507 L12.2542881%2c40.839377 L12.7848976%2c41.5176294 L13.282464%2c42.1382996 L13.6973888%2c42.6431436 L13.8952049%2c42.8772825 L14.0187511%2c42.9979925 C25.3064439%2c52.263307 35.99106%2c53.5058956 45.6418163%2c48.786919 C49.0943448%2c47.0987195 52.1909955%2c44.7430378 54.9092302%2c41.9851713 L55.254847%2c41.6303929 C56.7348927%2c40.0931561 57.8837993%2c38.6650903 58.683745%2c37.5176625 L58.872482%2c37.2409911 L58.7951657%2c37.3142346 C61.3724433%2c34.8577669 63.7278416%2c34.5207638 65.9952467%2c35.6650902 C66.8453307%2c36.0941153 67.6407146%2c36.7162828 68.359258%2c37.4596091 C68.772565%2c37.8871714 69.1078091%2c38.2975869 69.3549934%2c38.6420184 L69.5061487%2c38.8609873 C76.4128704%2c49.08361 84.6741925%2c52.8399716 93.5185122%2c51.5867863 C96.7419182%2c51.1300496 99.8548844%2c50.0243647 102.784043%2c48.4667874 C104.764307%2c47.4137834 106.405493%2c46.2974491 107.632555%2c45.3075063 L107.899482%2c45.0869911 L107.828715%2c45.1328344 C111.892843%2c42.603122 115.089757%2c38.077949 117.56052%2c32.1381825 C118.909506%2c28.8951937 119.957806%2c25.4296464 120.743656%2c21.9653115 L120.966599%2c20.9482337 C121.036717%2c20.6166623 121.102673%2c20.2927647 121.16457%2c19.9771989 L121.33819%2c19.0561549 L121.500519%2c18.1123722 L121.600482%2c17.4569911 L121.547593%2c17.5880002 C122.811841%2c14.6380872 122.070732%2c11.9221072 119.965687%2c9.60701857 C119.234256%2c8.80260491 118.378977%2c8.09332787 117.460944%2c7.47690105 C116.948017%2c7.13248868 116.482309%2c6.86036763 116.101866%2c6.66200308 L115.865154%2c6.54275696 L115.688427%2c6.47647891 C93.1420718%2c0.37513965 67.8718859%2c-1.11434244 41.8474189%2c0.755475563 Z M71.473081%2c38.1950869 L71.130029%2c37.6912545 C70.8124139%2c37.2224684 70.3664271%2c36.6583891 69.7972399%2c36.0695704 C68.9339219%2c35.176476 67.966292%2c34.4195738 66.8963604%2c33.8795948 C63.8771869%2c32.3558617 60.607801%2c32.8236353 57.4152906%2c35.8664968 C57.3592657%2c35.9198955 57.3096295%2c35.9796178 57.2621538%2c36.0524835 L57.0828416%2c36.3163565 L56.8339037%2c36.6660836 C56.7887206%2c36.728233 56.741701%2c36.7922634 56.6928605%2c36.8581002 L56.3780907%2c37.2741992 C56.2659665%2c37.419726 56.1466828%2c37.5718807 56.0203636%2c37.730066 C55.2782%2c38.6594524 54.4315388%2c39.6207065 53.4848189%2c40.5812295 C50.9147673%2c43.1887524 47.9946255%2c45.4101605 44.7632714%2c46.9902112 L44.41868%2c47.1557649 C35.6778259%2c51.2806099 26.0856389%2c50.1390453 15.6981268%2c41.785581 L15.356482%2c41.5079911 L14.8350918%2c40.8776066 L14.3519357%2c40.2748932 C14.2685757%2c40.1696257 14.1838404%2c40.0619789 14.0977925%2c39.9519958 L13.566257%2c39.2644023 C13.47521%2c39.1452446 13.3829758%2c39.023836 13.2896172%2c38.9002193 C11.6876958%2c36.7791043 10.0853667%2c34.4498588 8.59103883%2c31.9872128 C5.70935175%2c27.2382045 3.58585974%2c22.5822529 2.5367347%2c18.2534436 L2.3987174%2c17.6573615 C2.26788947%2c17.0642733 2.15868768%2c16.4802164 2.07163387%2c15.905636 L2.00048204%2c15.3979911 L2.01042172%2c15.1513182 C2.01338587%2c15.0964742 2.01701298%2c15.0387128 2.02136003%2c14.9782001 L2.05653764%2c14.5834362 C2.07144726%2c14.4417281 2.08969263%2c14.2903426 2.11172969%2c14.1306074 C2.23259618%2c13.2545091 2.43771907%2c12.3766453 2.74351017%2c11.5506858 C3.53227042%2c9.42019842 4.83706719%2c7.99278098 6.80190927%2c7.50275704 L7.71371301%2c7.30363225 L9.25151324%2c6.99064392 L10.76911%2c6.69802561 L11.9952202%2c6.47108293 L13.2833161%2c6.24089131 L14.6322794%2c6.00814864 L16.0409919%2c5.77355279 C16.2806943%2c5.73433782 16.5228396%2c5.69507472 16.7674046%2c5.65577801 C24.4582403%2c4.42001445 32.9487948%2c3.3999836 41.9907464%2c2.75033326 L43.3028898%2c2.6588873 C68.2207563%2c0.976199 92.3951935%2c2.42272305 114.029689%2c8.10410264 L115.071482%2c8.3819911 L115.349947%2c8.52773098 L115.716409%2c8.73780909 C115.9115%2c8.85426252 116.123177%2c8.98767499 116.346034%2c9.13731522 C117.139077%2c9.66981589 117.873155%2c10.278582 118.48594%2c10.952511 C120.106771%2c12.7350694 120.629882%2c14.6521429 119.709303%2c16.8001616 C119.67335%2c16.8840509 119.649052%2c16.9724672 119.637083%2c17.062948 L119.561131%2c17.5743765 L119.48762%2c18.0264271 L119.445272%2c18.2750545 C119.27613%2c19.2538693 119.060163%2c20.3460302 118.793208%2c21.5228718 C118.030871%2c24.8835531 117.014659%2c28.2430221 115.71391%2c31.3700483 C113.388412%2c36.9605934 110.417768%2c41.1654858 106.771834%2c43.4348939 L106.623124%2c43.5473782 L106.372328%2c43.7545105 C105.242536%2c44.6659585 103.70432%2c45.7122533 101.845045%2c46.7009213 C99.108181%2c48.1562462 96.210939%2c49.1853087 93.2379272%2c49.6065661 C85.2802499%2c50.7341197 77.873376%2c47.4381761 71.473081%2c38.1950869 Z'%3e%3c/path%3e %3c/g%3e %3cg transform='translate(78.499286%2c 152.112348) rotate(5.000000) translate(-78.499286%2c -152.112348) translate(45.999286%2c 98.494696)' id='%e5%b7%a6%e6%89%8b'%3e %3cpath fill='white' id='%e5%bd%a2%e7%8a%b6-515' d='M23.1307447%2c26.7058925 C23.1307447%2c26.7058925 26.8149552%2c14.0278739 27.3567509%2c11.2105365 C27.3567509%2c11.2105365 28.9821379%2c3.40867888 35.0502493%2c2.75852408 C35.0502493%2c2.75852408 41.9852339%2c-1.90091864 43.3939026%2c3.95047455 C43.3939026%2c3.95047455 47.5115496%2c5.14242501 46.969754%2c8.82663554 C46.969754%2c8.82663554 50.6539645%2c9.91022687 50.0038097%2c13.5944374 C50.0038097%2c13.5944374 55.8336818%2c20.3854155 43.0473041%2c22.3358799 C43.3977309%2c21.9378589 43.3326652%2c21.8052625 42.8521069%2c21.9380906 C42.8521069%2c21.9380906 42.6353887%2c27.7894838 33.8582989%2c27.897843 C33.8582989%2c27.897843 33.4248623%2c34.1826727 30.2824475%2c36.7832919 L23.1307447%2c26.7058925 Z'%3e%3c/path%3e %3cpath fill='black' id='%e5%bd%a2%e7%8a%b6-515%e5%a4%87%e4%bb%bd' d='M39.220645%2c0.0519037966 C38.2497666%2c0.174582726 37.2422425%2c0.503098239 36.2309813%2c0.972292245 L35.9823029%2c1.09028778 C35.4969912%2c1.32573084 35.0853261%2c1.55609306 34.7720809%2c1.74910618 L34.7%2c1.79429763 L34.9437162%2c1.76421493 C32.0360752%2c2.07574789 29.8240225%2c3.80868346 28.2286549%2c6.44533905 C27.6259535%2c7.44142037 27.1528176%2c8.50136763 26.7919986%2c9.56079371 L26.6443774%2c10.0135339 C26.6002831%2c10.1553179 26.5612295%2c10.2876344 26.5269996%2c10.4094691 L26.4385642%2c10.7425138 L26.3777705%2c11.0065822 L26.2975583%2c11.3923655 L26.1866257%2c11.8769015 L25.9362062%2c12.8946854 L25.5333203%2c14.4435196 L24.9323076%2c16.6676888 L24.2631641%2c19.0828645 L23.36318%2c22.2723164 L22.1704694%2c26.4268381 L22.0356707%2c26.8907043 L30.0902722%2c38.2403701 L30.9200152%2c37.5536862 C32.1314015%2c36.5511596 33.0399246%2c35.0682738 33.7103425%2c33.2374908 C34.1338547%2c32.0809599 34.4377527%2c30.852103 34.6439994%2c29.6247437 L34.7394759%2c29.0052672 L34.758%2c28.8662976 L35.0606568%2c28.8473343 C38.513799%2c28.5913307 40.9193123%2c27.4025757 42.3973134%2c25.5404103 L42.5843624%2c25.2951223 C43.0630262%2c24.6412389 43.3822402%2c23.9911118 43.5808819%2c23.3930521 L43.623%2c23.2552976 L43.9608667%2c23.1987977 C48.9296937%2c22.3170948 51.5779751%2c20.5566684 52.1976715%2c18.0632565 L52.2535509%2c17.8097357 C52.5617637%2c16.2082756 52.0106925%2c14.6885786 51.1034557%2c13.3932752 L51.05%2c13.3192976 L51.0584747%2c13.2492086 C51.2297319%2c11.382017 50.4765709%2c9.91038531 49.1390165%2c8.87053778 L48.9071394%2c8.6982387 C48.6759914%2c8.53419415 48.4477982%2c8.3946689 48.2294642%2c8.27746442 L48.019%2c8.16929763 L48.0145514%2c7.93257621 C47.9541835%2c6.59667375 47.3683925%2c5.46358477 46.3978082%2c4.5589768 L46.1345634%2c4.32656096 C45.5998903%2c3.87935005 45.0191295%2c3.53694369 44.4465194%2c3.28277933 L44.217%2c3.18529763 L44.1496436%2c2.98536611 C43.3280211%2c0.686402503 41.5225105%2c-0.238956925 39.220645%2c0.0519037966 Z M42.421679%2c4.18452838 L42.5576823%2c4.74946555 L43.1422837%2c4.91945956 L43.2262821%2c4.94799966 C43.8195626%2c5.15653384 44.4909366%2c5.51571171 45.0341957%2c6.0220424 C45.792342%2c6.72865304 46.1423844%2c7.57961269 45.9803948%2c8.68114155 L45.8539716%2c9.54081983 L46.7286543%2c9.79921058 L46.8578111%2c9.84774885 L47.0415348%2c9.92672534 C47.3391279%2c10.0621957 47.6373129%2c10.236366 47.9114829%2c10.4495125 C48.8205615%2c11.1562525 49.2536665%2c12.0910235 49.0190261%2c13.4206521 L48.9367795%2c13.8867164 L49.2571564%2c14.2604606 L49.355866%2c14.388671 C50.0709596%2c15.3524205 50.517639%2c16.5310251 50.2567187%2c17.5808646 L50.2203209%2c17.7117629 C49.7797735%2c19.1421612 47.9859752%2c20.3476477 44.3336876%2c21.092973 L43.924%2c21.1722976 L43.9163913%2c21.1650028 C43.6985139%2c20.9635626 43.4201993%2c20.8881152 43.134196%2c20.8882367 C42.9597582%2c20.8883108 42.7849305%2c20.9191619 42.5856926%2c20.974232 L41.8798944%2c21.1693174 L41.849034%2c21.9560893 L41.8278081%2c22.1131104 L41.805%2c22.2322976 L40.479489%2c23.7391481 L41.286%2c23.6152976 L41.1658928%2c23.8222516 C41.0656929%2c23.9829556 40.9542056%2c24.1415321 40.8307733%2c24.2970471 C39.5813423%2c25.8712321 37.3671441%2c26.8544477 33.8459541%2c26.8979192 L32.9240989%2c26.9093001 L32.857106%2c27.8758026 L32.8232403%2c28.2164273 C32.7871677%2c28.5401625 32.7373312%2c28.9024616 32.6716528%2c29.2933086 C32.4843854%2c30.407724 32.2091593%2c31.520642 31.8323018%2c32.5497675 L31.7098447%2c32.8718363 C31.3762692%2c33.7168679 30.9865639%2c34.4504251 30.5420965%2c35.0502797 L30.404%2c35.2272976 L24.225%2c26.5192976 L24.9632549%2c23.9543178 L25.9707831%2c20.4009767 L26.9605242%2c16.8333509 L27.3970164%2c15.2178571 L27.6940994%2c14.0907815 L27.997015%2c12.8990354 L28.1821457%2c12.1270792 L28.3142517%2c11.5233033 L28.3559475%2c11.3248352 L28.4125945%2c11.1016833 C28.4838152%2c10.8329366 28.5742421%2c10.5314015 28.6852093%2c10.2055829 C29.0024921%2c9.2739867 29.4181024%2c8.3429117 29.9397995%2c7.48070558 C31.2402043%2c5.3315336 32.954133%2c3.98883139 35.1567825%2c3.75283323 L35.402671%2c3.72648803 L35.7188053%2c3.51707897 L35.8919434%2c3.41124746 L36.0004455%2c3.3471186 C36.3270258%2c3.15621258 36.6886124%2c2.96474885 37.0727314%2c2.78652947 C37.9121632%2c2.39705901 38.7329494%2c2.12943166 39.4713687%2c2.03612597 C41.0444604%2c1.83735215 41.9927411%2c2.40278658 42.421679%2c4.18452838 Z'%3e%3c/path%3e %3cpath fill='url(%23linearGradient-3)' id='%e6%a4%ad%e5%9c%86%e5%bd%a2' d='M32.5003041%2c106.284809 C49.9135919%2c106.284809 64.0298507%2c88.3616224 64.0298507%2c66.252251 C64.0298507%2c49.7755639 50.1116083%2c34.1926386 38.9098748%2c28.0513131 C35.0804747%2c25.951853 28.342224%2c12.1857993 23.9059355%2c12.1857993 C6.4926477%2c12.1857993 0.970149254%2c44.1428797 0.970149254%2c66.252251 C0.970149254%2c88.3616224 15.0870163%2c106.284809 32.5003041%2c106.284809 Z'%3e%3c/path%3e %3cpath fill='black' id='%e6%a4%ad%e5%9c%86%e5%bd%a2%e5%a4%87%e4%bb%bd' d='M23.9066492%2c11.2353043 C16.4166765%2c11.2353043 10.6684581%2c16.6555006 6.61798893%2c26.2641234 L6.27496259%2c27.0979483 C6.21848415%2c27.2386191 6.16235193%2c27.3801375 6.10656581%2c27.5224999 L5.77600118%2c28.3867737 C5.5039899%2c29.1153941 5.24062456%2c29.8649351 4.98588914%2c30.6349478 C1.69586986%2c40.5799983 0.000713733326%2c53.6831739 0.000713733326%2c66.252251 C0.000713733326%2c88.8404756 14.4888227%2c107.235304 32.5010179%2c107.235304 C50.513104%2c107.235304 65.0007137%2c88.8406192 65.0007137%2c66.252251 C65.0007137%2c57.2157597 60.6929737%2c47.6662894 54.2982888%2c39.8560471 L53.651946%2c39.0809037 C49.624282%2c34.3376324 44.8311498%2c30.2842995 39.7933361%2c27.4490582 L39.3048968%2c27.1769263 L39.1441849%2c27.0776239 L38.9801814%2c26.9647997 L38.8118613%2c26.8373444 C38.7833913%2c26.814821 38.7546988%2c26.7916417 38.7257623%2c26.7677834 L38.5490456%2c26.6163012 L38.36545%2c26.4474141 L38.1739504%2c26.2600129 L37.9735219%2c26.0529879 L37.6538953%2c25.7032292 L37.3084132%2c25.3030766 L37.0620194%2c25.0064625 L36.6657575%2c24.5139992 L36.2344153%2c23.961157 L35.5987441%2c23.1236395 L34.6953144%2c21.9029129 L32.6693419%2c19.1127311 L31.7284926%2c17.84148 L31.2833687%2c17.2526974 L30.64503%2c16.4267931 L30.0394772%2c15.668243 L29.6526395%2c15.199201 L29.2783479%2c14.758953 C29.2169664%2c14.6879524 29.156074%2c14.6181326 29.0956536%2c14.549484 L28.7386619%2c14.1515709 C28.5628637%2c13.9595656 28.3910107%2c13.77793 28.2226471%2c13.6064074 L27.8904376%2c13.27677 C26.4152163%2c11.853395 25.1980316%2c11.2353043 23.9066492%2c11.2353043 Z M23.9234386%2c13.2353043 C24.6607181%2c13.2353043 25.5512428%2c13.7715901 26.7098599%2c14.9250789 L27.0182648%2c15.240043 L27.3392859%2c15.5833281 C27.3938659%2c15.64292 27.4489904%2c15.7037053 27.504669%2c15.7656907 L27.8454636%2c16.1520555 L28.2000071%2c16.5675394 L28.5687524%2c17.0124614 L28.9521526%2c17.4871407 L29.5557221%2c18.2556532 L29.977742%2c18.8061227 L30.6413647%2c19.6898167 L31.104836%2c20.3180715 L33.1685431%2c23.1595606 L33.7545591%2c23.9550857 L34.4621359%2c24.898309 L34.943259%2c25.5235908 L35.3868515%2c26.0835893 L35.6639292%2c26.4229281 L35.9276259%2c26.7366647 L36.1792615%2c27.026164 L36.4201557%2c27.2927911 L36.7642438%2c27.6528322 L36.9840584%2c27.8682505 L37.1977506%2c28.0655742 L37.4066403%2c28.2461681 L37.6120472%2c28.4113973 L37.815291%2c28.5626268 L38.0176915%2c28.7012216 L38.2205684%2c28.8285467 L38.4252414%2c28.9459671 C51.4838411%2c36.1039226 63.0007137%2c51.9678995 63.0007137%2c66.2371803 C63.0007137%2c87.8210979 49.2826579%2c105.235304 32.5010173%2c105.235304 C15.7192539%2c105.235304 2.00071373%2c87.8209473 2.00071373%2c66.2371803 C2.00071373%2c37.0892918 9.89361982%2c13.2353043 23.9234386%2c13.2353043 Z'%3e%3c/path%3e %3c/g%3e %3cg transform='translate(228.499286%2c 152.112348) scale(-1%2c 1) rotate(5.000000) translate(-228.499286%2c -152.112348) translate(195.999286%2c 98.494696)' id='%e5%8f%b3%e6%89%8b'%3e %3cpath fill='white' id='%e5%bd%a2%e7%8a%b6-515' d='M23.1307447%2c26.7058925 C23.1307447%2c26.7058925 26.8149552%2c14.0278739 27.3567509%2c11.2105365 C27.3567509%2c11.2105365 28.9821379%2c3.40867888 35.0502493%2c2.75852408 C35.0502493%2c2.75852408 41.9852339%2c-1.90091864 43.3939026%2c3.95047455 C43.3939026%2c3.95047455 47.5115496%2c5.14242501 46.969754%2c8.82663554 C46.969754%2c8.82663554 50.6539645%2c9.91022687 50.0038097%2c13.5944374 C50.0038097%2c13.5944374 55.8336818%2c20.3854155 43.0473041%2c22.3358799 C43.3977309%2c21.9378589 43.3326652%2c21.8052625 42.8521069%2c21.9380906 C42.8521069%2c21.9380906 42.6353887%2c27.7894838 33.8582989%2c27.897843 C33.8582989%2c27.897843 33.4248623%2c34.1826727 30.2824475%2c36.7832919 L23.1307447%2c26.7058925 Z'%3e%3c/path%3e %3cpath fill='black' id='%e5%bd%a2%e7%8a%b6-515%e5%a4%87%e4%bb%bd' d='M39.220645%2c0.0519037966 C38.2497666%2c0.174582726 37.2422425%2c0.503098239 36.2309813%2c0.972292245 L35.9823029%2c1.09028778 C35.4969912%2c1.32573084 35.0853261%2c1.55609306 34.7720809%2c1.74910618 L34.7%2c1.79429763 L34.9437162%2c1.76421493 C32.0360752%2c2.07574789 29.8240225%2c3.80868346 28.2286549%2c6.44533905 C27.6259535%2c7.44142037 27.1528176%2c8.50136763 26.7919986%2c9.56079371 L26.6443774%2c10.0135339 C26.6002831%2c10.1553179 26.5612295%2c10.2876344 26.5269996%2c10.4094691 L26.4385642%2c10.7425138 L26.3777705%2c11.0065822 L26.2975583%2c11.3923655 L26.1866257%2c11.8769015 L25.9362062%2c12.8946854 L25.5333203%2c14.4435196 L24.9323076%2c16.6676888 L24.2631641%2c19.0828645 L23.36318%2c22.2723164 L22.1704694%2c26.4268381 L22.0356707%2c26.8907043 L30.0902722%2c38.2403701 L30.9200152%2c37.5536862 C32.1314015%2c36.5511596 33.0399246%2c35.0682738 33.7103425%2c33.2374908 C34.1338547%2c32.0809599 34.4377527%2c30.852103 34.6439994%2c29.6247437 L34.7394759%2c29.0052672 L34.758%2c28.8662976 L35.0606568%2c28.8473343 C38.513799%2c28.5913307 40.9193123%2c27.4025757 42.3973134%2c25.5404103 L42.5843624%2c25.2951223 C43.0630262%2c24.6412389 43.3822402%2c23.9911118 43.5808819%2c23.3930521 L43.623%2c23.2552976 L43.9608667%2c23.1987977 C48.9296937%2c22.3170948 51.5779751%2c20.5566684 52.1976715%2c18.0632565 L52.2535509%2c17.8097357 C52.5617637%2c16.2082756 52.0106925%2c14.6885786 51.1034557%2c13.3932752 L51.05%2c13.3192976 L51.0584747%2c13.2492086 C51.2297319%2c11.382017 50.4765709%2c9.91038531 49.1390165%2c8.87053778 L48.9071394%2c8.6982387 C48.6759914%2c8.53419415 48.4477982%2c8.3946689 48.2294642%2c8.27746442 L48.019%2c8.16929763 L48.0145514%2c7.93257621 C47.9541835%2c6.59667375 47.3683925%2c5.46358477 46.3978082%2c4.5589768 L46.1345634%2c4.32656096 C45.5998903%2c3.87935005 45.0191295%2c3.53694369 44.4465194%2c3.28277933 L44.217%2c3.18529763 L44.1496436%2c2.98536611 C43.3280211%2c0.686402503 41.5225105%2c-0.238956925 39.220645%2c0.0519037966 Z M42.421679%2c4.18452838 L42.5576823%2c4.74946555 L43.1422837%2c4.91945956 L43.2262821%2c4.94799966 C43.8195626%2c5.15653384 44.4909366%2c5.51571171 45.0341957%2c6.0220424 C45.792342%2c6.72865304 46.1423844%2c7.57961269 45.9803948%2c8.68114155 L45.8539716%2c9.54081983 L46.7286543%2c9.79921058 L46.8578111%2c9.84774885 L47.0415348%2c9.92672534 C47.3391279%2c10.0621957 47.6373129%2c10.236366 47.9114829%2c10.4495125 C48.8205615%2c11.1562525 49.2536665%2c12.0910235 49.0190261%2c13.4206521 L48.9367795%2c13.8867164 L49.2571564%2c14.2604606 L49.355866%2c14.388671 C50.0709596%2c15.3524205 50.517639%2c16.5310251 50.2567187%2c17.5808646 L50.2203209%2c17.7117629 C49.7797735%2c19.1421612 47.9859752%2c20.3476477 44.3336876%2c21.092973 L43.924%2c21.1722976 L43.9163913%2c21.1650028 C43.6985139%2c20.9635626 43.4201993%2c20.8881152 43.134196%2c20.8882367 C42.9597582%2c20.8883108 42.7849305%2c20.9191619 42.5856926%2c20.974232 L41.8798944%2c21.1693174 L41.849034%2c21.9560893 L41.8278081%2c22.1131104 L41.805%2c22.2322976 L40.479489%2c23.7391481 L41.286%2c23.6152976 L41.1658928%2c23.8222516 C41.0656929%2c23.9829556 40.9542056%2c24.1415321 40.8307733%2c24.2970471 C39.5813423%2c25.8712321 37.3671441%2c26.8544477 33.8459541%2c26.8979192 L32.9240989%2c26.9093001 L32.857106%2c27.8758026 L32.8232403%2c28.2164273 C32.7871677%2c28.5401625 32.7373312%2c28.9024616 32.6716528%2c29.2933086 C32.4843854%2c30.407724 32.2091593%2c31.520642 31.8323018%2c32.5497675 L31.7098447%2c32.8718363 C31.3762692%2c33.7168679 30.9865639%2c34.4504251 30.5420965%2c35.0502797 L30.404%2c35.2272976 L24.225%2c26.5192976 L24.9632549%2c23.9543178 L25.9707831%2c20.4009767 L26.9605242%2c16.8333509 L27.3970164%2c15.2178571 L27.6940994%2c14.0907815 L27.997015%2c12.8990354 L28.1821457%2c12.1270792 L28.3142517%2c11.5233033 L28.3559475%2c11.3248352 L28.4125945%2c11.1016833 C28.4838152%2c10.8329366 28.5742421%2c10.5314015 28.6852093%2c10.2055829 C29.0024921%2c9.2739867 29.4181024%2c8.3429117 29.9397995%2c7.48070558 C31.2402043%2c5.3315336 32.954133%2c3.98883139 35.1567825%2c3.75283323 L35.402671%2c3.72648803 L35.7188053%2c3.51707897 L35.8919434%2c3.41124746 L36.0004455%2c3.3471186 C36.3270258%2c3.15621258 36.6886124%2c2.96474885 37.0727314%2c2.78652947 C37.9121632%2c2.39705901 38.7329494%2c2.12943166 39.4713687%2c2.03612597 C41.0444604%2c1.83735215 41.9927411%2c2.40278658 42.421679%2c4.18452838 Z'%3e%3c/path%3e %3cpath fill='url(%23linearGradient-3)' id='%e6%a4%ad%e5%9c%86%e5%bd%a2' d='M32.5003041%2c106.284809 C49.9135919%2c106.284809 64.0298507%2c88.3616224 64.0298507%2c66.252251 C64.0298507%2c49.7755639 50.1116083%2c34.1926386 38.9098748%2c28.0513131 C35.0804747%2c25.951853 28.342224%2c12.1857993 23.9059355%2c12.1857993 C6.4926477%2c12.1857993 0.970149254%2c44.1428797 0.970149254%2c66.252251 C0.970149254%2c88.3616224 15.0870163%2c106.284809 32.5003041%2c106.284809 Z'%3e%3c/path%3e %3cpath fill='black' id='%e6%a4%ad%e5%9c%86%e5%bd%a2%e5%a4%87%e4%bb%bd' d='M23.9066492%2c11.2353043 C16.4166765%2c11.2353043 10.6684581%2c16.6555006 6.61798893%2c26.2641234 L6.27496259%2c27.0979483 C6.21848415%2c27.2386191 6.16235193%2c27.3801375 6.10656581%2c27.5224999 L5.77600118%2c28.3867737 C5.5039899%2c29.1153941 5.24062456%2c29.8649351 4.98588914%2c30.6349478 C1.69586986%2c40.5799983 0.000713733326%2c53.6831739 0.000713733326%2c66.252251 C0.000713733326%2c88.8404756 14.4888227%2c107.235304 32.5010179%2c107.235304 C50.513104%2c107.235304 65.0007137%2c88.8406192 65.0007137%2c66.252251 C65.0007137%2c57.2157597 60.6929737%2c47.6662894 54.2982888%2c39.8560471 L53.651946%2c39.0809037 C49.624282%2c34.3376324 44.8311498%2c30.2842995 39.7933361%2c27.4490582 L39.3048968%2c27.1769263 L39.1441849%2c27.0776239 L38.9801814%2c26.9647997 L38.8118613%2c26.8373444 C38.7833913%2c26.814821 38.7546988%2c26.7916417 38.7257623%2c26.7677834 L38.5490456%2c26.6163012 L38.36545%2c26.4474141 L38.1739504%2c26.2600129 L37.9735219%2c26.0529879 L37.6538953%2c25.7032292 L37.3084132%2c25.3030766 L37.0620194%2c25.0064625 L36.6657575%2c24.5139992 L36.2344153%2c23.961157 L35.5987441%2c23.1236395 L34.6953144%2c21.9029129 L32.6693419%2c19.1127311 L31.7284926%2c17.84148 L31.2833687%2c17.2526974 L30.64503%2c16.4267931 L30.0394772%2c15.668243 L29.6526395%2c15.199201 L29.2783479%2c14.758953 C29.2169664%2c14.6879524 29.156074%2c14.6181326 29.0956536%2c14.549484 L28.7386619%2c14.1515709 C28.5628637%2c13.9595656 28.3910107%2c13.77793 28.2226471%2c13.6064074 L27.8904376%2c13.27677 C26.4152163%2c11.853395 25.1980316%2c11.2353043 23.9066492%2c11.2353043 Z M23.9234386%2c13.2353043 C24.6607181%2c13.2353043 25.5512428%2c13.7715901 26.7098599%2c14.9250789 L27.0182648%2c15.240043 L27.3392859%2c15.5833281 C27.3938659%2c15.64292 27.4489904%2c15.7037053 27.504669%2c15.7656907 L27.8454636%2c16.1520555 L28.2000071%2c16.5675394 L28.5687524%2c17.0124614 L28.9521526%2c17.4871407 L29.5557221%2c18.2556532 L29.977742%2c18.8061227 L30.6413647%2c19.6898167 L31.104836%2c20.3180715 L33.1685431%2c23.1595606 L33.7545591%2c23.9550857 L34.4621359%2c24.898309 L34.943259%2c25.5235908 L35.3868515%2c26.0835893 L35.6639292%2c26.4229281 L35.9276259%2c26.7366647 L36.1792615%2c27.026164 L36.4201557%2c27.2927911 L36.7642438%2c27.6528322 L36.9840584%2c27.8682505 L37.1977506%2c28.0655742 L37.4066403%2c28.2461681 L37.6120472%2c28.4113973 L37.815291%2c28.5626268 L38.0176915%2c28.7012216 L38.2205684%2c28.8285467 L38.4252414%2c28.9459671 C51.4838411%2c36.1039226 63.0007137%2c51.9678995 63.0007137%2c66.2371803 C63.0007137%2c87.8210979 49.2826579%2c105.235304 32.5010173%2c105.235304 C15.7192539%2c105.235304 2.00071373%2c87.8209473 2.00071373%2c66.2371803 C2.00071373%2c37.0892918 9.89361982%2c13.2353043 23.9234386%2c13.2353043 Z'%3e%3c/path%3e %3c/g%3e %3cg transform='translate(0.000000%2c 3.730000)' id='%e5%bd%a2%e7%8a%b6-'%3e %3cpolygon points='261.904532 81.5664044 270.561333 70.2781482 267.631532 84.7004044 273.669817 83.0980972 271.529532 90.7514044 283.590965 90.7516924 274.211532 97.9904044 283.497188 101.844992 270.5321 106.231845 269.891083 104.337354 277.820532 101.653404 270.25923 98.5159356 277.726532 92.7514044 268.893592 92.7516924 270.801532 85.9284044 265.031113 87.4601959 266.876532 78.3684044 259.905179 87.4607044 259.904532 82.0864044 258.397039 84.9760749 256.624025 84.0506448 261.905179 73.9325819' fill='black' id='%e8%b7%af%e5%be%84-3'%3e%3c/polygon%3e %3cpolygon points='22.904532 91.5664044 31.5613328 80.2781482 28.631532 94.7004044 34.6698173 93.0980972 32.529532 100.751404 44.5909649 100.751692 35.211532 107.990404 44.4971878 111.844992 31.5321005 116.231845 30.8910826 114.337354 38.820532 111.653404 31.2592301 108.515936 38.726532 102.751404 29.8935922 102.751692 31.801532 95.9284044 26.031113 97.4601959 27.876532 88.3684044 20.9051791 97.4607044 20.904532 92.0864044 19.3970391 94.9760749 17.624025 94.0506448 22.9051791 83.9325819' transform='translate(31.107495%2c 98.254996) scale(-1%2c 1) translate(-31.107495%2c -98.254996)' fill='black' id='%e8%b7%af%e5%be%84-3%e5%a4%87%e4%bb%bd'%3e%3c/polygon%3e %3cpath fill='%23F3D401' id='%e5%a4%9a%e8%be%b9%e5%bd%a2-3-%e6%8b%b7%e8%b4%9d-12' d='M1%2c175.139319 C3.88957688%2c173.044376 5.76780186%2c168.637771 6.63467492%2c161.919505 C7.50154799%2c168.637771 9.37977296%2c173.044376 12.2693498%2c175.139319 C9.37977296%2c177.234262 7.50154799%2c181.640867 6.63467492%2c188.359133 C5.76780186%2c181.640867 3.88957688%2c177.234262 1%2c175.139319 Z'%3e%3c/path%3e %3cpath fill='black' id='%e5%a4%9a%e8%be%b9%e5%bd%a2-3-%e6%8b%b7%e8%b4%9d-12%e5%a4%87%e4%bb%bd' d='M5.64289706%2c161.791533 C4.80786765%2c168.263011 3.03108274%2c172.431622 0.413032429%2c174.329708 C-0.137677476%2c174.728973 -0.137677476%2c175.549665 0.413032429%2c175.948929 C3.03108274%2c177.847016 4.80786765%2c182.015627 5.64289706%2c188.487104 C5.79292349%2c189.649809 7.47642635%2c189.649809 7.62645279%2c188.487104 C8.4614822%2c182.015627 10.2382671%2c177.847016 12.8563174%2c175.948929 C13.4070273%2c175.549665 13.4070273%2c174.728973 12.8563174%2c174.329708 C10.2382671%2c172.431622 8.4614822%2c168.263011 7.62645279%2c161.791533 C7.47642635%2c160.628828 5.79292349%2c160.628828 5.64289706%2c161.791533 Z M6.635%2c167.275148 L6.6802915%2c167.448494 C7.58779433%2c170.803517 8.88845892%2c173.33311 10.6034784%2c175.03045 L10.717%2c175.139148 L10.6034784%2c175.248188 C8.88845892%2c176.945528 7.58779433%2c179.475121 6.6802915%2c182.830144 L6.634%2c183.002148 L6.58905834%2c182.830144 C5.68155551%2c179.475121 4.38089092%2c176.945528 2.66587141%2c175.248188 L2.552%2c175.139148 L2.66587141%2c175.03045 C4.38089092%2c173.33311 5.68155551%2c170.803517 6.58905834%2c167.448494 L6.635%2c167.275148 Z'%3e%3c/path%3e %3cpath fill='%23F3D401' id='%e5%a4%9a%e8%be%b9%e5%bd%a2-3-%e6%8b%b7%e8%b4%9d-13' d='M17.5789474%2c145.448916 C21.1909185%2c142.992776 23.5386997%2c137.755418 24.622291%2c129.736842 C25.7781218%2c137.755418 28.1620227%2c142.992776 31.7739938%2c145.448916 C28.1620227%2c147.905057 25.7781218%2c153.178535 24.622291%2c161.26935 C23.5386997%2c153.178535 21.1909185%2c147.905057 17.5789474%2c145.448916 Z'%3e%3c/path%3e %3cpath fill='black' id='%e5%a4%9a%e8%be%b9%e5%bd%a2-3-%e6%8b%b7%e8%b4%9d-13%e5%a4%87%e4%bb%bd' d='M23.6312986%2c129.602924 C22.5820053%2c137.367695 20.3445061%2c142.359039 17.0166373%2c144.62199 C16.4330507%2c145.018829 16.4330507%2c145.879004 17.0166373%2c146.275843 C20.3433179%2c148.537986 22.5815977%2c153.565506 23.6311406%2c161.402093 C23.7853247%2c162.553335 25.4479767%2c162.560618 25.6122405%2c161.410771 C26.732175%2c153.57123 29.0065245%2c148.540093 32.3363038%2c146.275843 C32.9198905%2c145.879004 32.9198905%2c145.018829 32.3363038%2c144.62199 C29.0053216%2c142.356922 26.7317377%2c137.361927 25.6120614%2c129.594173 C25.4465522%2c128.445953 23.786655%2c128.453287 23.6312986%2c129.602924 Z M24.644%2c135.066148 L24.6846766%2c135.226714 C25.8764138%2c139.818173 27.6444987%2c143.191656 30.0166237%2c145.33487 L30.147%2c145.449148 L30.0163036%2c145.564423 C27.643643%2c147.713138 25.8757643%2c151.107529 24.6842646%2c155.735684 L24.644%2c155.894148 L24.6072889%2c155.742206 C23.4528999%2c151.111977 21.7054987%2c147.715444 19.3362949%2c145.565144 L19.205%2c145.448148 L19.3359795%2c145.334145 C21.6200616%2c143.265936 23.3266513%2c140.05324 24.48092%2c135.707644 L24.644%2c135.066148 Z'%3e%3c/path%3e %3cpath fill='%23F3D401' id='%e5%a4%9a%e8%be%b9%e5%bd%a2-3-%e6%8b%b7%e8%b4%9d-14' d='M271.309598%2c146.718266 C274.199174%2c144.623323 276.077399%2c140.216718 276.944272%2c133.498452 C277.811146%2c140.216718 279.68937%2c144.623323 282.578947%2c146.718266 C279.68937%2c148.813209 277.811146%2c153.219814 276.944272%2c159.93808 C276.077399%2c153.219814 274.199174%2c148.813209 271.309598%2c146.718266 Z'%3e%3c/path%3e %3cpath fill='black' id='%e5%a4%9a%e8%be%b9%e5%bd%a2-3-%e6%8b%b7%e8%b4%9d-14%e5%a4%87%e4%bb%bd' d='M275.952495%2c133.370481 C275.117465%2c139.841959 273.34068%2c144.010569 270.72263%2c145.908656 C270.17192%2c146.30792 270.17192%2c147.128612 270.72263%2c147.527877 C273.34068%2c149.425963 275.117465%2c153.594574 275.952495%2c160.066052 C276.102521%2c161.228757 277.786024%2c161.228757 277.93605%2c160.066052 C278.77108%2c153.594574 280.547865%2c149.425963 283.165915%2c147.527877 C283.716625%2c147.128612 283.716625%2c146.30792 283.165915%2c145.908656 C280.547865%2c144.010569 278.77108%2c139.841959 277.93605%2c133.370481 C277.786024%2c132.207776 276.102521%2c132.207776 275.952495%2c133.370481 Z M276.944%2c138.854148 L276.989889%2c139.027441 C277.897392%2c142.382464 279.198056%2c144.912057 280.913076%2c146.609397 L281.026%2c146.717148 L280.913076%2c146.827135 C279.198056%2c148.524476 277.897392%2c151.054068 276.989889%2c154.409092 L276.944%2c154.581148 L276.898656%2c154.409092 C275.991153%2c151.054068 274.690488%2c148.524476 272.975469%2c146.827135 L272.862%2c146.718148 L272.975469%2c146.609397 C274.690488%2c144.912057 275.991153%2c142.382464 276.898656%2c139.027441 L276.944%2c138.854148 Z'%3e%3c/path%3e %3cpath fill='%23F3D401' id='%e5%a4%9a%e8%be%b9%e5%bd%a2-4-%e6%8b%b7%e8%b4%9d-4' d='M54.6687307%2c19.504644 C59.9422085%2c16.4705882 63.4097007%2c9.96904025 65.0712074%2c0 C66.6604747%2c9.96904025 70.127967%2c16.4705882 75.4736842%2c19.504644 C70.127967%2c22.5386997 66.6604747%2c29.0402477 65.0712074%2c39.0092879 C63.4097007%2c29.0402477 59.9422085%2c22.5386997 54.6687307%2c19.504644 L54.6687307%2c19.504644 Z'%3e%3c/path%3e %3cpath fill='black' id='%e5%a4%9a%e8%be%b9%e5%bd%a2-4-%e6%8b%b7%e8%b4%9d-4%e5%a4%87%e4%bb%bd' d='M64.0848135%2c-0.164398987 C62.4677899%2c9.53774254 59.1391642%2c15.7789158 54.1700365%2c18.637866 C53.5016287%2c19.0224293 53.5016287%2c19.9868586 54.1700365%2c20.371422 C59.1391642%2c23.2303722 62.4677899%2c29.4715454 64.0848135%2c39.1736869 C64.271168%2c40.291814 65.8802798%2c40.2861348 66.0587372%2c39.1667202 C67.6047454%2c29.4690323 70.9306484%2c23.2329641 75.9672897%2c20.3743299 C76.6424824%2c19.9911124 76.6424824%2c19.0181755 75.9672897%2c18.634958 C70.9306484%2c15.7763238 67.6047454%2c9.54025567 66.0587372%2c-0.157432285 C65.8802798%2c-1.27684691 64.271168%2c-1.28252606 64.0848135%2c-0.164398987 Z M65.056%2c4.951 L65.1705842%2c5.39812902 C66.8822641%2c11.9250874 69.6460453%2c16.6067983 73.4885305%2c19.4108774 L73.62%2c19.504 L73.4885305%2c19.5984105 C69.6460453%2c22.4024897 66.8822641%2c27.0842005 65.1705842%2c33.6111589 L65.056%2c34.057 L64.9381678%2c33.6066533 C63.1931616%2c27.0829754 60.436164%2c22.4043664 56.6398246%2c19.6011176 L56.505%2c19.504 L56.6398246%2c19.4081703 C60.436164%2c16.6049215 63.1931616%2c11.9263126 64.9381678%2c5.40263459 L65.056%2c4.951 Z'%3e%3c/path%3e %3c/g%3e %3cg fill='black' transform='translate(310.080000%2c 0.000000)' id='%e6%96%87%e5%ad%97'%3e %3cpath id='%e7%bd%a9' d='M35.07%2c244.19 L35.07%2c237.4 L62.93%2c237.4 L62.93%2c232.29 L35.07%2c232.29 L35.07%2c228.79 L56.35%2c228.79 L56.35%2c208.42 L34.3%2c208.42 L34.3%2c205.27 L59.5%2c205.27 L59.5%2c200.79 L34.3%2c200.79 L34.3%2c197.78 L59.29%2c197.78 L59.29%2c182.52 L4.83%2c182.52 L4.83%2c197.78 L27.72%2c197.78 L27.72%2c208.42 L7.56%2c208.42 L7.56%2c228.79 L28.49%2c228.79 L28.49%2c232.29 L0.91%2c232.29 L0.91%2c237.4 L28.49%2c237.4 L28.49%2c244.19 L35.07%2c244.19 Z M36.68%2c192.88 L26.67%2c192.88 L26.67%2c187.35 L36.68%2c187.35 L36.68%2c192.88 Z M20.72%2c192.88 L11.06%2c192.88 L11.06%2c187.35 L20.72%2c187.35 L20.72%2c192.88 Z M52.78%2c192.88 L42.63%2c192.88 L42.63%2c187.35 L52.78%2c187.35 L52.78%2c192.88 Z M49.77%2c216.47 L13.79%2c216.47 L13.79%2c212.9 L49.77%2c212.9 L49.77%2c216.47 Z M49.77%2c224.31 L13.79%2c224.31 L13.79%2c220.74 L49.77%2c220.74 L49.77%2c224.31 Z'%3e%3c/path%3e %3cpath id='%e6%88%b4' d='M55.93%2c64.12 C60.83%2c64.12 62.79%2c61.6 63.84%2c52.57 C62.23%2c51.87 60.27%2c50.47 58.94%2c49.07 C58.59%2c55.58 57.89%2c57.96 56.56%2c57.96 C54.53%2c57.96 52.64%2c55.3 50.96%2c50.68 C55.44%2c43.68 58.17%2c35.07 60.06%2c24.99 L53.97%2c23.66 C52.78%2c30.45 51.03%2c36.61 48.58%2c42.07 C47.25%2c35.7 46.13%2c27.79 45.5%2c19.11 L62.37%2c19.11 L62.37%2c13.93 L45.22%2c13.93 C45.01%2c9.38 44.87%2c4.69 44.94%2c0 L38.57%2c0 C38.64%2c4.62 38.71%2c9.38 38.99%2c13.93 L22.96%2c13.93 L22.96%2c10.43 L35.42%2c10.43 L35.42%2c5.39 L22.96%2c5.39 L22.96%2c0 L16.73%2c0 L16.73%2c5.39 L4.27%2c5.39 L4.27%2c10.43 L16.73%2c10.43 L16.73%2c13.93 L0%2c13.93 L0%2c19.11 L39.27%2c19.11 C40.11%2c30.94 41.65%2c41.65 44.1%2c49.63 C41.16%2c53.48 37.59%2c56.63 33.25%2c59.15 C34.79%2c60.34 36.68%2c62.44 37.59%2c63.98 C41.02%2c61.81 44.1%2c59.29 46.76%2c56.35 C49.14%2c61.25 52.15%2c64.12 55.93%2c64.12 Z M54.88%2c13.3 L59.64%2c9.59 C57.89%2c7 53.97%2c3.64 50.68%2c1.33 L46.34%2c4.76 C49.56%2c7.21 53.34%2c10.78 54.88%2c13.3 Z M37.87%2c52.85 L37.87%2c48.51 L28.42%2c48.51 L28.42%2c45.22 L36.61%2c45.22 L36.61%2c41.23 L28.42%2c41.23 L28.42%2c38.22 L35.42%2c38.22 L35.42%2c21.98 L3.99%2c21.98 L3.99%2c38.22 L10.92%2c38.22 L10.92%2c41.23 L2.73%2c41.23 L2.73%2c45.22 L10.92%2c45.22 L10.92%2c48.51 L0.7%2c48.51 L0.7%2c52.85 L37.87%2c52.85 Z M17.01%2c28.49 L9.24%2c28.49 L9.24%2c25.34 L17.01%2c25.34 L17.01%2c28.49 Z M30.03%2c28.49 L22.19%2c28.49 L22.19%2c25.34 L30.03%2c25.34 L30.03%2c28.49 Z M17.01%2c34.93 L9.24%2c34.93 L9.24%2c31.71 L17.01%2c31.71 L17.01%2c34.93 Z M30.03%2c34.93 L22.19%2c34.93 L22.19%2c31.71 L30.03%2c31.71 L30.03%2c34.93 Z M23.03%2c41.23 L16.17%2c41.23 L16.17%2c38.22 L23.03%2c38.22 L23.03%2c41.23 Z M23.03%2c48.51 L16.17%2c48.51 L16.17%2c45.22 L23.03%2c45.22 L23.03%2c48.51 Z M5.74%2c64.68 C9.52%2c62.3 14.07%2c58.52 17.01%2c55.02 L11.48%2c53.2 C9.03%2c56 4.97%2c58.87 1.12%2c60.9 C2.38%2c61.67 4.69%2c63.63 5.74%2c64.68 Z M28%2c63.56 L33.25%2c60.83 C31.57%2c58.59 28.14%2c55.44 25.48%2c53.27 L20.51%2c55.72 C23.17%2c58.03 26.46%2c61.46 28%2c63.56 Z'%3e%3c/path%3e %3cpath id='%e5%8f%a3' d='M12.25%2c152.72 L12.25%2c146.91 L51.45%2c146.91 L51.45%2c152.44 L58.52%2c152.44 L58.52%2c97 L5.53%2c97 L5.53%2c152.72 L12.25%2c152.72 Z M51.45%2c140.26 L12.25%2c140.26 L12.25%2c103.58 L51.45%2c103.58 L51.45%2c140.26 Z'%3e%3c/path%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/svg%3e";

/***/ }),

/***/ "./src/assets/img-1.png":
/*!******************************!*\
  !*** ./src/assets/img-1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/fe2aa97c8c87c8d9e804.png";

/***/ }),

/***/ "./src/assets/2kb.jpg":
/*!****************************!*\
  !*** ./src/assets/2kb.jpg ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABKCAYAAADgxem7AAAAAXNSR0IArs4c6QAADipJREFUeAHdWwuwVVUZ/u/lJoKoCZkiamCa8bBJCHrpODI6Cj4aNWqGgqZ0MhojG01rsGImptQZp9Qk893QlDWGaQ2lhQI2gw34CBAREeWlCBk+8MHz9n3/Wt/aa+97rpxzYCbPXTNn///61//9r/XY+559btvkyZ0DdnbaL81sPD4HdOLSho+a+p1g2uJAzie9OC79JAdDWI7J+aT3f8Ijtjfhek5Hm03pYCHQmcCgGLQHzk4MjrQTQhYCbJI7j27SJ5P3WwSPkLkAJqAO1o7O+JiHz57PmrJicinbkLhnTzl1YCDps5v3VZzWwY9vR/wHMC+PHZe0AihE05KGXkqcPJsXSkm7oHXxCP+ADuaQkst5JMlCsEqR+HahPpswOc+6SO5FbTE8t0mYYSUSZ1pJaVuoz/PDG2nkfYWg6zotjG/XzCuxlCgZJKbV4eMxUelqLC9CK+N5ZqSlnWY9k6XEPcugq+R1vnifGBWrRfHFNkEipeSYWEyOyWoMbOBdyF7oU1c6Klar4UsHqC8RJoUEuQXSTEPgW8Izjzxl7KOJtjrezwzNoGiaWWbKyrCR+jqKvIpBea6DbqviwwHK6LPk2PWEQEtyCJMcDLeFj1PYA/AdnlyWCPNnYsyTTXcM8joTJKdOT8L7mcHk1Dw5dES9MCxWElQKIGCkUjtioNnYU8x69w6FpXzderMH5nbFH3Wk2RljoaAZALtqtdm8R4LMJ0GGIXKWMYGvNslEG4k/FCMm67HwQkveCa7S6pBclMORp06Ov/hrZh85NuB13boVxXiowLgcuDGjzE47VVqBjhiKYvwz8M34byb+9NBV2gLIijkyCFIaVkCpH8d9jCoRQ3XehQb0J1dp0olUNvPAE4I6e+GfcTaK92LAb5E0ePbZ2nT38E7QSboahyDJwDCI1Ceu0vIxtw8BZbXa3vinvUbxxRMog2JU+Pjsg82pj0kWo1flXa8GHuql1o7iSpcDwm/bXlLzznbI9tZ/o/h0ZnhwMUAl7lEpcXYin+TylukwQeJzVdfHpW8fs8suMXvtdUlAob9godn0awJO+C2vmV0OXWLUtm0zu+l2s61vQkIH7+JfGAXiqnlQNfChGETGQSaS+yBfxUnmD2EVZeElTkFFZszIqsTsrbfNfjsb8ggiOexQs9EndtUdeJjZStxpGNO7+eew4hatyqr4Dn/kpnd8PBHyQCcD1T4tonEGPXgpVvCuVOfFTVXwjKVmoxyfPflXWIox9aPRWng/It0xHdAPUWoKEH0Hk8YxYdgV3wUfdfdEGsE35L/B+NOt1ZcCopYzp7FAnozuLLFY0vNZokJV7qD6LrqrUFt2uXV27Srjd+/GV9lvBZn0uvPfTPwdmnHmQgNaGZSTr0kZj5KPUVXxVKm3nfTJoMlk1XiHmXJF6CmOHTvD4emu9+C/ZtzAuJxma+A7KIzykHyMRkVhV0USTTIy3eA5VG/r/36zc8/oqr1kOQ7L5yCPPhrx30z8fjeJk+vRyAgrGASBqMvANCaZKDWFD6h9cI0zlXzU6V8xaqbrwZeeMxi6G2EA/NBCDEZ8btRlUEk6hOQYju1ta9Z/E/EXByiC9kRhpJQw5VmCOe9FyPS74Pe2EPHQzn3m/B79x0LmmJyv4tNDV16ANiUPqgTz2SdPo74lXKFcQMfvbSGAP3+c2dIVwZC239oNZkuersM/C9Fg/OnLHbp0fEwuhBCE0W7IOCuEV1nA7vDJUOPMqI+Z8ZO3zf/FXeZ7YSLq8o94643f7yZy5nUgUi3yqT4aA+2iC0wtmUztK9rOGOr1H+OtN349SpUcCCyanFcSTuPMNAuwJOfYvm7VJGm/hv8Uh8ag5rJu8H6AuiFocV9S2fcneO9HIP1Rz2WuVOjVwr+4yRH7/PIS7OoQVJy1/KdYG4g/nBkxUTeARJlr3lSgJIeDxEuRTlksDHDshjvNTh5jtv9+UtgDJTaqdLENOcfewZ/wjywKnS46VKANDFTH2PdJBPUGvaoOscVzBo1Ig4bdQgRzjGyUJ8MV/RzP7yPu/0eBd24P+Kid/Lg/Cit+6vHfTPzFAcpAazQm6MsRY+I9aernmJzP7AhDkfj3Kt4PUBZexRctvT1jJkhWRSFfxQgn2op4/w5USfKLnrQEY4HU52x6AWIhKNcYKVur432b+GwyISZMio9kaUkzWzWNU0k8cS2O95WhHL0Q6ogySTQvTkZZhFQIKqC1Oj48dMXEtOy1KvJktRWcQr+0YnoIvvx9BqqgpLUSfMqZvDO+GMqF4IqIY2RaGR/eqHFm2WLSKblM5izWkY/FlSBeBWh1fPg+g1lp9kWZPZv6pNBTAZyBzMd7CD5sEybFvCqUspS8K/ASmt9GM55sq+P9bxPWQEn7wRiTFGGSudwXQibrKfjibsKCxOXOpZ9/kpxijqGpeN6JsmPwo5Ojj4CkSTz9tPfqHj8A36KPHIbfNeP9ay3/Kc4m/Zcfujyz4qLa6FzwFcJhFQQKuey7F5q98qrZtOuDjYMPxDdVCJ6NgaqQQWL2Bl4gL1pWJHbhBWaDB5ldcxvej+Bl0XGDzQ7qG7SJHznc7OxTzO6812z9xsLmq2+YPbdOVgsKSAgV8co/Zd3FH/5Qg0YCShkCD97RhQEacsMUhXXlYKkR7s4gOPJws6lfdknNywv4PnPRUxiCLvE78QbthOPMrr3M7Mc3m33lXLMR6FfbV88rS1jQGb9KOSb/jcZf/j4j+mCy1ZZWAMacpw4/KA6XLZc3f3/RC7QfZnPHDvwua63ZpVcHS7Xw26GTXMHOr+8z27jZjCvkaPwmbMYt+AXQwQX+MyeaTRxvdt1dZqvXBzn9v7IFPKhao/E7Dvi2c79VgcYEqUD7KVhHhEtVPvMqs0EfzBTAzsOXMD+fVR++hIRDbq/X8Puv3u8z+8N1pdGanQlYSSystybil1G/tXpHGZLGlgoRx+SnKp+zAHu7n9kFp5vxS525/8KefjkeprQl2zIsCvnbeMG8Cd94H4IVcOmXzG6bjV8F4jxg277T7MqfBZ7X0SPMPg8fN91ttvalQs53sMlHE/G7JeDCAYrs3AYufh7kBrOxTOx6XDZc/n9GMYZ92OyLZ+JQxMH3u7+FlTJzWhFwd9wTK8x+NNPsQ9gWxw8xu/pSnBfYHn3wk8mpE8uo3vErxEnn4HxhAbL2Q9hgEZuJ3zGw1XbO1E7/Y5OzrWTFyzD7atTROGXivzHBbNxJQWv2XLN7/m722Y+HYlGHS/6i882ewovkeYsLX5tx93l8ebAzGAWZPiWcQTNuNRsyKOjV4/8hbMvXsbXYFFMj8RNTrAxkSbCaszgQkyyvAgaTKuScxZPjz5O24PdanzvVjLe7P80zOwbPHRtfgVXosRicPW6jEz+KIuDN2K5oiCvsBSz9ab8wG45V9u+V+Dxr9s0v4CdN/RVVV7pqndmsvxRFl0Yj8ato7cqKYDeAoNISkWXKOAi625WiTpRPHIcTHWcFk96wyey+h80mnW3WH+fAT79txlWT++GK+cHXw9bK5TS9AXeTBx8FE9vQITh7cIv+D1ZQ9XP8YLNjjwqKxHpojImfvMU4u4ufqsSm9yYUcHbYklHyMhyp64B3HYzzFnjWyWZ/xNaQ8Dd/xSH3ezMue66axdgGCpBmFnNF4IcpnxgW5Znt0cPNbrwy2MWot61vm614vvx5Gn0/OKmR4dltJH7HRnz5bxPaxQDHfOnQMhsE2i4cF0/5fjjUOGPzH8czwJlBlw9Pc7GHL8ESZ9KP4ZBU8YhhcstX44lyqNkd90d/7gi/If902BYv4w6jdvgA/OMp7iLV1q9PYVf2G41feRIfnkAzL54oAvako1yVhjglpaI8iz17w93Z9oEy9blFTh2NN+bY90y+7/7BmNsCy7vIZGylDxwSHuE52v+g8Pg+/zGzbTtghw7RVr9odvM9WdFghP6vuiiM++xFttH4c6w/ZyhAtxcDyGXkVQjn0fHxqLtkVYyEJMouGItVgzvIvQ8XBUxa0Fn6XOiNwup4YGHgTxuDJ1gc2lxVbj8Chg42u/7y2KmQtRvLuvKf48kzLFLn0fHxGKvzGOv6t4lQUpRm7Ou3G768ooyWpQab3jjjz2/AHeOZ0B94aKCauZVr8bpwO/72wJ2DxSD+9E+FBzCuJiVF1JOwMeMOcmhUhF+SW74feFwlLrJuIn7/tZ/2mRvNswLPMZfHi7aH00zmapnuT+7CU+WBYf9fOzUcpFRnEVgQHCU243azZVwhwJ2AovBsuPvBkBh1lSHvYO9g27BPvxefZ/4Mwj/pH10GOWTRdXGeRXwj8aczA35Ck1X0UsLVMehU9dlfhT+e+DeFIuOzBuULl2IJ9jJ7Zg1+J/5EGKf8Sa4ANLrktpl+q9kaLHvh6X8Nnj3cphRBn4eMK+++BXiWmc+BrvFQ1mj8bWd9xxduCIARMjLSvFVl1T51JRNtQXyxMlAALSnNTJ6P14mJopXOiyAqy6JeHHLSCnic3WEheCGUbJRpzBOBJqmSEi+dnoBPL549OVxI08pAcbRaKBfPcfGSk3LFkLYq3rdJKQEmw4aEXc6LVkzkXR51SLwfddj31oL4tE2UQzVRFcJplnDSA7AmL92ciu8Ok8ulm1PxuV53vHRzKr4bTGmbMGEufyXnNPbzLUC5b5M4ljAtju9QIqLIM20Rl3nmYaeoSCyaeOFEWxnPP+H5mJOSUzJJhsTz5PMiJB0wklNGfTaXtQiedWjH8p/pwcegPQlmkSehPgclryHzMahwSyU9YtQn/x7F4y/kmQzNxl/ROQnx4o2E9XMBGMXPxNIWyPikl8loK8kj/57H77ateBk2Z861bbP+B8oXUos785cYAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/assets/5kb.jpg":
/*!****************************!*\
  !*** ./src/assets/5kb.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/3d538468c5fb41b2bb0f.jpg";

/***/ }),

/***/ "./src/assets/json/data.json5":
/*!************************************!*\
  !*** ./src/assets/json/data.json5 ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"title":"JSON5 Example","owner":{"name":"Tom Preston-Werner","origanization":"GitHub","bio":"GitHub Cofounder & CEO\\n    Likes tater tots and beer.","dob":"1979-05-27T07:32:00Z"}}');

/***/ }),

/***/ "./src/assets/json/data.toml":
/*!***********************************!*\
  !*** ./src/assets/json/data.toml ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"title":"TOML Example","owner":{"name":"Tom Preston-Werner","origanization":"GitHub","bio":"GitHub Cofounder & CEO\\nLikes tater tots and beer","dob":"1979-05-27T07:32:00.000Z"}}');

/***/ }),

/***/ "./src/assets/json/data.yaml":
/*!***********************************!*\
  !*** ./src/assets/json/data.yaml ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"title":"YAML Example","owner":{"name":"Tom Preston-Werner","origanization":"GitHub","bio":"GitHub Cofounder & CEO Likes tater tots and beer.","dob":"1979-05-27T07:32:00.000Z"}}');

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hello_world__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello-world */ "./src/hello-world.js");
/* harmony import */ var _assets_img_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img-1.png */ "./src/assets/img-1.png");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _assets_example_txt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/example.txt */ "./src/assets/example.txt");
/* harmony import */ var _assets_2kb_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/2kb.jpg */ "./src/assets/2kb.jpg");
/* harmony import */ var _assets_5kb_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/5kb.jpg */ "./src/assets/5kb.jpg");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.less */ "./src/style.less");
/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/data.xml */ "./src/assets/data.xml");
/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_data_xml__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/data.csv */ "./src/assets/data.csv");
/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_data_csv__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_json_data_toml__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/json/data.toml */ "./src/assets/json/data.toml");
/* harmony import */ var _assets_json_data_yaml__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/json/data.yaml */ "./src/assets/json/data.yaml");
/* harmony import */ var _assets_json_data_json5__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/json/data.json5 */ "./src/assets/json/data.json5");
// 导入函数模块
















console.log(_assets_json_data_toml__WEBPACK_IMPORTED_MODULE_10__.title); // output `TOML Example`
console.log(_assets_json_data_toml__WEBPACK_IMPORTED_MODULE_10__.owner.name); // output `Tom Preston-Werner`

console.log(_assets_json_data_yaml__WEBPACK_IMPORTED_MODULE_11__.title); // output `YAML Example`
console.log(_assets_json_data_yaml__WEBPACK_IMPORTED_MODULE_11__.owner.name); // output `Tom Preston-Werner`

console.log(_assets_json_data_json5__WEBPACK_IMPORTED_MODULE_12__.title); // output `JSON5 Example`
console.log(_assets_json_data_json5__WEBPACK_IMPORTED_MODULE_12__.owner.name); // output `Tom Preston-Werner`


console.log((_assets_data_xml__WEBPACK_IMPORTED_MODULE_8___default()))
console.log((_assets_data_csv__WEBPACK_IMPORTED_MODULE_9___default()))

document.body.classList.add('hello')
document.body.classList.add('world')

;(0,_hello_world__WEBPACK_IMPORTED_MODULE_0__["default"])()

const img = document.createElement('img')
img.src = _assets_img_1_png__WEBPACK_IMPORTED_MODULE_1__
document.body.appendChild(img)

const logo = document.createElement('img')
logo.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__
logo.width = '120'
document.body.appendChild(logo)

const block = document.createElement('div')
block.style.cssText = `width: 200px; height: 200px;
background-color: aliceblue`
block.classList.add('block-bg')
block.textContent = _assets_example_txt__WEBPACK_IMPORTED_MODULE_3__["default"]
document.body.appendChild(block)

const imgkb2 = document.createElement('img')
imgkb2.src = _assets_2kb_jpg__WEBPACK_IMPORTED_MODULE_4__
document.body.appendChild(imgkb2)

const imgkb5 = document.createElement('img')
imgkb5.src = _assets_5kb_jpg__WEBPACK_IMPORTED_MODULE_5__
document.body.appendChild(imgkb5)

const span = document.createElement('span')
span.classList.add('iconfont', 'icon-zhexiantu')
span.style.cssText = `font-size: 42px; color: #333; `;
document.body.appendChild(span)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsYUFBYSw0Q0FBRztBQUNoQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLDRDQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGFBQWE7QUFDcEQsK0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVsbG8td29ybGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZGF0YS5jc3YiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz81YWUzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZXhhbXBsZS50eHQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmxlc3M/NWNiZSIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZGF0YS54bWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaGVsbG9Xb3JsZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdIZWxsbyB3b3JsZH5+JylcclxufVxyXG5cclxuLy8g5a+85Ye65Ye95pWw5qih5Z2XXHJcbmV4cG9ydCBkZWZhdWx0IGhlbGxvV29ybGQiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi53b3JsZCB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLFVBQUE7QUFBSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY29sb3I6IHJlZDtcXG4ud29ybGQge1xcbiAgICBjb2xvcjogQGNvbG9yO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBbW1widG9cIixcImZyb21cIixcImhlYWRpbmdcIixcImJvZHlcIl0sW1wiTWFyeVwiLFwiSm9oblwiLFwiUmVtaW5kZXJcIixcIkNhbGwgQ2luZHkgb24gVHVlc2RheVwiXSxbXCJab2VcIixcIkJpbGxcIixcIlJlbWluZGVyXCIsXCJCdXkgb3JhbmdlIGp1aWNlXCJdLFtcIkF1dHVtblwiLFwiTGluZHNleVwiLFwiTGV0dGVyXCIsXCJJIG1pc3MgeW91XCJdXSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IFwiaGVsbG8gd2VicGFja1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUubGVzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmxlc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibW9kdWxlLmV4cG9ydHMgPSB7XCJub3RlXCI6e1widG9cIjpbXCJNYXJ5XCJdLFwiZnJvbVwiOltcIkpvaG5cIl0sXCJoZWFkaW5nXCI6W1wiUmVtaW5kZXJcIl0sXCJib2R5XCI6W1wiQ2FsbCBDaW5keSBvbiBUdWVzZGF5XCJdfX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIOWvvOWFpeWHveaVsOaooeWdl1xyXG5pbXBvcnQgaGVsbG9Xb3JsZCBmcm9tIFwiLi9oZWxsby13b3JsZFwiXHJcbmltcG9ydCBpbWdzcmMgZnJvbSBcIi4vYXNzZXRzL2ltZy0xLnBuZ1wiXHJcbmltcG9ydCBsb2dvaW1nc3JjIGZyb20gXCIuL2Fzc2V0cy9sb2dvLnN2Z1wiXHJcbmltcG9ydCBleGFtcGxlVGV4dCBmcm9tIFwiLi9hc3NldHMvZXhhbXBsZS50eHRcIlxyXG5pbXBvcnQga2IyIGZyb20gXCIuL2Fzc2V0cy8ya2IuanBnXCJcclxuaW1wb3J0IGtiNSBmcm9tIFwiLi9hc3NldHMvNWtiLmpwZ1wiXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbmltcG9ydCAnLi9zdHlsZS5sZXNzJ1xyXG5pbXBvcnQgRGF0YSBmcm9tICcuL2Fzc2V0cy9kYXRhLnhtbCdcclxuaW1wb3J0IE5vdGVzIGZyb20gJy4vYXNzZXRzL2RhdGEuY3N2J1xyXG5cclxuXHJcbmltcG9ydCB0b21sIGZyb20gJy4vYXNzZXRzL2pzb24vZGF0YS50b21sJ1xyXG5pbXBvcnQgeWFtbCBmcm9tICcuL2Fzc2V0cy9qc29uL2RhdGEueWFtbCdcclxuaW1wb3J0IGpzb24gZnJvbSAnLi9hc3NldHMvanNvbi9kYXRhLmpzb241J1xyXG5cclxuY29uc29sZS5sb2codG9tbC50aXRsZSk7IC8vIG91dHB1dCBgVE9NTCBFeGFtcGxlYFxyXG5jb25zb2xlLmxvZyh0b21sLm93bmVyLm5hbWUpOyAvLyBvdXRwdXQgYFRvbSBQcmVzdG9uLVdlcm5lcmBcclxuXHJcbmNvbnNvbGUubG9nKHlhbWwudGl0bGUpOyAvLyBvdXRwdXQgYFlBTUwgRXhhbXBsZWBcclxuY29uc29sZS5sb2coeWFtbC5vd25lci5uYW1lKTsgLy8gb3V0cHV0IGBUb20gUHJlc3Rvbi1XZXJuZXJgXHJcblxyXG5jb25zb2xlLmxvZyhqc29uLnRpdGxlKTsgLy8gb3V0cHV0IGBKU09ONSBFeGFtcGxlYFxyXG5jb25zb2xlLmxvZyhqc29uLm93bmVyLm5hbWUpOyAvLyBvdXRwdXQgYFRvbSBQcmVzdG9uLVdlcm5lcmBcclxuXHJcblxyXG5jb25zb2xlLmxvZyhEYXRhKVxyXG5jb25zb2xlLmxvZyhOb3RlcylcclxuXHJcbmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnaGVsbG8nKVxyXG5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3dvcmxkJylcclxuXHJcbmhlbGxvV29ybGQoKVxyXG5cclxuY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuaW1nLnNyYyA9IGltZ3NyY1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZylcclxuXHJcbmNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG5sb2dvLnNyYyA9IGxvZ29pbWdzcmNcclxubG9nby53aWR0aCA9ICcxMjAnXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobG9nbylcclxuXHJcbmNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuYmxvY2suc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDogMjAwcHg7IGhlaWdodDogMjAwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZWBcclxuYmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2stYmcnKVxyXG5ibG9jay50ZXh0Q29udGVudCA9IGV4YW1wbGVUZXh0XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmxvY2spXHJcblxyXG5jb25zdCBpbWdrYjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG5pbWdrYjIuc3JjID0ga2IyXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1na2IyKVxyXG5cclxuY29uc3QgaW1na2I1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuaW1na2I1LnNyYyA9IGtiNVxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZ2tiNSlcclxuXHJcbmNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuc3Bhbi5jbGFzc0xpc3QuYWRkKCdpY29uZm9udCcsICdpY29uLXpoZXhpYW50dScpXHJcbnNwYW4uc3R5bGUuY3NzVGV4dCA9IGBmb250LXNpemU6IDQycHg7IGNvbG9yOiAjMzMzOyBgO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNwYW4pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9