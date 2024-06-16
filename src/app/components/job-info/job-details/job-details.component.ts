import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Job } from '../../../types/Job';

@Component({
  selector: 'job-details',
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss',
})
export class JobDetailsComponent {
  @Input('job') job!: Job;
  @Input('dark') dark: boolean = false;
}
