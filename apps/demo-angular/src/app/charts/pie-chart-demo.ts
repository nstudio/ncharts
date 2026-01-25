/**
 * Pie Chart Demo Component
 * Demonstrates pie/donut charts with various configurations
 */
import { Component, NO_ERRORS_SCHEMA, ChangeDetectionStrategy, signal, ViewChild, ElementRef, computed, inject } from '@angular/core';
import { NativeScriptCommonModule, RouterExtensions } from '@nativescript/angular';
import { PieChartDirective } from '@nstudio/ncharts/angular';
import type { PieChartData, ChartAnimation, LegendConfig, ChartSelectData, ChartSelectEvent } from '@nstudio/ncharts';
import { ThemeService } from '../utils';

@Component({
  selector: 'PieChartDemo',
  template: `
    <ActionBar row="0" flat="true" class="bg-slate-50 dark:bg-slate-900">
      <NavigationButton text="" android.systemIcon="ic_menu_back" (tap)="goBack()"></NavigationButton>
      <Label text="Pie Charts" class="text-lg font-bold text-slate-700 dark:text-slate-100"></Label>
    </ActionBar>
    <GridLayout rows="auto, *, auto, auto" class="bg-slate-50 dark:bg-slate-900">
      <!-- Selected Value Display -->
      <GridLayout row="0" columns="*, auto" class="p-4 pb-0">
        <StackLayout col="0">
          <label class="text-xs text-slate-500 dark:text-slate-400" text="TAP ON CHART TO SELECT"></label>
          <label class="text-lg font-bold text-slate-800 dark:text-white" [text]="selectedValue()"> </label>
        </StackLayout>
        <GridLayout col="1" class="w-8 h-8 rounded-full bg-orange-500" visibility="{{ hasSelection() ? 'visible' : 'collapsed' }}" (tap)="clearSelection()">
          <label text="✕" class="text-white text-center align-middle text-sm font-bold"></label>
        </GridLayout>
      </GridLayout>

      <!-- Chart Container -->
      <GridLayout row="1" class="m-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4">
        <PieChart #pieChart [data]="chartData()" [legend]="legendConfig" [animation]="animationConfig()" [chartDescription]="{ text: getChartTitle(), enabled: true }" [drawHole]="isDonut()" [holeRadius]="holeRadius()" [transparentCircleRadius]="holeRadius() + 5" holeColor="#FFFFFF" [drawCenterText]="isDonut()" [centerText]="centerText()" centerTextColor="#374151" [centerTextSize]="18" [drawSliceText]="true" [usePercentValues]="true" [rotationEnabled]="true" [rotationAngle]="rotationAngle()" [highlightPerTapEnabled]="true" [chartBackgroundColor]="chartBgColor()" [chartGridBackgroundColor]="chartBgColor()" (select)="onChartSelect($event)" (deselect)="onChartDeselect()" class="h-full"> </PieChart>
      </GridLayout>

      <!-- Style Selector -->
      <SegmentedBar row="2" [selectedIndex]="selectedStyleIndex()" (selectedIndexChange)="onStyleIndexChange($event)" [selectedTextColor]="segmentedBarTextColor()" class="m-4 text-sm">
        <SegmentedBarItem title="Market"></SegmentedBarItem>
        <SegmentedBarItem title="Budget"></SegmentedBarItem>
        <SegmentedBarItem title="Traffic"></SegmentedBarItem>
      </SegmentedBar>

      <!-- Controls -->
      <GridLayout row="3" columns="*, *, *" class="p-4 pt-0">
        <Button col="0" text="Spin" (tap)="spinChart()" class="bg-orange-500 text-white rounded-xl m-1 text-sm"></Button>
        <Button col="1" text="Donut" (tap)="toggleDonut()" class="bg-pink-500 text-white rounded-xl m-1 text-sm"></Button>
        <Button col="2" text="Animate" (tap)="animateChart()" class="bg-purple-500 text-white rounded-xl m-1 text-sm"></Button>
      </GridLayout>
    </GridLayout>
  `,
  imports: [NativeScriptCommonModule, PieChartDirective],
  schemas: [NO_ERRORS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieChartDemo {
  @ViewChild('pieChart') pieChartRef!: ElementRef;
  themeService = inject(ThemeService);

  // Theme-reactive colors
  segmentedBarTextColor = computed(() => this.themeService.colors().textPrimary);
  chartBgColor = computed(() => this.themeService.colors().bgChart);

  currentStyle = signal<'market' | 'budget' | 'traffic'>('market');
  isDonut = signal(true);
  holeRadius = signal(45);
  rotationAngle = signal(0);
  centerText = signal('Market\nShare');
  chartData = signal<PieChartData>(this.getMarketData());
  animationConfig = signal<ChartAnimation>({ durationX: 1400, durationY: 1400, easingX: 'EaseOutBounce' });

  // Selection state
  private _selectedData = signal<ChartSelectData | null>(null);

  selectedValue = computed(() => {
    const data = this._selectedData();
    if (!data) return 'No selection';

    const chartData = this.chartData();
    const pieEntry = chartData.dataSets[0]?.values[data.dataIndex];
    const label = typeof pieEntry === 'object' && pieEntry?.label ? pieEntry.label : `Slice ${data.dataIndex + 1}`;

    return `${label}: ${data.y.toFixed(1)}%`;
  });

  hasSelection = computed(() => this._selectedData() !== null);

  private styleOrder: ('market' | 'budget' | 'traffic')[] = ['market', 'budget', 'traffic'];
  selectedStyleIndex = computed(() => this.styleOrder.indexOf(this.currentStyle()));

  legendConfig: LegendConfig = {
    enabled: true,
    horizontalAlignment: 'CENTER',
    verticalAlignment: 'BOTTOM',
    orientation: 'HORIZONTAL',
    form: 'CIRCLE',
    textSize: 10,
  };

  constructor(private routerExtensions: RouterExtensions) {}

  onStyleIndexChange(event: any): void {
    const index = event.value ?? event.object?.selectedIndex ?? 0;
    const style = this.styleOrder[index];
    if (style) {
      this.selectStyle(style);
    }
  }

  selectStyle(style: 'market' | 'budget' | 'traffic'): void {
    this.onChartDeselect();
    this.currentStyle.set(style);
    switch (style) {
      case 'market':
        this.centerText.set('Market\nShare');
        this.chartData.set(this.getMarketData());
        break;
      case 'budget':
        this.centerText.set('Monthly\nBudget');
        this.chartData.set(this.getBudgetData());
        break;
      case 'traffic':
        this.centerText.set('Web\nTraffic');
        this.chartData.set(this.getTrafficData());
        break;
    }
    this.animateChart();
  }

  toggleDonut(): void {
    if (this.isDonut()) {
      this.holeRadius.set(0);
      this.isDonut.set(false);
    } else {
      this.holeRadius.set(45);
      this.isDonut.set(true);
    }
  }

  spinChart(): void {
    this.rotationAngle.set(this.rotationAngle() + 90);
  }

  animateChart(): void {
    this.animationConfig.set({ durationX: 1400, durationY: 1400, easingX: 'EaseInOutCubic' });
  }

  // Selection event handlers
  onChartSelect(event: ChartSelectEvent): void {
    console.log('[PieChartDemo] Selected:', event.data);
    this._selectedData.set(event.data);
  }

  onChartDeselect(): void {
    console.log('[PieChartDemo] Deselected');
    this._selectedData.set(null);
  }

  clearSelection(): void {
    const chart = this.pieChartRef?.nativeElement;
    if (chart) {
      chart.clearHighlights();
    }
    this._selectedData.set(null);
  }

  getChartTitle(): string {
    const titles = {
      market: 'Market Share Distribution',
      budget: 'Monthly Expense Breakdown',
      traffic: 'Website Traffic Sources',
    };
    return titles[this.currentStyle()];
  }

  goBack(): void {
    this.routerExtensions.back();
  }

  private getMarketData(): PieChartData {
    return {
      dataSets: [
        {
          label: 'Market Share',
          values: [
            { value: 35, label: 'Product A' },
            { value: 25, label: 'Product B' },
            { value: 20, label: 'Product C' },
            { value: 12, label: 'Product D' },
            { value: 8, label: 'Others' },
          ],
          config: {
            colors: ['#F59E0B', '#EF4444', '#8B5CF6', '#3B82F6', '#6B7280'],
            sliceSpace: 3,
            selectionShift: 8,
            drawValues: true,
            valueTextSize: 12,
            valueTextColor: '#FFFFFF',
          },
        },
      ],
    };
  }

  private getBudgetData(): PieChartData {
    return {
      dataSets: [
        {
          label: 'Monthly Budget',
          values: [
            { value: 1800, label: 'Housing' },
            { value: 600, label: 'Food' },
            { value: 400, label: 'Transport' },
            { value: 300, label: 'Utilities' },
            { value: 250, label: 'Entertainment' },
            { value: 200, label: 'Savings' },
            { value: 150, label: 'Other' },
          ],
          config: {
            colors: ['#10B981', '#06B6D4', '#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#6B7280'],
            sliceSpace: 2,
            selectionShift: 6,
            drawValues: true,
            valueTextSize: 11,
            valueTextColor: '#FFFFFF',
          },
        },
      ],
    };
  }

  private getTrafficData(): PieChartData {
    return {
      dataSets: [
        {
          label: 'Traffic Sources',
          values: [
            { value: 42, label: 'Organic Search' },
            { value: 28, label: 'Direct' },
            { value: 18, label: 'Social Media' },
            { value: 8, label: 'Referral' },
            { value: 4, label: 'Email' },
          ],
          config: {
            colors: ['#7C3AED', '#A855F7', '#C084FC', '#D8B4FE', '#EDE9FE'],
            sliceSpace: 4,
            selectionShift: 10,
            drawValues: true,
            valueTextSize: 12,
            valueTextColor: '#FFFFFF',
          },
        },
      ],
    };
  }
}
