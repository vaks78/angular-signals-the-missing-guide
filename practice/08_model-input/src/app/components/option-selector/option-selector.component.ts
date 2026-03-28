import { CommonModule } from '@angular/common';
import { Component, input, model, output, signal } from '@angular/core';

@Component({
  selector: 'app-option-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option-selector.component.html',
  styleUrl: './option-selector.component.scss'
})
export class OptionSelectorComponent {
  options = input.required<string[]>();

  selected = signal('USD');
  selectedCurrency = output<string>();

  select(option: string) {
    this.selected.set(option);
    debugger
    this.selectedCurrency.emit(option);
  }
}
