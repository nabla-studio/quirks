import { type Config } from '@quirks/store';

export interface QuirksConfigProps {
  config: Config;
}

export const ConfigStateSymbol = Symbol('Config state provider identifier');

export const ConfigUpdateSymbol = Symbol('Config update provider identifier');
