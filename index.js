module.exports = {
	// Enforce Linux/macOS-style line endings
	// Default: "auto" (do not change line endings)
	// Also covered by EditorConfig
	endOfLine: "lf",

	// Use tabs for indentation (spaces are still used for alignment)
	// Default: false
	// Also covered by EditorConfig
	useTabs: true,

	// Line length: 100 characters
	// Prettier default: 80
	printWidth: 100,

	// Trailing comma: Everywhere
	// Prettier default: "es5" (only where valid in ES5)
	trailingComma: "all",

	// Do not wrap Markdown lines (keep paragraphs on a single line)
	// The editor should be configured to soft wrap the text instead
	// Prettier default: "preserve" (wrap prose as-is)
	proseWrap: "never",

	// Indent Vue <style> and <script> content
	// Prettier default: false
	vueIndentScriptAndStyle: true,
};
