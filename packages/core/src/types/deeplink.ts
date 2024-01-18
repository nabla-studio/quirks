export type PlatformDeeplinks = {
  ios: string;
  android: string;
};

export type OpenDeeplinkCallback = (
  links: PlatformDeeplinks,
  params?: string,
) => void;
