<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { PieChartData, ChartAnimation, LegendConfig, ChartSelectData } from '@nstudio/ncharts';

  const dispatch = createEventDispatcher();

  let pieChartRef: any;
  let currentStyle: 'market' | 'budget' | 'traffic' = 'market';
  let isDonut = true;
  let holeRadius = 45;
  let rotationAngle = 0;
  let selectedData: ChartSelectData | null = null;

  const legendConfig: LegendConfig = {
    enabled: true,
    horizontalAlignment: 'CENTER',
    verticalAlignment: 'BOTTOM',
    orientation: 'HORIZONTAL',
    form: 'CIRCLE',
    textSize: 10,
  };

  const animationConfig: ChartAnimation = {
    durationX: 1400,
    durationY: 1400,
    easingX: 'EaseOutBounce',
  };

  function getMarketData(): PieChartData {
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
            colors: ['#F59E0B', '#EF4444', '#8B5CF6', '#3B82F6', '#6B7280'],
            sliceSpace: 3,
            selectionShift: 8,
            drawValues: true,
            valueTextSize: 12,
            valueTextColor: '#FFFFFF',
          },
        },
      ],
    };
  }

  function getBudgetData(): PieChartData {
    return {
      dataSets: [
        {
          label: 'Monthly Budget',
          values: [
            { value: 1800, label: 'Housing' },
            { value: 600, label: 'Food' },
            { value: 400, label: 'Transport' },
            { value: 300, label: 'Utilities' },
            { value: 250, label: 'Entertainment' },
            { value: 200, label: 'Savings' },
            { value: 150, label: 'Other' },
          ],
          config: {
            colors: ['#10B981', '#06B6D4', '#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#6B7280'],
            sliceSpace: 2,
            selectionShift: 6,
            drawValues: true,
            valueTextSize: 11,
            valueTextColor: '#FFFFFF',
          },
        },
      ],
    };
  }

  function getTrafficData(): PieChartData {
    return {
      dataSets: [
        {
          label: 'Traffic Sources',
          values: [
            { value: 42, label: 'Organic Search' },
            { value: 28, label: 'Direct' },
            { value: 18, label: 'Social Media' },
            { value: 8, label: 'Referral' },
            { value: 4, label: 'Email' },
          ],
          config: {
            colors: ['#7C3AED', '#A855F7', '#C084FC', '#D8B4FE', '#EDE9FE'],
            sliceSpace: 4,
            selectionShift: 10,
            drawValues: true,
            valueTextSize: 12,
            valueTextColor: '#FFFFFF',
          },
        },
      ],
    };
  }

  $: chartData = currentStyle === 'budget' ? getBudgetData() : currentStyle === 'traffic' ? getTrafficData() : getMarketData();

  $: centerText = currentStyle === 'budget' ? 'Monthly\nBudget' : currentStyle === 'traffic' ? 'Web\nTraffic' : 'Market\nShare';

  $: chartTitle = {
    market: 'Market Share Distribution',
    budget: 'Monthly Expense Breakdown',
    traffic: 'Website Traffic Sources',
  }[currentStyle];

  $: selectedValue = selectedData
    ? (() => {
        const pieEntry = chartData.dataSets[0]?.values[selectedData.dataIndex];
        const label = typeof pieEntry === 'object' && pieEntry?.label ? pieEntry.label : `Slice ${selectedData.dataIndex + 1}`;
        return `${label}: ${selectedData.y.toFixed(1)}%`;
      })()
    : 'No selection';

  $: styleIndex = ['market', 'budget', 'traffic'].indexOf(currentStyle);

  function onChartSelect(args: any) {
    console.log('[PieChartDemo] Selected:', args.data);
    selectedData = args.data;
  }

  function onChartDeselect() {
    console.log('[PieChartDemo] Deselected');
    selectedData = null;
  }

  function toggleDonut() {
    if (isDonut) {
      holeRadius = 0;
      isDonut = false;
    } else {
      holeRadius = 45;
      isDonut = true;
    }
  }

  function spinChart() {
    rotationAngle += 90;
  }

  function animateChart() {
    if (pieChartRef) {
      pieChartRef.animate({ durationX: 1400, durationY: 1400, easingX: 'EaseInOutCubic' });
    }
  }

  function onStyleChange(args: any) {
    const index = args.value ?? args.object?.selectedIndex ?? 0;
    const styles: ('market' | 'budget' | 'traffic')[] = ['market', 'budget', 'traffic'];
    selectedData = null;
    currentStyle = styles[index];
  }

  function goBack() {
    dispatch('back');
  }
</script>

<page>
  <actionBar flat={true} title="Pie Charts" class="bg-slate-50 dark:bg-slate-900">
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
        <gridLayout col={1} class="w-8 h-8 rounded-full bg-orange-500" on:tap={() => selectedData = null}>
          <label text="✕" class="text-white text-center align-middle text-sm font-bold" />
        </gridLayout>
      {/if}
    </gridLayout>

    <!-- Chart Container -->
    <gridLayout row={1} class="m-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4">
      <pieChart
        bind:this={pieChartRef}
        data={chartData}
        legend={legendConfig}
        animation={animationConfig}
        chartDescription={{ text: chartTitle, enabled: true }}
        drawHole={isDonut}
        {holeRadius}
        transparentCircleRadius={holeRadius + 5}
        holeColor="#FFFFFF"
        drawCenterText={isDonut}
        {centerText}
        centerTextColor="#374151"
        centerTextSize={18}
        drawSliceText={true}
        usePercentValues={true}
        rotationEnabled={true}
        {rotationAngle}
        highlightPerTapEnabled={true}
        on:select={onChartSelect}
        on:deselect={onChartDeselect}
        class="h-full"
      />
    </gridLayout>

    <!-- Style Selector -->
    <segmentedBar row={2} selectedIndex={styleIndex} on:selectedIndexChange={onStyleChange} class="m-4 text-sm">
      <segmentedBarItem title="Market" />
      <segmentedBarItem title="Budget" />
      <segmentedBarItem title="Traffic" />
    </segmentedBar>

    <!-- Controls -->
    <gridLayout row={3} columns="*, *, *" class="p-4 pt-0">
      <button col={0} text="Spin" on:tap={spinChart} class="bg-orange-500 text-white rounded-xl m-1 text-sm" />
      <button col={1} text="Donut" on:tap={toggleDonut} class="bg-pink-500 text-white rounded-xl m-1 text-sm" />
      <button col={2} text="Animate" on:tap={animateChart} class="bg-purple-500 text-white rounded-xl m-1 text-sm" />
    </gridLayout>
  </gridLayout>
</page>
