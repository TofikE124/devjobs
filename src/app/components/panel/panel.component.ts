import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PanelService } from '../../services/panel.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PanelComponent {
  @Input() panelName!: string;

  constructor(public panelService: PanelService) {}

  ngOnInit(): void {
    this.panelService.registerPanel(this.panelName);
  }

  closePanel() {
    console.log('close');
    this.panelService.closePanel(this.panelName);
  }
}
