import { describe, it, expect, beforeEach, vi } from 'vitest';
import { applyNoDataTextColorIOS, applyLegendIOS, applyXAxisIOS, applyYAxisDualIOS, applyDescriptionIOS } from './style-helpers.ios';

vi.mock('@nativescript/core', () => {
  class MockColor {
    public ios: any;
    public android: number;

    constructor(_value: string | number) {
      this.ios = { mockUIColor: true };
      this.android = 0xff000000;
    }
  }

  class MockView {}

  class MockProperty {
    constructor(_options: any) {}
    register(_target: any) {}
  }

  return {
    Color: MockColor,
    View: MockView,
    Property: MockProperty,
    CSSType: () => (target: any) => target,
  };
});

describe('style-helpers iOS', () => {
  beforeEach(() => {
    (globalThis as any).ChartLegendHorizontalAlignment = { Left: 0, Center: 1, Right: 2 };
    (globalThis as any).ChartLegendVerticalAlignment = { Top: 0, Center: 1, Bottom: 2 };
    (globalThis as any).ChartLegendOrientation = { Horizontal: 0, Vertical: 1 };
    (globalThis as any).ChartLegendDirection = { LeftToRight: 0, RightToLeft: 1 };
    (globalThis as any).ChartLegendForm = { None: 0, Empty: 1, Default: 2, Square: 3, Circle: 4, Line: 5 };
    (globalThis as any).XAxisLabelPosition = { Top: 0, Bottom: 1, BothSided: 2, TopInside: 3, BottomInside: 4 };
    (globalThis as any).YAxisLabelPosition = { OutsideChart: 0, InsideChart: 1 };
  });

  it('applies no data text color', () => {
    const nativeChart: any = {};
    applyNoDataTextColorIOS(nativeChart, '#FFFFFF');
    expect(nativeChart.noDataTextColor).toEqual({ mockUIColor: true });
  });

  it('applies legend styling and mappings', () => {
    const nativeLegend: any = {
      font: { fontWithSize: (size: number) => ({ size }) },
    };
    const nativeChart: any = { legend: nativeLegend };

    applyLegendIOS(nativeChart, {
      enabled: true,
      textColor: '#FFFFFF',
      textSize: 14,
      horizontalAlignment: 'RIGHT',
      verticalAlignment: 'TOP',
      orientation: 'VERTICAL',
      direction: 'RIGHT_TO_LEFT',
      form: 'CIRCLE',
    });

    expect(nativeLegend.enabled).toBe(true);
    expect(nativeLegend.textColor).toEqual({ mockUIColor: true });
    expect(nativeLegend.font).toEqual({ size: 14 });
    expect(nativeLegend.horizontalAlignment).toBe(2);
    expect(nativeLegend.verticalAlignment).toBe(0);
    expect(nativeLegend.orientation).toBe(1);
    expect(nativeLegend.direction).toBe(1);
    expect(nativeLegend.form).toBe(4);
  });

  it('applies x axis styling and position mapping', () => {
    const nativeXAxis: any = {
      labelFont: { fontWithSize: (size: number) => ({ size }) },
      setLabelCountForce: vi.fn(),
    };
    const nativeChart: any = { xAxis: nativeXAxis };
    const retainedChartObjects: any[] = [];
    applyXAxisIOS(
      nativeChart,
      {
        enabled: true,
        textColor: '#FFFFFF',
        textSize: 12,
        position: 'TOP_INSIDE',
        labelCount: 6,
        labelCountForce: true,
      },
      retainedChartObjects,
    );

    expect(nativeXAxis.enabled).toBe(true);
    expect(nativeXAxis.labelTextColor).toEqual({ mockUIColor: true });
    expect(nativeXAxis.labelFont).toEqual({ size: 12 });
    expect(nativeXAxis.labelPosition).toBe(3);
    expect(nativeXAxis.setLabelCountForce).toHaveBeenCalledWith(6, true);
  });

  it('applies dual y-axis styling including zero line', () => {
    const leftAxis: any = {
      labelFont: { fontWithSize: (size: number) => ({ size }) },
      setLabelCountForce: vi.fn(),
    };
    const rightAxis: any = {
      labelFont: { fontWithSize: (size: number) => ({ size }) },
      setLabelCountForce: vi.fn(),
    };
    const nativeChart: any = { leftAxis, rightAxis };
    const retainedChartObjects: any[] = [];
    applyYAxisDualIOS(
      nativeChart,
      {
        left: {
          textColor: '#FFFFFF',
          textSize: 11,
          position: 'INSIDE_CHART',
          zeroLine: { enabled: true, lineWidth: 2, lineColor: '#00FF00' },
        },
        right: {
          textColor: '#FF00FF',
          position: 'OUTSIDE_CHART',
        },
      },
      retainedChartObjects,
    );

    expect(leftAxis.labelTextColor).toEqual({ mockUIColor: true });
    expect(leftAxis.labelFont).toEqual({ size: 11 });
    expect(leftAxis.labelPosition).toBe(1);
    expect(leftAxis.drawZeroLineEnabled).toBe(true);
    expect(leftAxis.zeroLineWidth).toBe(2);
    expect(leftAxis.zeroLineColor).toEqual({ mockUIColor: true });

    expect(rightAxis.labelTextColor).toEqual({ mockUIColor: true });
    expect(rightAxis.labelPosition).toBe(0);
  });

  it('applies description styling', () => {
    const chartDescription: any = {
      font: { fontWithSize: (size: number) => ({ size }) },
    };
    const nativeChart: any = { chartDescription };

    applyDescriptionIOS(nativeChart, {
      text: 'Sample',
      textColor: '#FFFFFF',
      textSize: 16,
    });

    expect(chartDescription.text).toBe('Sample');
    expect(chartDescription.textColor).toEqual({ mockUIColor: true });
    expect(chartDescription.font).toEqual({ size: 16 });
  });
});
