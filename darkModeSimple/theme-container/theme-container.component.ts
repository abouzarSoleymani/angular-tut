import { Component, OnInit } from '@angular/core';
import {ThemeService} from '../theme.service';

@Component({
  selector: 'app-theme-container',
  templateUrl: './theme-container.component.html',
  styleUrls: ['./theme-container.component.scss']
})
export class ThemeContainerComponent  {
  constructor(private themeService: ThemeService) {}

  toggle() {
    const active = this.themeService.getActiveTheme() ;
    if (active.name === 'light') {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }
}
