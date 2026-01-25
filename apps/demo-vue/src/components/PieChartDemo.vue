<script lang="ts" setup>
import { ref, computed } from 'vue';
import type { PieChartData, ChartSelectEvent } from '@nstudio/ncharts';

const emit = defineEmits<{
  back: [];
}>();

const selectedValue = ref('');
const currentStyle = ref<'sales' | 'expenses' | 'donut'>('sales');
const dataKey = ref(0);

const styles: Array<{ id: 'sales' | 'expenses' | 'donut'; name: string }> = [
  { id: 'sales', name: 'Sales' },
  { id: 'expenses', name: 'Expenses' },
  { id: 'donut', name: 'Donut' },
];

function getSalesData(): PieChartData {
  return {
    dataSets: [
      {
        label: 'Sales by Product',
        values: [
          { value: 35, label: 'Product A' },
          { value: 25, label: 'Product B' },
          { value: 20, label: 'Product C' },
          { value: 12, label: 'Product D' },
          { value: 8, label: 'Other' },
        ],
        config: {
          colors: ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'],
          sliceSpace: 2,
          selectionShift: 8,
          drawValues: true,
          valueTextSize: 12,
          valueTextColor: '#FFFFFF',
        },
      },
    ],
  };
}

function getExpensesData(): PieChartData {
  return {
    dataSets: [
      {
        label: 'Expenses',
        values: [
          { value: 40, label: 'Salaries' },
          { value: 25, label: 'Operations' },
          { value: 15, label: 'Marketing' },
          { value: 12, label: 'R&D' },
          { value: 8, label: 'Other' },
        ],
        config: {
          colors: ['#10B981', '#06B6D4', '#3B82F6', '#8B5CF6', '#6B7280'],
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

function getDonutData(): PieChartData {
  return {
    dataSets: [
      {
        label: 'Sales Distribution',
        values: [
          { value: 35, label: 'Product A' },
          { value: 25, label: 'Product B' },
          { value: 20, label: 'Product C' },
          { value: 12, label: 'Product D' },
          { value: 8, label: 'Other' },
        ],
        config: {
          colors: ['#F59E0B', '#EF4444', '#8B5CF6', '#3B82F6', '#6B7280'],
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

const chartData = computed<PieChartData>(() => {
  // Reference dataKey to trigger reactivity on randomize
  dataKey.value;
  
  switch (currentStyle.value) {
    case 'expenses':
      return getExpensesData();
    case 'donut':
      return getDonutData();
    default:
      return getSalesData();
  }
});

const holeRadius = computed(() => {
  return currentStyle.value === 'donut' ? 45 : 0;
});

function selectStyle(styleId: 'sales' | 'expenses' | 'donut') {
  currentStyle.value = styleId;
}

function handleValueSelected(event: ChartSelectEvent) {
  if (event.data) {
    selectedValue.value = `${event.data.label}: ${event.data.value?.toFixed(1)}%`;
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
      <GridLayout columns="auto, *, auto" width="100%">
        <Label col="0" text="‹ Back" class="text-blue-500 text-lg" @tap="emit('back')" />
        <Label col="1" text="Pie Chart" class="text-lg font-bold text-slate-800 text-center" />
        <Label col="2" text="🔄" class="text-lg pr-4" @tap="randomizeData" />
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
              currentStyle === style.id ? 'bg-purple-500 text-white' : 'bg-white text-slate-600'
            ]"
            @tap="selectStyle(style.id)"
          />
        </StackLayout>
      </ScrollView>
      
      <!-- Chart -->
      <GridLayout row="1" class="bg-white m-4 rounded-xl shadow-sm p-4">
        <PieChart
          :key="dataKey + currentStyle"
          :data="chartData"
          :holeRadius="holeRadius"
          :rotationEnabled="true"
          :highlightPerTapEnabled="true"
          :usePercentValues="true"
          :drawEntryLabels="true"
          entryLabelColor="#FFFFFF"
          :entryLabelTextSize="10"
          @select="handleValueSelected"
          @deselect="handleValueDeselected"
        />
      </GridLayout>
      
      <!-- Selection info -->
      <StackLayout row="2" class="p-4 items-center">
        <Label 
          :text="selectedValue || 'Tap on a slice to select'" 
          class="text-sm text-slate-500"
        />
      </StackLayout>
    </GridLayout>
  </Page>
</template>
