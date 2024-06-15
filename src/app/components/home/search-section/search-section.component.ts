import { Component } from '@angular/core';
import { SearchSectionLargeComponent } from './search-section-large/search-section-large.component';
import { SearchSectionSmallComponent } from './search-section-small/search-section-small.component';

@Component({
  selector: 'search-section',
  standalone: true,
  imports: [SearchSectionSmallComponent, SearchSectionLargeComponent],
  templateUrl: './search-section.component.html',
  styleUrl: './search-section.component.scss',
})
export class SearchSectionComponent {}
