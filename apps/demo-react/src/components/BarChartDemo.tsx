import * as React from "react";
import { useState, useRef } from "react";
import type { BarChartData, ChartAnimation, LegendConfig, XAxisConfig, YAxisConfigDual, ChartSelectData, BarChart } from "@nstudio/ncharts";

interface BarChartDemoProps {
  onBack: () => void;
}

type ChartStyle = 'revenue' | 'products' | 'grouped';

export const BarChartDemo = ({ onBack }: BarChartDemoProps) => {
  const barChartRef = useRef<BarChart | null>(null);
  const [currentStyle, setCurrentStyle] = useState<ChartStyle>('revenue');
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [selectedData, setSelectedData] = useState<ChartSelectData | null>(null);
  const [xAxisLabels, setXAxisLabels] = useState<string[]>(['Q1', 'Q2', 'Q3', 'Q4']);

  const legendConfig: LegendConfig = {
    enabled: true,
    horizontalAlignment: 'CENTER',
    verticalAlignment: 'BOTTOM',
    orientation: 'HORIZONTAL',
    form: 'SQUARE',
    textSize: 11,
  };

  const xAxisConfig: XAxisConfig = {
    enabled: true,
    position: 'BOTTOM',
    drawGridLines: false,
    drawLabels: true,
    granularity: 1,
    textSize: 10,
    valueFormatter: xAxisLabels,
  };

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

  const getRevenueData = (): BarChartData => ({
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

  const getProductsData = (): BarChartData => ({
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

  const getGroupedData = (): BarChartData => ({
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

  const getChartData = (): BarChartData => {
    switch (currentStyle) {
      case 'products': return getProductsData();
      case 'grouped': return getGroupedData();
      default: return getRevenueData();
    }
  };

  const getChartTitle = (): string => {
    const titles = {
      revenue: 'Quarterly Revenue',
      products: 'Product Sales',
      grouped: 'Monthly Comparison',
    };
    return titles[currentStyle];
  };

  const selectedValue = (): string => {
    if (!selectedData) return 'No selection';
    const labels = xAxisLabels;
    const label = labels?.[Math.floor(selectedData.x)] || `Point ${selectedData.x}`;
    return `${label}: ${selectedData.y.toFixed(1)} (Dataset ${selectedData.dataSetIndex + 1})`;
  };

  const onChartSelect = (args: any) => {
    console.log('[BarChartDemo] Selected:', args.data);
    setSelectedData(args.data);
  };

  const onChartDeselect = () => {
    console.log('[BarChartDemo] Deselected');
    setSelectedData(null);
  };

  const toggleOrientation = () => {
    setIsHorizontal(!isHorizontal);
  };

  const randomizeColors = () => {
    const colors = ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16'];
    const shuffled = [...colors].sort(() => Math.random() - 0.5);
    // This would require updating chart data with new colors
    console.log('Colors randomized:', shuffled);
  };

  const animateChart = () => {
    const chart = barChartRef.current;
    if (chart) {
      chart.animate({ durationX: 1000, durationY: 1000, easingX: 'EaseOutBack' });
    }
  };

  const selectStyle = (style: ChartStyle) => {
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

  const onStyleChange = (args: any) => {
    const index = args.value ?? args.object?.selectedIndex ?? 0;
    const styles: ChartStyle[] = ['revenue', 'products', 'grouped'];
    selectStyle(styles[index]);
  };

  const styleIndex = ['revenue', 'products', 'grouped'].indexOf(currentStyle);

  return (
    <page>
      <actionBar flat={true} title="Bar Charts" className="bg-slate-50 dark:bg-slate-900">
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
            <gridLayout col={1} className="w-8 h-8 rounded-full bg-emerald-500" onTap={() => setSelectedData(null)}>
              <label text="✕" className="text-white text-center align-middle text-sm font-bold" />
            </gridLayout>
          )}
        </gridLayout>

        {/* Chart Container */}
        <gridLayout row={1} className="m-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4">
          {!isHorizontal ? (
            <barChart
              ref={barChartRef}
              data={getChartData()}
              legend={legendConfig}
              xAxis={xAxisConfig}
              yAxis={yAxisConfig}
              animation={animationConfig}
              chartDescription={{ text: getChartTitle(), enabled: true }}
              highlightPerTapEnabled={true}
              onSelect={onChartSelect}
              onDeselect={onChartDeselect}
              className="h-full"
            />
          ) : (
            <horizontalBarChart
              ref={barChartRef}
              data={getChartData()}
              legend={legendConfig}
              xAxis={xAxisConfig}
              yAxis={yAxisConfig}
              animation={animationConfig}
              chartDescription={{ text: getChartTitle(), enabled: true }}
              highlightPerTapEnabled={true}
              onSelect={onChartSelect}
              onDeselect={onChartDeselect}
              className="h-full"
            />
          )}
        </gridLayout>

        {/* Style Selector */}
        <segmentedBar row={2} selectedIndex={styleIndex} onSelectedIndexChange={onStyleChange} className="m-4 text-sm">
          <segmentedBarItem title="Revenue" />
          <segmentedBarItem title="Products" />
          <segmentedBarItem title="Grouped" />
        </segmentedBar>

        {/* Controls */}
        <gridLayout row={3} columns="*, *, *" className="p-4 pt-0">
          <button col={0} text="Animate" onTap={animateChart} className="bg-emerald-500 text-white rounded-md m-1 text-sm" />
          <button col={1} text="Flip" onTap={toggleOrientation} className="bg-purple-500 text-white rounded-md m-1 text-sm" />
          <button col={2} text="Colors" onTap={randomizeColors} className="bg-orange-500 text-white rounded-md m-1 text-sm" />
        </gridLayout>
      </gridLayout>
    </page>
  );
};
