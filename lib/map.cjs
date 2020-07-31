const NativeMap = require('./native-map');

const inst = Symbol('proxied map inst');
const flag = Symbol.for('@iter-tools/map');

class Map {
  constructor(entries) {
    this[inst] = new NativeMap(entries);
  }

  static isMap(inst) {
    return inst != null && inst[flag];
  }

  get [flag]() {
    return true;
  }

  get size() {
    return this[inst].size;
  }

  clear() {
    this[inst].clear();
  }

  has(key) {
    return this[inst].has(key);
  }

  get(key) {
    return this[inst].get(key);
  }

  set(key, value) {
    this[inst].set(key, value);
  }

  delete(key) {
    this[inst].delete(key);
  }

  forEach(cb, thisArg) {
    if (thisArg != null) {
      cb = cb.bind(thisArg);
    }
    for (const [key, value] of this.entries()) cb(value, key, this);
  }

  keys() {
    return this[inst].keys();
  }

  values() {
    return this[inst].values();
  }

  entries() {
    return this[inst].entries();
  }

  [Symbol.iterator]() {
    return this[inst][Symbol.iterator]();
  }
}

module.exports = Map;
