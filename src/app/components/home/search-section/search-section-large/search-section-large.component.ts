import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IconType } from '../../../../constants/icons';
import { ThemeService } from '../../../../services/theme.service';
import { CheckboxComponent } from '../../../form/checkbox/checkbox.component';
import { SearchBarComponent } from '../../../form/search-bar/search-bar.component';
import { QueryParams } from '../../../../constants/queryParams';
import { JobService } from '../../../../services/jobs.service';

@Component({
  selector: 'search-section-large',
  standalone: true,
  imports: [SearchBarComponent, CheckboxComponent, CommonModule],
  templateUrl: './search-section-large.component.html',
  styleUrl: './search-section-large.component.scss',
})
export class SearchSectionLargeComponent {
  queryParams = QueryParams;
  isDark$: Observable<boolean>;
  constructor(themeService: ThemeService, public jobService: JobService) {
    this.isDark$ = themeService.dark$;
  }

  locationIconType = IconType.LOCATION;
}
