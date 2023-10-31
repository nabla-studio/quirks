import { createClientNotExistError } from './errors';

export const getClientFromExtension = async <T>(
  key: string,
): Promise<T | undefined> => {
  if (typeof window === 'undefined') {
    return undefined;
  }

  const wallet = (window as never)[key] as T;

  if (wallet) {
    return wallet;
  }

  const clientNotExistError = createClientNotExistError(key);

  if (document.readyState === 'complete') {
    if (wallet) {
      return wallet;
    } else {
      throw clientNotExistError;
    }
  }

  return new Promise((resolve, reject) => {
    const documentStateChange = (event: Event) => {
      if (
        event.target &&
        (event.target as Document).readyState === 'complete'
      ) {
        const wallet = (window as never)[key] as T;

        if (wallet) {
          resolve(wallet);
        } else {
          reject(clientNotExistError.message);
        }

        document.removeEventListener('readystatechange', documentStateChange);
      }
    };

    document.addEventListener('readystatechange', documentStateChange);
  });
};
