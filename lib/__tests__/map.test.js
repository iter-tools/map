const Map = require('../map.cjs');

function* wrap(array) {
  yield* array;
}

describe('Map', () => {
  const entries = [
    [1, 11],
    [2, 22],
    [3, 33],
  ];

  it('is iterable', () => {
    expect([...new Map()]).toEqual([]);
  });

  it('can be constructed with initial values', () => {
    expect([...new Map(wrap(entries))]).toEqual(entries);
  });

  it('has a size property', () => {
    expect(new Map(wrap(entries)).size).toBe(3);
  });

  it('can clear values', () => {
    const m = new Map(entries);
    m.clear();
    expect([...m]).toEqual([]);
  });

  it('can get values', () => {
    expect(new Map([['foo', 'bar']]).get('foo')).toBe('bar');
  });

  it('can set values', () => {
    const m = new Map();
    m.set('foo', 'bar');
    expect([...m]).toEqual([['foo', 'bar']]);
  });

  it('can haz values', () => {
    expect(new Map([['foo', 'bar']]).has('foo')).toBe(true);
  });

  it('can delete values', () => {
    const m = new Map([['foo', 'bar']]);
    m.delete('foo');
    expect([...m]).toEqual([]);
  });

  it('has a forEach method', () => {
    const cb = jest.fn();

    const m = new Map([
      [1, 11],
      [2, 22],
      [3, 33],
    ]);

    m.forEach(cb);

    expect(cb.mock.calls).toEqual([
      [11, 1, m],
      [22, 2, m],
      [33, 3, m],
    ]);
  });

  it('forEach may receive a thisArg for cb', () => {
    const thisArg = {};
    const makeCb = (thisArg) =>
      function cb() {
        expect(this).toBe(thisArg);
      };

    new Map([[null, null]]).forEach(makeCb(thisArg), thisArg);
    new Map([[null, null]]).forEach(makeCb(window), null);
    new Map([[null, null]]).forEach(makeCb(window), undefined);

    expect.assertions(3);
  });

  it("flags maps using Symbol.for('@iter-tools/map')", () => {
    expect(new Map()[Symbol.for('@iter-tools/map')]).toBe(true);
  });

  it('can detect maps with isMap', () => {
    expect(Map.isMap(new Map())).toBe(true);
  });

  it('has a keys iterator', () => {
    expect([...new Map([]).keys()]).toEqual([]);
    expect([...new Map(entries).keys()]).toEqual([1, 2, 3]);
  });

  it('has a values iterator', () => {
    expect([...new Map([]).values()]).toEqual([]);
    expect([...new Map(entries).values()]).toEqual([11, 22, 33]);
  });

  it('has an entries iterator', () => {
    expect([...new Map([]).entries()]).toEqual([]);
    expect([...new Map(entries).entries()]).toEqual(entries);
  });
});
