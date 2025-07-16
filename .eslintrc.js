module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'plugin:json/recommended',
    'plugin:xwalk/recommended',
  ],
  env: {
    browser: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-env'],
    },
  },
  rules: {
    'import/extensions': ['error', { js: 'always' }], // require js file extensions in imports
    'linebreak-style': ['error', 'unix'], // enforce unix linebreaks
    'no-param-reassign': [2, { props: false }], // allow modifying properties of param

    // Web Components and Lit-specific rules
    'no-console': 'warn', // Allow console statements but warn about them
    'no-await-in-loop': 'off', // Allow await in loops for component loading patterns
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ], // Allow for...of but restrict other problematic syntax
    'no-continue': 'off', // Allow continue statements in loops

    // Code formatting rules (auto-fixable)
    'comma-dangle': ['error', 'always-multiline'], // Require trailing commas
    'no-trailing-spaces': 'error', // No trailing spaces
    'eol-last': ['error', 'always'], // Require newline at end of file
    'padded-blocks': ['error', 'never'], // No padded blocks
    'arrow-parens': ['error', 'always'], // Always require parentheses around arrow function params
    'dot-notation': ['error', { allowKeywords: true }], // Prefer dot notation

    // Import/export rules for modules
    'import/prefer-default-export': 'off', // Allow named exports for utility modules

    // XWalk customizations - default limit
    'xwalk/max-cells': ['warn', { max: 4 }], // Default warning at 4 fields
  },

  // Override rules for specific file patterns
  overrides: [
    {
      files: ['scripts/test-*.js', '**/*.test.js'],
      rules: {
        'no-console': 'off', // Allow console in test files
        'import/prefer-default-export': 'off',
      },
    },
    {
      files: ['scripts/kumiko-loader.js'],
      rules: {
        'no-console': 'off', // Allow console for component loading feedback
      },
    },
    {
      // Allow more fields for Kumiko web components
      files: ['blocks/km-*/_*.json', 'blocks/kmk-*/_*.json'],
      rules: {
        'xwalk/max-cells': ['warn', { max: 12 }], // Allow up to 12 fields for Kumiko components
      },
    },
  ],
};
