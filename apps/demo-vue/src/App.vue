<script lang="ts" setup>
import { ref } from 'vue';
import Home from './components/Home.vue';
import StreamdownDemo from './components/StreamdownDemo.vue';
import ChatDemo from './components/ChatDemo.vue';
import ChartsHome from './components/ChartsHome.vue';
import LineChartDemo from './components/LineChartDemo.vue';
import BarChartDemo from './components/BarChartDemo.vue';
import PieChartDemo from './components/PieChartDemo.vue';

const currentScreen = ref<'home' | 'demo' | 'chat' | 'charts' | 'line' | 'bar' | 'pie'>('home');
const navigationKey = ref(0);

const navigate = (screen: 'home' | 'demo' | 'chat' | 'charts' | 'line' | 'bar' | 'pie') => {
  navigationKey.value++;
  currentScreen.value = screen;
};

const goBack = () => {
  navigationKey.value++;
  // If in a chart sub-screen, go back to charts home
  if (['line', 'bar', 'pie'].includes(currentScreen.value)) {
    currentScreen.value = 'charts';
  } else {
    currentScreen.value = 'home';
  }
};
</script>

<template>
  <Frame id="main-frame" :key="navigationKey">
    <Home v-if="currentScreen === 'home'" @navigate="navigate" />
    <StreamdownDemo v-else-if="currentScreen === 'demo'" @back="goBack" />
    <ChatDemo v-else-if="currentScreen === 'chat'" @back="goBack" />
    <ChartsHome v-else-if="currentScreen === 'charts'" @back="goBack" @navigate="navigate" />
    <LineChartDemo v-else-if="currentScreen === 'line'" @back="goBack" />
    <BarChartDemo v-else-if="currentScreen === 'bar'" @back="goBack" />
    <PieChartDemo v-else-if="currentScreen === 'pie'" @back="goBack" />
  </Frame>
</template>
