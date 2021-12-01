/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */
CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'undo' },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },
		{ name: 'document',    groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others' },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'styles',      groups: [ 'styles', 'colors' ] },
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Cut,Copy,Paste';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced';

	// override other dialogs http://jira.uid.me/browse/UCOZ-6200
	config.baseFloatZIndex = 10010;

	//custom plugins enter without builder
	//extra Plugins for drag-resize image in webkit browsers
	config.extraPlugins = 'dragresize';

	config.disableNativeSpellChecker = false;
	config.protectedSource.push(/<\?.+?\?>/g);
	config.colorButton_colors =
		'000,800,8b4513,2f4f4f,008080,000080,4b0082,696969,' +
		'b22222,a52a2a,daa520,006400,40e0d0,0000cd,800080,808080,' +
		'f00,ff8c00,ffd700,008000,0ff,00f,ee82ee,a9a9a9,' +
		'ffa07a,ffa500,ff0,0f0,afeeee,add8e6,dda0dd,d3d3d3,' +
		'fff0f5,faebd7,ffffe0,f0fff0,f0ffff,f0f8ff,e6e6fa,fff';
	config.colorButton_colorsPerRow = 8;

	// Настройки плагина WORDCOUNT
	config.wordcount = {
		// Whether or not you want to show the Char Count
		showCharCount: true,
		// Whether or not you want to count Spaces as Chars
		countSpacesAsChars: true,
	}
};
