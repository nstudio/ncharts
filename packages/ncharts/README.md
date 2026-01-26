# @nstudio/ncharts

Native iOS/Android charting for NativeScript using [DGCharts](https://github.com/ChartsOrg/Charts) (iOS) and [MPAndroidChart](https://github.com/PhilJay/MPAndroidChart) (Android).

## Features

- **Native Performance** — Platform-native charting with smooth animations
- **Rich Chart Types** — Line, Bar, Pie, Scatter, Bubble, CandleStick, Radar, Combined
- **Highly Customizable** — Colors, legends, axes, animations, markers
- **Interactive** — Pan, zoom, touch highlighting, gestures
- **Multi-Framework** — Angular, React, Solid, Svelte, Vue

## Installation

```bash
npm install @nstudio/ncharts
# or
yarn add @nstudio/ncharts
# or
pnpm add @nstudio/ncharts
# or
bun add @nstudio/ncharts
```

## Platform Requirements

- **iOS**: 12.0+ (DGCharts 5.1.0)
- **Android**: API 21+ (MPAndroidChart 3.1.0)

## Framework Usage

### Angular

```typescript
import { registerNchartsElements, LineChart } from '@nstudio/ncharts/angular';
registerNchartsElements();

@Component({
  template: `<LineChart [data]="chartData" />`,
  imports: [LineChart]
})
export class MyComponent {
  chartData: LineChartData = { dataSets: [{ label: 'Sales', values: [{ x: 0, y: 45 }] }] };
}
```

### React

```tsx
import { LineChart } from '@nstudio/ncharts/react';

export function MyComponent() {
  const data = { dataSets: [{ label: 'Sales', values: [{ x: 0, y: 45 }] }] };
  return <LineChart data={data} />;
}
```

### Solid

```tsx
import { LineChart } from '@nstudio/ncharts/solid';

export function MyComponent() {
  const data = { dataSets: [{ label: 'Sales', values: [{ x: 0, y: 45 }] }] };
  return <LineChart data={data} />;
}
```

### Svelte

```svelte
<script>
  import { LineChart } from '@nstudio/ncharts/svelte';
  const data = { dataSets: [{ label: 'Sales', values: [{ x: 0, y: 45 }] }] };
</script>

<LineChart {data} />
```

### Vue

```vue
<script setup>
import { LineChart } from '@nstudio/ncharts/vue';
const data = { dataSets: [{ label: 'Sales', values: [{ x: 0, y: 45 }] }] };
</script>

<template>
  <LineChart :data="data" />
</template>
```

## Chart Types

| Chart | Element | Description |
|-------|---------|-------------|
| Line | `<LineChart>` | Line charts with bezier curves |
| Bar | `<BarChart>` | Vertical bar charts |
| Horizontal Bar | `<HorizontalBarChart>` | Horizontal bar charts |
| Pie | `<PieChart>` | Pie/donut charts |
| Scatter | `<ScatterChart>` | Scatter plots |
| Bubble | `<BubbleChart>` | Bubble charts |
| CandleStick | `<CandleStickChart>` | Financial OHLC charts |
| Radar | `<RadarChart>` | Spider/radar charts |
| Combined | `<CombinedChart>` | Multiple types combined |

## Configuration

```typescript
<LineChart
  [data]="chartData"
  [legend]="{ enabled: true, horizontalAlignment: 'CENTER' }"
  [xAxis]="{ enabled: true, position: 'BOTTOM' }"
  [yAxis]="{ left: { enabled: true }, right: { enabled: false } }"
  [animation]="{ duration: 1000, easingFunction: 'EaseInOutQuad' }"
  dragEnabled="true"
  scaleEnabled="true"
  pinchZoom="true"
/>
```

## Credits

- iOS: [DGCharts](https://github.com/ChartsOrg/Charts) by Daniel Gindi
- Android: [MPAndroidChart](https://github.com/PhilJay/MPAndroidChart) by Philipp Jahoda

## License

MIT
