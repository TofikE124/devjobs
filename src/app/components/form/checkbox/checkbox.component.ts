import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'checkbox',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CheckboxComponent {
  @Output('onChange') onChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  isChecked = false;
}
