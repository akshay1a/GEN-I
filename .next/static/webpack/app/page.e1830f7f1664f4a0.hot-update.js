"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Tags.tsx":
/*!*****************************!*\
  !*** ./components/Tags.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tags; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Tags(param) {\n    let { props, availableTags, onTagClick } = param;\n    _s();\n    const [selectedTags, setSelectedTags] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        props.value\n    ]);\n    const handleTagClick = (tag)=>{\n        const newSelectedTags = selectedTags.includes(tag) ? selectedTags.filter((selectedTag)=>selectedTag !== tag) : [\n            ...selectedTags,\n            tag\n        ];\n        setSelectedTags(newSelectedTags);\n        onTagClick(newSelectedTags.join(\", \")); // Update the prompt with selected tags\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex space-x-2 flex-wrap gap-2\",\n        children: availableTags.map((tag)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"\".concat(selectedTags.includes(tag) ? \"bg-white text-black\" : \"bg-black-300 text-white\", \" flex flex-col flex-wrap gap-3 hover:bg-green-900 border-2 border-gray-500 font-bold py-2 px-4 rounded-full border\"),\n                onClick: ()=>handleTagClick(tag),\n                children: tag\n            }, tag, false, {\n                fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\components\\\\Tags.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\components\\\\Tags.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(Tags, \"utBZA4RtatEUqNGsWTKRsBMUPMs=\");\n_c = Tags;\nvar _c;\n$RefreshReg$(_c, \"Tags\");\n // export default Tags;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGFncy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRWlDO0FBRWxCLFNBQVNDLEtBQUssS0FBb0M7UUFBcEMsRUFBRUMsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLFVBQVUsRUFBRSxHQUFwQzs7SUFDM0IsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBLENBQUM7UUFBQ0UsTUFBTUssS0FBSztLQUFDO0lBRTlELE1BQU1DLGlCQUFpQixDQUFDQztRQUN0QixNQUFNQyxrQkFBa0JMLGFBQWFNLFFBQVEsQ0FBQ0YsT0FDMUNKLGFBQWFPLE1BQU0sQ0FBQyxDQUFDQyxjQUFnQkEsZ0JBQWdCSixPQUNyRDtlQUFJSjtZQUFjSTtTQUFJO1FBQzFCSCxnQkFBZ0JJO1FBQ2hCTixXQUFXTSxnQkFBZ0JJLElBQUksQ0FBQyxRQUFRLHVDQUF1QztJQUNqRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNaYixjQUFjYyxHQUFHLENBQUMsQ0FBQ1Isb0JBQ2xCLDhEQUFDUztnQkFFQ0YsV0FBVyxHQUVWLE9BRENYLGFBQWFNLFFBQVEsQ0FBQ0YsT0FBTyx3QkFBd0IsMkJBQ3REO2dCQUNEVSxTQUFTLElBQU1YLGVBQWVDOzBCQUU3QkE7ZUFOSUE7Ozs7Ozs7Ozs7QUFXZjtHQTFCd0JSO0tBQUFBOzs7Q0E0QnhCLHVCQUF1QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RhZ3MudHN4PzMwOTUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhZ3MoeyBwcm9wcywgYXZhaWxhYmxlVGFncywgb25UYWdDbGljayB9KXtcclxuICBjb25zdCBbc2VsZWN0ZWRUYWdzLCBzZXRTZWxlY3RlZFRhZ3NdID0gdXNlU3RhdGUoW3Byb3BzLnZhbHVlXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhZ0NsaWNrID0gKHRhZykgPT4ge1xyXG4gICAgY29uc3QgbmV3U2VsZWN0ZWRUYWdzID0gc2VsZWN0ZWRUYWdzLmluY2x1ZGVzKHRhZylcclxuICAgICAgPyBzZWxlY3RlZFRhZ3MuZmlsdGVyKChzZWxlY3RlZFRhZykgPT4gc2VsZWN0ZWRUYWcgIT09IHRhZylcclxuICAgICAgOiBbLi4uc2VsZWN0ZWRUYWdzLCB0YWddO1xyXG4gICAgc2V0U2VsZWN0ZWRUYWdzKG5ld1NlbGVjdGVkVGFncyk7XHJcbiAgICBvblRhZ0NsaWNrKG5ld1NlbGVjdGVkVGFncy5qb2luKCcsICcpKTsgLy8gVXBkYXRlIHRoZSBwcm9tcHQgd2l0aCBzZWxlY3RlZCB0YWdzXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTIgZmxleC13cmFwIGdhcC0yXCI+XHJcbiAgICAgIHthdmFpbGFibGVUYWdzLm1hcCgodGFnKSA9PiAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAga2V5PXt0YWd9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICBzZWxlY3RlZFRhZ3MuaW5jbHVkZXModGFnKSA/ICdiZy13aGl0ZSB0ZXh0LWJsYWNrJyA6ICdiZy1ibGFjay0zMDAgdGV4dC13aGl0ZSdcclxuICAgICAgICAgIH0gZmxleCBmbGV4LWNvbCBmbGV4LXdyYXAgZ2FwLTMgaG92ZXI6YmctZ3JlZW4tOTAwIGJvcmRlci0yIGJvcmRlci1ncmF5LTUwMCBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtZnVsbCBib3JkZXJgfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGFnQ2xpY2sodGFnKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGFnfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBUYWdzOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRhZ3MiLCJwcm9wcyIsImF2YWlsYWJsZVRhZ3MiLCJvblRhZ0NsaWNrIiwic2VsZWN0ZWRUYWdzIiwic2V0U2VsZWN0ZWRUYWdzIiwidmFsdWUiLCJoYW5kbGVUYWdDbGljayIsInRhZyIsIm5ld1NlbGVjdGVkVGFncyIsImluY2x1ZGVzIiwiZmlsdGVyIiwic2VsZWN0ZWRUYWciLCJqb2luIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Tags.tsx\n"));

/***/ })

});