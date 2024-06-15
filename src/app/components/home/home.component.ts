import { Component } from '@angular/core';
import { SearchSectionComponent } from './search-section/search-section.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [SearchSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
