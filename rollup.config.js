import typescript from '@rollup/plugin-typescript';

import { name, main } from './package.json';

export default {
  input: './src/index.ts',
  output: {
    name,
    format: 'umd',
    file: main,
  },
  plugins: [
    typescript()
  ]
}
