module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "max-len": [1, 120, 2, {ignoreComments: true}],
    "no-unneeded-ternary": ["error", { "defaultAssignment": true }],
  }
};