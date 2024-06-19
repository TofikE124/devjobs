import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'job-header-loading',
  standalone: true,
  imports: [NgxSkeletonLoaderModule, CommonModule],
  templateUrl: './job-header-loading.component.html',
  styleUrl: './job-header-loading.component.scss',
})
export class JobHeaderLoadingComponent {
  @Input('dark') dark!: boolean;
}
