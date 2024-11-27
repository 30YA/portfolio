module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 'error',
    'no-debugger': 'error',
    'no-alert': 'error',
    'react/prop-types': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    'no-restricted-imports': ['error', { patterns: ['..*'] }],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
        ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'parent',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
      },
    ],
  },
};
