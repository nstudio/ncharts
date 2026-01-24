import { NativeScriptConfig } from '@nativescript/core';

export default {
  ios: {
    SPMPackages: [
      {
        name: 'DGCharts',
        libs: ['DGCharts'],
        repositoryURL: 'https://github.com/ChartsOrg/Charts.git',
        version: '5.1.0',
      },
    ],
  },
} as NativeScriptConfig;
