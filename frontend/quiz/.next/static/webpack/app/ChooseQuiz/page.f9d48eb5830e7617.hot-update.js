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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChooseQuiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n// \"use client\";\n// import { useEffect, useState } from \"react\";\n// import axios from \"axios\";\n// import { useRouter } from \"next/navigation\";\n// import Image from \"next/image\";\n// export default function ChooseQuiz() {\n//   const router = useRouter();\n//   const [categories, setCategories] = useState([]);\n//   const [hoveredCategory, setHoveredCategory] = useState();\n//   // camelCase\n//   // skever-case\n//   // lower_case\n//   // UPPERCASE\n//   useEffect(() => {\n//     const fetchCategories = async () => {\n//       try {\n//         const response = await axios.get(\"http://localhost:8000/categories\");\n//         setCategories(response.data.categories);\n//       } catch (error) {\n//         console.error(\"Error fetching categories:\", error);\n//       }\n//     };\n//     fetchCategories();\n//   }, []);\n//   const deleteCategoryAndQuizzes = async (categoryId) => {\n//     try {\n//       await axios.delete(`http://localhost:8000/categories/${categoryId}`);\n//       const response = await axios.get(\n//         `http://localhost:8000/quizzes?categoryId=${categoryId}`\n//       );\n//       const quizzes = response.data.quizzes;\n//       for (const quiz of quizzes) {\n//         await axios.delete(`http://localhost:8000/quizzes/${quiz._id}`);\n//       }\n//       const updatedCategories = categories.filter(\n//         (category) => category._id !== categoryId\n//       );\n//       setCategories(updatedCategories);\n//     } catch (error) {\n//       console.error(\"Error deleting category and quizzes:\", error);\n//     }\n//   };\n//   return (\n//     <div className=\"bg-blue-400 h-screen flex flex-col items-center justify-center text-white\">\n//       <div className=\"mb-12\">\n//         <h1 className=\"text-6xl font-bold\">Choose a Quiz</h1>\n//       </div>\n//       <div className=\"flex flex-wrap gap-12\">\n//         {categories.map((category) => (\n//           <div\n//             key={category._id}\n//             className=\"relative group\"\n//             onMouseEnter={() => setHoveredCategory(category._id)}\n//             onMouseLeave={() => setHoveredCategory(null)}\n//           >\n//             <div\n//               className=\"p-20 h-40 flex items-center justify-center rounded-lg bg-gray-700 hover:bg-gray-600 cursor-pointer text-center\"\n//               onClick={() => {\n//                 router.push(\n//                   `http://localhost:3000/playQuiz?lesson=${category.category}`\n//                 );  \n//               }}\n//             >\n//               <span className=\"text-lg\">{category.category}</span>\n//             </div>\n//             {hoveredCategory === category._id && (\n//               <button\n//                 className=\"absolute top-2 right-2 p-2 rounded-full bg-white\"\n//                 onClick={() => deleteCategoryAndQuizzes(category._id)}\n//               >\n//                 <Image\n//                   src=\"/trashcan.svg\"\n//                   alt=\"Trash Can\"\n//                   width={24}\n//                   height={24}\n//                 />\n//               </button>\n//             )}\n//           </div>\n//         ))}\n//       </div>\n//     </div>\n//   );\n// }\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ChooseQuiz() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [hoveredCategory, setHoveredCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchCategories = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/categories\");\n                setCategories(response.data.categories);\n            } catch (error) {\n                console.error(\"Error fetching categories:\", error);\n            }\n        };\n        fetchCategories();\n    }, []);\n    const deleteCategoryAndQuizzes = async (categoryId)=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].delete(\"http://localhost:8000/categories/\".concat(categoryId));\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/quizzes?categoryId=\".concat(categoryId));\n            const quizzes = response.data.quizzes;\n            for (const quiz of quizzes){\n                await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].delete(\"http://localhost:8000/quizzes/\".concat(quiz._id));\n            }\n            const updatedCategories = categories.filter((category)=>category._id !== categoryId);\n            setCategories(updatedCategories);\n        } catch (error) {\n            console.error(\"Error deleting category and quizzes:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-blue-400 h-screen flex flex-col items-center justify-center text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-6xl font-bold\",\n                    children: \"Choose a Quiz\"\n                }, void 0, false, {\n                    fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                    lineNumber: 145,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                lineNumber: 144,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap gap-12\",\n                children: categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative group\",\n                        onMouseEnter: ()=>setHoveredCategory(category._id),\n                        onMouseLeave: ()=>setHoveredCategory(null),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-20 h-40 flex items-center justify-center rounded-lg bg-gray-700 hover:bg-gray-600 cursor-pointer text-center\",\n                                onClick: ()=>{\n                                    router.push(\"http://localhost:3000/playQuiz?lesson=\".concat(category.category));\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-lg\",\n                                    children: category.category\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                                    lineNumber: 163,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                                lineNumber: 155,\n                                columnNumber: 13\n                            }, this),\n                            hoveredCategory === category._id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"absolute top-2 right-2 p-2 rounded-full bg-white\",\n                                onClick: ()=>deleteCategoryAndQuizzes(category._id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/trashcan.svg\",\n                                    alt: \"Trash Can\",\n                                    width: 24,\n                                    height: 24\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                                    lineNumber: 170,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                                lineNumber: 166,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, category._id, true, {\n                        fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                        lineNumber: 149,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                lineNumber: 147,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n        lineNumber: 143,\n        columnNumber: 5\n    }, this);\n}\n_s(ChooseQuiz, \"7+UbaeSC2n8uOJ1dQHBZ0q+omLw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ChooseQuiz;\nvar _c;\n$RefreshReg$(_c, \"ChooseQuiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ2hvb3NlUXVpei9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLGdCQUFnQjtBQUVoQiwrQ0FBK0M7QUFDL0MsNkJBQTZCO0FBQzdCLCtDQUErQztBQUMvQyxrQ0FBa0M7QUFFbEMseUNBQXlDO0FBQ3pDLGdDQUFnQztBQUNoQyxzREFBc0Q7QUFDdEQsOERBQThEO0FBQzlELGlCQUFpQjtBQUNqQixtQkFBbUI7QUFDbkIsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUVqQixzQkFBc0I7QUFDdEIsNENBQTRDO0FBQzVDLGNBQWM7QUFDZCxnRkFBZ0Y7QUFDaEYsbURBQW1EO0FBQ25ELDBCQUEwQjtBQUMxQiw4REFBOEQ7QUFDOUQsVUFBVTtBQUNWLFNBQVM7QUFFVCx5QkFBeUI7QUFDekIsWUFBWTtBQUVaLDZEQUE2RDtBQUM3RCxZQUFZO0FBQ1osOEVBQThFO0FBRTlFLDBDQUEwQztBQUMxQyxtRUFBbUU7QUFDbkUsV0FBVztBQUNYLCtDQUErQztBQUUvQyxzQ0FBc0M7QUFDdEMsMkVBQTJFO0FBQzNFLFVBQVU7QUFFVixxREFBcUQ7QUFDckQsb0RBQW9EO0FBQ3BELFdBQVc7QUFDWCwwQ0FBMEM7QUFDMUMsd0JBQXdCO0FBQ3hCLHNFQUFzRTtBQUN0RSxRQUFRO0FBQ1IsT0FBTztBQUVQLGFBQWE7QUFDYixrR0FBa0c7QUFDbEcsZ0NBQWdDO0FBQ2hDLGdFQUFnRTtBQUNoRSxlQUFlO0FBQ2YsZ0RBQWdEO0FBQ2hELDBDQUEwQztBQUMxQyxpQkFBaUI7QUFDakIsaUNBQWlDO0FBQ2pDLHlDQUF5QztBQUN6QyxvRUFBb0U7QUFDcEUsNERBQTREO0FBQzVELGNBQWM7QUFDZCxtQkFBbUI7QUFDbkIsMklBQTJJO0FBQzNJLGlDQUFpQztBQUNqQywrQkFBK0I7QUFDL0IsaUZBQWlGO0FBQ2pGLHVCQUF1QjtBQUN2QixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLHFFQUFxRTtBQUNyRSxxQkFBcUI7QUFDckIscURBQXFEO0FBQ3JELHdCQUF3QjtBQUN4QiwrRUFBK0U7QUFDL0UseUVBQXlFO0FBQ3pFLGtCQUFrQjtBQUNsQix5QkFBeUI7QUFDekIsd0NBQXdDO0FBQ3hDLG9DQUFvQztBQUNwQywrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBQ2hDLHFCQUFxQjtBQUNyQiwwQkFBMEI7QUFDMUIsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQixjQUFjO0FBQ2QsZUFBZTtBQUNmLGFBQWE7QUFDYixPQUFPO0FBQ1AsSUFBSTs7O0FBTXdDO0FBQ2xCO0FBQ2tCO0FBQ2I7QUFFaEIsU0FBU0s7O0lBQ3RCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUMvQyxNQUFNLENBQUNRLGlCQUFpQkMsbUJBQW1CLEdBQUdULCtDQUFRQTtJQUV0REQsZ0RBQVNBLENBQUM7UUFDUixNQUFNVyxrQkFBa0I7WUFDdEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1WLDZDQUFLQSxDQUFDVyxHQUFHLENBQUM7Z0JBQ2pDTCxjQUFjSSxTQUFTRSxJQUFJLENBQUNQLFVBQVU7WUFDeEMsRUFBRSxPQUFPUSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsOEJBQThCQTtZQUM5QztRQUNGO1FBRUFKO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTU0sMkJBQTJCLE9BQU9DO1FBQ3RDLElBQUk7WUFDRixNQUFNaEIsNkNBQUtBLENBQUNpQixNQUFNLENBQUMsb0NBQStDLE9BQVhEO1lBRXZELE1BQU1OLFdBQVcsTUFBTVYsNkNBQUtBLENBQUNXLEdBQUcsQ0FBQyw0Q0FBdUQsT0FBWEs7WUFDN0UsTUFBTUUsVUFBVVIsU0FBU0UsSUFBSSxDQUFDTSxPQUFPO1lBRXJDLEtBQUssTUFBTUMsUUFBUUQsUUFBUztnQkFDMUIsTUFBTWxCLDZDQUFLQSxDQUFDaUIsTUFBTSxDQUFDLGlDQUEwQyxPQUFURSxLQUFLQyxHQUFHO1lBQzlEO1lBRUEsTUFBTUMsb0JBQW9CaEIsV0FBV2lCLE1BQU0sQ0FBQyxDQUFDQyxXQUFhQSxTQUFTSCxHQUFHLEtBQUtKO1lBQzNFVixjQUFjZTtRQUNoQixFQUFFLE9BQU9SLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdDQUF3Q0E7UUFDeEQ7SUFDRjtJQUlBLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFHRCxXQUFVOzhCQUFxQjs7Ozs7Ozs7Ozs7MEJBRXJDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWnBCLFdBQVdzQixHQUFHLENBQUMsQ0FBQ0oseUJBQ2YsOERBQUNDO3dCQUVDQyxXQUFVO3dCQUNWRyxjQUFjLElBQU1wQixtQkFBbUJlLFNBQVNILEdBQUc7d0JBQ25EUyxjQUFjLElBQU1yQixtQkFBbUI7OzBDQUV2Qyw4REFBQ2dCO2dDQUNDQyxXQUFVO2dDQUNWSyxTQUFTO29DQUNQMUIsT0FBTzJCLElBQUksQ0FDVCx5Q0FBMkQsT0FBbEJSLFNBQVNBLFFBQVE7Z0NBRTlEOzBDQUVBLDRFQUFDUztvQ0FBS1AsV0FBVTs4Q0FBV0YsU0FBU0EsUUFBUTs7Ozs7Ozs7Ozs7NEJBRTdDaEIsb0JBQW9CZ0IsU0FBU0gsR0FBRyxrQkFDL0IsOERBQUNhO2dDQUNDUixXQUFVO2dDQUNWSyxTQUFTLElBQU1mLHlCQUF5QlEsU0FBU0gsR0FBRzswQ0FFcEQsNEVBQUNsQixtREFBS0E7b0NBQ0pnQyxLQUFJO29DQUNKQyxLQUFJO29DQUNKQyxPQUFPO29DQUNQQyxRQUFROzs7Ozs7Ozs7Ozs7dUJBeEJUZCxTQUFTSCxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUM3QjtHQS9Fd0JqQjs7UUFDUEYsc0RBQVNBOzs7S0FERkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9DaG9vc2VRdWl6L3BhZ2UuanM/OTBmMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBcInVzZSBjbGllbnRcIjtcblxuLy8gaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuLy8gaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENob29zZVF1aXooKSB7XG4vLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuLy8gICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XG4vLyAgIGNvbnN0IFtob3ZlcmVkQ2F0ZWdvcnksIHNldEhvdmVyZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgpO1xuLy8gICAvLyBjYW1lbENhc2Vcbi8vICAgLy8gc2tldmVyLWNhc2Vcbi8vICAgLy8gbG93ZXJfY2FzZVxuLy8gICAvLyBVUFBFUkNBU0VcblxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIGNvbnN0IGZldGNoQ2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcbi8vICAgICAgIHRyeSB7XG4vLyAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2NhdGVnb3JpZXNcIik7XG4vLyAgICAgICAgIHNldENhdGVnb3JpZXMocmVzcG9uc2UuZGF0YS5jYXRlZ29yaWVzKTtcbi8vICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjYXRlZ29yaWVzOlwiLCBlcnJvcik7XG4vLyAgICAgICB9XG4vLyAgICAgfTtcblxuLy8gICAgIGZldGNoQ2F0ZWdvcmllcygpO1xuLy8gICB9LCBbXSk7XG5cbi8vICAgY29uc3QgZGVsZXRlQ2F0ZWdvcnlBbmRRdWl6emVzID0gYXN5bmMgKGNhdGVnb3J5SWQpID0+IHtcbi8vICAgICB0cnkge1xuLy8gICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvY2F0ZWdvcmllcy8ke2NhdGVnb3J5SWR9YCk7XG5cbi8vICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuLy8gICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL3F1aXp6ZXM/Y2F0ZWdvcnlJZD0ke2NhdGVnb3J5SWR9YFxuLy8gICAgICAgKTtcbi8vICAgICAgIGNvbnN0IHF1aXp6ZXMgPSByZXNwb25zZS5kYXRhLnF1aXp6ZXM7XG5cbi8vICAgICAgIGZvciAoY29uc3QgcXVpeiBvZiBxdWl6emVzKSB7XG4vLyAgICAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDo4MDAwL3F1aXp6ZXMvJHtxdWl6Ll9pZH1gKTtcbi8vICAgICAgIH1cblxuLy8gICAgICAgY29uc3QgdXBkYXRlZENhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLmZpbHRlcihcbi8vICAgICAgICAgKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5faWQgIT09IGNhdGVnb3J5SWRcbi8vICAgICAgICk7XG4vLyAgICAgICBzZXRDYXRlZ29yaWVzKHVwZGF0ZWRDYXRlZ29yaWVzKTtcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGNhdGVnb3J5IGFuZCBxdWl6emVzOlwiLCBlcnJvcik7XG4vLyAgICAgfVxuLy8gICB9O1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTQwMCBoLXNjcmVlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlXCI+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEyXCI+XG4vLyAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBmb250LWJvbGRcIj5DaG9vc2UgYSBRdWl6PC9oMT5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMTJcIj5cbi8vICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuLy8gICAgICAgICAgIDxkaXZcbi8vICAgICAgICAgICAgIGtleT17Y2F0ZWdvcnkuX2lkfVxuLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JvdXBcIlxuLy8gICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlcmVkQ2F0ZWdvcnkoY2F0ZWdvcnkuX2lkKX1cbi8vICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXJlZENhdGVnb3J5KG51bGwpfVxuLy8gICAgICAgICAgID5cbi8vICAgICAgICAgICAgIDxkaXZcbi8vICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yMCBoLTQwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbGcgYmctZ3JheS03MDAgaG92ZXI6YmctZ3JheS02MDAgY3Vyc29yLXBvaW50ZXIgdGV4dC1jZW50ZXJcIlxuLy8gICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXG4vLyAgICAgICAgICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL3BsYXlRdWl6P2xlc3Nvbj0ke2NhdGVnb3J5LmNhdGVnb3J5fWBcbi8vICAgICAgICAgICAgICAgICApOyAgXG4vLyAgICAgICAgICAgICAgIH19XG4vLyAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGdcIj57Y2F0ZWdvcnkuY2F0ZWdvcnl9PC9zcGFuPlxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICB7aG92ZXJlZENhdGVnb3J5ID09PSBjYXRlZ29yeS5faWQgJiYgKFxuLy8gICAgICAgICAgICAgICA8YnV0dG9uXG4vLyAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiBwLTIgcm91bmRlZC1mdWxsIGJnLXdoaXRlXCJcbi8vICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVDYXRlZ29yeUFuZFF1aXp6ZXMoY2F0ZWdvcnkuX2lkKX1cbi8vICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgIDxJbWFnZVxuLy8gICAgICAgICAgICAgICAgICAgc3JjPVwiL3RyYXNoY2FuLnN2Z1wiXG4vLyAgICAgICAgICAgICAgICAgICBhbHQ9XCJUcmFzaCBDYW5cIlxuLy8gICAgICAgICAgICAgICAgICAgd2lkdGg9ezI0fVxuLy8gICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNH1cbi8vICAgICAgICAgICAgICAgICAvPlxuLy8gICAgICAgICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgICAgICl9XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICkpfVxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9XG5cblxuXG5cInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENob29zZVF1aXooKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtob3ZlcmVkQ2F0ZWdvcnksIHNldEhvdmVyZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvY2F0ZWdvcmllc1wiKTtcbiAgICAgICAgc2V0Q2F0ZWdvcmllcyhyZXNwb25zZS5kYXRhLmNhdGVnb3JpZXMpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNhdGVnb3JpZXM6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hDYXRlZ29yaWVzKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBkZWxldGVDYXRlZ29yeUFuZFF1aXp6ZXMgPSBhc3luYyAoY2F0ZWdvcnlJZCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBheGlvcy5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9jYXRlZ29yaWVzLyR7Y2F0ZWdvcnlJZH1gKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9xdWl6emVzP2NhdGVnb3J5SWQ9JHtjYXRlZ29yeUlkfWApO1xuICAgICAgY29uc3QgcXVpenplcyA9IHJlc3BvbnNlLmRhdGEucXVpenplcztcblxuICAgICAgZm9yIChjb25zdCBxdWl6IG9mIHF1aXp6ZXMpIHtcbiAgICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvcXVpenplcy8ke3F1aXouX2lkfWApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB1cGRhdGVkQ2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkuX2lkICE9PSBjYXRlZ29yeUlkKTtcbiAgICAgIHNldENhdGVnb3JpZXModXBkYXRlZENhdGVnb3JpZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgY2F0ZWdvcnkgYW5kIHF1aXp6ZXM6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtNDAwIGgtc2NyZWVuIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTJcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIGZvbnQtYm9sZFwiPkNob29zZSBhIFF1aXo8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0xMlwiPlxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtjYXRlZ29yeS5faWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncm91cFwiXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyZWRDYXRlZ29yeShjYXRlZ29yeS5faWQpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmVkQ2F0ZWdvcnkobnVsbCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIwIGgtNDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1sZyBiZy1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTYwMCBjdXJzb3ItcG9pbnRlciB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcbiAgICAgICAgICAgICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjMwMDAvcGxheVF1aXo/bGVzc29uPSR7Y2F0ZWdvcnkuY2F0ZWdvcnl9YFxuICAgICAgICAgICAgICAgICk7ICBcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZ1wiPntjYXRlZ29yeS5jYXRlZ29yeX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtob3ZlcmVkQ2F0ZWdvcnkgPT09IGNhdGVnb3J5Ll9pZCAmJiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMiByaWdodC0yIHAtMiByb3VuZGVkLWZ1bGwgYmctd2hpdGVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUNhdGVnb3J5QW5kUXVpenplcyhjYXRlZ29yeS5faWQpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvdHJhc2hjYW4uc3ZnXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlRyYXNoIENhblwiXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjR9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlUm91dGVyIiwiSW1hZ2UiLCJDaG9vc2VRdWl6Iiwicm91dGVyIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJob3ZlcmVkQ2F0ZWdvcnkiLCJzZXRIb3ZlcmVkQ2F0ZWdvcnkiLCJmZXRjaENhdGVnb3JpZXMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJkZWxldGVDYXRlZ29yeUFuZFF1aXp6ZXMiLCJjYXRlZ29yeUlkIiwiZGVsZXRlIiwicXVpenplcyIsInF1aXoiLCJfaWQiLCJ1cGRhdGVkQ2F0ZWdvcmllcyIsImZpbHRlciIsImNhdGVnb3J5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvbkNsaWNrIiwicHVzaCIsInNwYW4iLCJidXR0b24iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ChooseQuiz/page.js\n"));

/***/ })

});