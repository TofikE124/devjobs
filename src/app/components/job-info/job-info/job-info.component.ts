import { JobService } from './../../../services/jobs.service';
import { Component } from '@angular/core';
import { JobHeaderComponent } from '../job-header/job-header.component';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Job } from '../../../types/Job';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';
import { JobDetailsComponent } from '../job-details/job-details.component';

@Component({
  selector: 'app-job-info',
  standalone: true,
  imports: [JobHeaderComponent, JobDetailsComponent, CommonModule],
  templateUrl: './job-info.component.html',
  styleUrl: './job-info.component.scss',
})
export class JobInfoComponent {
  job$?: Observable<Job>;
  dark$: Observable<boolean>;

  constructor(
    route: ActivatedRoute,
    jobService: JobService,
    themeService: ThemeService
  ) {
    route.paramMap.subscribe((params) => {
      let id = params.get('id');
      this.job$ = jobService
        .getJobWithId(id || '')
        .pipe(map((job) => job.value));
    });

    this.dark$ = themeService.dark$;
  }
}
