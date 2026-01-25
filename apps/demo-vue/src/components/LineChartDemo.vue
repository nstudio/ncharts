<script lang="ts" setup>
import { ref, computed } from 'vue';
import type { LineChartData, ChartSelectEvent } from '@nstudio/ncharts';

const emit = defineEmits<{
  back: [];
}>();

const selectedValue = ref('');
const currentStyle = ref<'default' | 'gradient' | 'stepped'>('default');

const styles: Array<{ id: 'default' | 'gradient' | 'stepped'; name: string }> = [
  { id: 'default', name: 'Default' },
  { id: 'gradient', name: 'Gradient Fill' },
  { id: 'stepped', name: 'Stepped' },
];

const dataKey = ref(0);

function generateValues() {
  const values = [];
  for (let i = 0; i < 12; i++) {
    values.push({ x: i, y: Math.random() * 100 + 20 });
  }
  return values;
}

function getDefaultData(): LineChartData {
  return {
    dataSets: [
      {
        label: 'Series A',
        values: generateValues(),
        config: {
          color: '#3B82F6',
          lineWidth: 2,
          drawCircles: true,
          circleRadius: 4,
          circleColor: '#3B82F6',
          drawFilled: false,
          mode: 'HORIZONTAL_BEZIER',
          drawValues: false,
        },
      },
      {
        label: 'Series B',
        values: generateValues(),
        config: {
          color: '#10B981',
          lineWidth: 2,
          drawCircles: true,
          circleRadius: 4,
          circleColor: '#10B981',
          drawFilled: false,
          mode: 'HORIZONTAL_BEZIER',
          drawValues: false,
        },
      },
    ],
  };
}

function getGradientData(): LineChartData {
  return {
    dataSets: [
      {
        label: 'Series A',
        values: generateValues(),
        config: {
          color: '#8B5CF6',
          lineWidth: 2.5,
          drawCircles: true,
          circleRadius: 5,
          circleColor: '#8B5CF6',
          drawFilled: true,
          fillColor: '#8B5CF6',
          fillAlpha: 80,
          mode: 'CUBIC_BEZIER',
          drawValues: false,
        },
      },
      {
        label: 'Series B',
        values: generateValues(),
        config: {
          color: '#F59E0B',
          lineWidth: 2.5,
          drawCircles: true,
          circleRadius: 5,
          circleColor: '#F59E0B',
          drawFilled: true,
          fillColor: '#F59E0B',
          fillAlpha: 80,
          mode: 'CUBIC_BEZIER',
          drawValues: false,
        },
      },
    ],
  };
}

function getSteppedData(): LineChartData {
  return {
    dataSets: [
      {
        label: 'Series A',
        values: generateValues(),
        config: {
          color: '#EF4444',
          lineWidth: 2,
          drawCircles: true,
          circleRadius: 3,
          circleColor: '#EF4444',
          drawFilled: false,
          mode: 'STEPPED',
          drawValues: false,
        },
      },
      {
        label: 'Series B',
        values: generateValues(),
        config: {
          color: '#06B6D4',
          lineWidth: 2,
          drawCircles: true,
          circleRadius: 3,
          circleColor: '#06B6D4',
          drawFilled: false,
          mode: 'STEPPED',
          drawValues: false,
        },
      },
    ],
  };
}

const chartData = computed<LineChartData>(() => {
  // Reference dataKey to trigger reactivity on randomize
  dataKey.value;
  
  switch (currentStyle.value) {
    case 'gradient':
      return getGradientData();
    case 'stepped':
      return getSteppedData();
    default:
      return getDefaultData();
  }
});

function selectStyle(styleId: 'default' | 'gradient' | 'stepped') {
  currentStyle.value = styleId;
}

function handleValueSelected(event: ChartSelectEvent) {
  if (event.data) {
    selectedValue.value = `X: ${event.data.x?.toFixed(1)}, Y: ${event.data.y?.toFixed(1)}`;
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
        <Label col="1" text="Line Chart" class="text-lg font-bold text-slate-800 text-center" />
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
              currentStyle === style.id ? 'bg-blue-500 text-white' : 'bg-white text-slate-600'
            ]"
            @tap="selectStyle(style.id)"
          />
        </StackLayout>
      </ScrollView>
      
      <!-- Chart -->
      <GridLayout row="1" class="bg-white m-4 rounded-xl shadow-sm p-2">
        <LineChart
          :data="chartData"
          :key="dataKey"
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
          :text="selectedValue || 'Tap on chart to select a value'" 
          class="text-sm text-slate-500"
        />
      </StackLayout>
    </GridLayout>
  </Page>
</template>
