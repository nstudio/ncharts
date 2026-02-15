import { describe, it, expect, beforeEach, vi } from 'vitest';
import { applyNoDataTextColorAndroid, applyLegendAndroid, applyXAxisAndroid, applyYAxisDualAndroid, applyDescriptionAndroid } from './style-helpers.android';

vi.mock('@nativescript/core', () => {
  class MockColor {
    public ios: any;
    public android: number;

    constructor(_value: string | number) {
      this.ios = { mockUIColor: true };
      this.android = 0xff112233;
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

describe('style-helpers Android', () => {
  beforeEach(() => {
    (globalThis as any).com = {
      github: {
        mikephil: {
          charting: {
            components: {
              Legend: {
                LegendHorizontalAlignment: { LEFT: 'LEFT', CENTER: 'CENTER', RIGHT: 'RIGHT' },
                LegendVerticalAlignment: { TOP: 'TOP', CENTER: 'CENTER', BOTTOM: 'BOTTOM' },
                LegendOrientation: { HORIZONTAL: 'HORIZONTAL', VERTICAL: 'VERTICAL' },
                LegendDirection: { LEFT_TO_RIGHT: 'LTR', RIGHT_TO_LEFT: 'RTL' },
                LegendForm: { NONE: 'NONE', EMPTY: 'EMPTY', DEFAULT: 'DEFAULT', SQUARE: 'SQUARE', CIRCLE: 'CIRCLE', LINE: 'LINE' },
              },
              XAxis: {
                XAxisPosition: {
                  TOP: 'TOP',
                  BOTTOM: 'BOTTOM',
                  BOTH_SIDED: 'BOTH_SIDED',
                  TOP_INSIDE: 'TOP_INSIDE',
                  BOTTOM_INSIDE: 'BOTTOM_INSIDE',
                },
              },
              YAxis: {
                YAxisLabelPosition: { OUTSIDE_CHART: 'OUTSIDE', INSIDE_CHART: 'INSIDE' },
              },
            },
          },
        },
      },
    };
  });

  it('applies no data text color', () => {
    const nativeChart: any = { setNoDataTextColor: vi.fn() };
    applyNoDataTextColorAndroid(nativeChart, '#FFFFFF');
    expect(nativeChart.setNoDataTextColor).toHaveBeenCalledWith(0xff112233);
  });

  it('applies legend styling and mappings', () => {
    const nativeLegend: any = {
      setEnabled: vi.fn(),
      setTextColor: vi.fn(),
      setTextSize: vi.fn(),
      setHorizontalAlignment: vi.fn(),
      setVerticalAlignment: vi.fn(),
      setOrientation: vi.fn(),
      setDirection: vi.fn(),
      setForm: vi.fn(),
      setWordWrapEnabled: vi.fn(),
      setMaxSizePercent: vi.fn(),
      setDrawInside: vi.fn(),
      setFormSize: vi.fn(),
      setXEntrySpace: vi.fn(),
      setYEntrySpace: vi.fn(),
      setFormToTextSpace: vi.fn(),
    };
    const nativeChart: any = { getLegend: () => nativeLegend };

    applyLegendAndroid(nativeChart, {
      enabled: true,
      textColor: '#FFFFFF',
      textSize: 14,
      horizontalAlignment: 'RIGHT',
      verticalAlignment: 'TOP',
      orientation: 'VERTICAL',
      direction: 'RIGHT_TO_LEFT',
      form: 'CIRCLE',
    });

    expect(nativeLegend.setEnabled).toHaveBeenCalledWith(true);
    expect(nativeLegend.setTextColor).toHaveBeenCalledWith(0xff112233);
    expect(nativeLegend.setTextSize).toHaveBeenCalledWith(14);
    expect(nativeLegend.setHorizontalAlignment).toHaveBeenCalledWith('RIGHT');
    expect(nativeLegend.setVerticalAlignment).toHaveBeenCalledWith('TOP');
    expect(nativeLegend.setOrientation).toHaveBeenCalledWith('VERTICAL');
    expect(nativeLegend.setDirection).toHaveBeenCalledWith('RTL');
    expect(nativeLegend.setForm).toHaveBeenCalledWith('CIRCLE');
  });

  it('applies x axis styling and position mapping', () => {
    const nativeXAxis: any = {
      setEnabled: vi.fn(),
      setTextColor: vi.fn(),
      setTextSize: vi.fn(),
      setPosition: vi.fn(),
      setLabelCount: vi.fn(),
      setDrawGridLines: vi.fn(),
      setDrawAxisLine: vi.fn(),
      setDrawLabels: vi.fn(),
      setGridColor: vi.fn(),
      setGridLineWidth: vi.fn(),
      setAxisLineColor: vi.fn(),
      setAxisLineWidth: vi.fn(),
      setAxisMinimum: vi.fn(),
      setAxisMaximum: vi.fn(),
      setGranularity: vi.fn(),
      setGranularityEnabled: vi.fn(),
      setCenterAxisLabels: vi.fn(),
      setLabelRotationAngle: vi.fn(),
      setAvoidFirstLastClipping: vi.fn(),
    };
    const nativeChart: any = { getXAxis: () => nativeXAxis };

    applyXAxisAndroid(nativeChart, {
      enabled: true,
      textColor: '#FFFFFF',
      textSize: 12,
      position: 'TOP_INSIDE',
      labelCount: 5,
      labelCountForce: true,
    });

    expect(nativeXAxis.setEnabled).toHaveBeenCalledWith(true);
    expect(nativeXAxis.setTextColor).toHaveBeenCalledWith(0xff112233);
    expect(nativeXAxis.setTextSize).toHaveBeenCalledWith(12);
    expect(nativeXAxis.setPosition).toHaveBeenCalledWith('TOP_INSIDE');
    expect(nativeXAxis.setLabelCount).toHaveBeenCalledWith(5, true);
  });

  it('applies dual y-axis styling including zero line and position mapping', () => {
    const leftAxis: any = {
      setTextColor: vi.fn(),
      setPosition: vi.fn(),
      setDrawZeroLine: vi.fn(),
      setZeroLineWidth: vi.fn(),
      setZeroLineColor: vi.fn(),
      setEnabled: vi.fn(),
      setDrawGridLines: vi.fn(),
      setDrawAxisLine: vi.fn(),
      setDrawLabels: vi.fn(),
      setTextSize: vi.fn(),
      setGridColor: vi.fn(),
      setGridLineWidth: vi.fn(),
      setAxisLineColor: vi.fn(),
      setAxisLineWidth: vi.fn(),
      setAxisMinimum: vi.fn(),
      setAxisMaximum: vi.fn(),
      setLabelCount: vi.fn(),
      setGranularity: vi.fn(),
      setGranularityEnabled: vi.fn(),
      setInverted: vi.fn(),
      setSpaceTop: vi.fn(),
      setSpaceBottom: vi.fn(),
    };
    const rightAxis: any = {
      setTextColor: vi.fn(),
      setPosition: vi.fn(),
      setEnabled: vi.fn(),
      setDrawGridLines: vi.fn(),
      setDrawAxisLine: vi.fn(),
      setDrawLabels: vi.fn(),
      setTextSize: vi.fn(),
      setGridColor: vi.fn(),
      setGridLineWidth: vi.fn(),
      setAxisLineColor: vi.fn(),
      setAxisLineWidth: vi.fn(),
      setAxisMinimum: vi.fn(),
      setAxisMaximum: vi.fn(),
      setLabelCount: vi.fn(),
      setGranularity: vi.fn(),
      setGranularityEnabled: vi.fn(),
      setInverted: vi.fn(),
      setSpaceTop: vi.fn(),
      setSpaceBottom: vi.fn(),
      setDrawZeroLine: vi.fn(),
      setZeroLineWidth: vi.fn(),
      setZeroLineColor: vi.fn(),
    };
    const nativeChart: any = {
      getAxisLeft: () => leftAxis,
      getAxisRight: () => rightAxis,
    };

    applyYAxisDualAndroid(nativeChart, {
      left: {
        textColor: '#FFFFFF',
        position: 'INSIDE_CHART',
        zeroLine: { enabled: true, lineWidth: 2, lineColor: '#00FF00' },
      },
      right: {
        textColor: '#FF00FF',
        position: 'OUTSIDE_CHART',
      },
    });

    expect(leftAxis.setTextColor).toHaveBeenCalledWith(0xff112233);
    expect(leftAxis.setPosition).toHaveBeenCalledWith('INSIDE');
    expect(leftAxis.setDrawZeroLine).toHaveBeenCalledWith(true);
    expect(leftAxis.setZeroLineWidth).toHaveBeenCalledWith(2);
    expect(leftAxis.setZeroLineColor).toHaveBeenCalledWith(0xff112233);

    expect(rightAxis.setTextColor).toHaveBeenCalledWith(0xff112233);
    expect(rightAxis.setPosition).toHaveBeenCalledWith('OUTSIDE');
  });

  it('applies description styling and optional position', () => {
    const nativeDescription: any = {
      setText: vi.fn(),
      setTextColor: vi.fn(),
      setTextSize: vi.fn(),
      setPosition: vi.fn(),
    };
    const nativeChart: any = { getDescription: () => nativeDescription };

    applyDescriptionAndroid(nativeChart, {
      text: 'Sample',
      textColor: '#FFFFFF',
      textSize: 16,
      positionX: 10,
      positionY: 20,
    });

    expect(nativeDescription.setText).toHaveBeenCalledWith('Sample');
    expect(nativeDescription.setTextColor).toHaveBeenCalledWith(0xff112233);
    expect(nativeDescription.setTextSize).toHaveBeenCalledWith(16);
    expect(nativeDescription.setPosition).toHaveBeenCalledWith(10, 20);
  });
});
