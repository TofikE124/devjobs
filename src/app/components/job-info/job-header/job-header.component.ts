import { Location, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconType } from '../../../constants/icons';
import { Job } from '../../../types/Job';
import { IconButtonComponent } from '../../icon-button/icon-button.component';
@Component({
  selector: 'job-header',
  standalone: true,
  imports: [NgClass, IconButtonComponent],
  templateUrl: './job-header.component.html',
  styleUrl: './job-header.component.scss',
})
export class JobHeaderComponent {
  @Input('job') job!: Job;
  @Input('dark') dark: boolean = false;

  iconType = IconType;

  constructor(public location: Location) {}

  goBack() {
    this.location.back();
  }
}
