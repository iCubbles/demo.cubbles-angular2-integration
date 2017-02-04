webpackJsonp([0,3],{

/***/ 330:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 330;


/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_browser_module__ = __webpack_require__(431);






/**
 * enable prod mode for production environments
 */
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
var platformRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["platformUniversalDynamic"])();
platformRef.bootstrapModule(__WEBPACK_IMPORTED_MODULE_5__app_app_browser_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Projekte/Cubbles/demo.cubbles-angular2-integration/server-side/src/client.js.map

/***/ },

/***/ 430:
/***/ function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(58);
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
var __universal__ = __webpack_require__(437);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=D:/Projekte/Cubbles/demo.cubbles-angular2-integration/server-side/src/__2.1.1.workaround.js.map

/***/ },

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demo1_demo1_component__ = __webpack_require__(433);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
/**
 * This file and `main.node.ts` are identical, at the moment(!)
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
                 * BrowserModule, HttpModule, and JsonpModule are included
                 */
                __WEBPACK_IMPORTED_MODULE_1_angular2_universal__["UniversalModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Projekte/Cubbles/demo.cubbles-angular2-integration/server-side/src/app.browser.module.js.map

/***/ },

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
            template: __webpack_require__(599),
            styles: [__webpack_require__(598)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Projekte/Cubbles/demo.cubbles-angular2-integration/server-side/src/app.component.js.map

/***/ },

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
            template: __webpack_require__(600)
        }), 
        __metadata('design:paramtypes', [])
    ], Demo1Component);
    return Demo1Component;
}());
//# sourceMappingURL=D:/Projekte/Cubbles/demo.cubbles-angular2-integration/server-side/src/demo1.component.js.map

/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(432);
/* harmony namespace reexport (by used) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_component__["a"]; });

//# sourceMappingURL=D:/Projekte/Cubbles/demo.cubbles-angular2-integration/server-side/src/index.js.map

/***/ },

/***/ 435:
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

/***/ 436:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=D:/Projekte/Cubbles/demo.cubbles-angular2-integration/server-side/src/polyfills.js.map

/***/ },

/***/ 598:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 599:
/***/ function(module, exports) {

module.exports = "<header class=\"\">\r\n    <nav class=\"blue darken-2\">\r\n        <div class=\"container\">\r\n            <div class=\"nav-wrapper\">\r\n                <a href=\"#\" class=\"brand-logo\">Cubbles meets Angular 2</a>\r\n            </div>\r\n            <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\r\n                <li><a href=\"https://github.com/iCubbles/demo.cubbles-angular2-integration\" target=\"_blank\">Github</a></li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</header>\r\n\r\n<app-demo1></app-demo1>\r\n\r\n<footer class=\"page-footer  blue darken-2\">\r\n    <div class=\"container center\">\r\n        <p class=\"grey-text text-lighten-4\">Get in touch with Cubbles: Visit us on <a class=\"grey-text text-lighten-2\" href=\"https://cubbles.github.io\" target=\"_blank\">github</a>.</p>\r\n    </div>\r\n    <div class=\"footer-copyright\">\r\n        <div class=\"container\">\r\n            &copy; 2017 incowia GmbH\r\n            <a class=\"grey-text text-lighten-2 right\" href=\"https://cubbles.github.io\" target=\"_blank\">Cubbles Platform</a>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ },

/***/ 600:
/***/ function(module, exports) {

module.exports = "<main>\r\n  <div class=\"container\">\r\n    <article>\r\n      <h3>Demo 1</h3>\r\n      <p class=\"flow-text\">This demo shows how to easily integrate Cubbles into an existing Angular 2 Application. The project is build with the\r\n        angular-cli and Cubbles Runtime Extension 2.1.0 (<a href=\"https://github.com/cubbles/cubx.core.rte/tree/master/webpackages/cubx.core.rte\"\r\n          target=\"_blank\">source on github</a>)\r\n      </p>\r\n    </article>\r\n\r\n    <div class=\"divider\"></div>\r\n\r\n    <article>\r\n      <p>\r\n        The simplest way to add a cubbles component is to add <code>CUSTOM_ELEMENTS_SCHEMA</code> to the <code>@NgModule</code>,\r\n        allowing custom HTML Element.\r\n      </p>\r\n    </article>\r\n\r\n    <div class=\"divider\"></div>\r\n\r\n    <article>\r\n      <federal-state-elections cubx-webpackage-id=\"com.incowia.demo.elections@0.1.0-SNAPSHOT\"></federal-state-elections>\r\n    </article>\r\n\r\n    <article>      \r\n      <div class=\"row\">\r\n          <div class=\"col s4 center-align\"><h4>2004</h4></div>\r\n          <div class=\"col s4 center-align\"><h4>2009</h4></div>\r\n          <div class=\"col s4 center-align\"><h4>2014</h4></div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col s4\">\r\n          <pie-chart cubx-webpackage-id=\"com.incowia.lib.chart-library@0.3.0-SNAPSHOT\">\r\n            <cubx-core-init style=\"display:none\">\r\n              <cubx-core-slot-init slot=\"dataColumns\">\r\n                [[\"CDU\", 43.0], [\"Die Linke\", 26.1], [\"SPD\", 14.5], [\"FDP\", 3.6], [\"Grüne\", 4.5], [\"AfD\", 0], [\"Sonstige\", 8.3]]\r\n              </cubx-core-slot-init>\r\n            </cubx-core-init>\r\n          </pie-chart>\r\n        </div>\r\n\r\n        <div class=\"col s4\">\r\n          <pie-chart cubx-webpackage-id=\"com.incowia.lib.chart-library@0.3.0-SNAPSHOT\">\r\n            <cubx-core-init style=\"display:none\">\r\n              <cubx-core-slot-init slot=\"dataColumns\">\r\n                [[\"CDU\", 31.2], [\"Die Linke\", 27.4], [\"SPD\", 18.5], [\"FDP\", 7.6], [\"Grüne\", 6.2], [\"AfD\", 0], [\"Sonstige\", 9.1]]\r\n              </cubx-core-slot-init>\r\n            </cubx-core-init>\r\n          </pie-chart>\r\n        </div>\r\n\r\n        <div class=\"col s4\">\r\n          <pie-chart cubx-webpackage-id=\"com.incowia.lib.chart-library@0.3.0-SNAPSHOT\">\r\n            <cubx-core-init style=\"display:none\">\r\n              <cubx-core-slot-init slot=\"dataColumns\">\r\n                [[\"CDU\", 33.5], [\"Die Linke\", 28.2], [\"SPD\", 12.4], [\"FDP\", 2.5], [\"Grüne\", 5.7], [\"AfD\", 10.6], [\"Sonstige\", 7.7]]\r\n              </cubx-core-slot-init>\r\n            </cubx-core-init>\r\n          </pie-chart>\r\n        </div>\r\n      </div>\r\n    </article>\r\n\r\n<article>\r\n  <ul class=\"collapsible\" data-collapsible=\"expandable\">\r\n    <li>\r\n      <div class=\"collapsible-header\"><i class=\"medium material-icons\">code</i>HTML: index.html</div>\r\n      <div class=\"collapsible-body\">\r\n        <pre><code>\r\n&lt;head&gt;\r\n    ...\r\n  <!-- Include Cubbles -->\r\n  &lt;script src=\"https://cubbles.world/sandbox/cubx.core.rte@2.1.0/webcomponents-lite/webcomponents-lite.js\"&gt;&lt;/script&gt;\r\n  &lt;script src=\"https://cubbles.world/sandbox/cubx.core.rte@2.1.0/crc-loader/js/main.js\" data-crcinit-loadcif=\"true\">&lt;/script&gt;\r\n    ...\r\n&lt;/head&gt;\r\n\r\n&lt;html&gt;\r\n  \r\n  ...\r\n&lt;/html&gt;</code></pre>\r\n      </div>\r\n    </li>\r\n\r\n    <li>\r\n      <div class=\"collapsible-header\"><i class=\"medium material-icons\">code</i>HTML: Component</div>\r\n      <div class=\"collapsible-body\">\r\n        <pre><code>\r\n      &lt;federal-state-elections cubx-webpackage-id=&quot;com.incowia.demo.elections@0.1.0-SNAPSHOT&quot;&gt;&lt;/federal-state-elections&gt;</code></pre>\r\n      </div>\r\n    </li>\r\n\r\n    <li>\r\n      <div class=\"collapsible-header\"><i class=\"medium material-icons\">code</i>TypeScript Component</div>\r\n      <div class=\"collapsible-body\">\r\n        <pre><code class=\"javascript\">\r\n              import {{ '{' }} Component, OnInit } from '@angular/core';\r\n\r\n@Component({{ '{' }}\r\n  selector: 'app-demo1',\r\n  templateUrl: './demo1.component.html'\r\n})\r\nexport class Demo1Component implements OnInit {{ '{' }}\r\n\r\n  constructor() {{ '{' }} }\r\n\r\n  ngOnInit() {{ '{' }}\r\n    // build custom event for starting bootstrap of CIF (here, use the deprecated way that also works in IE)\r\n    var event = document.createEvent('CustomEvent');\r\n    event.initCustomEvent('CubxComponentLinked', true, true, {{ '{' }}});\r\n\r\n    // dispatch this 'CubxComponentLinked' event\r\n    document.dispatchEvent(event);\r\n  }\r\n\r\n}</code></pre>\r\n      </div>\r\n    </li>\r\n\r\n    <li>\r\n      <div class=\"collapsible-header\"><i class=\"medium material-icons\">code</i>Angular Module</div>\r\n      <div class=\"collapsible-body\">\r\n        <pre><code class=\"javascript\">import {{ '{' }} NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\r\n\r\n...\r\n\r\n\r\n@NgModule({{ '{' }}\r\n\r\n  ...\r\n  \r\n  schemas: [CUSTOM_ELEMENTS_SCHEMA],\r\n  \r\n  ...\r\n})\r\nexport class AppModule {{ '{' }} }\r\n</code></pre>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</article>\r\n</div>\r\n</main>"

/***/ },

/***/ 616:
/***/ function(module, exports) {

/* (ignored) */

/***/ },

/***/ 617:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(331);


/***/ }

},[617]);
//# sourceMappingURL=client.bundle.map