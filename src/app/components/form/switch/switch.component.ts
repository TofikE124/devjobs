import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'switch',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss',
})
export class SwitchComponent implements OnInit {
  @Input() defaultChecked: boolean = false; // Accept default value from parent
  @Output('onChange') onChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  checked: boolean = false;

  ngOnInit() {
    this.checked = this.defaultChecked; // Set the initial value based on input
  }

  ngAfterViewInit() {
    if (typeof document == 'undefined') return;
    setTimeout(() => {
      const sliderElement = document.querySelector('.slider');
      if (sliderElement) {
        sliderElement.classList.add('transition-enabled');
      }
    }, 0);
  }
}
