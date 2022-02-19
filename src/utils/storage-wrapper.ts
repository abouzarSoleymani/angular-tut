export interface Storage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
  clear(): void;
}

export interface TypedStorageOptions {
  storage: 'localStorage' | 'sessionStorage';
}

export default abstract class StorageWrapper {
  private readonly storage: Storage;

  protected constructor(options: TypedStorageOptions = { storage: 'localStorage' }) {
    this.storage = typeof window !== 'undefined' ? window[options.storage] : null;

    if (!this.storage) {
      throw Error('Web Storage API not found.');
    }
  }

  protected get(key: string): any {
    const item = this.storage.getItem(key);
    try {
      return JSON.parse(item);
    } catch (e) {
      return item;
    }
  }

  protected set(key: string, value: string  | JSON | string[]): void {
    const jsonData = JSON.stringify(value)
    this.storage.setItem(key, jsonData);
  }
  // @ts-ignore
  protected clear(): undefined {
    this.storage.clear();
  }
  protected clearItem(key: string): void {
    this.storage.removeItem(key);
  }

  protected clearItems(keys: string[]): void {
    keys.forEach((key) => this.clearItem(key));
  }
}
