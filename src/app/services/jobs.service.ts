import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { Job } from '../types/Job';
import { ActivatedRoute } from '@angular/router';
import { QueryParams } from '../constants/queryParams';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  firstTime: boolean = true;
  private jobsSubject = new BehaviorSubject<{ id: string; value: Job }[]>([]);
  private jobs: any[] = [];
  jobs$ = this.jobsSubject.asObservable();

  constructor(private db: AngularFireDatabase, private route: ActivatedRoute) {
    this.initializeJobs();
  }

  private initializeJobs() {
    this.route.queryParamMap
      .pipe(
        switchMap((queryParams) => {
          return this.db
            .list('/jobs')
            .snapshotChanges()
            .pipe(
              map((snapshot) => {
                const title = queryParams.get(QueryParams.TITLE) || '';
                const location = queryParams.get(QueryParams.LOCATION) || '';
                let fullTime =
                  queryParams.get(QueryParams.FULL_TIME) == null
                    ? null
                    : Boolean(queryParams.get(QueryParams.FULL_TIME));
                const values = snapshot.map((item) => ({
                  id: item.key!,
                  value: item.payload.val() as Job,
                }));
                return this.filterValues(values, title, location, fullTime);
              })
            );
        })
      )
      .subscribe((jobs) => {
        this.jobs = jobs;
        if (this.firstTime) {
          this.jobsSubject.next(jobs);
          this.firstTime = false;
        }
      });
  }

  searchJobs() {
    this.jobsSubject.next(this.jobs);
  }

  getJobWithId(id: string) {
    return this.db
      .object('/jobs/' + id)
      .snapshotChanges()
      .pipe(
        map((snapshot) => {
          let value = snapshot.payload.val() as Job;
          return { value, id: snapshot.key };
        })
      );
  }

  private filterValues(
    values: { id: string; value: Job }[],
    title: string,
    location: string,
    fullTime: boolean | null
  ) {
    return values.filter((value) => {
      let titleCondition = title
        ? value.value.position.toLowerCase().includes(title.toLowerCase())
        : true;
      let locationCondition = location
        ? value.value.location.toLowerCase().includes(location.toLowerCase())
        : true;
      let fullTimeCondition =
        fullTime == null
          ? true
          : fullTime
          ? value.value.contract == 'Full Time'
          : value.value.contract == 'Part Time';
      return titleCondition && locationCondition && fullTimeCondition;
    });
  }
}
