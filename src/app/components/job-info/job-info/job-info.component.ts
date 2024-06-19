import { JobService } from './../../../services/jobs.service';
import { Component, OnInit } from '@angular/core';
import { JobHeaderComponent } from '../job-header/job-header.component';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Job } from '../../../types/Job';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';
import { JobDetailsComponent } from '../job-details/job-details.component';
import { JobFooterComponent } from '../job-footer/job-footer.component';
import { JobHeaderLoadingComponent } from '../job-header-loading/job-header-loading.component';
import { JobDetailsLoadingComponent } from '../job-details-loading/job-details-loading.component';

@Component({
  selector: 'job-info',
  standalone: true,
  imports: [
    JobHeaderComponent,
    JobDetailsComponent,
    JobFooterComponent,
    CommonModule,
    JobHeaderLoadingComponent,
    JobDetailsLoadingComponent,
  ],
  templateUrl: './job-info.component.html',
  styleUrl: './job-info.component.scss',
})
export class JobInfoComponent implements OnInit {
  job?: Job;
  loading = true;
  dark$: Observable<boolean>;

  constructor(
    route: ActivatedRoute,
    jobService: JobService,
    themeService: ThemeService
  ) {
    route.paramMap.subscribe((params) => {
      let id = params.get('id');
      jobService
        .getJobWithId(id || '')
        .pipe(map((job) => job.value))
        .subscribe((job) => {
          this.job = job;
          this.loading = false;
        });
    });

    this.dark$ = themeService.dark$;
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
