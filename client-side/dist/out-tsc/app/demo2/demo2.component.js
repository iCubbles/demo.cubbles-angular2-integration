var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
export var Demo2Component = (function () {
    function Demo2Component() {
        this.value1 = 10;
        this.value2 = 20;
        this.value3 = 30;
    }
    Demo2Component.prototype.ngAfterViewInit = function () {
        jQuery('.collapsible').collapsible();
        jQuery('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
        });
    };
    Demo2Component = __decorate([
        Component({
            selector: 'app-demo2',
            templateUrl: './demo2.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Demo2Component);
    return Demo2Component;
}());
//# sourceMappingURL=D:/Projekte/Cubbles/github/icubbles/demo.cubbles-angular2-integration/client-side/src/app/demo2/demo2.component.js.map