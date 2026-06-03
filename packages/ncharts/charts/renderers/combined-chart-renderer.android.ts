import { BarDataSetConfig, PlotBandConfig } from '../../common';
import { NSBarChartRenderer } from './bar-chart-renderer.android';
import { PlotBandDrawer } from './plotband-drawer.android';

// ATTENTION: on Android do not updateBarConfigs on existing renderer but recreate it.
// calling createRenderes on already active chart will crash
@NativeClass()
export class NSCombinedChartRenderer extends com.github.mikephil.charting.renderer.CombinedChartRenderer {
  private _configs?: BarDataSetConfig[];
  private _plotBandDrawer: PlotBandDrawer;
  private _prevRenderer: any;
  private _chart: any;

  constructor(chart: any, animator: any, viewPortHandler: any, configs?: BarDataSetConfig[], plotBands?: PlotBandConfig[]) {
    super(chart, animator, viewPortHandler);
    this._chart = chart;
    this._configs = configs;
    this._plotBandDrawer = new PlotBandDrawer(chart, plotBands);
    this.createRenderers();
  }

  static create(chartView: any, configs?: BarDataSetConfig[], plotBands?: PlotBandConfig[]): NSCombinedChartRenderer {
    const chart = chartView?.android ?? chartView?.nativeView?.android ?? chartView;

    const context = chart.getContext() as android.content.Context;
    com.github.mikephil.charting.utils.Utils.init(context);

    const r = new NSCombinedChartRenderer(chart, chart.getAnimator(), chart.getViewPortHandler(), configs, plotBands);

    r._prevRenderer = chart.getRenderer();
    chart.setRenderer(r);
    chart.invalidate();
    return r;
  }

  public detach(): void {
    if (this._chart && this._prevRenderer) {
      this._chart.setRenderer(this._prevRenderer);
      this._prevRenderer = null;
      this._chart.invalidate();
    }
  }

  public updatePlotBands(plotBands?: PlotBandConfig[]): void {
    this._plotBandDrawer.update(plotBands);
    this._chart?.invalidate();
  }

  public createRenderers(): void {
    super.createRenderers();
    // super constructor calls createRenderers which is before our custom setup, hence check if this._chart already exists
    if (!this.mRenderers || !this._chart) return;

    const size = this.mRenderers.size();
    for (let i = 0; i < size; i++) {
      const currentRenderer = this.mRenderers.get(i);

      if (currentRenderer instanceof com.github.mikephil.charting.renderer.BarChartRenderer && !(currentRenderer instanceof NSBarChartRenderer)) {
        const customBarRenderer = new NSBarChartRenderer(this._chart, this.mAnimator, this.mViewPortHandler, this._configs);
        this.mRenderers.set(i, customBarRenderer);
      }
    }
  }

  public drawData(c: any): void {
    this._plotBandDrawer.drawFillsAndTextBelowData(c);
    super.drawData(c);
    this._plotBandDrawer.drawTextAboveData(c);
  }
}
