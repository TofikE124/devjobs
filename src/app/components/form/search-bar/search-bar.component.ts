import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IconType } from '../../../constants/icons';
import { iconMap } from './../../../constants/icons';

@Component({
  selector: 'search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SearchBarComponent implements OnInit {
  @Input('iconType') iconType: IconType = IconType.SEARCH;
  @Input('placeholder') placeholder: string = '';

  icon = iconMap[this.iconType];

  ngOnInit(): void {
    this.icon = iconMap[this.iconType];
  }
}
