import { BarDataSetConfig, PlotBandConfig } from '../../common';
import { NSBarChartRenderer } from './bar-chart-renderer.ios';
import { PlotBandDrawer } from './plotband-drawer.ios';

@NativeClass()
export class NSCombinedChartRenderer extends CombinedChartRenderer {
  private _configs?: BarDataSetConfig[];
  private _plotBandDrawer: PlotBandDrawer;
  private _prevRenderer: ChartDataRenderer | null = null;

  static create(chartView: any, configs?: BarDataSetConfig[], plotBands?: PlotBandConfig[]): NSCombinedChartRenderer {
    const chart = chartView?.ios ?? chartView?.nativeView?.ios ?? chartView;

    const r = NSCombinedChartRenderer.alloc().initWithChartAnimatorViewPortHandler(chart, chart.chartAnimator, chart.viewPortHandler) as NSCombinedChartRenderer;

    r._configs = configs;
    r._plotBandDrawer = new PlotBandDrawer(chart, plotBands);

    r._prevRenderer = chart.renderer;

    chart.renderer = r;
    chart.setNeedsDisplay();

    return r;
  }

  public updatePlotBands(plotBands?: PlotBandConfig[]): void {
    this._plotBandDrawer.update(plotBands);
    this.chart?.setNeedsDisplay();
  }

  public updateBarConfigs(configs?: BarDataSetConfig[]): void {
    this._configs = configs;
    this.chart?.setNeedsDisplay();
  }

  public detach(): void {
    if (this.chart && this._prevRenderer) {
      this.chart.renderer = this._prevRenderer;
      this._prevRenderer = null;
      this.chart.setNeedsDisplay();
    }
  }

  public initBuffers(): void {
    if (this.subRenderers) {
      let needsUpdate = false;
      const newRenderers = NSMutableArray.alloc().initWithCapacity(this.subRenderers.count);

      for (let i = 0; i < this.subRenderers.count; i++) {
        const r = this.subRenderers.objectAtIndex(i);

        if (r instanceof BarChartRenderer && !(r instanceof NSBarChartRenderer)) {
          newRenderers.addObject(NSBarChartRenderer.createRenderer(this.chart, this._configs));
          needsUpdate = true;
        } else {
          newRenderers.addObject(r);
        }
      }

      if (needsUpdate) {
        this.subRenderers = newRenderers as any;
      }
    }

    super.initBuffers();
  }

  public drawDataWithContext(ctx: any): void {
    this._plotBandDrawer.drawFillsAndTextBelowData(ctx);
    super.drawDataWithContext(ctx);
    this._plotBandDrawer.drawTextAboveData(ctx);
  }
}
