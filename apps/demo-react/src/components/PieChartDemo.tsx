import * as React from "react";
import { useState, useRef } from "react";
import type { PieChartData, ChartAnimation, LegendConfig, ChartSelectData, PieChart } from "@nstudio/ncharts";

interface PieChartDemoProps {
  onBack: () => void;
}

type ChartStyle = 'market' | 'budget' | 'traffic';

export const PieChartDemo = ({ onBack }: PieChartDemoProps) => {
  const pieChartRef = useRef<PieChart | null>(null);
  const [currentStyle, setCurrentStyle] = useState<ChartStyle>('market');
  const [isDonut, setIsDonut] = useState(true);
  const [holeRadius, setHoleRadius] = useState(45);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [selectedData, setSelectedData] = useState<ChartSelectData | null>(null);

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

  const getMarketData = (): PieChartData => ({
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

  const getBudgetData = (): PieChartData => ({
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

  const getTrafficData = (): PieChartData => ({
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

  const getChartData = (): PieChartData => {
    switch (currentStyle) {
      case 'budget': return getBudgetData();
      case 'traffic': return getTrafficData();
      default: return getMarketData();
    }
  };

  const getCenterText = (): string => {
    switch (currentStyle) {
      case 'budget': return 'Monthly\nBudget';
      case 'traffic': return 'Web\nTraffic';
      default: return 'Market\nShare';
    }
  };

  const getChartTitle = (): string => {
    const titles = {
      market: 'Market Share Distribution',
      budget: 'Monthly Expense Breakdown',
      traffic: 'Website Traffic Sources',
    };
    return titles[currentStyle];
  };

  const selectedValue = (): string => {
    if (!selectedData) return 'No selection';
    const chartData = getChartData();
    const pieEntry = chartData.dataSets[0]?.values[selectedData.dataIndex];
    const label = typeof pieEntry === 'object' && pieEntry?.label ? pieEntry.label : `Slice ${selectedData.dataIndex + 1}`;
    return `${label}: ${selectedData.y.toFixed(1)}%`;
  };

  const onChartSelect = (args: any) => {
    console.log('[PieChartDemo] Selected:', args.data);
    setSelectedData(args.data);
  };

  const onChartDeselect = () => {
    console.log('[PieChartDemo] Deselected');
    setSelectedData(null);
  };

  const toggleDonut = () => {
    if (isDonut) {
      setHoleRadius(0);
      setIsDonut(false);
    } else {
      setHoleRadius(45);
      setIsDonut(true);
    }
  };

  const spinChart = () => {
    setRotationAngle(rotationAngle + 90);
  };

  const animateChart = () => {
    const chart = pieChartRef.current;
    if (chart) {
      chart.animate({ durationX: 1400, durationY: 1400, easingX: 'EaseInOutCubic' });
    }
  };

  const selectStyle = (style: ChartStyle) => {
    setSelectedData(null);
    setCurrentStyle(style);
  };

  const onStyleChange = (args: any) => {
    const index = args.value ?? args.object?.selectedIndex ?? 0;
    const styles: ChartStyle[] = ['market', 'budget', 'traffic'];
    selectStyle(styles[index]);
  };

  const styleIndex = ['market', 'budget', 'traffic'].indexOf(currentStyle);

  return (
    <page>
      <actionBar flat={true} title="Pie Charts" className="bg-slate-50 dark:bg-slate-900">
        <navigationButton text="" android={{systemIcon: "ic_menu_back"}} onTap={onBack} />
      </actionBar>

      <gridLayout rows="auto, *, auto, auto" className="bg-slate-50 dark:bg-slate-900">
        {/* Selected Value Display */}
        <gridLayout row={0} columns="*, auto" className="p-4 pb-0">
          <stackLayout col={0}>
            <label className="text-xs text-slate-500 dark:text-slate-400" text="TAP ON CHART TO SELECT" />
            <label className="text-lg font-bold text-slate-800 dark:text-white" text={selectedValue()} />
          </stackLayout>
          {selectedData && (
            <gridLayout col={1} className="w-8 h-8 rounded-full bg-orange-500" onTap={() => setSelectedData(null)}>
              <label text="✕" className="text-white text-center align-middle text-sm font-bold" />
            </gridLayout>
          )}
        </gridLayout>

        {/* Chart Container */}
        <gridLayout row={1} className="m-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4">
          <pieChart
            ref={pieChartRef}
            data={getChartData()}
            legend={legendConfig}
            animation={animationConfig}
            chartDescription={{ text: getChartTitle(), enabled: true }}
            drawHole={isDonut}
            holeRadius={holeRadius}
            transparentCircleRadius={holeRadius + 5}
            holeColor="#FFFFFF"
            drawCenterText={isDonut}
            centerText={getCenterText()}
            centerTextColor="#374151"
            centerTextSize={18}
            drawSliceText={true}
            usePercentValues={true}
            rotationEnabled={true}
            rotationAngle={rotationAngle}
            highlightPerTapEnabled={true}
            onSelect={onChartSelect}
            onDeselect={onChartDeselect}
            className="h-full"
          />
        </gridLayout>

        {/* Style Selector */}
        <segmentedBar row={2} selectedIndex={styleIndex} onSelectedIndexChange={onStyleChange} className="m-4 text-sm">
          <segmentedBarItem title="Market" />
          <segmentedBarItem title="Budget" />
          <segmentedBarItem title="Traffic" />
        </segmentedBar>

        {/* Controls */}
        <gridLayout row={3} columns="*, *, *" className="p-4 pt-0">
          <button col={0} text="Spin" onTap={spinChart} className="bg-orange-500 text-white rounded-xl m-1 text-sm" />
          <button col={1} text="Donut" onTap={toggleDonut} className="bg-pink-500 text-white rounded-xl m-1 text-sm" />
          <button col={2} text="Animate" onTap={animateChart} className="bg-purple-500 text-white rounded-xl m-1 text-sm" />
        </gridLayout>
      </gridLayout>
    </page>
  );
};
