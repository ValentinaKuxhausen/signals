import { Component, signal } from '@angular/core';
import { of, delay } from 'rxjs';

@Component({
  selector: 'app-signal',
  templateUrl: './app.component.html',
  standalone: true,
})
export class AppSignalComponent {
  count = signal<number>(0);
  items = of([1, 2, 3]).pipe(delay(500))
  trackItem(index: number, item: any): any {
    return item;
  }
  
  reset() {
    this.count.set(0);
  }

  add() {
    this.count.update((prevCount: number) => prevCount + 1);
  }

  multiplyByTwo() {
    this.count.update((prevCount: number) => prevCount * 2);
  }
}
