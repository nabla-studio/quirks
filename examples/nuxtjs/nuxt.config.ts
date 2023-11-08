import { defineNuxtConfig } from 'nuxt/config';
import { join } from 'path';
import { workspaceRoot } from '@nx/devkit';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

function getMonorepoTsConfigPaths(tsConfigPath: string) {
  const tsPaths = require(tsConfigPath)?.compilerOptions?.paths as Record<
    string,
    string[]
  >;

  const alias: Record<string, string> = {};
  if (tsPaths) {
    for (const p in tsPaths) {
      // '@org/something/*': ['libs/something/src/*'] => '@org/something': '{pathToWorkspaceRoot}/libs/something/src'
      alias[p.replace(/\/\*$/, '')] = join(
        workspaceRoot,
        tsPaths[p][0].replace(/\/\*$/, ''),
      );
    }
  }

  return alias;
}

export default defineNuxtConfig({
  /**
   * aliases set here will be added to the auto generate tsconfig by Nuxt
   * https://nuxt.com/docs/guide/directory-structure/tsconfig
   **/
  alias: getMonorepoTsConfigPaths('../../tsconfig.base.json'),
  devtools: { enabled: true },
  modules: ['../../packages/nuxt/src/index'],
  vite: {
    resolve: {
      alias: {
        process: 'process/browser',
        util: 'util',
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'esnext',
        define: {
          global: 'globalThis',
        },
        plugins: [
          NodeGlobalsPolyfillPlugin({
            process: true,
            buffer: true,
            crypto: true,
          }),
          NodeModulesPolyfillPlugin(),
        ],
        supported: {
          bigint: true,
        },
      },
    },
  },
});
