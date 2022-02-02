module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/vue3-essential', '@vue/standard', '@vue/typescript/recommended'],
	parserOptions: {
		ecmaVersion: 2020
	},
	//注：每次更新了 rules 规则，都要重新启动项目 ~~~
	rules: {
		quotes: ['warn', 'single'], //html属性用的是「双引号」，TS里引号用「单引号」
		indent: ['warn', 4], //缩进是 tab
		'space-before-function-paren': 'off',
		camelcase: 'off', //变量可以不使用 驼峰
		'@typescript-eslint/no-explicit-any': 'off', //关闭没有明确的 any
		camelcase: 'off', //变量可以不使用 驼峰
		'@typescript-eslint/camelcase': 'off', //
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
	}
}
