import { Component } from '@angular/core';
import { SwitchComponent } from '../switch/switch.component';
import { iconMap, IconType } from '../../../constants/icons';

@Component({
  selector: 'theme-switch',
  standalone: true,
  imports: [SwitchComponent],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.scss',
})
export class ThemeSwitchComponent {
  sunIcon = iconMap[IconType.SUN];
  moonIcon = iconMap[IconType.MOON];
}
