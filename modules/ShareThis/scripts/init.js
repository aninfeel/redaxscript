/**
 * @tableofcontents
 *
 * 1. share this
 *
 * @since 2.0.0
 *
 * @package Redaxscript
 * @author Henry Ruhs
 */

/* @section 1. share this */

rs.modules.shareThis =
{
	init: true,
	selector: 'a.js_link_share_this ',
	options:
	{
		url: 'http://api.sharedcount.com',
		popup:
		{
			height: 450,
			menubar: 0,
			name: 'Share This',
			resizable: 0,
			status: 0,
			scrollbars: 0,
			toolbar: 0,
			width: 500
		}
	}
};