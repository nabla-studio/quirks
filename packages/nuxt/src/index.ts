import { defineNuxtModule } from '@nuxt/kit';
import { functionsStore, functionsVue } from './functions';

const packageStoreName = '@quirks/store' as const;
const packageVueName = '@quirks/vue' as const;
const packageName = '@quirks/nuxt' as const;

export interface QuirksNuxtOptions {
  /**
   * @default true
   */
  autoImports?: boolean;
  /**
   * List of imports to exclude from auto-imports
   */
  excludeImports?: string[];
}

export default defineNuxtModule<QuirksNuxtOptions>({
  meta: {
    name: packageName,
    configKey: packageName,
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {
    autoImports: true,
    excludeImports: [],
  },
  setup(options, nuxt) {
    // add packages to transpile target for alias resolution
    nuxt.options.build = nuxt.options.build || {};
    nuxt.options.build.transpile = nuxt.options.build.transpile || [];

    const exclude = nuxt.options.quirks?.excludeImports || [];

    if (options.autoImports) {
      nuxt.hook('imports:sources', (sources) => {
        if (sources.find((i) => i.from === packageName)) return;

        const importsStore = functionsStore
          .filter((name) => !exclude.includes(name))
          .map((name) => {
            return {
              from: packageStoreName,
              name,
              as: name,
              priority: -1,
            };
          });

        const importsVue = functionsVue
          .filter((name) => !exclude.includes(name))
          .map((name) => {
            return {
              from: packageVueName,
              name,
              as: name,
              priority: -1,
            };
          });

        sources.push({
          from: packageName,
          imports: [...importsStore, ...importsVue],
          priority: -1,
        });
      });
    }
  },
});

declare module '@nuxt/schema' {
  interface NuxtConfig {
    quirks?: QuirksNuxtOptions;
  }
  interface NuxtOptions {
    quirks?: QuirksNuxtOptions;
  }
}
