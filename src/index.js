
const { __, setLocaleData, _x } = wp.i18n;
import svgs from './components/icon-picker/svgs-fa.js';
import sanitizeSVG from "./utils/sanitize-svg";

const {
	registerBlockType,
} = wp.blocks;

import blockUI from './block-ui.js'
import output from './output.js'

const {
	SelectControl,
	PanelBody,
	CheckboxControl
} = wp.components;

const { 
	InspectorControls,
	RichText,
} = wp.editor;
console.log(svgs);
registerBlockType ( 'mediaron/alert-boxes', {
		title: __( 'MR Alert Box', 'mr-alert-blocks'  ),
		description: __( 'A block for alert boxes', 'mr-alert-blocks' ),
		category: 'layout',
		icon: {
			src: <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" style={{color: '#721c24'}} /><path style={{color: '#721c24'}} d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"/></svg>,
			fill: '#721c24',
		},
		keywords: [
			__( 'alert', 'mr-alert-blocks' ),
			__( 'mr', 'mr-alert-blocks' ),
			__( 'notice', 'mr-alert-blocks' ),
			__( 'banner', 'mr-alert-blocks' ),
		],
        supports: {
			align: [ 'left', 'center', 'right', 'wide', 'full' ],
			anchor: true,
			className: false,
		},
		example: {
			attributes: {
				'alertType' : 'primary',
				'content': 'This is content you should be alerted to.',
				'title': 'Recent News!'

			},
		},
		edit: blockUI,
	
		// Render via PHP
		save() {
			return null;
		},
	}
);