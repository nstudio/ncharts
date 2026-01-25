import { createApp, registerElement } from 'nativescript-vue';
import App from './App.vue';
import { registerStreamdownElements } from '@nstudio/nstreamdown/vue';
import { registerNchartsElements } from '@nstudio/ncharts/vue';

// Register streamdown elements
registerStreamdownElements();

// Register chart elements
registerNchartsElements();

createApp(App).start();
