import { PlotBandConfig } from '../../common';
import { PlotBandDrawer } from './plotband-drawer.ios';

@NativeClass()
export class LineChartPlotBandsRenderer extends LineChartRenderer {
  private _chart: any;
  private _prevRenderer: any;
  private _plotBandDrawer: PlotBandDrawer;

  static create(chartView: any, cfg: PlotBandConfig[]): LineChartPlotBandsRenderer {
    const chart = chartView?.ios ?? chartView?.nativeView?.ios ?? chartView;

    const r = LineChartPlotBandsRenderer.alloc().initWithDataProviderAnimatorViewPortHandler(chart, chart.chartAnimator, chart.viewPortHandler) as LineChartPlotBandsRenderer;

    r._chart = chart;
    r._prevRenderer = chart.renderer;
    r._plotBandDrawer = new PlotBandDrawer(chart, cfg);

    chart.renderer = r;
    chart.setNeedsDisplay();
    return r;
  }

  update(cfg: PlotBandConfig[]): void {
    this._plotBandDrawer.update(cfg);
    this._chart.setNeedsDisplay();
  }

  detach(): void {
    this._chart.renderer = this._prevRenderer;
    this._chart.setNeedsDisplay();
  }

  drawDataWithContext(ctx: any): void {
    this._plotBandDrawer.drawFillsAndTextBelowData(ctx);
    super.drawDataWithContext(ctx);
    this._plotBandDrawer.drawTextAboveData(ctx);
  }
}
