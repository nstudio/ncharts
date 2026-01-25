import { createSignal, createMemo } from 'solid-js';

export const BarChartDemo = (props) => {
  let barChartRef;
  const [currentStyle, setCurrentStyle] = createSignal('revenue');
  const [isHorizontal, setIsHorizontal] = createSignal(false);
  const [selectedData, setSelectedData] = createSignal(null);
  const [xAxisLabels, setXAxisLabels] = createSignal(['Q1', 'Q2', 'Q3', 'Q4']);

  const legendConfig = {
    enabled: true,
    horizontalAlignment: 'CENTER',
    verticalAlignment: 'BOTTOM',
    orientation: 'HORIZONTAL',
    form: 'SQUARE',
    textSize: 11,
  };

  const xAxisConfig = createMemo(() => ({
    enabled: true,
    position: 'BOTTOM',
    drawGridLines: false,
    drawLabels: true,
    granularity: 1,
    textSize: 10,
    valueFormatter: xAxisLabels(),
  }));

  const yAxisConfig = {
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

  const animationConfig = {
    durationX: 1000,
    durationY: 1000,
    easingX: 'EaseOutBack',
  };

  const getRevenueData = () => ({
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
  });

  const getProductsData = () => ({
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
  });

  const getGroupedData = () => ({
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
  });

  const chartData = createMemo(() => {
    switch (currentStyle()) {
      case 'products': return getProductsData();
      case 'grouped': return getGroupedData();
      default: return getRevenueData();
    }
  });

  const chartTitle = createMemo(() => {
    const titles = {
      revenue: 'Quarterly Revenue',
      products: 'Product Sales',
      grouped: 'Monthly Comparison',
    };
    return titles[currentStyle()];
  });

  const selectedValue = createMemo(() => {
    const data = selectedData();
    if (!data) return 'No selection';
    const labels = xAxisLabels();
    const label = labels?.[Math.floor(data.x)] || `Point ${data.x}`;
    return `${label}: ${data.y.toFixed(1)} (Dataset ${data.dataSetIndex + 1})`;
  });

  const onChartSelect = (args) => {
    console.log('[BarChartDemo] Selected:', args.data);
    setSelectedData(args.data);
  };

  const onChartDeselect = () => {
    console.log('[BarChartDemo] Deselected');
    setSelectedData(null);
  };

  const toggleOrientation = () => {
    setIsHorizontal(!isHorizontal());
  };

  const randomizeColors = () => {
    const colors = ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16'];
    const shuffled = [...colors].sort(() => Math.random() - 0.5);
    console.log('Colors randomized:', shuffled);
  };

  const animateChart = () => {
    if (barChartRef) {
      barChartRef.animate({ durationX: 1000, durationY: 1000, easingX: 'EaseOutBack' });
    }
  };

  const selectStyle = (style) => {
    setSelectedData(null);
    setCurrentStyle(style);
    switch (style) {
      case 'revenue':
        setXAxisLabels(['Q1', 'Q2', 'Q3', 'Q4']);
        break;
      case 'products':
        setXAxisLabels(['Phones', 'Tablets', 'Laptops', 'Watches', 'Audio']);
        break;
      case 'grouped':
        setXAxisLabels(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']);
        break;
    }
  };

  const onStyleChange = (args) => {
    const index = args.value ?? args.object?.selectedIndex ?? 0;
    const styles = ['revenue', 'products', 'grouped'];
    selectStyle(styles[index]);
  };

  const styleIndex = createMemo(() => ['revenue', 'products', 'grouped'].indexOf(currentStyle()));

  return (
    <page>
      <actionbar flat={true} title="Bar Charts" class="bg-slate-50 dark:bg-slate-900">
        <navigationButton text="" android={{systemIcon: "ic_menu_back"}} on:tap={() => props.onBack()} />
      </actionbar>

      <gridlayout rows="auto, *, auto, auto" class="bg-slate-50 dark:bg-slate-900">
        {/* Selected Value Display */}
        <gridlayout row="0" columns="*, auto" class="p-4 pb-0">
          <stacklayout col="0">
            <label class="text-xs text-slate-500 dark:text-slate-400" text="TAP ON CHART TO SELECT" />
            <label class="text-lg font-bold text-slate-800 dark:text-white" text={selectedValue()} />
          </stacklayout>
          {selectedData() && (
            <gridlayout col="1" class="w-8 h-8 rounded-full bg-emerald-500" on:tap={() => setSelectedData(null)}>
              <label text="✕" class="text-white text-center align-middle text-sm font-bold" />
            </gridlayout>
          )}
        </gridlayout>

        {/* Chart Container */}
        <gridlayout row="1" class="m-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4">
          {!isHorizontal() ? (
            <barchart
              ref={barChartRef}
              data={chartData()}
              legend={legendConfig}
              xAxis={xAxisConfig()}
              yAxis={yAxisConfig}
              animation={animationConfig}
              chartDescription={{ text: chartTitle(), enabled: true }}
              highlightPerTapEnabled={true}
              on:select={onChartSelect}
              on:deselect={onChartDeselect}
              class="h-full"
            />
          ) : (
            <horizontalbarchart
              ref={barChartRef}
              data={chartData()}
              legend={legendConfig}
              xAxis={xAxisConfig()}
              yAxis={yAxisConfig}
              animation={animationConfig}
              chartDescription={{ text: chartTitle(), enabled: true }}
              highlightPerTapEnabled={true}
              on:select={onChartSelect}
              on:deselect={onChartDeselect}
              class="h-full"
            />
          )}
        </gridlayout>

        {/* Style Selector */}
        <segmentedbar row="2" selectedIndex={styleIndex()} on:selectedIndexChange={onStyleChange} class="m-4 text-sm">
          <segmentedbaritem title="Revenue" />
          <segmentedbaritem title="Products" />
          <segmentedbaritem title="Grouped" />
        </segmentedbar>

        {/* Controls */}
        <gridlayout row="3" columns="*, *, *" class="p-4 pt-0">
          <button col="0" text="Animate" on:tap={animateChart} class="bg-emerald-500 text-white rounded-md m-1 text-sm" />
          <button col="1" text="Flip" on:tap={toggleOrientation} class="bg-purple-500 text-white rounded-md m-1 text-sm" />
          <button col="2" text="Colors" on:tap={randomizeColors} class="bg-orange-500 text-white rounded-md m-1 text-sm" />
        </gridlayout>
      </gridlayout>
    </page>
  );
};
