/// <reference types='vitest' />
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import * as path from 'path';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/react-native',

  plugins: [
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsConfigFilePath: path.join(__dirname, 'tsconfig.lib.json'),
      skipDiagnostics: true,
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: {
        index: 'src/index.ts',
        babel: 'src/babel.ts',
        setup: 'src/setup.ts',
      },
      name: 'react-native',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      output: {
        preserveModules: true,
      },
      // External packages that should not be bundled into your library.
      external: [
        '@craftzdog/react-native-buffer',
        'babel-plugin-module-resolver',
        'react-native',
        'react-native-get-random-values',
        'react-native-mmkv',
        'react-native-quick-crypto',
        'stream-browserify',
        '@walletconnect/react-native-compat',
        '@react-native-community/netinfo',
        '@ethersproject/shims',
        'fast-text-encoding',
        '@quirks/store',
        '@quirks/core',
        'zustand',
        'zustand/middleware',
      ],
    },
  },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
