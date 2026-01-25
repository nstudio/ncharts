/**
 * Bar Chart Demo Component
 * Demonstrates bar charts with various configurations
 */
import { Component, NO_ERRORS_SCHEMA, ChangeDetectionStrategy, signal, ViewChild, ElementRef, computed, inject } from '@angular/core';
import { NativeScriptCommonModule, RouterExtensions } from '@nativescript/angular';
import { BarChartDirective, HorizontalBarChartDirective } from '@nstudio/ncharts/angular';
import type { BarChartData, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual, ChartSelectData, ChartSelectEvent } from '@nstudio/ncharts';
import { ThemeService } from '../utils';

@Component({
  selector: 'BarChartDemo',
  template: `
    <ActionBar row="0" flat="true" class="bg-slate-50 dark:bg-slate-900">
      <NavigationButton text="" android.systemIcon="ic_menu_back" (tap)="goBack()"></NavigationButton>
      <Label text="Bar Charts" class="text-lg font-bold text-slate-700 dark:text-slate-100"></Label>
    </ActionBar>
    <GridLayout rows="auto, *, auto, auto" class="bg-slate-50 dark:bg-slate-900">
      <!-- Selected Value Display -->
      <GridLayout row="0" columns="*, auto" class="p-4 pb-0">
        <StackLayout col="0">
          <label class="text-xs text-slate-500 dark:text-slate-400" text="TAP ON CHART TO SELECT"></label>
          <label class="text-lg font-bold text-slate-800 dark:text-white" [text]="selectedValue()"> </label>
        </StackLayout>
        <GridLayout col="1" class="w-8 h-8 rounded-full bg-emerald-500" visibility="{{ hasSelection() ? 'visible' : 'collapsed' }}" (tap)="clearSelection()">
          <label text="✕" class="text-white text-center align-middle text-sm font-bold"></label>
        </GridLayout>
      </GridLayout>

      <!-- Chart Container -->
      <GridLayout row="1" class="m-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4">
        @if (!isHorizontal()) {
          <BarChart #barChart [data]="chartData()" [legend]="legendConfig" [xAxis]="xAxisConfig" [yAxis]="yAxisConfig" [animation]="animationConfig()" [chartDescription]="{ text: getChartTitle(), enabled: true }" [highlightPerTapEnabled]="true" [chartBackgroundColor]="chartBgColor()" [chartGridBackgroundColor]="chartBgColor()" (select)="onChartSelect($event)" (deselect)="onChartDeselect()" class="h-full"> </BarChart>
        } @else {
          <HorizontalBarChart #barChart [data]="chartData()" [legend]="legendConfig" [xAxis]="xAxisConfig" [yAxis]="yAxisConfig" [animation]="animationConfig()" [chartDescription]="{ text: getChartTitle(), enabled: true }" [highlightPerTapEnabled]="true" [chartBackgroundColor]="chartBgColor()" [chartGridBackgroundColor]="chartBgColor()" (select)="onChartSelect($event)" (deselect)="onChartDeselect()" class="h-full"> </HorizontalBarChart>
        }
      </GridLayout>

      <!-- Style Selector -->
      <SegmentedBar row="2" [selectedIndex]="selectedStyleIndex()" (selectedIndexChange)="onStyleIndexChange($event)" [selectedTextColor]="segmentedBarTextColor()" [selectedBackgroundColor]="segmentedBarSelectedBgColor()" [backgroundColor]="segmentedBarBgColor()" class="m-4 text-sm" [class.h-8]="isAndroid" [class.text-white]="isAndroid">
        <SegmentedBarItem title="Revenue"></SegmentedBarItem>
        <SegmentedBarItem title="Products"></SegmentedBarItem>
        <SegmentedBarItem title="Grouped"></SegmentedBarItem>
      </SegmentedBar>

      <!-- Controls -->
      <GridLayout row="3" columns="*, *, *" [ngClass]="{ 'p-4 pt-0': !isAndroid, 'm-4 h-10': isAndroid }">
        <Button col="0" text="Animate" (tap)="animateChart()" class="bg-emerald-500 text-white rounded-md m-1 text-sm"></Button>
        <Button col="1" text="Flip" (tap)="toggleOrientation()" class="bg-purple-500 text-white rounded-md m-1 text-sm"></Button>
        <Button col="2" text="Colors" (tap)="randomizeColors()" class="bg-orange-500 text-white rounded-md m-1 text-sm"></Button>
      </GridLayout>
    </GridLayout>
  `,
  imports: [NativeScriptCommonModule, BarChartDirective, HorizontalBarChartDirective],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarChartDemo {
  @ViewChild('barChart') barChartRef!: ElementRef;
  themeService = inject(ThemeService);

  isAndroid = __ANDROID__;

  // Theme-reactive colors for SegmentedBar and other UI elements
  segmentedBarTextColor = computed(() => this.themeService.colors().textPrimary);
  segmentedBarBgColor = computed(() => (__APPLE__ ? null : 'transparent'));
  segmentedBarSelectedBgColor = computed(() => (__APPLE__ ? null : this.themeService.colors().bgSelectedSegmentBar));
  valueTextColor = computed(() => (this.themeService.isDarkMode() ? '#FFFFFF' : '#374151'));
  chartBgColor = computed(() => this.themeService.colors().bgChart);

  currentStyle = signal<'revenue' | 'products' | 'grouped'>('revenue');
  isHorizontal = signal(false);
  chartData = signal<BarChartData>(this.getRevenueData());
  animationConfig = signal<ChartAnimation>({ durationX: 1000, durationY: 1000, easingX: 'EaseOutBack' });

  // Selection state
  private _selectedData = signal<ChartSelectData | null>(null);

  selectedValue = computed(() => {
    const data = this._selectedData();
    if (!data) return 'No selection';

    const labels = this.xAxisConfig.valueFormatter as string[];
    const label = labels?.[Math.floor(data.x)] || `Point ${data.x}`;

    return `${label}: ${data.y.toFixed(1)} (Dataset ${data.dataSetIndex + 1})`;
  });

  hasSelection = computed(() => this._selectedData() !== null);

  private styleOrder: ('revenue' | 'products' | 'grouped')[] = ['revenue', 'products', 'grouped'];
  selectedStyleIndex = computed(() => this.styleOrder.indexOf(this.currentStyle()));

  legendConfig: LegendConfig = {
    enabled: true,
    horizontalAlignment: 'CENTER',
    verticalAlignment: 'BOTTOM',
    orientation: 'HORIZONTAL',
    form: 'SQUARE',
    textSize: 11,
  };

  xAxisConfig: XAxisConfig = {
    enabled: true,
    position: 'BOTTOM',
    drawGridLines: false,
    drawLabels: true,
    granularity: 1,
    textSize: 10,
    valueFormatter: ['Q1', 'Q2', 'Q3', 'Q4'],
  };

  yAxisConfig: YAxisConfigDual = {
    left: {
      enabled: true,
      drawGridLines: true,
      gridColor: '#E5E7EB',
      textSize: 10,
      axisMinimum: 0,
    },
    right: {
      enabled: false,
    },
  };

  constructor(private routerExtensions: RouterExtensions) {}

  onStyleIndexChange(event: any): void {
    const index = event.value ?? event.object?.selectedIndex ?? 0;
    const style = this.styleOrder[index];
    if (style) {
      this.selectStyle(style);
    }
  }

  selectStyle(style: 'revenue' | 'products' | 'grouped'): void {
    this.onChartDeselect();
    this.currentStyle.set(style);
    switch (style) {
      case 'revenue':
        this.xAxisConfig = { ...this.xAxisConfig, valueFormatter: ['Q1', 'Q2', 'Q3', 'Q4'] };
        this.chartData.set(this.getRevenueData());
        break;
      case 'products':
        this.xAxisConfig = { ...this.xAxisConfig, valueFormatter: ['Phones', 'Tablets', 'Laptops', 'Watches', 'Audio'] };
        this.chartData.set(this.getProductsData());
        break;
      case 'grouped':
        this.xAxisConfig = { ...this.xAxisConfig, valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] };
        this.chartData.set(this.getGroupedData());
        break;
    }
    this.animateChart();
  }

  toggleOrientation(): void {
    this.isHorizontal.set(!this.isHorizontal());
    setTimeout(() => this.animateChart(), 100);
  }

  randomizeColors(): void {
    const colors = ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16'];
    const shuffled = [...colors].sort(() => Math.random() - 0.5);

    const currentData = this.chartData();
    const newData: BarChartData = {
      dataSets: currentData.dataSets.map((ds, i) => ({
        ...ds,
        config: {
          ...ds.config,
          colors: ds.values.map((_, j) => shuffled[(i + j) % shuffled.length]),
        },
      })),
    };
    this.chartData.set(newData);
  }

  animateChart(): void {
    this.animationConfig.set({ durationX: 1000, durationY: 1000, easingX: 'EaseOutBack' });
  }

  // Selection event handlers
  onChartSelect(event: ChartSelectEvent): void {
    console.log('[BarChartDemo] Selected:', event.data);
    this._selectedData.set(event.data);
  }

  onChartDeselect(): void {
    console.log('[BarChartDemo] Deselected');
    this._selectedData.set(null);
  }

  clearSelection(): void {
    const chart = this.barChartRef?.nativeElement;
    if (chart) {
      chart.clearHighlights();
    }
    this._selectedData.set(null);
  }

  getChartTitle(): string {
    const titles = {
      revenue: 'Quarterly Revenue',
      products: 'Product Sales',
      grouped: 'Monthly Comparison',
    };
    return titles[this.currentStyle()];
  }

  goBack(): void {
    this.routerExtensions.back();
  }

  private getRevenueData(): BarChartData {
    return {
      dataSets: [
        {
          label: 'Revenue (M)',
          values: [
            { x: 0, y: 2.4 },
            { x: 1, y: 3.2 },
            { x: 2, y: 2.8 },
            { x: 3, y: 4.1 },
          ],
          config: {
            colors: ['#10B981', '#34D399', '#6EE7B7', '#A7F3D0'],
            drawValues: true,
            valueTextSize: 12,
            valueTextColor: this.valueTextColor(),
          },
        },
      ],
    };
  }

  private getProductsData(): BarChartData {
    return {
      dataSets: [
        {
          label: 'Units Sold (K)',
          values: [
            { x: 0, y: 850 },
            { x: 1, y: 420 },
            { x: 2, y: 680 },
            { x: 3, y: 320 },
            { x: 4, y: 510 },
          ],
          config: {
            colors: ['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE', '#DBEAFE'],
            drawValues: true,
            valueTextSize: 11,
            valueTextColor: this.valueTextColor(),
          },
        },
      ],
    };
  }

  private getGroupedData(): BarChartData {
    return {
      dataSets: [
        {
          label: '2023',
          values: [
            { x: 0, y: 45 },
            { x: 1, y: 52 },
            { x: 2, y: 48 },
            { x: 3, y: 65 },
            { x: 4, y: 58 },
            { x: 5, y: 72 },
          ],
          config: {
            color: '#8B5CF6',
            drawValues: false,
          },
        },
        {
          label: '2024',
          values: [
            { x: 0, y: 55 },
            { x: 1, y: 62 },
            { x: 2, y: 58 },
            { x: 3, y: 78 },
            { x: 4, y: 68 },
            { x: 5, y: 85 },
          ],
          config: {
            color: '#EC4899',
            drawValues: false,
          },
        },
      ],
    };
  }
}
