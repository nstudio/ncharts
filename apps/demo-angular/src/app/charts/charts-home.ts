/**
 * Charts Home Demo Component
 * Landing page for the NativeScript Charts demos
 */
import { Component, NO_ERRORS_SCHEMA, ChangeDetectionStrategy, inject, computed } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule, RouterExtensions } from '@nativescript/angular';
import { Utils } from '@nativescript/core';
import { ThemeService } from '../utils';

interface ChartDemoItem {
  title: string;
  description: string;
  icon: string;
  route: string;
  gradient: string;
}

@Component({
  selector: 'ChartsHomeDemo',
  template: `
    <ActionBar flat="true" class="bg-slate-50 dark:bg-slate-900">
      <NavigationButton text="‹" android.systemIcon="ic_menu_back" (tap)="goBack()"></NavigationButton>
      <Label text="@nstudio/ncharts" class="text-lg font-bold text-slate-500 dark:text-slate-100"></Label>
    </ActionBar>
    <GridLayout rows="auto, *" class="bg-slate-50 dark:bg-slate-900">
      <!-- Content -->
      <ScrollView row="1">
        <StackLayout class="p-4 pt-2">
          <!-- Hero section -->
          <GridLayout rows="auto" columns="*, auto" class="bg-gradient-to-br from-indigo-600 to-pink-600 dark:from-indigo-700 dark:to-pink-700 rounded-2xl p-6 mb-6">
            <StackLayout col="0">
              <Label text="NativeScript Charts" class="text-2xl dark:text-white text-slate-700 font-bold leading-[3]"></Label>
              <Label text="Beautiful, performant charting powered by DGCharts (iOS) & MPAndroidChart (Android)" class="text-sm dark:text-indigo-100 text-slate-400 leading-[3] mt-2" textWrap="true"></Label>
            </StackLayout>
            <Label col="1" text="📊" class="text-5xl"></Label>
          </GridLayout>

          <!-- Chart type cards -->
          <Label text="Chart Types" class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3"></Label>

          @for (chart of chartDemos; track chart.route) {
            <StackLayout class="mb-3">
              <GridLayout columns="60, *, auto" rows="70" [class]="'rounded-xl p-4 shadow-sm ' + rowBgColor()" [nsRouterLink]="[chart.route]">
                <!-- Icon -->
                <Label col="0" [text]="chart.icon" class="text-3xl text-center"></Label>

                <!-- Text -->
                <GridLayout col="1" rows="*,auto,auto,*" class="ml-3">
                  <Label row="1" [text]="chart.title" class="text-lg font-bold dark:text-white text-slate-800 leading-[3]"></Label>
                  <Label row="2" [text]="chart.description" class="text-xs dark:text-white/80 text-slate-600 leading-[3]" textWrap="true"></Label>
                </GridLayout>

                <!-- Arrow -->
                <Label col="2" text="›" class="text-3xl dark:text-white/60 text-slate-400 font-light"></Label>
              </GridLayout>
            </StackLayout>
          }

          <!-- Features section -->
          <Label text="Features" class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-6 mb-3"></Label>

          <GridLayout columns="*, *" rows="auto, auto, auto, auto, auto" class="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm">
            @for (feature of features; track $index; let i = $index) {
              <GridLayout [row]="getFeatureRow(i)" [col]="getFeatureCol(i)" columns="auto, *" class="p-2">
                <Label col="0" text="✓" class="text-emerald-500 dark:text-emerald-400 text-sm mr-2"></Label>
                <Label col="1" [text]="feature" class="text-sm text-slate-600 dark:text-slate-300 leading-[3]" textWrap="true"></Label>
              </GridLayout>
            }
          </GridLayout>

          <!-- Tech stack -->
          <Label text="Powered By" class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-6 mb-3"></Label>

          <GridLayout columns="*, *" class="gap-3">
            <StackLayout col="0" class="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm mr-1" (tap)="openUrl('https://github.com/ChartsOrg/Charts')">
              <Label text="🍎" class="text-2xl text-center mb-2"></Label>
              <Label text="DGCharts" class="text-sm font-semibold text-slate-700 dark:text-slate-200 text-center"></Label>
              <Label text="iOS Native" class="text-xs text-slate-400 dark:text-slate-500 text-center"></Label>
            </StackLayout>
            <StackLayout col="1" class="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm ml-1" (tap)="openUrl('https://github.com/PhilJay/MPAndroidChart')">
              <Label text="🤖" class="text-2xl text-center mb-2"></Label>
              <Label text="MPAndroidChart" class="text-sm font-semibold text-slate-700 dark:text-slate-200 text-center"></Label>
              <Label text="Android Native" class="text-xs text-slate-400 dark:text-slate-500 text-center"></Label>
            </StackLayout>
          </GridLayout>

          <!-- Footer -->
          <Label text="Gorgeous charts for NativeScript" class="text-xs text-slate-500 dark:text-slate-400 text-center mt-8 mb-4"></Label>
        </StackLayout>
      </ScrollView>
    </GridLayout>
  `,
  imports: [NativeScriptCommonModule, NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartsHomeDemo {
  themeService = inject(ThemeService);

  // Theme-reactive row background color
  rowBgColor = computed(() => (this.themeService.isDarkMode() ? 'bg-slate-800' : 'bg-slate-100'));

  chartDemos: ChartDemoItem[] = [
    {
      title: 'Line Charts',
      description: 'Smooth curves, gradients, multiple datasets',
      icon: '📈',
      route: '/charts/line',
      gradient: '',
    },
    {
      title: 'Bar Charts',
      description: 'Vertical bars, grouped, stacked options',
      icon: '📊',
      route: '/charts/bar',
      gradient: '',
    },
    {
      title: 'Pie Charts',
      description: 'Donut, slices, animations, percentages',
      icon: '🥧',
      route: '/charts/pie',
      gradient: '',
    },
    {
      title: 'Scatter Charts',
      description: 'Data points, correlations, clusters',
      icon: '🔵',
      route: '/charts/scatter',
      gradient: '',
    },
    {
      title: 'Bubble Charts',
      description: 'Size dimension, multi-variable data',
      icon: '🫧',
      route: '/charts/bubble',
      gradient: '',
    },
    {
      title: 'Candlestick Charts',
      description: 'OHLC data, stocks, crypto, forex',
      icon: '🕯️',
      route: '/charts/candlestick',
      gradient: '',
    },
    {
      title: 'Radar Charts',
      description: 'Spider web, skills, comparisons',
      icon: '🕸️',
      route: '/charts/radar',
      gradient: '',
    },
    {
      title: 'Combined Demo',
      description: 'All chart types in one view',
      icon: '🎯',
      route: '/charts/combined',
      gradient: '',
    },
  ];

  features = ['Native performance', 'Smooth animations', 'Touch interactions', 'Pan & zoom', 'Legends & axes', 'Custom colors', 'Gradient fills', 'Value markers', 'Dark mode', 'Accessibility'];

  constructor(private routerExtensions: RouterExtensions) {}

  goBack(): void {
    this.routerExtensions.back();
  }

  getFeatureRow(index: number): number {
    return Math.floor(index / 2);
  }

  getFeatureCol(index: number): number {
    return index % 2;
  }

  openUrl(url: string): void {
    Utils.openUrl(url);
  }
}
