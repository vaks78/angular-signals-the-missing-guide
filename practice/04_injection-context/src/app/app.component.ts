import { Component, signal } from '@angular/core';
import { CounterComponent } from "./components/counter/counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly showCounter = signal(false);

  toggleCounter() {
    this.showCounter.update(v => !v);
  }
}
