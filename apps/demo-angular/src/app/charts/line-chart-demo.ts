/**
 * Line Chart Demo Component
 * Demonstrates line charts with various configurations including selection events
 */
import { Component, NO_ERRORS_SCHEMA, ChangeDetectionStrategy, signal, ViewChild, ElementRef, inject, computed } from '@angular/core';
import { NativeScriptCommonModule, RouterExtensions } from '@nativescript/angular';
import { LineChartDirective } from '@nstudio/ncharts/angular';
import type { LineChartData, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual, ChartSelectEvent, ChartSelectData, LineChart } from '@nstudio/ncharts';
import { ThemeService } from '../utils';

@Component({
  selector: 'LineChartDemo',
  templateUrl: 'line-chart-demo.html',
  imports: [NativeScriptCommonModule, LineChartDirective],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineChartDemo {
  routerExtensions = inject(RouterExtensions);
  themeService = inject(ThemeService);
  @ViewChild('lineChart') lineChartRef!: ElementRef;

  // Theme-reactive colors for SegmentedBar and other UI elements
  segmentedBarTextColor = computed(() => this.themeService.colors().textPrimary);
  chartBgColor = computed(() => this.themeService.colors().bgChart);

  currentStyle = signal<'sales' | 'stocks' | 'weather'>('sales');
  chartData = signal<LineChartData>(this.getSalesData());
  animationConfig = signal<ChartAnimation>({ durationX: 1200, durationY: 1200, easingX: 'EaseInOutQuad' });

  // Selection state
  private _selectedData = signal<ChartSelectData | null>(null);

  selectedValue = computed(() => {
    const data = this._selectedData();
    if (!data) return 'No selection';

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthName = monthNames[Math.floor(data.x)] || `Point ${data.x}`;

    return `${monthName}: ${data.y.toFixed(1)} (Dataset ${data.dataSetIndex + 1})`;
  });

  hasSelection = computed(() => this._selectedData() !== null);

  private styleOrder: ('sales' | 'stocks' | 'weather')[] = ['sales', 'stocks', 'weather'];
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
    labelRotationAngle: 0,
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

  constructor() {
    console.log('LineChartDemo component constructed');
  }

  onStyleIndexChange(event: any): void {
    const index = event.value ?? event.object?.selectedIndex ?? 0;
    const style = this.styleOrder[index];
    if (style) {
      this.selectStyle(style);
    }
  }

  selectStyle(style: 'sales' | 'stocks' | 'weather'): void {
    this.onChartDeselect();
    this.currentStyle.set(style);
    switch (style) {
      case 'sales':
        this.chartData.set(this.getSalesData());
        break;
      case 'stocks':
        this.chartData.set(this.getStocksData());
        break;
      case 'weather':
        this.chartData.set(this.getWeatherData());
        break;
    }
    this.animateChart();
  }

  animateChart(): void {
    const chart = this.lineChartRef?.nativeElement as LineChart;
    if (chart) {
      chart.animate({ durationX: 1200, durationY: 1200, easingX: 'EaseOutBack' });
    }
  }

  highlightRandom(): void {
    const chart = this.lineChartRef?.nativeElement;
    if (chart) {
      const randomX = Math.floor(Math.random() * 12);
      chart.highlightValues([{ x: randomX, dataSetIndex: 0 }]);
    }
  }

  resetChart(): void {
    const chart = this.lineChartRef?.nativeElement;
    if (chart) {
      chart.clearHighlights();
      chart.fitScreen();
    }
    this._selectedData.set(null);
  }

  // Selection event handlers
  onChartSelect(event: ChartSelectEvent): void {
    console.log('[LineChartDemo] Selected:', event.data);
    this._selectedData.set(event.data);
  }

  onChartDeselect(): void {
    console.log('[LineChartDemo] Deselected');
    this._selectedData.set(null);
  }

  clearSelection(): void {
    const chart = this.lineChartRef?.nativeElement;
    if (chart) {
      chart.clearHighlights();
    }
    this._selectedData.set(null);
  }
  goBack(): void {
    this.routerExtensions.back();
  }

  private getSalesData(): LineChartData {
    return {
      dataSets: [
        {
          label: '2024 Revenue',
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
            { x: 11, y: 135 },
          ],
          config: {
            color: '#3B82F6',
            lineWidth: 3,
            drawCircles: true,
            circleRadius: 5,
            circleColor: '#3B82F6',
            drawFilled: true,
            fillColor: '#3B82F6',
            fillAlpha: 40,
            mode: 'CUBIC_BEZIER',
            drawValues: false,
            highlightColor: '#1D4ED8',
            highlightLineWidth: 2,
          },
        },
        {
          label: '2023 Revenue',
          values: [
            { x: 0, y: 35 },
            { x: 1, y: 42 },
            { x: 2, y: 38 },
            { x: 3, y: 55 },
            { x: 4, y: 62 },
            { x: 5, y: 58 },
            { x: 6, y: 70 },
            { x: 7, y: 75 },
            { x: 8, y: 72 },
            { x: 9, y: 85 },
            { x: 10, y: 92 },
            { x: 11, y: 108 },
          ],
          config: {
            color: '#94A3B8',
            lineWidth: 2,
            drawCircles: true,
            circleRadius: 4,
            circleColor: '#94A3B8',
            drawFilled: true,
            fillColor: '#94A3B8',
            fillAlpha: 20,
            mode: 'CUBIC_BEZIER',
            drawValues: false,
            dashedLine: { lineLength: 10, spaceLength: 5, phase: 0 },
          },
        },
      ],
    };
  }

  private getStocksData(): LineChartData {
    return {
      dataSets: [
        {
          label: 'AAPL',
          values: [
            { x: 0, y: 178 },
            { x: 1, y: 185 },
            { x: 2, y: 182 },
            { x: 3, y: 191 },
            { x: 4, y: 188 },
            { x: 5, y: 195 },
            { x: 6, y: 202 },
            { x: 7, y: 198 },
            { x: 8, y: 205 },
            { x: 9, y: 212 },
            { x: 10, y: 208 },
            { x: 11, y: 218 },
          ],
          config: {
            color: '#10B981',
            lineWidth: 2.5,
            drawCircles: false,
            drawFilled: true,
            fillColor: '#10B981',
            fillAlpha: 30,
            mode: 'CUBIC_BEZIER',
            drawValues: false,
          },
        },
        {
          label: 'GOOGL',
          values: [
            { x: 0, y: 142 },
            { x: 1, y: 148 },
            { x: 2, y: 145 },
            { x: 3, y: 152 },
            { x: 4, y: 158 },
            { x: 5, y: 155 },
            { x: 6, y: 162 },
            { x: 7, y: 168 },
            { x: 8, y: 165 },
            { x: 9, y: 172 },
            { x: 10, y: 178 },
            { x: 11, y: 185 },
          ],
          config: {
            color: '#F59E0B',
            lineWidth: 2.5,
            drawCircles: false,
            drawFilled: true,
            fillColor: '#F59E0B',
            fillAlpha: 30,
            mode: 'CUBIC_BEZIER',
            drawValues: false,
          },
        },
      ],
    };
  }

  private getWeatherData(): LineChartData {
    return {
      dataSets: [
        {
          label: 'High Temp',
          values: [
            { x: 0, y: 42 },
            { x: 1, y: 45 },
            { x: 2, y: 52 },
            { x: 3, y: 62 },
            { x: 4, y: 72 },
            { x: 5, y: 82 },
            { x: 6, y: 88 },
            { x: 7, y: 86 },
            { x: 8, y: 78 },
            { x: 9, y: 65 },
            { x: 10, y: 52 },
            { x: 11, y: 44 },
          ],
          config: {
            color: '#EF4444',
            lineWidth: 3,
            drawCircles: true,
            circleRadius: 6,
            circleColor: '#EF4444',
            drawFilled: true,
            fillColor: '#EF4444',
            fillAlpha: 25,
            mode: 'CUBIC_BEZIER',
            drawValues: true,
            valueTextSize: 9,
            valueTextColor: '#EF4444',
          },
        },
        {
          label: 'Low Temp',
          values: [
            { x: 0, y: 28 },
            { x: 1, y: 30 },
            { x: 2, y: 35 },
            { x: 3, y: 42 },
            { x: 4, y: 52 },
            { x: 5, y: 62 },
            { x: 6, y: 68 },
            { x: 7, y: 66 },
            { x: 8, y: 58 },
            { x: 9, y: 48 },
            { x: 10, y: 38 },
            { x: 11, y: 30 },
          ],
          config: {
            color: '#3B82F6',
            lineWidth: 3,
            drawCircles: true,
            circleRadius: 6,
            circleColor: '#3B82F6',
            drawFilled: true,
            fillColor: '#3B82F6',
            fillAlpha: 25,
            mode: 'CUBIC_BEZIER',
            drawValues: true,
            valueTextSize: 9,
            valueTextColor: '#3B82F6',
          },
        },
      ],
    };
  }
}
