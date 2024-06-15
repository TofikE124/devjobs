import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../types/Job';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private dataUrl: string = 'assets/data/jobs.json';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.dataUrl);
  }
}
