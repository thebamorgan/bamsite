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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"8c8fb09e4ebf\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NjdiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjhjOGZiMDllNGViZlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _node_modules_98_css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/98.css/style.css */ \"(app-pages-browser)/./node_modules/98.css/style.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Page() {\n    _s();\n    // Make the DIV element draggable:\n    dragElement(document.getElementById(\"mydiv\"));\n    function dragElement(elmnt) {\n        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;\n        if (document.getElementById(elmnt.id + \"header\")) {\n            // if present, the header is where you move the DIV from:\n            document.getElementById(elmnt.id + \"header\").onmousedown = dragMouseDown;\n        } else {\n            // otherwise, move the DIV from anywhere inside the DIV:\n            elmnt.onmousedown = dragMouseDown;\n        }\n        function dragMouseDown(e) {\n            e = e || window.event;\n            e.preventDefault();\n            // get the mouse cursor position at startup:\n            pos3 = e.clientX;\n            pos4 = e.clientY;\n            document.onmouseup = closeDragElement;\n            // call a function whenever the cursor moves:\n            document.onmousemove = elementDrag;\n        }\n        function elementDrag(e) {\n            e = e || window.event;\n            e.preventDefault();\n            // calculate the new cursor position:\n            pos1 = pos3 - e.clientX;\n            pos2 = pos4 - e.clientY;\n            pos3 = e.clientX;\n            pos4 = e.clientY;\n            // set the element's new position:\n            elmnt.style.top = elmnt.offsetTop - pos2 + \"px\";\n            elmnt.style.left = elmnt.offsetLeft - pos1 + \"px\";\n        }\n        function closeDragElement() {\n            // stop moving when mouse button is released:\n            document.onmouseup = null;\n            document.onmousemove = null;\n        }\n    }\n    const [count, setCount] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            height: \"100vh\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                width: 300\n            },\n            className: \"window\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"title-bar\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"title-bar-text\",\n                            children: \"Counter\"\n                        }, void 0, false, {\n                            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"title-bar-controls\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    \"aria-label\": \"Minimize\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    \"aria-label\": \"Maximize\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    \"aria-label\": \"Close\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"window-body\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: {\n                                textAlign: \"center\"\n                            },\n                            children: [\n                                \"Current count: \",\n                                count\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"field-row\",\n                            style: {\n                                justifyContent: \"center\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setCount(count + 1),\n                                    children: \"+\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setCount(count - 1),\n                                    children: \"-\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>setCount(0),\n                                    children: \"0\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/benmorgan/Documents/Code/bamsite/src/app/page.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"oDgYfYHkD9Wkv4hrAPCkI/ev3YU=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBcIi4vZ2xvYmFscy5jc3NcIlxuaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzLzk4LmNzcy9zdHlsZS5jc3NcIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcblxuXG5cbi8vIE1ha2UgdGhlIERJViBlbGVtZW50IGRyYWdnYWJsZTpcbmRyYWdFbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlkaXZcIikpO1xuXG5mdW5jdGlvbiBkcmFnRWxlbWVudChlbG1udCkge1xuICB2YXIgcG9zMSA9IDAsIHBvczIgPSAwLCBwb3MzID0gMCwgcG9zNCA9IDA7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbG1udC5pZCArIFwiaGVhZGVyXCIpKSB7XG4gICAgLy8gaWYgcHJlc2VudCwgdGhlIGhlYWRlciBpcyB3aGVyZSB5b3UgbW92ZSB0aGUgRElWIGZyb206XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxtbnQuaWQgKyBcImhlYWRlclwiKS5vbm1vdXNlZG93biA9IGRyYWdNb3VzZURvd247XG4gIH0gZWxzZSB7XG4gICAgLy8gb3RoZXJ3aXNlLCBtb3ZlIHRoZSBESVYgZnJvbSBhbnl3aGVyZSBpbnNpZGUgdGhlIERJVjpcbiAgICBlbG1udC5vbm1vdXNlZG93biA9IGRyYWdNb3VzZURvd247XG4gIH1cblxuICBmdW5jdGlvbiBkcmFnTW91c2VEb3duKGUpIHtcbiAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGdldCB0aGUgbW91c2UgY3Vyc29yIHBvc2l0aW9uIGF0IHN0YXJ0dXA6XG4gICAgcG9zMyA9IGUuY2xpZW50WDtcbiAgICBwb3M0ID0gZS5jbGllbnRZO1xuICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IGNsb3NlRHJhZ0VsZW1lbnQ7XG4gICAgLy8gY2FsbCBhIGZ1bmN0aW9uIHdoZW5ldmVyIHRoZSBjdXJzb3IgbW92ZXM6XG4gICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBlbGVtZW50RHJhZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGVsZW1lbnREcmFnKGUpIHtcbiAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGNhbGN1bGF0ZSB0aGUgbmV3IGN1cnNvciBwb3NpdGlvbjpcbiAgICBwb3MxID0gcG9zMyAtIGUuY2xpZW50WDtcbiAgICBwb3MyID0gcG9zNCAtIGUuY2xpZW50WTtcbiAgICBwb3MzID0gZS5jbGllbnRYO1xuICAgIHBvczQgPSBlLmNsaWVudFk7XG4gICAgLy8gc2V0IHRoZSBlbGVtZW50J3MgbmV3IHBvc2l0aW9uOlxuICAgIGVsbW50LnN0eWxlLnRvcCA9IChlbG1udC5vZmZzZXRUb3AgLSBwb3MyKSArIFwicHhcIjtcbiAgICBlbG1udC5zdHlsZS5sZWZ0ID0gKGVsbW50Lm9mZnNldExlZnQgLSBwb3MxKSArIFwicHhcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlRHJhZ0VsZW1lbnQoKSB7XG4gICAgLy8gc3RvcCBtb3Zpbmcgd2hlbiBtb3VzZSBidXR0b24gaXMgcmVsZWFzZWQ6XG4gICAgZG9jdW1lbnQub25tb3VzZXVwID0gbnVsbDtcbiAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XG4gIH1cbn1cblxuXG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGhlaWdodDogXCIxMDB2aFwiIH19PlxuICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogMzAwIH19IGNsYXNzTmFtZT1cIndpbmRvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtYmFyLXRleHRcIj5Db3VudGVyPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1iYXItY29udHJvbHNcIj5cbiAgICAgICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cIk1pbmltaXplXCIgLz5cbiAgICAgICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cIk1heGltaXplXCIgLz5cbiAgICAgICAgICAgIDxidXR0b24gYXJpYS1sYWJlbD1cIkNsb3NlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aW5kb3ctYm9keVwiPlxuICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5DdXJyZW50IGNvdW50OiB7Y291bnR9PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtcm93XCIgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIgfX0+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50KGNvdW50ICsgMSl9Pis8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQgLSAxKX0+LTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudCgwKX0+MDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUGFnZSIsImRyYWdFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImVsbW50IiwicG9zMSIsInBvczIiLCJwb3MzIiwicG9zNCIsImlkIiwib25tb3VzZWRvd24iLCJkcmFnTW91c2VEb3duIiwiZSIsIndpbmRvdyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9ubW91c2V1cCIsImNsb3NlRHJhZ0VsZW1lbnQiLCJvbm1vdXNlbW92ZSIsImVsZW1lbnREcmFnIiwic3R5bGUiLCJ0b3AiLCJvZmZzZXRUb3AiLCJsZWZ0Iiwib2Zmc2V0TGVmdCIsImNvdW50Iiwic2V0Q291bnQiLCJ1c2VTdGF0ZSIsImRpdiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJ3aWR0aCIsImNsYXNzTmFtZSIsImJ1dHRvbiIsImFyaWEtbGFiZWwiLCJwIiwidGV4dEFsaWduIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});