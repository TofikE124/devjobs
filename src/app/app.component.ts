import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from './components/form/search-bar/search-bar.component';
import { SwitchComponent } from './components/form/switch/switch.component';
import { ThemeSwitchComponent } from './components/form/theme-switch/theme-switch.component';
import { CheckboxComponent } from './components/form/checkbox/checkbox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SearchBarComponent,
    SwitchComponent,
    ThemeSwitchComponent,
    CheckboxComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'devjobs';

  
}
