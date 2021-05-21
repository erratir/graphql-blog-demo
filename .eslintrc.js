module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        'linebreak-style': ['error', 'unix'],  // changes the file to LF
        "no-unused-vars": "off",
        "no-case-declarations": "off"
    }
}
