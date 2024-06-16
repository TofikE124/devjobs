import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobInfoComponent } from './components/job-info/job-info/job-info.component';

export const routes: Routes = [
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: 'jobs', component: HomeComponent },
  { path: 'jobs/:id', component: JobInfoComponent },
];
