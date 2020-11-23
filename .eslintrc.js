module.exports = {
    extends: [require.resolve('@umijs/fabric/dist/eslint')],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    rules: {
        // your rules
    },
    parserOptions: {
        tsconfigRootDir: './',
        project: './tsconfig.eslint.json',
    },
};