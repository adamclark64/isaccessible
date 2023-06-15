// module.exports = {
//     "extends": ["@adamclark64/eslint-prettier-config"]
// }
module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                singleQuote: true,
                trailingComma: 'all',
                printWidth: 100,
            },
        ],
    },
    env: {
        jest: true,
        node: true,
    },
};
