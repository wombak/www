module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {
    __DEV__: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
  plugins: ['jsx-a11y', 'import', 'react', 'prettier', 'react-hooks'],
  rules: {
    'arrow-parens': 'off',
    'comma-dangle': [
      'error',
      {
        imports: 'never'
      }
    ],
    'function-paren-newline': 'off',
    'global-require': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/extensions': 'off',
    'import/no-named-default': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '&&': 'after', '?': 'before', ':': 'before' } }
    ],
    'prettier/prettier': 'error',
    'react/destructuring-assignment': [
      1,
      'always',
      { ignoreClassFields: true }
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/require-default-props': [0],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/ban-ts-ignore': 'off'
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
        'react/jsx-filename-extension': 'off'
      }
    },
    {
      files: ['**/*.stories.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    }
  ]
}
