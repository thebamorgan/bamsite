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

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"9fec790b525d\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NjdiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjlmZWM3OTBiNTI1ZFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _node_modules_98_css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/98.css/style.css */ \"(app-pages-browser)/./node_modules/98.css/style.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Page() {\n    _s();\n    // Use a ref to access the draggable element\n    const draggableRef = react__WEBPACK_IMPORTED_MODULE_3___default().useRef(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // Make the DIV element draggable after the component has been rendered\n        if (draggableRef.current) {\n            dragElement(draggableRef.current);\n        }\n    }, []);\n    function dragElement(elmnt) {\n        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;\n        const header = document.getElementById(elmnt.id + \"header\");\n        if (header) {\n            // if present, the header is where you move the DIV from:\n            header.onmousedown = dragMouseDown;\n        } else {\n            // otherwise, move the DIV from anywhere inside the DIV:\n            elmnt.onmousedown = dragMouseDown;\n        }\n        function dragMouseDown(e) {\n            e = e || window.event;\n            e.preventDefault();\n            // get the mouse cursor position at startup:\n            pos3 = e.clientX;\n            pos4 = e.clientY;\n            document.onmouseup = closeDragElement;\n            // call a function whenever the cursor moves:\n            document.onmousemove = elementDrag;\n        }\n        function elementDrag(e) {\n            e = e || window.event;\n            e.preventDefault();\n            // calculate the new cursor position:\n            pos1 = pos3 - e.clientX;\n            pos2 = pos4 - e.clientY;\n            pos3 = e.clientX;\n            pos4 = e.clientY;\n            // set the element's new position:\n            elmnt.style.top = elmnt.offsetTop - pos2 + \"px\";\n            elmnt.style.left = elmnt.offsetLeft - pos1 + \"px\";\n        }\n        function closeDragElement() {\n            // stop moving when mouse button is released:\n            document.onmouseup = null;\n            document.onmousemove = null;\n        }\n    }\n    const [count, setCount] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: draggableRef,\n        id: \"test\",\n        style: {\n            position: \"absolute\",\n            zIndex: \"9\",\n            border: \"1px solid #d3d3d3\",\n            textAlign: \"center\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"testheader\",\n            style: {\n                padding: \"10px\",\n                cursor: \"move\",\n                zIndex: \"10\",\n                color: \"#fff\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    height: \"100vh\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        width: 300\n                    },\n                    className: \"window\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"title-bar\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"title-bar-text\",\n                                    children: \"Counter\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"title-bar-controls\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            \"aria-label\": \"Minimize\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            \"aria-label\": \"Maximize\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            \"aria-label\": \"Close\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"window-body\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    style: {\n                                        textAlign: \"center\"\n                                    },\n                                    children: [\n                                        \"Current count: \",\n                                        count\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"field-row\",\n                                    style: {\n                                        justifyContent: \"center\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>setCount(count + 1),\n                                            children: \"+\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>setCount(count - 1),\n                                            children: \"-\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>setCount(0),\n                                            children: \"0\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"HVq7mKK1VzfMTslVCAq8lF3bjzs=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87d0NBQUVrQixnQkFBZ0I7b0NBQVM7O3NEQUMzRCw4REFBQ0s7NENBQU9HLFNBQVMsSUFBTXBCLFNBQVNELFFBQVE7c0RBQUk7Ozs7OztzREFDNUMsOERBQUNrQjs0Q0FBT0csU0FBUyxJQUFNcEIsU0FBU0QsUUFBUTtzREFBSTs7Ozs7O3NEQUM1Qyw4REFBQ2tCOzRDQUFPRyxTQUFTLElBQU1wQixTQUFTO3NEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRcEQ7R0FuRndCaEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFwiLi9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzLzk4LmNzcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG5cbiAgLy8gVXNlIGEgcmVmIHRvIGFjY2VzcyB0aGUgZHJhZ2dhYmxlIGVsZW1lbnRcbiAgY29uc3QgZHJhZ2dhYmxlUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gTWFrZSB0aGUgRElWIGVsZW1lbnQgZHJhZ2dhYmxlIGFmdGVyIHRoZSBjb21wb25lbnQgaGFzIGJlZW4gcmVuZGVyZWRcbiAgICBpZiAoZHJhZ2dhYmxlUmVmLmN1cnJlbnQpIHtcbiAgICAgIGRyYWdFbGVtZW50KGRyYWdnYWJsZVJlZi5jdXJyZW50KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBkcmFnRWxlbWVudChlbG1udCkge1xuICAgIHZhciBwb3MxID0gMCwgcG9zMiA9IDAsIHBvczMgPSAwLCBwb3M0ID0gMDtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsbW50LmlkICsgXCJoZWFkZXJcIik7XG4gICAgaWYgKGhlYWRlcikge1xuICAgICAgLy8gaWYgcHJlc2VudCwgdGhlIGhlYWRlciBpcyB3aGVyZSB5b3UgbW92ZSB0aGUgRElWIGZyb206XG4gICAgICBoZWFkZXIub25tb3VzZWRvd24gPSBkcmFnTW91c2VEb3duO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvdGhlcndpc2UsIG1vdmUgdGhlIERJViBmcm9tIGFueXdoZXJlIGluc2lkZSB0aGUgRElWOlxuICAgICAgZWxtbnQub25tb3VzZWRvd24gPSBkcmFnTW91c2VEb3duO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdNb3VzZURvd24oZSkge1xuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gZ2V0IHRoZSBtb3VzZSBjdXJzb3IgcG9zaXRpb24gYXQgc3RhcnR1cDpcbiAgICAgIHBvczMgPSBlLmNsaWVudFg7XG4gICAgICBwb3M0ID0gZS5jbGllbnRZO1xuICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gY2xvc2VEcmFnRWxlbWVudDtcbiAgICAgIC8vIGNhbGwgYSBmdW5jdGlvbiB3aGVuZXZlciB0aGUgY3Vyc29yIG1vdmVzOlxuICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBlbGVtZW50RHJhZztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbGVtZW50RHJhZyhlKSB7XG4gICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyBjYWxjdWxhdGUgdGhlIG5ldyBjdXJzb3IgcG9zaXRpb246XG4gICAgICBwb3MxID0gcG9zMyAtIGUuY2xpZW50WDtcbiAgICAgIHBvczIgPSBwb3M0IC0gZS5jbGllbnRZO1xuICAgICAgcG9zMyA9IGUuY2xpZW50WDtcbiAgICAgIHBvczQgPSBlLmNsaWVudFk7XG4gICAgICAvLyBzZXQgdGhlIGVsZW1lbnQncyBuZXcgcG9zaXRpb246XG4gICAgICBlbG1udC5zdHlsZS50b3AgPSAoZWxtbnQub2Zmc2V0VG9wIC0gcG9zMikgKyBcInB4XCI7XG4gICAgICBlbG1udC5zdHlsZS5sZWZ0ID0gKGVsbW50Lm9mZnNldExlZnQgLSBwb3MxKSArIFwicHhcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZURyYWdFbGVtZW50KCkge1xuICAgICAgLy8gc3RvcCBtb3Zpbmcgd2hlbiBtb3VzZSBidXR0b24gaXMgcmVsZWFzZWQ6XG4gICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xuICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gUmVhY3QudXNlU3RhdGUoMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17ZHJhZ2dhYmxlUmVmfSBpZD1cInRlc3RcIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgekluZGV4OiAnOScsICBib3JkZXI6ICcxcHggc29saWQgI2QzZDNkMycsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICA8ZGl2IGlkPVwidGVzdGhlYWRlclwiIHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JywgY3Vyc29yOiAnbW92ZScsIHpJbmRleDogJzEwJywgY29sb3I6ICcjZmZmJyB9fT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGhlaWdodDogXCIxMDB2aFwiIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IDMwMCB9fSBjbGFzc05hbWU9XCJ3aW5kb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtYmFyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtYmFyLXRleHRcIj5Db3VudGVyPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtYmFyLWNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwiTWluaW1pemVcIiAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cIk1heGltaXplXCIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJDbG9zZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpbmRvdy1ib2R5XCI+XG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5DdXJyZW50IGNvdW50OiB7Y291bnR9PC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXJvd1wiIHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX0+KzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQgLSAxKX0+LTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoMCl9PjA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJQYWdlIiwiZHJhZ2dhYmxlUmVmIiwidXNlUmVmIiwiY3VycmVudCIsImRyYWdFbGVtZW50IiwiZWxtbnQiLCJwb3MxIiwicG9zMiIsInBvczMiLCJwb3M0IiwiaGVhZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwib25tb3VzZWRvd24iLCJkcmFnTW91c2VEb3duIiwiZSIsIndpbmRvdyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9ubW91c2V1cCIsImNsb3NlRHJhZ0VsZW1lbnQiLCJvbm1vdXNlbW92ZSIsImVsZW1lbnREcmFnIiwic3R5bGUiLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsImNvdW50Iiwic2V0Q291bnQiLCJ1c2VTdGF0ZSIsImRpdiIsInJlZiIsInBvc2l0aW9uIiwiekluZGV4IiwiYm9yZGVyIiwidGV4dEFsaWduIiwicGFkZGluZyIsImN1cnNvciIsImNvbG9yIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsIndpZHRoIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwiYXJpYS1sYWJlbCIsInAiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});