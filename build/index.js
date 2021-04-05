/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkyandex_shri_2"] = self["webpackChunkyandex_shri_2"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_api_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/api/getData */ \"./src/js/api/getData.js\");\n/* harmony import */ var _js_slideData_prepareActivityData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/slideData/prepareActivityData */ \"./src/js/slideData/prepareActivityData.js\");\n/* harmony import */ var _js_slideData_prepareDiagramData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/slideData/prepareDiagramData */ \"./src/js/slideData/prepareDiagramData.js\");\n/* harmony import */ var _js_slideData_prepareChartData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/slideData/prepareChartData */ \"./src/js/slideData/prepareChartData.js\");\n/* harmony import */ var _js_slideData_prepareLeadersData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/slideData/prepareLeadersData */ \"./src/js/slideData/prepareLeadersData.js\");\n/* harmony import */ var _js_slideData_prepareVoteData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/slideData/prepareVoteData */ \"./src/js/slideData/prepareVoteData.js\");\n/* harmony import */ var _js_partials_getSprintTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/partials/getSprintTitle */ \"./src/js/partials/getSprintTitle.js\");\n\n\n\n\n\n\n\nvar output = document.querySelector(\"#output\");\n\nfunction prepareData(data, _ref) {\n  var sprintId = _ref.sprintId;\n  var sprintTitle = (0,_js_partials_getSprintTitle__WEBPACK_IMPORTED_MODULE_6__.default)(sprintId);\n  var a = 2;\n  return [(0,_js_slideData_prepareVoteData__WEBPACK_IMPORTED_MODULE_5__.default)(data, sprintTitle + a), (0,_js_slideData_prepareLeadersData__WEBPACK_IMPORTED_MODULE_4__.default)(data, sprintTitle), (0,_js_slideData_prepareChartData__WEBPACK_IMPORTED_MODULE_3__.default)(data, sprintTitle), (0,_js_slideData_prepareDiagramData__WEBPACK_IMPORTED_MODULE_2__.default)(data, sprintTitle), (0,_js_slideData_prepareActivityData__WEBPACK_IMPORTED_MODULE_1__.default)(data, sprintTitle)];\n}\n\nfunction init() {\n  (0,_js_api_getData__WEBPACK_IMPORTED_MODULE_0__.default)().then(function (data) {\n    output.innerHTML = JSON.stringify(prepareData(data, {\n      sprintId: 213\n    }), null, 4);\n  });\n}\n\ninit();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95YW5kZXgtc2hyaS0yLy4vc3JjL2luZGV4LmpzPzlhM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldERhdGEgZnJvbSAnLi9qcy9hcGkvZ2V0RGF0YSc7XG5pbXBvcnQgcHJlcGFyZUFjdGl2aXR5RGF0YSBmcm9tICcuL2pzL3NsaWRlRGF0YS9wcmVwYXJlQWN0aXZpdHlEYXRhJztcbmltcG9ydCBwcmVwYXJlRGlhZ3JhbURhdGEgZnJvbSAnLi9qcy9zbGlkZURhdGEvcHJlcGFyZURpYWdyYW1EYXRhJztcbmltcG9ydCBwcmVwYXJlQ2hhcnREYXRhIGZyb20gJy4vanMvc2xpZGVEYXRhL3ByZXBhcmVDaGFydERhdGEnO1xuaW1wb3J0IHByZXBhcmVMZWFkZXJzRGF0YSBmcm9tICcuL2pzL3NsaWRlRGF0YS9wcmVwYXJlTGVhZGVyc0RhdGEnO1xuaW1wb3J0IHByZXBhcmVWb3RlRGF0YSBmcm9tICcuL2pzL3NsaWRlRGF0YS9wcmVwYXJlVm90ZURhdGEnO1xuaW1wb3J0IGdldFNwcmludFRpdGxlIGZyb20gJy4vanMvcGFydGlhbHMvZ2V0U3ByaW50VGl0bGUnO1xudmFyIG91dHB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3V0cHV0XCIpO1xuXG5mdW5jdGlvbiBwcmVwYXJlRGF0YShkYXRhLCBfcmVmKSB7XG4gIHZhciBzcHJpbnRJZCA9IF9yZWYuc3ByaW50SWQ7XG4gIHZhciBzcHJpbnRUaXRsZSA9IGdldFNwcmludFRpdGxlKHNwcmludElkKTtcbiAgdmFyIGEgPSAyO1xuICByZXR1cm4gW3ByZXBhcmVWb3RlRGF0YShkYXRhLCBzcHJpbnRUaXRsZSArIGEpLCBwcmVwYXJlTGVhZGVyc0RhdGEoZGF0YSwgc3ByaW50VGl0bGUpLCBwcmVwYXJlQ2hhcnREYXRhKGRhdGEsIHNwcmludFRpdGxlKSwgcHJlcGFyZURpYWdyYW1EYXRhKGRhdGEsIHNwcmludFRpdGxlKSwgcHJlcGFyZUFjdGl2aXR5RGF0YShkYXRhLCBzcHJpbnRUaXRsZSldO1xufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuICBnZXREYXRhKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgIG91dHB1dC5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeShwcmVwYXJlRGF0YShkYXRhLCB7XG4gICAgICBzcHJpbnRJZDogMjEzXG4gICAgfSksIG51bGwsIDQpO1xuICB9KTtcbn1cblxuaW5pdCgpOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/api/getData.js":
/*!*******************************!*\
  !*** ./src/js/api/getData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction getData() {\n  return fetch(\"/api/data\").then(function (data) {\n    return data.json();\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBpL2dldERhdGEuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95YW5kZXgtc2hyaS0yLy4vc3JjL2pzL2FwaS9nZXREYXRhLmpzP2M4YjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLnByb21pc2UuanNcIjtcbmltcG9ydCBcImNvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QudG8tc3RyaW5nLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXRhKCkge1xuICByZXR1cm4gZmV0Y2goXCIvYXBpL2RhdGFcIikudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgIHJldHVybiBkYXRhLmpzb24oKTtcbiAgfSk7XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/api/getData.js\n");

/***/ }),

/***/ "./src/js/partials/getSprintTitle.js":
/*!*******************************************!*\
  !*** ./src/js/partials/getSprintTitle.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getSprintTitle)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ \"./node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getSprintTitle(data, sprintId) {\n  return data.find(function (entity) {\n    return entity.type === \"Sprint\" && entity.id === sprintId;\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvcGFydGlhbHMvZ2V0U3ByaW50VGl0bGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95YW5kZXgtc2hyaS0yLy4vc3JjL2pzL3BhcnRpYWxzL2dldFNwcmludFRpdGxlLmpzP2UxMGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbmQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNwcmludFRpdGxlKGRhdGEsIHNwcmludElkKSB7XG4gIHJldHVybiBkYXRhLmZpbmQoZnVuY3Rpb24gKGVudGl0eSkge1xuICAgIHJldHVybiBlbnRpdHkudHlwZSA9PT0gXCJTcHJpbnRcIiAmJiBlbnRpdHkuaWQgPT09IHNwcmludElkO1xuICB9KTtcbn0iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/partials/getSprintTitle.js\n");

/***/ }),

/***/ "./src/js/slideData/prepareActivityData.js":
/*!*************************************************!*\
  !*** ./src/js/slideData/prepareActivityData.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ prepareActivityData)\n/* harmony export */ });\nfunction prepareActivityData(data, sprintTitle) {\n  return {\n    alias: \"activity\",\n    data: {}\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2xpZGVEYXRhL3ByZXBhcmVBY3Rpdml0eURhdGEuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95YW5kZXgtc2hyaS0yLy4vc3JjL2pzL3NsaWRlRGF0YS9wcmVwYXJlQWN0aXZpdHlEYXRhLmpzPzA3NDIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZUFjdGl2aXR5RGF0YShkYXRhLCBzcHJpbnRUaXRsZSkge1xuICByZXR1cm4ge1xuICAgIGFsaWFzOiBcImFjdGl2aXR5XCIsXG4gICAgZGF0YToge31cbiAgfTtcbn0iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/slideData/prepareActivityData.js\n");

/***/ }),

/***/ "./src/js/slideData/prepareChartData.js":
/*!**********************************************!*\
  !*** ./src/js/slideData/prepareChartData.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ prepareChartData)\n/* harmony export */ });\nfunction prepareChartData(data, sprintTitle) {\n  return {\n    alias: \"chart\",\n    data: {}\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2xpZGVEYXRhL3ByZXBhcmVDaGFydERhdGEuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95YW5kZXgtc2hyaS0yLy4vc3JjL2pzL3NsaWRlRGF0YS9wcmVwYXJlQ2hhcnREYXRhLmpzPzkxMTgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZUNoYXJ0RGF0YShkYXRhLCBzcHJpbnRUaXRsZSkge1xuICByZXR1cm4ge1xuICAgIGFsaWFzOiBcImNoYXJ0XCIsXG4gICAgZGF0YToge31cbiAgfTtcbn0iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/slideData/prepareChartData.js\n");

/***/ }),

/***/ "./src/js/slideData/prepareDiagramData.js":
/*!************************************************!*\
  !*** ./src/js/slideData/prepareDiagramData.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ prepareDiagramData)\n/* harmony export */ });\nfunction prepareDiagramData(data, sprintTitle) {\n  return {\n    alias: \"diagram\",\n    data: {}\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2xpZGVEYXRhL3ByZXBhcmVEaWFncmFtRGF0YS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3lhbmRleC1zaHJpLTIvLi9zcmMvanMvc2xpZGVEYXRhL3ByZXBhcmVEaWFncmFtRGF0YS5qcz8xMThhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEaWFncmFtRGF0YShkYXRhLCBzcHJpbnRUaXRsZSkge1xuICByZXR1cm4ge1xuICAgIGFsaWFzOiBcImRpYWdyYW1cIixcbiAgICBkYXRhOiB7fVxuICB9O1xufSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/slideData/prepareDiagramData.js\n");

/***/ }),

/***/ "./src/js/slideData/prepareLeadersData.js":
/*!************************************************!*\
  !*** ./src/js/slideData/prepareLeadersData.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ prepareLeadersData)\n/* harmony export */ });\nfunction prepareLeadersData(data, sprintTitle) {\n  return {\n    alias: \"leaders\",\n    data: {}\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2xpZGVEYXRhL3ByZXBhcmVMZWFkZXJzRGF0YS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3lhbmRleC1zaHJpLTIvLi9zcmMvanMvc2xpZGVEYXRhL3ByZXBhcmVMZWFkZXJzRGF0YS5qcz9lMzVhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVMZWFkZXJzRGF0YShkYXRhLCBzcHJpbnRUaXRsZSkge1xuICByZXR1cm4ge1xuICAgIGFsaWFzOiBcImxlYWRlcnNcIixcbiAgICBkYXRhOiB7fVxuICB9O1xufSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/slideData/prepareLeadersData.js\n");

/***/ }),

/***/ "./src/js/slideData/prepareVoteData.js":
/*!*********************************************!*\
  !*** ./src/js/slideData/prepareVoteData.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ prepareVoteData)\n/* harmony export */ });\nfunction prepareVoteData(data, sprintTitle) {\n  return {\n    alias: \"vote\",\n    data: {\n      title: \"\\u0421\\u0430\\u043C\\u044B\\u0439 \\uD83D\\uDD0E \\u0432\\u043D\\u0438\\u043C\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u044B\\u0439 \\u0440\\u0430\\u0437\\u0440\\u0430\\u0431\\u043E\\u0442\\u0447\\u0438\\u043A\",\n      subtitle: \"\",\n      emoji: \"\\uD83D\\uDD0E\"\n    }\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2xpZGVEYXRhL3ByZXBhcmVWb3RlRGF0YS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3lhbmRleC1zaHJpLTIvLi9zcmMvanMvc2xpZGVEYXRhL3ByZXBhcmVWb3RlRGF0YS5qcz8xZTQ4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVWb3RlRGF0YShkYXRhLCBzcHJpbnRUaXRsZSkge1xuICByZXR1cm4ge1xuICAgIGFsaWFzOiBcInZvdGVcIixcbiAgICBkYXRhOiB7XG4gICAgICB0aXRsZTogXCJcXHUwNDIxXFx1MDQzMFxcdTA0M0NcXHUwNDRCXFx1MDQzOSBcXHVEODNEXFx1REQwRSBcXHUwNDMyXFx1MDQzRFxcdTA0MzhcXHUwNDNDXFx1MDQzMFxcdTA0NDJcXHUwNDM1XFx1MDQzQlxcdTA0NENcXHUwNDNEXFx1MDQ0QlxcdTA0MzkgXFx1MDQ0MFxcdTA0MzBcXHUwNDM3XFx1MDQ0MFxcdTA0MzBcXHUwNDMxXFx1MDQzRVxcdTA0NDJcXHUwNDQ3XFx1MDQzOFxcdTA0M0FcIixcbiAgICAgIHN1YnRpdGxlOiBcIlwiLFxuICAgICAgZW1vamk6IFwiXFx1RDgzRFxcdUREMEVcIlxuICAgIH1cbiAgfTtcbn0iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/slideData/prepareVoteData.js\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);