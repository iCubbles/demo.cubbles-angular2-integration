var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
export var PieChartDirective = (function () {
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
                ['dataSet1', this._dataSet1],
                ['dataSet2', this._dataSet2],
                ['dataSet3', this._dataSet3]
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
        HostListener('window:cifDomUpdateReady', ['$event']),
        HostListener('window:cifReady', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], PieChartDirective.prototype, "onCifReady", null);
    __decorate([
        Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], PieChartDirective.prototype, "dataSet1", null);
    __decorate([
        Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], PieChartDirective.prototype, "dataSet2", null);
    __decorate([
        Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], PieChartDirective.prototype, "dataSet3", null);
    PieChartDirective = __decorate([
        Directive({
            selector: 'pie-chart'
        }), 
        __metadata('design:paramtypes', [ElementRef])
    ], PieChartDirective);
    return PieChartDirective;
}());
//# sourceMappingURL=D:/Projekte/Cubbles/github/icubbles/demo.cubbles-angular2-integration/client-side/src/app/pie-chart.directive.js.map