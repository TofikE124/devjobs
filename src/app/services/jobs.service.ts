import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { Job } from '../types/Job';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private db: AngularFireDatabase) {}
  getJobs() {
    return this.db
      .list('/jobs')
      .snapshotChanges()
      .pipe(
        map((snapshot) => {
          const values = snapshot.map((item) => ({
            id: item.key,
            value: item.payload.val() as Job,
          }));
          return values;
        })
      );
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
}
