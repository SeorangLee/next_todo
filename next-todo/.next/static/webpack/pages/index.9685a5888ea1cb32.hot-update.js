"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TodoList.tsx":
/*!*********************************!*\
  !*** ./components/TodoList.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.ts\");\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width : 100%;\\n\\n  .todo-list-header{\\n    padding: 12px;\\n    border-bottom:1px solid \",\n        \";\\n    .todo-list-last-todo{\\n      font-size: 14px;\\n      span{\\n        margin-left : 8px;\\n      }\\n    }\\n  }\\n\\n\\n\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject(), _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gray);\n_c = Container;\nvar TodoList = function(param) {\n    var todos = param.todos;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"todo-list-header\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"todo-list-last-todo\",\n                children: [\n                    \"남은 To do \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            todos.length,\n                            \"개\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\SierraLee\\\\Study\\\\next\\\\next-todo\\\\components\\\\TodoList.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 20\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\SierraLee\\\\Study\\\\next\\\\next-todo\\\\components\\\\TodoList.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\SierraLee\\\\Study\\\\next\\\\next-todo\\\\components\\\\TodoList.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\SierraLee\\\\Study\\\\next\\\\next-todo\\\\components\\\\TodoList.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this));\n};\n_c1 = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\nvar _c, _c1;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"TodoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZG9MaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QjtBQUNhO0FBRUM7Ozs7Ozs7Ozs7Ozs7O1FBRVYsQ0FLRDtRQUFlLENBVzNDOzs7Ozs7O0FBaEJBLEdBQUssQ0FBQ0csU0FBUyxHQUFHRiw2REFBVSxvQkFLRUMsNERBQVk7S0FMcENDLFNBQVM7QUFzQmYsR0FBSyxDQUFDRyxRQUFRLEdBQXFCLFFBQVEsUUFBSSxDQUFDO1FBQVhDLEtBQUssU0FBTEEsS0FBSztJQUN4QyxNQUFNLDZFQUNISixTQUFTOzhGQUNQQyxDQUFHO1lBQUNJLFNBQVMsRUFBQyxDQUFrQjtrR0FDOUJDLENBQUM7Z0JBQUNELFNBQVMsRUFBQyxDQUFxQjs7b0JBQUMsQ0FDeEI7Z0dBQUtFLENBQUk7OzRCQUFFSCxLQUFLLENBQUNJLE1BQU07NEJBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEMsQ0FBQztNQVZDTCxRQUFRO0FBWVYsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3g/MWM4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7VG9kb1R5cGV9IGZyb20gIFwiLi4vdHlwZXMvdG9kb1wiO1xyXG5pbXBvcnQgcGFsZXR0ZSBmcm9tIFwiLi4vc3R5bGVzL3BhbGV0dGVcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGggOiAxMDAlO1xyXG5cclxuICAudG9kby1saXN0LWhlYWRlcntcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XHJcbiAgICAudG9kby1saXN0LWxhc3QtdG9kb3tcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBzcGFue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0IDogOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG5gXHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICB0b2RvczogVG9kb1R5cGVbXTtcclxufVxyXG5cclxuY29uc3QgVG9kb0xpc3Q6IFJlYWN0LkZDPElQcm9wcz4gPSAoe3RvZG9zfSkgPT57XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kby1saXN0LWhlYWRlclwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRvZG8tbGlzdC1sYXN0LXRvZG9cIj5cclxuICAgICAgICAgIOuCqOydgCBUbyBkbyA8c3Bhbj57dG9kb3MubGVuZ3RofeqwnDwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJwYWxldHRlIiwiQ29udGFpbmVyIiwiZGl2IiwiZ3JheSIsIlRvZG9MaXN0IiwidG9kb3MiLCJjbGFzc05hbWUiLCJwIiwic3BhbiIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n");

/***/ })

});