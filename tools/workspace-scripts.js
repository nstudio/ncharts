module.exports = {
  message: 'NativeScript Plugins ~ made with ❤️  Choose a command to start...',
  pageSize: 32,
  scripts: {
    default: 'nps-i',
    nx: {
      script: 'nx',
      description: 'Execute any command with the @nrwl/cli',
    },
    format: {
      script: 'nx format:write',
      description: 'Format source code of the entire workspace (auto-run on precommit hook)',
    },
    '🔧': {
      script: `npx cowsay "NativeScript plugin demos make developers 😊"`,
      description: '_____________  Apps to demo plugins with  _____________',
    },
    // demos
    apps: {
      '...Vanilla...': {
        script: `npx cowsay "Nothing wrong with vanilla 🍦"`,
        description: ` 🔻 Vanilla`,
      },
      demo: {
        clean: {
          script: 'nx clean demo',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx debug demo ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx debug demo android',
          description: '⚆  Run Android  🤖',
        },
      },
      'demo-angular': {
        clean: {
          script: 'nx clean demo-angular',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx debug demo-angular ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx debug demo-angular android',
          description: '⚆  Run Android  🤖',
        },
      },
      'demo-react': {
        clean: {
          script: 'nx clean demo-react',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx debug demo-react ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx debug demo-react android',
          description: '⚆  Run Android  🤖',
        },
      },
      'demo-solid': {
        clean: {
          script: 'nx clean demo-solid',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx debug demo-solid ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx debug demo-solid android',
          description: '⚆  Run Android  🤖',
        },
      },
      'demo-svelte': {
        clean: {
          script: 'nx clean demo-svelte',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx debug demo-svelte ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx debug demo-svelte android',
          description: '⚆  Run Android  🤖',
        },
      },
      'demo-vue': {
        clean: {
          script: 'nx clean demo-vue',
          description: '⚆  Clean  🧹',
        },
        ios: {
          script: 'nx debug demo-vue ios',
          description: '⚆  Run iOS  ',
        },
        android: {
          script: 'nx debug demo-vue android',
          description: '⚆  Run Android  🤖',
        },
      },
    },
    '⚙️': {
      script: `npx cowsay "@nstudio/* packages will keep your ⚙️ cranking"`,
      description: '_____________  @nstudio/*  _____________',
    },
    // packages
    // build output is always in dist/packages
    '@nstudio': {
      // @nstudio/nstreamdown
      nstreamdown: {
        build: {
          script: 'nx run nstreamdown:build.all',
          description: '@nstudio/nstreamdown: Build',
        },
      },
      // @nstudio/ncharts
      ncharts: {
        build: {
          script: 'nx run ncharts:build.all',
          description: '@nstudio/ncharts: Build',
        },
      },
      'build-all': {
        script: 'nx run-many --target=build.all --all',
        description: 'Build all packages',
      },
    },
    '⚡': {
      script: `npx cowsay "Focus only on source you care about for efficiency ⚡"`,
      description: '_____________  Focus (VS Code supported)  _____________',
    },
    focus: {
      nstreamdown: {
        script: 'nx run nstreamdown:focus',
        description: 'Focus on @nstudio/nstreamdown',
      },
      ncharts: {
        script: 'nx run ncharts:focus',
        description: 'Focus on @nstudio/ncharts',
      },
      reset: {
        script: 'nx g @nativescript/plugin-tools:focus-packages',
        description: 'Reset Focus',
      },
    },
    '.....................': {
      script: `npx cowsay "That's all for now folks ~"`,
      description: '.....................',
    },
  },
};
