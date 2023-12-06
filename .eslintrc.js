module.exports = {
  root: true,
  extends: '@react-native',
  // Prettier config
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  // Ignore import React from react in js/ts files
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      rules: {
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
};
