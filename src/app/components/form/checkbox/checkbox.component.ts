import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'checkbox',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Input('label') label!: string;
  @Output('onChange') onChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  isChecked = false;
}
