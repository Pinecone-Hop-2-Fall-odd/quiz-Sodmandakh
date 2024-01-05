"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/ChooseQuiz/page",{

/***/ "(app-pages-browser)/./src/app/ChooseQuiz/page.js":
/*!************************************!*\
  !*** ./src/app/ChooseQuiz/page.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChooseQuiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n// \"use client\";\n// import { useEffect, useState } from \"react\";\n// import axios from \"axios\";\n// import { useRouter } from \"next/navigation\";\n// import Image from \"next/image\";\n// export default function ChooseQuiz() {\n//   const router = useRouter();\n//   const [categories, setCategories] = useState([]);\n//   const [hoveredCategory, setHoveredCategory] = useState();\n//   // camelCase\n//   // skever-case\n//   // lower_case\n//   // UPPERCASE\n//   useEffect(() => {\n//     const fetchCategories = async () => {\n//       try {\n//         const response = await axios.get(\"http://localhost:8000/categories\");\n//         setCategories(response.data.categories);\n//       } catch (error) {\n//         console.error(\"Error fetching categories:\", error);\n//       }\n//     };\n//     fetchCategories();\n//   }, []);\n//   const deleteCategoryAndQuizzes = async (categoryId) => {\n//     try {\n//       await axios.delete(`http://localhost:8000/categories/${categoryId}`);\n//       const response = await axios.get(\n//         `http://localhost:8000/quizzes?categoryId=${categoryId}`\n//       );\n//       const quizzes = response.data.quizzes;\n//       for (const quiz of quizzes) {\n//         await axios.delete(`http://localhost:8000/quizzes/${quiz._id}`);\n//       }\n//       const updatedCategories = categories.filter(\n//         (category) => category._id !== categoryId\n//       );\n//       setCategories(updatedCategories);\n//     } catch (error) {\n//       console.error(\"Error deleting category and quizzes:\", error);\n//     }\n//   };\n//   return (\n//     <div className=\"bg-blue-400 h-screen flex flex-col items-center justify-center text-white\">\n//       <div className=\"mb-12\">\n//         <h1 className=\"text-6xl font-bold\">Choose a Quiz</h1>\n//       </div>\n//       <div className=\"flex flex-wrap gap-12\">\n//         {categories.map((category) => (\n//           <div\n//             key={category._id}\n//             className=\"relative group\"\n//             onMouseEnter={() => setHoveredCategory(category._id)}\n//             onMouseLeave={() => setHoveredCategory(null)}\n//           >\n//             <div\n//               className=\"p-20 h-40 flex items-center justify-center rounded-lg bg-gray-700 hover:bg-gray-600 cursor-pointer text-center\"\n//               onClick={() => {\n//                 router.push(\n//                   `http://localhost:3000/playQuiz?lesson=${category.category}`\n//                 );  \n//               }}\n//             >\n//               <span className=\"text-lg\">{category.category}</span>\n//             </div>\n//             {hoveredCategory === category._id && (\n//               <button\n//                 className=\"absolute top-2 right-2 p-2 rounded-full bg-white\"\n//                 onClick={() => deleteCategoryAndQuizzes(category._id)}\n//               >\n//                 <Image\n//                   src=\"/trashcan.svg\"\n//                   alt=\"Trash Can\"\n//                   width={24}\n//                   height={24}\n//                 />\n//               </button>\n//             )}\n//           </div>\n//         ))}\n//       </div>\n//     </div>\n//   );\n// }\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ChooseQuiz() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [hoveredCategory, setHoveredCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchCategories();\n    }, []);\n    const deleteCategoryAndQuizzes = async (categoryId)=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].delete(\"http://localhost:8000/categories/\".concat(categoryId));\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/quizzes?categoryId=\".concat(categoryId));\n            const quizzes = response.data.quizzes;\n            for (const quiz of quizzes){\n                await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].delete(\"http://localhost:8000/quizzes/\".concat(quiz._id));\n            }\n            const updatedCategories = categories.filter((category)=>category._id !== categoryId);\n            setCategories(updatedCategories);\n        } catch (error) {\n            console.error(\"Error deleting category and quizzes:\", error);\n        }\n        fetchCategories();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-blue-400 h-screen flex flex-col items-center justify-center text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-6xl font-bold\",\n                    children: \"Choose a Quiz\"\n                }, void 0, false, {\n                    fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                    lineNumber: 138,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap gap-12\",\n                children: categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative group\",\n                        onMouseEnter: ()=>setHoveredCategory(category._id),\n                        onMouseLeave: ()=>setHoveredCategory(null),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-20 h-40 flex items-center justify-center rounded-lg bg-gray-700 hover:bg-gray-600 cursor-pointer text-center\",\n                                onClick: ()=>{\n                                    router.push(\"http://localhost:3000/playQuiz?lesson=\".concat(category.category));\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-lg\",\n                                    children: category.category\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                                    lineNumber: 156,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                                lineNumber: 148,\n                                columnNumber: 13\n                            }, this),\n                            hoveredCategory === category._id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"absolute top-2 right-2 p-2 rounded-full bg-white\",\n                                onClick: ()=>deleteCategoryAndQuizzes(category._id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/trashcan.svg\",\n                                    alt: \"Trash Can\",\n                                    width: 24,\n                                    height: 24\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                                    lineNumber: 163,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                                lineNumber: 159,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, category._id, true, {\n                        fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                        lineNumber: 142,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n        lineNumber: 136,\n        columnNumber: 5\n    }, this);\n}\n_s(ChooseQuiz, \"7+UbaeSC2n8uOJ1dQHBZ0q+omLw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ChooseQuiz;\nvar _c;\n$RefreshReg$(_c, \"ChooseQuiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ2hvb3NlUXVpei9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFnQjtBQUVoQiwrQ0FBK0M7QUFDL0MsNkJBQTZCO0FBQzdCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFFbEMseUNBQXlDO0FBQ3pDLGdDQUFnQztBQUNoQyxzREFBc0Q7QUFDdEQsOERBQThEO0FBQzlELGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUVqQixzQkFBc0I7QUFDdEIsNENBQTRDO0FBQzVDLGNBQWM7QUFDZCxnRkFBZ0Y7QUFDaEYsbURBQW1EO0FBQ25ELDBCQUEwQjtBQUMxQiw4REFBOEQ7QUFDOUQsVUFBVTtBQUNWLFNBQVM7QUFFVCx5QkFBeUI7QUFDekIsWUFBWTtBQUVaLDZEQUE2RDtBQUM3RCxZQUFZO0FBQ1osOEVBQThFO0FBRTlFLDBDQUEwQztBQUMxQyxtRUFBbUU7QUFDbkUsV0FBVztBQUNYLCtDQUErQztBQUUvQyxzQ0FBc0M7QUFDdEMsMkVBQTJFO0FBQzNFLFVBQVU7QUFFVixxREFBcUQ7QUFDckQsb0RBQW9EO0FBQ3BELFdBQVc7QUFDWCwwQ0FBMEM7QUFDMUMsd0JBQXdCO0FBQ3hCLHNFQUFzRTtBQUN0RSxRQUFRO0FBQ1IsT0FBTztBQUVQLGFBQWE7QUFDYixrR0FBa0c7QUFDbEcsZ0NBQWdDO0FBQ2hDLGdFQUFnRTtBQUNoRSxlQUFlO0FBQ2YsZ0RBQWdEO0FBQ2hELDBDQUEwQztBQUMxQyxpQkFBaUI7QUFDakIsaUNBQWlDO0FBQ2pDLHlDQUF5QztBQUN6QyxvRUFBb0U7QUFDcEUsNERBQTREO0FBQzVELGNBQWM7QUFDZCxtQkFBbUI7QUFDbkIsMklBQTJJO0FBQzNJLGlDQUFpQztBQUNqQywrQkFBK0I7QUFDL0IsaUZBQWlGO0FBQ2pGLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLHFFQUFxRTtBQUNyRSxxQkFBcUI7QUFDckIscURBQXFEO0FBQ3JELHdCQUF3QjtBQUN4QiwrRUFBK0U7QUFDL0UseUVBQXlFO0FBQ3pFLGtCQUFrQjtBQUNsQix5QkFBeUI7QUFDekIsd0NBQXdDO0FBQ3hDLG9DQUFvQztBQUNwQywrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBQ2hDLHFCQUFxQjtBQUNyQiwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQixjQUFjO0FBQ2QsZUFBZTtBQUNmLGFBQWE7QUFDYixPQUFPO0FBQ1AsSUFBSTs7O0FBTXdDO0FBQ2xCO0FBQ2tCO0FBQ2I7QUFFaEIsU0FBU0s7O0lBQ3RCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUMvQyxNQUFNLENBQUNRLGlCQUFpQkMsbUJBQW1CLEdBQUdULCtDQUFRQTtJQUV0REQsZ0RBQVNBLENBQUM7UUFHUlc7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQywyQkFBMkIsT0FBT0M7UUFDdEMsSUFBSTtZQUNGLE1BQU1YLDZDQUFLQSxDQUFDWSxNQUFNLENBQUMsb0NBQStDLE9BQVhEO1lBRXZELE1BQU1FLFdBQVcsTUFBTWIsNkNBQUtBLENBQUNjLEdBQUcsQ0FBQyw0Q0FBdUQsT0FBWEg7WUFDN0UsTUFBTUksVUFBVUYsU0FBU0csSUFBSSxDQUFDRCxPQUFPO1lBRXJDLEtBQUssTUFBTUUsUUFBUUYsUUFBUztnQkFDMUIsTUFBTWYsNkNBQUtBLENBQUNZLE1BQU0sQ0FBQyxpQ0FBMEMsT0FBVEssS0FBS0MsR0FBRztZQUM5RDtZQUVBLE1BQU1DLG9CQUFvQmQsV0FBV2UsTUFBTSxDQUFDLENBQUNDLFdBQWFBLFNBQVNILEdBQUcsS0FBS1A7WUFDM0VMLGNBQWNhO1FBQ2hCLEVBQUUsT0FBT0csT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsd0NBQXdDQTtRQUN4RDtRQUNBYjtJQUNGO0lBR0EscUJBQ0UsOERBQUNlO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUdELFdBQVU7OEJBQXFCOzs7Ozs7Ozs7OzswQkFFckMsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNacEIsV0FBV3NCLEdBQUcsQ0FBQyxDQUFDTix5QkFDZiw4REFBQ0c7d0JBRUNDLFdBQVU7d0JBQ1ZHLGNBQWMsSUFBTXBCLG1CQUFtQmEsU0FBU0gsR0FBRzt3QkFDbkRXLGNBQWMsSUFBTXJCLG1CQUFtQjs7MENBRXZDLDhEQUFDZ0I7Z0NBQ0NDLFdBQVU7Z0NBQ1ZLLFNBQVM7b0NBQ1AxQixPQUFPMkIsSUFBSSxDQUNULHlDQUEyRCxPQUFsQlYsU0FBU0EsUUFBUTtnQ0FFOUQ7MENBRUEsNEVBQUNXO29DQUFLUCxXQUFVOzhDQUFXSixTQUFTQSxRQUFROzs7Ozs7Ozs7Ozs0QkFFN0NkLG9CQUFvQmMsU0FBU0gsR0FBRyxrQkFDL0IsOERBQUNlO2dDQUNDUixXQUFVO2dDQUNWSyxTQUFTLElBQU1wQix5QkFBeUJXLFNBQVNILEdBQUc7MENBRXBELDRFQUFDaEIsbURBQUtBO29DQUNKZ0MsS0FBSTtvQ0FDSkMsS0FBSTtvQ0FDSkMsT0FBTztvQ0FDUEMsUUFBUTs7Ozs7Ozs7Ozs7O3VCQXhCVGhCLFNBQVNILEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQzdCO0dBeEV3QmY7O1FBQ1BGLHNEQUFTQTs7O0tBREZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQ2hvb3NlUXVpei9wYWdlLmpzPzkwZjEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gXCJ1c2UgY2xpZW50XCI7XG5cbi8vIGltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbi8vIGltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaG9vc2VRdWl6KCkge1xuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbi8vICAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xuLy8gICBjb25zdCBbaG92ZXJlZENhdGVnb3J5LCBzZXRIb3ZlcmVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoKTtcbi8vICAgLy8gY2FtZWxDYXNlXG4vLyAgIC8vIHNrZXZlci1jYXNlXG4vLyAgIC8vIGxvd2VyX2Nhc2Vcbi8vICAgLy8gVVBQRVJDQVNFXG5cbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICBjb25zdCBmZXRjaENhdGVnb3JpZXMgPSBhc3luYyAoKSA9PiB7XG4vLyAgICAgICB0cnkge1xuLy8gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9jYXRlZ29yaWVzXCIpO1xuLy8gICAgICAgICBzZXRDYXRlZ29yaWVzKHJlc3BvbnNlLmRhdGEuY2F0ZWdvcmllcyk7XG4vLyAgICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2F0ZWdvcmllczpcIiwgZXJyb3IpO1xuLy8gICAgICAgfVxuLy8gICAgIH07XG5cbi8vICAgICBmZXRjaENhdGVnb3JpZXMoKTtcbi8vICAgfSwgW10pO1xuXG4vLyAgIGNvbnN0IGRlbGV0ZUNhdGVnb3J5QW5kUXVpenplcyA9IGFzeW5jIChjYXRlZ29yeUlkKSA9PiB7XG4vLyAgICAgdHJ5IHtcbi8vICAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2NhdGVnb3JpZXMvJHtjYXRlZ29yeUlkfWApO1xuXG4vLyAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcbi8vICAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9xdWl6emVzP2NhdGVnb3J5SWQ9JHtjYXRlZ29yeUlkfWBcbi8vICAgICAgICk7XG4vLyAgICAgICBjb25zdCBxdWl6emVzID0gcmVzcG9uc2UuZGF0YS5xdWl6emVzO1xuXG4vLyAgICAgICBmb3IgKGNvbnN0IHF1aXogb2YgcXVpenplcykge1xuLy8gICAgICAgICBhd2FpdCBheGlvcy5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9xdWl6emVzLyR7cXVpei5faWR9YCk7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIGNvbnN0IHVwZGF0ZWRDYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5maWx0ZXIoXG4vLyAgICAgICAgIChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkuX2lkICE9PSBjYXRlZ29yeUlkXG4vLyAgICAgICApO1xuLy8gICAgICAgc2V0Q2F0ZWdvcmllcyh1cGRhdGVkQ2F0ZWdvcmllcyk7XG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbi8vICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBjYXRlZ29yeSBhbmQgcXVpenplczpcIiwgZXJyb3IpO1xuLy8gICAgIH1cbi8vICAgfTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS00MDAgaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZVwiPlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMlwiPlxuLy8gICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgZm9udC1ib2xkXCI+Q2hvb3NlIGEgUXVpejwvaDE+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTEyXCI+XG4vLyAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcbi8vICAgICAgICAgICA8ZGl2XG4vLyAgICAgICAgICAgICBrZXk9e2NhdGVnb3J5Ll9pZH1cbi8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGdyb3VwXCJcbi8vICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJlZENhdGVnb3J5KGNhdGVnb3J5Ll9pZCl9XG4vLyAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyZWRDYXRlZ29yeShudWxsKX1cbi8vICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICA8ZGl2XG4vLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMjAgaC00MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWxnIGJnLWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNjAwIGN1cnNvci1wb2ludGVyIHRleHQtY2VudGVyXCJcbi8vICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFxuLy8gICAgICAgICAgICAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9wbGF5UXVpej9sZXNzb249JHtjYXRlZ29yeS5jYXRlZ29yeX1gXG4vLyAgICAgICAgICAgICAgICAgKTsgIFxuLy8gICAgICAgICAgICAgICB9fVxuLy8gICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+e2NhdGVnb3J5LmNhdGVnb3J5fTwvc3Bhbj5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAge2hvdmVyZWRDYXRlZ29yeSA9PT0gY2F0ZWdvcnkuX2lkICYmIChcbi8vICAgICAgICAgICAgICAgPGJ1dHRvblxuLy8gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTIgcC0yIHJvdW5kZWQtZnVsbCBiZy13aGl0ZVwiXG4vLyAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlQ2F0ZWdvcnlBbmRRdWl6emVzKGNhdGVnb3J5Ll9pZCl9XG4vLyAgICAgICAgICAgICAgID5cbi8vICAgICAgICAgICAgICAgICA8SW1hZ2Vcbi8vICAgICAgICAgICAgICAgICAgIHNyYz1cIi90cmFzaGNhbi5zdmdcIlxuLy8gICAgICAgICAgICAgICAgICAgYWx0PVwiVHJhc2ggQ2FuXCJcbi8vICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNH1cbi8vICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjR9XG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgICAgICApfVxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICApKX1cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfVxuXG5cblxuXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaG9vc2VRdWl6KCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaG92ZXJlZENhdGVnb3J5LCBzZXRIb3ZlcmVkQ2F0ZWdvcnldID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgXG5cbiAgICBmZXRjaENhdGVnb3JpZXMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGRlbGV0ZUNhdGVnb3J5QW5kUXVpenplcyA9IGFzeW5jIChjYXRlZ29yeUlkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2NhdGVnb3JpZXMvJHtjYXRlZ29yeUlkfWApO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL3F1aXp6ZXM/Y2F0ZWdvcnlJZD0ke2NhdGVnb3J5SWR9YCk7XG4gICAgICBjb25zdCBxdWl6emVzID0gcmVzcG9uc2UuZGF0YS5xdWl6emVzO1xuXG4gICAgICBmb3IgKGNvbnN0IHF1aXogb2YgcXVpenplcykge1xuICAgICAgICBhd2FpdCBheGlvcy5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9xdWl6emVzLyR7cXVpei5faWR9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVwZGF0ZWRDYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5faWQgIT09IGNhdGVnb3J5SWQpO1xuICAgICAgc2V0Q2F0ZWdvcmllcyh1cGRhdGVkQ2F0ZWdvcmllcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBjYXRlZ29yeSBhbmQgcXVpenplczpcIiwgZXJyb3IpO1xuICAgIH1cbiAgICBmZXRjaENhdGVnb3JpZXMoKTtcbiAgfTtcbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtNDAwIGgtc2NyZWVuIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIGZvbnQtYm9sZFwiPkNob29zZSBhIFF1aXo8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0xMlwiPlxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtjYXRlZ29yeS5faWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncm91cFwiXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyZWRDYXRlZ29yeShjYXRlZ29yeS5faWQpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmVkQ2F0ZWdvcnkobnVsbCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIwIGgtNDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1sZyBiZy1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTYwMCBjdXJzb3ItcG9pbnRlciB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcbiAgICAgICAgICAgICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvcGxheVF1aXo/bGVzc29uPSR7Y2F0ZWdvcnkuY2F0ZWdvcnl9YFxuICAgICAgICAgICAgICAgICk7ICBcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZ1wiPntjYXRlZ29yeS5jYXRlZ29yeX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtob3ZlcmVkQ2F0ZWdvcnkgPT09IGNhdGVnb3J5Ll9pZCAmJiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMiByaWdodC0yIHAtMiByb3VuZGVkLWZ1bGwgYmctd2hpdGVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUNhdGVnb3J5QW5kUXVpenplcyhjYXRlZ29yeS5faWQpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvdHJhc2hjYW4uc3ZnXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlRyYXNoIENhblwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjR9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlUm91dGVyIiwiSW1hZ2UiLCJDaG9vc2VRdWl6Iiwicm91dGVyIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJob3ZlcmVkQ2F0ZWdvcnkiLCJzZXRIb3ZlcmVkQ2F0ZWdvcnkiLCJmZXRjaENhdGVnb3JpZXMiLCJkZWxldGVDYXRlZ29yeUFuZFF1aXp6ZXMiLCJjYXRlZ29yeUlkIiwiZGVsZXRlIiwicmVzcG9uc2UiLCJnZXQiLCJxdWl6emVzIiwiZGF0YSIsInF1aXoiLCJfaWQiLCJ1cGRhdGVkQ2F0ZWdvcmllcyIsImZpbHRlciIsImNhdGVnb3J5IiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvbkNsaWNrIiwicHVzaCIsInNwYW4iLCJidXR0b24iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ChooseQuiz/page.js\n"));

/***/ })

});