import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { switchMap, map, shareReplay, skip } from 'rxjs/operators';
import { Job } from '../types/Job';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryParams } from '../constants/queryParams';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private firstTime: boolean = true;
  private jobsSubject = new BehaviorSubject<{ id: string; value: Job }[]>([]);
  jobs$ = this.jobsSubject.asObservable().pipe(skip(1));
  private jobs: any[] = [];

  private jobsEmptyMessageSubject = new BehaviorSubject('');
  public jobsEmptyMessage$: Observable<string> = this.jobsEmptyMessageSubject
    .asObservable()
    .pipe(skip(1));

  title: string = '';
  location: string = '';
  fullTime: boolean = false;

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
                this.title = queryParams.get(QueryParams.TITLE) || '';
                this.location = queryParams.get(QueryParams.LOCATION) || '';
                this.fullTime = Boolean(queryParams.get(QueryParams.FULL_TIME));
                const values = snapshot.map((item) => ({
                  id: item.key!,
                  value: item.payload.val() as Job,
                }));
                return this.filterValues(values);
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
    this.jobsEmptyMessageSubject.next(this.getNotFoundMessage());
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

  private filterValues(values: { id: string; value: Job }[]) {
    return values.filter((value) => {
      let titleCondition = this.title
        ? value.value.position.toLowerCase().includes(this.title.toLowerCase())
        : true;
      let locationCondition = location
        ? value.value.location
            .toLowerCase()
            .includes(this.location.toLowerCase())
        : true;
      let fullTimeCondition = this.fullTime
        ? value.value.contract == 'Full Time'
        : true;
      return titleCondition && locationCondition && fullTimeCondition;
    });
  }

  private getNotFoundMessage() {
    let titleMessage = this.title ? `for "${this.title}"` : '';
    let locationMessage = this.location ? `in "${this.location}"` : '';
    let fullTimeMessage = this.fullTime ? 'Fulltime' : '';

    let message = `0 ${fullTimeMessage} Jobs were found ${titleMessage} ${locationMessage}`;
    return message;
  }

  public refreshJobs() {
    if (this.firstTime) return;
    this.jobsSubject.next(this.jobs);
  }
}
