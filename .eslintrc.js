module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/strict',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'jsx-a11y'
  ],
  rules: {
    semi: [1, 'always'],
    'jsx-a11y/label-has-associated-control': ['error', {
      required: {
        some: ['nesting', 'id']
      }
    }],
    'jsx-a11y/label-has-for': ['error', {
      required: {
        some: ['nesting', 'id']
      }
    }]
  }
};
