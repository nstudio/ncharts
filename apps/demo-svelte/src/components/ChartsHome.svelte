<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { Utils } from '@nativescript/core';

  const dispatch = createEventDispatcher();

  const chartDemos = [
    {
      title: 'Line Charts',
      description: 'Smooth curves, gradients, multiple datasets',
      icon: '📈',
      route: 'line',
    },
    {
      title: 'Bar Charts',
      description: 'Vertical bars, grouped, stacked options',
      icon: '📊',
      route: 'bar',
    },
    {
      title: 'Pie Charts',
      description: 'Donut, slices, animations, percentages',
      icon: '🥧',
      route: 'pie',
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

  function getFeatureRow(index: number): number {
    return Math.floor(index / 2);
  }

  function getFeatureCol(index: number): number {
    return index % 2;
  }

  function navigate(route: string) {
    dispatch('navigate', route);
  }

  function goBack() {
    dispatch('back');
  }

  function openUrl(url: string) {
    Utils.openUrl(url);
  }
</script>

<page>
  <actionBar flat={true} class="bg-slate-50 dark:bg-slate-900">
    <navigationButton text="‹" on:tap={goBack} />
    <label text="@nstudio/ncharts" class="text-lg font-bold text-slate-500 dark:text-slate-100" />
  </actionBar>

  <gridLayout rows="*" class="bg-slate-50 dark:bg-slate-900">
    <scrollView>
      <stackLayout class="p-4 pt-2">
        <!-- Hero section -->
        <gridLayout rows="auto" columns="*, auto" class="bg-gradient-to-br from-indigo-600 to-pink-600 dark:from-indigo-700 dark:to-pink-700 rounded-2xl p-6 mb-6">
          <stackLayout col={0}>
            <label text="NativeScript Charts" class="text-2xl dark:text-white text-slate-700 font-bold leading-[3]" />
            <label text="Beautiful, performant charting powered by DGCharts (iOS) & MPAndroidChart (Android)" class="text-sm dark:text-indigo-100 text-slate-400 leading-[3] mt-2" textWrap={true} />
          </stackLayout>
          <label col={1} text="📊" class="text-5xl" />
        </gridLayout>

        <!-- Chart type cards -->
        <label text="Chart Types" class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3" />

        {#each chartDemos as chart}
          <stackLayout class="mb-3" on:tap={() => navigate(chart.route)}>
            <gridLayout columns="60, *, auto" rows="70" class="bg-slate-100 dark:bg-slate-800 rounded-xl p-4 shadow-sm">
              <label col={0} text={chart.icon} class="text-3xl text-center" />
              <gridLayout col={1} rows="*,auto,auto,*" class="ml-3">
                <label row={1} text={chart.title} class="text-lg font-bold dark:text-white text-slate-800 leading-[3]" />
                <label row={2} text={chart.description} class="text-xs dark:text-white/80 text-slate-600 leading-[3]" textWrap={true} />
              </gridLayout>
              <label col={2} text="›" class="text-3xl dark:text-white/60 text-slate-400 font-light" />
            </gridLayout>
          </stackLayout>
        {/each}

        <!-- Features section -->
        <label text="Features" class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-6 mb-3" />

        <gridLayout columns="*, *" rows="auto, auto, auto, auto, auto" class="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm">
          {#each features as feature, index}
            <gridLayout row={getFeatureRow(index)} col={getFeatureCol(index)} columns="auto, *" class="p-2">
              <label col={0} text="✓" class="text-emerald-500 dark:text-emerald-400 text-sm mr-2" />
              <label col={1} text={feature} class="text-sm text-slate-600 dark:text-slate-300 leading-[3]" textWrap={true} />
            </gridLayout>
          {/each}
        </gridLayout>

        <!-- Tech stack -->
        <label text="Powered By" class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mt-6 mb-3" />

        <gridLayout columns="*, *" class="gap-3">
          <stackLayout col={0} class="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm mr-1" on:tap={() => openUrl('https://github.com/ChartsOrg/Charts')}>
            <label text="🍎" class="text-2xl text-center mb-2" />
            <label text="DGCharts" class="text-sm font-semibold text-slate-700 dark:text-slate-200 text-center" />
            <label text="iOS Native" class="text-xs text-slate-400 dark:text-slate-500 text-center" />
          </stackLayout>
          <stackLayout col={1} class="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm ml-1" on:tap={() => openUrl('https://github.com/PhilJay/MPAndroidChart')}>
            <label text="🤖" class="text-2xl text-center mb-2" />
            <label text="MPAndroidChart" class="text-sm font-semibold text-slate-700 dark:text-slate-200 text-center" />
            <label text="Android Native" class="text-xs text-slate-400 dark:text-slate-500 text-center" />
          </stackLayout>
        </gridLayout>

        <!-- Footer -->
        <label text="Gorgeous charts for NativeScript" class="text-xs text-slate-500 dark:text-slate-400 text-center mt-8 mb-4" />
      </stackLayout>
    </scrollView>
  </gridLayout>
</page>
