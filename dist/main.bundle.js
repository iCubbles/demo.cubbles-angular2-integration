webpackJsonp([0,3],{

/***/ 381:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 381;


/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(500);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Projekte/Cubbles/cubbles-angular2-integration/src/main.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(659)
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Projekte/Cubbles/cubbles-angular2-integration/src/app.component.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demo1_demo1_component__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__demo2_demo2_component__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__demo3_demo3_component__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pie_chart_directive__ = __webpack_require__(504);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var appRoutes = [
    { path: 'demo1', component: __WEBPACK_IMPORTED_MODULE_6__demo1_demo1_component__["a" /* Demo1Component */] },
    { path: 'demo2', component: __WEBPACK_IMPORTED_MODULE_7__demo2_demo2_component__["a" /* Demo2Component */] },
    { path: 'demo3', component: __WEBPACK_IMPORTED_MODULE_8__demo3_demo3_component__["a" /* Demo3Component */] },
    {
        path: '',
        redirectTo: '/demo1',
        pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__demo1_demo1_component__["a" /* Demo1Component */],
                __WEBPACK_IMPORTED_MODULE_7__demo2_demo2_component__["a" /* Demo2Component */],
                __WEBPACK_IMPORTED_MODULE_8__demo3_demo3_component__["a" /* Demo3Component */],
                __WEBPACK_IMPORTED_MODULE_9__pie_chart_directive__["a" /* PieChartDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Projekte/Cubbles/cubbles-angular2-integration/src/app.module.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Demo1Component; });
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
        this.value1 = 10;
        this.value2 = 20;
        this.value3 = 30;
    }
    Demo1Component.prototype.ngOnInit = function () {
        // build custom event for starting bootstrap of CIF (here, use the deprecated way that also works in IE)
        var event = document.createEvent('CustomEvent');
        event.initCustomEvent('CubxComponentLinked', true, true, {});
        // dispatch this 'CubxComponentLinked' event
        document.dispatchEvent(event);
    };
    Demo1Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-demo1',
            template: __webpack_require__(660)
        }), 
        __metadata('design:paramtypes', [])
    ], Demo1Component);
    return Demo1Component;
}());
//# sourceMappingURL=D:/Projekte/Cubbles/cubbles-angular2-integration/src/demo1.component.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Demo2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Demo2Component = (function () {
    function Demo2Component() {
    }
    Demo2Component.prototype.ngOnInit = function () {
    };
    Demo2Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-demo2',
            template: __webpack_require__(661)
        }), 
        __metadata('design:paramtypes', [])
    ], Demo2Component);
    return Demo2Component;
}());
//# sourceMappingURL=D:/Projekte/Cubbles/cubbles-angular2-integration/src/demo2.component.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Demo3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Demo3Component = (function () {
    function Demo3Component() {
    }
    Demo3Component.prototype.ngOnInit = function () {
    };
    Demo3Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
            selector: 'app-demo3',
            template: __webpack_require__(662)
        }), 
        __metadata('design:paramtypes', [])
    ], Demo3Component);
    return Demo3Component;
}());
//# sourceMappingURL=D:/Projekte/Cubbles/cubbles-angular2-integration/src/demo3.component.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PieChartDirective = (function () {
    function PieChartDirective(elementRef) {
        this.elementRef = elementRef;
        this._cifReady = false;
    }
    PieChartDirective.prototype.onCifReady = function (event) {
        this._cifReady = true;
        this.updateElement();
    };
    PieChartDirective.prototype.updateElement = function () {
        if (this._cifReady) {
            this.elementRef.nativeElement.setDataColumns([
                ["dataSet1", this._dataSet1],
                ["dataSet2", this._dataSet2],
                ["dataSet3", this._dataSet3]
            ]);
        }
    };
    Object.defineProperty(PieChartDirective.prototype, "dataSet1", {
        set: function (value) {
            this._dataSet1 = value;
            this.updateElement();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartDirective.prototype, "dataSet2", {
        set: function (value) {
            this._dataSet2 = value;
            this.updateElement();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PieChartDirective.prototype, "dataSet3", {
        set: function (value) {
            this._dataSet3 = value;
            this.updateElement();
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* HostListener */])('window:cifReady', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], PieChartDirective.prototype, "onCifReady", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], PieChartDirective.prototype, "dataSet1", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], PieChartDirective.prototype, "dataSet2", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], PieChartDirective.prototype, "dataSet3", null);
    PieChartDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Directive */])({
            selector: 'pie-chart'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */]) === 'function' && _a) || Object])
    ], PieChartDirective);
    return PieChartDirective;
    var _a;
}());
//# sourceMappingURL=D:/Projekte/Cubbles/cubbles-angular2-integration/src/pie-chart.directive.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Projekte/Cubbles/cubbles-angular2-integration/src/environment.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=D:/Projekte/Cubbles/cubbles-angular2-integration/src/polyfills.js.map

/***/ }),

/***/ 659:
/***/ (function(module, exports) {

module.exports = "<header class=\"\">\n  <nav class=\"blue darken-2\">\n    <div class=\"container\">\n      <div class=\"nav-wrapper\">\n        <a href=\"#\" class=\"brand-logo\">Cubbles meets Angular 2</a>\n      </div>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li><a href=\"/demo1\">Demo 1</a></li>\n        <li><a href=\"/demo2\">Demo 2</a></li>\n        <li><a href=\"/demo3\">Demo 3</a></li>\n        <li><a href=\"https://github.com/iCubbles/demo.cubbles-angular2-integration\" target=\"_blank\">Github</a></li>\n      </ul>\n    </div>\n  </nav>\n</header>\n\n<router-outlet></router-outlet>\n\n<footer class=\"page-footer  blue darken-2\">\n  <div class=\"container center\">\n    <p class=\"grey-text text-lighten-4\">Get in touch with Cubbles: Visit us on <a class=\"grey-text text-lighten-2\" href=\"https://cubbles.github.io\" target=\"_blank\">github</a>.</p>\n  </div>\n  <div class=\"footer-copyright\">\n    <div class=\"container\">\n      &copy; 2016 incowia GmbH\n      <a class=\"grey-text text-lighten-2 right\" href=\"https://cubbles.github.io\" target=\"_blank\">Cubbles Platform</a>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ 660:
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"container\">\n    <article>\n      <h3>Demo 1</h3>\n      <p class=\"flow-text\">This demo shows how to easily integrate Cubbles into an existing Angular 2 Application. The project is build with the\n        angular-cli and Cubbles Runtime Extension 2.1.0 (<a href=\"https://github.com/cubbles/cubx.core.rte/tree/master/webpackages/cubx.core.rte\"\n          target=\"_blank\">source on github</a>)\n      </p>\n    </article>\n\n    <div class=\"divider\"></div>\n\n    <article>\n      <p>\n        In this given scenario the Cubbles component instance is wrapped in a <code>@Directive</code> with a selector named\n        \"\n        <code>&lt;pie-chart&gt;</code>\" same as the cubbles component. The Input slots are bound with <code>@Input</code>        and can be set inline <code>[dataSet1]=\"value1\"</code>, where <code>value1</code> can be a fixed value or a variable\n        of the <code>@Component</code>.\n      </p>\n    </article>\n\n    <div class=\"divider\"></div>\n\n    <article>\n      <p>\n        The HTML part and the Component part are common use of Angular2. The Directive on the other hand is build around cubbles.\n        Take a look at <code>ElementRef</code>, <code>HostListener</code>and <code>Input</code> from the angular/core.\n      </p>\n\n      <ul>\n        <li><code>ElementRef</code>: You will now get the element of the directive injected into the constructor and create a\n          field \"elementRef\"</li>\n        <li><code>@HostListener</code>: Now you can listen to events, <code>window:cifReady</code> is the one we need to wait\n          for\n        </li>\n        <li><code>@Input</code>: This binds a handle to the values coming to the directive</li>\n      </ul>\n    </article>\n\n    <div class=\"divider\"></div>\n\n    <article>\n      <div class=\"row\">\n        <div class=\"col s6 input-form\">\n          <p>Change the values for the <code>&lt;pie-chart&gt;</code> components input slot \"dataset1\", \"dataset2\" and \"dataset3\".</p>\n          <form>\n            <div class=\"range-field\">\n              <input type=\"range\" min=\"0\" max=\"100\" [(ngModel)]=\"value1\" name=\"value1\" #name=\"ngModel\">\n            </div>\n\n            <div class=\"range-field\">\n              <input type=\"range\" min=\"0\" max=\"100\" [(ngModel)]=\"value2\" name=\"value2\" #name=\"ngModel\">\n            </div>\n\n            <div class=\"range-field\">\n              <input type=\"range\" min=\"0\" max=\"100\" [(ngModel)]=\"value3\" name=\"value3\" #name=\"ngModel\">\n            </div>\n          </form>\n        </div>\n\n        <div class=\"col s6\" cubx-core-crc>\n          <pie-chart cubx-webpackage-id=\"com.incowia.lib.chart-library@0.3.0-SNAPSHOT\" [dataSet1]=\"value1\" [dataSet2]=\"value2\" [dataSet3]=\"value3\"></pie-chart>\n        </div>\n      </div>\n    </article>\n\n    <article>\n      <ul class=\"collapsible\" data-collapsible=\"expandable\">\n        <li>\n          <div class=\"collapsible-header\"><i class=\"medium material-icons\">code</i>HTML: index.html</div>\n          <div class=\"collapsible-body\">\n            <pre><code>\n&lt;head&gt;\n    ...\n  <!-- Include Cubbles -->\n  &lt;script src=\"https://cubbles.world/sandbox/cubx.core.rte@2.1.0/webcomponents-lite/webcomponents-lite.js\"&gt;&lt;/script&gt;\n  &lt;script src=\"https://cubbles.world/sandbox/cubx.core.rte@2.1.0/crc-loader/js/main.js\" data-crcinit-loadcif=\"true\">&lt;/script&gt;\n    ...\n&lt;/head&gt;\n\n&lt;html&gt;\n  \n  ...\n\n  &lt;form&gt;\n    &lt;div class=&quot;range-field&quot;&gt;\n      &lt;input type=&quot;range&quot; min=&quot;0&quot; max=&quot;100&quot; [(ngModel)]=&quot;value1&quot; name=&quot;value1&quot; #name=&quot;ngModel&quot;&gt;\n    &lt;/div&gt;\n\n    &lt;div class=&quot;range-field&quot;&gt;\n      &lt;input type=&quot;range&quot; min=&quot;0&quot; max=&quot;100&quot; [(ngModel)]=&quot;value2&quot; name=&quot;value2&quot; #name=&quot;ngModel&quot;&gt;\n    &lt;/div&gt;\n\n    &lt;div class=&quot;range-field&quot;&gt;\n      &lt;input type=&quot;range&quot; min=&quot;0&quot; max=&quot;100&quot; [(ngModel)]=&quot;value3&quot; name=&quot;value3&quot; #name=&quot;ngModel&quot;&gt;\n    &lt;/div&gt;\n  &lt;/form&gt;\n\n  ...\n\n&lt;/html&gt;</code></pre>\n          </div>\n        </li>\n\n        <li>\n          <div class=\"collapsible-header\"><i class=\"medium material-icons\">code</i>TypeScript Component</div>\n          <div class=\"collapsible-body\">\n            <pre><code class=\"javascript\">\nimport {{ '{' }} Component } from '@angular/core';\n\n@Component({{ '{' }}\n  selector: 'app-root',\n  templateUrl: './app.component.html',\n  styleUrls: ['./app.component.css']\n})\n\nexport class AppComponent {{ '{' }}\n  value1 = 10;\n  value2 = 20;\n  value3 = 30;\n\n  constructor() {{ '{' }} }\n}\n              </code></pre>\n          </div>\n        </li>\n\n        <li>\n          <div class=\"collapsible-header\"><i class=\"medium material-icons\">code</i>TypeScript Directive</div>\n          <div class=\"collapsible-body\">\n            <pre>\n              <code class=\"javascript\">\nimport {{ '{' }} Directive, ElementRef, HostListener, Input } from '@angular/core';\n\n@Directive({{ '{' }}\n  selector: 'pie-chart'\n})\nexport class PieChartDirective {{ '{' }}\n  private _cifReady: boolean;\n\n  private _dataSet1: number;\n  private _dataSet2: number;\n  private _dataSet3: number;\n\n  constructor(private elementRef: ElementRef) {{ '{' }}\n    this._cifReady = false;\n  }\n\n  @HostListener('window:cifReady', ['$event']) onCifReady(event) {{ '{' }}\n    this._cifReady = true;\n    this.updateElement();\n  }\n\n  updateElement() {{ '{' }}\n    if (this._cifReady) {{ '{' }}\n      this.elementRef.nativeElement.setDataColumns([\n        [\"dataSet1\", this._dataSet1],\n        [\"dataSet2\", this._dataSet2],\n        [\"dataSet3\", this._dataSet3]\n      ]);\n    }\n  }\n\n  @Input()\n  set dataSet1(value: number) {{ '{' }}\n    this._dataSet1 = value;\n    this.updateElement();\n  }\n\n  @Input()\n  set dataSet2(value: number) {{ '{' }}\n    this._dataSet2 = value;\n    this.updateElement();\n  }\n\n  @Input()\n  set dataSet3(value: number) {{ '{' }}\n    this._dataSet3 = value;\n    this.updateElement();\n  }\n}\n\n              </code>\n            </pre>\n          </div>\n        </li>\n      </ul>\n    </article>\n  </div>\n</main>"

/***/ }),

/***/ 661:
/***/ (function(module, exports) {

module.exports = "<p>\n  demo2 works!\n</p>\n"

/***/ }),

/***/ 662:
/***/ (function(module, exports) {

module.exports = "<p>\n  demo3 works!\n</p>\n"

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(382);


/***/ })

},[679]);
//# sourceMappingURL=main.bundle.map