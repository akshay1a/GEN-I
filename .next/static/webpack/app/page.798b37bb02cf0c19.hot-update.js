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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tags; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Tags(param) {\n    let { value, availableTags, onTagClick } = param;\n    _s();\n    const [selectedTags, setSelectedTags] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        value\n    ]);\n    const handleTagClick = (tag)=>{\n        const newSelectedTags = selectedTags.includes(tag) ? selectedTags.filter((selectedTag)=>selectedTag !== tag) : [\n            ...selectedTags,\n            tag\n        ];\n        setSelectedTags(newSelectedTags);\n        onTagClick(newSelectedTags.join(\", \")); // Update the prompt with selected tags\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex space-x-2 flex-wrap gap-2\",\n        children: availableTags.map((tag)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"\".concat(selectedTags.includes(tag) ? \"bg-zinc-950 dark:bg-gray-600\" : \"light:bg-black\", \" flex flex-col flex-wrap gap-3 hover:bg-green-900 border-2 border-gray-500 font-bold py-2 px-4 rounded-full border\"),\n                onClick: ()=>handleTagClick(tag),\n                children: tag\n            }, tag, false, {\n                fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\components\\\\Tags.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\components\\\\Tags.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(Tags, \"EYspUSxAHAXh9/BCxy7f5ZhuBiA=\");\n_c = Tags;\nvar _c;\n$RefreshReg$(_c, \"Tags\");\n // export default Tags;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVGFncy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRWlDO0FBRWxCLFNBQVNDLEtBQUssS0FBb0M7UUFBcEMsRUFBRUMsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLFVBQVUsRUFBRSxHQUFwQzs7SUFDM0IsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBLENBQUM7UUFBQ0U7S0FBTTtJQUV4RCxNQUFNSyxpQkFBaUIsQ0FBQ0M7UUFDdEIsTUFBTUMsa0JBQWtCSixhQUFhSyxRQUFRLENBQUNGLE9BQzFDSCxhQUFhTSxNQUFNLENBQUMsQ0FBQ0MsY0FBZ0JBLGdCQUFnQkosT0FDckQ7ZUFBSUg7WUFBY0c7U0FBSTtRQUMxQkYsZ0JBQWdCRztRQUNoQkwsV0FBV0ssZ0JBQWdCSSxJQUFJLENBQUMsUUFBUSx1Q0FBdUM7SUFDakY7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWlosY0FBY2EsR0FBRyxDQUFDLENBQUNSLG9CQUNsQiw4REFBQ1M7Z0JBRUNGLFdBQVcsR0FFVixPQURDVixhQUFhSyxRQUFRLENBQUNGLE9BQU8saUNBQWlDLGtCQUMvRDtnQkFDRFUsU0FBUyxJQUFNWCxlQUFlQzswQkFFN0JBO2VBTklBOzs7Ozs7Ozs7O0FBV2Y7R0ExQndCUDtLQUFBQTs7O0NBNEJ4Qix1QkFBdUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYWdzLnRzeD8zMDk1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWdzKHsgdmFsdWUsIGF2YWlsYWJsZVRhZ3MsIG9uVGFnQ2xpY2sgfSl7XHJcbiAgY29uc3QgW3NlbGVjdGVkVGFncywgc2V0U2VsZWN0ZWRUYWdzXSA9IHVzZVN0YXRlKFt2YWx1ZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVUYWdDbGljayA9ICh0YWcpID0+IHtcclxuICAgIGNvbnN0IG5ld1NlbGVjdGVkVGFncyA9IHNlbGVjdGVkVGFncy5pbmNsdWRlcyh0YWcpXHJcbiAgICAgID8gc2VsZWN0ZWRUYWdzLmZpbHRlcigoc2VsZWN0ZWRUYWcpID0+IHNlbGVjdGVkVGFnICE9PSB0YWcpXHJcbiAgICAgIDogWy4uLnNlbGVjdGVkVGFncywgdGFnXTtcclxuICAgIHNldFNlbGVjdGVkVGFncyhuZXdTZWxlY3RlZFRhZ3MpO1xyXG4gICAgb25UYWdDbGljayhuZXdTZWxlY3RlZFRhZ3Muam9pbignLCAnKSk7IC8vIFVwZGF0ZSB0aGUgcHJvbXB0IHdpdGggc2VsZWN0ZWQgdGFnc1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yIGZsZXgtd3JhcCBnYXAtMlwiPlxyXG4gICAgICB7YXZhaWxhYmxlVGFncy5tYXAoKHRhZykgPT4gKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGtleT17dGFnfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRUYWdzLmluY2x1ZGVzKHRhZykgPyAnYmctemluYy05NTAgZGFyazpiZy1ncmF5LTYwMCcgOiAnbGlnaHQ6YmctYmxhY2snXHJcbiAgICAgICAgICB9IGZsZXggZmxleC1jb2wgZmxleC13cmFwIGdhcC0zIGhvdmVyOmJnLWdyZWVuLTkwMCBib3JkZXItMiBib3JkZXItZ3JheS01MDAgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWZ1bGwgYm9yZGVyYH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRhZ0NsaWNrKHRhZyl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RhZ31cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgVGFnczsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJUYWdzIiwidmFsdWUiLCJhdmFpbGFibGVUYWdzIiwib25UYWdDbGljayIsInNlbGVjdGVkVGFncyIsInNldFNlbGVjdGVkVGFncyIsImhhbmRsZVRhZ0NsaWNrIiwidGFnIiwibmV3U2VsZWN0ZWRUYWdzIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJzZWxlY3RlZFRhZyIsImpvaW4iLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Tags.tsx\n"));

/***/ })

});