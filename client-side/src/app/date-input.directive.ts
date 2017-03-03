import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: 'cubx-date-input'
})
export class DateInputDirective {
  private _cifReady: boolean;

  private _value: string;
  private _label: number;
  private _disabled: number;
  private _required: number;

  @Output('valueChanged')
  valueChangedEvent: EventEmitter<string> = new EventEmitter();

  constructor(private elementRef: ElementRef) {
    this._cifReady = false;
  }


  @HostListener('window:cifReady', ['$event']) onCifReady(event) {
    this._cifReady = true;
    this.updateElement();

    const self = this;

    // send init value
    self.valueChangedEvent.emit(self.elementRef.nativeElement.getValue());

    // onchange, send new value
    this.elementRef.nativeElement.onchange = function () {
      self.valueChangedEvent.emit(self.elementRef.nativeElement.getValue());
    };
  }

  updateElement() {
    if (this._cifReady) {
      this.elementRef.nativeElement.setValue(this._value);
      this.elementRef.nativeElement.setLabel(this._label);
      this.elementRef.nativeElement.setDisabled(this._disabled);
      this.elementRef.nativeElement.setRequired(this._required);
    }
  }

  @Input()
  set value(value: string) {
    this._value = value;
    this.updateElement();
  }

  @Input()
  set label(value: number) {
    this._label = value;
    this.updateElement();
  }

  @Input()
  set disabled(value: number) {
    this._disabled = value;
    this.updateElement();
  }

  @Input()
  set required(value: number) {
    this._required = value;
    this.updateElement();
  }
}
