import { ThemeService } from './../../services/theme.service';
import { Component } from '@angular/core';
import { SwitchComponent } from '../form/switch/switch.component';
import { iconMap, IconType } from '../../constants/icons';

@Component({
  selector: 'theme-switch',
  standalone: true,
  imports: [SwitchComponent],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.scss',
})
export class ThemeSwitchComponent {
  constructor(private themeService: ThemeService) {}

  sunIcon = iconMap[IconType.SUN];
  moonIcon = iconMap[IconType.MOON];

  handleChange = (value: boolean) => {
    this.themeService.toggleTheme();
  };

  isDarkMode() {
    return this.themeService.getTheme() == 'dark';
  }
}
