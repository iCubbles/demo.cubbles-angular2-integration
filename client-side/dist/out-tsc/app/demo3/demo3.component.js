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
var Demo3Component = (function () {
    function Demo3Component() {
        this.label = 'Geburtsdatum';
        this.value = '2017-02-01';
        this.required = false;
        this.disabled = false;
    }
    Demo3Component.prototype.ngOnInit = function () {
        // build custom event for starting bootstrap of CIF (here, use the deprecated way that also works in IE)
        var event = document.createEvent('CustomEvent');
        event.initCustomEvent('CubxComponentLinked', true, true, {});
        // dispatch this 'CubxComponentLinked' event
        document.dispatchEvent(event);
    };
    return Demo3Component;
}());
Demo3Component = __decorate([
    Component({
        selector: 'app-demo3',
        templateUrl: './demo3.component.html'
    }),
    __metadata("design:paramtypes", [])
], Demo3Component);
export { Demo3Component };
//# sourceMappingURL=D:/Projekte/Cubbles/github/icubbles/demo.cubbles-angular2-integration/client-side/src/app/demo3/demo3.component.js.map