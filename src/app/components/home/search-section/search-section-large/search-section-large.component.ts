import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IconType } from '../../../../constants/icons';
import { ThemeService } from '../../../../services/theme.service';
import { CheckboxComponent } from '../../../form/checkbox/checkbox.component';
import { SearchBarComponent } from '../../../form/search-bar/search-bar.component';

@Component({
  selector: 'search-section-large',
  standalone: true,
  imports: [SearchBarComponent, CheckboxComponent, CommonModule],
  templateUrl: './search-section-large.component.html',
  styleUrl: './search-section-large.component.scss',
})
export class SearchSectionLargeComponent {
  isDark$: Observable<boolean>;
  constructor(themeService: ThemeService) {
    this.isDark$ = themeService.dark$;
  }

  locationIconType = IconType.LOCATION;
}
