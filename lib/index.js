'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
let _packages = require('../packages');
Object.keys(_packages).forEach(function (key) {
  if (key === 'default' || key === '__esModule') return;
  if (key in exports && exports[key] === _packages[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _packages[key];
    },
  });
});
