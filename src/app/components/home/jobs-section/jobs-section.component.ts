import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JobService } from '../../../services/jobs.service';
import { JobPreviewComponent } from '../../job-preview/job-preview.component';
import { ThemeService } from '../../../services/theme.service';
import { JobsEmptyComponent } from './jobs-empty/jobs-empty.component';
import { JobSekeletonComponent } from './job-sekeleton/job-sekeleton.component';
import { skip } from 'rxjs';

@Component({
  selector: 'jobs-section',
  standalone: true,
  imports: [
    CommonModule,
    JobsEmptyComponent,
    NgFor,
    JobPreviewComponent,
    JobSekeletonComponent,
  ],
  templateUrl: './jobs-section.component.html',
  styleUrl: './jobs-section.component.scss',
})
export class JobsSectionComponent implements OnInit {
  jobs: any[] = [];
  loading = true;

  constructor(
    private jobService: JobService,
    public themeService: ThemeService
  ) {}
  ngOnInit(): void {
    this.jobService.jobs$.subscribe((jobs) => {
      this.jobs = jobs;
      this.loading = false;
    });

    this.jobService.refreshJobs();
  }
}
