import * as React from 'react';
import { start, registerElement, NativeScriptProps, ViewAttributes } from 'react-nativescript';
import { registerNchartsElements } from '@nstudio/ncharts/react';
import { App } from './components/App';

// In NativeScript, the app.ts file is the entry point to your application. You
// can use this file to perform app-level initialization, but the primary
// purpose of the file is to pass control to the app's first module.

// Controls react-nativescript log verbosity.
// - true: all logs;
// - false: only error logs.
Object.defineProperty(global, '__DEV__', { value: false });

// Register chart elements
registerNchartsElements();

start(React.createElement(App, {}, null));

// Do not place any code after the application has been started as it will not
// be executed on iOS.
