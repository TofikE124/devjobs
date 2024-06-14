import { Component, ViewEncapsulation } from '@angular/core';
import { iconMap, IconType } from '../../../constants/icons';

@Component({
  selector: 'search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class SearchBarComponent {
  searchIcon = iconMap[IconType.SEARCH];
}
