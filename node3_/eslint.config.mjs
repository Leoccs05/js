import pluginJs from "@eslint/js";
export default [
  pluginJs.configs.recommended,
  {
    "parser": "babel-eslint",
    "env": {
      "es6": true,
      "node": true
    },
    "extends": "airbnb",

    "rules": {
      'no-console': 'off',
      'class-methods-use-this': 'off',
      "react/jsx-filename-extension": [
        "error",
        {
          "extensions": [".js", ".jsx"]
        }
      ],
      "global-require": "off",
      "import/prefer-default-export": "off",
      "no-unused-expressions": ["error", { "allowTaggedTemplates": true }]
    }
  }
];
