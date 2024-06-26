import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Job } from '../../types/Job';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'job-preview',
  standalone: true,
  imports: [CommonModule, NgClass, RouterModule],
  templateUrl: './job-preview.component.html',
  styleUrl: './job-preview.component.scss',
})
export class JobPreviewComponent {
  @Input('dark') dark!: boolean;
  @Input('job') job!: Job;
}
