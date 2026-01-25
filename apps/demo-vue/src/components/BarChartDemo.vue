<script lang="ts" setup>
import { ref, computed } from 'vue';
import type { BarChartData, ChartSelectEvent } from '@nstudio/ncharts';

const emit = defineEmits<{
  back: [];
}>();

const selectedValue = ref('');
const currentStyle = ref<'revenue' | 'products' | 'grouped'>('revenue');
const isHorizontal = ref(false);
const dataKey = ref(0);

const styles: Array<{ id: 'revenue' | 'products' | 'grouped'; name: string }> = [
  { id: 'revenue', name: 'Revenue' },
  { id: 'products', name: 'Products' },
  { id: 'grouped', name: 'Grouped' },
];

function getRevenueData(): BarChartData {
  return {
    dataSets: [
      {
        label: 'Revenue (M)',
        values: [
          { x: 0, y: Math.random() * 3 + 1.5 },
          { x: 1, y: Math.random() * 3 + 2 },
          { x: 2, y: Math.random() * 3 + 1.8 },
          { x: 3, y: Math.random() * 3 + 2.5 },
        ],
        config: {
          colors: ['#10B981', '#34D399', '#6EE7B7', '#A7F3D0'],
          drawValues: true,
          valueTextSize: 12,
          valueTextColor: '#FFFFFF',
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
          { x: 0, y: Math.random() * 500 + 500 },
          { x: 1, y: Math.random() * 300 + 300 },
          { x: 2, y: Math.random() * 400 + 400 },
          { x: 3, y: Math.random() * 200 + 200 },
          { x: 4, y: Math.random() * 350 + 350 },
        ],
        config: {
          colors: ['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE', '#DBEAFE'],
          drawValues: true,
          valueTextSize: 11,
          valueTextColor: '#FFFFFF',
        },
      },
    ],
  };
}

function getGroupedData(): BarChartData {
  return {
    dataSets: [
      {
        label: '2023',
        values: [
          { x: 0, y: Math.random() * 50 + 30 },
          { x: 1, y: Math.random() * 50 + 40 },
          { x: 2, y: Math.random() * 50 + 35 },
          { x: 3, y: Math.random() * 50 + 45 },
          { x: 4, y: Math.random() * 50 + 38 },
          { x: 5, y: Math.random() * 50 + 42 },
        ],
        config: {
          color: '#8B5CF6',
          drawValues: false,
        },
      },
      {
        label: '2024',
        values: [
          { x: 0, y: Math.random() * 60 + 40 },
          { x: 1, y: Math.random() * 60 + 50 },
          { x: 2, y: Math.random() * 60 + 45 },
          { x: 3, y: Math.random() * 60 + 55 },
          { x: 4, y: Math.random() * 60 + 48 },
          { x: 5, y: Math.random() * 60 + 52 },
        ],
        config: {
          color: '#F59E0B',
          drawValues: false,
        },
      },
    ],
    config: {
      barWidth: 0.35,
      group: {
        fromX: 0,
        groupSpace: 0.1,
        barSpace: 0.05,
      },
    },
  };
}

const chartData = computed<BarChartData>(() => {
  // Reference dataKey to trigger reactivity on randomize
  dataKey.value;
  
  switch (currentStyle.value) {
    case 'products':
      return getProductsData();
    case 'grouped':
      return getGroupedData();
    default:
      return getRevenueData();
  }
});

function selectStyle(styleId: 'revenue' | 'products' | 'grouped') {
  currentStyle.value = styleId;
}

function toggleOrientation() {
  isHorizontal.value = !isHorizontal.value;
}

function handleValueSelected(event: ChartSelectEvent) {
  if (event.data) {
    selectedValue.value = `Index: ${event.data.x?.toFixed(0)}, Value: ${event.data.y?.toFixed(0)}`;
  }
}

function handleValueDeselected() {
  selectedValue.value = '';
}

function randomizeData() {
  dataKey.value++;
}
</script>

<template>
  <Page>
    <ActionBar flat="true" class="bg-slate-50">
      <GridLayout columns="auto, *, auto, auto" width="100%">
        <Label col="0" text="‹ Back" class="text-blue-500 text-lg" @tap="emit('back')" />
        <Label col="1" text="Bar Chart" class="text-lg font-bold text-slate-800 text-center" />
        <Label 
          col="2" 
          :text="isHorizontal ? '📊' : '📶'" 
          class="text-lg pr-2" 
          @tap="toggleOrientation" 
        />
        <Label col="3" text="🔄" class="text-lg pr-4" @tap="randomizeData" />
      </GridLayout>
    </ActionBar>

    <GridLayout rows="auto, *, auto" class="bg-slate-50">
      <!-- Style selector -->
      <ScrollView row="0" orientation="horizontal" class="p-4">
        <StackLayout orientation="horizontal">
          <Label 
            v-for="style in styles" 
            :key="style.id"
            :text="style.name"
            :class="[
              'px-4 py-2 mr-2 rounded-full text-sm font-medium',
              currentStyle === style.id ? 'bg-green-500 text-white' : 'bg-white text-slate-600'
            ]"
            @tap="selectStyle(style.id)"
          />
        </StackLayout>
      </ScrollView>
      
      <!-- Chart -->
      <GridLayout row="1" class="bg-white m-4 rounded-xl shadow-sm p-2">
        <HorizontalBarChart
          v-if="isHorizontal"
          :key="'h-' + dataKey"
          :data="chartData"
          :dragEnabled="true"
          :scaleEnabled="true"
          :pinchZoom="true"
          :highlightPerTapEnabled="true"
          @select="handleValueSelected"
          @deselect="handleValueDeselected"
        />
        <BarChart
          v-else
          :key="'v-' + dataKey"
          :data="chartData"
          :dragEnabled="true"
          :scaleEnabled="true"
          :pinchZoom="true"
          :highlightPerTapEnabled="true"
          @select="handleValueSelected"
          @deselect="handleValueDeselected"
        />
      </GridLayout>
      
      <!-- Selection info -->
      <StackLayout row="2" class="p-4 items-center">
        <Label 
          :text="selectedValue || 'Tap on a bar to select'" 
          class="text-sm text-slate-500"
        />
      </StackLayout>
    </GridLayout>
  </Page>
</template>
