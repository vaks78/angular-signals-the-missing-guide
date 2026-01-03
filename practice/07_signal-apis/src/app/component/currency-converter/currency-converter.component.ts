import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RATES } from './rates';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.scss', 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyConverterComponent {
  readonly #rate = computed(() =>RATES[this.currency()]);

  readonly amount = input.required<number>();
  readonly currency = input.required<string>();

  readonly converted = computed(() => this.amount() * this.#rate());

}
