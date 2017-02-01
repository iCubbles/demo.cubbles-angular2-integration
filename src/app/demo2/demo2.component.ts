import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html'
})
export class Demo2Component implements OnInit {
  value1 = 10;
  value2 = 20;
  value3 = 30;

  constructor() {
  }

  ngOnInit() {
    // build custom event for starting bootstrap of CIF (here, use the deprecated way that also works in IE)
    var event = document.createEvent('CustomEvent');
    event.initCustomEvent('CubxComponentLinked', true, true, {});
 
    // dispatch this 'CubxComponentLinked' event
    document.dispatchEvent(event);
  }

}
