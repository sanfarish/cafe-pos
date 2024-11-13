import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
	{ files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
	{
		ignores: [
			"**/tests",
			"**/coverage",
			"**/src/config",
			"**/src/docs",
			"**/src/models",
			"**/src/db/migrations",
			"**/src/db/seeders",
		],
	},
	{ languageOptions: { globals: globals.node } },
	pluginJs.configs.recommended,
	// { rules: { "no-unused-vars": 0 } },
	eslintConfigPrettier,
];
