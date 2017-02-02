module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("@angular/core");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_compression__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_express_engine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_node_module__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__server_routes__ = __webpack_require__(10);










// App
var app = __WEBPACK_IMPORTED_MODULE_3_express__();
var ROOT = __WEBPACK_IMPORTED_MODULE_2_path__["join"](__WEBPACK_IMPORTED_MODULE_2_path__["resolve"](__dirname, '..'));
var port = process.env.PORT || 4200;
/**
 * enable prod mode for production environments
 */
if (__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["enableProdMode"])();
}
/**
 * Express View
 */
app.engine('.html', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_angular2_express_engine__["createEngine"])({}));
app.set('views', __WEBPACK_IMPORTED_MODULE_2_path__["join"](ROOT, 'client'));
app.set('view engine', 'html');
/**
 * Enable compression
 */
app.use(__WEBPACK_IMPORTED_MODULE_4_compression__());
/**
 * serve static files
 */
app.use('/', __WEBPACK_IMPORTED_MODULE_3_express__["static"](__WEBPACK_IMPORTED_MODULE_2_path__["join"](ROOT, 'client'), { index: false }));
/**
 * place your api routes here
 */
// app.use('/api', api);
/**
 * bootstrap universal app
 * @param req
 * @param res
 */
function ngApp(req, res) {
    res.render('index', {
        req: req,
        res: res,
        ngModule: __WEBPACK_IMPORTED_MODULE_7__app_app_node_module__["a" /* AppModule */],
        preboot: false,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: req.hostname
    });
}
/**
 * use universal for specific routes
 */
app.get('/', ngApp);
__WEBPACK_IMPORTED_MODULE_9__server_routes__["a" /* routes */].forEach(function (route) {
    app.get("/" + route, ngApp);
    app.get("/" + route + "/*", ngApp);
});
/**
 * if you want to use universal for all routes, you can use the '*' wildcard
 */
app.get('*', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var pojo = { status: 404, message: 'No Content' };
    var json = JSON.stringify(pojo, null, 2);
    res.status(404).send(json);
});
app.listen(port, function () {
    console.log("Listening on port " + port);
});
//# sourceMappingURL=D:/Projekte/Cubbles/demo.cubbles-angular2-integration/server-side/src/server.js.map

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(14);
var __core_private__ = __webpack_require__(0);
var patch = false;
if (!__core_private__.hasOwnProperty('ViewUtils')) {
    patch = true;
    __core_private__.ViewUtils = __core_private__.view_utils;
}
if (!__compiler__.__compiler_private__) {
    patch = true;
    (__compiler__).__compiler_private__ = {
        SelectorMatcher: __compiler__.SelectorMatcher,
        CssSelector: __compiler__.CssSelector
    };
}
var __universal__ = __webpack_require__(17);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=D:/Projekte/Cubbles/demo.cubbles-angular2-integration/server-side/src/__2.1.1.workaround.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(12),
            styles: [__webpack_require__(11)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Projekte/Cubbles/demo.cubbles-angular2-integration/server-side/src/app.component.js.map

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demo1_demo1_component__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
/**
 * This file and `main.browser.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { RouterModule } from '@angular/router';
// import { appRoutes } from './app/app.routing';
/**
 * Top-level NgModule "container"
 */
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            /** Root App Component */
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__index__["a" /* AppComponent */]],
            /** Our Components */
            declarations: [__WEBPACK_IMPORTED_MODULE_3__index__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__demo1_demo1_component__["a" /* Demo1Component */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
            imports: [
                /**
                 * NOTE: Needs to be your first import (!)
                 * NodeModule, NodeHttpModule, NodeJsonpModule are included
                 */
                __WEBPACK_IMPORTED_MODULE_1_angular2_universal__["UniversalModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Projekte/Cubbles/demo.cubbles-angular2-integration/server-side/src/app.node.module.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Demo1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Demo1Component = (function () {
    function Demo1Component() {
    }
    Demo1Component.prototype.ngOnInit = function () {
    };
    Demo1Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-demo1',
            template: __webpack_require__(13)
        }), 
        __metadata('design:paramtypes', [])
    ], Demo1Component);
    return Demo1Component;
}());
//# sourceMappingURL=D:/Projekte/Cubbles/demo.cubbles-angular2-integration/server-side/src/demo1.component.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(4);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });

//# sourceMappingURL=D:/Projekte/Cubbles/demo.cubbles-angular2-integration/server-side/src/index.js.map

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ung build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Projekte/Cubbles/demo.cubbles-angular2-integration/server-side/src/environment.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=D:/Projekte/Cubbles/demo.cubbles-angular2-integration/server-side/src/polyfills.js.map

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });
/**
 * Server-side routes. Only the listed routes support html5pushstate.
 * Has to match client side routes.
 *
 * Index (/) route does not have to be listed here.
 *
 * @example
 * export const routes: string[] = [
 * 'home', 'about'
 * ];
 **/
var routes = [];
//# sourceMappingURL=D:/Projekte/Cubbles/demo.cubbles-angular2-integration/server-side/src/server.routes.js.map

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = ""

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = "<header class=\"\">\r\n    <nav class=\"blue darken-2\">\r\n        <div class=\"container\">\r\n            <div class=\"nav-wrapper\">\r\n                <a href=\"#\" class=\"brand-logo\">Cubbles meets Angular 2</a>\r\n            </div>\r\n            <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\r\n                <li><a href=\"https://github.com/iCubbles/demo.cubbles-angular2-integration\" target=\"_blank\">Github</a></li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</header>\r\n\r\n<app-demo1></app-demo1>\r\n\r\n<footer class=\"page-footer  blue darken-2\">\r\n    <div class=\"container center\">\r\n        <p class=\"grey-text text-lighten-4\">Get in touch with Cubbles: Visit us on <a class=\"grey-text text-lighten-2\" href=\"https://cubbles.github.io\" target=\"_blank\">github</a>.</p>\r\n    </div>\r\n    <div class=\"footer-copyright\">\r\n        <div class=\"container\">\r\n            &copy; 2017 incowia GmbH\r\n            <a class=\"grey-text text-lighten-2 right\" href=\"https://cubbles.github.io\" target=\"_blank\">Cubbles Platform</a>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = "<main>\r\n  <div class=\"container\">\r\n    <article>\r\n      <h3>Demo 1</h3>\r\n      <p class=\"flow-text\">This demo shows how to easily integrate Cubbles into an existing Angular 2 Application. The project is build with the\r\n        angular-cli and Cubbles Runtime Extension 2.1.0 (<a href=\"https://github.com/cubbles/cubx.core.rte/tree/master/webpackages/cubx.core.rte\"\r\n          target=\"_blank\">source on github</a>)\r\n      </p>\r\n    </article>\r\n\r\n    <div class=\"divider\"></div>\r\n\r\n    <article>\r\n      <p>\r\n        The simplest way to add a cubbles component is to add <code>CUSTOM_ELEMENTS_SCHEMA</code> to the <code>@NgModule</code>,\r\n        allowing custom HTML Element.\r\n      </p>\r\n    </article>\r\n\r\n    <div class=\"divider\"></div>\r\n\r\n    <article>\r\n      <federal-state-elections cubx-webpackage-id=\"com.incowia.demo.elections@0.1.0-SNAPSHOT\"></federal-state-elections>\r\n    </article>\r\n\r\n    <article>\r\n      <ul class=\"collapsible\" data-collapsible=\"expandable\">\r\n        <li>\r\n          <div class=\"collapsible-header\"><i class=\"medium material-icons\">code</i>HTML: index.html</div>\r\n          <div class=\"collapsible-body\">\r\n            <pre><code>\r\n&lt;head&gt;\r\n    ...\r\n  <!-- Include Cubbles -->\r\n  &lt;script src=\"https://cubbles.world/sandbox/cubx.core.rte@2.1.0/webcomponents-lite/webcomponents-lite.js\"&gt;&lt;/script&gt;\r\n  &lt;script src=\"https://cubbles.world/sandbox/cubx.core.rte@2.1.0/crc-loader/js/main.js\" data-crcinit-loadcif=\"true\">&lt;/script&gt;\r\n    ...\r\n&lt;/head&gt;\r\n\r\n&lt;html&gt;\r\n  \r\n  ...\r\n&lt;/html&gt;</code></pre>\r\n          </div>\r\n        </li>\r\n\r\n        <li>\r\n          <div class=\"collapsible-header\"><i class=\"medium material-icons\">code</i>HTML: Component</div>\r\n          <div class=\"collapsible-body\">\r\n            <pre><code>\r\n      &lt;federal-state-elections cubx-webpackage-id=&quot;com.incowia.demo.elections@0.1.0-SNAPSHOT&quot;&gt;&lt;/federal-state-elections&gt;</code></pre>\r\n          </div>\r\n        </li>\r\n\r\n        <li>\r\n          <div class=\"collapsible-header\"><i class=\"medium material-icons\">code</i>TypeScript Component</div>\r\n          <div class=\"collapsible-body\">\r\n            <pre><code class=\"javascript\">\r\n              import {{ '{' }} Component, OnInit } from '@angular/core';\r\n\r\n@Component({{ '{' }}\r\n  selector: 'app-demo1',\r\n  templateUrl: './demo1.component.html'\r\n})\r\nexport class Demo1Component implements OnInit {{ '{' }}\r\n\r\n  constructor() {{ '{' }} }\r\n\r\n  ngOnInit() {{ '{' }}\r\n    // build custom event for starting bootstrap of CIF (here, use the deprecated way that also works in IE)\r\n    var event = document.createEvent('CustomEvent');\r\n    event.initCustomEvent('CubxComponentLinked', true, true, {{ '{' }}});\r\n\r\n    // dispatch this 'CubxComponentLinked' event\r\n    document.dispatchEvent(event);\r\n  }\r\n\r\n}</code></pre>\r\n          </div>\r\n        </li>\r\n\r\n        <li>\r\n          <div class=\"collapsible-header\"><i class=\"medium material-icons\">code</i>Angular Module</div>\r\n          <div class=\"collapsible-body\">\r\n            <pre><code class=\"javascript\">import {{ '{' }} NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\r\n\r\n...\r\n\r\n\r\n@NgModule({{ '{' }}\r\n\r\n  ...\r\n  \r\n  schemas: [CUSTOM_ELEMENTS_SCHEMA],\r\n  \r\n  ...\r\n})\r\nexport class AppModule {{ '{' }} }\r\n</code></pre>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </article>\r\n  </div>\r\n</main>"

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("@angular/compiler");

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("@angular/forms");

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = require("angular2-express-engine");

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = require("angular2-platform-node/__private_imports__");

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("angular2-universal");

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = require("angular2-universal-polyfills");

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("compression");

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/array");

/***/ },
/* 22 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/date");

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/function");

/***/ },
/* 24 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/map");

/***/ },
/* 25 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/math");

/***/ },
/* 26 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/number");

/***/ },
/* 27 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/object");

/***/ },
/* 28 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-float");

/***/ },
/* 29 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/parse-int");

/***/ },
/* 30 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/reflect");

/***/ },
/* 31 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/regexp");

/***/ },
/* 32 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/set");

/***/ },
/* 33 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/string");

/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports = require("core-js/es6/symbol");

/***/ },
/* 35 */
/***/ function(module, exports) {

module.exports = require("core-js/es7/reflect");

/***/ },
/* 36 */
/***/ function(module, exports) {

module.exports = require("express");

/***/ },
/* 37 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWZkN2E0NDBmYWUyMDU4OTI3YmUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19fMi4xLjEud29ya2Fyb3VuZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAubm9kZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9kZW1vMS9kZW1vMS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9wb2x5ZmlsbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci5yb3V0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2RlbW8xL2RlbW8xLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbXBpbGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXBsYXRmb3JtLW5vZGUvX19wcml2YXRlX2ltcG9ydHNfX1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L2FycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvZGF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L2Z1bmN0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvbWFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvbWF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L251bWJlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L29iamVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3BhcnNlLWZsb2F0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtaW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9lczYvcmVmbGVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZ2V4cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3NldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3N0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM2L3N5bWJvbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvZXM3L3JlZmxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVB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Y2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9yeSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb3J5IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHR9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVmZDdhNDQwZmFlMjA1ODkyN2JlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIHRoZSBwb2x5ZmlsbHMgbXVzdCBiZSB0aGUgZmlyc3QgdGhpbmcgaW1wb3J0ZWRcbiAqL1xuaW1wb3J0ICcuL3BvbHlmaWxscy50cyc7XG5pbXBvcnQgJy4vX18yLjEuMS53b3JrYXJvdW5kLnRzJzsgLy8gdGVtcG9yYXJ5IHVudGlsIDIuMS4xIHRoaW5ncyBhcmUgcGF0Y2hlZCBpbiBDb3JlXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIGNvbXByZXNzaW9uIGZyb20gJ2NvbXByZXNzaW9uJztcbmltcG9ydCB7IGNyZWF0ZUVuZ2luZSB9IGZyb20gJ2FuZ3VsYXIyLWV4cHJlc3MtZW5naW5lJztcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubm9kZS5tb2R1bGUnO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tICcuL3NlcnZlci5yb3V0ZXMnO1xuXG4vLyBBcHBcblxuY29uc3QgYXBwICA9IGV4cHJlc3MoKTtcbmNvbnN0IFJPT1QgPSBwYXRoLmpvaW4ocGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uJykpO1xuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNDIwMDtcblxuLyoqXG4gKiBlbmFibGUgcHJvZCBtb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50c1xuICovXG5pZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xuICBlbmFibGVQcm9kTW9kZSgpO1xufVxuXG4vKipcbiAqIEV4cHJlc3MgVmlld1xuICovXG5hcHAuZW5naW5lKCcuaHRtbCcsIGNyZWF0ZUVuZ2luZSh7fSkpO1xuYXBwLnNldCgndmlld3MnLCBwYXRoLmpvaW4oUk9PVCwgJ2NsaWVudCcpKTtcbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2h0bWwnKTtcblxuLyoqXG4gKiBFbmFibGUgY29tcHJlc3Npb25cbiAqL1xuYXBwLnVzZShjb21wcmVzc2lvbigpKTtcblxuLyoqXG4gKiBzZXJ2ZSBzdGF0aWMgZmlsZXNcbiAqL1xuYXBwLnVzZSgnLycsIGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihST09ULCAnY2xpZW50JyksIHtpbmRleDogZmFsc2V9KSk7XG5cbi8qKlxuICogcGxhY2UgeW91ciBhcGkgcm91dGVzIGhlcmVcbiAqL1xuLy8gYXBwLnVzZSgnL2FwaScsIGFwaSk7XG5cbi8qKlxuICogYm9vdHN0cmFwIHVuaXZlcnNhbCBhcHBcbiAqIEBwYXJhbSByZXFcbiAqIEBwYXJhbSByZXNcbiAqL1xuZnVuY3Rpb24gbmdBcHAocmVxOiBhbnksIHJlczogYW55KSB7XG4gIHJlcy5yZW5kZXIoJ2luZGV4Jywge1xuICAgIHJlcSxcbiAgICByZXMsXG4gICAgbmdNb2R1bGU6IEFwcE1vZHVsZSxcbiAgICBwcmVib290OiBmYWxzZSxcbiAgICBiYXNlVXJsOiAnLycsXG4gICAgcmVxdWVzdFVybDogcmVxLm9yaWdpbmFsVXJsLFxuICAgIG9yaWdpblVybDogcmVxLmhvc3RuYW1lXG4gIH0pO1xufVxuXG4vKipcbiAqIHVzZSB1bml2ZXJzYWwgZm9yIHNwZWNpZmljIHJvdXRlc1xuICovXG5hcHAuZ2V0KCcvJywgbmdBcHApO1xucm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICBhcHAuZ2V0KGAvJHtyb3V0ZX1gLCBuZ0FwcCk7XG4gIGFwcC5nZXQoYC8ke3JvdXRlfS8qYCwgbmdBcHApO1xufSk7XG5cbi8qKlxuICogaWYgeW91IHdhbnQgdG8gdXNlIHVuaXZlcnNhbCBmb3IgYWxsIHJvdXRlcywgeW91IGNhbiB1c2UgdGhlICcqJyB3aWxkY2FyZFxuICovXG5cbmFwcC5nZXQoJyonLCBmdW5jdGlvbiAocmVxOiBhbnksIHJlczogYW55KSB7XG4gIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gIGNvbnN0IHBvam8gPSB7c3RhdHVzOiA0MDQsIG1lc3NhZ2U6ICdObyBDb250ZW50J307XG4gIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShwb2pvLCBudWxsLCAyKTtcbiAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoanNvbik7XG59KTtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIudHMiLCIvKlxuICogVEhJUyBJUyBURU1QT1JBUlkgVE8gUEFUQ0ggMi4xLjErIENvcmUgYnVnc1xuICovXG5cbi8qIHRzbGludDpkaXNhYmxlICovXG5sZXQgX19jb21waWxlcl9fOiBhbnkgPSByZXF1aXJlKCdAYW5ndWxhci9jb21waWxlcicpO1xuaW1wb3J0IHsgX19wbGF0Zm9ybV9icm93c2VyX3ByaXZhdGVfXyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xudmFyIF9fY29yZV9wcml2YXRlX186IGFueSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvcmUnKTtcbmxldCBwYXRjaDogQm9vbGVhbiA9IGZhbHNlO1xuXG5pZiAoIV9fY29yZV9wcml2YXRlX18uaGFzT3duUHJvcGVydHkoJ1ZpZXdVdGlscycpKSB7XG4gICAgcGF0Y2ggPSB0cnVlO1xuICAgIF9fY29yZV9wcml2YXRlX18uVmlld1V0aWxzID0gX19jb3JlX3ByaXZhdGVfXy52aWV3X3V0aWxzO1xufVxuXG5pZiAoIV9fY29tcGlsZXJfXy5fX2NvbXBpbGVyX3ByaXZhdGVfXykge1xuICAgIHBhdGNoID0gdHJ1ZTtcbiAgICAoX19jb21waWxlcl9fKS5fX2NvbXBpbGVyX3ByaXZhdGVfXyA9IHtcbiAgICAgICAgU2VsZWN0b3JNYXRjaGVyOiBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyLFxuICAgICAgICBDc3NTZWxlY3RvcjogX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgfVxufVxuXG52YXIgX191bml2ZXJzYWxfXzogYW55ID0gcmVxdWlyZSgnYW5ndWxhcjItcGxhdGZvcm0tbm9kZS9fX3ByaXZhdGVfaW1wb3J0c19fJyk7XG5pZiAocGF0Y2gpIHtcbiAgICBfX3VuaXZlcnNhbF9fLlZpZXdVdGlscyA9IF9fY29yZV9wcml2YXRlX18udmlld191dGlscztcbiAgICBfX3VuaXZlcnNhbF9fLkNzc1NlbGVjdG9yID0gX19jb21waWxlcl9fLkNzc1NlbGVjdG9yXG4gICAgX191bml2ZXJzYWxfXy5TZWxlY3Rvck1hdGNoZXIgPSBfX2NvbXBpbGVyX18uU2VsZWN0b3JNYXRjaGVyXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvX18yLjEuMS53b3JrYXJvdW5kLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIi8qKlxyXG4gKiBUaGlzIGZpbGUgYW5kIGBtYWluLmJyb3dzZXIudHNgIGFyZSBpZGVudGljYWwsIGF0IHRoZSBtb21lbnQoISlcclxuICogQnkgc3BsaXR0aW5nIHRoZXNlLCB5b3UncmUgYWJsZSB0byBjcmVhdGUgbG9naWMsIGltcG9ydHMsIGV0YyB0aGF0IGFyZSBcIlBsYXRmb3JtXCIgc3BlY2lmaWMuXHJcbiAqIElmIHlvdSB3YW50IHlvdXIgY29kZSB0byBiZSBjb21wbGV0ZWx5IFVuaXZlcnNhbCBhbmQgZG9uJ3QgbmVlZCB0aGF0XHJcbiAqIFlvdSBjYW4gYWxzbyBqdXN0IGhhdmUgMSBmaWxlLCB0aGF0IGlzIGltcG9ydGVkIGludG8gYm90aFxyXG4gKiBjbGllbnQudHMgYW5kIHNlcnZlci50c1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVuaXZlcnNhbE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IERlbW8xQ29tcG9uZW50IH0gZnJvbSAnLi9kZW1vMS9kZW1vMS5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG4vLyBpbXBvcnQgeyBhcHBSb3V0ZXMgfSBmcm9tICcuL2FwcC9hcHAucm91dGluZyc7XHJcblxyXG4vKipcclxuICogVG9wLWxldmVsIE5nTW9kdWxlIFwiY29udGFpbmVyXCJcclxuICovXHJcbkBOZ01vZHVsZSh7XHJcbiAgLyoqIFJvb3QgQXBwIENvbXBvbmVudCAqL1xyXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbiAgLyoqIE91ciBDb21wb25lbnRzICovXHJcbiAgZGVjbGFyYXRpb25zOiBbQXBwQ29tcG9uZW50LCBEZW1vMUNvbXBvbmVudF0sXHJcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIC8qKlxyXG4gICAgICogTk9URTogTmVlZHMgdG8gYmUgeW91ciBmaXJzdCBpbXBvcnQgKCEpXHJcbiAgICAgKiBOb2RlTW9kdWxlLCBOb2RlSHR0cE1vZHVsZSwgTm9kZUpzb25wTW9kdWxlIGFyZSBpbmNsdWRlZFxyXG4gICAgICovXHJcbiAgICBVbml2ZXJzYWxNb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZVxyXG4gICAgLyoqXHJcbiAgICAgKiB1c2luZyByb3V0ZXNcclxuICAgICAqL1xyXG4gICAgLy8gUm91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLm5vZGUubW9kdWxlLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWRlbW8xJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RlbW8xLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEZW1vMUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2RlbW8xL2RlbW8xLmNvbXBvbmVudC50cyIsImV4cG9ydCAqIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnRzIiwiLy8gVGhlIGZpbGUgY29udGVudHMgZm9yIHRoZSBjdXJyZW50IGVudmlyb25tZW50IHdpbGwgb3ZlcndyaXRlIHRoZXNlIGR1cmluZyBidWlsZC5cbi8vIFRoZSBidWlsZCBzeXN0ZW0gZGVmYXVsdHMgdG8gdGhlIGRldiBlbnZpcm9ubWVudCB3aGljaCB1c2VzIGBlbnZpcm9ubWVudC50c2AsIGJ1dCBpZiB5b3UgZG9cbi8vIGB1bmcgYnVpbGQgLS1lbnY9cHJvZGAgdGhlbiBgZW52aXJvbm1lbnQucHJvZC50c2Agd2lsbCBiZSB1c2VkIGluc3RlYWQuXG4vLyBUaGUgbGlzdCBvZiB3aGljaCBlbnYgbWFwcyB0byB3aGljaCBmaWxlIGNhbiBiZSBmb3VuZCBpbiBgYW5ndWxhci1jbGkuanNvbmAuXG5cbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcbiAgcHJvZHVjdGlvbjogZmFsc2Vcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnRzIiwiLy8gVGhpcyBmaWxlIGluY2x1ZGVzIHBvbHlmaWxscyBuZWVkZWQgYnkgQW5ndWxhciAyIGFuZCBpcyBsb2FkZWQgYmVmb3JlXG4vLyB0aGUgYXBwLiBZb3UgY2FuIGFkZCB5b3VyIG93biBleHRyYSBwb2x5ZmlsbHMgdG8gdGhpcyBmaWxlLlxuXG5pbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9zeW1ib2wnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9vYmplY3QnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9mdW5jdGlvbic7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWludCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWZsb2F0JztcbmltcG9ydCAnY29yZS1qcy9lczYvbnVtYmVyJztcbmltcG9ydCAnY29yZS1qcy9lczYvbWF0aCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3N0cmluZyc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L2RhdGUnO1xuaW1wb3J0ICdjb3JlLWpzL2VzNi9hcnJheSc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3JlZ2V4cCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L21hcCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3NldCc7XG5pbXBvcnQgJ2NvcmUtanMvZXM2L3JlZmxlY3QnO1xuXG5pbXBvcnQgJ2NvcmUtanMvZXM3L3JlZmxlY3QnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BvbHlmaWxscy50cyIsIi8qKlxuICogU2VydmVyLXNpZGUgcm91dGVzLiBPbmx5IHRoZSBsaXN0ZWQgcm91dGVzIHN1cHBvcnQgaHRtbDVwdXNoc3RhdGUuXG4gKiBIYXMgdG8gbWF0Y2ggY2xpZW50IHNpZGUgcm91dGVzLlxuICpcbiAqIEluZGV4ICgvKSByb3V0ZSBkb2VzIG5vdCBoYXZlIHRvIGJlIGxpc3RlZCBoZXJlLlxuICpcbiAqIEBleGFtcGxlXG4gKiBleHBvcnQgY29uc3Qgcm91dGVzOiBzdHJpbmdbXSA9IFtcbiAqICdob21lJywgJ2Fib3V0J1xuICogXTtcbiAqKi9cbmV4cG9ydCBjb25zdCByb3V0ZXM6IHN0cmluZ1tdID0gW1xuXG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci5yb3V0ZXMudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8aGVhZGVyIGNsYXNzPVxcXCJcXFwiPlxcclxcbiAgICA8bmF2IGNsYXNzPVxcXCJibHVlIGRhcmtlbi0yXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2LXdyYXBwZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwiYnJhbmQtbG9nb1xcXCI+Q3ViYmxlcyBtZWV0cyBBbmd1bGFyIDI8L2E+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPHVsIGlkPVxcXCJuYXYtbW9iaWxlXFxcIiBjbGFzcz1cXFwicmlnaHQgaGlkZS1vbi1tZWQtYW5kLWRvd25cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2lDdWJibGVzL2RlbW8uY3ViYmxlcy1hbmd1bGFyMi1pbnRlZ3JhdGlvblxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPkdpdGh1YjwvYT48L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9uYXY+XFxyXFxuPC9oZWFkZXI+XFxyXFxuXFxyXFxuPGFwcC1kZW1vMT48L2FwcC1kZW1vMT5cXHJcXG5cXHJcXG48Zm9vdGVyIGNsYXNzPVxcXCJwYWdlLWZvb3RlciAgYmx1ZSBkYXJrZW4tMlxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBjZW50ZXJcXFwiPlxcclxcbiAgICAgICAgPHAgY2xhc3M9XFxcImdyZXktdGV4dCB0ZXh0LWxpZ2h0ZW4tNFxcXCI+R2V0IGluIHRvdWNoIHdpdGggQ3ViYmxlczogVmlzaXQgdXMgb24gPGEgY2xhc3M9XFxcImdyZXktdGV4dCB0ZXh0LWxpZ2h0ZW4tMlxcXCIgaHJlZj1cXFwiaHR0cHM6Ly9jdWJibGVzLmdpdGh1Yi5pb1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPmdpdGh1YjwvYT4uPC9wPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyLWNvcHlyaWdodFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgICZjb3B5OyAyMDE3IGluY293aWEgR21iSFxcclxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJncmV5LXRleHQgdGV4dC1saWdodGVuLTIgcmlnaHRcXFwiIGhyZWY9XFxcImh0dHBzOi8vY3ViYmxlcy5naXRodWIuaW9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5DdWJibGVzIFBsYXRmb3JtPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZm9vdGVyPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxtYWluPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGFydGljbGU+XFxyXFxuICAgICAgPGgzPkRlbW8gMTwvaDM+XFxyXFxuICAgICAgPHAgY2xhc3M9XFxcImZsb3ctdGV4dFxcXCI+VGhpcyBkZW1vIHNob3dzIGhvdyB0byBlYXNpbHkgaW50ZWdyYXRlIEN1YmJsZXMgaW50byBhbiBleGlzdGluZyBBbmd1bGFyIDIgQXBwbGljYXRpb24uIFRoZSBwcm9qZWN0IGlzIGJ1aWxkIHdpdGggdGhlXFxyXFxuICAgICAgICBhbmd1bGFyLWNsaSBhbmQgQ3ViYmxlcyBSdW50aW1lIEV4dGVuc2lvbiAyLjEuMCAoPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL2N1YmJsZXMvY3VieC5jb3JlLnJ0ZS90cmVlL21hc3Rlci93ZWJwYWNrYWdlcy9jdWJ4LmNvcmUucnRlXFxcIlxcclxcbiAgICAgICAgICB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+c291cmNlIG9uIGdpdGh1YjwvYT4pXFxyXFxuICAgICAgPC9wPlxcclxcbiAgICA8L2FydGljbGU+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImRpdmlkZXJcXFwiPjwvZGl2PlxcclxcblxcclxcbiAgICA8YXJ0aWNsZT5cXHJcXG4gICAgICA8cD5cXHJcXG4gICAgICAgIFRoZSBzaW1wbGVzdCB3YXkgdG8gYWRkIGEgY3ViYmxlcyBjb21wb25lbnQgaXMgdG8gYWRkIDxjb2RlPkNVU1RPTV9FTEVNRU5UU19TQ0hFTUE8L2NvZGU+IHRvIHRoZSA8Y29kZT5ATmdNb2R1bGU8L2NvZGU+LFxcclxcbiAgICAgICAgYWxsb3dpbmcgY3VzdG9tIEhUTUwgRWxlbWVudC5cXHJcXG4gICAgICA8L3A+XFxyXFxuICAgIDwvYXJ0aWNsZT5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZGl2aWRlclxcXCI+PC9kaXY+XFxyXFxuXFxyXFxuICAgIDxhcnRpY2xlPlxcclxcbiAgICAgIDxmZWRlcmFsLXN0YXRlLWVsZWN0aW9ucyBjdWJ4LXdlYnBhY2thZ2UtaWQ9XFxcImNvbS5pbmNvd2lhLmRlbW8uZWxlY3Rpb25zQDAuMS4wLVNOQVBTSE9UXFxcIj48L2ZlZGVyYWwtc3RhdGUtZWxlY3Rpb25zPlxcclxcbiAgICA8L2FydGljbGU+XFxyXFxuXFxyXFxuICAgIDxhcnRpY2xlPlxcclxcbiAgICAgIDx1bCBjbGFzcz1cXFwiY29sbGFwc2libGVcXFwiIGRhdGEtY29sbGFwc2libGU9XFxcImV4cGFuZGFibGVcXFwiPlxcclxcbiAgICAgICAgPGxpPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xsYXBzaWJsZS1oZWFkZXJcXFwiPjxpIGNsYXNzPVxcXCJtZWRpdW0gbWF0ZXJpYWwtaWNvbnNcXFwiPmNvZGU8L2k+SFRNTDogaW5kZXguaHRtbDwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xsYXBzaWJsZS1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICA8cHJlPjxjb2RlPlxcclxcbiZsdDtoZWFkJmd0O1xcclxcbiAgICAuLi5cXHJcXG4gIDwhLS0gSW5jbHVkZSBDdWJibGVzIC0tPlxcclxcbiAgJmx0O3NjcmlwdCBzcmM9XFxcImh0dHBzOi8vY3ViYmxlcy53b3JsZC9zYW5kYm94L2N1YnguY29yZS5ydGVAMi4xLjAvd2ViY29tcG9uZW50cy1saXRlL3dlYmNvbXBvbmVudHMtbGl0ZS5qc1xcXCImZ3Q7Jmx0Oy9zY3JpcHQmZ3Q7XFxyXFxuICAmbHQ7c2NyaXB0IHNyYz1cXFwiaHR0cHM6Ly9jdWJibGVzLndvcmxkL3NhbmRib3gvY3VieC5jb3JlLnJ0ZUAyLjEuMC9jcmMtbG9hZGVyL2pzL21haW4uanNcXFwiIGRhdGEtY3JjaW5pdC1sb2FkY2lmPVxcXCJ0cnVlXFxcIj4mbHQ7L3NjcmlwdCZndDtcXHJcXG4gICAgLi4uXFxyXFxuJmx0Oy9oZWFkJmd0O1xcclxcblxcclxcbiZsdDtodG1sJmd0O1xcclxcbiAgXFxyXFxuICAuLi5cXHJcXG4mbHQ7L2h0bWwmZ3Q7PC9jb2RlPjwvcHJlPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuXFxyXFxuICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbGxhcHNpYmxlLWhlYWRlclxcXCI+PGkgY2xhc3M9XFxcIm1lZGl1bSBtYXRlcmlhbC1pY29uc1xcXCI+Y29kZTwvaT5IVE1MOiBDb21wb25lbnQ8L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sbGFwc2libGUtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgPHByZT48Y29kZT5cXHJcXG4gICAgICAmbHQ7ZmVkZXJhbC1zdGF0ZS1lbGVjdGlvbnMgY3VieC13ZWJwYWNrYWdlLWlkPSZxdW90O2NvbS5pbmNvd2lhLmRlbW8uZWxlY3Rpb25zQDAuMS4wLVNOQVBTSE9UJnF1b3Q7Jmd0OyZsdDsvZmVkZXJhbC1zdGF0ZS1lbGVjdGlvbnMmZ3Q7PC9jb2RlPjwvcHJlPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuXFxyXFxuICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbGxhcHNpYmxlLWhlYWRlclxcXCI+PGkgY2xhc3M9XFxcIm1lZGl1bSBtYXRlcmlhbC1pY29uc1xcXCI+Y29kZTwvaT5UeXBlU2NyaXB0IENvbXBvbmVudDwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xsYXBzaWJsZS1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICA8cHJlPjxjb2RlIGNsYXNzPVxcXCJqYXZhc2NyaXB0XFxcIj5cXHJcXG4gICAgICAgICAgICAgIGltcG9ydCB7eyAneycgfX0gQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcXHJcXG5cXHJcXG5AQ29tcG9uZW50KHt7ICd7JyB9fVxcclxcbiAgc2VsZWN0b3I6ICdhcHAtZGVtbzEnLFxcclxcbiAgdGVtcGxhdGVVcmw6ICcuL2RlbW8xLmNvbXBvbmVudC5odG1sJ1xcclxcbn0pXFxyXFxuZXhwb3J0IGNsYXNzIERlbW8xQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHt7ICd7JyB9fVxcclxcblxcclxcbiAgY29uc3RydWN0b3IoKSB7eyAneycgfX0gfVxcclxcblxcclxcbiAgbmdPbkluaXQoKSB7eyAneycgfX1cXHJcXG4gICAgLy8gYnVpbGQgY3VzdG9tIGV2ZW50IGZvciBzdGFydGluZyBib290c3RyYXAgb2YgQ0lGIChoZXJlLCB1c2UgdGhlIGRlcHJlY2F0ZWQgd2F5IHRoYXQgYWxzbyB3b3JrcyBpbiBJRSlcXHJcXG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XFxyXFxuICAgIGV2ZW50LmluaXRDdXN0b21FdmVudCgnQ3VieENvbXBvbmVudExpbmtlZCcsIHRydWUsIHRydWUsIHt7ICd7JyB9fX0pO1xcclxcblxcclxcbiAgICAvLyBkaXNwYXRjaCB0aGlzICdDdWJ4Q29tcG9uZW50TGlua2VkJyBldmVudFxcclxcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG59PC9jb2RlPjwvcHJlPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuXFxyXFxuICAgICAgICA8bGk+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbGxhcHNpYmxlLWhlYWRlclxcXCI+PGkgY2xhc3M9XFxcIm1lZGl1bSBtYXRlcmlhbC1pY29uc1xcXCI+Y29kZTwvaT5Bbmd1bGFyIE1vZHVsZTwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xsYXBzaWJsZS1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICA8cHJlPjxjb2RlIGNsYXNzPVxcXCJqYXZhc2NyaXB0XFxcIj5pbXBvcnQge3sgJ3snIH19IE5nTW9kdWxlLCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XFxyXFxuXFxyXFxuLi4uXFxyXFxuXFxyXFxuXFxyXFxuQE5nTW9kdWxlKHt7ICd7JyB9fVxcclxcblxcclxcbiAgLi4uXFxyXFxuICBcXHJcXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXSxcXHJcXG4gIFxcclxcbiAgLi4uXFxyXFxufSlcXHJcXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt7ICd7JyB9fSB9XFxyXFxuPC9jb2RlPjwvcHJlPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvbGk+XFxyXFxuICAgICAgPC91bD5cXHJcXG4gICAgPC9hcnRpY2xlPlxcclxcbiAgPC9kaXY+XFxyXFxuPC9tYWluPlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwL2RlbW8xL2RlbW8xLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21waWxlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvbXBpbGVyXCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2Zvcm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvZm9ybXNcIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItZXhwcmVzcy1lbmdpbmVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1leHByZXNzLWVuZ2luZVwiXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi1wbGF0Zm9ybS1ub2RlL19fcHJpdmF0ZV9pbXBvcnRzX19cIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW5ndWxhcjItdW5pdmVyc2FsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsXCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29tcHJlc3Npb25cIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvYXJyYXlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9hcnJheVwiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9kYXRlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvZGF0ZVwiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9mdW5jdGlvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L2Z1bmN0aW9uXCJcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L21hcFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L21hcFwiXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9tYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvbWF0aFwiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9udW1iZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9udW1iZXJcIlxuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvb2JqZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvb2JqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3BhcnNlLWZsb2F0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtZmxvYXRcIlxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvcGFyc2UtaW50XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvcGFyc2UtaW50XCJcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3JlZmxlY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9yZWZsZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3JlZ2V4cFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3JlZ2V4cFwiXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNi9zZXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjb3JlLWpzL2VzNi9zZXRcIlxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9lczYvc3RyaW5nXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczYvc3RyaW5nXCJcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvZXM2L3N5bWJvbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNvcmUtanMvZXM2L3N5bWJvbFwiXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2VzNy9yZWZsZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29yZS1qcy9lczcvcmVmbGVjdFwiXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicGF0aFwiXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9