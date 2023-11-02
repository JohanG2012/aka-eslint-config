module.exports = {
  extends: [
    'prettier',
    'prettier/react', // Remove if you're not using React
    'prettier/@typescript-eslint', // Remove if you're not using 
TypeScript
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    // Define any additional rules that might be needed
  },
};
