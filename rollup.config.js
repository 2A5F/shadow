import { terser } from "rollup-plugin-terser"
import virtual from '@rollup/plugin-virtual'
import typescript from 'rollup-plugin-typescript2'

export default [
    // node
    {
        input: './src/shadow.tsx',
        output: {
            file: './shadow.js',
            format: 'cjs',
            name: 'shadow',
            exports: 'named',
            sourcemap: true,
        },
        external: ['vue'],
        plugins: [
            typescript(),
        ],
    },
    // node esm
    {
        input: './src/shadow.tsx',
        output: {
            file: './shadow.mjs',
            format: 'esm',
            name: 'shadow',
            exports: 'named',
            sourcemap: true,
        },
        external: ['vue'],
        plugins: [
            typescript(),
        ],
    },
    // cjs
    {
        input: './src/shadow.tsx',
        output: {
            file: './dist/shadow.cjs.cjs',
            format: 'cjs',
            name: 'shadow',
            exports: 'named',
            sourcemap: true,
        },
        external: ['vue'],
        plugins: [
            typescript(),
        ],
    },
    // cjs min
    {
        input: './src/shadow.tsx',
        output: {
            file: './dist/shadow.cjs.prod.cjs',
            format: 'cjs',
            name: 'shadow',
            exports: 'named',
            sourcemap: true,
        },
        external: ['vue'],
        plugins: [
            typescript(),
            terser(),
        ],
    },
    // browser umd
    {
        input: './src/shadow.tsx',
        output: {
            file: './dist/shadow.global.js',
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
            typescript(),
        ],
    },
    // browser umd min
    {
        input: './src/shadow.tsx',
        output: {
            file: './dist/shadow.global.prod.js',
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
            typescript(),
            terser(),
        ],
    },
    // esm
    {
        input: './src/shadow.tsx',
        output: {
            file: './dist/shadow.esm-bundler.mjs',
            format: 'esm',
            name: 'shadow',
            exports: 'named',
            sourcemap: true,
        },
        external: ['vue'],
        plugins: [
            typescript(),
        ],
    },
    // esm min
    {
        input: './src/shadow.tsx',
        output: {
            file: './dist/shadow.esm-bundler.prod.mjs',
            format: 'esm',
            name: 'shadow',
            exports: 'named',
            sourcemap: true,
        },
        external: ['vue'],
        plugins: [
            typescript(),
            terser(),
        ],
    },
    // browser esm
    {
        input: './src/shadow.tsx',
        output: {
            file: './dist/shadow.esm-browser.mjs',
            format: 'esm',
            name: 'shadow',
            exports: 'named',
            sourcemap: true,
        },
        plugins: [
            typescript(),
            virtual({
                vue: `const { defineComponent, h, ref, Teleport, onBeforeMount, onMounted, computed, reactive } = globalThis.Vue;
export { defineComponent, h, ref, Teleport, onBeforeMount, onMounted, computed, reactive }`
            }),
        ]
    },
    // browser esm min
    {
        input: './src/shadow.tsx',
        output: {
            file: './dist/shadow.esm-browser.prod.mjs',
            format: 'esm',
            name: 'shadow',
            exports: 'named',
            sourcemap: true,
        },
        plugins: [
            typescript(),
            virtual({
                vue: `const { defineComponent, h, ref, Teleport, onBeforeMount, onMounted, computed, reactive } = globalThis.Vue;
export { defineComponent, h, ref, Teleport, onBeforeMount, onMounted, computed, reactive }`
            }),
            terser(),
        ]
    },
    // browser esm cdn
    {
        input: './src/shadow.tsx',
        output: {
            file: './dist/shadow.cdn-jsdelivr.mjs',
            format: 'esm',
            name: 'shadow',
            exports: 'named',
            sourcemap: true,
        },
        plugins: [
            typescript(),
            virtual({
                vue: `export * from 'https://cdn.jsdelivr.net/npm/vue@3/dist/vue.runtime.esm-browser.js'`
            }),
        ]
    },
    // browser esm cdn min
    {
        input: './src/shadow.tsx',
        output: {
            file: './dist/shadow.cdn-jsdelivr.prod.mjs',
            format: 'esm',
            name: 'shadow',
            exports: 'named',
            sourcemap: true,
        },
        plugins: [
            typescript(),
            virtual({
                vue: `export * from 'https://cdn.jsdelivr.net/npm/vue@3/dist/vue.runtime.esm-browser.prod.js'`
            }),
            terser(),
        ]
    },
]
