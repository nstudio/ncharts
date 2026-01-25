import { Component, NO_ERRORS_SCHEMA, inject } from '@angular/core';
import { PageRouterOutlet } from '@nativescript/angular';
import { ThemeService } from './utils';

@Component({
  selector: 'ns-app',
  templateUrl: './app.html',
  imports: [PageRouterOutlet],
  schemas: [NO_ERRORS_SCHEMA],
})
export class App {
  private themeService = inject(ThemeService);

  constructor() {
    console.log('App initialized with theme mode:', this.themeService.mode());
  }
}
