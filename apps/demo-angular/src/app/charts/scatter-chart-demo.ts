/**
 * Scatter Chart Demo Component
 * Demonstrates scatter charts with various configurations
 */
import { Component, NO_ERRORS_SCHEMA, ChangeDetectionStrategy, signal, ViewChild, ElementRef, computed, inject } from '@angular/core';
import { NativeScriptCommonModule, RouterExtensions } from '@nativescript/angular';
import { ScatterChartDirective } from '@nstudio/ncharts/angular';
import type { ScatterChartData, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual, ChartSelectData, ChartSelectEvent } from '@nstudio/ncharts';
import { ThemeService } from '../utils';
import { Page } from '@nativescript/core';
@Component({
  selector: 'ScatterChartDemo',
  template: `
    <ActionBar flat="true" class="bg-slate-50 dark:bg-slate-900">
      <NavigationButton text="" android.systemIcon="ic_menu_back" (tap)="goBack()"></NavigationButton>
      <Label text="Scatter Charts" class="text-lg font-bold text-slate-700 dark:text-slate-100"></Label>
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
        <ScatterChart #scatterChart [data]="chartData()" [legend]="legendConfig" [xAxis]="xAxisConfig" [yAxis]="yAxisConfig" [animation]="animationConfig()" [chartDescription]="{ text: getChartTitle(), enabled: true }" [highlightPerTapEnabled]="true" [chartBackgroundColor]="chartBgColor()" [chartGridBackgroundColor]="chartBgColor()" (select)="onChartSelect($event)" (deselect)="onChartDeselect()" class="h-full"> </ScatterChart>
      </GridLayout>

      <!-- Style Selector -->
      <SegmentedBar row="2" [selectedIndex]="selectedStyleIndex()" (selectedIndexChange)="onStyleIndexChange($event)" [selectedTextColor]="segmentedBarTextColor()" [selectedBackgroundColor]="segmentedBarSelectedBgColor()" [backgroundColor]="segmentedBarBgColor()" class="m-4 text-sm" [class.h-8]="isAndroid" [class.text-white]="isAndroid">
        <SegmentedBarItem title="Correlation"></SegmentedBarItem>
        <SegmentedBarItem title="Clusters"></SegmentedBarItem>
        <SegmentedBarItem title="Multi-Set"></SegmentedBarItem>
      </SegmentedBar>

      <!-- Controls -->
      <GridLayout row="3" columns="*, *, *" [ngClass]="{ 'p-4 pt-0': !isAndroid, 'm-4 h-10': isAndroid }">
        <Button col="0" text="Animate" (tap)="animateChart()" class="bg-emerald-500 text-white rounded-md m-1 text-sm"></Button>
        <Button col="1" text="Shape" (tap)="changeShape()" class="bg-purple-500 text-white rounded-md m-1 text-sm"></Button>
        <Button col="2" text="Refresh" (tap)="randomizeData()" class="bg-orange-500 text-white rounded-md m-1 text-sm"></Button>
      </GridLayout>
    </GridLayout>
  `,
  imports: [NativeScriptCommonModule, ScatterChartDirective],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScatterChartDemo {
  @ViewChild('scatterChart') scatterChartRef!: ElementRef;
  themeService = inject(ThemeService);

  isAndroid = __ANDROID__;

  // Theme-reactive colors for SegmentedBar and other UI elements
  segmentedBarTextColor = computed(() => this.themeService.colors().textPrimary);
  segmentedBarBgColor = computed(() => (__APPLE__ ? null : 'transparent'));
  segmentedBarSelectedBgColor = computed(() => (__APPLE__ ? null : this.themeService.colors().bgSelectedSegmentBar));
  valueTextColor = computed(() => (this.themeService.isDarkMode() ? '#FFFFFF' : '#374151'));
  chartBgColor = computed(() => this.themeService.colors().bgChart);

  currentStyle = signal<'correlation' | 'clusters' | 'multiset'>('correlation');
  currentShape = signal<'CIRCLE' | 'SQUARE' | 'TRIANGLE' | 'CROSS' | 'X'>('CIRCLE');
  chartData = signal<ScatterChartData>(this.getCorrelationData());
  animationConfig = signal<ChartAnimation>({ durationX: 1000, durationY: 1000, easingX: 'EaseOutBack' });

  // Selection state
  private _selectedData = signal<ChartSelectData | null>(null);

  selectedValue = computed(() => {
    const data = this._selectedData();
    if (!data) return 'No selection';

    return `X: ${data.x.toFixed(1)}, Y: ${data.y.toFixed(1)} (Dataset ${data.dataSetIndex + 1})`;
  });

  hasSelection = computed(() => this._selectedData() !== null);

  private styleOrder: ('correlation' | 'clusters' | 'multiset')[] = ['correlation', 'clusters', 'multiset'];
  selectedStyleIndex = computed(() => this.styleOrder.indexOf(this.currentStyle()));

  shapes: Array<'CIRCLE' | 'SQUARE' | 'TRIANGLE' | 'CROSS' | 'X'> = ['CIRCLE', 'SQUARE', 'TRIANGLE', 'CROSS', 'X'];

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
      correlation: 'Height vs Weight Correlation',
      clusters: 'Customer Segments',
      multiset: 'Test Scores by Subject',
    };
    return titles[this.currentStyle()];
  }

  selectStyle(style: 'correlation' | 'clusters' | 'multiset'): void {
    this.onChartDeselect();
    this.currentStyle.set(style);
    switch (style) {
      case 'correlation':
        this.chartData.set(this.getCorrelationData());
        break;
      case 'clusters':
        this.chartData.set(this.getClustersData());
        break;
      case 'multiset':
        this.chartData.set(this.getMultiSetData());
        break;
    }
    this.animateChart();
  }

  changeShape(): void {
    const currentIndex = this.shapes.indexOf(this.currentShape());
    const nextIndex = (currentIndex + 1) % this.shapes.length;
    this.currentShape.set(this.shapes[nextIndex]);
    this.selectStyle(this.currentStyle());
  }

  animateChart(): void {
    const chart = this.scatterChartRef?.nativeElement;
    if (chart) {
      chart.animate({ durationX: 1000, durationY: 1000, easingX: 'EaseOutBack' });
    }
  }

  // Selection event handlers
  onChartSelect(event: ChartSelectEvent): void {
    console.log('[ScatterChartDemo] Selected:', event.data);
    this._selectedData.set(event.data);
  }

  onChartDeselect(): void {
    console.log('[ScatterChartDemo] Deselected');
    this._selectedData.set(null);
  }

  clearSelection(): void {
    const chart = this.scatterChartRef?.nativeElement;
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

  private getCorrelationData(): ScatterChartData {
    const values = [];
    for (let i = 0; i < 30; i++) {
      const x = 150 + Math.random() * 50; // Height 150-200cm
      const y = 50 + (x - 150) * 1.2 + (Math.random() - 0.5) * 20; // Weight with correlation
      values.push({ x, y });
    }
    return {
      dataSets: [
        {
          values,
          label: 'Height vs Weight',
          config: {
            color: '#3B82F6',
            scatterShape: this.currentShape(),
            scatterShapeSize: 12,
            drawValues: false,
            highlightEnabled: true,
          },
        },
      ],
    };
  }

  private getClustersData(): ScatterChartData {
    const cluster1 = [];
    const cluster2 = [];
    const cluster3 = [];

    // Cluster 1: Young, high spenders
    for (let i = 0; i < 15; i++) {
      cluster1.push({ x: 20 + Math.random() * 10, y: 70 + Math.random() * 30 });
    }
    // Cluster 2: Middle-aged, moderate spenders
    for (let i = 0; i < 15; i++) {
      cluster2.push({ x: 35 + Math.random() * 15, y: 40 + Math.random() * 25 });
    }
    // Cluster 3: Senior, low spenders
    for (let i = 0; i < 15; i++) {
      cluster3.push({ x: 55 + Math.random() * 15, y: 10 + Math.random() * 25 });
    }

    return {
      dataSets: [
        {
          values: cluster1,
          label: 'Young Spenders',
          config: {
            color: '#10B981',
            scatterShape: this.currentShape(),
            scatterShapeSize: 10,
            drawValues: false,
          },
        },
        {
          values: cluster2,
          label: 'Mid-Age',
          config: {
            color: '#F59E0B',
            scatterShape: this.currentShape(),
            scatterShapeSize: 10,
            drawValues: false,
          },
        },
        {
          values: cluster3,
          label: 'Senior',
          config: {
            color: '#EF4444',
            scatterShape: this.currentShape(),
            scatterShapeSize: 10,
            drawValues: false,
          },
        },
      ],
    };
  }

  private getMultiSetData(): ScatterChartData {
    const mathScores = [];
    const scienceScores = [];

    for (let i = 0; i < 20; i++) {
      const studyHours = 1 + Math.random() * 9; // 1-10 hours
      mathScores.push({ x: studyHours, y: 30 + studyHours * 6 + (Math.random() - 0.5) * 15 });
      scienceScores.push({ x: studyHours, y: 25 + studyHours * 5.5 + (Math.random() - 0.5) * 18 });
    }

    return {
      dataSets: [
        {
          values: mathScores,
          label: 'Math Scores',
          config: {
            color: '#8B5CF6',
            scatterShape: 'CIRCLE',
            scatterShapeSize: 10,
            drawValues: false,
          },
        },
        {
          values: scienceScores,
          label: 'Science Scores',
          config: {
            color: '#EC4899',
            scatterShape: 'TRIANGLE',
            scatterShapeSize: 10,
            drawValues: false,
          },
        },
      ],
    };
  }
}
