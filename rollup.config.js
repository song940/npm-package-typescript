import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

import { name, main, types, source } from './package.json';

export default [
  {
    input: source,
    output: {
      name,
      file: main,
      format: 'umd',
    },
    plugins: [
      typescript()
    ]
  },
  {
    input: source,
    output: {
      file: types,
    },
    plugins: [dts()]
  }
];