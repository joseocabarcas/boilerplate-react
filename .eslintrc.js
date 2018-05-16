module.exports = {
	root: true,
	"parser": "babel-eslint",
	"env": {
		// El código es para un browser
		"browser": true,
		// En CommonJS
		"node": true,
		// Jquery global
		"jquery": true,
		// ES6
		"es6": true,
	},
	"rules": {
		"prefer-const": ["error", {
			"destructuring": "any",
			"ignoreReadBeforeAssign": true
		}],
		"no-const-assign": "error",
		"no-var": "error",
		"object-shorthand": ["error", "always"],
		"array-callback-return": ["error"],
		"prefer-destructuring": ["error", {
			"array": true,
			"object": true
		}],
		"prefer-template": ["error"],
		"template-curly-spacing": ["error", "always"],
		"space-before-function-paren": ["error"],
		"space-before-blocks": ["error"],
		"no-param-reassign": ["error"]
	},
	"plugins": [
		"react"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"extends": [
	]
}