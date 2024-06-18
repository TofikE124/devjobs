import { JobService } from './../../../../services/jobs.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from './../../../../services/navigation.service';
import { Component, OnInit } from '@angular/core';
import { QueryParams } from '../../../../constants/queryParams';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jobs-empty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs-empty.component.html',
  styleUrl: './jobs-empty.component.scss',
})
export class JobsEmptyComponent {
  emptyMessage$;

  constructor(jobService: JobService) {
    this.emptyMessage$ = jobService.jobsEmptyMessage$;
  }
}
