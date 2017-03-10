import { Component, AfterViewInit } from '@angular/core';
declare var jQuery: any;
declare var hljs: any;

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html'
})
export class Demo3Component implements AfterViewInit {
  label = 'Geburtsdatum';
  value = '2017-02-01';
  required = false;
  disabled = false;

  constructor() {
  }

  ngAfterViewInit() {
    jQuery('.collapsible').collapsible();
    jQuery('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }
}
