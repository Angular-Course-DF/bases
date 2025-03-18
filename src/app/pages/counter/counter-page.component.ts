import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Counter</h1>
    <p>Counter value: {{ counter }}</p>
    <button (click)="increaseBy(1)">+ 1</button>
    <!-- <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button> -->
  `,
})
export class CounterPageComponent {
  counter = 5;

  increaseBy(value: number): void {
    this.counter += value;
  }
}
