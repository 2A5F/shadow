export default {
    input: './tsout/shadow.js',
    output: {
        file: './shadow.mjs',
        format: 'es',
        name: 'shadow',
        exports: 'named',
    },
    external: ['vue'],
};