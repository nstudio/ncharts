/**
 * Bubble Chart Demo Component
 * Demonstrates bubble charts with various configurations
 */
import { Component, NO_ERRORS_SCHEMA, ChangeDetectionStrategy, signal, ViewChild, ElementRef, computed, inject } from '@angular/core';
import { NativeScriptCommonModule, RouterExtensions } from '@nativescript/angular';
import { BubbleChartDirective } from '@nstudio/ncharts/angular';
import type { BubbleChartData, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual, ChartSelectData, ChartSelectEvent } from '@nstudio/ncharts';
import { ThemeService } from '../utils';

@Component({
  selector: 'BubbleChartDemo',
  template: `
    <ActionBar flat="true" class="bg-slate-50 dark:bg-slate-900">
      <NavigationButton text="" android.systemIcon="ic_menu_back" (tap)="goBack()"></NavigationButton>
      <Label text="Bubble Charts" class="text-lg font-bold text-slate-700 dark:text-slate-100"></Label>
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
        <BubbleChart #bubbleChart [data]="chartData()" [legend]="legendConfig" [xAxis]="xAxisConfig" [yAxis]="yAxisConfig" [animation]="animationConfig()" [chartDescription]="{ text: getChartTitle(), enabled: true }" [highlightPerTapEnabled]="true" [chartBackgroundColor]="chartBgColor()" [chartGridBackgroundColor]="chartBgColor()" (select)="onChartSelect($event)" (deselect)="onChartDeselect()" class="h-full"> </BubbleChart>
      </GridLayout>

      <!-- Style Selector -->
      <SegmentedBar row="2" [selectedIndex]="selectedStyleIndex()" (selectedIndexChange)="onStyleIndexChange($event)" [selectedTextColor]="segmentedBarTextColor()" class="m-4 text-sm" [class.h-8]="isAndroid">
        <SegmentedBarItem title="GDP"></SegmentedBarItem>
        <SegmentedBarItem title="Products"></SegmentedBarItem>
        <SegmentedBarItem title="Social"></SegmentedBarItem>
      </SegmentedBar>

      <!-- Controls -->
      <GridLayout row="3" columns="*, *, *" [ngClass]="{ 'p-4 pt-0': !isAndroid, 'm-4 h-10': isAndroid }">
        <Button col="0" text="Animate" (tap)="animateChart()" class="bg-emerald-500 text-white rounded-md m-1 text-sm"></Button>
        <Button col="1" text="Highlight" (tap)="highlightRandom()" class="bg-purple-500 text-white rounded-md m-1 text-sm"></Button>
        <Button col="2" text="Refresh" (tap)="randomizeData()" class="bg-orange-500 text-white rounded-md m-1 text-sm"></Button>
      </GridLayout>
    </GridLayout>
  `,
  imports: [NativeScriptCommonModule, BubbleChartDirective],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BubbleChartDemo {
  @ViewChild('bubbleChart') bubbleChartRef!: ElementRef;
  themeService = inject(ThemeService);

  isAndroid = __ANDROID__;

  // Theme-reactive colors
  segmentedBarTextColor = computed(() => this.themeService.colors().textPrimary);
  valueTextColor = computed(() => (this.themeService.isDarkMode() ? '#FFFFFF' : '#374151'));
  chartBgColor = computed(() => this.themeService.colors().bgChart);
  currentStyle = signal<'gdp' | 'products' | 'social'>('gdp');
  chartData = signal<BubbleChartData>(this.getGdpData());
  animationConfig = signal<ChartAnimation>({ durationX: 1200, durationY: 1200, easingX: 'EaseOutBack' });

  // Selection state
  private _selectedData = signal<ChartSelectData | null>(null);

  selectedValue = computed(() => {
    const data = this._selectedData();
    if (!data) return 'No selection';

    return `X: ${data.x.toFixed(1)}, Y: ${data.y.toFixed(1)} (Dataset ${data.dataSetIndex + 1})`;
  });

  hasSelection = computed(() => this._selectedData() !== null);

  private styleOrder: ('gdp' | 'products' | 'social')[] = ['gdp', 'products', 'social'];
  selectedStyleIndex = computed(() => this.styleOrder.indexOf(this.currentStyle()));

  legendConfig: LegendConfig = {
    enabled: true,
    horizontalAlignment: 'CENTER',
    verticalAlignment: 'BOTTOM',
    orientation: 'HORIZONTAL',
    form: 'CIRCLE',
    textSize: 11,
  };

  xAxisConfig: XAxisConfig = {
    enabled: true,
    position: 'BOTTOM',
    drawGridLines: true,
    drawLabels: true,
    granularity: 1,
    textSize: 10,
    gridColor: '#E5E7EB',
  };

  yAxisConfig: YAxisConfigDual = {
    left: {
      enabled: true,
      drawGridLines: true,
      gridColor: '#E5E7EB',
      textSize: 10,
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

  getChartTitle(): string {
    const titles = {
      gdp: 'GDP vs Life Expectancy (Pop. Size)',
      products: 'Price vs Rating (Sales Volume)',
      social: 'Followers vs Engagement (Posts)',
    };
    return titles[this.currentStyle()];
  }

  selectStyle(style: 'gdp' | 'products' | 'social'): void {
    this.onChartDeselect();
    this.currentStyle.set(style);
    switch (style) {
      case 'gdp':
        this.chartData.set(this.getGdpData());
        break;
      case 'products':
        this.chartData.set(this.getProductsData());
        break;
      case 'social':
        this.chartData.set(this.getSocialData());
        break;
    }
    this.animateChart();
  }

  animateChart(): void {
    const chart = this.bubbleChartRef?.nativeElement;
    if (chart) {
      chart.animate({ durationX: 1200, durationY: 1200, easingX: 'EaseOutBack' });
    }
  }

  // Selection event handlers
  onChartSelect(event: ChartSelectEvent): void {
    console.log('[BubbleChartDemo] Selected:', event.data);
    this._selectedData.set(event.data);
  }

  onChartDeselect(): void {
    console.log('[BubbleChartDemo] Deselected');
    this._selectedData.set(null);
  }

  clearSelection(): void {
    const chart = this.bubbleChartRef?.nativeElement;
    if (chart) {
      chart.clearHighlights();
    }
    this._selectedData.set(null);
  }

  highlightRandom(): void {
    const chart = this.bubbleChartRef?.nativeElement;
    if (chart) {
      const randomX = Math.floor(Math.random() * 5);
      chart.highlightValues([{ x: randomX, dataSetIndex: 0 }]);
    }
  }

  randomizeData(): void {
    this.selectStyle(this.currentStyle());
  }

  goBack(): void {
    this.routerExtensions.back();
  }

  private getGdpData(): BubbleChartData {
    // GDP per capita (x), Life expectancy (y), Population size (bubble size as multiplier)
    return {
      dataSets: [
        {
          values: [
            { x: 10, y: 65, size: 45 }, // India - large population
            { x: 12, y: 77, size: 50 }, // China - largest
            { x: 65, y: 79, size: 35 }, // USA
            { x: 42, y: 84, size: 25 }, // Japan
            { x: 48, y: 81, size: 20 }, // Germany
            { x: 35, y: 82, size: 18 }, // UK
            { x: 8, y: 75, size: 30 }, // Brazil
          ],
          label: 'Countries',
          config: {
            colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'],
            drawValues: false,
            highlightEnabled: true,
          },
        },
      ],
    };
  }

  private getProductsData(): BubbleChartData {
    // Price (x), Rating (y), Sales volume (bubble size as multiplier)
    return {
      dataSets: [
        {
          values: [
            { x: 29, y: 4.5, size: 50 },
            { x: 49, y: 4.8, size: 40 },
            { x: 99, y: 4.2, size: 35 },
            { x: 149, y: 4.6, size: 28 },
            { x: 199, y: 4.9, size: 22 },
          ],
          label: 'Electronics',
          config: {
            color: '#3B82F6',
            drawValues: false,
          },
        },
        {
          values: [
            { x: 15, y: 4.3, size: 55 },
            { x: 35, y: 4.7, size: 45 },
            { x: 55, y: 4.4, size: 38 },
            { x: 75, y: 4.1, size: 30 },
          ],
          label: 'Clothing',
          config: {
            color: '#EC4899',
            drawValues: false,
          },
        },
      ],
    };
  }

  private getSocialData(): BubbleChartData {
    // Followers in K (x), Engagement rate % (y), Posts per week (bubble size as multiplier)
    return {
      dataSets: [
        {
          values: [
            { x: 5, y: 8.5, size: 50 },
            { x: 15, y: 6.2, size: 42 },
            { x: 50, y: 4.8, size: 35 },
            { x: 100, y: 3.5, size: 28 },
            { x: 500, y: 2.1, size: 20 },
          ],
          label: 'Influencers',
          config: {
            colors: ['#10B981', '#34D399', '#6EE7B7', '#A7F3D0', '#D1FAE5'],
            drawValues: false,
            highlightEnabled: true,
          },
        },
      ],
    };
  }
}
