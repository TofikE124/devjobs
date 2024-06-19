import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationService } from '../../../services/navigation.service';
import { validateHeaderName } from 'http';

@Component({
  selector: 'checkbox',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CheckboxComponent implements OnInit {
  value: boolean = false;

  @Input('queryParam') queryParam: string = '';
  @Output('onChange') onChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor(private navigationService: NavigationService) {}
  ngOnInit(): void {
    this.navigationService
      .followQueryParam(this.queryParam)
      .subscribe((v) => (this.value = Boolean(v)));
  }

  handleChange() {
    if (this.queryParam)
      this.navigationService.changeQueryParam(
        this.queryParam,
        this.value || null
      );
    this.onChange.emit(this.value);
  }
}
