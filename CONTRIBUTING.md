# Contributing to Pixel Path

We want your input! We aim to make **Pixel Path** as accessible, helpful, easy to use, and fun as possible. For that, we need your input, feedback, and ideas. We want to make contributing to **Pixel Path** as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## We Develop with GitHub

We use GitHub to host code, track issues, and feature requests, as well as accept pull requests.

## We Use [GitHub Flow](https://guides.github.com/introduction/flow/index.html), So All Code Changes Happen Through Pull Requests

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](https://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using GitHub's [Issues](https://github.com/yourusername/PixelPath_Your-ADHD-Productivity-Adventure/issues)

Report a bug by opening a new issue; it's that easy!

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

People *love* thorough bug reports.

## Use a Consistent Coding Style

### Frontend

Here is the `.eslintrc.json` configuration for the frontend:

```json
{
  "env": {
    "browser": true,
    "es2023": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 13,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "react/react-in-jsx-scope": "off",
    "no-console": "warn",
    "no-eval": "error",
    "import/first": "error"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

Here is the `.prettierrc` configuration for the frontend:

```json
{
  "printWidth": 85,
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

### Backend

Here is the .eslintrc.json configuration for the backend:

```json
{
  "env": {
    "node": true,
    "commonjs": true,
    "es2023": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 13
  },
  "rules": {
    "no-console": "warn",
    "no-eval": "error",
    "import/first": "error",
    "node/no-missing-import": "off",
    "node/no-unsupported-features/es-syntax": ["error", { "ignores": ["modules"] }]
  }
}
```

```json
{
  "printWidth": 85,
  "semi": true,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "es5",
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

## License

By contributing, you agree that your contributions will be licensed under its [![MIT License(https://choosealicense.com/licenses/mit/)]].

## References

This document was adapted from the open-source contribution guidelines for [![Facebook's Draft](https://github.com/facebookarchive/draft-js)].
