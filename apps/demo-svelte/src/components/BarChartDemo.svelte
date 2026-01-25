<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { BarChartData, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual, ChartSelectData } from '@nstudio/ncharts';

  const dispatch = createEventDispatcher();

  let barChartRef: any;
  let currentStyle: 'revenue' | 'products' | 'grouped' = 'revenue';
  let isHorizontal = false;
  let selectedData: ChartSelectData | null = null;
  let xAxisLabels: string[] = ['Q1', 'Q2', 'Q3', 'Q4'];

  const legendConfig: LegendConfig = {
    enabled: true,
    horizontalAlignment: 'CENTER',
    verticalAlignment: 'BOTTOM',
    orientation: 'HORIZONTAL',
    form: 'SQUARE',
    textSize: 11,
  };

  $: xAxisConfig = {
    enabled: true,
    position: 'BOTTOM',
    drawGridLines: false,
    drawLabels: true,
    granularity: 1,
    textSize: 10,
    valueFormatter: xAxisLabels,
  } as XAxisConfig;

  const yAxisConfig: YAxisConfigDual = {
    left: {
      enabled: true,
      drawGridLines: true,
      gridColor: '#E5E7EB',
      textSize: 10,
      axisMinimum: 0,
    },
    right: {
      enabled: false,
    },
  };

  const animationConfig: ChartAnimation = {
    durationX: 1000,
    durationY: 1000,
    easingX: 'EaseOutBack',
  };

  function getRevenueData(): BarChartData {
    return {
      dataSets: [
        {
          label: 'Revenue (M)',
          values: [
            { x: 0, y: 2.4 },
            { x: 1, y: 3.2 },
            { x: 2, y: 2.8 },
            { x: 3, y: 4.1 },
          ],
          config: {
            colors: ['#10B981', '#34D399', '#6EE7B7', '#A7F3D0'],
            drawValues: true,
            valueTextSize: 12,
            valueTextColor: '#374151',
          },
        },
      ],
    };
  }

  function getProductsData(): BarChartData {
    return {
      dataSets: [
        {
          label: 'Units Sold (K)',
          values: [
            { x: 0, y: 850 },
            { x: 1, y: 420 },
            { x: 2, y: 680 },
            { x: 3, y: 320 },
            { x: 4, y: 510 },
          ],
          config: {
            colors: ['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE', '#DBEAFE'],
            drawValues: true,
            valueTextSize: 11,
            valueTextColor: '#374151',
          },
        },
      ],
    };
  }

  function getGroupedData(): BarChartData {
    return {
      dataSets: [
        {
          label: 'Online',
          values: [
            { x: 0, y: 45 },
            { x: 1, y: 52 },
            { x: 2, y: 48 },
            { x: 3, y: 62 },
            { x: 4, y: 58 },
            { x: 5, y: 71 },
          ],
          config: {
            color: '#8B5CF6',
            drawValues: true,
            valueTextSize: 10,
            valueTextColor: '#374151',
          },
        },
        {
          label: 'In-Store',
          values: [
            { x: 0, y: 35 },
            { x: 1, y: 42 },
            { x: 2, y: 38 },
            { x: 3, y: 48 },
            { x: 4, y: 45 },
            { x: 5, y: 52 },
          ],
          config: {
            color: '#EC4899',
            drawValues: true,
            valueTextSize: 10,
            valueTextColor: '#374151',
          },
        },
      ],
    };
  }

  $: chartData = currentStyle === 'products' ? getProductsData() : currentStyle === 'grouped' ? getGroupedData() : getRevenueData();

  $: chartTitle = {
    revenue: 'Quarterly Revenue',
    products: 'Product Sales',
    grouped: 'Monthly Comparison',
  }[currentStyle];

  $: selectedValue = selectedData
    ? (() => {
        const labels = xAxisLabels;
        const label = labels?.[Math.floor(selectedData.x)] || `Point ${selectedData.x}`;
        return `${label}: ${selectedData.y.toFixed(1)} (Dataset ${selectedData.dataSetIndex + 1})`;
      })()
    : 'No selection';

  $: styleIndex = ['revenue', 'products', 'grouped'].indexOf(currentStyle);

  function onChartSelect(args: any) {
    console.log('[BarChartDemo] Selected:', args.data);
    selectedData = args.data;
  }

  function onChartDeselect() {
    console.log('[BarChartDemo] Deselected');
    selectedData = null;
  }

  function toggleOrientation() {
    isHorizontal = !isHorizontal;
  }

  function randomizeColors() {
    const colors = ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16'];
    const shuffled = [...colors].sort(() => Math.random() - 0.5);
    console.log('Colors randomized:', shuffled);
  }

  function animateChart() {
    if (barChartRef) {
      barChartRef.animate({ durationX: 1000, durationY: 1000, easingX: 'EaseOutBack' });
    }
  }

  function selectStyle(style: 'revenue' | 'products' | 'grouped') {
    selectedData = null;
    currentStyle = style;
    switch (style) {
      case 'revenue':
        xAxisLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
        break;
      case 'products':
        xAxisLabels = ['Phones', 'Tablets', 'Laptops', 'Watches', 'Audio'];
        break;
      case 'grouped':
        xAxisLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
        break;
    }
  }

  function onStyleChange(args: any) {
    const index = args.value ?? args.object?.selectedIndex ?? 0;
    const styles: ('revenue' | 'products' | 'grouped')[] = ['revenue', 'products', 'grouped'];
    selectStyle(styles[index]);
  }

  function goBack() {
    dispatch('back');
  }
</script>

<page>
  <actionBar flat={true} title="Bar Charts" class="bg-slate-50 dark:bg-slate-900">
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
        <gridLayout col={1} class="w-8 h-8 rounded-full bg-emerald-500" on:tap={() => selectedData = null}>
          <label text="✕" class="text-white text-center align-middle text-sm font-bold" />
        </gridLayout>
      {/if}
    </gridLayout>

    <!-- Chart Container -->
    <gridLayout row={1} class="m-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4">
      {#if !isHorizontal}
        <barChart
          bind:this={barChartRef}
          data={chartData}
          legend={legendConfig}
          xAxis={xAxisConfig}
          yAxis={yAxisConfig}
          animation={animationConfig}
          chartDescription={{ text: chartTitle, enabled: true }}
          highlightPerTapEnabled={true}
          on:select={onChartSelect}
          on:deselect={onChartDeselect}
          class="h-full"
        />
      {:else}
        <horizontalBarChart
          bind:this={barChartRef}
          data={chartData}
          legend={legendConfig}
          xAxis={xAxisConfig}
          yAxis={yAxisConfig}
          animation={animationConfig}
          chartDescription={{ text: chartTitle, enabled: true }}
          highlightPerTapEnabled={true}
          on:select={onChartSelect}
          on:deselect={onChartDeselect}
          class="h-full"
        />
      {/if}
    </gridLayout>

    <!-- Style Selector -->
    <segmentedBar row={2} selectedIndex={styleIndex} on:selectedIndexChange={onStyleChange} class="m-4 text-sm">
      <segmentedBarItem title="Revenue" />
      <segmentedBarItem title="Products" />
      <segmentedBarItem title="Grouped" />
    </segmentedBar>

    <!-- Controls -->
    <gridLayout row={3} columns="*, *, *" class="p-4 pt-0">
      <button col={0} text="Animate" on:tap={animateChart} class="bg-emerald-500 text-white rounded-md m-1 text-sm" />
      <button col={1} text="Flip" on:tap={toggleOrientation} class="bg-purple-500 text-white rounded-md m-1 text-sm" />
      <button col={2} text="Colors" on:tap={randomizeColors} class="bg-orange-500 text-white rounded-md m-1 text-sm" />
    </gridLayout>
  </gridLayout>
</page>
