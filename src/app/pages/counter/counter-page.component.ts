import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);

  reset(): void {
    this.counter = 10;
    this.counterSignal.set(10);
  }

  increaseBy(value: number): void {
    this.counter += value;
    // this.counterSignal.set(this.counterSignal() + value)  }
    this.counterSignal.update((current) => current + value);
  }
}
