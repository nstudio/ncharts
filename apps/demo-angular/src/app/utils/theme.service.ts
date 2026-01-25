/**
 * Theme Service
 * Reactive based on system appearance changes.
 */
import { Injectable, signal, computed, OnDestroy } from '@angular/core';
import { Application, SystemAppearanceChangedEventData } from '@nativescript/core';

export type ThemeMode = 'dark' | 'light';

function getInitialSystemAppearance(): ThemeMode {
  if (__APPLE__) {
    try {
      const style = UITraitCollection.currentTraitCollection?.userInterfaceStyle;
      if (style === UIUserInterfaceStyle.Dark) {
        return 'dark';
      }
      return 'light';
    } catch (e) {
      console.warn('ThemeService: Could not get initial system appearance', e);
    }
  }
  return Application.systemAppearance() || 'light';
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService implements OnDestroy {
  private readonly _mode = signal<ThemeMode>(getInitialSystemAppearance());
  readonly mode = this._mode.asReadonly();
  readonly isDarkMode = computed(() => this._mode() === 'dark');
  readonly isLightMode = computed(() => this._mode() === 'light');

  // Example: Can setup dynamic theme-aware colors for consistent usage across components
  readonly colors = computed(() => {
    const dark = this.isDarkMode();
    return {
      // Text colors
      textPrimary: dark ? 'white' : 'black',
      textSecondary: dark ? '#94a3b8' : '#64748b', // slate-400 / slate-500
      textMuted: dark ? '#64748b' : '#94a3b8', // slate-500 / slate-400

      // Background colors
      bgPrimary: dark ? '#0f172a' : '#f8fafc', // slate-900 / slate-50
      bgSecondary: dark ? '#1e293b' : '#ffffff', // slate-800 / white
      bgTertiary: dark ? '#334155' : '#f1f5f9', // slate-700 / slate-100,
      bgChart: dark ? 'black' : 'white',
      bgSelectedSegmentBar: dark ? 'black' : 'white',
      bgSegmentBar: dark ? '#999' : '#999',

      // Border colors
      border: dark ? '#334155' : '#e2e8f0', // slate-700 / slate-200

      // Chart/Grid colors
      gridColor: dark ? '#334155' : '#E5E7EB', // slate-700 / gray-200
    };
  });

  private readonly appearanceHandler = (args: SystemAppearanceChangedEventData) => {
    console.log('ThemeService: System appearance changed to:', args.newValue);
    this._mode.set(args.newValue as ThemeMode);
  };

  constructor() {
    Application.on(Application.systemAppearanceChangedEvent, this.appearanceHandler);
    console.log('ThemeService initialized with mode:', this._mode());
  }

  ngOnDestroy(): void {
    Application.off(Application.systemAppearanceChangedEvent, this.appearanceHandler);
  }
}
