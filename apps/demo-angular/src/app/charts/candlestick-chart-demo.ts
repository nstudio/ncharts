/**
 * Candlestick Chart Demo Component
 * Demonstrates candlestick charts for financial OHLC data
 */
import { Component, NO_ERRORS_SCHEMA, ChangeDetectionStrategy, signal, ViewChild, ElementRef, computed, inject } from '@angular/core';
import { NativeScriptCommonModule, RouterExtensions } from '@nativescript/angular';
import { CandleStickChartDirective } from '@nstudio/ncharts/angular';
import type { CandleChartData, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual, ChartSelectData, ChartSelectEvent } from '@nstudio/ncharts';
import { ThemeService } from '../utils';

@Component({
  selector: 'CandlestickChartDemo',
  template: `
    <ActionBar flat="true" class="bg-slate-50 dark:bg-slate-900">
      <NavigationButton text="" android.systemIcon="ic_menu_back" (tap)="goBack()"></NavigationButton>
      <Label text="Candlestick Charts" class="text-lg font-bold text-slate-700 dark:text-slate-100"></Label>
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
        <CandleStickChart #candlestickChart [data]="chartData()" [legend]="legendConfig" [xAxis]="xAxisConfig" [yAxis]="yAxisConfig" [animation]="animationConfig()" [chartDescription]="{ text: getChartTitle(), enabled: true }" [highlightPerTapEnabled]="true" [chartBackgroundColor]="chartBgColor()" [chartGridBackgroundColor]="chartBgColor()" (select)="onChartSelect($event)" (deselect)="onChartDeselect()" class="h-full"> </CandleStickChart>
      </GridLayout>

      <!-- Style Selector -->
      <SegmentedBar row="2" [selectedIndex]="selectedStyleIndex()" (selectedIndexChange)="onStyleIndexChange($event)" [selectedTextColor]="segmentedBarTextColor()" class="m-4 text-sm" [class.h-8]="isAndroid">
        <SegmentedBarItem title="Stock"></SegmentedBarItem>
        <SegmentedBarItem title="Crypto"></SegmentedBarItem>
        <SegmentedBarItem title="Forex"></SegmentedBarItem>
      </SegmentedBar>

      <!-- Controls -->
      <GridLayout row="3" columns="*, *, *" [ngClass]="{ 'p-4 pt-0': !isAndroid, 'm-4 h-10': isAndroid }">
        <Button col="0" text="Animate" (tap)="animateChart()" class="bg-emerald-500 text-white rounded-md m-1 text-sm"></Button>
        <Button col="1" text="Highlight" (tap)="highlightRandom()" class="bg-purple-500 text-white rounded-md m-1 text-sm"></Button>
        <Button col="2" text="Refresh" (tap)="randomizeData()" class="bg-orange-500 text-white rounded-md m-1 text-sm"></Button>
      </GridLayout>
    </GridLayout>
  `,
  imports: [NativeScriptCommonModule, CandleStickChartDirective],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CandlestickChartDemo {
  @ViewChild('candlestickChart') candlestickChartRef!: ElementRef;
  themeService = inject(ThemeService);

  isAndroid = __ANDROID__;

  // Theme-reactive colors
  segmentedBarTextColor = computed(() => this.themeService.colors().textPrimary);
  valueTextColor = computed(() => (this.themeService.isDarkMode() ? '#FFFFFF' : '#374151'));
  chartBgColor = computed(() => this.themeService.colors().bgChart);

  currentStyle = signal<'stock' | 'crypto' | 'forex'>('stock');
  chartData = signal<CandleChartData>(this.getStockData());
  animationConfig = signal<ChartAnimation>({ durationX: 1000, durationY: 1000, easingX: 'EaseOutQuad' });

  // Selection state
  private _selectedData = signal<ChartSelectData | null>(null);

  selectedValue = computed(() => {
    const data = this._selectedData();
    if (!data) return 'No selection';

    // For candlestick, data.data contains OHLC values
    const ohlc = data.data;
    if (ohlc) {
      return `O: ${ohlc.open?.toFixed(2)} H: ${ohlc.shadowH?.toFixed(2)} L: ${ohlc.shadowL?.toFixed(2)} C: ${ohlc.close?.toFixed(2)}`;
    }
    return `Day ${data.dataIndex + 1}: ${data.y.toFixed(2)}`;
  });

  hasSelection = computed(() => this._selectedData() !== null);

  private styleOrder: ('stock' | 'crypto' | 'forex')[] = ['stock', 'crypto', 'forex'];
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
    textSize: 9,
    labelRotationAngle: -45,
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
      stock: 'AAPL - Daily OHLC',
      crypto: 'BTC/USD - 4H Chart',
      forex: 'EUR/USD - Daily',
    };
    return titles[this.currentStyle()];
  }

  selectStyle(style: 'stock' | 'crypto' | 'forex'): void {
    this.onChartDeselect();
    this.currentStyle.set(style);
    switch (style) {
      case 'stock':
        this.chartData.set(this.getStockData());
        break;
      case 'crypto':
        this.chartData.set(this.getCryptoData());
        break;
      case 'forex':
        this.chartData.set(this.getForexData());
        break;
    }
    this.animateChart();
  }

  animateChart(): void {
    const chart = this.candlestickChartRef?.nativeElement;
    if (chart) {
      chart.animate({ durationX: 1000, durationY: 1000, easingX: 'EaseOutQuad' });
    }
  }

  // Selection event handlers
  onChartSelect(event: ChartSelectEvent): void {
    console.log('[CandlestickChartDemo] Selected:', event.data);
    this._selectedData.set(event.data);
  }

  onChartDeselect(): void {
    console.log('[CandlestickChartDemo] Deselected');
    this._selectedData.set(null);
  }

  clearSelection(): void {
    const chart = this.candlestickChartRef?.nativeElement;
    if (chart) {
      chart.clearHighlights();
    }
    this._selectedData.set(null);
  }

  highlightRandom(): void {
    const chart = this.candlestickChartRef?.nativeElement;
    if (chart) {
      const randomX = Math.floor(Math.random() * 20);
      chart.highlightValues([{ x: randomX, dataSetIndex: 0 }]);
    }
  }

  randomizeData(): void {
    this.selectStyle(this.currentStyle());
  }

  goBack(): void {
    this.routerExtensions.back();
  }

  private generateOHLCData(startPrice: number, count: number, volatility: number): any[] {
    const data = [];
    let currentPrice = startPrice;

    for (let i = 0; i < count; i++) {
      const change = (Math.random() - 0.5) * volatility;
      const open = currentPrice;
      const close = open + change;
      const high = Math.max(open, close) + Math.random() * (volatility / 2);
      const low = Math.min(open, close) - Math.random() * (volatility / 2);

      data.push({
        x: i,
        shadowH: high,
        shadowL: low,
        open: open,
        close: close,
      });

      currentPrice = close;
    }
    return data;
  }

  private getStockData(): CandleChartData {
    return {
      dataSets: [
        {
          values: this.generateOHLCData(175, 25, 8),
          label: 'AAPL',
          config: {
            shadowColorSameAsCandle: true,
            shadowWidth: 1.5,
            decreasingColor: '#EF4444',
            decreasingPaintStyle: 'FILL',
            increasingColor: '#10B981',
            increasingPaintStyle: 'FILL',
            neutralColor: '#6B7280',
            drawValues: false,
            highlightEnabled: true,
            highlightLineWidth: 1,
          },
        },
      ],
    };
  }

  private getCryptoData(): CandleChartData {
    return {
      dataSets: [
        {
          values: this.generateOHLCData(42500, 25, 1500),
          label: 'BTC/USD',
          config: {
            shadowColorSameAsCandle: true,
            shadowWidth: 1,
            decreasingColor: '#DC2626',
            decreasingPaintStyle: 'FILL',
            increasingColor: '#16A34A',
            increasingPaintStyle: 'FILL',
            neutralColor: '#9CA3AF',
            drawValues: false,
            highlightEnabled: true,
          },
        },
      ],
    };
  }

  private getForexData(): CandleChartData {
    return {
      dataSets: [
        {
          values: this.generateOHLCData(1.085, 25, 0.008),
          label: 'EUR/USD',
          config: {
            shadowColorSameAsCandle: false,
            shadowColor: '#6B7280',
            shadowWidth: 1,
            decreasingColor: '#F87171',
            decreasingPaintStyle: 'STROKE',
            increasingColor: '#4ADE80',
            increasingPaintStyle: 'STROKE',
            neutralColor: '#A1A1AA',
            drawValues: false,
            highlightEnabled: true,
          },
        },
      ],
    };
  }
}
