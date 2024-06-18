import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { JobService } from '../../../services/jobs.service';
import { JobPreviewComponent } from '../../job-preview/job-preview.component';
import { ThemeService } from '../../../services/theme.service';
import { JobsEmptyComponent } from './jobs-empty/jobs-empty.component';

@Component({
  selector: 'jobs-section',
  standalone: true,
  imports: [CommonModule, JobsEmptyComponent, NgFor, JobPreviewComponent],
  templateUrl: './jobs-section.component.html',
  styleUrl: './jobs-section.component.scss',
})
export class JobsSectionComponent {
  jobs$;

  constructor(jobService: JobService, public themeService: ThemeService) {
    this.jobs$ = jobService.jobs$;
  }
}
