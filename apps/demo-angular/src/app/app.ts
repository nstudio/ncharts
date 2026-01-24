import { Component, NO_ERRORS_SCHEMA, inject } from '@angular/core';
import { PageRouterOutlet } from '@nativescript/angular';
import { ThemeService } from './utils';

@Component({
  selector: 'ns-app',
  template: `
    <GridLayout>
      <page-router-outlet></page-router-outlet>
    </GridLayout>
  `,
  imports: [PageRouterOutlet],
  schemas: [NO_ERRORS_SCHEMA],
})
export class App {
  // Inject ThemeService at app root to initialize system appearance listener
  private themeService = inject(ThemeService);

  constructor() {
    console.log('App initialized with theme mode:', this.themeService.mode());
  }
}
