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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChooseQuiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ChooseQuiz() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [hoveredCategory, setHoveredCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // camelCase\n    // skever-case\n    // lower_case\n    // UPPERCASE\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchCategories = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/categories\");\n                setCategories(response.data.categories);\n            } catch (error) {\n                console.error(\"Error fetching categories:\", error);\n            }\n        };\n        fetchCategories();\n    }, []);\n    const deleteCategoryAndQuizzes = async (categoryId)=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].delete(\"http://localhost:8000/categories/\".concat(categoryId));\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/quizzes?categoryId=\".concat(categoryId));\n            const quizzes = response.data.quizzes;\n            for (const quiz of quizzes){\n                await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].delete(\"http://localhost:8000/quizzes/\".concat(quiz._id));\n            }\n            const updatedCategories = categories.filter((category)=>category._id !== categoryId);\n            setCategories(updatedCategories);\n        } catch (error) {\n            console.error(\"Error deleting category and quizzes:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-blue-400 h-screen flex flex-col items-center justify-center text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-6xl font-bold\",\n                    children: \"Choose a Quiz\"\n                }, void 0, false, {\n                    fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap gap-12\",\n                children: categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative group\",\n                        onMouseEnter: ()=>setHoveredCategory(category._id),\n                        onMouseLeave: ()=>setHoveredCategory(null),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-20 h-40 flex items-center justify-center rounded-lg bg-gray-700 hover:bg-gray-600 cursor-pointer text-center\",\n                                onClick: ()=>{\n                                    router.push(\"http://localhost:3000/PlayQuiz?lesson=\".concat(category.category));\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-lg\",\n                                    children: category.category\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this),\n                            hoveredCategory === category._id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"absolute top-2 right-2 p-2 rounded-full bg-white\",\n                                onClick: ()=>deleteCategoryAndQuizzes(category._id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/trashcan.svg\",\n                                    alt: \"Trash Can\",\n                                    width: 24,\n                                    height: 24\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, category._id, true, {\n                        fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(ChooseQuiz, \"7+UbaeSC2n8uOJ1dQHBZ0q+omLw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ChooseQuiz;\nvar _c;\n$RefreshReg$(_c, \"ChooseQuiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ2hvb3NlUXVpei9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ2xCO0FBQ2tCO0FBQ2I7QUFFaEIsU0FBU0s7O0lBQ3RCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUMvQyxNQUFNLENBQUNRLGlCQUFpQkMsbUJBQW1CLEdBQUdULCtDQUFRQTtJQUN0RCxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixZQUFZO0lBRVpELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVcsa0JBQWtCO1lBQ3RCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNViw2Q0FBS0EsQ0FBQ1csR0FBRyxDQUFDO2dCQUNqQ0wsY0FBY0ksU0FBU0UsSUFBSSxDQUFDUCxVQUFVO1lBQ3hDLEVBQUUsT0FBT1EsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLDhCQUE4QkE7WUFDOUM7UUFDRjtRQUVBSjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1NLDJCQUEyQixPQUFPQztRQUN0QyxJQUFJO1lBQ0YsTUFBTWhCLDZDQUFLQSxDQUFDaUIsTUFBTSxDQUFDLG9DQUErQyxPQUFYRDtZQUV2RCxNQUFNTixXQUFXLE1BQU1WLDZDQUFLQSxDQUFDVyxHQUFHLENBQzlCLDRDQUF1RCxPQUFYSztZQUU5QyxNQUFNRSxVQUFVUixTQUFTRSxJQUFJLENBQUNNLE9BQU87WUFFckMsS0FBSyxNQUFNQyxRQUFRRCxRQUFTO2dCQUMxQixNQUFNbEIsNkNBQUtBLENBQUNpQixNQUFNLENBQUMsaUNBQTBDLE9BQVRFLEtBQUtDLEdBQUc7WUFDOUQ7WUFFQSxNQUFNQyxvQkFBb0JoQixXQUFXaUIsTUFBTSxDQUN6QyxDQUFDQyxXQUFhQSxTQUFTSCxHQUFHLEtBQUtKO1lBRWpDVixjQUFjZTtRQUNoQixFQUFFLE9BQU9SLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdDQUF3Q0E7UUFDeEQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFHRCxXQUFVOzhCQUFxQjs7Ozs7Ozs7Ozs7MEJBRXJDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWnBCLFdBQVdzQixHQUFHLENBQUMsQ0FBQ0oseUJBQ2YsOERBQUNDO3dCQUVDQyxXQUFVO3dCQUNWRyxjQUFjLElBQU1wQixtQkFBbUJlLFNBQVNILEdBQUc7d0JBQ25EUyxjQUFjLElBQU1yQixtQkFBbUI7OzBDQUV2Qyw4REFBQ2dCO2dDQUNDQyxXQUFVO2dDQUNWSyxTQUFTO29DQUNQMUIsT0FBTzJCLElBQUksQ0FDVCx5Q0FBMkQsT0FBbEJSLFNBQVNBLFFBQVE7Z0NBRTlEOzBDQUVBLDRFQUFDUztvQ0FBS1AsV0FBVTs4Q0FBV0YsU0FBU0EsUUFBUTs7Ozs7Ozs7Ozs7NEJBRTdDaEIsb0JBQW9CZ0IsU0FBU0gsR0FBRyxrQkFDL0IsOERBQUNhO2dDQUNDUixXQUFVO2dDQUNWSyxTQUFTLElBQU1mLHlCQUF5QlEsU0FBU0gsR0FBRzswQ0FFcEQsNEVBQUNsQixtREFBS0E7b0NBQ0pnQyxLQUFJO29DQUNKQyxLQUFJO29DQUNKQyxPQUFPO29DQUNQQyxRQUFROzs7Ozs7Ozs7Ozs7dUJBeEJUZCxTQUFTSCxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7O0FBaUM3QjtHQXJGd0JqQjs7UUFDUEYsc0RBQVNBOzs7S0FERkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9DaG9vc2VRdWl6L3BhZ2UuanM/OTBmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENob29zZVF1aXooKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtob3ZlcmVkQ2F0ZWdvcnksIHNldEhvdmVyZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgpO1xuICAvLyBjYW1lbENhc2VcbiAgLy8gc2tldmVyLWNhc2VcbiAgLy8gbG93ZXJfY2FzZVxuICAvLyBVUFBFUkNBU0VcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoQ2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2NhdGVnb3JpZXNcIik7XG4gICAgICAgIHNldENhdGVnb3JpZXMocmVzcG9uc2UuZGF0YS5jYXRlZ29yaWVzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjYXRlZ29yaWVzOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoQ2F0ZWdvcmllcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZGVsZXRlQ2F0ZWdvcnlBbmRRdWl6emVzID0gYXN5bmMgKGNhdGVnb3J5SWQpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvY2F0ZWdvcmllcy8ke2NhdGVnb3J5SWR9YCk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL3F1aXp6ZXM/Y2F0ZWdvcnlJZD0ke2NhdGVnb3J5SWR9YFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHF1aXp6ZXMgPSByZXNwb25zZS5kYXRhLnF1aXp6ZXM7XG5cbiAgICAgIGZvciAoY29uc3QgcXVpeiBvZiBxdWl6emVzKSB7XG4gICAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDo4MDAwL3F1aXp6ZXMvJHtxdWl6Ll9pZH1gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdXBkYXRlZENhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLmZpbHRlcihcbiAgICAgICAgKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5faWQgIT09IGNhdGVnb3J5SWRcbiAgICAgICk7XG4gICAgICBzZXRDYXRlZ29yaWVzKHVwZGF0ZWRDYXRlZ29yaWVzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGNhdGVnb3J5IGFuZCBxdWl6emVzOlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibHVlLTQwMCBoLXNjcmVlbiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBmb250LWJvbGRcIj5DaG9vc2UgYSBRdWl6PC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtMTJcIj5cbiAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17Y2F0ZWdvcnkuX2lkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3JvdXBcIlxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlcmVkQ2F0ZWdvcnkoY2F0ZWdvcnkuX2lkKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXJlZENhdGVnb3J5KG51bGwpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yMCBoLTQwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbGcgYmctZ3JheS03MDAgaG92ZXI6YmctZ3JheS02MDAgY3Vyc29yLXBvaW50ZXIgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXG4gICAgICAgICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDozMDAwL1BsYXlRdWl6P2xlc3Nvbj0ke2NhdGVnb3J5LmNhdGVnb3J5fWBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+e2NhdGVnb3J5LmNhdGVnb3J5fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2hvdmVyZWRDYXRlZ29yeSA9PT0gY2F0ZWdvcnkuX2lkICYmIChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTIgcC0yIHJvdW5kZWQtZnVsbCBiZy13aGl0ZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlQ2F0ZWdvcnlBbmRRdWl6emVzKGNhdGVnb3J5Ll9pZCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi90cmFzaGNhbi5zdmdcIlxuICAgICAgICAgICAgICAgICAgYWx0PVwiVHJhc2ggQ2FuXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MjR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJJbWFnZSIsIkNob29zZVF1aXoiLCJyb3V0ZXIiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImhvdmVyZWRDYXRlZ29yeSIsInNldEhvdmVyZWRDYXRlZ29yeSIsImZldGNoQ2F0ZWdvcmllcyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImRlbGV0ZUNhdGVnb3J5QW5kUXVpenplcyIsImNhdGVnb3J5SWQiLCJkZWxldGUiLCJxdWl6emVzIiwicXVpeiIsIl9pZCIsInVwZGF0ZWRDYXRlZ29yaWVzIiwiZmlsdGVyIiwiY2F0ZWdvcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1hcCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIm9uQ2xpY2siLCJwdXNoIiwic3BhbiIsImJ1dHRvbiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ChooseQuiz/page.js\n"));

/***/ })

});