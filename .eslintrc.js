module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        browser: true,
        node: true,
        es2020: true,
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
        react: {
            version: 'detect',
        },
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:import/typescript',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
    ],
    globals: {
        google: 'readonly',
        React: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'typescript',
        '@typescript-eslint',
        'eslint-plugin-typescript',
        'react-hooks',
        'prettier',
    ],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
        'react/react-in-jsx-scope': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        'prettier/prettier': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'import/no-unresolved': 'off',
    },
};
