import { Options, LogLevel } from '@amplitude/types';
export const SDK_NAME = 'amplitude-node';
export const SDK_VERSION = '0.3.3';
export const AMPLITUDE_API_HOST = 'api.amplitude.com';
export const AMPLITUDE_API_PATH = '/2/httpapi';
export const DEFAULT_OPTIONS: Options = {
  optOut: false,
  serverUrl: AMPLITUDE_API_HOST,
  logLevel: LogLevel.None,
  debug: false,
};
