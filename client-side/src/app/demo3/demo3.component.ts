import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html'
})
export class Demo3Component implements OnInit {
  label = 'Geburtsdatum';
  value = '2017-02-01';
  required = false;
  disabled = false;

  constructor() {
  }

  ngOnInit() {
    // build custom event for starting bootstrap of CIF (here, use the deprecated way that also works in IE)
    const event = document.createEvent('CustomEvent');
    event.initCustomEvent('CubxComponentLinked', true, true, {});

    // dispatch this 'CubxComponentLinked' event
    document.dispatchEvent(event);
  }
}
