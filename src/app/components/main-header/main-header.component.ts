import { Component } from '@angular/core';
import { iconMap, IconType } from '../../constants/icons';
import { ThemeSwitchComponent } from '../theme-switch/theme-switch.component';

@Component({
  selector: 'main-header',
  standalone: true,
  imports: [ThemeSwitchComponent],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss',
})
export class MainHeaderComponent {
  logo = iconMap[IconType.LOGO];
}
