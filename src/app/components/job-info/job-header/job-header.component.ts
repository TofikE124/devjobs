import { Component, Input } from '@angular/core';
import { Job } from '../../../types/Job';
import { NgClass } from '@angular/common';

@Component({
  selector: 'job-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './job-header.component.html',
  styleUrl: './job-header.component.scss',
})
export class JobHeaderComponent {
  @Input('job') job!: Job;
  @Input('dark') dark: boolean = false;
}
