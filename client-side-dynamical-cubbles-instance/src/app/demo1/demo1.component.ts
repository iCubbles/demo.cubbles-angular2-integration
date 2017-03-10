import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})


export class Demo1Component implements OnInit {
  ready: boolean;
  buttonTexts: string[] = ['add cubble "world-places"', 'remove cubble "world-places"'];

  toggleButtonText: string = this.buttonTexts[0];

  toggleIndex: number;

  constructor() {
    this.ready = false;
    this.toggleIndex = 0;

  }

  ngOnInit(): void {
    const event = document.createEvent('CustomEvent');
    event.initCustomEvent('CubxComponentLinked', true, true, {});

    // dispatch this 'CubxComponentLinked' event
    document.dispatchEvent(event);
    this.ready = true;
  }

  handleButtonClick(): void {
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
  }

  changeToggleIndex(): void {
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

  addCubble(): void {
    const container = document.querySelector('#cubbleContainer');
    const el = document.createElement('world-places');
    container.appendChild(el);
  }

  removeCubble(): void {
    const cubble = document.querySelector('world-places');
    cubble.parentNode.removeChild(cubble);
  }

  buttonState(): boolean {
    console.log('buttonState', !this.ready);
    return !this.ready;
  }

}
