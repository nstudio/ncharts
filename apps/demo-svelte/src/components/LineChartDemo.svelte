<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { LineChartData, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual, ChartSelectData } from '@nstudio/ncharts';

  const dispatch = createEventDispatcher();

  let lineChartRef: any;
  let currentStyle: 'sales' | 'stocks' | 'weather' = 'sales';
  let selectedData: ChartSelectData | null = null;

  const legendConfig: LegendConfig = {
    enabled: true,
    horizontalAlignment: 'CENTER',
    verticalAlignment: 'BOTTOM',
    orientation: 'HORIZONTAL',
    form: 'CIRCLE',
    textSize: 11,
  };

  const xAxisConfig: XAxisConfig = {
    enabled: true,
    position: 'BOTTOM',
    drawGridLines: true,
    drawLabels: true,
    granularity: 1,
    labelRotationAngle: 0,
    textSize: 10,
    gridColor: '#E5E7EB',
  };

  const yAxisConfig: YAxisConfigDual = {
    left: {
      enabled: true,
      drawGridLines: true,
      gridColor: '#E5E7EB',
      textSize: 10,
    },
    right: {
      enabled: false,
    },
  };

  const animationConfig: ChartAnimation = {
    durationX: 1200,
    durationY: 1200,
    easingX: 'EaseInOutQuad',
  };

  function getSalesData(): LineChartData {
    return {
      dataSets: [
        {
          label: '2024 Revenue',
          values: [
            { x: 0, y: 45 }, { x: 1, y: 52 }, { x: 2, y: 48 }, { x: 3, y: 65 },
            { x: 4, y: 78 }, { x: 5, y: 72 }, { x: 6, y: 85 }, { x: 7, y: 92 },
            { x: 8, y: 88 }, { x: 9, y: 105 }, { x: 10, y: 118 }, { x: 11, y: 135 },
          ],
          config: {
            color: '#3B82F6',
            lineWidth: 3,
            drawCircles: true,
            circleRadius: 5,
            circleColor: '#3B82F6',
            drawFilled: true,
            fillColor: '#3B82F6',
            fillAlpha: 40,
            mode: 'CUBIC_BEZIER',
            drawValues: false,
            highlightColor: '#1D4ED8',
            highlightLineWidth: 2,
          },
        },
        {
          label: '2023 Revenue',
          values: [
            { x: 0, y: 35 }, { x: 1, y: 42 }, { x: 2, y: 38 }, { x: 3, y: 55 },
            { x: 4, y: 62 }, { x: 5, y: 58 }, { x: 6, y: 70 }, { x: 7, y: 75 },
            { x: 8, y: 72 }, { x: 9, y: 85 }, { x: 10, y: 92 }, { x: 11, y: 108 },
          ],
          config: {
            color: '#94A3B8',
            lineWidth: 2,
            drawCircles: true,
            circleRadius: 4,
            circleColor: '#94A3B8',
            drawFilled: true,
            fillColor: '#94A3B8',
            fillAlpha: 20,
            mode: 'CUBIC_BEZIER',
            drawValues: false,
            dashedLine: { lineLength: 10, spaceLength: 5, phase: 0 },
          },
        },
      ],
    };
  }

  function getStocksData(): LineChartData {
    return {
      dataSets: [
        {
          label: 'AAPL',
          values: [
            { x: 0, y: 178 }, { x: 1, y: 185 }, { x: 2, y: 182 }, { x: 3, y: 191 },
            { x: 4, y: 188 }, { x: 5, y: 195 }, { x: 6, y: 202 }, { x: 7, y: 198 },
            { x: 8, y: 205 }, { x: 9, y: 212 }, { x: 10, y: 208 }, { x: 11, y: 218 },
          ],
          config: {
            color: '#10B981',
            lineWidth: 2.5,
            drawCircles: false,
            drawFilled: true,
            fillColor: '#10B981',
            fillAlpha: 30,
            mode: 'CUBIC_BEZIER',
            drawValues: false,
          },
        },
        {
          label: 'GOOGL',
          values: [
            { x: 0, y: 142 }, { x: 1, y: 148 }, { x: 2, y: 145 }, { x: 3, y: 152 },
            { x: 4, y: 158 }, { x: 5, y: 155 }, { x: 6, y: 162 }, { x: 7, y: 168 },
            { x: 8, y: 165 }, { x: 9, y: 172 }, { x: 10, y: 178 }, { x: 11, y: 185 },
          ],
          config: {
            color: '#F59E0B',
            lineWidth: 2.5,
            drawCircles: false,
            drawFilled: true,
            fillColor: '#F59E0B',
            fillAlpha: 30,
            mode: 'CUBIC_BEZIER',
            drawValues: false,
          },
        },
      ],
    };
  }

  function getWeatherData(): LineChartData {
    return {
      dataSets: [
        {
          label: 'High Temp',
          values: [
            { x: 0, y: 42 }, { x: 1, y: 45 }, { x: 2, y: 52 }, { x: 3, y: 62 },
            { x: 4, y: 72 }, { x: 5, y: 82 }, { x: 6, y: 88 }, { x: 7, y: 86 },
            { x: 8, y: 78 }, { x: 9, y: 65 }, { x: 10, y: 52 }, { x: 11, y: 44 },
          ],
          config: {
            color: '#EF4444',
            lineWidth: 3,
            drawCircles: true,
            circleRadius: 6,
            circleColor: '#EF4444',
            drawFilled: true,
            fillColor: '#EF4444',
            fillAlpha: 25,
            mode: 'CUBIC_BEZIER',
            drawValues: true,
            valueTextSize: 9,
            valueTextColor: '#EF4444',
          },
        },
        {
          label: 'Low Temp',
          values: [
            { x: 0, y: 28 }, { x: 1, y: 30 }, { x: 2, y: 35 }, { x: 3, y: 42 },
            { x: 4, y: 52 }, { x: 5, y: 62 }, { x: 6, y: 68 }, { x: 7, y: 66 },
            { x: 8, y: 58 }, { x: 9, y: 48 }, { x: 10, y: 38 }, { x: 11, y: 30 },
          ],
          config: {
            color: '#3B82F6',
            lineWidth: 3,
            drawCircles: true,
            circleRadius: 6,
            circleColor: '#3B82F6',
            drawFilled: true,
            fillColor: '#3B82F6',
            fillAlpha: 25,
            mode: 'CUBIC_BEZIER',
            drawValues: true,
            valueTextSize: 9,
            valueTextColor: '#3B82F6',
          },
        },
      ],
    };
  }

  $: chartData = currentStyle === 'stocks' ? getStocksData() : currentStyle === 'weather' ? getWeatherData() : getSalesData();
  
  $: selectedValue = selectedData 
    ? (() => {
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const monthName = monthNames[Math.floor(selectedData.x)] || `Point ${selectedData.x}`;
        return `${monthName}: ${selectedData.y.toFixed(1)} (Dataset ${selectedData.dataSetIndex + 1})`;
      })()
    : 'No selection';

  $: chartDescription = {
    text: currentStyle === 'sales' ? 'Monthly Sales Trend' : currentStyle === 'stocks' ? 'Stock Performance' : 'Temperature Analysis',
    enabled: true,
  };

  $: styleIndex = ['sales', 'stocks', 'weather'].indexOf(currentStyle);

  function onChartSelect(args: any) {
    console.log('[LineChartDemo] Selected:', args.data);
    selectedData = args.data;
  }

  function onChartDeselect() {
    console.log('[LineChartDemo] Deselected');
    selectedData = null;
  }

  function animateChart() {
    if (lineChartRef) {
      lineChartRef.animate({ durationX: 1200, durationY: 1200, easingX: 'EaseOutBack' });
    }
  }

  function resetChart() {
    if (lineChartRef) {
      lineChartRef.clearHighlights();
      lineChartRef.fitScreen();
    }
    selectedData = null;
  }

  function onStyleChange(args: any) {
    const index = args.value ?? args.object?.selectedIndex ?? 0;
    const styles: ('sales' | 'stocks' | 'weather')[] = ['sales', 'stocks', 'weather'];
    selectedData = null;
    currentStyle = styles[index];
  }

  function goBack() {
    dispatch('back');
  }
</script>

<page>
  <actionBar flat={true} title="Line Charts" class="bg-slate-50 dark:bg-slate-900">
    <navigationButton text="" on:tap={goBack} />
  </actionBar>

  <gridLayout rows="auto, *, auto, auto" class="bg-slate-50 dark:bg-slate-900">
    <!-- Selected Value Display -->
    <gridLayout row={0} columns="*, auto" class="p-4 pb-0">
      <stackLayout col={0}>
        <label class="text-xs text-slate-500 dark:text-slate-400" text="TAP ON CHART TO SELECT" />
        <label class="text-lg font-bold text-slate-800 dark:text-white" text={selectedValue} />
      </stackLayout>
      {#if selectedData}
        <gridLayout col={1} class="w-8 h-8 rounded-full bg-blue-500" on:tap={() => selectedData = null}>
          <label text="✕" class="text-white text-center align-middle text-sm font-bold" />
        </gridLayout>
      {/if}
    </gridLayout>

    <!-- Chart Container -->
    <gridLayout row={1} class="m-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4">
      <lineChart
        bind:this={lineChartRef}
        data={chartData}
        legend={legendConfig}
        xAxis={xAxisConfig}
        yAxis={yAxisConfig}
        animation={animationConfig}
        chartDescription={chartDescription}
        dragEnabled={true}
        scaleEnabled={true}
        pinchZoom={true}
        highlightPerDragEnabled={true}
        highlightPerTapEnabled={true}
        on:select={onChartSelect}
        on:deselect={onChartDeselect}
        class="h-full"
      />
    </gridLayout>

    <!-- Style Selector -->
    <segmentedBar row={2} selectedIndex={styleIndex} on:selectedIndexChange={onStyleChange} class="m-4 text-sm">
      <segmentedBarItem title="Sales" />
      <segmentedBarItem title="Stocks" />
      <segmentedBarItem title="Weather" />
    </segmentedBar>

    <!-- Controls -->
    <gridLayout row={3} columns="*, *" class="p-4 pt-0">
      <button col={0} text="Animate" on:tap={animateChart} class="bg-blue-500 text-white rounded-md m-1 text-sm" />
      <button col={1} text="Reset" on:tap={resetChart} class="bg-slate-500 text-white rounded-md m-1 text-sm" />
    </gridLayout>
  </gridLayout>
</page>
