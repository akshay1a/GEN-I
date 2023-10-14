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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Client; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/skeleton */ \"(app-pages-browser)/./components/ui/skeleton.tsx\");\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./components/ui/textarea.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./components/ui/label.tsx\");\n/* harmony import */ var _components_Tags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Tags */ \"(app-pages-browser)/./components/Tags.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst availableTags = [\n    \"4k high res\",\n    \"ultra hd\",\n    \"blurry\",\n    \"dynamic lighting\",\n    \"neon\",\n    \"animated\",\n    \"realistic\",\n    \"cartoon\",\n    \"3d animated\",\n    \"cyberpunk\",\n    \"grayscale\",\n    \"nostalgic\",\n    \"streets\",\n    \"foggy\",\n    \"rainy\",\n    \"mountains\",\n    \"public\",\n    \"crowded\",\n    \"quiet\"\n];\nfunction Client() {\n    _s();\n    const [prompt, setPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Tokyo streets, 4k high res, ultra hd, dynamic lighting\");\n    const handleTagClick = (selectedTags)=>{\n        setPrompt(selectedTags);\n    };\n    // Japanese mountains, 4k high res, ultra hd, dynamic lighting\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"/default.jpg\");\n    const API_TOKEN = \"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\";\n    const generateImage = async (e)=>{\n        e.preventDefault();\n        setImage(\"/default.jpg\");\n        setLoading(true);\n        const res = await fetch(\"https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0\", {\n            method: \"POST\",\n            headers: {\n                \"content-type\": \"application/json\",\n                Authorization: \"Bearer \".concat(API_TOKEN)\n            },\n            body: JSON.stringify({\n                inputs: prompt\n            })\n        });\n        const blob = await res.blob();\n        setImage(URL.createObjectURL(blob));\n        setLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"m-4 md:m-10 \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-4 md:gap-12\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-2xl md:text-4xl font-bold flex flex-col justify-start items-center mt-8\",\n                    children: \"Image Generator\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col md:flex-row justify-center items-start\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-start  md:mr-4 mt-4 md:order-1 order-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    onSubmit: generateImage,\n                                    className: \"p-1 flex flex-col h-full gap-5 items-start h-[40rem] md:max-w-[50rem] \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                            htmlFor: \"label\",\n                                            children: \"Your Prompt!\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_3__.Textarea, {\n                                            className: \"text-sm  min-h-[10rem] md:text-md bg-zinc-900/10 dark:bg-zinc-50/10\",\n                                            placeholder: \"Type your prompt here to generate image.\",\n                                            value: prompt,\n                                            onChange: (e)=>setPrompt(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: \"w-fit px-5 py-2 bg-green-600 hover:opacity-70 rounded-full \",\n                                            children: \"Generate Image\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tags__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                value: prompt,\n                                                availableTags: availableTags,\n                                                onTagClick: handleTagClick\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" flex justify-center md:order-2 order-1\",\n                            children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {\n                                className: \"w-[380px] h-[380px] md:w-[450px] md:h-[450px] rounded-lg\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: image,\n                                    alt: prompt,\n                                    className: \"rounded-lg border-4 border-white\",\n                                    height: \"450px\",\n                                    width: \"450px\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Client, \"XjE9KWVM+oXkgrgphxJughFA0Ck=\");\n_c = Client;\nvar _c;\n$RefreshReg$(_c, \"Client\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9DbGllbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFaUM7QUFDbUI7QUFDQTtBQUNOO0FBQ1Q7QUFFckMsTUFBTUssZ0JBQWdCO0lBQUM7SUFBZTtJQUFZO0lBQ2xEO0lBQW9CO0lBQVE7SUFBWTtJQUFhO0lBQ3JEO0lBQWU7SUFBYTtJQUFhO0lBQWE7SUFDdEQ7SUFBUztJQUFTO0lBQWE7SUFBVTtJQUFXO0NBQVE7QUFFN0MsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FDbEM7SUFFRixNQUFNUyxpQkFBaUIsQ0FBQ0M7UUFDdEJGLFVBQVVFO0lBQ1o7SUFDQSw4REFBOEQ7SUFDOUQsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2EsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNZSxZQUFZO0lBRWxCLE1BQU1DLGdCQUFnQixPQUFPQztRQUMzQkEsRUFBRUMsY0FBYztRQUNoQkosU0FBUztRQUNURixXQUFXO1FBQ1gsTUFBTU8sTUFBTSxNQUFNQyxNQUNoQix3RkFDQTtZQUNFQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQkMsZUFBZSxVQUFvQixPQUFWUjtZQUMzQjtZQUNBUyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLFFBQVFwQjtZQUFPO1FBQ3hDO1FBRUYsTUFBTXFCLE9BQU8sTUFBTVQsSUFBSVMsSUFBSTtRQUMzQmQsU0FBU2UsSUFBSUMsZUFBZSxDQUFDRjtRQUM3QmhCLFdBQVc7SUFDYjtJQUVBLHFCQUNFLDhEQUFDbUI7UUFBS0MsV0FBVTtrQkFDZCw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFJRCxXQUFVOzhCQUErRTs7Ozs7OzhCQUc5Riw4REFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBSUQsV0FBVTtzQ0FDYiw0RUFBQ0M7Z0NBQUlELFdBQVU7MENBQ2IsNEVBQUNFO29DQUNDQyxVQUFVbkI7b0NBQ1ZnQixXQUFVOztzREFFViw4REFBQzdCLHVEQUFLQTs0Q0FBQ2lDLFNBQVE7c0RBQVE7Ozs7OztzREFDdkIsOERBQUNsQyw2REFBUUE7NENBQ1A4QixXQUFVOzRDQUNWSyxhQUFZOzRDQUNaQyxPQUFPL0I7NENBQ1BnQyxVQUFVLENBQUN0QixJQUFNVCxVQUFVUyxFQUFFdUIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7c0RBRzNDLDhEQUFDRzs0Q0FDQ0MsTUFBSzs0Q0FDTFYsV0FBVTtzREFDWDs7Ozs7O3NEQUdELDhEQUFDQztzREFDQyw0RUFBQzdCLHdEQUFJQTtnREFBQ2tDLE9BQU8vQjtnREFBUUYsZUFBZUE7Z0RBQWVzQyxZQUFZbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLdkUsOERBQUN3Qjs0QkFBSUQsV0FBVTtzQ0FDWnJCLHdCQUNDLDhEQUFDViw2REFBUUE7Z0NBQUMrQixXQUFVOzs7OztxREFFcEIsOERBQUNDOzBDQUNHLDRFQUFDVztvQ0FDREMsS0FBS2hDO29DQUNMaUMsS0FBS3ZDO29DQUNMeUIsV0FBVTtvQ0FDVmUsUUFBUTtvQ0FDUkMsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3hCO0dBckZ3QjFDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9DbGllbnQudHN4Pzk4MTUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTa2VsZXRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvc2tlbGV0b25cIjtcclxuaW1wb3J0IHsgVGV4dGFyZWEgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RleHRhcmVhXCI7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9sYWJlbFwiO1xyXG5pbXBvcnQgVGFncyBmcm9tICdAL2NvbXBvbmVudHMvVGFncyc7XHJcblxyXG5jb25zdCBhdmFpbGFibGVUYWdzID0gWyc0ayBoaWdoIHJlcycsICd1bHRyYSBoZCcsICdibHVycnknLCBcclxuJ2R5bmFtaWMgbGlnaHRpbmcnLCAnbmVvbicsICdhbmltYXRlZCcsICdyZWFsaXN0aWMnLCAnY2FydG9vbicsXHJcbiczZCBhbmltYXRlZCcsICdjeWJlcnB1bmsnLCAnZ3JheXNjYWxlJywgJ25vc3RhbGdpYycsICdzdHJlZXRzJyxcclxuJ2ZvZ2d5JywgJ3JhaW55JywgJ21vdW50YWlucycsICdwdWJsaWMnLCAnY3Jvd2RlZCcsICdxdWlldCddOyBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsaWVudCgpIHtcclxuICBjb25zdCBbcHJvbXB0LCBzZXRQcm9tcHRdID0gdXNlU3RhdGUoXHJcbiAgICBcIlRva3lvIHN0cmVldHMsIDRrIGhpZ2ggcmVzLCB1bHRyYSBoZCwgZHluYW1pYyBsaWdodGluZ1wiXHJcbiAgKTtcclxuICBjb25zdCBoYW5kbGVUYWdDbGljayA9IChzZWxlY3RlZFRhZ3MpID0+IHtcclxuICAgIHNldFByb21wdChzZWxlY3RlZFRhZ3MpO1xyXG4gIH07XHJcbiAgLy8gSmFwYW5lc2UgbW91bnRhaW5zLCA0ayBoaWdoIHJlcywgdWx0cmEgaGQsIGR5bmFtaWMgbGlnaHRpbmdcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShcIi9kZWZhdWx0LmpwZ1wiKTtcclxuICBcclxuICBjb25zdCBBUElfVE9LRU4gPSBcImhmX3hkUkdvVG5Ub3BZa1JsVUdmRURYdlZIaWlqUU5oZFhkd2NcIjtcclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVJbWFnZSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJbWFnZShcIi9kZWZhdWx0LmpwZ1wiKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgXCJodHRwczovL2FwaS1pbmZlcmVuY2UuaHVnZ2luZ2ZhY2UuY28vbW9kZWxzL3N0YWJpbGl0eWFpL3N0YWJsZS1kaWZmdXNpb24teGwtYmFzZS0xLjBcIixcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7QVBJX1RPS0VOfWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlucHV0czogcHJvbXB0IH0pLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlcy5ibG9iKCk7XHJcbiAgICBzZXRJbWFnZShVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJtLTQgbWQ6bS0xMCBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00IG1kOmdhcC0xMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIGZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgbXQtOFwiPlxyXG4gICAgICAgICAgSW1hZ2UgR2VuZXJhdG9yXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgIG1kOm1yLTQgbXQtNCBtZDpvcmRlci0xIG9yZGVyLTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2dlbmVyYXRlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEgZmxleCBmbGV4LWNvbCBoLWZ1bGwgZ2FwLTUgaXRlbXMtc3RhcnQgaC1bNDByZW1dIG1kOm1heC13LVs1MHJlbV0gXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGFiZWwgaHRtbEZvcj1cImxhYmVsXCI+WW91ciBQcm9tcHQhPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxUZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtICBtaW4taC1bMTByZW1dIG1kOnRleHQtbWQgYmctemluYy05MDAvMTAgZGFyazpiZy16aW5jLTUwLzEwXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgcHJvbXB0IGhlcmUgdG8gZ2VuZXJhdGUgaW1hZ2UuXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb21wdH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcm9tcHQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1maXQgcHgtNSBweS0yIGJnLWdyZWVuLTYwMCBob3ZlcjpvcGFjaXR5LTcwIHJvdW5kZWQtZnVsbCBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBHZW5lcmF0ZSBJbWFnZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8VGFncyB2YWx1ZT17cHJvbXB0fSBhdmFpbGFibGVUYWdzPXthdmFpbGFibGVUYWdzfSBvblRhZ0NsaWNrPXtoYW5kbGVUYWdDbGlja30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgganVzdGlmeS1jZW50ZXIgbWQ6b3JkZXItMiBvcmRlci0xXCI+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJ3LVszODBweF0gaC1bMzgwcHhdIG1kOnctWzQ1MHB4XSBtZDpoLVs0NTBweF0gcm91bmRlZC1sZ1wiIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX0gXHJcbiAgICAgICAgICAgICAgICAgIGFsdD17cHJvbXB0fSBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXItNCBib3JkZXItd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ICc0NTBweCdcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9JzQ1MHB4JyAgXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTa2VsZXRvbiIsIlRleHRhcmVhIiwiTGFiZWwiLCJUYWdzIiwiYXZhaWxhYmxlVGFncyIsIkNsaWVudCIsInByb21wdCIsInNldFByb21wdCIsImhhbmRsZVRhZ0NsaWNrIiwic2VsZWN0ZWRUYWdzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpbWFnZSIsInNldEltYWdlIiwiQVBJX1RPS0VOIiwiZ2VuZXJhdGVJbWFnZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImlucHV0cyIsImJsb2IiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiaHRtbEZvciIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiIsInR5cGUiLCJvblRhZ0NsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwiaGVpZ2h0Iiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Client.tsx\n"));

/***/ })

});