module.exports = {
  extends: ['eslint-config-prettier'],
  parser: 'babel-eslint',
  plugins: ['react', 'jest', 'eslint-plugin-prettier', 'react-hooks'],
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  rules: {
    'prettier/prettier': 'warn',
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: 'React',
      },
    ],
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      env: {
        jest: true, // now **/*.test.js files' env has both es6 *and* jest
      },
      plugins: ['jest'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
      },
    },
  ],
};
