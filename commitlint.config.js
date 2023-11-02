module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        [
          ...require('@commitlint/config-conventional').rules['type-enum'][2],
          // Your custom types
          'init',
          'config',
          'change',
          'major',
          'minor',
          'patch',
          'release-candidate',
          'tests',
          'style',
          'lint-fix',
          'docs',
          'version-bump'
        ],
      ],
    },
  };