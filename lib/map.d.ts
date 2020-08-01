/// <reference lib="es6" />

declare class Map<K, V> {
  /**
   * Returns true if `inst` is a `Map`.
   * This does not necessarily imply instanceof, but the check
   * is safe across frame boundaries, as it is done by looking for
   * `inst[Symbol.for('@iter-tools/map')]`
   */
  static isMap(inst: any): boolean;

  constructor(entries?: Iterable<[K, V]> | null);

  readonly size: number;

  clear(): void;

  has(key: K): boolean;

  get(key: K): V | undefined;

  set(key: K, value: V): void;

  delete(key: K): void;

  forEach(cb: (value: V, key: K, map: Map<K, V>) => any): void;

  keys(): IterableIterator<K>;

  values(): IterableIterator<V>;

  entries(): IterableIterator<[K, V]>;

  [Symbol.iterator](): IterableIterator<[K, V]>;
}

export default Map;
