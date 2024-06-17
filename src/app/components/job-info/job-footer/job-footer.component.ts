import { Component, Input } from '@angular/core';
import { Job } from '../../../types/Job';
import { NgClass } from '@angular/common';

@Component({
  selector: 'job-footer',
  standalone: true,
  imports: [NgClass],
  templateUrl: './job-footer.component.html',
  styleUrl: './job-footer.component.scss',
})
export class JobFooterComponent {
  @Input('job') job!: Job;
  @Input('dark') dark: boolean = false;
}
