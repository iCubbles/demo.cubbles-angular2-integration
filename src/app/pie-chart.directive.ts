import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'pie-chart'
})
export class PieChartDirective {
  private _cifReady: boolean;

  private _dataSet1: number;
  private _dataSet2: number;
  private _dataSet3: number;

  constructor(private elementRef: ElementRef) {
    this._cifReady = false;
  }

  @HostListener('window:cifReady', ['$event']) onCifReady(event) {
    this._cifReady = true;
    this.updateElement();
  }

  updateElement() {
    if (this._cifReady) {
      this.elementRef.nativeElement.setDataColumns([
        ["dataSet1", this._dataSet1],
        ["dataSet2", this._dataSet2],
        ["dataSet3", this._dataSet3]
      ]);
    }
  }

  @Input()
  set dataSet1(value: number) {
    this._dataSet1 = value;
    this.updateElement();
  }

  @Input()
  set dataSet2(value: number) {
    this._dataSet2 = value;
    this.updateElement();
  }

  @Input()
  set dataSet3(value: number) {
    this._dataSet3 = value;
    this.updateElement();
  }
}
