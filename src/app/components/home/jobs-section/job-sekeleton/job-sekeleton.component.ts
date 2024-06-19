import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ThemeService } from './../../../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'job-sekeleton',
  standalone: true,
  imports: [NgxSkeletonLoaderModule, CommonModule],
  templateUrl: './job-sekeleton.component.html',
  styleUrl: './job-sekeleton.component.scss',
})
export class JobSekeletonComponent {
  dark$;
  constructor(themeService: ThemeService) {
    this.dark$ = themeService.dark$;
  }
}
