import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { IconType } from '../../../constants/icons';
import { iconMap } from './../../../constants/icons';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationService } from '../../../services/navigation.service';
import { routes } from '../../../app.routes';
import { Observable, take } from 'rxjs';
import { CommonModule } from '@angular/common';

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
      .initializeQueryParam(this.queryParam)
      .subscribe((v) => (this.value = v));
  }

  handleValueChange = () => {
    if (this.queryParam)
      this.navigationService.changeQueryParam(this.queryParam, this.value);
    this.onChange.emit(this.value);
  };
}
