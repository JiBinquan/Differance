"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ ([
/* 0 */
/*!***********************************************************************************************************!*\
  !*** D:/桌面/temp/test/延异_differance Beta V0.4.2/main.js?{"page":"pages%2Fcamera%2Fwatermark%2Fwatermark"} ***!
  \***********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_camera_watermark_watermark_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/camera/watermark/watermark.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_camera_watermark_watermark_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_camera_watermark_watermark_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/camera/watermark/watermark'\n        _pages_camera_watermark_watermark_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_camera_watermark_watermark_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsMEZBQUc7QUFDWCxRQUFRLDBGQUFHO0FBQ1gsUUFBUSwwRkFBRztBQUNYLGdCQUFnQiwwRkFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9jYW1lcmEvd2F0ZXJtYXJrL3dhdGVybWFyay5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZWFzb25cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2NhbWVyYS93YXRlcm1hcmsvd2F0ZXJtYXJrJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*****************************************************************************!*\
  !*** D:/桌面/temp/test/延异_differance Beta V0.4.2/main.js?{"type":"appStyle"} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*****************************************************************************************!*\
  !*** D:/桌面/temp/test/延异_differance Beta V0.4.2/App.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Program/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../Program/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../Program/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../Program/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../Program/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/桌面/temp/test/延异_differance Beta V0.4.2/App.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!***************************************************************************************************!*\
  !*** D:/桌面/temp/test/延异_differance Beta V0.4.2/pages/camera/watermark/watermark.nvue?mpType=page ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _watermark_nvue_vue_type_template_id_c63123b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watermark.nvue?vue&type=template&id=c63123b4&mpType=page */ 5);\n/* harmony import */ var _watermark_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./watermark.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _watermark_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _watermark_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Program/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./watermark.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 11).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./watermark.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 11).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _watermark_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _watermark_nvue_vue_type_template_id_c63123b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _watermark_nvue_vue_type_template_id_c63123b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"45b9632d\",\n  false,\n  _watermark_nvue_vue_type_template_id_c63123b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/camera/watermark/watermark.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDeUU7QUFDTDtBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHVFQUErRDtBQUNuSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsdUVBQStEO0FBQ3hIOztBQUVBOztBQUVBO0FBQzhMO0FBQzlMLGdCQUFnQiwrTEFBVTtBQUMxQixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi93YXRlcm1hcmsubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jNjMxMjNiNCZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vd2F0ZXJtYXJrLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vd2F0ZXJtYXJrLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3dhdGVybWFyay5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3dhdGVybWFyay5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNDViOTYzMmRcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvY2FtZXJhL3dhdGVybWFyay93YXRlcm1hcmsubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*********************************************************************************************************************************!*\
  !*** D:/桌面/temp/test/延异_differance Beta V0.4.2/pages/camera/watermark/watermark.nvue?vue&type=template&id=c63123b4&mpType=page ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_nvue_vue_type_template_id_c63123b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Program/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Program/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../Program/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Program/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../Program/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./watermark.nvue?vue&type=template&id=c63123b4&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_nvue_vue_type_template_id_c63123b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_nvue_vue_type_template_id_c63123b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_nvue_vue_type_template_id_c63123b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_nvue_vue_type_template_id_c63123b4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/桌面/temp/test/延异_differance Beta V0.4.2/pages/camera/watermark/watermark.nvue?vue&type=template&id=c63123b4&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        {
          staticClass: ["live-camera"],
          style: { width: _vm.windowWidth, height: _vm.windowHeight }
        },
        [
          _c(
            "view",
            {
              staticClass: ["preview"],
              style: { width: _vm.windowWidth, height: _vm.windowHeight }
            },
            [
              _c("live-pusher", {
                ref: "livePusher",
                staticClass: ["livePusher"],
                style: { width: _vm.windowWidth, height: _vm.windowHeight },
                attrs: {
                  id: "livePusher",
                  mode: "FHD",
                  beauty: "0",
                  whiteness: "0",
                  aspect: _vm.aspect,
                  minBitrate: "1000",
                  audioQuality: "16KHz",
                  devicePosition: "back",
                  autoFocus: true,
                  muted: true,
                  enableCamera: true,
                  enableMic: false,
                  zoom: false
                },
                on: { statechange: _vm.statechange }
              }),
              _c("cover-view", { staticClass: ["remind"] }, [
                _c(
                  "u-text",
                  {
                    staticClass: ["remind-text"],
                    appendAsTree: true,
                    attrs: { append: "tree" }
                  },
                  [_vm._v("z" + _vm._s(_vm.message))]
                )
              ]),
              _c(
                "cover-view",
                {
                  staticClass: ["outline-box"],
                  style: { width: _vm.windowWidth, height: _vm.windowHeight }
                },
                [
                  _c("cover-image", {
                    staticClass: ["outline-img"],
                    style: { opacity: this.opac_n },
                    attrs: { src: this.bbsi }
                  })
                ],
                1
              )
            ],
            1
          ),
          _c(
            "view",
            { staticClass: ["menu"] },
            [
              _c("cover-image", {
                staticClass: ["menu-mask"],
                attrs: { src: "/static/live-camera/bar.png" }
              }),
              _c("cover-image", {
                staticClass: ["menu-back"],
                attrs: { src: "/static/live-camera/back.png" },
                on: { click: _vm.back }
              }),
              _c("cover-image", {
                staticClass: ["menu-snapshot"],
                attrs: { src: "/static/live-camera/shutter.png" },
                on: { click: _vm.snapshot }
              }),
              _c("cover-image", {
                staticClass: ["menu-flip"],
                attrs: { src: "/static/live-camera/flip.png" },
                on: { click: _vm.flip }
              })
            ],
            1
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!***************************************************************************************************************************!*\
  !*** D:/桌面/temp/test/延异_differance Beta V0.4.2/pages/camera/watermark/watermark.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Program/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../Program/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../Program/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./watermark.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFnQixDQUFnQiwrZ0JBQUcsRUFBQyIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0vSEJ1aWxkZXJYL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3dhdGVybWFyay5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbS9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbS9IQnVpbGRlclgvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtL0hCdWlsZGVyWC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93YXRlcm1hcmsubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/桌面/temp/test/延异_differance Beta V0.4.2/pages/camera/watermark/watermark.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _setnum = _interopRequireDefault(__webpack_require__(/*! ../../../common/setnum.js */ 10));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _this = null;var _default = { data: function data() {return { dotype: 'watermark', message: '延异_differance', //水印内容\n      poenCarmeInterval: null, //打开相机的轮询\n      aspect: '2:3', //比例\n      windowWidth: '', //屏幕可用宽度\n      windowHeight: '', //屏幕可用高度\n      camerastate: false, //相机准备好了\n      livePusher: null, //流视频对象\n      snapshotsrc: null, //快照\n      bbsi: \"\", opac_n: 0.4 };}, onLoad: function onLoad(e) {_this = this;if (e.dotype != undefined) this.dotype = e.dotype;__f__(\"log\", \"cam：setnum.opacity_num的值：\", _setnum.default.opacity_num, \" at pages/camera/watermark/watermark.nvue:59\");this.initCamera();__f__(\"log\", \"这是啥？\", e, \" at pages/camera/watermark/watermark.nvue:61\");var that = this;this.opac_n = JSON.parse(e.tmdop);that.bbsi = JSON.parse(e.index); // 字符串转对象\n    __f__(\"log\", \"到底行不行？\", that.bbsi, \" at pages/camera/watermark/watermark.nvue:65\");__f__(\"log\", \"透明度：\", this.opac_n, \" at pages/camera/watermark/watermark.nvue:66\");}, onShow: function onShow() {__f__(\"log\", \"相机：opac_n的值：\", this.opac_n, \" at pages/camera/watermark/watermark.nvue:70\");__f__(\"log\", \"相机：setnum.opacity_num的值：\", _setnum.default.opacity_num, \" at pages/camera/watermark/watermark.nvue:71\");}, onReady: function onReady() {this.livePusher = uni.createLivePusherContext('livePusher', this);this.startPreview(); //开启预览并设置摄像头\n    this.poenCarme();}, methods: { //轮询打开\n    poenCarme: function poenCarme() {if (plus.os.name == 'Android') {this.poenCarmeInterval = setInterval(function () {__f__(\"log\", _this.camerastate, \" at pages/camera/watermark/watermark.nvue:84\");__f__(\"log\", \"能用吗2？\", this.bbsi, \" at pages/camera/watermark/watermark.nvue:85\");\n          if (!_this.camerastate) _this.startPreview();\n        }, 2500);\n      }\n\n    },\n    //初始化相机\n    initCamera: function initCamera() {\n      uni.getSystemInfo({\n        success: function success(res) {\n          _this.windowWidth = res.windowWidth;\n          _this.windowHeight = res.windowHeight;\n          var zcs = _this.aliquot(_this.windowWidth, _this.windowHeight);\n          _this.aspect = _this.windowWidth / zcs + ':' + _this.windowHeight / zcs;\n          __f__(\"log\", '画面比例：' + _this.aspect, \" at pages/camera/watermark/watermark.nvue:99\");\n        } });\n\n    },\n\n    //整除数计算\n    aliquot: function aliquot(x, y) {\n      if (x % y == 0) return y;\n      return this.aliquot(y, x % y);\n    },\n\n    //开始预览\n    startPreview: function startPreview() {var _this2 = this;\n      this.livePusher.startPreview({\n        success: function success(a) {\n          __f__(\"log\", a, \" at pages/camera/watermark/watermark.nvue:114\");\n          __f__(\"log\", \"能用吗1？\", _this2.bbsi, \" at pages/camera/watermark/watermark.nvue:115\");\n        } });\n\n    },\n\n    //停止预览\n    stopPreview: function stopPreview() {\n      this.livePusher.stopPreview({\n        success: function success(a) {\n          _this.camerastate = false; //标记相机未启动\n        } });\n\n    },\n\n    //状态\n    statechange: function statechange(e) {\n      //状态改变\n      __f__(\"log\", e, \" at pages/camera/watermark/watermark.nvue:132\");\n      if (e.detail.code == 1007) {\n        _this.camerastate = true;\n      } else if (e.detail.code == -1301) {\n        _this.camerastate = false;\n      }\n    },\n\n    //返回\n    back: function back() {\n      uni.navigateBack();\n    },\n\n    //抓拍\n    snapshot: function snapshot() {\n      this.livePusher.snapshot({\n        success: function success(e) {\n          _this.snapshotsrc = e.message.tempImagePath;\n          _this.stopPreview();\n          _this.setImage();\n          uni.navigateBack();\n        } });\n\n    },\n\n    //反转\n    flip: function flip() {\n      this.livePusher.switchCamera();\n    },\n\n    //设置\n    setImage: function setImage() {\n      var pages = getCurrentPages();\n      var prevPage = pages[pages.length - 2]; //上一个页面\n\n      //直接调用上一个页面的setImage()方法，把数据存到上一个页面中去\n      prevPage.$vm.setImage({ path: _this.snapshotsrc, dotype: this.dotype });\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY2FtZXJhL3dhdGVybWFyay93YXRlcm1hcmsubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNBLCtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxpQixlQUNBLEVBQ0EsSUFEQSxrQkFDQSxDQUNBLFNBQ0EsbUJBREEsRUFFQSx3QkFGQSxFQUVBO0FBQ0EsNkJBSEEsRUFHQTtBQUNBLG1CQUpBLEVBSUE7QUFDQSxxQkFMQSxFQUtBO0FBQ0Esc0JBTkEsRUFNQTtBQUNBLHdCQVBBLEVBT0E7QUFDQSxzQkFSQSxFQVFBO0FBQ0EsdUJBVEEsRUFTQTtBQUNBLGNBVkEsRUFXQSxXQVhBLEdBYUEsQ0FmQSxFQWdCQSxNQWhCQSxrQkFnQkEsQ0FoQkEsRUFnQkEsQ0FDQSxhQUNBLGtEQUNBLHVIQUNBLGtCQUNBLHdFQUNBLGdCQUNBLGtDQUNBLGdDQVJBLENBUUE7QUFDQSxzRkFDQSxrRkFFQSxDQTVCQSxFQTZCQSxNQTdCQSxvQkE2QkEsQ0FDQSwwRkFDQSxzSEFDQSxDQWhDQSxFQWlDQSxPQWpDQSxxQkFpQ0EsQ0FDQSxrRUFDQSxvQkFGQSxDQUVBO0FBQ0EscUJBQ0EsQ0FyQ0EsRUFzQ0EsV0FDQTtBQUNBLGFBRkEsdUJBRUEsQ0FFQSxnQ0FDQSxrREFDQSxnRkFDQTtBQUNBO0FBQ0EsU0FKQSxFQUlBLElBSkE7QUFLQTs7QUFFQSxLQVpBO0FBYUE7QUFDQSxjQWRBLHdCQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVBBOztBQVNBLEtBeEJBOztBQTBCQTtBQUNBLFdBM0JBLG1CQTJCQSxDQTNCQSxFQTJCQSxDQTNCQSxFQTJCQTtBQUNBO0FBQ0E7QUFDQSxLQTlCQTs7QUFnQ0E7QUFDQSxnQkFqQ0EsMEJBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBOztBQU1BLEtBeENBOztBQTBDQTtBQUNBLGVBM0NBLHlCQTJDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FEQSxDQUNBO0FBQ0EsU0FIQTs7QUFLQSxLQWpEQTs7QUFtREE7QUFDQSxlQXBEQSx1QkFvREEsQ0FwREEsRUFvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQTVEQTs7QUE4REE7QUFDQSxRQS9EQSxrQkErREE7QUFDQTtBQUNBLEtBakVBOztBQW1FQTtBQUNBLFlBcEVBLHNCQW9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBTkE7O0FBUUEsS0E3RUE7O0FBK0VBO0FBQ0EsUUFoRkEsa0JBZ0ZBO0FBQ0E7QUFDQSxLQWxGQTs7QUFvRkE7QUFDQSxZQXJGQSxzQkFxRkE7QUFDQTtBQUNBLDZDQUZBLENBRUE7O0FBRUE7QUFDQTtBQUNBLEtBM0ZBLEVBdENBLEUiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImxpdmUtY2FtZXJhXCIgOnN0eWxlPVwieyB3aWR0aDogd2luZG93V2lkdGgsIGhlaWdodDogd2luZG93SGVpZ2h0IH1cIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJwcmV2aWV3XCIgOnN0eWxlPVwieyB3aWR0aDogd2luZG93V2lkdGgsIGhlaWdodDogd2luZG93SGVpZ2h0fVwiPlxyXG5cdFx0XHRcdDxsaXZlLXB1c2hlciBpZD1cImxpdmVQdXNoZXJcIiByZWY9XCJsaXZlUHVzaGVyXCIgY2xhc3M9XCJsaXZlUHVzaGVyXCIgbW9kZT1cIkZIRFwiIGJlYXV0eT1cIjBcIiB3aGl0ZW5lc3M9XCIwXCJcclxuXHRcdFx0XHRcdDphc3BlY3Q9XCJhc3BlY3RcIiBtaW4tYml0cmF0ZT1cIjEwMDBcIiBhdWRpby1xdWFsaXR5PVwiMTZLSHpcIiBkZXZpY2UtcG9zaXRpb249XCJiYWNrXCIgOmF1dG8tZm9jdXM9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdDptdXRlZD1cInRydWVcIiA6ZW5hYmxlLWNhbWVyYT1cInRydWVcIiA6ZW5hYmxlLW1pYz1cImZhbHNlXCIgOnpvb209XCJmYWxzZVwiIEBzdGF0ZWNoYW5nZT1cInN0YXRlY2hhbmdlXCJcclxuXHRcdFx0XHRcdDpzdHlsZT1cInsgd2lkdGg6IHdpbmRvd1dpZHRoLCBoZWlnaHQ6IHdpbmRvd0hlaWdodCB9XCI+PC9saXZlLXB1c2hlcj5cclxuXHRcdFx0XHQ8IS0t5o+Q56S66K+tLS0+XHJcblx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJyZW1pbmRcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicmVtaW5kLXRleHRcIiBzdHlsZT1cIlwiPnp7eyBtZXNzYWdlIH19PC90ZXh0PlxyXG5cdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcclxuXHRcdFx0XHQ8IS0t6L6F5Yqp57q/LS0+XHJcblx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJvdXRsaW5lLWJveFwiIDpzdHlsZT1cInsgd2lkdGg6IHdpbmRvd1dpZHRoLCBoZWlnaHQ6IHdpbmRvd0hlaWdodH1cIj5cclxuXHRcdFx0XHRcdDwhLS0gPGNvdmVyLWltYWdlIGNsYXNzPVwib3V0bGluZS1pbWdcIiBzcmM9XCIvc3RhdGljL3Rlc3QyLmpwZ1wiIHN0eWxlPVwib3BhY2l0eTowLjNcIj48L2NvdmVyLWltYWdlPiAtLT5cclxuXHRcdFx0XHRcdDxjb3Zlci1pbWFnZSBjbGFzcz1cIm91dGxpbmUtaW1nXCI6c3JjPVwidGhpcy5iYnNpXCIgOnN0eWxlPVwieyBvcGFjaXR5OnRoaXMub3BhY19ufVwiPjwvY292ZXItaW1hZ2U+XHJcblx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwibWVudVwiPlxyXG5cdFx0XHRcdDwhLS3lupXpg6joj5zljZXljLrln5/og4zmma8tLT5cclxuXHRcdFx0XHQ8Y292ZXItaW1hZ2UgY2xhc3M9XCJtZW51LW1hc2tcIiBzcmM9XCIvc3RhdGljL2xpdmUtY2FtZXJhL2Jhci5wbmdcIj48L2NvdmVyLWltYWdlPlxyXG5cdFxyXG5cdFx0XHRcdDwhLS3ov5Tlm57plK4tLT5cclxuXHRcdFx0XHQ8Y292ZXItaW1hZ2UgY2xhc3M9XCJtZW51LWJhY2tcIiBAdGFwPVwiYmFja1wiIHNyYz1cIi9zdGF0aWMvbGl2ZS1jYW1lcmEvYmFjay5wbmdcIj48L2NvdmVyLWltYWdlPlxyXG5cdFxyXG5cdFx0XHRcdDwhLS3lv6vpl6jplK4tLT5cclxuXHRcdFx0XHQ8Y292ZXItaW1hZ2UgY2xhc3M9XCJtZW51LXNuYXBzaG90XCIgQHRhcD1cInNuYXBzaG90XCIgc3JjPVwiL3N0YXRpYy9saXZlLWNhbWVyYS9zaHV0dGVyLnBuZ1wiPjwvY292ZXItaW1hZ2U+XHJcblx0XHJcblx0XHRcdFx0PCEtLeWPjei9rOmUri0tPlxyXG5cdFx0XHRcdDxjb3Zlci1pbWFnZSBjbGFzcz1cIm1lbnUtZmxpcFwiIEB0YXA9XCJmbGlwXCIgc3JjPVwiL3N0YXRpYy9saXZlLWNhbWVyYS9mbGlwLnBuZ1wiPjwvY292ZXItaW1hZ2U+XHJcblx0XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBzZXRudW0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9zZXRudW0uanNcIlxyXG5sZXQgX3RoaXMgPSBudWxsO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGRvdHlwZTond2F0ZXJtYXJrJyxcclxuXHRcdFx0bWVzc2FnZTon5bu25byCX2RpZmZlcmFuY2UnLC8v5rC05Y2w5YaF5a65XHJcblx0XHRcdHBvZW5DYXJtZUludGVydmFsOiBudWxsLCAvL+aJk+W8gOebuOacuueahOi9ruivolxyXG5cdFx0XHRhc3BlY3Q6ICcyOjMnLCAvL+avlOS+i1xyXG5cdFx0XHR3aW5kb3dXaWR0aDogJycsIC8v5bGP5bmV5Y+v55So5a695bqmXHJcblx0XHRcdHdpbmRvd0hlaWdodDogJycsIC8v5bGP5bmV5Y+v55So6auY5bqmXHJcblx0XHRcdGNhbWVyYXN0YXRlOiBmYWxzZSwgLy/nm7jmnLrlh4blpIflpb3kuoZcclxuXHRcdFx0bGl2ZVB1c2hlcjogbnVsbCwgLy/mtYHop4bpopHlr7nosaFcclxuXHRcdFx0c25hcHNob3RzcmM6IG51bGwgLC8v5b+r54WnXHJcblx0XHRcdGJic2k6XCJcIixcclxuXHRcdFx0b3BhY19uOjAuNCxcclxuXHRcdH07XHJcblx0fSxcclxuXHRvbkxvYWQoZSkge1xyXG5cdFx0X3RoaXMgPSB0aGlzO1xyXG5cdFx0aWYgKGUuZG90eXBlICE9IHVuZGVmaW5lZCkgdGhpcy5kb3R5cGUgPSBlLmRvdHlwZTtcclxuXHRcdGNvbnNvbGUubG9nKFwiY2Ft77yac2V0bnVtLm9wYWNpdHlfbnVt55qE5YC877yaXCIsc2V0bnVtLm9wYWNpdHlfbnVtKTtcclxuXHRcdHRoaXMuaW5pdENhbWVyYSgpO1xyXG5cdFx0Y29uc29sZS5sb2coXCLov5nmmK/llaXvvJ9cIixlKTtcclxuXHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdHRoaXMub3BhY19uID0gSlNPTi5wYXJzZShlLnRtZG9wKTtcclxuXHRcdHRoYXQuYmJzaSA9IEpTT04ucGFyc2UoZS5pbmRleCk7IC8vIOWtl+espuS4sui9rOWvueixoVxyXG5cdFx0Y29uc29sZS5sb2coXCLliLDlupXooYzkuI3ooYzvvJ9cIix0aGF0LmJic2kpO1xyXG5cdFx0Y29uc29sZS5sb2coXCLpgI/mmI7luqbvvJpcIix0aGlzLm9wYWNfbik7XHJcblx0XHRcclxuXHR9LFxyXG5cdG9uU2hvdygpe1xyXG5cdFx0Y29uc29sZS5sb2coXCLnm7jmnLrvvJpvcGFjX27nmoTlgLzvvJpcIix0aGlzLm9wYWNfbik7XHJcblx0XHRjb25zb2xlLmxvZyhcIuebuOacuu+8mnNldG51bS5vcGFjaXR5X251beeahOWAvO+8mlwiLHNldG51bS5vcGFjaXR5X251bSk7XHJcblx0fSxcclxuXHRvblJlYWR5KCkge1xyXG5cdFx0dGhpcy5saXZlUHVzaGVyID0gdW5pLmNyZWF0ZUxpdmVQdXNoZXJDb250ZXh0KCdsaXZlUHVzaGVyJywgdGhpcyk7XHJcblx0XHR0aGlzLnN0YXJ0UHJldmlldygpOyAvL+W8gOWQr+mihOiniOW5tuiuvue9ruaRhOWDj+WktFxyXG5cdFx0dGhpcy5wb2VuQ2FybWUoKTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdC8v6L2u6K+i5omT5byAXHJcblx0XHRwb2VuQ2FybWUoKSB7XHJcblx0XHRcdC8vI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdGlmIChwbHVzLm9zLm5hbWUgPT0gJ0FuZHJvaWQnKSB7XHJcblx0XHRcdFx0dGhpcy5wb2VuQ2FybWVJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coX3RoaXMuY2FtZXJhc3RhdGUpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCLog73nlKjlkJcy77yfXCIsdGhpcy5iYnNpKTtcclxuXHRcdFx0XHRcdGlmICghX3RoaXMuY2FtZXJhc3RhdGUpIF90aGlzLnN0YXJ0UHJldmlldygpO1xyXG5cdFx0XHRcdH0sIDI1MDApO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vI2VuZGlmXHJcblx0XHR9LFxyXG5cdFx0Ly/liJ3lp4vljJbnm7jmnLpcclxuXHRcdGluaXRDYW1lcmEoKSB7XHJcblx0XHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdF90aGlzLndpbmRvd1dpZHRoID0gcmVzLndpbmRvd1dpZHRoO1xyXG5cdFx0XHRcdFx0X3RoaXMud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcclxuXHRcdFx0XHRcdGxldCB6Y3MgPSBfdGhpcy5hbGlxdW90KF90aGlzLndpbmRvd1dpZHRoLCBfdGhpcy53aW5kb3dIZWlnaHQpO1xyXG5cdFx0XHRcdFx0X3RoaXMuYXNwZWN0ID0gX3RoaXMud2luZG93V2lkdGggLyB6Y3MgKyAnOicgKyBfdGhpcy53aW5kb3dIZWlnaHQgLyB6Y3M7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn55S76Z2i5q+U5L6L77yaJytfdGhpcy5hc3BlY3QpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8v5pW06Zmk5pWw6K6h566XXHJcblx0XHRhbGlxdW90KHgsIHkpIHtcclxuXHRcdFx0aWYgKHggJSB5ID09IDApIHJldHVybiB5O1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5hbGlxdW90KHksIHggJSB5KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly/lvIDlp4vpooTop4hcclxuXHRcdHN0YXJ0UHJldmlldygpIHtcclxuXHRcdFx0dGhpcy5saXZlUHVzaGVyLnN0YXJ0UHJldmlldyh7XHJcblx0XHRcdFx0c3VjY2VzczogYSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhhKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi6IO955So5ZCXMe+8n1wiLHRoaXMuYmJzaSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly/lgZzmraLpooTop4hcclxuXHRcdHN0b3BQcmV2aWV3KCkge1xyXG5cdFx0XHR0aGlzLmxpdmVQdXNoZXIuc3RvcFByZXZpZXcoe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IGEgPT4ge1xyXG5cdFx0XHRcdFx0X3RoaXMuY2FtZXJhc3RhdGUgPSBmYWxzZTsgLy/moIforrDnm7jmnLrmnKrlkK/liqhcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvL+eKtuaAgVxyXG5cdFx0c3RhdGVjaGFuZ2UoZSkge1xyXG5cdFx0XHQvL+eKtuaAgeaUueWPmFxyXG5cdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdFx0aWYgKGUuZGV0YWlsLmNvZGUgPT0gMTAwNykge1xyXG5cdFx0XHRcdF90aGlzLmNhbWVyYXN0YXRlID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIGlmIChlLmRldGFpbC5jb2RlID09IC0xMzAxKSB7XHJcblx0XHRcdFx0X3RoaXMuY2FtZXJhc3RhdGUgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHQvL+i/lOWbnlxyXG5cdFx0YmFjaygpIHtcclxuXHRcdFx0dW5pLm5hdmlnYXRlQmFjaygpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvL+aKk+aLjVxyXG5cdFx0c25hcHNob3QoKSB7XHJcblx0XHRcdHRoaXMubGl2ZVB1c2hlci5zbmFwc2hvdCh7XHJcblx0XHRcdFx0c3VjY2VzczogZSA9PiB7XHJcblx0XHRcdFx0XHRfdGhpcy5zbmFwc2hvdHNyYyA9IGUubWVzc2FnZS50ZW1wSW1hZ2VQYXRoO1xyXG5cdFx0XHRcdFx0X3RoaXMuc3RvcFByZXZpZXcoKTtcclxuXHRcdFx0XHRcdF90aGlzLnNldEltYWdlKCk7XHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly/lj43ovaxcclxuXHRcdGZsaXAoKSB7XHJcblx0XHRcdHRoaXMubGl2ZVB1c2hlci5zd2l0Y2hDYW1lcmEoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly/orr7nva5cclxuXHRcdHNldEltYWdlKCkge1xyXG5cdFx0XHRsZXQgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuXHRcdFx0bGV0IHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXHJcblxyXG5cdFx0XHQvL+ebtOaOpeiwg+eUqOS4iuS4gOS4qumhtemdoueahHNldEltYWdlKCnmlrnms5XvvIzmiormlbDmja7lrZjliLDkuIrkuIDkuKrpobXpnaLkuK3ljrtcclxuXHRcdFx0cHJldlBhZ2UuJHZtLnNldEltYWdlKHsgcGF0aDogX3RoaXMuc25hcHNob3RzcmMgLCBkb3R5cGU6IHRoaXMuZG90eXBlIH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuLmxpdmUtY2FtZXJhIHtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdC5wcmV2aWV3IHtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdC5yZW1pbmQge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDogNjBycHg7XHJcblx0XHRcdGxlZnQ6IDIwcnB4O1xyXG5cdFx0XHR3aWR0aDogMTMwcHg7XHJcblx0XHRcdHotaW5kZXg6IDEwMDtcclxuXHRcdFx0LnJlbWluZC10ZXh0IHtcclxuXHRcdFx0XHRjb2xvcjogI2RkZGRkZDtcclxuXHRcdFx0XHRmb250LXNpemU6IDQwcnB4O1xyXG5cdFx0XHRcdHRleHQtc2hhZG93OiAjZmZmIDFweCAwIDAsICNmZmYgMCAxcHggMCwgI2ZmZiAtMXB4IDAgMCwgI2ZmZiAwIC0xcHggMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Lm91dGxpbmUtYm94IHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6IDA7XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0ei1pbmRleDogOTk7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHQub3V0bGluZS1pbWcge1xyXG5cdFx0XHRcdC8vd2lkdGg6IDc1MHJweDtcclxuXHRcdFx0XHQvL2hlaWdodDogMTEyNXJweDtcclxuXHRcdFx0XHQvLzE5LjU6OSDlsY/luZXmr5TkvovvvIzpgILnlKjkuo7ojaPogIAyMFByb1xyXG5cdFx0XHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRcdFx0aGVpZ2h0OiAxNjI1cnB4O1xyXG5cdFx0XHRcdC8vb3BhY2l0eTogMC40O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5tZW51IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxODBycHg7XHJcblx0XHR6LWluZGV4OiA5ODtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdC5tZW51LW1hc2sge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdFx0aGVpZ2h0OiAxODBycHg7XHJcblx0XHRcdHotaW5kZXg6IDk4O1xyXG5cdFx0fVxyXG5cdFx0Lm1lbnUtYmFjayB7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0bGVmdDogMzBycHg7XHJcblx0XHRcdGJvdHRvbTogNTBycHg7XHJcblx0XHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0ei1pbmRleDogOTk7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0fVxyXG5cdFx0Lm1lbnUtc25hcHNob3Qge1xyXG5cdFx0XHR3aWR0aDogMTMwcnB4O1xyXG5cdFx0XHRoZWlnaHQ6IDEzMHJweDtcclxuXHRcdFx0ei1pbmRleDogOTk7XHJcblx0XHR9XHJcblx0XHQubWVudS1mbGlwIHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRyaWdodDogMzBycHg7XHJcblx0XHRcdGJvdHRvbTogNTBycHg7XHJcblx0XHRcdHdpZHRoOiA4MHJweDtcclxuXHRcdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0ei1pbmRleDogOTk7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */
/*!******************************************************************!*\
  !*** D:/桌面/temp/test/延异_differance Beta V0.4.2/common/setnum.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default = {\n  change_speed: 500,\n  opacity_num: 0.7,\n  my_watermark: \"延异_differance\" };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL3NldG51bS5qcyJdLCJuYW1lcyI6WyJjaGFuZ2Vfc3BlZWQiLCJvcGFjaXR5X251bSIsIm15X3dhdGVybWFyayJdLCJtYXBwaW5ncyI6InNHQUFlO0FBQ2RBLGNBQVksRUFBQyxHQURDO0FBRWRDLGFBQVcsRUFBQyxHQUZFO0FBR2RDLGNBQVksRUFBQyxlQUhDLEUiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7ICBcclxuXHRjaGFuZ2Vfc3BlZWQ6NTAwLFxyXG5cdG9wYWNpdHlfbnVtOjAuNyxcclxuXHRteV93YXRlcm1hcms6XCLlu7blvIJfZGlmZmVyYW5jZVwiXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!************************************************************************************************************************************!*\
  !*** D:/桌面/temp/test/延异_differance Beta V0.4.2/pages/camera/watermark/watermark.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Program/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Program/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../../../Program/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../../../Program/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!../../../../../../../Program/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!../../../../../../../Program/HBuilderX/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./watermark.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 12);
/* harmony import */ var _Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_10_oneOf_0_3_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_4_Program_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_watermark_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/桌面/temp/test/延异_differance Beta V0.4.2/pages/camera/watermark/watermark.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".live-camera": {
    "": {
      "justifyContent": [
        "center",
        0,
        0,
        0
      ],
      "alignItems": [
        "center",
        0,
        0,
        0
      ]
    }
  },
  ".preview": {
    ".live-camera ": {
      "justifyContent": [
        "center",
        0,
        1,
        1
      ],
      "alignItems": [
        "center",
        0,
        1,
        1
      ]
    }
  },
  ".remind": {
    ".live-camera .preview ": {
      "position": [
        "absolute",
        0,
        2,
        2
      ],
      "top": [
        "60rpx",
        0,
        2,
        2
      ],
      "left": [
        "20rpx",
        0,
        2,
        2
      ],
      "width": [
        "130",
        0,
        2,
        2
      ],
      "zIndex": [
        100,
        0,
        2,
        2
      ]
    }
  },
  ".remind-text": {
    ".live-camera .preview .remind ": {
      "color": [
        "#dddddd",
        0,
        3,
        3
      ],
      "fontSize": [
        "40rpx",
        0,
        3,
        3
      ],
      "textShadow": [
        "#fff 1px 0 0, #fff 0 1px 0, #fff -1px 0 0, #fff 0 -1px 0",
        0,
        3,
        3
      ]
    }
  },
  ".outline-box": {
    ".live-camera .preview ": {
      "position": [
        "absolute",
        0,
        2,
        4
      ],
      "top": [
        0,
        0,
        2,
        4
      ],
      "left": [
        0,
        0,
        2,
        4
      ],
      "bottom": [
        0,
        0,
        2,
        4
      ],
      "zIndex": [
        99,
        0,
        2,
        4
      ],
      "alignItems": [
        "center",
        0,
        2,
        4
      ],
      "justifyContent": [
        "center",
        0,
        2,
        4
      ]
    }
  },
  ".outline-img": {
    ".live-camera .preview .outline-box ": {
      "width": [
        "750rpx",
        0,
        3,
        5
      ],
      "height": [
        "1625rpx",
        0,
        3,
        5
      ]
    }
  },
  ".menu": {
    ".live-camera ": {
      "position": [
        "absolute",
        0,
        1,
        6
      ],
      "left": [
        0,
        0,
        1,
        6
      ],
      "bottom": [
        0,
        0,
        1,
        6
      ],
      "width": [
        "750rpx",
        0,
        1,
        6
      ],
      "height": [
        "180rpx",
        0,
        1,
        6
      ],
      "zIndex": [
        98,
        0,
        1,
        6
      ],
      "alignItems": [
        "center",
        0,
        1,
        6
      ],
      "justifyContent": [
        "center",
        0,
        1,
        6
      ]
    }
  },
  ".menu-mask": {
    ".live-camera .menu ": {
      "position": [
        "absolute",
        0,
        2,
        7
      ],
      "left": [
        0,
        0,
        2,
        7
      ],
      "bottom": [
        0,
        0,
        2,
        7
      ],
      "width": [
        "750rpx",
        0,
        2,
        7
      ],
      "height": [
        "180rpx",
        0,
        2,
        7
      ],
      "zIndex": [
        98,
        0,
        2,
        7
      ]
    }
  },
  ".menu-back": {
    ".live-camera .menu ": {
      "position": [
        "absolute",
        0,
        2,
        8
      ],
      "left": [
        "30rpx",
        0,
        2,
        8
      ],
      "bottom": [
        "50rpx",
        0,
        2,
        8
      ],
      "width": [
        "80rpx",
        0,
        2,
        8
      ],
      "height": [
        "80rpx",
        0,
        2,
        8
      ],
      "zIndex": [
        99,
        0,
        2,
        8
      ],
      "alignItems": [
        "center",
        0,
        2,
        8
      ],
      "justifyContent": [
        "center",
        0,
        2,
        8
      ]
    }
  },
  ".menu-snapshot": {
    ".live-camera .menu ": {
      "width": [
        "130rpx",
        0,
        2,
        9
      ],
      "height": [
        "130rpx",
        0,
        2,
        9
      ],
      "zIndex": [
        99,
        0,
        2,
        9
      ]
    }
  },
  ".menu-flip": {
    ".live-camera .menu ": {
      "position": [
        "absolute",
        0,
        2,
        10
      ],
      "right": [
        "30rpx",
        0,
        2,
        10
      ],
      "bottom": [
        "50rpx",
        0,
        2,
        10
      ],
      "width": [
        "80rpx",
        0,
        2,
        10
      ],
      "height": [
        "80rpx",
        0,
        2,
        10
      ],
      "zIndex": [
        99,
        0,
        2,
        10
      ],
      "alignItems": [
        "center",
        0,
        2,
        10
      ],
      "justifyContent": [
        "center",
        0,
        2,
        10
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 13 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);