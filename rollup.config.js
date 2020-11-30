export default {
    input: './tsout/shadow.js',
    output: {
        file: './dist/shadow.js',
        format: 'umd',
        name: 'shadow',
        exports: 'named',
        globals: {
            vue: 'Vue'
        },
    },
    external: ['vue'],
};