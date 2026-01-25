<script lang="ts" setup>
const emit = defineEmits<{
  back: [];
  navigate: [screen: 'line' | 'bar' | 'pie'];
}>();

interface ChartItem {
  title: string;
  description: string;
  icon: string;
  route: 'line' | 'bar' | 'pie';
  color: string;
}

const chartDemos: ChartItem[] = [
  {
    title: 'Line Chart',
    description: 'Interactive line charts with multiple datasets',
    icon: '📈',
    route: 'line',
    color: 'bg-blue-100',
  },
  {
    title: 'Bar Chart',
    description: 'Vertical and horizontal bar charts',
    icon: '📊',
    route: 'bar',
    color: 'bg-green-100',
  },
  {
    title: 'Pie Chart',
    description: 'Pie and donut charts with animations',
    icon: '🥧',
    route: 'pie',
    color: 'bg-purple-100',
  },
];

function navigateTo(route: 'line' | 'bar' | 'pie') {
  emit('navigate', route);
}
</script>

<template>
  <Page>
    <ActionBar flat="true" class="bg-slate-50">
      <GridLayout columns="auto, *" width="100%">
        <Label col="0" text="‹ Back" class="text-blue-500 text-lg" @tap="emit('back')" />
        <Label col="1" text="Charts" class="text-lg font-bold text-slate-800 text-center" />
      </GridLayout>
    </ActionBar>

    <GridLayout rows="*" class="bg-slate-50">
      <ScrollView row="0">
        <StackLayout class="p-4 pt-6">
          <!-- Hero section -->
          <StackLayout class="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 mb-6">
            <Label text="Native Charts" class="text-xl text-slate-500 font-bold text-center" />
            <Label 
              text="Powerful charting with DGCharts (iOS) and MPAndroidChart (Android)" 
              class="text-sm text-purple-300 text-center mt-2 leading-[3]" 
              textWrap="true" 
            />
          </StackLayout>

          <!-- Chart demo cards -->
          <Label text="Chart Types" class="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3" />

          <StackLayout v-for="demo in chartDemos" :key="demo.route" class="mb-3" @tap="navigateTo(demo.route)">
            <GridLayout columns="48, *, auto" rows="48" class="bg-white rounded-xl p-3 shadow-sm">
              <GridLayout col="0" rows="*" columns="*" :class="'w-12 h-12 rounded-xl ' + demo.color">
                <Label :text="demo.icon" class="text-xl text-center" />
              </GridLayout>
              <GridLayout col="1" rows="auto, auto" class="ml-3">
                <Label row="0" :text="demo.title" class="text-base font-semibold text-slate-800" />
                <Label row="1" :text="demo.description" class="text-xs text-slate-500" textWrap="true" />
              </GridLayout>
              <Label col="2" text="›" class="text-2xl text-slate-300 font-light" />
            </GridLayout>
          </StackLayout>

          <!-- Features list -->
          <Label text="Features" class="text-xs font-semibold text-slate-400 uppercase tracking-wide mt-6 mb-3" />

          <StackLayout class="bg-white rounded-xl p-4 shadow-sm">
            <GridLayout columns="auto, *" class="mb-2">
              <Label col="0" text="✓" class="text-green-500 text-sm mr-2" />
              <Label col="1" text="Native performance" class="text-sm text-slate-600" />
            </GridLayout>
            <GridLayout columns="auto, *" class="mb-2">
              <Label col="0" text="✓" class="text-green-500 text-sm mr-2" />
              <Label col="1" text="Interactive gestures" class="text-sm text-slate-600" />
            </GridLayout>
            <GridLayout columns="auto, *" class="mb-2">
              <Label col="0" text="✓" class="text-green-500 text-sm mr-2" />
              <Label col="1" text="Smooth animations" class="text-sm text-slate-600" />
            </GridLayout>
            <GridLayout columns="auto, *" class="mb-2">
              <Label col="0" text="✓" class="text-green-500 text-sm mr-2" />
              <Label col="1" text="Custom styling" class="text-sm text-slate-600" />
            </GridLayout>
            <GridLayout columns="auto, *">
              <Label col="0" text="✓" class="text-green-500 text-sm mr-2" />
              <Label col="1" text="Real-time updates" class="text-sm text-slate-600" />
            </GridLayout>
          </StackLayout>

          <!-- Footer -->
          <Label text="Powered by DGCharts & MPAndroidChart" class="text-xs text-slate-400 text-center mt-8 mb-4" />
        </StackLayout>
      </ScrollView>
    </GridLayout>
  </Page>
</template>
