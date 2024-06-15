import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IconType } from '../../../../constants/icons';
import { ThemeService } from '../../../../services/theme.service';
import { SearchBarComponent } from '../../../form/search-bar/search-bar.component';
import { IconButtonComponent } from '../../../icon-button/icon-button.component';
import { IconComponent } from '../../../icon/icon.component';

@Component({
  selector: 'search-section-small',
  standalone: true,
  imports: [
    SearchBarComponent,
    CommonModule,
    IconButtonComponent,
    IconComponent,
  ],
  templateUrl: './search-section-small.component.html',
  styleUrl: './search-section-small.component.scss',
})
export class SearchSectionSmallComponent {
  isDark$: Observable<boolean>;
  constructor(themeService: ThemeService) {
    this.isDark$ = themeService.isDark$;
  }

  searchIconType = IconType.SEARCH;
  filterIconType = IconType.FILTER;
}
