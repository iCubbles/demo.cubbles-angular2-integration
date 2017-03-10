import { Component, AfterViewInit } from '@angular/core';
declare var jQuery: any;
declare var hljs: any;

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html'
})
export class Demo2Component implements AfterViewInit {
  value1 = 10;
  value2 = 20;
  value3 = 30;

  constructor() {
  }

  ngAfterViewInit() {
    jQuery('.collapsible').collapsible();
    jQuery('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }

}
