/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/StateContext.jsx":
/*!**************************************!*\
  !*** ./src/context/StateContext.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StateProvider: () => (/* binding */ StateProvider),\n/* harmony export */   stateContext: () => (/* binding */ stateContext),\n/* harmony export */   useStateContext: () => (/* binding */ useStateContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst stateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst StateProvider = ({ initialState, reducer, children })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(stateContext.Provider, {\n        value: (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState),\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/varun/CODING/MERN STACK/PROJECTS/WHATS-APP-CLONE/client/src/context/StateContext.jsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\nfunction useStateContext() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(stateContext);\n    if (!context) {\n        throw new Error(\"The context is not avaliable or probably null or undefiend\");\n    }\n    return context;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9TdGF0ZUNvbnRleHQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThEO0FBR3ZELE1BQU1HLDZCQUFlSCxvREFBYUEsR0FBRztBQUdyQyxNQUFNSSxnQkFBZ0IsQ0FBQyxFQUFFQyxZQUFZLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO0lBRTdELHFCQUNJLDhEQUFDSixhQUFhSyxRQUFRO1FBQUNDLE9BQU9QLGlEQUFVQSxDQUFDSSxTQUFTRDtrQkFDN0NFOzs7Ozs7QUFJYixFQUFDO0FBRU0sU0FBU0c7SUFFWixNQUFNQyxVQUFVVixpREFBVUEsQ0FBQ0U7SUFDM0IsSUFBSSxDQUFDUSxTQUFTO1FBQ1YsTUFBTSxJQUFJQyxNQUFNO0lBQ3BCO0lBRUEsT0FBT0Q7QUFFWCIsInNvdXJjZXMiOlsid2VicGFjazovL3doYXRzYXBwLWNsb25lLy4vc3JjL2NvbnRleHQvU3RhdGVDb250ZXh0LmpzeD80ODI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcblxuXG5leHBvcnQgY29uc3Qgc3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5cbmV4cG9ydCBjb25zdCBTdGF0ZVByb3ZpZGVyID0gKHsgaW5pdGlhbFN0YXRlLCByZWR1Y2VyLCBjaGlsZHJlbiB9KSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSl9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L3N0YXRlQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VTdGF0ZUNvbnRleHQoKSB7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChzdGF0ZUNvbnRleHQpO1xuICAgIGlmICghY29udGV4dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgY29udGV4dCBpcyBub3QgYXZhbGlhYmxlIG9yIHByb2JhYmx5IG51bGwgb3IgdW5kZWZpZW5kXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0O1xuXG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwic3RhdGVDb250ZXh0IiwiU3RhdGVQcm92aWRlciIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXIiLCJjaGlsZHJlbiIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VTdGF0ZUNvbnRleHQiLCJjb250ZXh0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/StateContext.jsx\n");

/***/ }),

/***/ "./src/context/StateReducers.js":
/*!**************************************!*\
  !*** ./src/context/StateReducers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   initalState: () => (/* binding */ initalState)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/context/constants.js\");\n\nconst initalState = {\n    userInfo: undefined,\n    newUser: undefined\n};\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_USER_INFO:\n            return {\n                ...state,\n                userInfo: action.userInfo\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_NEW_USER:\n            return {\n                ...state,\n                newUser: action.newUser\n            };\n        default:\n            return state;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9TdGF0ZVJlZHVjZXJzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEyQztBQUVwQyxNQUFNQyxjQUFjO0lBQ3ZCQyxVQUFVQztJQUNWQyxTQUFTRDtBQUViLEVBQUM7QUFHRCxNQUFNRSxVQUFVLENBQUNDLE9BQU9DO0lBRXBCLE9BQVFBLE9BQU9DLElBQUk7UUFDZixLQUFLUixvREFBWUEsQ0FBQ1MsYUFBYTtZQUMzQixPQUFPO2dCQUNILEdBQUdILEtBQUs7Z0JBQ1JKLFVBQVVLLE9BQU9MLFFBQVE7WUFDN0I7UUFFSixLQUFLRixvREFBWUEsQ0FBQ1UsWUFBWTtZQUMxQixPQUFPO2dCQUNILEdBQUdKLEtBQUs7Z0JBQ1JGLFNBQVNHLE9BQU9ILE9BQU87WUFDM0I7UUFFSjtZQUFTLE9BQU9FO0lBQ3BCO0FBRUo7QUFHQSxpRUFBZUQsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3doYXRzYXBwLWNsb25lLy4vc3JjL2NvbnRleHQvU3RhdGVSZWR1Y2Vycy5qcz8wMDQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZHVjZXJDYXNlcyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3QgaW5pdGFsU3RhdGUgPSB7XG4gICAgdXNlckluZm86IHVuZGVmaW5lZCxcbiAgICBuZXdVc2VyOiB1bmRlZmluZWRcblxufVxuXG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHJlZHVjZXJDYXNlcy5TRVRfVVNFUl9JTkZPOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICB1c2VySW5mbzogYWN0aW9uLnVzZXJJbmZvXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNhc2UgcmVkdWNlckNhc2VzLlNFVF9ORVdfVVNFUjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbmV3VXNlcjogYWN0aW9uLm5ld1VzZXJcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xuICAgIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sIm5hbWVzIjpbInJlZHVjZXJDYXNlcyIsImluaXRhbFN0YXRlIiwidXNlckluZm8iLCJ1bmRlZmluZWQiLCJuZXdVc2VyIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlNFVF9VU0VSX0lORk8iLCJTRVRfTkVXX1VTRVIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/StateReducers.js\n");

/***/ }),

/***/ "./src/context/constants.js":
/*!**********************************!*\
  !*** ./src/context/constants.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reducerCases: () => (/* binding */ reducerCases)\n/* harmony export */ });\nconst reducerCases = {\n    SET_USER_INFO: \"SET_USER_INFO\",\n    SET_NEW_USER: \"SET_NEW_USER\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9jb25zdGFudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGVBQWU7SUFFeEJDLGVBQWdCO0lBQ2hCQyxjQUFnQjtBQUNwQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2hhdHNhcHAtY2xvbmUvLi9zcmMvY29udGV4dC9jb25zdGFudHMuanM/MDNkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcmVkdWNlckNhc2VzID0geyBcbiAgICAgXG4gICAgU0VUX1VTRVJfSU5GTyA6ICdTRVRfVVNFUl9JTkZPJyxcbiAgICBTRVRfTkVXX1VTRVIgIDogXCJTRVRfTkVXX1VTRVJcIlxufSJdLCJuYW1lcyI6WyJyZWR1Y2VyQ2FzZXMiLCJTRVRfVVNFUl9JTkZPIiwiU0VUX05FV19VU0VSIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/constants.js\n");

/***/ }),

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_StateReducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/StateReducers */ \"./src/context/StateReducers.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.StateProvider, {\n        initialState: _context_StateReducers__WEBPACK_IMPORTED_MODULE_2__.initalState,\n        reducer: _context_StateReducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Whatapp\"\n                    }, void 0, false, {\n                        fileName: \"/home/varun/CODING/MERN STACK/PROJECTS/WHATS-APP-CLONE/client/src/pages/_app.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"shortcut icon\",\n                        href: \"/favicon.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/varun/CODING/MERN STACK/PROJECTS/WHATS-APP-CLONE/client/src/pages/_app.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/varun/CODING/MERN STACK/PROJECTS/WHATS-APP-CLONE/client/src/pages/_app.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/varun/CODING/MERN STACK/PROJECTS/WHATS-APP-CLONE/client/src/pages/_app.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/varun/CODING/MERN STACK/PROJECTS/WHATS-APP-CLONE/client/src/pages/_app.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF1RDtBQUNRO0FBQ2pDO0FBQ0Q7QUFFZCxTQUFTSSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDTixnRUFBYUE7UUFBRU8sY0FBY0wsK0RBQVdBO1FBQUVELFNBQVNBLDhEQUFPQTs7MEJBQ3pELDhEQUFDRSxrREFBSUE7O2tDQUNILDhEQUFDSztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBZ0JDLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHakMsOERBQUNOO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUs5QiIsInNvdXJjZXMiOlsid2VicGFjazovL3doYXRzYXBwLWNsb25lLy4vc3JjL3BhZ2VzL19hcHAuanN4PzRjNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XG5pbXBvcnQgcmVkdWNlciwgeyBpbml0YWxTdGF0ZSB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVSZWR1Y2Vyc1wiO1xuaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxTdGF0ZVByb3ZpZGVyICBpbml0aWFsU3RhdGU9e2luaXRhbFN0YXRlfSByZWR1Y2VyPXtyZWR1Y2VyfSA+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPldoYXRhcHA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9mYXZpY29uLnBuZ1wiIC8+XG5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1N0YXRlUHJvdmlkZXI+XG5cbiAgKVxuXG59XG4iXSwibmFtZXMiOlsiU3RhdGVQcm92aWRlciIsInJlZHVjZXIiLCJpbml0YWxTdGF0ZSIsIkhlYWQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJpbml0aWFsU3RhdGUiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.jsx"));
module.exports = __webpack_exports__;

})();