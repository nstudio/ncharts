# @nstudio/ncharts

Native iOS/Android charting library for NativeScript using [DGCharts](https://github.com/ChartsOrg/Charts) (iOS) and [MPAndroidChart](https://github.com/PhilJay/MPAndroidChart) (Android).

## Features

- **Native Performance**: Uses platform-native charting libraries for smooth animations and rendering
- **Rich Chart Types**: Line, Bar, Horizontal Bar, Pie, Scatter, Bubble, CandleStick, Radar, and Combined charts
- **Highly Customizable**: Full control over colors, legends, axes, animations, markers, and more
- **Interactive**: Pan, zoom, touch highlighting, and gesture support
- **Angular Support**: Full Angular integration with standalone directives

## Installation

```bash
npm install @nstudio/ncharts
```

## Platform Requirements

- **iOS**: Requires iOS 12.0+ (uses Swift Package Manager for DGCharts 5.1.0)
- **Android**: Requires API 21+ (uses MPAndroidChart v3.1.0)

## Usage

### Angular

1. Register chart elements in your `main.ts`:

```typescript
import { registerNchartsElements } from '@nstudio/ncharts/angular';
registerNchartsElements();
```

2. Import the module in your feature module:

```typescript
import { NativeScriptNchartsModule } from '@nstudio/ncharts/angular';

@NgModule({
  imports: [NativeScriptNchartsModule],
})
export class YourModule {}
```

3. Use charts in your templates:

```html
<LineChart
  [data]="lineData"
  [legend]="{ enabled: true, horizontalAlignment: 'CENTER' }"
  [xAxis]="{ enabled: true, position: 'BOTTOM' }"
  [yAxis]="{ left: { enabled: true }, right: { enabled: false } }"
  [animation]="{ duration: 1000, easingFunction: 'EaseInOutQuad' }"
  dragEnabled="true"
  scaleEnabled="true"
  pinchZoom="true">
</LineChart>
```

### Data Format

#### Line Chart

```typescript
import type { LineChartData } from '@nstudio/ncharts';

const lineData: LineChartData = {
  dataSets: [
    {
      label: 'Sales',
      values: [
        { x: 0, y: 45 },
        { x: 1, y: 52 },
        { x: 2, y: 48 },
      ],
      config: {
        color: '#4A90D9',
        lineWidth: 2.5,
        drawCircles: true,
        circleRadius: 4,
        drawFilled: true,
        fillAlpha: 50,
      },
    },
  ],
};
```

#### Bar Chart

```typescript
import type { BarChartData } from '@nstudio/ncharts';

const barData: BarChartData = {
  dataSets: [
    {
      label: 'Revenue',
      values: [
        { x: 0, y: 250000 },
        { x: 1, y: 320000 },
        { x: 2, y: 280000 },
      ],
      config: {
        colors: ['#4A90D9', '#50C878', '#FFB347'],
        drawValues: true,
      },
    },
  ],
};
```

#### Pie Chart

```typescript
import type { PieChartData } from '@nstudio/ncharts';

const pieData: PieChartData = {
  dataSets: [
    {
      label: 'Market Share',
      values: [
        { value: 35, label: 'Product A' },
        { value: 25, label: 'Product B' },
        { value: 20, label: 'Product C' },
      ],
      config: {
        colors: ['#4A90D9', '#50C878', '#FFB347'],
        sliceSpace: 2,
        drawValues: true,
      },
    },
  ],
};
```

## Chart Types

| Chart Type | Element | Description |
|------------|---------|-------------|
| Line | `<LineChart>` | Line charts with cubic bezier curves |
| Bar | `<BarChart>` | Vertical bar charts |
| Horizontal Bar | `<HorizontalBarChart>` | Horizontal bar charts |
| Pie | `<PieChart>` | Pie/donut charts |
| Scatter | `<ScatterChart>` | Scatter plots |
| Bubble | `<BubbleChart>` | Bubble charts with size dimension |
| CandleStick | `<CandleStickChart>` | Financial OHLC charts |
| Radar | `<RadarChart>` | Spider/radar charts |
| Combined | `<CombinedChart>` | Multiple chart types combined |

## Configuration Options

### Animation

```typescript
animation: {
  duration: 1000, // milliseconds
  easingFunction: 'EaseInOutQuad' // See EasingFunction type for all options
}
```

### Legend

```typescript
legend: {
  enabled: true,
  horizontalAlignment: 'CENTER', // 'LEFT' | 'CENTER' | 'RIGHT'
  verticalAlignment: 'BOTTOM',   // 'TOP' | 'CENTER' | 'BOTTOM'
  orientation: 'HORIZONTAL',     // 'HORIZONTAL' | 'VERTICAL'
  form: 'CIRCLE',               // 'NONE' | 'EMPTY' | 'DEFAULT' | 'SQUARE' | 'CIRCLE' | 'LINE'
  textSize: 12,
  textColor: '#333333'
}
```

### Axes

```typescript
xAxis: {
  enabled: true,
  position: 'BOTTOM',      // 'TOP' | 'BOTTOM' | 'BOTH_SIDED'
  drawGridLines: true,
  drawLabels: true,
  labelRotation: 45,
  granularity: 1,
  valueFormatter: ['Jan', 'Feb', 'Mar', ...]
}

yAxis: {
  left: {
    enabled: true,
    drawGridLines: true,
    axisMinimum: 0,
    axisMaximum: 100
  },
  right: {
    enabled: false
  }
}
```

## Public Methods

All chart directives expose methods for programmatic control:

```typescript
@ViewChild(LineChartDirective) chart: LineChartDirective;

// Animate the chart
this.chart.animate({ duration: 1000 });

// Highlight specific values
this.chart.highlightValues([{ x: 2, dataSetIndex: 0 }]);

// Clear highlights
this.chart.clearHighlights();

// For BarLine charts:
this.chart.moveViewToX(5);
this.chart.zoom(2, 2, 0, 0);
this.chart.fitScreen();
```

## Credits

- iOS: [DGCharts](https://github.com/ChartsOrg/Charts) by Daniel Gindi (originally Charts)
- Android: [MPAndroidChart](https://github.com/PhilJay/MPAndroidChart) by Philipp Jahoda

## License

Apache-2.0
