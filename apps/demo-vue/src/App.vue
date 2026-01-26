<script lang="ts" setup>
import { ref } from 'vue';
import Home from './components/Home.vue';
import ChartsHome from './components/ChartsHome.vue';
import LineChartDemo from './components/LineChartDemo.vue';
import BarChartDemo from './components/BarChartDemo.vue';
import PieChartDemo from './components/PieChartDemo.vue';

const currentScreen = ref<'charts' | 'line' | 'bar' | 'pie'>('charts');
const navigationKey = ref(0);

const navigate = (screen: 'charts' | 'line' | 'bar' | 'pie') => {
  navigationKey.value++;
  currentScreen.value = screen;
};

const goBack = () => {
  navigationKey.value++;
  currentScreen.value = 'charts';
};
</script>

<template>
  <Frame id="main-frame" :key="navigationKey">
    <ChartsHome v-else-if="currentScreen === 'charts'" @back="goBack" @navigate="navigate" />
    <LineChartDemo v-else-if="currentScreen === 'line'" @back="goBack" />
    <BarChartDemo v-else-if="currentScreen === 'bar'" @back="goBack" />
    <PieChartDemo v-else-if="currentScreen === 'pie'" @back="goBack" />
  </Frame>
</template>
