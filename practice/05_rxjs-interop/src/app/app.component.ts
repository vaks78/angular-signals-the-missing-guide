import { CommonModule } from '@angular/common';
import { Component, effect, inject, Injector, OnInit, signal, Signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  readonly #injector = inject(Injector)
   
  readonly myName = signal('Сережа Вакс');
  counter = signal(0).asReadonly();

  ngOnInit() {
    // 1. Create an observable called number$ that emits an integer value every second
    const counter$ = interval(1000);

    // 2. Convert the observable to a signal called number from the number$ observable.
    this.counter = toSignal(counter$, { injector: this.#injector }) as Signal<number>;
    // 3. Add an element in the UI that displays the value of the 'number' signal.

    effect(() => {
      console.log('counter val: ' + this.counter());
    }, { injector: this.#injector });

    // 4. Create an observable called myName$ from the "myName" signal
    const myName$ = toObservable(this.myName, {injector: this.#injector })

    // 5. Subscribe to myName$ and log the value to the console so that you log every name change from the UI.  
    myName$.subscribe(v => {if (v !== '') console.log('current myName val: ' + v)})



  }

}
