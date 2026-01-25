import { createSignal, createMemo } from 'solid-js';

export const PieChartDemo = (props) => {
  let pieChartRef;
  const [currentStyle, setCurrentStyle] = createSignal('market');
  const [isDonut, setIsDonut] = createSignal(true);
  const [holeRadius, setHoleRadius] = createSignal(45);
  const [rotationAngle, setRotationAngle] = createSignal(0);
  const [selectedData, setSelectedData] = createSignal(null);

  const legendConfig = {
    enabled: true,
    horizontalAlignment: 'CENTER',
    verticalAlignment: 'BOTTOM',
    orientation: 'HORIZONTAL',
    form: 'CIRCLE',
    textSize: 10,
  };

  const animationConfig = {
    durationX: 1400,
    durationY: 1400,
    easingX: 'EaseOutBounce',
  };

  const getMarketData = () => ({
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
  });

  const getBudgetData = () => ({
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
  });

  const getTrafficData = () => ({
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
  });

  const chartData = createMemo(() => {
    switch (currentStyle()) {
      case 'budget': return getBudgetData();
      case 'traffic': return getTrafficData();
      default: return getMarketData();
    }
  });

  const centerText = createMemo(() => {
    switch (currentStyle()) {
      case 'budget': return 'Monthly\nBudget';
      case 'traffic': return 'Web\nTraffic';
      default: return 'Market\nShare';
    }
  });

  const chartTitle = createMemo(() => {
    const titles = {
      market: 'Market Share Distribution',
      budget: 'Monthly Expense Breakdown',
      traffic: 'Website Traffic Sources',
    };
    return titles[currentStyle()];
  });

  const selectedValue = createMemo(() => {
    const data = selectedData();
    if (!data) return 'No selection';
    const cData = chartData();
    const pieEntry = cData.dataSets[0]?.values[data.dataIndex];
    const label = typeof pieEntry === 'object' && pieEntry?.label ? pieEntry.label : `Slice ${data.dataIndex + 1}`;
    return `${label}: ${data.y.toFixed(1)}%`;
  });

  const onChartSelect = (args) => {
    console.log('[PieChartDemo] Selected:', args.data);
    setSelectedData(args.data);
  };

  const onChartDeselect = () => {
    console.log('[PieChartDemo] Deselected');
    setSelectedData(null);
  };

  const toggleDonut = () => {
    if (isDonut()) {
      setHoleRadius(0);
      setIsDonut(false);
    } else {
      setHoleRadius(45);
      setIsDonut(true);
    }
  };

  const spinChart = () => {
    setRotationAngle(rotationAngle() + 90);
  };

  const animateChart = () => {
    if (pieChartRef) {
      pieChartRef.animate({ durationX: 1400, durationY: 1400, easingX: 'EaseInOutCubic' });
    }
  };

  const onStyleChange = (args) => {
    const index = args.value ?? args.object?.selectedIndex ?? 0;
    const styles = ['market', 'budget', 'traffic'];
    setSelectedData(null);
    setCurrentStyle(styles[index]);
  };

  const styleIndex = createMemo(() => ['market', 'budget', 'traffic'].indexOf(currentStyle()));

  return (
    <page>
      <actionbar flat={true} title="Pie Charts" class="bg-slate-50 dark:bg-slate-900">
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
            <gridlayout col="1" class="w-8 h-8 rounded-full bg-orange-500" on:tap={() => setSelectedData(null)}>
              <label text="✕" class="text-white text-center align-middle text-sm font-bold" />
            </gridlayout>
          )}
        </gridlayout>

        {/* Chart Container */}
        <gridlayout row="1" class="m-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4">
          <piechart
            ref={pieChartRef}
            data={chartData()}
            legend={legendConfig}
            animation={animationConfig}
            chartDescription={{ text: chartTitle(), enabled: true }}
            drawHole={isDonut()}
            holeRadius={holeRadius()}
            transparentCircleRadius={holeRadius() + 5}
            holeColor="#FFFFFF"
            drawCenterText={isDonut()}
            centerText={centerText()}
            centerTextColor="#374151"
            centerTextSize={18}
            drawSliceText={true}
            usePercentValues={true}
            rotationEnabled={true}
            rotationAngle={rotationAngle()}
            highlightPerTapEnabled={true}
            on:select={onChartSelect}
            on:deselect={onChartDeselect}
            class="h-full"
          />
        </gridlayout>

        {/* Style Selector */}
        <segmentedbar row="2" selectedIndex={styleIndex()} on:selectedIndexChange={onStyleChange} class="m-4 text-sm">
          <segmentedbaritem title="Market" />
          <segmentedbaritem title="Budget" />
          <segmentedbaritem title="Traffic" />
        </segmentedbar>

        {/* Controls */}
        <gridlayout row="3" columns="*, *, *" class="p-4 pt-0">
          <button col="0" text="Spin" on:tap={spinChart} class="bg-orange-500 text-white rounded-xl m-1 text-sm" />
          <button col="1" text="Donut" on:tap={toggleDonut} class="bg-pink-500 text-white rounded-xl m-1 text-sm" />
          <button col="2" text="Animate" on:tap={animateChart} class="bg-purple-500 text-white rounded-xl m-1 text-sm" />
        </gridlayout>
      </gridlayout>
    </page>
  );
};
