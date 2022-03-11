"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/todos";
exports.ids = ["pages/api/todos"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/todos.ts":
/*!****************************!*\
  !*** ./pages/api/todos.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => {\n  const fs = __webpack_require__(/*! fs */ \"fs\");\n\n  if (req.method === \"GET\") {\n    try {\n      const todosBuffer = fs.readFileSync(\"data/todos.json\");\n      const todosString = todosBuffer.toString();\n\n      if (!todosString) {\n        res.statusCode = 200;\n        res.send([]);\n      }\n\n      const todos = JSON.parse(todosString);\n      res.statusCode = 200;\n      return res.send(todos); // const todos = await new Promise<TodoType[]>((resolve, reject)=>{\n      //   fs.readFile(\"/data/todos.json\", (err, data)=> {\n      //     if (err) {\n      //       return reject(err.message);\n      //     }\n      //     const todosData = data.toString();\n      //     if(!todosData){\n      //       return resolve([]);\n      //     }\n      //     const todos = JSON.parse(data.toString());\n      //     return resolve(todos);\n      //   });\n      // });\n      // res.statusCode = 200;\n      // return res.send(todos);\n    } catch (e) {\n      console.log(e);\n      res.statusCode = 500;\n      res.send(e);\n    } // return console.log(res)\n\n  }\n\n  res.statusCode = 405;\n  console.log(res.statusCode);\n  return res.end();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG9kb3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUdBLGlFQUFlLENBQUNBLEdBQUQsRUFBcUJDLEdBQXJCLEtBQTRDO0FBQ3pELFFBQU1DLEVBQUUsR0FBR0MsbUJBQU8sQ0FBQyxjQUFELENBQWxCOztBQUNBLE1BQUdILEdBQUcsQ0FBQ0ksTUFBSixLQUFlLEtBQWxCLEVBQXdCO0FBQ3RCLFFBQUk7QUFDRixZQUFNQyxXQUFXLEdBQUdILEVBQUUsQ0FBQ0ksWUFBSCxDQUFnQixpQkFBaEIsQ0FBcEI7QUFDQSxZQUFNQyxXQUFXLEdBQUdGLFdBQVcsQ0FBQ0csUUFBWixFQUFwQjs7QUFDQSxVQUFJLENBQUNELFdBQUwsRUFBa0I7QUFDaEJOLFFBQUFBLEdBQUcsQ0FBQ1EsVUFBSixHQUFpQixHQUFqQjtBQUNBUixRQUFBQSxHQUFHLENBQUNTLElBQUosQ0FBUyxFQUFUO0FBQ0Q7O0FBQ0QsWUFBTUMsS0FBaUIsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdOLFdBQVgsQ0FBMUI7QUFDQU4sTUFBQUEsR0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0EsYUFBT1IsR0FBRyxDQUFDUyxJQUFKLENBQVNDLEtBQVQsQ0FBUCxDQVRFLENBV0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsS0ExQkQsQ0EwQkUsT0FBTUcsQ0FBTixFQUFRO0FBQ1JDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0FiLE1BQUFBLEdBQUcsQ0FBQ1EsVUFBSixHQUFpQixHQUFqQjtBQUNBUixNQUFBQSxHQUFHLENBQUNTLElBQUosQ0FBU0ksQ0FBVDtBQUNELEtBL0JxQixDQWdDdEI7O0FBQ0Q7O0FBQ0RiLEVBQUFBLEdBQUcsQ0FBQ1EsVUFBSixHQUFpQixHQUFqQjtBQUNBTSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWWYsR0FBRyxDQUFDUSxVQUFoQjtBQUNBLFNBQU9SLEdBQUcsQ0FBQ2dCLEdBQUosRUFBUDtBQUNELENBdkNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10b2RvLy4vcGFnZXMvYXBpL3RvZG9zLnRzP2RiODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7VG9kb1R5cGV9IGZyb20gXCIuLi8uLi90eXBlcy90b2RvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAocmVxOk5leHRBcGlSZXF1ZXN0LCByZXM6TmV4dEFwaVJlc3BvbnNlKSA9PntcclxuICBjb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcclxuICBpZihyZXEubWV0aG9kID09PSBcIkdFVFwiKXtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHRvZG9zQnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKFwiZGF0YS90b2Rvcy5qc29uXCIpO1xyXG4gICAgICBjb25zdCB0b2Rvc1N0cmluZyA9IHRvZG9zQnVmZmVyLnRvU3RyaW5nKCk7XHJcbiAgICAgIGlmICghdG9kb3NTdHJpbmcpIHtcclxuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcclxuICAgICAgICByZXMuc2VuZChbXSk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdG9kb3M6IFRvZG9UeXBlW10gPSBKU09OLnBhcnNlKHRvZG9zU3RyaW5nKTtcclxuICAgICAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XHJcbiAgICAgIHJldHVybiByZXMuc2VuZCh0b2Rvcyk7XHJcblxyXG4gICAgICAvLyBjb25zdCB0b2RvcyA9IGF3YWl0IG5ldyBQcm9taXNlPFRvZG9UeXBlW10+KChyZXNvbHZlLCByZWplY3QpPT57XHJcbiAgICAgIC8vICAgZnMucmVhZEZpbGUoXCIvZGF0YS90b2Rvcy5qc29uXCIsIChlcnIsIGRhdGEpPT4ge1xyXG4gICAgICAvLyAgICAgaWYgKGVycikge1xyXG4gICAgICAvLyAgICAgICByZXR1cm4gcmVqZWN0KGVyci5tZXNzYWdlKTtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICAgIGNvbnN0IHRvZG9zRGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcclxuICAgICAgLy8gICAgIGlmKCF0b2Rvc0RhdGEpe1xyXG4gICAgICAvLyAgICAgICByZXR1cm4gcmVzb2x2ZShbXSk7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgICBjb25zdCB0b2RvcyA9IEpTT04ucGFyc2UoZGF0YS50b1N0cmluZygpKTtcclxuICAgICAgLy8gICAgIHJldHVybiByZXNvbHZlKHRvZG9zKTtcclxuICAgICAgLy8gICB9KTtcclxuICAgICAgLy8gfSk7XHJcbiAgICAgIC8vIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xyXG4gICAgICAvLyByZXR1cm4gcmVzLnNlbmQodG9kb3MpO1xyXG4gICAgfSBjYXRjaChlKXtcclxuICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwO1xyXG4gICAgICByZXMuc2VuZChlKTtcclxuICAgIH1cclxuICAgIC8vIHJldHVybiBjb25zb2xlLmxvZyhyZXMpXHJcbiAgfVxyXG4gIHJlcy5zdGF0dXNDb2RlID0gNDA1O1xyXG4gIGNvbnNvbGUubG9nKHJlcy5zdGF0dXNDb2RlKTtcclxuICByZXR1cm4gcmVzLmVuZCgpO1xyXG59Il0sIm5hbWVzIjpbInJlcSIsInJlcyIsImZzIiwicmVxdWlyZSIsIm1ldGhvZCIsInRvZG9zQnVmZmVyIiwicmVhZEZpbGVTeW5jIiwidG9kb3NTdHJpbmciLCJ0b1N0cmluZyIsInN0YXR1c0NvZGUiLCJzZW5kIiwidG9kb3MiLCJKU09OIiwicGFyc2UiLCJlIiwiY29uc29sZSIsImxvZyIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/todos.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/todos.ts"));
module.exports = __webpack_exports__;

})();