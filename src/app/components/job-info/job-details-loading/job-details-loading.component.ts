import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'job-details-loading',
  standalone: true,
  imports: [CommonModule, NgxSkeletonLoaderModule],
  templateUrl: './job-details-loading.component.html',
  styleUrl: './job-details-loading.component.scss',
})
export class JobDetailsLoadingComponent {
  @Input('dark') dark!: boolean;
}
