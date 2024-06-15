import { Component, Input } from '@angular/core';
import { IconType, iconMap } from '../../constants/icons';

@Component({
  selector: 'icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  @Input('iconType') iconType: IconType = IconType.SEARCH;
  @Input('color') color: string = '#fff';

  icon = iconMap[this.iconType];

  ngOnInit(): void {
    this.icon = iconMap[this.iconType];
  }

  getMaskImage() {
    return `url(${this.icon.URL})`;
  }
}
