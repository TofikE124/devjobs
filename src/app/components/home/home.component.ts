import { Component } from '@angular/core';
import { SearchSectionComponent } from './search-section/search-section.component';
import { JobsSectionComponent } from './jobs-section/jobs-section.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [SearchSectionComponent, JobsSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
