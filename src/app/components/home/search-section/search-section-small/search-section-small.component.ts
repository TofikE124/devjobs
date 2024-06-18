import { JobService } from './../../../../services/jobs.service';
import { PanelService } from './../../../../services/panel.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IconType } from '../../../../constants/icons';
import { ThemeService } from '../../../../services/theme.service';
import { SearchBarComponent } from '../../../form/search-bar/search-bar.component';
import { IconButtonComponent } from '../../../icon-button/icon-button.component';
import { IconComponent } from '../../../icon/icon.component';
import { PanelComponent } from '../../../panel/panel.component';
import { CheckboxComponent } from '../../../form/checkbox/checkbox.component';
import { QueryParams } from '../../../../constants/queryParams';

@Component({
  selector: 'search-section-small',
  standalone: true,
  imports: [
    SearchBarComponent,
    CommonModule,
    IconButtonComponent,
    IconComponent,
    PanelComponent,
    CheckboxComponent,
  ],
  templateUrl: './search-section-small.component.html',
  styleUrl: './search-section-small.component.scss',
})
export class SearchSectionSmallComponent {
  queryParams = QueryParams;
  isDark$: Observable<boolean>;
  constructor(
    themeService: ThemeService,
    public panelService: PanelService,
    public jobService: JobService
  ) {
    this.isDark$ = themeService.dark$;
  }

  searchIconType = IconType.SEARCH;
  filterIconType = IconType.FILTER;
  locationIconType = IconType.LOCATION;

  panelName = 'small-search-section-panel';

  handleSearch = () => {
    this.jobService.searchJobs();
    this.panelService.closePanel(this.panelName);
  };
}
