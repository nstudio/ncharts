/**
 * Radar Chart Demo Component
 * Demonstrates radar/spider charts with various configurations
 */
import { Component, NO_ERRORS_SCHEMA, ChangeDetectionStrategy, signal, ViewChild, ElementRef, computed, inject } from '@angular/core';
import { NativeScriptCommonModule, RouterExtensions } from '@nativescript/angular';
import { RadarChartDirective } from '@nstudio/ncharts/angular';
import type { RadarChartData, ChartAnimation, LegendConfig, XAxisConfig, ChartSelectData, ChartSelectEvent } from '@nstudio/ncharts';
import { ThemeService } from '../utils';
import { Page } from '@nativescript/core';
@Component({
  selector: 'RadarChartDemo',
  template: `
    <ActionBar flat="true" class="bg-slate-50 dark:bg-slate-900">
      <NavigationButton text="" android.systemIcon="ic_menu_back" (tap)="goBack()"></NavigationButton>
      <Label text="Radar Charts" class="text-lg font-bold text-slate-700 dark:text-slate-100"></Label>
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
        <RadarChart #radarChart [data]="chartData()" [legend]="legendConfig" [xAxis]="xAxisConfig" [animation]="animationConfig()" [chartDescription]="{ text: getChartTitle(), enabled: true }" [webLineWidth]="1.5" webColor="#E5E7EB" [webLineWidthInner]="1" webColorInner="#F3F4F6" [webAlpha]="200" [rotationEnabled]="true" [highlightPerTapEnabled]="true" [chartBackgroundColor]="chartBgColor()" [chartGridBackgroundColor]="chartBgColor()" (select)="onChartSelect($event)" (deselect)="onChartDeselect()" class="h-full"> </RadarChart>
      </GridLayout>

      <!-- Style Selector -->
      <SegmentedBar row="2" [selectedIndex]="selectedStyleIndex()" (selectedIndexChange)="onStyleIndexChange($event)" [selectedTextColor]="segmentedBarSelectedTextColor()" [selectedBackgroundColor]="segmentedBarSelectedBgColor()" [backgroundColor]="segmentedBarBgColor()" class="m-4 text-sm" [class.h-8]="isAndroid" [color]="segmentedBarTextColor()">
        <SegmentedBarItem title="Skills"></SegmentedBarItem>
        <SegmentedBarItem title="KPIs"></SegmentedBarItem>
        <SegmentedBarItem title="Compare"></SegmentedBarItem>
      </SegmentedBar>

      <!-- Controls -->
      <GridLayout row="3" columns="*, *, *" [ngClass]="{ 'p-4 pt-0': !isAndroid, 'm-4 h-10': isAndroid }">
        <Button col="0" text="Animate" (tap)="animateChart()" class="bg-emerald-500 text-white rounded-md m-1 text-sm"></Button>
        <Button col="1" text="Toggle Fill" (tap)="toggleFill()" class="bg-purple-500 text-white rounded-md m-1 text-sm"></Button>
        <Button col="2" text="Refresh" (tap)="randomizeData()" class="bg-orange-500 text-white rounded-md m-1 text-sm"></Button>
      </GridLayout>
    </GridLayout>
  `,
  imports: [NativeScriptCommonModule, RadarChartDirective],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadarChartDemo {
  @ViewChild('radarChart') radarChartRef!: ElementRef;
  themeService = inject(ThemeService);

  isAndroid = __ANDROID__;

  // Theme-reactive colors for SegmentedBar and other UI elements
  segmentedBarSelectedTextColor = computed(() => this.themeService.colors().textPrimary);
  segmentedBarTextColor = computed(() => this.themeService.colors().textPrimary);
  segmentedBarBgColor = computed(() => (__APPLE__ ? null : 'transparent'));
  segmentedBarSelectedBgColor = computed(() => (__APPLE__ ? null : this.themeService.colors().bgSelectedSegmentBar));
  valueTextColor = computed(() => (this.themeService.isDarkMode() ? '#FFFFFF' : '#374151'));
  chartBgColor = computed(() => this.themeService.colors().bgChart);

  currentStyle = signal<'skills' | 'performance' | 'comparison'>('skills');
  showFill = signal(true);
  chartData = signal<RadarChartData>(this.getSkillsData());
  animationConfig = signal<ChartAnimation>({ durationX: 1400, durationY: 1400, easingX: 'EaseOutBack' });

  // Selection state
  private _selectedData = signal<ChartSelectData | null>(null);

  selectedValue = computed(() => {
    const data = this._selectedData();
    if (!data) return 'No selection';

    const chartData = this.chartData();
    const label = chartData.labels?.[data.dataIndex] || `Point ${data.dataIndex + 1}`;

    return `${label}: ${data.y.toFixed(1)} (Dataset ${data.dataSetIndex + 1})`;
  });

  hasSelection = computed(() => this._selectedData() !== null);

  private styleOrder: ('skills' | 'performance' | 'comparison')[] = ['skills', 'performance', 'comparison'];
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
    drawLabels: true,
    textSize: 10,
    textColor: '#6B7280',
  };

  page = inject(Page);
  constructor(private routerExtensions: RouterExtensions) {
    if (__ANDROID__) {
      this.page.backgroundColor = this.themeService.colors().bgPrimary;
    }
  }

  onStyleIndexChange(event: any): void {
    const index = event.value ?? event.object?.selectedIndex ?? 0;
    const style = this.styleOrder[index];
    if (style) {
      this.selectStyle(style);
    }
  }

  getChartTitle(): string {
    const titles = {
      skills: 'Developer Skills Assessment',
      performance: 'Team Performance Metrics',
      comparison: 'Product Comparison',
    };
    return titles[this.currentStyle()];
  }

  selectStyle(style: 'skills' | 'performance' | 'comparison'): void {
    this.onChartDeselect();
    this.currentStyle.set(style);
    switch (style) {
      case 'skills':
        this.chartData.set(this.getSkillsData());
        break;
      case 'performance':
        this.chartData.set(this.getPerformanceData());
        break;
      case 'comparison':
        this.chartData.set(this.getComparisonData());
        break;
    }
    this.animateChart();
  }

  toggleFill(): void {
    this.showFill.set(!this.showFill());
    this.selectStyle(this.currentStyle());
  }

  animateChart(): void {
    const chart = this.radarChartRef?.nativeElement;
    if (chart) {
      chart.animate({ durationX: 1400, durationY: 1400, easingX: 'EaseOutBack' });
    }
  }

  // Selection event handlers
  onChartSelect(event: ChartSelectEvent): void {
    console.log('[RadarChartDemo] Selected:', event.data);
    this._selectedData.set(event.data);
  }

  onChartDeselect(): void {
    console.log('[RadarChartDemo] Deselected');
    this._selectedData.set(null);
  }

  clearSelection(): void {
    const chart = this.radarChartRef?.nativeElement;
    if (chart) {
      chart.clearHighlights();
    }
    this._selectedData.set(null);
  }

  randomizeData(): void {
    this.selectStyle(this.currentStyle());
  }

  goBack(): void {
    this.routerExtensions.back();
  }

  private randomValue(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max - min));
  }

  private getSkillsData(): RadarChartData {
    return {
      labels: ['JavaScript', 'TypeScript', 'Angular', 'React', 'Node.js', 'CSS'],
      dataSets: [
        {
          values: [{ value: this.randomValue(70, 100) }, { value: this.randomValue(80, 100) }, { value: this.randomValue(75, 95) }, { value: this.randomValue(60, 85) }, { value: this.randomValue(65, 90) }, { value: this.randomValue(70, 95) }],
          label: 'Current Level',
          config: {
            color: '#3B82F6',
            fillColor: '#3B82F6',
            fillAlpha: this.showFill() ? 100 : 0,
            drawFilled: this.showFill(),
            lineWidth: 2,
            drawValues: true,
            valueTextSize: 9,
            valueTextColor: '#374151',
          },
        },
      ],
    };
  }

  private getPerformanceData(): RadarChartData {
    return {
      labels: ['Quality', 'Speed', 'Teamwork', 'Innovation', 'Communication', 'Reliability'],
      dataSets: [
        {
          values: [{ value: this.randomValue(75, 95) }, { value: this.randomValue(70, 90) }, { value: this.randomValue(80, 100) }, { value: this.randomValue(65, 85) }, { value: this.randomValue(75, 95) }, { value: this.randomValue(85, 100) }],
          label: 'Team A',
          config: {
            color: '#10B981',
            fillColor: '#10B981',
            fillAlpha: this.showFill() ? 80 : 0,
            drawFilled: this.showFill(),
            lineWidth: 2,
            drawValues: false,
          },
        },
        {
          values: [{ value: this.randomValue(65, 85) }, { value: this.randomValue(80, 95) }, { value: this.randomValue(70, 90) }, { value: this.randomValue(75, 95) }, { value: this.randomValue(65, 85) }, { value: this.randomValue(70, 90) }],
          label: 'Team B',
          config: {
            color: '#F59E0B',
            fillColor: '#F59E0B',
            fillAlpha: this.showFill() ? 80 : 0,
            drawFilled: this.showFill(),
            lineWidth: 2,
            drawValues: false,
          },
        },
      ],
    };
  }

  private getComparisonData(): RadarChartData {
    return {
      labels: ['Price', 'Performance', 'Battery', 'Camera', 'Display', 'Storage'],
      dataSets: [
        {
          values: [{ value: 85 }, { value: 95 }, { value: 80 }, { value: 90 }, { value: 92 }, { value: 75 }],
          label: 'iPhone 15 Pro',
          config: {
            color: '#6366F1',
            fillColor: '#6366F1',
            fillAlpha: this.showFill() ? 70 : 0,
            drawFilled: this.showFill(),
            lineWidth: 2.5,
            drawValues: false,
          },
        },
        {
          values: [{ value: 80 }, { value: 92 }, { value: 88 }, { value: 88 }, { value: 90 }, { value: 90 }],
          label: 'Galaxy S24 Ultra',
          config: {
            color: '#EC4899',
            fillColor: '#EC4899',
            fillAlpha: this.showFill() ? 70 : 0,
            drawFilled: this.showFill(),
            lineWidth: 2.5,
            drawValues: false,
          },
        },
        {
          values: [{ value: 95 }, { value: 88 }, { value: 75 }, { value: 92 }, { value: 85 }, { value: 85 }],
          label: 'Pixel 8 Pro',
          config: {
            color: '#14B8A6',
            fillColor: '#14B8A6',
            fillAlpha: this.showFill() ? 70 : 0,
            drawFilled: this.showFill(),
            lineWidth: 2.5,
            drawValues: false,
          },
        },
      ],
    };
  }
}
