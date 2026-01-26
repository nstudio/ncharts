import { bootstrapApplication, provideNativeScriptHttpClient, provideNativeScriptRouter, runNativeScriptAngularApp } from '@nativescript/angular';
import { provideZonelessChangeDetection } from '@angular/core';
import { withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app/app.routes';
import { App } from './app/app';
import './global';

// Register chart elements from ncharts plugin
import { NCharts } from '@nstudio/ncharts';
// NCharts.debug = true;
import { registerNchartsElements } from '@nstudio/ncharts/angular';
registerNchartsElements();

runNativeScriptAngularApp({
  appModuleBootstrap: () => {
    return bootstrapApplication(App, {
      providers: [provideNativeScriptHttpClient(withInterceptorsFromDi()), provideNativeScriptRouter(routes), provideZonelessChangeDetection()],
    });
  },
});
