import { Component, signal } from '@angular/core';
import { RATES } from './component/currency-converter/rates';
import { CurrencyConverterComponent } from "./component/currency-converter/currency-converter.component";
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CurrencyConverterComponent, ReactiveFormsModule],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly currencies = signal(Object.keys(RATES));

  amount = new FormControl(100);
  currency = new FormControl('USD');


}
