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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChooseQuiz; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ChooseQuiz() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [hoveredCategory, setHoveredCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchCategories = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/categories\");\n                setCategories(response.data.categories);\n            } catch (error) {\n                console.error(\"Error fetching categories:\", error);\n            }\n        };\n        fetchCategories();\n    }, []);\n    const deleteCategoryAndQuizzes = async (categoryId)=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].delete(\"http://localhost:8000/categories/\".concat(categoryId));\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:8000/quizzes?categoryId=\".concat(categoryId));\n            const quizzes = response.data.quizzes;\n            for (const quiz of quizzes){\n                await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].delete(\"http://localhost:8000/quizzes/\".concat(quiz._id));\n            }\n            const updatedCategories = categories.filter((category)=>category._id !== categoryId);\n            setCategories(updatedCategories);\n        } catch (error) {\n            console.error(\"Error deleting category and quizzes:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-blue-400 h-screen flex flex-col items-center justify-center text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-6xl font-bold\",\n                    children: \"Choose a Quiz\"\n                }, void 0, false, {\n                    fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap gap-12\",\n                children: categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative group\",\n                        onMouseEnter: ()=>setHoveredCategory(category._id),\n                        onMouseLeave: ()=>setHoveredCategory(null),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"p-20 h-40 flex items-center justify-center rounded-lg bg-gray-700 hover:bg-gray-600 cursor-pointer text-center\",\n                                onClick: ()=>{\n                                    router.push(\"http://localhost:/PlayQuiz?lesson=\".concat(category.category));\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-lg\",\n                                    children: category.category\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this),\n                            hoveredCategory === category._id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"absolute top-2 right-2 p-2 rounded-full bg-white\",\n                                onClick: ()=>deleteCategoryAndQuizzes(category._id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: \"/trashcan.svg\",\n                                    alt: \"Trash Can\",\n                                    width: 24,\n                                    height: 24\n                                }, void 0, false, {\n                                    fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, category._id, true, {\n                        fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/HP230379/Desktop/quizproject/frontend/quiz/src/app/ChooseQuiz/page.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(ChooseQuiz, \"7+UbaeSC2n8uOJ1dQHBZ0q+omLw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ChooseQuiz;\nvar _c;\n$RefreshReg$(_c, \"ChooseQuiz\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ2hvb3NlUXVpei9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ2xCO0FBQ2tCO0FBQ2I7QUFFaEIsU0FBU0s7O0lBQ3RCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUMvQyxNQUFNLENBQUNRLGlCQUFpQkMsbUJBQW1CLEdBQUdULCtDQUFRQTtJQUV0REQsZ0RBQVNBLENBQUM7UUFDUixNQUFNVyxrQkFBa0I7WUFDdEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1WLDZDQUFLQSxDQUFDVyxHQUFHLENBQUM7Z0JBQ2pDTCxjQUFjSSxTQUFTRSxJQUFJLENBQUNQLFVBQVU7WUFDeEMsRUFBRSxPQUFPUSxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsOEJBQThCQTtZQUM5QztRQUNGO1FBRUFKO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTU0sMkJBQTJCLE9BQU9DO1FBQ3RDLElBQUk7WUFDRixNQUFNaEIsNkNBQUtBLENBQUNpQixNQUFNLENBQUMsb0NBQStDLE9BQVhEO1lBRXZELE1BQU1OLFdBQVcsTUFBTVYsNkNBQUtBLENBQUNXLEdBQUcsQ0FBQyw0Q0FBdUQsT0FBWEs7WUFDN0UsTUFBTUUsVUFBVVIsU0FBU0UsSUFBSSxDQUFDTSxPQUFPO1lBRXJDLEtBQUssTUFBTUMsUUFBUUQsUUFBUztnQkFDMUIsTUFBTWxCLDZDQUFLQSxDQUFDaUIsTUFBTSxDQUFDLGlDQUEwQyxPQUFURSxLQUFLQyxHQUFHO1lBQzlEO1lBRUEsTUFBTUMsb0JBQW9CaEIsV0FBV2lCLE1BQU0sQ0FBQyxDQUFDQyxXQUFhQSxTQUFTSCxHQUFHLEtBQUtKO1lBQzNFVixjQUFjZTtRQUNoQixFQUFFLE9BQU9SLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdDQUF3Q0E7UUFDeEQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFHRCxXQUFVOzhCQUFxQjs7Ozs7Ozs7Ozs7MEJBRXJDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWnBCLFdBQVdzQixHQUFHLENBQUMsQ0FBQ0oseUJBQ2YsOERBQUNDO3dCQUVDQyxXQUFVO3dCQUNWRyxjQUFjLElBQU1wQixtQkFBbUJlLFNBQVNILEdBQUc7d0JBQ25EUyxjQUFjLElBQU1yQixtQkFBbUI7OzBDQUV2Qyw4REFBQ2dCO2dDQUNDQyxXQUFVO2dDQUNWSyxTQUFTO29DQUNQMUIsT0FBTzJCLElBQUksQ0FBQyxxQ0FBdUQsT0FBbEJSLFNBQVNBLFFBQVE7Z0NBQ3BFOzBDQUVBLDRFQUFDUztvQ0FBS1AsV0FBVTs4Q0FBV0YsU0FBU0EsUUFBUTs7Ozs7Ozs7Ozs7NEJBRTdDaEIsb0JBQW9CZ0IsU0FBU0gsR0FBRyxrQkFDL0IsOERBQUNhO2dDQUNDUixXQUFVO2dDQUNWSyxTQUFTLElBQU1mLHlCQUF5QlEsU0FBU0gsR0FBRzswQ0FFcEQsNEVBQUNsQixtREFBS0E7b0NBQUNnQyxLQUFJO29DQUFnQkMsS0FBSTtvQ0FBWUMsT0FBTztvQ0FBSUMsUUFBUTs7Ozs7Ozs7Ozs7O3VCQWxCN0RkLFNBQVNILEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQjdCO0dBdEV3QmpCOztRQUNQRixzREFBU0E7OztLQURGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0Nob29zZVF1aXovcGFnZS5qcz85MGYxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hvb3NlUXVpeigpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2hvdmVyZWRDYXRlZ29yeSwgc2V0SG92ZXJlZENhdGVnb3J5XSA9IHVzZVN0YXRlKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaENhdGVnb3JpZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9jYXRlZ29yaWVzXCIpO1xuICAgICAgICBzZXRDYXRlZ29yaWVzKHJlc3BvbnNlLmRhdGEuY2F0ZWdvcmllcyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2F0ZWdvcmllczpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaENhdGVnb3JpZXMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGRlbGV0ZUNhdGVnb3J5QW5kUXVpenplcyA9IGFzeW5jIChjYXRlZ29yeUlkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2NhdGVnb3JpZXMvJHtjYXRlZ29yeUlkfWApO1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL3F1aXp6ZXM/Y2F0ZWdvcnlJZD0ke2NhdGVnb3J5SWR9YCk7XG4gICAgICBjb25zdCBxdWl6emVzID0gcmVzcG9uc2UuZGF0YS5xdWl6emVzO1xuXG4gICAgICBmb3IgKGNvbnN0IHF1aXogb2YgcXVpenplcykge1xuICAgICAgICBhd2FpdCBheGlvcy5kZWxldGUoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9xdWl6emVzLyR7cXVpei5faWR9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVwZGF0ZWRDYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS5faWQgIT09IGNhdGVnb3J5SWQpO1xuICAgICAgc2V0Q2F0ZWdvcmllcyh1cGRhdGVkQ2F0ZWdvcmllcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBjYXRlZ29yeSBhbmQgcXVpenplczpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctYmx1ZS00MDAgaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMlwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgZm9udC1ib2xkXCI+Q2hvb3NlIGEgUXVpejwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTEyXCI+XG4gICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2NhdGVnb3J5Ll9pZH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGdyb3VwXCJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJlZENhdGVnb3J5KGNhdGVnb3J5Ll9pZCl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyZWRDYXRlZ29yeShudWxsKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMjAgaC00MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWxnIGJnLWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNjAwIGN1cnNvci1wb2ludGVyIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGBodHRwOi8vbG9jYWxob3N0Oi9QbGF5UXVpej9sZXNzb249JHtjYXRlZ29yeS5jYXRlZ29yeX1gKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sZ1wiPntjYXRlZ29yeS5jYXRlZ29yeX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtob3ZlcmVkQ2F0ZWdvcnkgPT09IGNhdGVnb3J5Ll9pZCAmJiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMiByaWdodC0yIHAtMiByb3VuZGVkLWZ1bGwgYmctd2hpdGVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUNhdGVnb3J5QW5kUXVpenplcyhjYXRlZ29yeS5faWQpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi90cmFzaGNhbi5zdmdcIiBhbHQ9XCJUcmFzaCBDYW5cIiB3aWR0aD17MjR9IGhlaWdodD17MjR9IC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlUm91dGVyIiwiSW1hZ2UiLCJDaG9vc2VRdWl6Iiwicm91dGVyIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJob3ZlcmVkQ2F0ZWdvcnkiLCJzZXRIb3ZlcmVkQ2F0ZWdvcnkiLCJmZXRjaENhdGVnb3JpZXMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJkZWxldGVDYXRlZ29yeUFuZFF1aXp6ZXMiLCJjYXRlZ29yeUlkIiwiZGVsZXRlIiwicXVpenplcyIsInF1aXoiLCJfaWQiLCJ1cGRhdGVkQ2F0ZWdvcmllcyIsImZpbHRlciIsImNhdGVnb3J5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJvbkNsaWNrIiwicHVzaCIsInNwYW4iLCJidXR0b24iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/ChooseQuiz/page.js\n"));

/***/ })

});