module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'auto',
  rules: {
    'react-native/no-inline-styles': 0,
    'prettier/prettier': [
      'error',
      {
        'no-inline-styles': false,
      },
    ],
  },
};
