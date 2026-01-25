import * as React from "react";
import { Utils } from "@nativescript/core";

interface ChartDemoItem {
  title: string;
  description: string;
  icon: string;
  route: 'line' | 'bar' | 'pie';
  gradient: string;
}

interface ChartsHomeProps {
  onNavigate: (screen: 'line' | 'bar' | 'pie') => void;
  onBack: () => void;
}

const chartDemos: ChartDemoItem[] = [
  {
    title: 'Line Charts',
    description: 'Smooth curves, gradients, multiple datasets',
    icon: '📈',
    route: 'line',
    gradient: '',
  },
  {
    title: 'Bar Charts',
    description: 'Vertical bars, grouped, stacked options',
    icon: '📊',
    route: 'bar',
    gradient: '',
  },
  {
    title: 'Pie Charts',
    description: 'Donut, slices, animations, percentages',
    icon: '🥧',
    route: 'pie',
    gradient: '',
  },
];

const features = [
  'Native performance',
  'Smooth animations',
  'Touch interactions',
  'Pan & zoom',
  'Legends & axes',
  'Custom colors',
  'Gradient fills',
  'Value markers',
  'Dark mode',
  'Accessibility',
];

export const ChartsHome = ({ onNavigate, onBack }: ChartsHomeProps) => {
  const getFeatureRow = (index: number): number => Math.floor(index / 2);
  const getFeatureCol = (index: number): number => index % 2;

  const openUrl = (url: string) => {
    Utils.openUrl(url);
  };

  return (
    <page>
      <actionBar flat={true} className="bg-slate-50 dark:bg-slate-900">
        <navigationButton text="‹" android={{systemIcon: "ic_menu_back"}} onTap={onBack} />
        <label text="@nstudio/ncharts" className="text-lg font-bold text-slate-500 dark:text-slate-100" />
      </actionBar>

      <gridLayout rows="*" className="bg-slate-50 dark:bg-slate-900">
        <scrollView>
          <stackLayout className="p-4 pt-2">
            {/* Hero section */}
            <gridLayout rows="auto" columns="*, auto" className="bg-gradient-to-br from-indigo-600 to-pink-600 dark:from-indigo-700 dark:to-pink-700 rounded-2xl p-6 mb-6">
              <stackLayout col={0}>
                <label text="NativeScript Charts" className="text-2xl dark:text-white text-slate-700 font-bold leading-[3]" />
                <label text="Beautiful, performant charting powered by DGCharts (iOS) & MPAndroidChart (Android)" className="text-sm dark:text-indigo-100 text-slate-400 leading-[3] mt-2" textWrap={true} />
              </stackLayout>
              <label col={1} text="📊" className="text-5xl" />
            </gridLayout>

            {/* Chart type cards */}
            <label text="Chart Types" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3" />

            {chartDemos.map((chart) => (
              <stackLayout key={chart.route} className="mb-3" onTap={() => onNavigate(chart.route)}>
                <gridLayout columns="60, *, auto" rows="70" className="bg-slate-100 dark:bg-slate-800 rounded-xl p-4 shadow-sm">
                  {/* Icon */}
                  <label col={0} text={chart.icon} className="text-3xl text-center" />

                  {/* Text */}
                  <gridLayout col={1} rows="*,auto,auto,*" className="ml-3">
                    <label row={1} text={chart.title} className="text-lg font-bold dark:text-white text-slate-800 leading-[3]" />
                    <label row={2} text={chart.description} className="text-xs dark:text-white/80 text-slate-600 leading-[3]" textWrap={true} />
                  </gridLayout>

                  {/* Arrow */}
                  <label col={2} text="›" className="text-3xl dark:text-white/60 text-slate-400 font-light" />
                </gridLayout>
              </stackLayout>
            ))}

            {/* Features section */}
            <label text="Features" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-6 mb-3" />

            <gridLayout columns="*, *" rows="auto, auto, auto, auto, auto" className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm">
              {features.map((feature, index) => (
                <gridLayout key={index} row={getFeatureRow(index)} col={getFeatureCol(index)} columns="auto, *" className="p-2">
                  <label col={0} text="✓" className="text-emerald-500 dark:text-emerald-400 text-sm mr-2" />
                  <label col={1} text={feature} className="text-sm text-slate-600 dark:text-slate-300 leading-[3]" textWrap={true} />
                </gridLayout>
              ))}
            </gridLayout>

            {/* Tech stack */}
            <label text="Powered By" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-6 mb-3" />

            <gridLayout columns="*, *" className="gap-3">
              <stackLayout col={0} className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm mr-1" onTap={() => openUrl('https://github.com/ChartsOrg/Charts')}>
                <label text="🍎" className="text-2xl text-center mb-2" />
                <label text="DGCharts" className="text-sm font-semibold text-slate-700 dark:text-slate-200 text-center" />
                <label text="iOS Native" className="text-xs text-slate-400 dark:text-slate-500 text-center" />
              </stackLayout>
              <stackLayout col={1} className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm ml-1" onTap={() => openUrl('https://github.com/PhilJay/MPAndroidChart')}>
                <label text="🤖" className="text-2xl text-center mb-2" />
                <label text="MPAndroidChart" className="text-sm font-semibold text-slate-700 dark:text-slate-200 text-center" />
                <label text="Android Native" className="text-xs text-slate-400 dark:text-slate-500 text-center" />
              </stackLayout>
            </gridLayout>

            {/* Footer */}
            <label text="Gorgeous charts for NativeScript" className="text-xs text-slate-500 dark:text-slate-400 text-center mt-8 mb-4" />
          </stackLayout>
        </scrollView>
      </gridLayout>
    </page>
  );
};
