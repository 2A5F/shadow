import typescript from 'rollup-plugin-typescript2';
import livereload from 'rollup-plugin-livereload'
import { liveServer } from 'rollup-plugin-live-server';

export default [
  // browser umd
  {
    input: './src/shadow.tsx',
    output: {
      file: './shadow.dev.js',
      format: 'umd',
      name: 'shadow',
      exports: 'named',
      globals: {
        vue: 'Vue'
      },
      sourcemap: true,
    },
    external: ['vue'],
    plugins: [
      liveServer({
        file: "test/index.html",
      }),
      livereload(),
      typescript()
    ],
  }
]
