module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:i18next/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
        project: ['./tsconfig.json'],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'i18next'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/consistent-type-imports': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
  },
};
