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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"e1f1f4f0ba7e\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NjdiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImUxZjFmNGYwYmE3ZVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _node_modules_98_css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/98.css/style.css */ \"(app-pages-browser)/./node_modules/98.css/style.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Page() {\n    _s();\n    // Make the DIV element draggable:\n    dragElement(document.getElementById(\"mydiv\"));\n    function dragElement(elmnt) {\n        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;\n        if (document.getElementById(elmnt.id + \"header\")) {\n            // if present, the header is where you move the DIV from:\n            document.getElementById(elmnt.id + \"header\").onmousedown = dragMouseDown;\n        } else {\n            // otherwise, move the DIV from anywhere inside the DIV:\n            elmnt.onmousedown = dragMouseDown;\n        }\n        function dragMouseDown(e) {\n            e = e || window.event;\n            e.preventDefault();\n            // get the mouse cursor position at startup:\n            pos3 = e.clientX;\n            pos4 = e.clientY;\n            document.onmouseup = closeDragElement;\n            // call a function whenever the cursor moves:\n            document.onmousemove = elementDrag;\n        }\n        function elementDrag(e) {\n            e = e || window.event;\n            e.preventDefault();\n            // calculate the new cursor position:\n            pos1 = pos3 - e.clientX;\n            pos2 = pos4 - e.clientY;\n            pos3 = e.clientX;\n            pos4 = e.clientY;\n            // set the element's new position:\n            elmnt.style.top = elmnt.offsetTop - pos2 + \"px\";\n            elmnt.style.left = elmnt.offsetLeft - pos1 + \"px\";\n        }\n        function closeDragElement() {\n            // stop moving when mouse button is released:\n            document.onmouseup = null;\n            document.onmousemove = null;\n        }\n    }\n    const [count, setCount] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"test\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"testheader\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    height: \"100vh\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        width: 300\n                    },\n                    className: \"window\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"title-bar\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"title-bar-text\",\n                                    children: \"Counter\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"title-bar-controls\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            \"aria-label\": \"Minimize\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            \"aria-label\": \"Maximize\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            \"aria-label\": \"Close\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"window-body\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    style: {\n                                        textAlign: \"center\"\n                                    },\n                                    children: [\n                                        \"Current count: \",\n                                        count\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"field-row\",\n                                    style: {\n                                        justifyContent: \"center\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>setCount(count + 1),\n                                            children: \"+\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>setCount(count - 1),\n                                            children: \"-\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>setCount(0),\n                                            children: \"0\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"oDgYfYHkD9Wkv4hrAPCkI/ev3YU=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RXdCNUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFwiLi9nbG9iYWxzLmNzc1wiXG5pbXBvcnQgXCIuLi8uLi9ub2RlX21vZHVsZXMvOTguY3NzL3N0eWxlLmNzc1wiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuXG5cblxuLy8gTWFrZSB0aGUgRElWIGVsZW1lbnQgZHJhZ2dhYmxlOlxuZHJhZ0VsZW1lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteWRpdlwiKSk7XG5cbmZ1bmN0aW9uIGRyYWdFbGVtZW50KGVsbW50KSB7XG4gIHZhciBwb3MxID0gMCwgcG9zMiA9IDAsIHBvczMgPSAwLCBwb3M0ID0gMDtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsbW50LmlkICsgXCJoZWFkZXJcIikpIHtcbiAgICAvLyBpZiBwcmVzZW50LCB0aGUgaGVhZGVyIGlzIHdoZXJlIHlvdSBtb3ZlIHRoZSBESVYgZnJvbTpcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbG1udC5pZCArIFwiaGVhZGVyXCIpLm9ubW91c2Vkb3duID0gZHJhZ01vdXNlRG93bjtcbiAgfSBlbHNlIHtcbiAgICAvLyBvdGhlcndpc2UsIG1vdmUgdGhlIERJViBmcm9tIGFueXdoZXJlIGluc2lkZSB0aGUgRElWOlxuICAgIGVsbW50Lm9ubW91c2Vkb3duID0gZHJhZ01vdXNlRG93bjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRyYWdNb3VzZURvd24oZSkge1xuICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gZ2V0IHRoZSBtb3VzZSBjdXJzb3IgcG9zaXRpb24gYXQgc3RhcnR1cDpcbiAgICBwb3MzID0gZS5jbGllbnRYO1xuICAgIHBvczQgPSBlLmNsaWVudFk7XG4gICAgZG9jdW1lbnQub25tb3VzZXVwID0gY2xvc2VEcmFnRWxlbWVudDtcbiAgICAvLyBjYWxsIGEgZnVuY3Rpb24gd2hlbmV2ZXIgdGhlIGN1cnNvciBtb3ZlczpcbiAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IGVsZW1lbnREcmFnO1xuICB9XG5cbiAgZnVuY3Rpb24gZWxlbWVudERyYWcoZSkge1xuICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY2FsY3VsYXRlIHRoZSBuZXcgY3Vyc29yIHBvc2l0aW9uOlxuICAgIHBvczEgPSBwb3MzIC0gZS5jbGllbnRYO1xuICAgIHBvczIgPSBwb3M0IC0gZS5jbGllbnRZO1xuICAgIHBvczMgPSBlLmNsaWVudFg7XG4gICAgcG9zNCA9IGUuY2xpZW50WTtcbiAgICAvLyBzZXQgdGhlIGVsZW1lbnQncyBuZXcgcG9zaXRpb246XG4gICAgZWxtbnQuc3R5bGUudG9wID0gKGVsbW50Lm9mZnNldFRvcCAtIHBvczIpICsgXCJweFwiO1xuICAgIGVsbW50LnN0eWxlLmxlZnQgPSAoZWxtbnQub2Zmc2V0TGVmdCAtIHBvczEpICsgXCJweFwiO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VEcmFnRWxlbWVudCgpIHtcbiAgICAvLyBzdG9wIG1vdmluZyB3aGVuIG1vdXNlIGJ1dHRvbiBpcyByZWxlYXNlZDpcbiAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xuICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcbiAgfVxufVxuXG5cbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgcmV0dXJuIChcblxuICAgIDxkaXYgaWQgPSBcInRlc3RcIj5cbiAgICAgIDxkaXYgaWQgPSBcInRlc3RoZWFkZXJcIj5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGhlaWdodDogXCIxMDB2aFwiIH19PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAzMDAgfX0gY2xhc3NOYW1lPVwid2luZG93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1iYXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtYmFyLXRleHRcIj5Db3VudGVyPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWJhci1jb250cm9sc1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJNaW5pbWl6ZVwiIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cIk1heGltaXplXCIgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5kb3ctYm9keVwiPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PkN1cnJlbnQgY291bnQ6IHtjb3VudH08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkLXJvd1wiIHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiIH19PlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50KGNvdW50ICsgMSl9Pis8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudChjb3VudCAtIDEpfT4tPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoMCl9PjA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlBhZ2UiLCJkcmFnRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJlbG1udCIsInBvczEiLCJwb3MyIiwicG9zMyIsInBvczQiLCJpZCIsIm9ubW91c2Vkb3duIiwiZHJhZ01vdXNlRG93biIsImUiLCJ3aW5kb3ciLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2xpZW50WCIsImNsaWVudFkiLCJvbm1vdXNldXAiLCJjbG9zZURyYWdFbGVtZW50Iiwib25tb3VzZW1vdmUiLCJlbGVtZW50RHJhZyIsInN0eWxlIiwidG9wIiwib2Zmc2V0VG9wIiwibGVmdCIsIm9mZnNldExlZnQiLCJjb3VudCIsInNldENvdW50IiwidXNlU3RhdGUiLCJkaXYiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJjbGFzc05hbWUiLCJidXR0b24iLCJhcmlhLWxhYmVsIiwicCIsInRleHRBbGlnbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});