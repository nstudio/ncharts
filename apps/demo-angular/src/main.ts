// import '@angular/compiler';

import { bootstrapApplication, provideNativeScriptHttpClient, provideNativeScriptRouter, runNativeScriptAngularApp } from '@nativescript/angular';
import { provideZonelessChangeDetection } from '@angular/core';
import { withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app/app.routes';
import { App } from './app/app';
import './global';

// Register custom streamdown elements from the plugin
import { registerStreamdownElements } from '@nstudio/nstreamdown/angular';
registerStreamdownElements();

// Register chart elements from ncharts plugin
import { NCharts } from '@nstudio/ncharts';
// NCharts.debug = true;
import { registerNchartsElements } from '@nstudio/ncharts/angular';
import { Application, Utils } from '@nativescript/core';
registerNchartsElements();

if (__ANDROID__) {
  Application.android.on(Application.AndroidApplication.activityCreatedEvent, (args) => {
    Utils.android.enableEdgeToEdge(args.activity, {
      handleDarkMode(bar, resources) {
        return false;
      },
    });
  });
}

runNativeScriptAngularApp({
  appModuleBootstrap: () => {
    return bootstrapApplication(App, {
      providers: [provideNativeScriptHttpClient(withInterceptorsFromDi()), provideNativeScriptRouter(routes), provideZonelessChangeDetection()],
    });
  },
});
