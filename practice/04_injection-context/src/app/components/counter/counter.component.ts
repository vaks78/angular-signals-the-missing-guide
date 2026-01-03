import { Component, DestroyRef, effect, EffectRef, inject, Injector, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  readonly #counter = signal(0);

  // 1. Inject the destroyRef here
  readonly #dr = inject(DestroyRef);
  // 2. Inject the injector here
  readonly #injector = inject(Injector);
  #loggingEff = signal<EffectRef | null>(null);

  constructor() {
    const int = setInterval(() => {
      this.#counter.update(v => v + 1);
    }, 1000);

    // 3. Use the destroyRef to clear the interval (use `clearInterval(int)`)
    this.#dr.onDestroy(() => {
      clearInterval(int);
    });
  }

  // 4. Create an effect when clicking a button
  startEffect() {
    if (this.#loggingEff()) {
      return;
    }
    this.#loggingEff.set(effect(() => {
      console.log(`Counter value: ${this.#counter()}`);
    }, 
    { injector: this.#injector }));
  }

  // 5. Stop the effect when clicking another button
  stopEffect() {
    this.#loggingEff()?.destroy();
    this.#loggingEff.set(null);
  }

}
