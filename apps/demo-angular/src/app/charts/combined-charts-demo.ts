/**
 * Combined Charts Demo Component
 * Shows all chart types in a beautiful scrollable gallery
 */
import { Component, NO_ERRORS_SCHEMA, ChangeDetectionStrategy, signal, computed, inject } from '@angular/core';
import { NativeScriptCommonModule, RouterExtensions } from '@nativescript/angular';
import { LineChartDirective, BarChartDirective, PieChartDirective, ScatterChartDirective, BubbleChartDirective, CandleStickChartDirective, RadarChartDirective } from '@nstudio/ncharts/angular';
import type { LineChartData, BarChartData, PieChartData, ScatterChartData, BubbleChartData, CandleChartData, RadarChartData, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual } from '@nstudio/ncharts';
import { ThemeService } from '../utils';
import { Page } from '@nativescript/core';
@Component({
  selector: 'CombinedChartsDemo',
  template: `
    <ActionBar row="0" flat="true" class="bg-slate-50 dark:bg-slate-900">
      <NavigationButton text="" android.systemIcon="ic_menu_back" (tap)="goBack()"></NavigationButton>
      <Label text="Charts Gallery" class="text-lg font-bold text-slate-700 dark:text-slate-100"></Label>
    </ActionBar>
    <GridLayout rows="auto, *" class="bg-slate-50 dark:bg-slate-900">
      <!-- Scrollable Gallery -->
      <ScrollView row="1">
        <StackLayout class="p-4">
          <!-- Performance Stats Header -->
          <GridLayout columns="*, *, *" class="mb-4">
            <StackLayout col="0" class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 mr-2">
              <Label text="$128.5K" class="text-lg font-bold dark:text-white text-slate-500 text-center"></Label>
              <Label text="Revenue" class="text-xs dark:text-blue-100 text-slate-400 text-center"></Label>
            </StackLayout>
            <StackLayout col="1" class="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-3 mx-1">
              <Label text="+24.5%" class="text-lg font-bold dark:text-white text-slate-500 text-center"></Label>
              <Label text="Growth" class="text-xs dark:text-emerald-100 text-slate-400 text-center"></Label>
            </StackLayout>
            <StackLayout col="2" class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-3 ml-2">
              <Label text="8,420" class="text-lg font-bold dark:text-white text-slate-500 text-center"></Label>
              <Label text="Users" class="text-xs dark:text-purple-100 text-slate-400 text-center"></Label>
            </StackLayout>
          </GridLayout>

          <!-- Line Chart Card -->
          <StackLayout class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg mb-4 overflow-hidden">
            <GridLayout columns="*, auto" class="p-4 pb-2">
              <Label col="0" text="Revenue Trend" class="text-base font-bold text-slate-700 dark:text-slate-200"></Label>
              <Label col="1" text="📈" class="text-xl"></Label>
            </GridLayout>
            <LineChart height="220" [data]="lineData" [legend]="lineLegendConfig" [xAxis]="xAxisConfig" [yAxis]="yAxisConfig" [animation]="lineAnimation()" [dragEnabled]="true" [scaleEnabled]="true" [chartBackgroundColor]="chartBgColor()" [chartGridBackgroundColor]="chartBgColor()" class="m-2 mt-0"> </LineChart>
          </StackLayout>

          <!-- Bar Chart Card -->
          <StackLayout class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg mb-4 overflow-hidden">
            <GridLayout columns="*, auto" class="p-4 pb-2">
              <Label col="0" text="Quarterly Performance" class="text-base font-bold text-slate-700 dark:text-slate-200"></Label>
              <Label col="1" text="📊" class="text-xl"></Label>
            </GridLayout>
            <BarChart height="200" [data]="barData" [legend]="barLegendConfig" [xAxis]="barXAxisConfig" [yAxis]="yAxisConfig" [animation]="barAnimation()" [highlightPerTapEnabled]="true" [chartBackgroundColor]="chartBgColor()" [chartGridBackgroundColor]="chartBgColor()" class="m-2 mt-0"> </BarChart>
          </StackLayout>

          <!-- Pie Chart Row -->
          <GridLayout columns="*, *" class="mb-4">
            <!-- Pie Chart 1 -->
            <StackLayout col="0" class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg mr-2 overflow-hidden">
              <Label text="Market Share" class="text-sm font-bold text-slate-700 dark:text-slate-200 p-3 pb-0"></Label>
              <PieChart height="180" [data]="pieData1" [legend]="pieLegendConfig" [animation]="pieAnimation()" [drawHole]="true" [holeRadius]="40" [drawCenterText]="true" centerText="Share" [centerTextSize]="12" [sliceTextSize]="9" [drawSliceText]="false" [usePercentValues]="true" [chartBackgroundColor]="chartBgColor()" [chartGridBackgroundColor]="chartBgColor()" class="m-2 mt-0"> </PieChart>
            </StackLayout>

            <!-- Pie Chart 2 -->
            <StackLayout col="1" class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg ml-2 overflow-hidden">
              <Label text="Traffic Sources" class="text-sm font-bold text-slate-700 dark:text-slate-200 p-3 pb-0"></Label>
              <PieChart height="180" [data]="pieData2" [legend]="pieLegendConfig" [animation]="pieAnimation()" [drawHole]="true" [holeRadius]="40" [drawCenterText]="true" centerText="Traffic" [centerTextSize]="12" [sliceTextSize]="9" [drawSliceText]="false" [usePercentValues]="true" [chartBackgroundColor]="chartBgColor()" [chartGridBackgroundColor]="chartBgColor()" class="m-2 mt-0"> </PieChart>
            </StackLayout>
          </GridLayout>

          <!-- Another Line Chart -->
          <StackLayout class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg mb-4 overflow-hidden">
            <GridLayout columns="*, auto" class="p-4 pb-2">
              <Label col="0" text="User Activity" class="text-base font-bold text-slate-700 dark:text-slate-200"></Label>
              <Label col="1" text="👥" class="text-xl"></Label>
            </GridLayout>
            <LineChart height="180" [data]="activityData" [legend]="{ enabled: false }" [xAxis]="activityXAxisConfig" [yAxis]="yAxisConfig" [animation]="activityAnimation()" [dragEnabled]="true" [chartBackgroundColor]="chartBgColor()" [chartGridBackgroundColor]="chartBgColor()" class="m-2 mt-0"> </LineChart>
          </StackLayout>

          <!-- Scatter Chart Card -->
          <StackLayout class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg mb-4 overflow-hidden">
            <GridLayout columns="*, auto" class="p-4 pb-2">
              <Label col="0" text="Correlation Analysis" class="text-base font-bold text-slate-700 dark:text-slate-200"></Label>
              <Label col="1" text="🔵" class="text-xl"></Label>
            </GridLayout>
            <ScatterChart height="200" [data]="scatterData" [legend]="scatterLegendConfig" [xAxis]="scatterXAxisConfig" [yAxis]="yAxisConfig" [animation]="scatterAnimation()" [highlightPerTapEnabled]="true" [chartBackgroundColor]="chartBgColor()" [chartGridBackgroundColor]="chartBgColor()" class="m-2 mt-0"> </ScatterChart>
          </StackLayout>

          <!-- Bubble Chart Card -->
          <StackLayout class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg mb-4 overflow-hidden">
            <GridLayout columns="*, auto" class="p-4 pb-2">
              <Label col="0" text="Market Analysis" class="text-base font-bold text-slate-700 dark:text-slate-200"></Label>
              <Label col="1" text="🫧" class="text-xl"></Label>
            </GridLayout>
            <BubbleChart height="220" [data]="bubbleData" [legend]="bubbleLegendConfig" [xAxis]="bubbleXAxisConfig" [yAxis]="yAxisConfig" [animation]="bubbleAnimation()" [highlightPerTapEnabled]="true" [chartBackgroundColor]="chartBgColor()" [chartGridBackgroundColor]="chartBgColor()" class="m-2 mt-0"> </BubbleChart>
          </StackLayout>

          <!-- Candlestick Chart Card -->
          <StackLayout class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg mb-4 overflow-hidden">
            <GridLayout columns="*, auto" class="p-4 pb-2">
              <Label col="0" text="Stock Performance" class="text-base font-bold text-slate-700 dark:text-slate-200"></Label>
              <Label col="1" text="🕯️" class="text-xl"></Label>
            </GridLayout>
            <CandleStickChart height="220" [data]="candleData" [legend]="candleLegendConfig" [xAxis]="candleXAxisConfig" [yAxis]="yAxisConfig" [animation]="candleAnimation()" [highlightPerTapEnabled]="true" [chartBackgroundColor]="chartBgColor()" [chartGridBackgroundColor]="chartBgColor()" class="m-2 mt-0"> </CandleStickChart>
          </StackLayout>

          <!-- Radar Chart Card -->
          <StackLayout class="bg-white dark:bg-slate-800 rounded-2xl shadow-lg mb-4 overflow-hidden">
            <GridLayout columns="*, auto" class="p-4 pb-2">
              <Label col="0" text="Skills Comparison" class="text-base font-bold text-slate-700 dark:text-slate-200"></Label>
              <Label col="1" text="🕸️" class="text-xl"></Label>
            </GridLayout>
            <RadarChart height="250" [data]="radarData" [legend]="radarLegendConfig" [xAxis]="radarXAxisConfig" [animation]="radarAnimation()" [webLineWidth]="1.5" webColor="#E5E7EB" [webLineWidthInner]="1" webColorInner="#F3F4F6" [webAlpha]="200" [chartBackgroundColor]="chartBgColor()" [chartGridBackgroundColor]="chartBgColor()" class="m-2 mt-0"> </RadarChart>
          </StackLayout>

          <!-- Refresh Button -->
          <Button text="🔄 Refresh All Charts" (tap)="refreshAllCharts()" class="dark:text-white text-slate-400 rounded-xl p-4 font-semibold mb-4"> </Button>

          <!-- Footer -->
          <Label text="Powered by @nstudio/ncharts" class="text-xs dark:text-white text-slate-400 text-center mb-4"></Label>
        </StackLayout>
      </ScrollView>
    </GridLayout>
  `,
  imports: [NativeScriptCommonModule, LineChartDirective, BarChartDirective, PieChartDirective, ScatterChartDirective, BubbleChartDirective, CandleStickChartDirective, RadarChartDirective],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CombinedChartsDemo {
  themeService = inject(ThemeService);
  chartBgColor = computed(() => this.themeService.colors().bgChart);
  // Animation signals for triggering re-renders
  lineAnimation = signal<ChartAnimation>({ durationX: 1200, durationY: 1200, easingX: 'EaseInOutQuad' });
  barAnimation = signal<ChartAnimation>({ durationX: 1000, durationY: 1000, easingX: 'EaseOutBack' });
  pieAnimation = signal<ChartAnimation>({ durationX: 1400, durationY: 1400, easingX: 'EaseOutBounce' });
  activityAnimation = signal<ChartAnimation>({ durationX: 800, durationY: 800, easingX: 'EaseInOutCubic' });
  scatterAnimation = signal<ChartAnimation>({ durationX: 1000, durationY: 1000, easingX: 'EaseOutBack' });
  bubbleAnimation = signal<ChartAnimation>({ durationX: 1200, durationY: 1200, easingX: 'EaseOutBack' });
  candleAnimation = signal<ChartAnimation>({ durationX: 1000, durationY: 1000, easingX: 'EaseOutQuad' });
  radarAnimation = signal<ChartAnimation>({ durationX: 1400, durationY: 1400, easingX: 'EaseOutBack' });

  // Configs
  lineLegendConfig: LegendConfig = {
    enabled: true,
    horizontalAlignment: 'RIGHT',
    verticalAlignment: 'TOP',
    orientation: 'HORIZONTAL',
    form: 'LINE',
    textSize: 10,
  };

  barLegendConfig: LegendConfig = {
    enabled: true,
    horizontalAlignment: 'CENTER',
    verticalAlignment: 'BOTTOM',
    orientation: 'HORIZONTAL',
    form: 'SQUARE',
    textSize: 10,
  };

  pieLegendConfig: LegendConfig = {
    enabled: false,
  };

  xAxisConfig: XAxisConfig = {
    enabled: true,
    position: 'BOTTOM',
    drawGridLines: true,
    gridColor: '#E5E7EB',
    textSize: 9,
    valueFormatter: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  };

  barXAxisConfig: XAxisConfig = {
    enabled: true,
    position: 'BOTTOM',
    drawGridLines: false,
    textSize: 10,
    valueFormatter: ['Q1', 'Q2', 'Q3', 'Q4'],
  };

  activityXAxisConfig: XAxisConfig = {
    enabled: true,
    position: 'BOTTOM',
    drawGridLines: true,
    gridColor: '#E5E7EB',
    textSize: 9,
    valueFormatter: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  };

  yAxisConfig: YAxisConfigDual = {
    left: { enabled: true, drawGridLines: true, gridColor: '#E5E7EB', textSize: 9 },
    right: { enabled: false },
  };

  // New chart configs
  scatterLegendConfig: LegendConfig = {
    enabled: true,
    horizontalAlignment: 'CENTER',
    verticalAlignment: 'BOTTOM',
    orientation: 'HORIZONTAL',
    form: 'CIRCLE',
    textSize: 9,
  };

  scatterXAxisConfig: XAxisConfig = {
    enabled: true,
    position: 'BOTTOM',
    drawGridLines: true,
    gridColor: '#E5E7EB',
    textSize: 9,
  };

  bubbleLegendConfig: LegendConfig = {
    enabled: true,
    horizontalAlignment: 'CENTER',
    verticalAlignment: 'BOTTOM',
    orientation: 'HORIZONTAL',
    form: 'CIRCLE',
    textSize: 9,
  };

  bubbleXAxisConfig: XAxisConfig = {
    enabled: true,
    position: 'BOTTOM',
    drawGridLines: true,
    gridColor: '#E5E7EB',
    textSize: 9,
  };

  candleLegendConfig: LegendConfig = {
    enabled: false,
  };

  candleXAxisConfig: XAxisConfig = {
    enabled: true,
    position: 'BOTTOM',
    drawGridLines: false,
    textSize: 8,
  };

  radarLegendConfig: LegendConfig = {
    enabled: true,
    horizontalAlignment: 'CENTER',
    verticalAlignment: 'BOTTOM',
    orientation: 'HORIZONTAL',
    form: 'CIRCLE',
    textSize: 9,
  };

  radarXAxisConfig: XAxisConfig = {
    enabled: true,
    drawLabels: true,
    textSize: 9,
    textColor: '#6B7280',
  };

  // Chart Data
  lineData: LineChartData = {
    dataSets: [
      {
        label: '2024',
        values: [
          { x: 0, y: 45 },
          { x: 1, y: 52 },
          { x: 2, y: 48 },
          { x: 3, y: 65 },
          { x: 4, y: 78 },
          { x: 5, y: 72 },
          { x: 6, y: 85 },
          { x: 7, y: 92 },
          { x: 8, y: 88 },
          { x: 9, y: 105 },
          { x: 10, y: 118 },
          { x: 11, y: 128 },
        ],
        config: {
          color: '#3B82F6',
          lineWidth: 2.5,
          drawCircles: false,
          drawFilled: true,
          fillColor: '#3B82F6',
          fillAlpha: 30,
          mode: 'CUBIC_BEZIER',
          drawValues: false,
        },
      },
      {
        label: '2023',
        values: [
          { x: 0, y: 35 },
          { x: 1, y: 42 },
          { x: 2, y: 38 },
          { x: 3, y: 52 },
          { x: 4, y: 58 },
          { x: 5, y: 55 },
          { x: 6, y: 65 },
          { x: 7, y: 72 },
          { x: 8, y: 68 },
          { x: 9, y: 82 },
          { x: 10, y: 88 },
          { x: 11, y: 95 },
        ],
        config: {
          color: '#94A3B8',
          lineWidth: 2,
          drawCircles: false,
          drawFilled: false,
          mode: 'CUBIC_BEZIER',
          drawValues: false,
          dashedLine: { lineLength: 8, spaceLength: 4, phase: 0 },
        },
      },
    ],
  };

  barData: BarChartData = {
    dataSets: [
      {
        label: 'Revenue',
        values: [
          { x: 0, y: 24 },
          { x: 1, y: 32 },
          { x: 2, y: 28 },
          { x: 3, y: 41 },
        ],
        config: { color: '#10B981', drawValues: true, valueTextSize: 11, valueTextColor: '#374151' },
      },
      {
        label: 'Expenses',
        values: [
          { x: 0, y: 18 },
          { x: 1, y: 22 },
          { x: 2, y: 20 },
          { x: 3, y: 25 },
        ],
        config: { color: '#F59E0B', drawValues: true, valueTextSize: 11, valueTextColor: '#374151' },
      },
    ],
  };

  pieData1: PieChartData = {
    dataSets: [
      {
        label: 'Market',
        values: [
          { value: 35, label: 'A' },
          { value: 25, label: 'B' },
          { value: 20, label: 'C' },
          { value: 20, label: 'D' },
        ],
        config: {
          colors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'],
          sliceSpace: 2,
          drawValues: false,
        },
      },
    ],
  };

  pieData2: PieChartData = {
    dataSets: [
      {
        label: 'Traffic',
        values: [
          { value: 42, label: 'Organic' },
          { value: 28, label: 'Direct' },
          { value: 18, label: 'Social' },
          { value: 12, label: 'Other' },
        ],
        config: {
          colors: ['#8B5CF6', '#A855F7', '#C084FC', '#D8B4FE'],
          sliceSpace: 2,
          drawValues: false,
        },
      },
    ],
  };

  activityData: LineChartData = {
    dataSets: [
      {
        label: 'Active Users',
        values: [
          { x: 0, y: 1200 },
          { x: 1, y: 1850 },
          { x: 2, y: 2100 },
          { x: 3, y: 1950 },
          { x: 4, y: 2400 },
          { x: 5, y: 1600 },
          { x: 6, y: 1100 },
        ],
        config: {
          color: '#8B5CF6',
          lineWidth: 3,
          drawCircles: true,
          circleRadius: 5,
          circleColor: '#8B5CF6',
          drawFilled: true,
          fillColor: '#8B5CF6',
          fillAlpha: 25,
          mode: 'CUBIC_BEZIER',
          drawValues: false,
        },
      },
    ],
  };

  // Scatter Chart Data
  scatterData: ScatterChartData = {
    dataSets: [
      {
        values: [
          { x: 1, y: 15 },
          { x: 2, y: 25 },
          { x: 3, y: 18 },
          { x: 4, y: 35 },
          { x: 5, y: 42 },
          { x: 6, y: 38 },
          { x: 7, y: 55 },
          { x: 8, y: 48 },
          { x: 9, y: 62 },
          { x: 10, y: 58 },
        ],
        label: 'Data Set A',
        config: {
          color: '#3B82F6',
          scatterShape: 'CIRCLE',
          scatterShapeSize: 10,
          drawValues: false,
        },
      },
      {
        values: [
          { x: 1, y: 22 },
          { x: 2, y: 18 },
          { x: 3, y: 32 },
          { x: 4, y: 28 },
          { x: 5, y: 45 },
          { x: 6, y: 52 },
          { x: 7, y: 48 },
          { x: 8, y: 65 },
          { x: 9, y: 55 },
          { x: 10, y: 72 },
        ],
        label: 'Data Set B',
        config: {
          color: '#EC4899',
          scatterShape: 'TRIANGLE',
          scatterShapeSize: 10,
          drawValues: false,
        },
      },
    ],
  };

  // Bubble Chart Data
  bubbleData: BubbleChartData = {
    dataSets: [
      {
        values: [
          { x: 10, y: 65, size: 30 },
          { x: 25, y: 78, size: 20 },
          { x: 40, y: 82, size: 15 },
          { x: 55, y: 70, size: 25 },
          { x: 70, y: 88, size: 12 },
        ],
        label: 'Products',
        config: {
          colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'],
          drawValues: false,
          highlightEnabled: true,
        },
      },
    ],
  };

  // Candlestick Chart Data
  candleData: CandleChartData = {
    dataSets: [
      {
        values: [
          { x: 0, shadowH: 105, shadowL: 95, open: 98, close: 103 },
          { x: 1, shadowH: 108, shadowL: 100, open: 103, close: 101 },
          { x: 2, shadowH: 106, shadowL: 97, open: 100, close: 105 },
          { x: 3, shadowH: 112, shadowL: 102, open: 105, close: 110 },
          { x: 4, shadowH: 115, shadowL: 105, open: 110, close: 108 },
          { x: 5, shadowH: 113, shadowL: 104, open: 107, close: 112 },
          { x: 6, shadowH: 118, shadowL: 108, open: 112, close: 115 },
          { x: 7, shadowH: 120, shadowL: 112, open: 115, close: 114 },
          { x: 8, shadowH: 119, shadowL: 110, open: 113, close: 118 },
          { x: 9, shadowH: 125, shadowL: 115, open: 118, close: 122 },
          { x: 10, shadowH: 128, shadowL: 118, open: 122, close: 120 },
          { x: 11, shadowH: 126, shadowL: 117, open: 119, close: 125 },
        ],
        label: 'STOCK',
        config: {
          shadowColorSameAsCandle: true,
          shadowWidth: 1.5,
          decreasingColor: '#EF4444',
          decreasingPaintStyle: 'FILL',
          increasingColor: '#10B981',
          increasingPaintStyle: 'FILL',
          neutralColor: '#6B7280',
          drawValues: false,
        },
      },
    ],
  };

  // Radar Chart Data
  radarData: RadarChartData = {
    labels: ['Speed', 'Power', 'Defense', 'Accuracy', 'Stamina', 'Agility'],
    dataSets: [
      {
        values: [{ value: 85 }, { value: 72 }, { value: 90 }, { value: 78 }, { value: 88 }, { value: 82 }],
        label: 'Player A',
        config: {
          color: '#3B82F6',
          fillColor: '#3B82F6',
          fillAlpha: 80,
          drawFilled: true,
          lineWidth: 2,
          drawValues: false,
        },
      },
      {
        values: [{ value: 78 }, { value: 88 }, { value: 75 }, { value: 92 }, { value: 70 }, { value: 85 }],
        label: 'Player B',
        config: {
          color: '#EC4899',
          fillColor: '#EC4899',
          fillAlpha: 80,
          drawFilled: true,
          lineWidth: 2,
          drawValues: false,
        },
      },
    ],
  };

  page = inject(Page);

  constructor(private routerExtensions: RouterExtensions) {
    if (__ANDROID__) {
      this.page.backgroundColor = this.themeService.colors().bgPrimary;
    }
  }

  refreshAllCharts(): void {
    this.lineAnimation.set({ durationX: 4500, durationY: 4500, easingX: 'EaseOutQuad' });
    this.barAnimation.set({ durationX: 3000, durationY: 3000, easingX: 'EaseOutBack' });
    this.pieAnimation.set({ durationX: 4400, durationY: 4400, easingX: 'EaseOutQuad' });
    this.activityAnimation.set({ durationX: 2500, durationY: 2500, easingX: 'EaseInOutCubic' });
    this.scatterAnimation.set({ durationX: 3800, durationY: 3800, easingX: 'EaseOutBack' });
    this.bubbleAnimation.set({ durationX: 4500, durationY: 4500, easingX: 'EaseOutBack' });
    this.candleAnimation.set({ durationX: 3800, durationY: 3800, easingX: 'EaseOutQuad' });
    this.radarAnimation.set({ durationX: 4400, durationY: 4400, easingX: 'EaseOutBack' });
  }

  goBack(): void {
    this.routerExtensions.back();
  }
}
