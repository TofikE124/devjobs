import { NgClass } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { iconMap, IconType } from './../../constants/icons';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-button',
  standalone: true,
  imports: [IconComponent, NgClass],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss',
})
export class IconButtonComponent {
  @Input('type') type: 'primary' | 'secondary' = 'primary';
  @Input('iconType') iconType: IconType = IconType.SEARCH;
  @Input('color') color: string = '#fff';
}
