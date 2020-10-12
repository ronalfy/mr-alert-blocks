const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

import blockUI from "./block-ui.js";
registerBlockType("mediaron/alert-boxes", {
	title: __("MR Alert Box", "mr-alert-blocks"),
	description: __("A block for alert boxes", "mr-alert-blocks"),
	category: "widgets",
	icon: {
		src: (
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fad"
				data-icon="bell-exclamation"
				class="svg-inline--fa fa-bell-exclamation fa-w-14"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
			>
				<g class="fa-group">
					<path
						class="fa-secondary"
						fill="#57a8fc"
						d="M439.39 362.29c-19.32-20.76-55.47-52-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32a32 32 0 1 0-64 0v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29A31.24 31.24 0 0 0 0 384c.11 16.4 13 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32a31.23 31.23 0 0 0-8.61-21.71zM224 352a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm38.2-206.4l-12.8 96a16 16 0 0 1-15.9 14.4h-19a16 16 0 0 1-15.9-14.4l-12.8-96a16.06 16.06 0 0 1 15.9-17.6h44.6a16 16 0 0 1 15.89 17.6z"
						opacity="0.4"
					></path>
					<path
						class="fa-primary"
						fill="#57a8fc"
						d="M160 448a64 64 0 1 0 128 0zm64-160a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm-9.5-32h19a16 16 0 0 0 15.9-14.4l12.8-96a16 16 0 0 0-15.9-17.6h-44.6a16.06 16.06 0 0 0-15.9 17.6l12.8 96a16 16 0 0 0 15.89 14.4z"
					></path>
				</g>
			</svg>
		),
		fill: "#721c24",
		color: "#721c24",
	},
	keywords: [
		__("alert", "mr-alert-blocks"),
		__("mr", "mr-alert-blocks"),
		__("notice", "mr-alert-blocks"),
		__("banner", "mr-alert-blocks"),
	],
	supports: {
		align: ["left", "center", "right", "wide", "full"],
		anchor: true,
		className: false,
	},
	example: {
		attributes: {
			alertType: "warning",
			content:
				"This is a blurb about content you should be alerted to and can edit. You can change just about anything in this block, including colors, borders, padding, and a button.",
			title: "Update!",
			displayButton: true,
			contentMarginBottom: 15,
			contentMarginTop: 10,
			url: "#",
			buttonText: "Learn More",
			buttonMarginTop: 10,
			buttonMarginBottom: 15,
			align: "full",
		},
	},
	edit: blockUI,

	// Render via PHP
	save() {
		return null;
	},
});
