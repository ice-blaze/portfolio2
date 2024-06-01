 const correctedRules = {
	"@typescript-eslint/semi":"off",
	"@stylistic/semi":"off",
	"@stylistic/js/semi":"off",
	"@stylistic/ts/semi":["error", "never"],

	"@stylistic/js/no-mixed-spaces-and-tabs":"error",

	"multiline-comment-style":"off",
	"@stylistic/multiline-comment-style":"off",
	"@stylistic/js/multiline-comment-style":["error","separate-lines"],

	"@typescript-eslint/indent":["error","tab"],
	"@stylistic/indent":["error","tab"],
	"@stylistic/js/indent":["error","tab"],
	"@stylistic/ts/indent":["error","tab"],

	"@typescript-eslint/comma-dangle":"off",
	"@stylistic/comma-dangle":"off",
	"@stylistic/js/comma-dangle":"off",
	"@stylistic/ts/comma-dangle":["error","always-multiline"],

	"@stylistic/padded-blocks":"off",
	"@stylistic/js/padded-blocks":["error","never"],

	"@typescript-eslint/quotes":"off",
	"@stylistic/quotes":"off",
	"@stylistic/js/quotes":"off",
	"@stylistic/ts/quotes":["error","backtick"],

	"@stylistic/no-trailing-spaces":"off",
	"@stylistic/js/no-trailing-spaces":"error",

	"one-var":["error","never"],
	"new-cap": "off",
	"capitalized-comments": "off",
	"no-warning-comments":"off",
	"accessor-pairs": ["error", {setWithoutGet:false, getWithoutSet:true}],

	// TODO
	// Fix the rule to accept stringed properties https://github.com/angular-eslint/angular-eslint/pulls
	// @angular-eslint/use-component-selector
	// @angular-eslint/prefer-standalone-component
	// Prefered always, because you never know when you will need with them and it will add consistency.
	"@stylistic/quote-props": "off", 
	"@stylistic/js/quote-props": "off", 
	"@stylistic/ts/quote-props": ["error","consistent"],

	// TODO 
	// This rule doesn't work with backticks, would be nice to activate it tho
	"@angular-eslint/relative-url-prefix":'off',

	// TODO
	// New rule disallow empty array parameters? import: []

	// TODO
	// New rule @Decorators should always be on the new line

	"@typescript-eslint/lines-between-class-members": "off",
	"@stylistic/lines-between-class-members": "off",
	"@stylistic/js/lines-between-class-members": "off",
	"@stylistic/ts/lines-between-class-members": ['error', {
		enforce:[
			{blankLine:"never", prev:"field", next:"field"},
			{blankLine:"always", prev:"field", next:"method"},
			{blankLine:"always", prev:"method", next:"field"},
			{blankLine:"always", prev:"method", next:"method"},
		]
	}],

	"@stylistic/array-element-newline": "off",
	"@stylistic/array-bracket-newline": "off",
	"@stylistic/function-call-argument-newline":"off",
	"@stylistic/function-paren-newline":"off",
	"@stylistic/object-curly-newline": "off",
	// Could be improved with this issue https://github.com/eslint-stylistic/eslint-stylistic/issues/173
	"@stylistic/js/array-element-newline": ["error", { "minItems": 2 }],
	"@stylistic/js/array-bracket-newline": ["error", { "minItems": 2 }],
	"@stylistic/js/function-call-argument-newline":["error", "consistent"],
	"@stylistic/js/function-paren-newline":["error", { "minItems": 2 }],
	"@stylistic/js/object-curly-newline":["error", { "minProperties": 2 }],
};

module.exports = {
	root: true,
	ignorePatterns: [`projects/**/*`],
	plugins: [`@stylistic/ts`, `@stylistic/js`, 'eslint-plugin-antfu'],
	overrides: [{
		files: [`*.ts`],
		extends: [
			`eslint:all`,
			`plugin:@typescript-eslint/all`,
			`plugin:@angular-eslint/all`,
			"plugin:@angular-eslint/template/process-inline-templates",
			'plugin:@stylistic/all-extends',
			'plugin:@stylistic/js/all-extends',
			'plugin:@stylistic/ts/all-extends'
		],
		parserOptions: {
			project: ['./tsconfig.json'], 
		},
		rules: {
			"@angular-eslint/component-selector": [`error`, {
				prefix: `app`,
				style: `kebab-case`,
				type: `element`,
			}],
			"@angular-eslint/directive-selector": [`error`, {
				prefix: `app`,
				style: `camelCase`,
				type: `attribute`,
			}],
			...correctedRules,
		},
	}, {
		files: [`.eslintrc.js`],
		extends:[`eslint:all`, `plugin:@typescript-eslint/strict`,`plugin:@typescript-eslint/recommended`],
		rules: {
			"sort-keys":"off",
			"@stylistic/js/array-bracket-newline": [`error`, {minItems: 4}],
			"@stylistic/js/array-element-newline": [`error`, {minItems: 4}],
			"no-warning-comments":"off",
			"capitalized-comments": "off",

			"multiline-comment-style":"off",
			"@stylistic/js/multiline-comment-style":["error","separate-lines"],
		},
	}, {
		files: [`*.html`],
		extends: [`plugin:@angular-eslint/template/all`],
		rules:{
			"@angular-eslint/template/i18n": "off"
		}
	}],
	env: {node: true,es6:true},
};


// In the overall check json/js files to be covered by stylistic