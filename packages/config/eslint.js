const js = require('@eslint/js')
const ts = require('typescript-eslint')

/**
 * @type {import('eslint').Linter.Config[]}
 */
module.exports = [
  js.configs.recommended,
  ts.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'inline-type-imports', prefer: 'type-imports' }
      ]
    }
  },
  {
    files: ['**/*.{js}'],
    rules: {}
  }
]
