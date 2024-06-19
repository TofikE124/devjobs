import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconType } from '../../../constants/icons';
import { NavigationService } from '../../../services/navigation.service';
import { iconMap } from './../../../constants/icons';

@Component({
  selector: 'search-bar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SearchBarComponent implements OnInit {
  @Input('iconType') iconType: IconType = IconType.SEARCH;
  @Input('placeholder') placeholder: string = '';
  @Input('queryParam') queryParam?: string;

  @Output('onChange') onChange: EventEmitter<string> = new EventEmitter();

  value: string = '';
  icon = iconMap[this.iconType];

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.icon = iconMap[this.iconType];
    this.navigationService
      .followQueryParam(this.queryParam)
      .subscribe((v) => (this.value = v));
  }

  handleValueChange = () => {
    if (this.queryParam)
      this.navigationService.changeQueryParam(this.queryParam, this.value);
    this.onChange.emit(this.value);
  };
}
