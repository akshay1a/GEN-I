"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Tools/image-gen/page",{

/***/ "(app-pages-browser)/./app/Tools/image-gen/Client.tsx":
/*!****************************************!*\
  !*** ./app/Tools/image-gen/Client.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Client; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/skeleton */ \"(app-pages-browser)/./components/ui/skeleton.tsx\");\n/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ui/textarea */ \"(app-pages-browser)/./components/ui/textarea.tsx\");\n/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/label */ \"(app-pages-browser)/./components/ui/label.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Client() {\n    _s();\n    const [prompt, setPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"Tokyo streets, 4k high res, ultra hd, dynamic lighting\");\n    const availableTags = [\n        \"4k high res\",\n        \"ultra hd\",\n        \"blurry\",\n        \"dynamic lighting\",\n        \"neon\",\n        \"animated\",\n        \"realistic\",\n        \"cartoon\",\n        \"3d animated\",\n        \"cyberpunk\",\n        \"grayscale\",\n        \"nostalgic\",\n        \"streets\",\n        \"foggy\",\n        \"rainy\",\n        \"mountains\",\n        \"public\",\n        \"crowded\",\n        \"quiet\"\n    ];\n    const handleTagClick = (selectedTags)=>{\n        setPrompt(selectedTags);\n    };\n    const handleOnChange = (e)=>{\n        setPrompt(e.target.value);\n    };\n    // Japanese mountains, 4k high res, ultra hd, dynamic lighting\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"/default.jpg\");\n    const API_TOKEN = \"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\";\n    const generateImage = async (e)=>{\n        e.preventDefault();\n        setImage(\"/default.jpg\");\n        setLoading(true);\n        const res = await fetch(\"https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0\", {\n            method: \"POST\",\n            headers: {\n                \"content-type\": \"application/json\",\n                Authorization: \"Bearer \".concat(API_TOKEN)\n            },\n            body: JSON.stringify({\n                inputs: prompt\n            })\n        });\n        const blob = await res.blob();\n        setImage(URL.createObjectURL(blob));\n        setLoading(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"jsx-16b1cac69695cd94\" + \" \" + \"m-4 md:m-4 \",\n        children: [\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"16b1cac69695cd94\",\n                children: \".main.jsx-16b1cac69695cd94{font:100%/1.5 Raleway,sans-serif;color:hsl(230,100%,95%);background:-webkit-linear-gradient(315deg,hsl(230,40%,12%),hsl(230,20%,7%));background:-moz-linear-gradient(315deg,hsl(230,40%,12%),hsl(230,20%,7%));background:-o-linear-gradient(315deg,hsl(230,40%,12%),hsl(230,20%,7%));background:linear-gradient(135deg,hsl(230,40%,12%),hsl(230,20%,7%))}\"\n            }, void 0, false, void 0, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-16b1cac69695cd94\" + \" \" + \"main rounded-xl p-6 flex flex-col gap-4 md:gap-8 md:mx-20 mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-16b1cac69695cd94\" + \" \" + \"text-2xl md:text-3xl font-bold flex flex-col justify-start items-center \",\n                        children: \"AI Image Generator\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Tools\\\\image-gen\\\\Client.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-16b1cac69695cd94\" + \" \" + \"flex flex-col md:flex-row justify-center items-start\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-16b1cac69695cd94\" + \" \" + \"flex flex-col items-start  md:mr-4 mt-4 md:order-1 order-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"jsx-16b1cac69695cd94\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                        onSubmit: generateImage,\n                                        className: \"jsx-16b1cac69695cd94\" + \" \" + \"p-1 flex flex-col h-full gap-5 items-start h-[40rem] md:max-w-[50rem] \",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {\n                                                htmlFor: \"label\",\n                                                children: \"Write your Prompt!\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Tools\\\\image-gen\\\\Client.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_4__.Textarea, {\n                                                rows: 4,\n                                                className: \"text-sm dark:border-white min-w-[50px] md:min-w-[45rem] md:text-md bg-zinc-900/10 dark:bg-zinc-50/10\",\n                                                placeholder: \"Type your prompt here to generate image.\",\n                                                value: prompt,\n                                                onChange: handleOnChange\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Tools\\\\image-gen\\\\Client.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"submit\",\n                                                className: \"jsx-16b1cac69695cd94\" + \" \" + \"w-fit px-5 py-2 bg-green-600 hover:opacity-70 rounded-full \",\n                                                children: \"Generate\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Tools\\\\image-gen\\\\Client.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"jsx-16b1cac69695cd94\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Tools\\\\image-gen\\\\Client.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Tools\\\\image-gen\\\\Client.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Tools\\\\image-gen\\\\Client.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Tools\\\\image-gen\\\\Client.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-16b1cac69695cd94\" + \" \" + \" flex justify-center md:order-2 order-1\",\n                                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {\n                                    className: \"w-[330px] h-[330px] md:w-[450px] md:h-[450px] rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Tools\\\\image-gen\\\\Client.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"jsx-16b1cac69695cd94\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: image,\n                                        alt: prompt,\n                                        height: \"450px\",\n                                        width: \"450px\",\n                                        className: \"jsx-16b1cac69695cd94\" + \" \" + \"rounded-lg border-2 border-zinc-950 border-white\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Tools\\\\image-gen\\\\Client.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 19\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Tools\\\\image-gen\\\\Client.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Tools\\\\image-gen\\\\Client.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Tools\\\\image-gen\\\\Client.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Tools\\\\image-gen\\\\Client.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\aksha\\\\OneDrive\\\\Desktop\\\\repos\\\\GEN-I\\\\app\\\\Tools\\\\image-gen\\\\Client.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(Client, \"XjE9KWVM+oXkgrgphxJughFA0Ck=\");\n_c = Client;\nvar _c;\n$RefreshReg$(_c, \"Client\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9Ub29scy9pbWFnZS1nZW4vQ2xpZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFaUM7QUFDbUI7QUFDQTtBQUNOO0FBSy9CLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR04sK0NBQVFBLENBQ2xDO0lBRUYsTUFBTU8sZ0JBQWdCO1FBQUM7UUFBZTtRQUFZO1FBQ3BEO1FBQW9CO1FBQVE7UUFBWTtRQUFhO1FBQ3JEO1FBQWU7UUFBYTtRQUFhO1FBQWE7UUFDdEQ7UUFBUztRQUFTO1FBQWE7UUFBVTtRQUFXO0tBQ25EO0lBRUMsTUFBTUMsaUJBQWlCLENBQUNDO1FBQ3RCSCxVQUFVRztJQUNaO0lBQ0EsTUFBTUMsaUJBQWlCLENBQUNDO1FBQ3RCTCxVQUFVSyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDMUI7SUFDQSw4REFBOEQ7SUFDOUQsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2dCLE9BQU9DLFNBQVMsR0FBR2pCLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1rQixZQUFZO0lBRWxCLE1BQU1DLGdCQUFnQixPQUFPUjtRQUMzQkEsRUFBRVMsY0FBYztRQUNoQkgsU0FBUztRQUNURixXQUFXO1FBQ1gsTUFBTU0sTUFBTSxNQUFNQyxNQUNoQix3RkFDQTtZQUNFQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO2dCQUNoQkMsZUFBZSxVQUFvQixPQUFWUDtZQUMzQjtZQUNBUSxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLFFBQVF4QjtZQUFPO1FBQ3hDO1FBRUYsTUFBTXlCLE9BQU8sTUFBTVQsSUFBSVMsSUFBSTtRQUMzQmIsU0FBU2MsSUFBSUMsZUFBZSxDQUFDRjtRQUM3QmYsV0FBVztJQUNiO0lBRUEscUJBQ0UsOERBQUNrQjtrREFBZTs7Ozs7OzBCQVFkLDhEQUFDQzswREFBYzs7a0NBQ2IsOERBQUNBO2tFQUFjO2tDQUEyRTs7Ozs7O2tDQUcxRiw4REFBQ0E7a0VBQWM7OzBDQUNiLDhEQUFDQTswRUFBYzswQ0FDYiw0RUFBQ0E7OzhDQUNDLDRFQUFDQzt3Q0FDQ0MsVUFBVWpCO2tGQUNBOzswREFFViw4REFBQ2hCLHVEQUFLQTtnREFBQ2tDLFNBQVE7MERBQVE7Ozs7OzswREFDdkIsOERBQUNuQyw2REFBUUE7Z0RBQ1BvQyxNQUFNO2dEQUNOQyxXQUFVO2dEQUNWQyxhQUFZO2dEQUNaM0IsT0FBT1I7Z0RBQ1BvQyxVQUFVL0I7Ozs7OzswREFHWiw4REFBQ2dDO2dEQUNDQyxNQUFLOzBGQUNLOzBEQUNYOzs7Ozs7MERBR0QsOERBQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FNUCw4REFBQ0E7MEVBQWM7MENBQ1pwQix3QkFDQyw4REFBQ2IsNkRBQVFBO29DQUFDc0MsV0FBVTs7Ozs7eURBRXBCLDhEQUFDTDs7OENBQ0csNEVBQUNVO3dDQUNEQyxLQUFLN0I7d0NBQ0w4QixLQUFLekM7d0NBRUwwQyxRQUFRO3dDQUNSQyxPQUFNO2tGQUZJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzVCO0dBdEd3QjVDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Ub29scy9pbWFnZS1nZW4vQ2xpZW50LnRzeD9iZTI3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3NrZWxldG9uXCI7XHJcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90ZXh0YXJlYVwiO1xyXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvbGFiZWxcIjtcclxuaW1wb3J0IFRhZ3MgZnJvbSAnQC9jb21wb25lbnRzL1RhZ3MnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGllbnQoKSB7XHJcbiAgY29uc3QgW3Byb21wdCwgc2V0UHJvbXB0XSA9IHVzZVN0YXRlKFxyXG4gICAgXCJUb2t5byBzdHJlZXRzLCA0ayBoaWdoIHJlcywgdWx0cmEgaGQsIGR5bmFtaWMgbGlnaHRpbmdcIlxyXG4gICk7XHJcbiAgY29uc3QgYXZhaWxhYmxlVGFncyA9IFsnNGsgaGlnaCByZXMnLCAndWx0cmEgaGQnLCAnYmx1cnJ5JywgXHJcbidkeW5hbWljIGxpZ2h0aW5nJywgJ25lb24nLCAnYW5pbWF0ZWQnLCAncmVhbGlzdGljJywgJ2NhcnRvb24nLFxyXG4nM2QgYW5pbWF0ZWQnLCAnY3liZXJwdW5rJywgJ2dyYXlzY2FsZScsICdub3N0YWxnaWMnLCAnc3RyZWV0cycsXHJcbidmb2dneScsICdyYWlueScsICdtb3VudGFpbnMnLCAncHVibGljJywgJ2Nyb3dkZWQnLCAncXVpZXQnXHJcbl07IFxyXG5cclxuICBjb25zdCBoYW5kbGVUYWdDbGljayA9IChzZWxlY3RlZFRhZ3MpID0+IHtcclxuICAgIHNldFByb21wdChzZWxlY3RlZFRhZ3MpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlT25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0UHJvbXB0KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9XHJcbiAgLy8gSmFwYW5lc2UgbW91bnRhaW5zLCA0ayBoaWdoIHJlcywgdWx0cmEgaGQsIGR5bmFtaWMgbGlnaHRpbmdcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShcIi9kZWZhdWx0LmpwZ1wiKTtcclxuICBcclxuICBjb25zdCBBUElfVE9LRU4gPSBcImhmX3hkUkdvVG5Ub3BZa1JsVUdmRURYdlZIaWlqUU5oZFhkd2NcIjtcclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVJbWFnZSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRJbWFnZShcIi9kZWZhdWx0LmpwZ1wiKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgXCJodHRwczovL2FwaS1pbmZlcmVuY2UuaHVnZ2luZ2ZhY2UuY28vbW9kZWxzL3N0YWJpbGl0eWFpL3N0YWJsZS1kaWZmdXNpb24teGwtYmFzZS0xLjBcIixcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7QVBJX1RPS0VOfWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlucHV0czogcHJvbXB0IH0pLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlcy5ibG9iKCk7XHJcbiAgICBzZXRJbWFnZShVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJtLTQgbWQ6bS00IFwiPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5tYWluIHtcclxuICAgICAgICBmb250OiAxMDAlIC8gMS41IFJhbGV3YXksIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgY29sb3I6IGhzbCgyMzAsIDEwMCUsIDk1JSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgaHNsKDIzMCwgNDAlLCAxMiUpLCBoc2woMjMwLCAyMCUsIDclKSk7XHJcbiAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4gcm91bmRlZC14bCBwLTYgZmxleCBmbGV4LWNvbCBnYXAtNCBtZDpnYXAtOCBtZDpteC0yMCBtdC04XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBmb250LWJvbGQgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgIEFJIEltYWdlIEdlbmVyYXRvclxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0ICBtZDptci00IG10LTQgbWQ6b3JkZXItMSBvcmRlci0yXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXtnZW5lcmF0ZUltYWdlfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xIGZsZXggZmxleC1jb2wgaC1mdWxsIGdhcC01IGl0ZW1zLXN0YXJ0IGgtWzQwcmVtXSBtZDptYXgtdy1bNTByZW1dIFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJsYWJlbFwiPldyaXRlIHlvdXIgUHJvbXB0ITwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8VGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBkYXJrOmJvcmRlci13aGl0ZSBtaW4tdy1bNTBweF0gbWQ6bWluLXctWzQ1cmVtXSBtZDp0ZXh0LW1kIGJnLXppbmMtOTAwLzEwIGRhcms6YmctemluYy01MC8xMFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHByb21wdCBoZXJlIHRvIGdlbmVyYXRlIGltYWdlLlwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9tcHR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZml0IHB4LTUgcHktMiBiZy1ncmVlbi02MDAgaG92ZXI6b3BhY2l0eS03MCByb3VuZGVkLWZ1bGwgXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgR2VuZXJhdGVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxUYWdzIHZhbHVlPXtwcm9tcHR9IGF2YWlsYWJsZVRhZ3M9e2F2YWlsYWJsZVRhZ3N9IG9uVGFnQ2xpY2s9e2hhbmRsZVRhZ0NsaWNrfSAvPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZsZXgganVzdGlmeS1jZW50ZXIgbWQ6b3JkZXItMiBvcmRlci0xXCI+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJ3LVszMzBweF0gaC1bMzMwcHhdIG1kOnctWzQ1MHB4XSBtZDpoLVs0NTBweF0gcm91bmRlZC1sZ1wiIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX0gXHJcbiAgICAgICAgICAgICAgICAgIGFsdD17cHJvbXB0fSBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXItMiBib3JkZXItemluYy05NTAgYm9yZGVyLXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PSAnNDUwcHgnXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPSc0NTBweCcgIFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiU2tlbGV0b24iLCJUZXh0YXJlYSIsIkxhYmVsIiwiQ2xpZW50IiwicHJvbXB0Iiwic2V0UHJvbXB0IiwiYXZhaWxhYmxlVGFncyIsImhhbmRsZVRhZ0NsaWNrIiwic2VsZWN0ZWRUYWdzIiwiaGFuZGxlT25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImltYWdlIiwic2V0SW1hZ2UiLCJBUElfVE9LRU4iLCJnZW5lcmF0ZUltYWdlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbnB1dHMiLCJibG9iIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibWFpbiIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImh0bWxGb3IiLCJyb3dzIiwiY2xhc3NOYW1lIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsInR5cGUiLCJpbWciLCJzcmMiLCJhbHQiLCJoZWlnaHQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Tools/image-gen/Client.tsx\n"));

/***/ })

});