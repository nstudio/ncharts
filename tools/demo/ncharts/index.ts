import { DemoSharedBase } from '../utils';
import type { LineChartData, BarChartData, PieChartData } from '@nstudio/ncharts';

export class DemoSharedNcharts extends DemoSharedBase {
  testIt() {
    console.log('test ncharts!');
  }

  /**
   * Generate sample line chart data
   */
  getLineChartData(): LineChartData {
    return {
      dataSets: [
        {
          label: '2023 Sales',
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
            { x: 9, y: 95 },
            { x: 10, y: 102 },
            { x: 11, y: 115 },
          ],
          config: {
            color: '#4A90D9',
            lineWidth: 2.5,
            drawCircles: true,
            circleRadius: 4,
            circleColor: '#4A90D9',
            drawFilled: true,
            fillColor: '#4A90D9',
            fillAlpha: 50,
            mode: 'CUBIC_BEZIER',
            drawValues: false,
          },
        },
        {
          label: '2024 Sales',
          values: [
            { x: 0, y: 55 },
            { x: 1, y: 62 },
            { x: 2, y: 58 },
            { x: 3, y: 75 },
            { x: 4, y: 88 },
            { x: 5, y: 82 },
            { x: 6, y: 95 },
            { x: 7, y: 105 },
            { x: 8, y: 98 },
            { x: 9, y: 112 },
            { x: 10, y: 125 },
            { x: 11, y: 138 },
          ],
          config: {
            color: '#50C878',
            lineWidth: 2.5,
            drawCircles: true,
            circleRadius: 4,
            circleColor: '#50C878',
            drawFilled: true,
            fillColor: '#50C878',
            fillAlpha: 50,
            mode: 'CUBIC_BEZIER',
            drawValues: false,
          },
        },
      ],
    };
  }

  /**
   * Generate sample bar chart data
   */
  getBarChartData(): BarChartData {
    return {
      dataSets: [
        {
          label: 'Revenue',
          values: [
            { x: 0, y: 250000 },
            { x: 1, y: 320000 },
            { x: 2, y: 280000 },
            { x: 3, y: 410000 },
          ],
          config: {
            colors: ['#4A90D9', '#50C878', '#FFB347', '#FF6B6B'],
            drawValues: true,
            valueTextSize: 10,
            valueTextColor: '#333333',
          },
        },
      ],
    };
  }

  /**
   * Generate sample pie chart data
   */
  getPieChartData(): PieChartData {
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
            colors: ['#4A90D9', '#50C878', '#FFB347', '#FF6B6B', '#9B59B6'],
            sliceSpace: 2,
            drawValues: true,
            valueTextSize: 12,
            valueTextColor: '#FFFFFF',
          },
        },
      ],
    };
  }
}
