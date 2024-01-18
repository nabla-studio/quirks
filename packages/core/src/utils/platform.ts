export const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );

export const isAndroid = () => /Android/i.test(navigator.userAgent);

export const isiOS = () => /iPhone|iPad|iPod/i.test(navigator.userAgent);
