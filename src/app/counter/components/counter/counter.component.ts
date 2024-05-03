import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="modifyCounter(1)">+1</button>
    <button (click)="modifyCounter(-1)">-1</button>
    <button (click)="reset()">Reset</button>
  `
})

export class CounterComponent{
  public counter:number = 10;
  modifyCounter(value:number):void{
    this.counter += value;
  }

  reset(){
    this.counter = 10;
  }
}
