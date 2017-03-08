var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
var DateInputDirective = (function () {
    function DateInputDirective(elementRef) {
        this.elementRef = elementRef;
        this.valueChangedEvent = new EventEmitter();
        this._cifReady = false;
    }
    DateInputDirective.prototype.onCifReady = function (event) {
        this._cifReady = true;
        this.updateElement();
        var self = this;
        // send init value
        self.valueChangedEvent.emit(self.elementRef.nativeElement.getValue());
        // onchange, send new value
        // this.elementRef.nativeElement.onchange = function () {
        //   self.valueChangedEvent.emit(self.elementRef.nativeElement.getValue());
        // };
        this.elementRef.nativeElement.addEventListener('cifModelChange', function (evt) {
            if (evt.detail.slot === 'value') {
                self.valueChangedEvent.emit(evt.detail.payload);
            }
        });
    };
    DateInputDirective.prototype.updateElement = function () {
        if (this._cifReady) {
            this.elementRef.nativeElement.setValue(this._value);
            this.elementRef.nativeElement.setLabel(this._label);
            this.elementRef.nativeElement.setDisabled(this._disabled);
            this.elementRef.nativeElement.setRequired(this._required);
        }
    };
    Object.defineProperty(DateInputDirective.prototype, "value", {
        set: function (value) {
            this._value = value;
            this.updateElement();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateInputDirective.prototype, "label", {
        set: function (value) {
            this._label = value;
            this.updateElement();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateInputDirective.prototype, "disabled", {
        set: function (value) {
            this._disabled = value;
            this.updateElement();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateInputDirective.prototype, "required", {
        set: function (value) {
            this._required = value;
            this.updateElement();
        },
        enumerable: true,
        configurable: true
    });
    return DateInputDirective;
}());
__decorate([
    Output('valueChanged'),
    __metadata("design:type", EventEmitter)
], DateInputDirective.prototype, "valueChangedEvent", void 0);
__decorate([
    HostListener('window:cifDomUpdateReady', ['$event']),
    HostListener('window:cifReady', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DateInputDirective.prototype, "onCifReady", null);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], DateInputDirective.prototype, "value", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], DateInputDirective.prototype, "label", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], DateInputDirective.prototype, "disabled", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], DateInputDirective.prototype, "required", null);
DateInputDirective = __decorate([
    Directive({
        selector: 'cubx-date-input'
    }),
    __metadata("design:paramtypes", [ElementRef])
], DateInputDirective);
export { DateInputDirective };
//# sourceMappingURL=D:/Projekte/Cubbles/github/icubbles/demo.cubbles-angular2-integration/client-side/src/app/date-input.directive.js.map