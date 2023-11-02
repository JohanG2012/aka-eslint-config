module.exports = {
  extends: [
    'airbnb-typescript/base',
    // Include the following if you want to extend Prettier rules
    // 'prettier/@typescript-eslint',
    // 'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json', // Point to your tsconfig.json
  },
  rules: {
    // TypeScript-specific rules or overrides
  },
};

