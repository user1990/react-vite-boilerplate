module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-console': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-fragments': 'off',
    'import/no-unresolved': [2, { caseSensitive: false }],
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
};
