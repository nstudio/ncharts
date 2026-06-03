import { PlotBandConfig } from '../../common';
import { PlotBandDrawer } from './plotband-drawer.android';

declare const com: any;

@NativeClass()
export class LineChartPlotBandsRenderer extends com.github.mikephil.charting.renderer.LineChartRenderer {
  private _chart: any;
  private _prevRenderer: any;
  private _plotBandDrawer: PlotBandDrawer;

  constructor(chart: any, animator: any, viewPortHandler: any, cfg?: PlotBandConfig[]) {
    super(chart, animator, viewPortHandler);
    this._chart = chart;
    this._plotBandDrawer = new PlotBandDrawer(chart, cfg);
  }

  static create(chartView: any, cfg: PlotBandConfig[]): LineChartPlotBandsRenderer {
    const chart = chartView?.android ?? chartView?.nativeView?.android ?? chartView;

    const r = new LineChartPlotBandsRenderer(chart, chart.getAnimator(), chart.getViewPortHandler(), cfg);

    r._prevRenderer = chart.getRenderer ? chart.getRenderer() : (chart.renderer ?? null);

    chart.setRenderer(r);
    chart.invalidate();
    return r;
  }

  update(cfg: PlotBandConfig[]): void {
    this._plotBandDrawer.update(cfg);
    this._chart.invalidate();
  }

  detach(): void {
    if (this._prevRenderer) {
      this._chart.setRenderer(this._prevRenderer);
      this._chart.invalidate();
    }
  }

  drawData(c: any): void {
    this._plotBandDrawer.drawFillsAndTextBelowData(c);
    super.drawData(c);
    this._plotBandDrawer.drawTextAboveData(c);
  }
}
