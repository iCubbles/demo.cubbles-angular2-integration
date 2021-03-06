import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;
declare var hljs: any;

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html'
})
export class Demo3Component implements  AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    jQuery('.collapsible').collapsible();
    jQuery('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }

}
