import { createClientNotExistError } from './errors';

const objectTraverse = <T extends { [key: string]: never }>(
  obj: T,
  keys: string[],
) => {
  try {
    let cursor = obj;

    for (const key of keys) {
      cursor = cursor[key];
    }

    return cursor;
  } catch {
    return undefined;
  }
};

export const getClientFromExtension = async <T>(
  key: string | string[],
): Promise<T | undefined> => {
  if (typeof window === 'undefined') {
    return undefined;
  }

  const keys = Array.isArray(key) ? key : key.split('.');
  const wallet = objectTraverse(window as never, keys) as T;
  const firstKey = [...keys].shift();

  if (!firstKey) {
    throw Error(`Invalid key: ${JSON.stringify(key)}`);
  }

  if (wallet) {
    return wallet;
  }

  const clientNotExistError = createClientNotExistError(firstKey);

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
        const wallet = objectTraverse(window as never, keys) as T;

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
