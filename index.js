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
    /* airbnb rules that are purposefully overridden: */
    "no-console": [2, {"allow": ["warn", "error"]}],
    "semi": [2, "never"],
    "object-curly-newline": ["error", {
      "ObjectExpression": { "multiline": true },
      "ObjectPattern": { "multiline": true }
    }],
    "operator-linebreak": ["error", "before", { overrides: { "=": "none", "&&": "ignore" } }],
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
    "react/no-access-state-in-setstate": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-first-prop-new-line": ["error", "never"],
    "jsx-a11y/media-has-caption": "off",
    /* broken and deprecated in v6.1.0. https://goo.gl/J3LgLt */
    "jsx-a11y/label-has-for": "off"
  }
}
