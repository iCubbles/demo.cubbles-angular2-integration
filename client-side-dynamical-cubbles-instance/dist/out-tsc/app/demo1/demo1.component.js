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
    return Demo1Component;
}());
Demo1Component = __decorate([
    Component({
        selector: 'app-demo1',
        templateUrl: './demo1.component.html',
        styleUrls: ['./demo1.component.css']
    }),
    __metadata("design:paramtypes", [])
], Demo1Component);
export { Demo1Component };
//# sourceMappingURL=D:/Projekte/Cubbles/github/icubbles/demo.cubbles-angular2-integration/client-side-dynamical-cubbles-instance/src/app/demo1/demo1.component.js.map