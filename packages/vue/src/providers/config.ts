import { createConfig, type Config } from '@quirks/store';

export interface QuirksConfigProps {
  config: Config;
}

export interface QuirksConfigState {
  store: ReturnType<typeof createConfig>;
}

export const ConfigStateSymbol = Symbol('Config state provider identifier');

export const ConfigUpdateSymbol = Symbol('Config update provider identifier');
