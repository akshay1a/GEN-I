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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Client; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/skeleton */ \"(app-pages-browser)/./components/ui/skeleton.tsx\");\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./components/ui/textarea.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./components/ui/label.tsx\");\n/* harmony import */ var _components_Tags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Tags */ \"(app-pages-browser)/./components/Tags.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst availableTags = [\n    \"4k high res\",\n    \"ultra hd\",\n    \"blurry\",\n    \"dynamic lighting\",\n    \"neon\",\n    \"animated\",\n    \"realistic\",\n    \"cartoon\",\n    \"3d animated\",\n    \"cyberpunk\",\n    \"grayscale\",\n    \"nostalgic\",\n    \"streets\",\n    \"foggy\",\n    \"rainy\",\n    \"mountains\",\n    \"public\",\n    \"crowded\",\n    \"quiet\"\n];\nfunction Client() {\n    _s();\n    const [prompt, setPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Tokyo streets, 4k high res, ultra hd, dynamic lighting\");\n    const handleTagClick = (selectedTags)=>{\n        setPrompt(selectedTags);\n    };\n    // Japanese mountains, 4k high res, ultra hd, dynamic lighting\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"/default.jpg\");\n    const API_TOKEN = \"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\";\n    const generateImage = async (e)=>{\n        e.preventDefault();\n        setImage(\"/default.jpg\");\n        setLoading(true);\n        const res = await fetch(\"https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0\", {\n            method: \"POST\",\n            headers: {\n                \"content-type\": \"application/json\",\n                Authorization: \"Bearer \".concat(API_TOKEN)\n            },\n            body: JSON.stringify({\n                inputs: prompt\n            })\n        });\n        const blob = await res.blob();\n        setImage(URL.createObjectURL(blob));\n        setLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"m-4 md:m-10 \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-4 md:gap-12\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-2xl md:text-4xl font-bold flex flex-col justify-start items-center mt-8\",\n                    children: \"Image Generator\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col md:flex-row justify-center items-start\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-start  md:mr-4 mt-4 md:order-1 order-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    onSubmit: generateImage,\n                                    className: \"p-1 flex flex-col h-full gap-5 items-start h-[40rem] md:max-w-[50rem] \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_4__.Label, {\n                                            htmlFor: \"label\",\n                                            children: \"Your Prompt!\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                                            lineNumber: 60,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_3__.Textarea, {\n                                            className: \"text-sm  min-h-[10rem] md:text-md bg-zinc-900/10 dark:bg-zinc-50/10\",\n                                            placeholder: \"Type your prompt here to generate image.\",\n                                            value: prompt,\n                                            onChange: (e)=>setPrompt(e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: \"w-fit px-5 py-2 bg-green-600 hover:opacity-70 rounded-full \",\n                                            children: \"Generate Image\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                \"console.log(prompt)\",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tags__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                    value: prompt,\n                                                    availableTags: availableTags,\n                                                    onTagClick: handleTagClick\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" flex justify-center md:order-2 order-1\",\n                            children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_2__.Skeleton, {\n                                className: \"w-[] h-[] md:w-[450px] md:h-[450px] rounded-lg\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: image,\n                                    alt: prompt,\n                                    className: \"rounded-lg border-4 border-white\",\n                                    height: \"450px\",\n                                    width: \"450px\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Client.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Client, \"XjE9KWVM+oXkgrgphxJughFA0Ck=\");\n_c = Client;\nvar _c;\n$RefreshReg$(_c, \"Client\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9DbGllbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFaUM7QUFDbUI7QUFDQTtBQUNOO0FBQ1Q7QUFFckMsTUFBTUssZ0JBQWdCO0lBQUM7SUFBZTtJQUFZO0lBQ2xEO0lBQW9CO0lBQVE7SUFBWTtJQUFhO0lBQ3JEO0lBQWU7SUFBYTtJQUFhO0lBQWE7SUFDdEQ7SUFBUztJQUFTO0lBQWE7SUFBVTtJQUFXO0NBQVE7QUFFN0MsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FDbEM7SUFFRixNQUFNUyxpQkFBaUIsQ0FBQ0M7UUFDdEJGLFVBQVVFO0lBQ1o7SUFDQSw4REFBOEQ7SUFDOUQsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2EsT0FBT0MsU0FBUyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNZSxZQUFZO0lBRWxCLE1BQU1DLGdCQUFnQixPQUFPQztRQUMzQkEsRUFBRUMsY0FBYztRQUNoQkosU0FBUztRQUNURixXQUFXO1FBQ1gsTUFBTU8sTUFBTSxNQUFNQyxNQUNoQix3RkFDQTtZQUNFQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQkMsZUFBZSxVQUFvQixPQUFWUjtZQUMzQjtZQUNBUyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLFFBQVFwQjtZQUFPO1FBQ3hDO1FBRUYsTUFBTXFCLE9BQU8sTUFBTVQsSUFBSVMsSUFBSTtRQUMzQmQsU0FBU2UsSUFBSUMsZUFBZSxDQUFDRjtRQUM3QmhCLFdBQVc7SUFDYjtJQUVBLHFCQUNFLDhEQUFDbUI7UUFBS0MsV0FBVTtrQkFDZCw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFJRCxXQUFVOzhCQUErRTs7Ozs7OzhCQUc5Riw4REFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBSUQsV0FBVTtzQ0FDYiw0RUFBQ0M7Z0NBQUlELFdBQVU7MENBQ2IsNEVBQUNFO29DQUNDQyxVQUFVbkI7b0NBQ1ZnQixXQUFVOztzREFFViw4REFBQzdCLHVEQUFLQTs0Q0FBQ2lDLFNBQVE7c0RBQVE7Ozs7OztzREFDdkIsOERBQUNsQyw2REFBUUE7NENBQ1A4QixXQUFVOzRDQUNWSyxhQUFZOzRDQUNaQyxPQUFPL0I7NENBQ1BnQyxVQUFVLENBQUN0QixJQUFNVCxVQUFVUyxFQUFFdUIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7c0RBRTNDLDhEQUFDRzs0Q0FDQ0MsTUFBSzs0Q0FDTFYsV0FBVTtzREFDWDs7Ozs7O3NEQUdELDhEQUFDQzs7Z0RBQUk7OERBRUgsOERBQUM3Qix3REFBSUE7b0RBQUNrQyxPQUFPL0I7b0RBQVFGLGVBQWVBO29EQUFlc0MsWUFBWWxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUt2RSw4REFBQ3dCOzRCQUFJRCxXQUFVO3NDQUNackIsd0JBQ0MsOERBQUNWLDZEQUFRQTtnQ0FBQytCLFdBQVU7Ozs7O3FEQUVwQiw4REFBQ0M7MENBQ0csNEVBQUNXO29DQUNEQyxLQUFLaEM7b0NBQ0xpQyxLQUFLdkM7b0NBQ0x5QixXQUFVO29DQUNWZSxRQUFRO29DQUNSQyxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTeEI7R0FyRndCMUM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0NsaWVudC50c3g/OTgxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNrZWxldG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9za2VsZXRvblwiO1xyXG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGV4dGFyZWFcIjtcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2xhYmVsXCI7XHJcbmltcG9ydCBUYWdzIGZyb20gJ0AvY29tcG9uZW50cy9UYWdzJztcclxuXHJcbmNvbnN0IGF2YWlsYWJsZVRhZ3MgPSBbJzRrIGhpZ2ggcmVzJywgJ3VsdHJhIGhkJywgJ2JsdXJyeScsIFxyXG4nZHluYW1pYyBsaWdodGluZycsICduZW9uJywgJ2FuaW1hdGVkJywgJ3JlYWxpc3RpYycsICdjYXJ0b29uJyxcclxuJzNkIGFuaW1hdGVkJywgJ2N5YmVycHVuaycsICdncmF5c2NhbGUnLCAnbm9zdGFsZ2ljJywgJ3N0cmVldHMnLFxyXG4nZm9nZ3knLCAncmFpbnknLCAnbW91bnRhaW5zJywgJ3B1YmxpYycsICdjcm93ZGVkJywgJ3F1aWV0J107IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpZW50KCkge1xyXG4gIGNvbnN0IFtwcm9tcHQsIHNldFByb21wdF0gPSB1c2VTdGF0ZShcclxuICAgIFwiVG9reW8gc3RyZWV0cywgNGsgaGlnaCByZXMsIHVsdHJhIGhkLCBkeW5hbWljIGxpZ2h0aW5nXCJcclxuICApO1xyXG4gIGNvbnN0IGhhbmRsZVRhZ0NsaWNrID0gKHNlbGVjdGVkVGFncykgPT4ge1xyXG4gICAgc2V0UHJvbXB0KHNlbGVjdGVkVGFncyk7XHJcbiAgfTtcclxuICAvLyBKYXBhbmVzZSBtb3VudGFpbnMsIDRrIGhpZ2ggcmVzLCB1bHRyYSBoZCwgZHluYW1pYyBsaWdodGluZ1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKFwiL2RlZmF1bHQuanBnXCIpO1xyXG4gIFxyXG4gIGNvbnN0IEFQSV9UT0tFTiA9IFwiaGZfeGRSR29UblRvcFlrUmxVR2ZFRFh2VkhpaWpRTmhkWGR3Y1wiO1xyXG5cclxuICBjb25zdCBnZW5lcmF0ZUltYWdlID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldEltYWdlKFwiL2RlZmF1bHQuanBnXCIpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBcImh0dHBzOi8vYXBpLWluZmVyZW5jZS5odWdnaW5nZmFjZS5jby9tb2RlbHMvc3RhYmlsaXR5YWkvc3RhYmxlLWRpZmZ1c2lvbi14bC1iYXNlLTEuMFwiLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtBUElfVE9LRU59YCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaW5wdXRzOiBwcm9tcHQgfSksXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICBjb25zdCBibG9iID0gYXdhaXQgcmVzLmJsb2IoKTtcclxuICAgIHNldEltYWdlKFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYikpO1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cIm0tNCBtZDptLTEwIFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTQgbWQ6Z2FwLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTR4bCBmb250LWJvbGQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBtdC04XCI+XHJcbiAgICAgICAgICBJbWFnZSBHZW5lcmF0b3JcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydCAgbWQ6bXItNCBtdC00IG1kOm9yZGVyLTEgb3JkZXItMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17Z2VuZXJhdGVJbWFnZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSBmbGV4IGZsZXgtY29sIGgtZnVsbCBnYXAtNSBpdGVtcy1zdGFydCBoLVs0MHJlbV0gbWQ6bWF4LXctWzUwcmVtXSBcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwibGFiZWxcIj5Zb3VyIFByb21wdCE8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPFRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gIG1pbi1oLVsxMHJlbV0gbWQ6dGV4dC1tZCBiZy16aW5jLTkwMC8xMCBkYXJrOmJnLXppbmMtNTAvMTBcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBwcm9tcHQgaGVyZSB0byBnZW5lcmF0ZSBpbWFnZS5cIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvbXB0fVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByb21wdChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1maXQgcHgtNSBweS0yIGJnLWdyZWVuLTYwMCBob3ZlcjpvcGFjaXR5LTcwIHJvdW5kZWQtZnVsbCBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBHZW5lcmF0ZSBJbWFnZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9tcHQpXHJcbiAgICAgICAgICAgICAgICAgIDxUYWdzIHZhbHVlPXtwcm9tcHR9IGF2YWlsYWJsZVRhZ3M9e2F2YWlsYWJsZVRhZ3N9IG9uVGFnQ2xpY2s9e2hhbmRsZVRhZ0NsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCBqdXN0aWZ5LWNlbnRlciBtZDpvcmRlci0yIG9yZGVyLTFcIj5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgPFNrZWxldG9uIGNsYXNzTmFtZT1cInctW10gaC1bXSBtZDp3LVs0NTBweF0gbWQ6aC1bNDUwcHhdIHJvdW5kZWQtbGdcIiAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9IFxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e3Byb21wdH0gXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYm9yZGVyLTQgYm9yZGVyLXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PSAnNDUwcHgnXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPSc0NTBweCcgIFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiU2tlbGV0b24iLCJUZXh0YXJlYSIsIkxhYmVsIiwiVGFncyIsImF2YWlsYWJsZVRhZ3MiLCJDbGllbnQiLCJwcm9tcHQiLCJzZXRQcm9tcHQiLCJoYW5kbGVUYWdDbGljayIsInNlbGVjdGVkVGFncyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaW1hZ2UiLCJzZXRJbWFnZSIsIkFQSV9UT0tFTiIsImdlbmVyYXRlSW1hZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnB1dHMiLCJibG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImh0bWxGb3IiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJ0eXBlIiwib25UYWdDbGljayIsImltZyIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Client.tsx\n"));

/***/ })

});