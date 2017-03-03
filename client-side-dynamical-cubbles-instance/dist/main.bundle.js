webpackJsonp([1,4],{

/***/ 329:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 329;


/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(452);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Projekte/Cubbles/github/icubbles/demo.cubbles-angular2-integration/client-side-dynamical-cubbles-instance/src/main.js.map

/***/ }),

/***/ 449:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(509),
            styles: [__webpack_require__(506)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Projekte/Cubbles/github/icubbles/demo.cubbles-angular2-integration/client-side-dynamical-cubbles-instance/src/app.component.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demo1_demo1_component__ = __webpack_require__(451);
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
                __WEBPACK_IMPORTED_MODULE_6__demo1_demo1_component__["a" /* Demo1Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Projekte/Cubbles/github/icubbles/demo.cubbles-angular2-integration/client-side-dynamical-cubbles-instance/src/app.module.js.map

/***/ }),

/***/ 451:
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
        this.buttonTexts = ['add cubble "federal-state-elections"', 'remove cubble "federal-state-elections"'];
        this.toggleButtonText = this.buttonTexts[0];
        this.ready = false;
        this.toggleIndex = 0;
    }
    Demo1Component.prototype.ngOnInit = function () {
        var event = document.createEvent('CustomEvent');
        event.initCustomEvent('CubxComponentLinked', true, true, {});
        // dispatch this 'CubxComponentLinked' event
        document.dispatchEvent(event);
        this.ready = true;
    };
    Demo1Component.prototype.handleButtonClick = function () {
        switch (this.toggleIndex) {
            case 0:
                this.addCubble();
                break;
            case 1:
                this.removeCubble();
                break;
            default:
                break;
        }
        this.changeToggleIndex();
        this.toggleButtonText = this.buttonTexts[this.toggleIndex];
    };
    Demo1Component.prototype.changeToggleIndex = function () {
        console.log('changeToggleIndex', this.toggleIndex);
        switch (this.toggleIndex) {
            case 0:
                this.toggleIndex = 1;
                break;
            case 1:
                this.toggleIndex = 0;
                break;
            default:
                this.toggleIndex = 0;
                break;
        }
    };
    ;
    Demo1Component.prototype.addCubble = function () {
        var container = document.querySelector('#cubbleContainer');
        var el = document.createElement('federal-state-elections');
        container.appendChild(el);
    };
    Demo1Component.prototype.removeCubble = function () {
        var cubble = document.querySelector('federal-state-elections');
        cubble.parentNode.removeChild(cubble);
    };
    Demo1Component.prototype.buttonState = function () {
        console.log('buttonState', !this.ready);
        return !this.ready;
    };
    Demo1Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-demo1',
            template: __webpack_require__(510),
            styles: [__webpack_require__(507)]
        }), 
        __metadata('design:paramtypes', [])
    ], Demo1Component);
    return Demo1Component;
}());
//# sourceMappingURL=D:/Projekte/Cubbles/github/icubbles/demo.cubbles-angular2-integration/client-side-dynamical-cubbles-instance/src/demo1.component.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Projekte/Cubbles/github/icubbles/demo.cubbles-angular2-integration/client-side-dynamical-cubbles-instance/src/environment.js.map

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(133)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 509:
/***/ (function(module, exports) {

module.exports = "<header class=\"\">\n  <nav class=\"blue darken-2\">\n    <div class=\"container\">\n      <div class=\"nav-wrapper\">\n        <a href=\"#\" class=\"brand-logo\">Cubbles meets Angular 2</a>\n      </div>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li><a href=\"/demo1\">Demo 1</a></li>\n        <li><a href=\"https://github.com/iCubbles/demo.cubbles-angular2-integration\" target=\"_blank\">Github</a></li>\n      </ul>\n    </div>\n  </nav>\n</header>\n\n<router-outlet></router-outlet>\n\n<footer class=\"page-footer  blue darken-2\">\n  <div class=\"container center\">\n    <p class=\"grey-text text-lighten-4\">Get in touch with Cubbles: Visit us on <a class=\"grey-text text-lighten-2\" href=\"https://cubbles.github.io\" target=\"_blank\">github</a>.</p>\n  </div>\n  <div class=\"footer-copyright\">\n    <div class=\"container\">\n      &copy; 2017 incowia GmbH\n      <a class=\"grey-text text-lighten-2 right\" href=\"https://cubbles.github.io\" target=\"_blank\">Cubbles Platform</a>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ 510:
/***/ (function(module, exports) {

module.exports = "<main>\n  <div class=\"container\">\n    <article>\n      <h3>Demo 1</h3>\n      <p class=\"flow-text\">This demo shows how to dynamically create Cubbles into an existing Angular 2 Application. The project is build with the\n        angular-cli and uses the Cubbles Runtime Extension (<a href=\"https://github.com/cubbles/cubx.core.rte/tree/master/webpackages/cubx.core.rte\"\n                                                               target=\"_blank\">source on github</a>)\n      </p>\n    </article>\n\n    <div class=\"divider\"></div>\n\n    <article>\n      <p>\n        The simplest way to add a cubbles component is to add <code>CUSTOM_ELEMENTS_SCHEMA</code> to the <code>@NgModule</code>,\n        allowing custom HTML Element.\n      </p>\n    </article>\n\n    <div class=\"divider\"></div>\n\n    <article id=\"cubbleContainer\">\n      <button class=\"waves-effect waves-light btn\" (click)=\"handleButtonClick()\" [disabled]=\"buttonState()\" >{{toggleButtonText}}</button>\n    </article>\n\n    <div class=\"divider\"></div>\n\n    <article>\n      <ul class=\"collapsible\" data-collapsible=\"expandable\">\n        <li>\n          <div class=\"collapsible-header\"><i class=\"medium material-icons\">code</i>index.html: Include the Cubbles RTE</div>\n          <div class=\"collapsible-body\">\n        <pre><code>\n&lt;head&gt;\n    ...\n          <!-- Include Cubbles -->\n  &lt;script src=\"https://cubbles.world/sandbox/cubx.core.rte@2.2.2/webcomponents-lite/webcomponents-lite.js\"&gt;&lt;/script&gt;\n  &lt;script src=\"https://cubbles.world/sandbox/cubx.core.rte@2.2.2/crc-loader/js/main.js\" data-crcinit-loadcif=\"true\">&lt;/script&gt;\n    ...\n&lt;/head&gt;\n\n&lt;html&gt;\n\n  ...\n&lt;/html&gt;</code></pre>\n          </div>\n        </li>\n\n        <li>\n          <div class=\"collapsible-header\"><i class=\"medium material-icons\">code</i>demo1.component.html: Instantiate a Cubbles Component using a Custom Tag</div>\n          <div class=\"collapsible-body\">\n        <pre><code>\n      &lt;button class=\"waves-effect waves-light btn\" (click)=\"handleButtonClick()\" [disabled]=\"buttonState()\" &gt;{{ '{' }}{{ '{' }}toggleButtonText}}&lt;/button&gt;</code></pre>\n          </div>\n        </li>\n\n        <li>\n          <div class=\"collapsible-header\"><i class=\"medium material-icons\">code</i>Angular Component Definition (TypeScript)</div>\n          <div class=\"collapsible-body\">\n        <pre><code class=\"javascript\">\nimport {{ '{' }}Component, OnInit} from '@angular/core';\n\n@Component({{ '{' }}\n  selector: 'app-demo1',\n  templateUrl: './demo1.component.html',\n  styleUrls: ['./demo1.component.css']\n})\n\n\nexport class Demo1Component implements OnInit {{ '{' }}\nready: boolean;\n  buttonTexts: string[] = ['add cubble \"federal-state-elections\"', 'remove cubble \"federal-state-elections\"'];\n\n  toggleButtonText: string = this.buttonTexts[0];\n\n  toggleIndex: number;\n\n  constructor() {{ '{' }}\n    this.ready = false;\n    this.toggleIndex = 0;\n\n  }\n\n  ngOnInit(): void {{ '{' }}\n    const event = document.createEvent('CustomEvent');\n    event.initCustomEvent('CubxComponentLinked', true, true, {{ '{' }}});\n\n    // dispatch this 'CubxComponentLinked' event\n    document.dispatchEvent(event);\n    this.ready = true;\n  }\n\n  handleButtonClick(): void {{ '{' }}\n    switch (this.toggleIndex) {{ '{' }}\n      case 0:\n        this.addCubble();\n        break;\n      case 1:\n        this.removeCubble();\n        break;\n      default:\n        break;\n    }\n    this.changeToggleIndex();\n    this.toggleButtonText = this.buttonTexts[this.toggleIndex];\n  }\n\n  changeToggleIndex(): void {{ '{' }}\n    console.log('changeToggleIndex', this.toggleIndex);\n    switch (this.toggleIndex) {{ '{' }}\n      case 0:\n        this.toggleIndex = 1;\n        break;\n      case 1:\n        this.toggleIndex = 0;\n        break;\n      default:\n        this.toggleIndex = 0;\n        break;\n    }\n  };\n\n  addCubble(): void {{ '{' }}\n    const container = document.querySelector('#cubbleContainer');\n    const el = document.createElement('federal-state-elections');\n    container.appendChild(el);\n  }\n\n  removeCubble(): void {{ '{' }}\n    const cubble = document.querySelector('federal-state-elections');\n    cubble.parentNode.removeChild(cubble);\n  }\n\n  buttonState(): boolean {{ '{' }}\n    console.log('buttonState', !this.ready);\n    return !this.ready;\n  }\n</code></pre>\n          </div>\n        </li>\n\n        <li>\n          <div class=\"collapsible-header\"><i class=\"medium material-icons\">code</i>Angular Module (TypeScript)</div>\n          <div class=\"collapsible-body\">\n        <pre><code class=\"javascript\">import {{ '{' }} NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\n\n...\n\n\n@NgModule({{ '{' }}\n\n  ...\n\n  schemas: [CUSTOM_ELEMENTS_SCHEMA],\n\n  ...\n})\nexport class AppModule {{ '{' }} }\n</code></pre>\n          </div>\n        </li>\n      </ul>\n    </article>\n  </div>\n</main>\n"

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(330);


/***/ })

},[528]);
//# sourceMappingURL=main.bundle.js.map