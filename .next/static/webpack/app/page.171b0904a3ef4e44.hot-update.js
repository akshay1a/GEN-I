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

/***/ "(app-pages-browser)/./app/Client.tsx":
/*!************************!*\
  !*** ./app/Client.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Client; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst availableTags = [\n    \"4k high res\",\n    \"ultra hd\",\n    \"blurry\",\n    \"dynamic lighting\",\n    \"neon\",\n    \"animated\",\n    \"realistic\",\n    \"cartoon\",\n    \"3d animated\",\n    \"cyberpunk\",\n    \"grayscale\",\n    \"nostalgic\",\n    \"streets\",\n    \"foggy\",\n    \"rainy\",\n    \"mountains\",\n    \"public\",\n    \"crowded\",\n    \"quiet\"\n];\nfunction Client() {\n    _s();\n    const [prompt, setPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Tokyo streets, 4k high res, ultra hd, dynamic lighting\");\n    const handleTagClick = (selectedTags)=>{\n        console.log(prompt + \" 1\");\n        setPrompt(selectedTags);\n    };\n    const handleOnChange = (e)=>{\n        console.log(prompt + \" 2\");\n        setPrompt(e.target.value);\n    };\n    // Japanese mountains, 4k high res, ultra hd, dynamic lighting\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"/default.jpg\");\n    const API_TOKEN = \"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\";\n    const generateImage = async (e)=>{\n        e.preventDefault();\n        setImage(\"/default.jpg\");\n        setLoading(true);\n        const res = await fetch(\"https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0\", {\n            method: \"POST\",\n            headers: {\n                \"content-type\": \"application/json\",\n                Authorization: \"Bearer \".concat(API_TOKEN)\n            },\n            body: JSON.stringify({\n                inputs: prompt\n            })\n        });\n        const blob = await res.blob();\n        setImage(URL.createObjectURL(blob));\n        setLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"m-4 md:m-10 \"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(Client, \"XjE9KWVM+oXkgrgphxJughFA0Ck=\");\n_c = Client;\nvar _c;\n$RefreshReg$(_c, \"Client\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9DbGllbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVpQztBQU1qQyxNQUFNQyxnQkFBZ0I7SUFBQztJQUFlO0lBQVk7SUFDbEQ7SUFBb0I7SUFBUTtJQUFZO0lBQWE7SUFDckQ7SUFBZTtJQUFhO0lBQWE7SUFBYTtJQUN0RDtJQUFTO0lBQVM7SUFBYTtJQUFVO0lBQVc7Q0FBUTtBQUU3QyxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUNsQztJQUVGLE1BQU1LLGlCQUFpQixDQUFDQztRQUN0QkMsUUFBUUMsR0FBRyxDQUFDTCxTQUFTO1FBQ3JCQyxVQUFVRTtJQUNaO0lBQ0EsTUFBTUcsaUJBQWlCLENBQUNDO1FBQ3RCSCxRQUFRQyxHQUFHLENBQUNMLFNBQVM7UUFDckJDLFVBQVVNLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUMxQjtJQUNBLDhEQUE4RDtJQUM5RCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDZSxPQUFPQyxTQUFTLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNaUIsWUFBWTtJQUVsQixNQUFNQyxnQkFBZ0IsT0FBT1I7UUFDM0JBLEVBQUVTLGNBQWM7UUFDaEJILFNBQVM7UUFDVEYsV0FBVztRQUNYLE1BQU1NLE1BQU0sTUFBTUMsTUFDaEIsd0ZBQ0E7WUFDRUMsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtnQkFDaEJDLGVBQWUsVUFBb0IsT0FBVlA7WUFDM0I7WUFDQVEsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUFFQyxRQUFRekI7WUFBTztRQUN4QztRQUVGLE1BQU0wQixPQUFPLE1BQU1ULElBQUlTLElBQUk7UUFDM0JiLFNBQVNjLElBQUlDLGVBQWUsQ0FBQ0Y7UUFDN0JmLFdBQVc7SUFDYjtJQUVBLHFCQUNFLDhEQUFDa0I7UUFBS0MsV0FBVTs7Ozs7O0FBbURwQjtHQTFGd0IvQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvQ2xpZW50LnRzeD85ODE1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3NrZWxldG9uXCI7XHJcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90ZXh0YXJlYVwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvbGFiZWxcIjtcclxuaW1wb3J0IFRhZ3MgZnJvbSAnQC9jb21wb25lbnRzL1RhZ3MnO1xyXG5cclxuY29uc3QgYXZhaWxhYmxlVGFncyA9IFsnNGsgaGlnaCByZXMnLCAndWx0cmEgaGQnLCAnYmx1cnJ5JywgXHJcbidkeW5hbWljIGxpZ2h0aW5nJywgJ25lb24nLCAnYW5pbWF0ZWQnLCAncmVhbGlzdGljJywgJ2NhcnRvb24nLFxyXG4nM2QgYW5pbWF0ZWQnLCAnY3liZXJwdW5rJywgJ2dyYXlzY2FsZScsICdub3N0YWxnaWMnLCAnc3RyZWV0cycsXHJcbidmb2dneScsICdyYWlueScsICdtb3VudGFpbnMnLCAncHVibGljJywgJ2Nyb3dkZWQnLCAncXVpZXQnXTsgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGllbnQoKSB7XHJcbiAgY29uc3QgW3Byb21wdCwgc2V0UHJvbXB0XSA9IHVzZVN0YXRlKFxyXG4gICAgXCJUb2t5byBzdHJlZXRzLCA0ayBoaWdoIHJlcywgdWx0cmEgaGQsIGR5bmFtaWMgbGlnaHRpbmdcIlxyXG4gICk7XHJcbiAgY29uc3QgaGFuZGxlVGFnQ2xpY2sgPSAoc2VsZWN0ZWRUYWdzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9tcHQgKyBcIiAxXCIpXHJcbiAgICBzZXRQcm9tcHQoc2VsZWN0ZWRUYWdzKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHByb21wdCArIFwiIDJcIilcclxuICAgIHNldFByb21wdChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIC8vIEphcGFuZXNlIG1vdW50YWlucywgNGsgaGlnaCByZXMsIHVsdHJhIGhkLCBkeW5hbWljIGxpZ2h0aW5nXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoXCIvZGVmYXVsdC5qcGdcIik7XHJcbiAgXHJcbiAgY29uc3QgQVBJX1RPS0VOID0gXCJoZl94ZFJHb1RuVG9wWWtSbFVHZkVEWHZWSGlpalFOaGRYZHdjXCI7XHJcblxyXG4gIGNvbnN0IGdlbmVyYXRlSW1hZ2UgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0SW1hZ2UoXCIvZGVmYXVsdC5qcGdcIik7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIFwiaHR0cHM6Ly9hcGktaW5mZXJlbmNlLmh1Z2dpbmdmYWNlLmNvL21vZGVscy9zdGFiaWxpdHlhaS9zdGFibGUtZGlmZnVzaW9uLXhsLWJhc2UtMS4wXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke0FQSV9UT0tFTn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpbnB1dHM6IHByb21wdCB9KSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGJsb2IgPSBhd2FpdCByZXMuYmxvYigpO1xyXG4gICAgc2V0SW1hZ2UoVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwibS00IG1kOm0tMTAgXCI+XHJcbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTQgbWQ6Z2FwLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTR4bCBmb250LWJvbGQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC04XCI+XHJcbiAgICAgICAgICBJbWFnZSBHZW5lcmF0b3JcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCAgbWQ6bXItNCBtdC00IG1kOm9yZGVyLTEgb3JkZXItMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17Z2VuZXJhdGVJbWFnZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSBmbGV4IGZsZXgtY29sIGgtZnVsbCBnYXAtNSBpdGVtcy1zdGFydCBoLVs0MHJlbV0gbWQ6bWF4LXctWzUwcmVtXSBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwibGFiZWxcIj5Zb3VyIFByb21wdCE8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gIG1pbi1oLVsxMHJlbV0gbWQ6dGV4dC1tZCBiZy16aW5jLTkwMC8xMCBkYXJrOmJnLXppbmMtNTAvMTBcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBwcm9tcHQgaGVyZSB0byBnZW5lcmF0ZSBpbWFnZS5cIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvbXB0fVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZpdCBweC01IHB5LTIgYmctZ3JlZW4tNjAwIGhvdmVyOm9wYWNpdHktNzAgcm91bmRlZC1mdWxsIFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEdlbmVyYXRlIEltYWdlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWdzIHZhbHVlPXtwcm9tcHR9IGF2YWlsYWJsZVRhZ3M9e2F2YWlsYWJsZVRhZ3N9IG9uVGFnQ2xpY2s9e2hhbmRsZVRhZ0NsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBqdXN0aWZ5LWNlbnRlciBtZDpvcmRlci0yIG9yZGVyLTFcIj5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPFNrZWxldG9uIGNsYXNzTmFtZT1cInctWzM4MHB4XSBoLVszODBweF0gbWQ6dy1bNDUwcHhdIG1kOmgtWzQ1MHB4XSByb3VuZGVkLWxnXCIgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIFxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlfSBcclxuICAgICAgICAgICAgICAgICAgYWx0PXtwcm9tcHR9IFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJvcmRlci00IGJvcmRlci16aW5jLTk1MCBkYXJrOmJvcmRlci13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD0gJzQ1MHB4J1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aD0nNDUwcHgnICBcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJhdmFpbGFibGVUYWdzIiwiQ2xpZW50IiwicHJvbXB0Iiwic2V0UHJvbXB0IiwiaGFuZGxlVGFnQ2xpY2siLCJzZWxlY3RlZFRhZ3MiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlT25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImltYWdlIiwic2V0SW1hZ2UiLCJBUElfVE9LRU4iLCJnZW5lcmF0ZUltYWdlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnB1dHMiLCJibG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibWFpbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Client.tsx\n"));

/***/ })

});