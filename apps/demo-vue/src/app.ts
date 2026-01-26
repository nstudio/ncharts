import { createApp } from 'nativescript-vue';
import App from './App.vue';
import { registerNchartsElements } from '@nstudio/ncharts/vue';

// Register chart elements
registerNchartsElements();

createApp(App).start();
