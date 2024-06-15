import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Job } from '../../types/Job';

@Component({
  selector: 'job-preview',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './job-preview.component.html',
  styleUrl: './job-preview.component.scss',
})
export class JobPreviewComponent {
  @Input('dark') dark: boolean = true;
  @Input('job') job!: Job;
}
