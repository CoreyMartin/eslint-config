module.exports = {
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "jest": true,
    "browser": true
  },
  "extends": ["airbnb"],
  "settings": {
    "import/resolver": {
      /* this plugin prevents "no-extraneous-dependencies" lint errors
         using eslint-import-resolver-webpack. see https://goo.gl/7vKt4x */
      "webpack": {
          "config": "webpack.prod.babel.js"
      }
    }
  },
  "rules": {
    /* temporarily setting these airbnb rules to warn while we work on fixing them */
    "import/prefer-default-export": "warn",
    // see https://github.com/airbnb/javascript/issues/1089#issuecomment-249943774 for explanation on this:
    "react/forbid-prop-types": ["warn", { "forbid": ["any", "array", "object"] }],
    "react/require-default-props": "warn",
    "react/no-unused-prop-types": ["warn", {
      "customValidators": [
      ],
      "skipShapeProps": true,
    }],
    "no-shadow": "warn",
    "consistent-return": "error",
    "class-methods-use-this": ["warn", {
      exceptMethods: [
        "render",
        "getInitialState",
        "getDefaultProps",
        "getChildContext",
        "componentWillMount",
        "componentDidMount",
        "componentWillReceiveProps",
        "shouldComponentUpdate",
        "componentWillUpdate",
        "componentDidUpdate",
        "componentWillUnmount",
        "componentDidCatch",
      ],
    }],
    "jsx-a11y/anchor-is-valid": ["warn", {
      components: ["Link"],
      specialLink: ["to"],
      aspects: ["noHref", "invalidHref", "preferButton"],
    }],
    "no-use-before-define": ["warn", { functions: true, classes: true, variables: true }],
    "react/no-array-index-key": "warn",
    "no-param-reassign": ["warn", {
      props: true,
      ignorePropertyModificationsFor: [
        "acc", // for reduce accumulators
        "e", // for e.returnvalue
        "ctx", // for Koa routing
        "req", // for Express requests
        "request", // for Express requests
        "res", // for Express responses
        "response", // for Express responses
        "$scope", // for Angular 1 scopes
      ]
    }],
    "no-nested-ternary": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/no-static-element-interactions": ["warn", {
      handlers: [
        "onClick",
        "onMouseDown",
        "onMouseUp",
        "onKeyPress",
        "onKeyDown",
        "onKeyUp",
      ]
    }],

    /* airbnb rules that are purposefully overridden: */
    "no-console": [2, {"allow": ["warn", "error"]}],
    "semi": [2, "never"],
    "object-curly-newline": ["error", {
      "ObjectExpression": { "multiline": true },
      "ObjectPattern": { "multiline": true }
    }],
    /* this is the same rule as airbnb but needs paths customized: */
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": [
        "test/**", // tape, common npm pattern
        "tests/**", // also common npm pattern
        "**/__tests__/**", // jest pattern
        "test.{js,jsx}", // repos with a single test file
        "test-*.{js,jsx}", // repos with multiple top-level test files
        "**/*.{test,spec}.{js,jsx}", // tests where the extension denotes that it is a test
        "**/jest.config.js", // jest config
        "**/webpack.*.js", // webpack config
      ],
      "optionalDependencies": false,
    }],
    "no-underscore-dangle": ["error", {
      /* _id and _rev are required couchbase properties */
      "allow": ["_id", "_rev"],
    }],
    "react/jsx-closing-bracket-location": [2, {"selfClosing": "after-props", "nonEmpty": "after-props"}],
    "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx"] }],
    "react/jsx-curly-spacing": [2, "never", {"allowMultiline": false}],
    "react/jsx-max-props-per-line": [2, {"maximum": 3}],
    "react/jsx-wrap-multilines": [2, {
      "declaration": "parens-new-line",
      "assignment": "parens-new-line",
      "return": "parens-new-line",
      "arrow": "parens-new-line",
      "condition": "parens-new-line",
      "logical": "ignore",
      "prop": "ignore"
    }],
    "react/jsx-tag-spacing": [2, {
      "closingSlash": "never",
      "beforeSelfClosing": "never",
      "afterOpening": "never",
      "beforeClosing": "never", 
    }],
    "react/jsx-first-prop-new-line": ["error", "never"],
  }
}
