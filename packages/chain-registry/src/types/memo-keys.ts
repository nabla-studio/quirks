export interface MemoKeys {
  $schema?: string;
  memo_keys: {
    key: string;
    description: string;
    git_repo: string;
    memo: {
      [k: string]: unknown;
    };
    [k: string]: unknown;
  }[];
}
