/**
 * @tableofcontents
 *
 * 1. editor
 *
 * @since 2.0.2
 *
 * @package Redaxscript
 * @author Henry Ruhs
 */

/* @section 1. editor */

rs.modules.editor =
{
	init: true,
	selector: 'form textarea.js_editor_textarea',
	options:
	{
		className:
		{
			editor: 'js_editor editor',
			editorPreview: 'js_editor_preview editor_preview',
			editorToolbar: 'js_toolbar editor_toolbar clearfix',
			editorControl: 'js_editor_control editor_control',
			editorSourceCode: 'source_code',
			editorWysiwyg: 'wysiwyg'
		},
		element:
		{
			editorControl: 'a.js_editor_control'
		},
		toolbar:
		{
			backend:
			[
				'toggle',
				'bold',
				'italic',
				'underline',
				'strike',
				'superscript',
				'subscript',
				'paragraph',
				'h1',
				'h2',
				'h3',
				'h4',
				'h5',
				'h6',
				'ordered_list',
				'unordered_list',
				'outdent',
				'indent',
				'align_left',
				'align_center',
				'align_right',
				'align_justify',
				'undo',
				'redo',
				'cut',
				'copy',
				'paste',
				'insert_link',
				'unlink',
				'insert_image',
				'insert_break',
				'insert_code',
				'insert_function',
				'unformat'
			],
			frontend:
			[
				'bold',
				'italic',
				'underline',
				'strike',
				'unformat'
			]
		},
		breakOnEnter:
		{
			backend: true,
			frontend: true
		},
		vibrate: 100
	},
	controls:
	{
		toggle:
		{
			title: rs.language._editor.source_code,
			method: 'toggle'
		},
		bold:
		{
			title: rs.language._editor.bold,
			method: 'action',
			command: 'bold'
		},
		italic:
		{
			title: rs.language._editor.italic,
			method: 'action',
			command: 'italic'
		},
		underline:
		{
			title: rs.language._editor.underline,
			method: 'action',
			command: 'underline'
		},
		strike:
		{
			title: rs.language._editor.strike,
			method: 'action',
			command: 'strikeThrough'
		},
		superscript:
		{
			title: rs.language._editor.superscript,
			method: 'action',
			command: 'superscript'
		},
		subscript:
		{
			title: rs.language._editor.subscript,
			method: 'action',
			command: 'subscript'
		},
		paragraph:
		{
			title: rs.language._editor.paragraph,
			method: 'format',
			command: 'p'
		},
		h1:
		{
			title: rs.language.headline,
			method: 'format',
			command: 'h1'
		},
		h2:
		{
			title: rs.language.headline,
			method: 'format',
			command: 'h2'
		},
		h3:
		{
			title: rs.language.headline,
			method: 'format',
			command: 'h3'
		},
		h4:
		{
			title: rs.language.headline,
			method: 'format',
			command: 'h4'
		},
		h5:
		{
			title: rs.language.headline,
			method: 'format',
			command: 'h5'
		},
		h6:
		{
			title: rs.language.headline,
			method: 'format',
			command: 'h6'
		},
		ordered_list:
		{
			title: rs.language._editor.ordered_list,
			method: 'action',
			command: 'insertOrderedList'
		},
		unordered_list:
		{
			title: rs.language._editor.unordered_list,
			method: 'action',
			command: 'insertUnorderedList'
		},
		outdent:
		{
			title: rs.language._editor.outdent,
			method: 'action',
			command: 'outdent'
		},
		indent:
		{
			title: rs.language._editor.indent,
			method: 'action',
			command: 'indent'
		},
		align_left:
		{
			title: rs.language._editor.align_left,
			method: 'action',
			command: 'justifyLeft'
		},
		align_center:
		{
			title: rs.language._editor.align_center,
			method: 'action',
			command: 'justifyCenter'
		},
		align_right:
		{
			title: rs.language._editor.align_right,
			method: 'action',
			command: 'justifyRight'
		},
		align_justify:
		{
			title: rs.language._editor.align_justify,
			method: 'action',
			command: 'justifyFull'
		},
		undo:
		{
			title: rs.language._editor.undo,
			method: 'action',
			command: 'undo'
		},
		redo:
		{
			title: rs.language._editor.redo,
			method: 'action',
			command: 'redo'
		},
		cut:
		{
			title: rs.language._editor.cut,
			method: 'action',
			command: 'cut'
		},
		copy:
		{
			title: rs.language._editor.copy,
			method: 'action',
			command: 'copy'
		},
		paste:
		{
			title: rs.language._editor.paste,
			method: 'action',
			command: 'paste'
		},
		insert_link:
		{
			title: rs.language._editor.insert_link,
			method: 'insert',
			command: 'createLink',
			message: rs.language._editor.insert_link,
			value: 'http://'
		},
		unlink:
		{
			title: rs.language._editor.remove_link,
			method: 'action',
			command: 'unlink'
		},
		insert_image:
		{
			title: rs.language._editor.insert_image,
			method: 'insert',
			command: 'insertImage',
			message: rs.language._editor.insert_image,
			value: 'http://'
		},
		insert_break:
		{
			title: rs.language._editor.insert_document_break,
			method: 'insertBreak'
		},
		insert_code:
		{
			title: rs.language._editor.insert_code_quote,
			method: 'insertCode'
		},
		insert_function:
		{
			title: rs.language._editor.insert_php_function,
			method: 'insert',
			command: 'insertFunction',
			message: rs.language._editor.insert_php_function,
			value: ''
		},
		unformat:
		{
			title: rs.language._editor.remove_format,
			method: 'action',
			command: 'removeFormat'
		}
	}
};