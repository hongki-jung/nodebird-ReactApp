module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\nvar _jsxFileName = \"/Users/jeonghong-gi/Desktop/nodebird/prepare/front/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n // 프롭스 검사\n\n\n // _app.js는 모든 페이지(pages)에서 공통되는 것들을 모아둔다.\n// => 다른 페이지들의 부모역할을 한다.\n//예를 들면 index.js 의 return 부분이  {Component}로 들어가서 \n// <Component />에 출력된다 .\n// html head를 수정하고싶으면 Next에서 제공하는 Head컴포넌트를 이용한다.\n\nconst NodeBird = ({\n  Component\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }\n  }, __jsx(\"meta\", {\n    charSet: \"utf-8\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 17\n    }\n  }), __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 17\n    }\n  }, \"NodeBird\")), __jsx(Component, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }));\n}; // props 점검 \n\n\nNodeBird.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired\n}; // HOC로 감싸준다.\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__[\"default\"].withRedux(NodeBird));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTm9kZUJpcmQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBQ29DOztBQUNwQztDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7O0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWU7QUFDNUIsU0FDSSxtRUFDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLFdBQU8sRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosQ0FESixFQU1JLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosQ0FESjtBQVVILENBWEQsQyxDQWFBOzs7QUFDQUQsUUFBUSxDQUFDRSxTQUFULEdBQW9CO0FBQ2hCRCxXQUFTLEVBQUVFLGlEQUFTLENBQUNDLFdBQVYsQ0FBc0JDO0FBRGpCLENBQXBCLEMsQ0FJUTs7QUFDT0MsNEhBQU8sQ0FBQ0MsU0FBUixDQUFrQlAsUUFBbEIsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnOyAvLyDtlITroa3siqQg6rKA7IKsXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xuXG5cbi8vIF9hcHAuanPripQg66qo65OgIO2OmOydtOyngChwYWdlcynsl5DshJwg6rO17Ya165CY64qUIOqyg+uTpOydhCDrqqjslYTrkZTri6QuXG4vLyA9PiDri6Trpbgg7Y6Y7J207KeA65Ok7J2YIOu2gOuqqOyXre2VoOydhCDtlZzri6QuXG4vL+yYiOulvCDrk6TrqbQgaW5kZXguanMg7J2YIHJldHVybiDrtoDrtoTsnbQgIHtDb21wb25lbnR966GcIOuTpOyWtOqwgOyEnCBcbi8vIDxDb21wb25lbnQgLz7sl5Ag7Lac66Cl65Cc64ukIC5cblxuXG5cbi8vIGh0bWwgaGVhZOulvCDsiJjsoJXtlZjqs6Dsi7bsnLzrqbQgTmV4dOyXkOyEnCDsoJzqs7XtlZjripQgSGVhZOy7tO2PrOuEjO2KuOulvCDsnbTsmqntlZzri6QuXG5cbmNvbnN0IE5vZGVCaXJkID0gKHtDb21wb25lbnR9KT0+e1xuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiLz5cbiAgICAgICAgICAgICAgICA8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8Q29tcG9uZW50IC8+XG4gICAgICAgIDwvPlxuICAgIClcbn07XG5cbi8vIHByb3BzIOygkOqygCBcbk5vZGVCaXJkLnByb3BUeXBlcyA9e1xuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG59XG5cbiAgICAgICAgLy8gSE9D66GcIOqwkOyLuOykgOuLpC5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE5vZGVCaXJkKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ \"./reducers/post.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n // const initialState = {\n//     name:'zerocho',\n//     age:27,\n//     password:'babo',\n// }\n// const changeNickname = {\n//     type:'CHANGE_NICKNAME',\n//     data:'boogicho'\n// }\n// 모든 액션을 미리 만들어 놓는 것은 불가능하다. \n//그때그때 필요할 때 마다 동적으로 액션을 만들자\n// => action creator\n// const changeNickname = (data) =>{\n//     return {\n//         type: 'CHANGE_NICKNAME',\n//         data,\n//     }\n// }\n// changeNickname('boogicho');\n// {\n//     type:'CHANGE_NICKNAME',\n//     data: ' neue zeal'\n// }\n// store.dispatch(changeNickname('mighty tak'))\n// reducer ()\n// : 이전 상태와 액션을 통해서 다음 상태를 만들어낸다. \n//  reducer는 함수다. \n//  (이전상태 ,액션) => 다음상태\n// const rootReducer = (state = initialState, action)=>{\n//     switch(action.type){\n//         case 'CHANGE_NICKNAME':\n//             return{\n//                 // 이런식으로 해야 history가 남는다. \n//                 // name만 바꿔주고 나머지 것들은 그대로 남겨둔다. \n//                 ...state,\n//                 name: action.data,\n//             }\n//     }\n// };\n// const initialState = {\n//     user:{\n//     },\n//     post:{\n//     }\n// }\n// const rootReducer = (state = initialState, action)=>{\n//     switch(action.type){\n//         //아래 두 줄을 추가하면 리덕스까지 서버사이드 렌더링이 된다.\n//         // next기능 \n//         case HYDRATE:\n//             return {...state, ...action.payload}\n//         default:\n//             return state;\n//     }\n// };\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"combineReducers\"])({\n  // reducer 합쳐주기\n  index: (state = {}, action) => {\n    switch (action.type) {\n      //HYDRATE 추가하면 리덕스까지 서버사이드 렌더링이 된다.\n      // next기능 \n      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n        return _objectSpread(_objectSpread({}, state), action.payload);\n\n      default:\n        return state;\n    }\n  },\n  user: _user__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  post: _post__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7O0FBTUEsTUFBTUEsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBRWhDO0FBQ0lDLE9BQUssRUFBRSxDQUFDQyxLQUFLLEdBQUcsRUFBVCxFQUFhQyxNQUFiLEtBQXVCO0FBQzFCLFlBQU9BLE1BQU0sQ0FBQ0MsSUFBZDtBQUVJO0FBQ0E7QUFDQSxXQUFLQywwREFBTDtBQUNJLCtDQUFXSCxLQUFYLEdBQXFCQyxNQUFNLENBQUNHLE9BQTVCOztBQUVKO0FBQ0ksZUFBT0osS0FBUDtBQVJSO0FBVUgsR0FkMkI7QUFlNUJLLHFEQWY0QjtBQWdCNUJDLHFEQUFJQTtBQWhCd0IsQ0FBRCxDQUFuQztBQXVCZVQsMEVBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAge0hZRFJBVEV9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5cbi8vIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbi8vICAgICBuYW1lOid6ZXJvY2hvJyxcbi8vICAgICBhZ2U6MjcsXG4vLyAgICAgcGFzc3dvcmQ6J2JhYm8nLFxuXG4vLyB9XG5cbi8vIGNvbnN0IGNoYW5nZU5pY2tuYW1lID0ge1xuLy8gICAgIHR5cGU6J0NIQU5HRV9OSUNLTkFNRScsXG4vLyAgICAgZGF0YTonYm9vZ2ljaG8nXG4vLyB9XG5cblxuXG5cbi8vIOuqqOuToCDslaHshZjsnYQg66+466asIOunjOuTpOyWtCDrhpPripQg6rKD7J2AIOu2iOqwgOuKpe2VmOuLpC4gXG4vL+q3uOuVjOq3uOuVjCDtlYTsmpTtlaAg65WMIOuniOuLpCDrj5nsoIHsnLzroZwg7JWh7IWY7J2EIOunjOuTpOyekFxuLy8gPT4gYWN0aW9uIGNyZWF0b3Jcbi8vIGNvbnN0IGNoYW5nZU5pY2tuYW1lID0gKGRhdGEpID0+e1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIHR5cGU6ICdDSEFOR0VfTklDS05BTUUnLFxuLy8gICAgICAgICBkYXRhLFxuLy8gICAgIH1cbi8vIH1cblxuLy8gY2hhbmdlTmlja25hbWUoJ2Jvb2dpY2hvJyk7XG4vLyB7XG4vLyAgICAgdHlwZTonQ0hBTkdFX05JQ0tOQU1FJyxcbi8vICAgICBkYXRhOiAnIG5ldWUgemVhbCdcblxuLy8gfVxuXG4vLyBzdG9yZS5kaXNwYXRjaChjaGFuZ2VOaWNrbmFtZSgnbWlnaHR5IHRhaycpKVxuXG5cblxuLy8gcmVkdWNlciAoKVxuLy8gOiDsnbTsoIQg7IOB7YOc7JmAIOyVoeyFmOydhCDthrXtlbTshJwg64uk7J2MIOyDge2DnOulvCDrp4zrk6TslrTrgrjri6QuIFxuLy8gIHJlZHVjZXLripQg7ZWo7IiY64ukLiBcbi8vICAo7J207KCE7IOB7YOcICzslaHshZgpID0+IOuLpOydjOyDge2DnFxuXG4vLyBjb25zdCByb290UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKT0+e1xuXG4vLyAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbi8vICAgICAgICAgY2FzZSAnQ0hBTkdFX05JQ0tOQU1FJzpcbi8vICAgICAgICAgICAgIHJldHVybntcbi8vICAgICAgICAgICAgICAgICAvLyDsnbTrn7Dsi53snLzroZwg7ZW07JW8IGhpc3RvcnnqsIAg64Ko64qU64ukLiBcbi8vICAgICAgICAgICAgICAgICAvLyBuYW1l66eMIOuwlOq/lOyjvOqzoCDrgpjrqLjsp4Ag6rKD65Ok7J2AIOq3uOuMgOuhnCDrgqjqsqjrkZTri6QuIFxuLy8gICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuLy8gICAgICAgICAgICAgICAgIG5hbWU6IGFjdGlvbi5kYXRhLFxuLy8gICAgICAgICAgICAgfVxuXG4vLyAgICAgfVxuXG4vLyB9O1xuXG5cblxuLy8gY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuLy8gICAgIHVzZXI6e1xuICAgICAgIFxuLy8gICAgIH0sXG4vLyAgICAgcG9zdDp7XG4gICAgICAgXG4vLyAgICAgfVxuLy8gfVxuXG5cblxuXG5cbi8vIGNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pPT57XG4gIFxuLy8gICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG5cbi8vICAgICAgICAgLy/slYTrnpgg65GQIOykhOydhCDstpTqsIDtlZjrqbQg66as642V7Iqk6rmM7KeAIOyEnOuyhOyCrOydtOuTnCDroIzrjZTrp4HsnbQg65Cc64ukLlxuLy8gICAgICAgICAvLyBuZXh06riw64qlIFxuLy8gICAgICAgICBjYXNlIEhZRFJBVEU6XG4vLyAgICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZH1cblxuLy8gICAgICAgICBkZWZhdWx0OlxuLy8gICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuXG4vLyAgICAgfVxuXG4vLyB9O1xuXG5cblxuXG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHsgICAgXG4gIFxuICAgIC8vIHJlZHVjZXIg7ZWp7LOQ7KO86riwXG4gICAgICAgIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PntcbiAgICAgICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG5cbiAgICAgICAgICAgICAgICAvL0hZRFJBVEUg7LaU6rCA7ZWY66m0IOumrOuNleyKpOq5jOyngCDshJzrsoTsgqzsnbTrk5wg66CM642U66eB7J20IOuQnOuLpC5cbiAgICAgICAgICAgICAgICAvLyBuZXh06riw64qlIFxuICAgICAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWR9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdXNlcixcbiAgICAgICAgcG9zdCxcblxufSk7XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: '제로초'\n    },\n    content: '첫 번째 게시글 #해시테그 #익스프레스',\n    Image: [{\n      src: 'http://ph.spotvnews.co.kr/news/photo/201908/310916_385550_3004.jpg'\n    }, {\n      src: 'http://photo.jtbc.joins.com/news/2018/05/17/20180517071612505.jpg'\n    }, {\n      src: 'http://www.newsinside.kr/news/photo/201909/1039183_724625_318.jpg'\n    }],\n    Comments: [{\n      User: {\n        nickname: 'nero'\n      },\n      content: '우와 개정판이 나왔군요~'\n    }, {\n      User: {\n        nickname: 'hero'\n      },\n      content: '얼른 사고싶어요'\n    }]\n  }],\n  imagePaths: [],\n  // 이미지 업로드할 때 , 이미지의 경로들이 저장된다.\n  postAdded: false // 게시글 추가가 완료되면 true로 변경된다.\n\n}; // 액션이름을 상수로 빼주자~!\n\nconst ADD_POST = 'ADD_POST'; // 액션객체 생성\n\nconst addPost = {\n  type: ADD_POST\n};\nconst dummyPost = {\n  id: 2,\n  User: {\n    id: 1,\n    nickname: '제로초'\n  },\n  content: '더미데이터입니다.',\n  Image: [],\n  Comments: []\n}; // 화면보다  데이터 구성이 더 중요하다\n// 액션 -> 리듀서 \n// reducer ; 이전 state + action  => 다음 state\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        // 추가되는 데이터를 앞에다가 넣어줘야  앞쪽에 게시물이 나온다.\n        mainPosts: [dummyPost, ...state.mainPosts],\n        postAdded: true\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzP2E3ZTMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2UiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJ0eXBlIiwiZHVtbXlQb3N0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBTyxNQUFNQSxZQUFZLEdBQUU7QUFFdkJDLFdBQVMsRUFBQyxDQUFDO0FBQ1BDLE1BQUUsRUFBQyxDQURJO0FBRVBDLFFBQUksRUFBQztBQUNERCxRQUFFLEVBQUMsQ0FERjtBQUVERSxjQUFRLEVBQUM7QUFGUixLQUZFO0FBT1BDLFdBQU8sRUFBQyx1QkFQRDtBQVNQQyxTQUFLLEVBQUMsQ0FDRjtBQUNJQyxTQUFHLEVBQUM7QUFEUixLQURFLEVBSUY7QUFDSUEsU0FBRyxFQUFDO0FBRFIsS0FKRSxFQU9GO0FBQ0lBLFNBQUcsRUFBQztBQURSLEtBUEUsQ0FUQztBQXFCUEMsWUFBUSxFQUFDLENBQ0w7QUFDQUwsVUFBSSxFQUFDO0FBQ0RDLGdCQUFRLEVBQUM7QUFEUixPQURMO0FBSUFDLGFBQU8sRUFBQztBQUpSLEtBREssRUFRTDtBQUNBRixVQUFJLEVBQUM7QUFDREMsZ0JBQVEsRUFBQztBQURSLE9BREw7QUFJQUMsYUFBTyxFQUFDO0FBSlIsS0FSSztBQXJCRixHQUFELENBRmE7QUFzQ3ZCSSxZQUFVLEVBQUMsRUF0Q1k7QUFzQ1A7QUFDaEJDLFdBQVMsRUFBQyxLQXZDYSxDQXVDSDs7QUF2Q0csQ0FBcEIsQyxDQTJDUDs7QUFDQSxNQUFNQyxRQUFRLEdBQUcsVUFBakIsQyxDQUdBOztBQUNPLE1BQU1DLE9BQU8sR0FBRTtBQUNsQkMsTUFBSSxFQUFDRjtBQURhLENBQWY7QUFLUCxNQUFNRyxTQUFTLEdBQUM7QUFDWlosSUFBRSxFQUFDLENBRFM7QUFHWkMsTUFBSSxFQUFDO0FBQ0RELE1BQUUsRUFBQyxDQURGO0FBRURFLFlBQVEsRUFBQztBQUZSLEdBSE87QUFPWkMsU0FBTyxFQUFDLFdBUEk7QUFRWkMsT0FBSyxFQUFDLEVBUk07QUFTWkUsVUFBUSxFQUFDO0FBVEcsQ0FBaEIsQyxDQWVBO0FBQ0E7QUFFSTs7QUFDSixNQUFNTyxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxHQUFFaEIsWUFBUixFQUFzQmlCLE1BQXRCLEtBQWdDO0FBQzVDLFVBQU9BLE1BQU0sQ0FBQ0osSUFBZDtBQUNJLFNBQUtGLFFBQUw7QUFDSSw2Q0FDT0ssS0FEUDtBQUVJO0FBQ0FmLGlCQUFTLEVBQUMsQ0FBQ2EsU0FBRCxFQUFZLEdBQUdFLEtBQUssQ0FBQ2YsU0FBckIsQ0FIZDtBQUlJUyxpQkFBUyxFQUFDO0FBSmQ7O0FBUUo7QUFDSSxhQUFPTSxLQUFQO0FBWFI7QUFhSCxDQWREOztBQWdCZUQsc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9e1xuICAgIFxuICAgIG1haW5Qb3N0czpbe1xuICAgICAgICBpZDoxLFxuICAgICAgICBVc2VyOntcbiAgICAgICAgICAgIGlkOjEsXG4gICAgICAgICAgICBuaWNrbmFtZTon7KCc66Gc7LSIJyxcbiAgICAgICAgfSxcblxuICAgICAgICBjb250ZW50Oifssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YWM6re4ICPsnbXsiqTtlITroIjsiqQnLFxuICAgICAgICBcbiAgICAgICAgSW1hZ2U6W1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNyYzonaHR0cDovL3BoLnNwb3R2bmV3cy5jby5rci9uZXdzL3Bob3RvLzIwMTkwOC8zMTA5MTZfMzg1NTUwXzMwMDQuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzcmM6J2h0dHA6Ly9waG90by5qdGJjLmpvaW5zLmNvbS9uZXdzLzIwMTgvMDUvMTcvMjAxODA1MTcwNzE2MTI1MDUuanBnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzcmM6J2h0dHA6Ly93d3cubmV3c2luc2lkZS5rci9uZXdzL3Bob3RvLzIwMTkwOS8xMDM5MTgzXzcyNDYyNV8zMTguanBnJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcbiAgICAgICAgQ29tbWVudHM6W1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgVXNlcjp7XG4gICAgICAgICAgICAgICAgbmlja25hbWU6J25lcm8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRlbnQ6J+yasOyZgCDqsJzsoJXtjJDsnbQg64KY7JmU6rWw7JqUfidcbiAgICAgICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgVXNlcjp7XG4gICAgICAgICAgICAgICAgbmlja25hbWU6J2hlcm8nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGVudDon7Ja866W4IOyCrOqzoOyLtuyWtOyalCdcbiAgICAgICAgfV1cbiAgICB9XSxcbiAgICBpbWFnZVBhdGhzOltdLCAgLy8g7J2066+47KeAIOyXheuhnOuTnO2VoCDrlYwgLCDsnbTrr7jsp4DsnZgg6rK966Gc65Ok7J20IOyggOyepeuQnOuLpC5cbiAgICBwb3N0QWRkZWQ6ZmFsc2UsICAgIC8vIOqyjOyLnOq4gCDstpTqsIDqsIAg7JmE66OM65CY66m0IHRydWXroZwg67OA6rK965Cc64ukLlxufVxuXG5cbi8vIOyVoeyFmOydtOumhOydhCDsg4HsiJjroZwg67m87KO87J6QfiFcbmNvbnN0IEFERF9QT1NUID0gJ0FERF9QT1NUJztcblxuXG4vLyDslaHshZjqsJ3ssrQg7IOd7ISxXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9e1xuICAgIHR5cGU6QUREX1BPU1QsXG59XG5cblxuY29uc3QgZHVtbXlQb3N0PXtcbiAgICBpZDoyLFxuICAgXG4gICAgVXNlcjp7XG4gICAgICAgIGlkOjEsXG4gICAgICAgIG5pY2tuYW1lOifsoJzroZzstIgnXG4gICAgfSxcbiAgICBjb250ZW50OifrjZTrr7jrjbDsnbTthLDsnoXri4jri6QuJyxcbiAgICBJbWFnZTpbXSxcbiAgICBDb21tZW50czpbXSxcblxufTtcblxuXG5cbi8vIO2ZlOuptOuztOuLpCAg642w7J207YSwIOq1rOyEseydtCDrjZQg7KSR7JqU7ZWY64ukXG4vLyDslaHshZggLT4g66as65OA7IScIFxuXG4gICAgLy8gcmVkdWNlciA7IOydtOyghCBzdGF0ZSArIGFjdGlvbiAgPT4g64uk7J2MIHN0YXRlXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT57XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbiAgICAgICAgY2FzZSBBRERfUE9TVDpcbiAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAvLyDstpTqsIDrkJjripQg642w7J207YSw66W8IOyVnuyXkOuLpOqwgCDrhKPslrTspJjslbwgIOyVnuyqveyXkCDqsozsi5zrrLzsnbQg64KY7Jio64ukLlxuICAgICAgICAgICAgICAgIG1haW5Qb3N0czpbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxuICAgICAgICAgICAgICAgIHBvc3RBZGRlZDp0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgXG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTsgICAgICAgIFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginAction\", function() { return loginAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutAction\", function() { return logoutAction; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  idLoggedIn: false,\n  me: null,\n  signUpData: {},\n  loginData: {}\n};\nconst loginAction = data => {\n  return {\n    type: 'LOG_IN',\n    data\n  };\n};\nconst logoutAction = () => {\n  return {\n    type: 'LOG_OUT'\n  };\n}; // reducer ; 이전 state + action  => 다음 state\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case 'LOG_IN':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: true,\n        me: action.data\n      });\n\n    case 'LOG_OUT':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: false,\n        me: null\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzPzJjMDUiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaWRMb2dnZWRJbiIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsImxvZ2luQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dvdXRBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJpc0xvZ2dlZEluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQU8sTUFBTUEsWUFBWSxHQUFFO0FBQ3ZCQyxZQUFVLEVBQUUsS0FEVztBQUV2QkMsSUFBRSxFQUFFLElBRm1CO0FBR3ZCQyxZQUFVLEVBQUMsRUFIWTtBQUl2QkMsV0FBUyxFQUFDO0FBSmEsQ0FBcEI7QUFRQSxNQUFNQyxXQUFXLEdBQUlDLElBQUQsSUFBUztBQUNoQyxTQUFNO0FBQ0ZDLFFBQUksRUFBRSxRQURKO0FBRUZEO0FBRkUsR0FBTjtBQUlILENBTE07QUFPQSxNQUFNRSxZQUFZLEdBQUcsTUFBSztBQUM3QixTQUFNO0FBQ0ZELFFBQUksRUFBRTtBQURKLEdBQU47QUFJSCxDQUxNLEMsQ0FPSDs7QUFDSixNQUFNRSxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxHQUFFVixZQUFSLEVBQXNCVyxNQUF0QixLQUFnQztBQUM1QyxVQUFPQSxNQUFNLENBQUNKLElBQWQ7QUFDSSxTQUFLLFFBQUw7QUFDSSw2Q0FFT0csS0FGUDtBQUdJRSxrQkFBVSxFQUFFLElBSGhCO0FBSUlWLFVBQUUsRUFBRVMsTUFBTSxDQUFDTDtBQUpmOztBQVNKLFNBQUssU0FBTDtBQUNJLDZDQUVFSSxLQUZGO0FBR0FFLGtCQUFVLEVBQUUsS0FIWjtBQUlBVixVQUFFLEVBQUU7QUFKSjs7QUFRSjtBQUNJLGFBQU9RLEtBQVA7QUFyQlI7QUF1QkgsQ0F4QkQ7O0FBMEJlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID17XG4gICAgaWRMb2dnZWRJbjogZmFsc2UsXG4gICAgbWU6IG51bGwsXG4gICAgc2lnblVwRGF0YTp7fSxcbiAgICBsb2dpbkRhdGE6e31cblxufVxuXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT57XG4gICAgcmV0dXJue1xuICAgICAgICB0eXBlOiAnTE9HX0lOJyxcbiAgICAgICAgZGF0YSxcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoKSA9PntcbiAgICByZXR1cm57XG4gICAgICAgIHR5cGU6ICdMT0dfT1VUJyxcblxuICAgIH1cbn1cblxuICAgIC8vIHJlZHVjZXIgOyDsnbTsoIQgc3RhdGUgKyBhY3Rpb24gID0+IOuLpOydjCBzdGF0ZVxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+e1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XG4gICAgICAgIGNhc2UgJ0xPR19JTic6XG4gICAgICAgICAgICByZXR1cm57XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXG4gICAgICAgICAgICAgICAgbWU6IGFjdGlvbi5kYXRhXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnTE9HX09VVCc6XG4gICAgICAgICAgICByZXR1cm57XG4gXG4gICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgICAgICBtZTogbnVsbFxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTsgICAgICAgIFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/index */ \"./reducers/index.js\");\n\n\n\n // configureStore.js\n\n/* \n\nQ1. Redux , Mobax, ContextAPI를 왜 사용하는가? \n여러 컴포넌트들에서 공통적으로 쓰이는 데이터가 있는데 , \n그런 데이터들을 중앙에서 관리하기 위해서 쓰인다. (중앙데이터 저장소)\n매번 부모에서 자식컴포넌트로 프롭을 전달하는데 한계가 있다.\n\nex. 로그인한 사람 정보, 로그인 여부가 각 페이지의 권한 체크쓰인다. \n\n\n\n\nQ2 . ContextAPI 와  Redux, Mobax의 차이? \n=> 비동기를 지원하기 쉽냐 어렵냐 \n\n셋 다 중앙 저장소에서 데이터를 처리하는 방식이지만 \n리덕스나 모벡스는 비동기 처리도 알아서 해주는 반면에\n ContextAPI는 비동기 처리를 직접 구현해야한다.\n\n*중앙저장소가 있으면 보통 서버에서 데이터를 받아온다 .\n(서버에서 데이터를 받아오는 건 항상 비동기)\n\n*/\n\nconst configureStore = () => {\n  const middlewares = []; // enhancer :: 리덕스의 기능을 향상시켜주는 middleware\n\n  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(...middlewares));\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], enhancer); // store.dispatch({\n  //     type:'CHANGE_NICKNAME',\n  //     data:'boogicho'\n  // })\n\n  return store;\n};\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"createWrapper\"])(configureStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0NBSUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQSxNQUFNQSxjQUFjLEdBQUcsTUFBSztBQUV4QixRQUFNQyxXQUFXLEdBQUcsRUFBcEIsQ0FGd0IsQ0FJeEI7O0FBQ0EsUUFBTUMsUUFBUSxHQUFHLFFBQ2ZDLFNBRGUsR0FFZkMsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUMsR0FBR0osV0FBSixDQUFoQixDQUZyQjtBQUlBLFFBQU1LLEtBQUssR0FBR0MseURBQVcsQ0FBQ0MsdURBQUQsRUFBVU4sUUFBVixDQUF6QixDQVR3QixDQVV4QjtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFPSSxLQUFQO0FBRUgsQ0FoQkQ7O0FBbUJBLE1BQU1HLE9BQU8sR0FBR0Msd0VBQWEsQ0FBQ1YsY0FBRCxFQUFnQjtBQUN6Q1csT0FBSztBQURvQyxDQUFoQixDQUE3QjtBQU9lRixzRUFBZiIsImZpbGUiOiIuL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVXcmFwcGVyfSAgZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuaW1wb3J0IHtjcmVhdGVTdG9yZSwgY29tcG9zZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQge2NvbXBvc2VXaXRoRGV2VG9vbHN9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzL2luZGV4JztcblxuXG4vLyBjb25maWd1cmVTdG9yZS5qc1xuXG4vKiBcblxuUTEuIFJlZHV4ICwgTW9iYXgsIENvbnRleHRBUEnrpbwg7JmcIOyCrOyaqe2VmOuKlOqwgD8gXG7sl6zrn6wg7Lu07Y+s64SM7Yq465Ok7JeQ7IScIOqzte2GteyggeycvOuhnCDsk7DsnbTripQg642w7J207YSw6rCAIOyeiOuKlOuNsCAsIFxu6re465+wIOuNsOydtO2EsOuTpOydhCDspJHslZnsl5DshJwg6rSA66as7ZWY6riwIOychO2VtOyEnCDsk7Dsnbjri6QuICjspJHslZnrjbDsnbTthLAg7KCA7J6l7IaMKVxu66ek67KIIOu2gOuqqOyXkOyEnCDsnpDsi53su7Ttj6zrhIztirjroZwg7ZSE66Gt7J2EIOyghOuLrO2VmOuKlOuNsCDtlZzqs4TqsIAg7J6I64ukLlxuXG5leC4g66Gc6re47J247ZWcIOyCrOuejCDsoJXrs7QsIOuhnOq3uOyduCDsl6zrtoDqsIAg6rCBIO2OmOydtOyngOydmCDqtoztlZwg7LK07YGs7JOw7J2464ukLiBcblxuXG5cblxuUTIgLiBDb250ZXh0QVBJIOyZgCAgUmVkdXgsIE1vYmF47J2YIOywqOydtD8gXG49PiDruYTrj5nquLDrpbwg7KeA7JuQ7ZWY6riwIOyJveuDkCDslrTroLXrg5AgXG5cbuyFiyDri6Qg7KSR7JWZIOyggOyepeyGjOyXkOyEnCDrjbDsnbTthLDrpbwg7LKY66as7ZWY64qUIOuwqeyLneydtOyngOunjCBcbuumrOuNleyKpOuCmCDrqqjrsqHsiqTripQg67mE64+Z6riwIOyymOumrOuPhCDslYzslYTshJwg7ZW07KO864qUIOuwmOuptOyXkFxuIENvbnRleHRBUEnripQg67mE64+Z6riwIOyymOumrOulvCDsp4HsoJEg6rWs7ZiE7ZW07JW87ZWc64ukLlxuXG4q7KSR7JWZ7KCA7J6l7IaM6rCAIOyeiOycvOuptCDrs7TthrUg7ISc67KE7JeQ7IScIOuNsOydtO2EsOulvCDrsJvslYTsmKjri6QgLlxuKOyEnOuyhOyXkOyEnCDrjbDsnbTthLDrpbwg67Cb7JWE7Jik64qUIOqxtCDtla3sg4Eg67mE64+Z6riwKVxuXG4qL1xuXG5cbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT57XG5cbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFtdXG5cbiAgICAvLyBlbmhhbmNlciA6OiDrpqzrjZXsiqTsnZgg6riw64ql7J2EIO2WpeyDgeyLnOy8nOyjvOuKlCBtaWRkbGV3YXJlXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0ncHJvZHVjdGlvbidcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcblxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xuICAgIC8vIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAvLyAgICAgdHlwZTonQ0hBTkdFX05JQ0tOQU1FJyxcbiAgICAvLyAgICAgZGF0YTonYm9vZ2ljaG8nXG4gICAgLy8gfSlcbiAgICByZXR1cm4gc3RvcmU7XG5cbn07XG5cblxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUse1xuICAgIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0nZGV2ZWxvcG1lbnQnLFxuXG5cbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ })

/******/ });