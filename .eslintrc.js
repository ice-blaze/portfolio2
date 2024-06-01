const classMember = {
	enforce:[
		{blankLine:"never", prev:"field", next:"field"},
		{blankLine:"always", prev:"field", next:"method"},
		{blankLine:"always", prev:"method", next:"field"},
		{blankLine:"always", prev:"method", next:"method"},
	]
},

 correctRules = {
	// Correct all rules from @typescript-eslint/all
	"@typescript-eslint/semi":"off",
	"@stylistic/semi":"off",
	"@stylistic/js/semi":"off",
	"@stylistic/ts/semi":"off",

	"@typescript-eslint/indent":["error","tab"],
	"@stylistic/indent":["error","tab"],
	"@stylistic/js/indent":["error","tab"],
	"@stylistic/ts/indent":["error","tab"],

	"@typescript-eslint/comma-dangle":"off",
	"@stylistic/comma-dangle":["error","always-multiline"],
	"@stylistic/js/comma-dangle":["error","always-multiline"],
	"@stylistic/ts/comma-dangle":["error","always-multiline"],

	"@stylistic/padded-blocks":["error","never"],
	"@stylistic/js/padded-blocks":["error","never"],

	"@typescript-eslint/quotes":"off",
	"@stylistic/quotes":["error","backtick"],
	"@stylistic/js/quotes":["error","backtick"],
	"@stylistic/ts/quotes":["error","backtick"],

	"new-cap": "off",
	"accessor-pairs": ["error", {setWithoutGet:false, getWithoutSet:true}],

	/*
	 * TODO
	 * Fix the rule to accept stringed properties https://github.com/angular-eslint/angular-eslint/pulls
	 * @angular-eslint/use-component-selector
	 * @angular-eslint/prefer-standalone-component
	 */
	// Prefered always, because you never know when you will need with them and it will add consistency.
	"@stylistic/quote-props": ["error","consistent"], 
	// Prefered always, because ⬆
	"@stylistic/js/quote-props": ["error","consistent"],

	/*
	 * TODO 
	 * this rule doesn't work with backticks, would be nice to activate it tho
	 */
	"@angular-eslint/relative-url-prefix":'off',

	/*
	 * TODO
	 * New rule disallow empty array parameters? import: []
	 */

	/*
	 * TODO
	 * New rule @Decorators should always be on the new line
	 */

	"@typescript-eslint/lines-between-class-members":['error', classMember ],
	"@stylistic/lines-between-class-members":['error', classMember ],
	"@stylistic/js/lines-between-class-members":['error', classMember ],
	"@stylistic/ts/lines-between-class-members":['error', classMember ],

	"@stylistic/js/function-paren-newline":["error", { "minItems": 2 }]
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
			...correctRules,
		},
	}, {
		files: [`.eslintrc.js`],
		extends:[`eslint:all`, `plugin:@typescript-eslint/strict`,`plugin:@typescript-eslint/recommended`],
		rules: {
			"sort-keys":"off",
			"@stylistic/js/array-bracket-newline": [`error`, {minItems: 4}],
			"@stylistic/js/array-element-newline": [`error`, {minItems: 4}],
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