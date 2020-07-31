# @iter-tools/map

[![Build Status](https://travis-ci.org/iter-tools/map.svg?branch=trunk)](https://travis-ci.org/iter-tools/map)
[![codecov](https://codecov.io/gh/iter-tools/map/branch/trunk/graph/badge.svg)](https://codecov.io/gh/iter-tools/map)

A simple `Map` which is almost identical to the es6 `Map` builtin. In fact it is a transparent facade over an internal `Map` builtin instance. To understand why this is useful see [rationale](#rationale).

Package includes Typescript libdefs. Suitable for node or browser environments. Supports native es imports in `node > 13.2`. Supports native es imports in `node > 13.2`.

## Usage

```js
const Map = require('@iter-tools/map'); // OR
import Map from '@iter-tools/map';
```

## Rationale

`@iter-tools/map` adds two key pieces of functionality to the `Map` builtin:

First, the iter-tools `Map` class can be safely extended. While es6 permits the extending of builtin classes, such a practice tends to choke transpilers. This occurs because it is not legal for the `Map` builtin to be invoked as `Map.call({}, entries)`, as it would be in transpiled code.

Second, the builtin `Map` has a shortcoming: it lacks a `Map.isMap()` comparable to `Array.isArray`. While it is possible to detect an instance with `instanceof`, that operator has shortcomings surrounding realms. For more reading on realms and `instanceof`, I recommend [this Stack Overflow question](https://stackoverflow.com/questions/49832187/how-to-understand-js-realms).

## API

The basic API is that of the [Map builtin](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

In addition the following is supported:

`Map.isMap(inst)`: returns `true` if `inst` was constructed by this library and `false` otherwise. Note that it will return `true` even if the version of the library is different. It will return `false` for instances constructed with the `Map` builtin.
