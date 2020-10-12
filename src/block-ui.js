import MRPanelArea from "./components/MRPanelArea";
import Dimensions from "./components/dimensions";
import classnames from "classnames";
import DesktopCSS from "./css/desktop.js";
import IconPicker from "./components/icon-picker";
import URLInput from "./components/url-input";
import sanitizeSVG from "./utils/sanitize-svg";
import SVGs from "./components/icon-picker/svgs-fa.js";

const { Component, Fragment, renderToString } = wp.element;

const { __, _n, _x } = wp.i18n;

const { decodeEntities } = wp.htmlEntities;

const {
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
	TabPanel,
	DropdownMenu,
	MenuItem,
	Toolbar,
	Card,
	CardBody,
} = wp.components;

const {
	__experimentalGradientPickerControl,
	InspectorControls,
	PanelColorSettings,
	RichText,
	BlockControls,
} = wp.blockEditor;

const desktopIcon = (
	<svg
		aria-hidden="true"
		focusable="false"
		data-prefix="far"
		data-icon="desktop-alt"
		class="svg-inline--fa fa-desktop-alt fa-w-18"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 576 512"
	>
		<path
			fill="currentColor"
			d="M528 0H48C21.5 0 0 21.5 0 48v288c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM48 54c0-3.3 2.7-6 6-6h468c3.3 0 6 2.7 6 6v234H48V54zm432 434c0 13.3-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h98.7l18.6-55.8c1.6-4.9 6.2-8.2 11.4-8.2h78.7c5.2 0 9.8 3.3 11.4 8.2l18.6 55.8H456c13.3 0 24 10.7 24 24z"
		></path>
	</svg>
);
const mobileIcon = (
	<svg
		aria-hidden="true"
		focusable="false"
		data-prefix="far"
		data-icon="mobile-alt"
		class="svg-inline--fa fa-mobile-alt fa-w-10"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 320 512"
	>
		<path
			fill="currentColor"
			d="M192 416c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm48-60V92c0-6.6-5.4-12-12-12H92c-6.6 0-12 5.4-12 12v264c0 6.6 5.4 12 12 12h136c6.6 0 12-5.4 12-12zm80-308v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h224c26.5 0 48 21.5 48 48zm-48 410V54c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v404c0 3.3 2.7 6 6 6h212c3.3 0 6-2.7 6-6z"
		></path>
	</svg>
);
const tabletIcon = (
	<svg
		aria-hidden="true"
		focusable="false"
		data-prefix="fas"
		data-icon="tablet-alt"
		class="svg-inline--fa fa-tablet-alt fa-w-14"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 448 512"
	>
		<path
			fill="currentColor"
			d="M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM224 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm176-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h328c6.6 0 12 5.4 12 12v312z"
		></path>
	</svg>
);

const desktopToolbarIcon = (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		dataReactroot=""
	>
		<path fill="currentColor" d="M13 15H11V20H13V15Z" undefined="1"></path>
		<path
			fill="currentColor"
			d="M7 20C7 19.4477 7.44772 19 8 19H16C16.5523 19 17 19.4477 17 20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20Z"
			clipRule="evenodd"
			fillRule="evenodd"
			undefined="1"
		></path>
		<path
			fill="currentColor"
			d="M21.5 16H2.5C2.22 16 2 15.78 2 15.5V3.5C2 3.22 2.22 3 2.5 3H21.5C21.78 3 22 3.22 22 3.5V15.5C22 15.78 21.78 16 21.5 16Z"
			undefined="1"
		></path>
	</svg>
);
const mobileToolbarIcon = (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		dataReactroot=""
	>
		<path
			strokeLinejoin="round"
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="1"
			stroke="currentColor"
			fill="currentColor"
			d="M16 22H8C6.9 22 6 21.1 6 20V4C6 2.9 6.9 2 8 2H16C17.1 2 18 2.9 18 4V20C18 21.1 17.1 22 16 22Z"
			clipRule="evenodd"
			fillRule="evenodd"
		></path>
		<path
			strokeLinecap="round"
			strokeMiterlimit="10"
			strokeWidth="1"
			stroke="currentColor"
			d="M13.47 3H10.53C10.51 3 10.5 2.99 10.5 2.97V2H13.5V2.97C13.5 2.99 13.49 3 13.47 3Z"
		></path>
	</svg>
);
const tabletToolbarIcon = (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		dataReactroot=""
	>
		<path
			strokeLinejoin="round"
			strokeLinecap="round"
			strokeWidth="1"
			stroke="#000000"
			fill="currentColor"
			d="M4 2H20V22H4V2Z"
		></path>
		<path
			strokeWidth="1"
			stroke="currentColor"
			fill="currentColor"
			d="M6.6 4.6H17.4V16.4H6.6V4.6Z"
		></path>
		<circle
			strokeWidth="1"
			stroke="currentColor"
			fill="currentColor"
			r="0.5"
			cy="19"
			cx="12"
		></circle>
	</svg>
);

class SABAlerts extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			alertType: "primary",
			device: "desktop",
			selectedDeviceIcon: desktopIcon,
		};
	}

	componentDidMount = () => {
		const id = this.props.clientId.substr(2, 9).replace("-", "");

		if (!this.props.attributes.uniqueId) {
			this.props.setAttributes({
				uniqueId: id,
			});
		}
	};

	responseOptionsToolbar = () => {
		const layoutControls = [
			{
				icon: desktopToolbarIcon,
				title: __("Desktop View and Options", "mr-alert-blocks"),
				onClick: () => {
					this.setState({
						device: "desktop",
						selectedDeviceIcon: desktopIcon,
					});
				},
				isActive: this.state.device === "desktop",
			},
			{
				icon: tabletToolbarIcon,
				title: __("Tablet View and Options", "mr-alert-blocks"),
				onClick: () => {
					this.setState({
						device: "tablet",
						selectedDeviceIcon: tabletIcon,
					});
				},
				isActive: this.state.device === "tablet",
			},
			{
				icon: mobileToolbarIcon,
				title: __("Mobile View and Options", "mr-alert-blocks"),
				onClick: () => {
					this.setState({
						device: "mobile",
						selectedDeviceIcon: mobileIcon,
					});
				},
				isActive: this.state.device === "mobile",
			},
		];
		return (
			<BlockControls>
				<Toolbar controls={layoutControls} />
			</BlockControls>
		);
	};

	responsiveToolbar = () => {
		return (
			<BlockControls>
				<DropdownMenu
					label={__("Device Preview", "mr-alert-blocks")}
					className="components-dropdown components-dropdown-menu components-toolbar-group"
					icon={this.state.selectedDeviceIcon}
				>
					{({ onClose }) => (
						<Fragment>
							<MenuItem
								icon={desktopIcon}
								onClick={() => {
									this.setState({
										device: "desktop",
										selectedDeviceIcon: desktopIcon,
									});
									onClose();
								}}
								className="is-active"
							>
								{__("Desktop", "mr-alert-blocks")}
							</MenuItem>
							<MenuItem
								icon={tabletIcon}
								onClick={() => {
									this.setState({
										device: "tablet",
										selectedDeviceIcon: tabletIcon,
									});
									onClose();
								}}
							>
								{__("Tablet", "mr-alert-blocks")}
							</MenuItem>
							<MenuItem
								icon={mobileIcon}
								onClick={() => {
									this.setState({
										device: "mobile",
										selectedDeviceIcon: mobileIcon,
									});
									onClose();
								}}
							>
								{__("Mobile", "mr-alert-blocks")}
							</MenuItem>
						</Fragment>
					)}
				</DropdownMenu>
			</BlockControls>
		);
	};

	getDevicePanel = () => {
		let title = __("Desktop View and Base Options", "mr-alert-blocks");
		let description = __(
			"You are viewing Desktop and Base options. Switch to a different device using the toolbar to view device-specific settings.",
			"mr-alert-blocks"
		);
		if ("tablet" === this.state.device) {
			title = __("Tablet View and Options", "mr-alert-blocks");
			description = __(
				"You are viewing Tablet options. Switch to a different device using the toolbar to view device-specific settings.",
				"mr-alert-blocks"
			);
		}
		if ("mobile" === this.state.device) {
			title = __("Mobile View and Options", "mr-alert-blocks");
			description = __(
				"You are viewing Mobile options. Switch to a different device using the toolbar to view device-specific settings.",
				"mr-alert-blocks"
			);
		}
		return (
			<Card
				icon={
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="fad"
						data-icon="phone-laptop"
						class="svg-inline--fa fa-phone-laptop fa-w-20"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 640 512"
					>
						<g class="fa-group">
							<path
								class="fa-secondary"
								fill="currentColor"
								d="M128 64h320v32h64V48a48.1 48.1 0 0 0-47.91-48H111.91A48.1 48.1 0 0 0 64 48v240H16a16 16 0 0 0-16 16v16a64.14 64.14 0 0 0 63.91 64H352v-96H128z"
								opacity="0.4"
							></path>
							<path
								class="fa-primary"
								fill="currentColor"
								d="M604 128H420a36 36 0 0 0-36 36v312a36 36 0 0 0 36 36h184a36 36 0 0 0 36-36V164a36 36 0 0 0-36-36zm-28 320H448V192h128z"
							></path>
						</g>
					</svg>
				}
				title={__("Device Preview", "mr-alert-blocks")}
				initialOpen={true}
			>
				<CardBody>
					<h3>{title}</h3>
					<p class="description">{description}</p>
				</CardBody>
			</Card>
		);
	};

	render() {
		const { attributes, setAttributes, isSelected } = this.props;
		const {
			uniqueId,
			alertType,
			backgroundColor,
			dismiss,
			content,
			displayContent,
			containerWidth,
			containedWidth,
			innerContainerMaxWidth,
			paddingTop,
			paddingBottom,
			paddingLeft,
			paddingRight,
			paddingUnit,
			marginTop,
			marginBottom,
			marginLeft,
			marginRight,
			marginUnit,
			borderTop,
			borderBottom,
			borderLeft,
			borderRight,
			borderUnit,
			borderRadiusTop,
			borderRadiusBottom,
			borderRadiusLeft,
			borderRadiusRight,
			borderRadiusUnit,
			borderColor,
			mainDefaultSvgName,
			useMainDefaultSvgName,
			buttonDefaultSvgName,
			useButtonDefaultSvgName,
			icon,
			iconShow,
			hasIcon,
			iconColor,
			iconSize,
			displayTitle,
			title,
			titleTag,
			titleColor,
			titleSize,
			titleFont,
			titleTransform,
			titlePaddingTop,
			titlePaddingBottom,
			titlePaddingLeft,
			titlePaddingRight,
			titlePaddingUnit,
			titleMarginTop,
			titleMarginBottom,
			titleMarginLeft,
			titleMarginRight,
			titleMarginUnit,
			titleLineHeight,
			titleFontWeight,
			contentColor,
			contentSize,
			contentFont,
			contentFontWeight,
			contentPaddingTop,
			contentPaddingBottom,
			contentPaddingLeft,
			contentPaddingRight,
			contenttPaddingUnit,
			contentMarginTop,
			contentMarginBottom,
			contentMarginLeft,
			contentMarginRight,
			contentMarginUnit,
			contentLineHeight,
			contentTransform,
			displayButton,
			disableStyles,
			enableBackgroundGradient,
			backgroundGradient,
			url,
			target,
			buttonWidth,
			buttonWidthFixed,
			buttonText,
			buttonTextTransform,
			buttonPaddingTop,
			buttonPaddingBottom,
			buttonPaddingLeft,
			buttonPaddingRight,
			buttonMarginTop,
			buttonMarginBottom,
			buttonMarginLeft,
			buttonIconHover,
			buttonMarginRight,
			buttonBorderColor,
			buttonBorderColorHover,
			buttonBorderWidth,
			buttonBorderRadiusTop,
			buttonBorderRadiusBottom,
			buttonBorderRadiusLeft,
			buttonBorderRadiusRight,
			buttonTextColor,
			buttonTextColorHover,
			buttonBackgroundColor,
			buttonBackgroundColorHover,
			buttonIconSize,
			buttonIconLocation,
			buttonIconEnabled,
			buttonIconColor,
			buttonIconColorHover,
			buttonIconAnimationHover,
			buttonFont,
			buttonFontSize,
			buttonLineHeight,
			buttonFontWeight,
		} = attributes;
		let { svgIcon, buttonIcon } = attributes;
		let htmlAttributes = {
			className: classnames({
				"mr-alert": true,
				[`mr-alert-${uniqueId}`]: true,
				[`mr-alert-type-${alertType}`]: true,
				[`alert-${alertType}`]: true,
			}),
			role: "alert",
		};

		let buttonHtmlAttributes = {
			className: classnames({
				"mr-button": true,
				"mr-alert-button": true,
				"mr-alert-button-location":
					"left" === buttonIconLocation ? "left" : "right",
				[`mr-button-${uniqueId}`]: true,
				[`mr-alert-type-${alertType}`]: true,
			}),
			href: !!url ? url : undefined,
			target: !!target ? "_blank" : undefined,
		};

		// SVG Icon fill.
		const svgFill = "#b1b1b2";

		// Available alert types for a dropdown setting.
		const allTypes = [
			{ value: "primary", label: __("Primary", "mr-alert-blocks") },
			{ value: "secondary", label: __("Secondary", "mr-alert-blocks") },
			{ value: "success", label: __("Success", "mr-alert-blocks") },
			{ value: "warning", label: __("Warning", "mr-alert-blocks") },
			{ value: "danger", label: __("Danger", "mr-alert-blocks") },
			{ value: "info", label: __("Info", "mr-alert-blocks") },
			{ value: "light", label: __("Light", "mr-alert-blocks") },
			{ value: "dark", label: __("Dark", "mr-alert-blocks") },
		];

		// Available button width options.
		const buttonWidthtOptions = [
			{ value: "default", label: __("Default Width", "mr-alert-blocks") },
			{ value: "fixed", label: __("Fixed Width", "mr-alert-blocks") },
			{ value: "full", label: __("Full Width", "mr-alert-blocks") },
		];

		// Available alert types for a dropdown setting.
		const textTransformOptions = [
			{ value: "none", label: __("None", "mr-alert-blocks") },
			{ value: "inherit", label: __("Inherit", "mr-alert-blocks") },
			{ value: "capitalize", label: __("Capitalize", "mr-alert-blocks") },
			{ value: "uppercase", label: __("Uppercase", "mr-alert-blocks") },
			{ value: "lowercase", label: __("Lowercase", "mr-alert-blocks") },
		];

		const tagOptions = [
			{ value: "div", label: __("Div", "mr-alert-blocks") },
			{ value: "p", label: __("Paragraph", "mr-alert-blocks") },
			{ value: "h1", label: __("H1", "mr-alert-blocks") },
			{ value: "h2", label: __("H2", "mr-alert-blocks") },
			{ value: "h3", label: __("H3", "mr-alert-blocks") },
			{ value: "h4", label: __("H4", "mr-alert-blocks") },
			{ value: "h5", label: __("H5", "mr-alert-blocks") },
			{ value: "H6", label: __("H6", "mr-alert-blocks") },
		];

		const fontWeightOptions = [
			{ value: "100", label: __("100", "mr-alert-blocks") },
			{ value: "200", label: __("200", "mr-alert-blocks") },
			{ value: "300", label: __("300", "mr-alert-blocks") },
			{ value: "400", label: __("400", "mr-alert-blocks") },
			{ value: "500", label: __("500", "mr-alert-blocks") },
			{ value: "600", label: __("600", "mr-alert-blocks") },
			{ value: "700", label: __("700", "mr-alert-blocks") },
			{ value: "800", label: __("800", "mr-alert-blocks") },
			{ value: "900", label: __("900", "mr-alert-blocks") },
		];

		const buttonIconLocationOptions = [
			{ value: "left", label: __("Left", "mr-alert-blocks") },
			{ value: "above", label: __("Above", "mr-alert-blocks") },
			{ value: "right", label: __("Right", "mr-alert-blocks") },
		];

		let backgroundColorOptions = [];

		if (!enableBackgroundGradient && __experimentalGradientPickerControl) {
			backgroundColorOptions.push({
				value: backgroundColor,
				onChange: (colorValue) =>
					setAttributes({ backgroundColor: colorValue }),
				label: __("Background Color", "mr-alert-blocks"),
			});
		}
		backgroundColorOptions.push(
			{
				value: iconColor,
				onChange: (colorValue) => setAttributes({ iconColor: colorValue }),
				label: __("Icon Color", "mr-alert-blocks"),
			},
			{
				value: borderColor,
				onChange: (colorValue) => setAttributes({ borderColor: colorValue }),
				label: __("Border Color", "mr-alert-blocks"),
			},
			{
				value: titleColor,
				onChange: (colorValue) => setAttributes({ titleColor: colorValue }),
				label: __("Title Color", "mr-alert-blocks"),
			},
			{
				value: contentColor,
				onChange: (colorValue) => setAttributes({ contentColor: colorValue }),
				label: __("Content Color", "mr-alert-blocks"),
			}
		);

		let buttonColorOptions = [];
		buttonColorOptions.push(
			{
				value: buttonBackgroundColor,
				onChange: (colorValue) =>
					setAttributes({ buttonBackgroundColor: colorValue }),
				label: __("Background Color", "mr-alert-blocks"),
			},
			{
				value: buttonIconColor,
				onChange: (colorValue) =>
					setAttributes({ buttonIconColor: colorValue }),
				label: __("Icon Color", "mr-alert-blocks"),
			},
			{
				value: buttonBorderColor,
				onChange: (colorValue) =>
					setAttributes({ buttonBorderColor: colorValue }),
				label: __("Border Color", "mr-alert-blocks"),
			},
			{
				value: buttonTextColor,
				onChange: (colorValue) =>
					setAttributes({ buttonTextColor: colorValue }),
				label: __("Text Color", "mr-alert-blocks"),
			}
		);

		let buttonColorOptionsHover = [];
		buttonColorOptionsHover.push(
			{
				value: buttonBackgroundColorHover,
				onChange: (colorValue) =>
					setAttributes({ buttonBackgroundColorHover: colorValue }),
				label: __("Background Color", "mr-alert-blocks"),
			},
			{
				value: buttonIconColorHover,
				onChange: (colorValue) =>
					setAttributes({ buttonIconColorHover: colorValue }),
				label: __("Icon Color", "mr-alert-blocks"),
			},
			{
				value: buttonBorderColorHover,
				onChange: (colorValue) =>
					setAttributes({ buttonBorderColorHover: colorValue }),
				label: __("Border Color", "mr-alert-blocks"),
			},
			{
				value: buttonTextColorHover,
				onChange: (colorValue) =>
					setAttributes({ buttonTextColorHover: colorValue }),
				label: __("Text Color", "mr-alert-blocks"),
			}
		);

		// Fonts
		let fontOptions = [];
		let fonts = mrabg.fonts;
		for (var key in fonts) {
			fontOptions.push({ value: key, label: fonts[key] });
		}

		// Dynamically load SVG icon
		if (useMainDefaultSvgName) {
			svgIcon = renderToString(SVGs[mainDefaultSvgName]["icon"]);
		}
		// Dynamically load SVG icon
		if (useButtonDefaultSvgName) {
			buttonIcon = renderToString(SVGs[buttonDefaultSvgName]["icon"]);
		}

		const inspectorControls = (
			<InspectorControls>
				{this.getDevicePanel()}
				{"desktop" === this.state.device && (
					<MRPanelArea
						icon={
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fad"
								data-icon="exclamation-triangle"
								class="svg-inline--fa fa-exclamation-triangle fa-w-18"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 576 512"
							>
								<g class="fa-group">
									<path
										class="fa-secondary"
										fill={svgFill}
										d="M569.52 440L329.58 24c-18.44-32-64.69-32-83.16 0L6.48 440c-18.42 31.94 4.64 72 41.57 72h479.89c36.87 0 60.06-40 41.58-72zM288 448a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm38.24-238.41l-12.8 128A16 16 0 0 1 297.52 352h-19a16 16 0 0 1-15.92-14.41l-12.8-128A16 16 0 0 1 265.68 192h44.64a16 16 0 0 1 15.92 17.59z"
										opacity="0.2"
									></path>
									<path
										class="fa-primary"
										fill={svgFill}
										d="M310.32 192h-44.64a16 16 0 0 0-15.92 17.59l12.8 128A16 16 0 0 0 278.48 352h19a16 16 0 0 0 15.92-14.41l12.8-128A16 16 0 0 0 310.32 192zM288 384a32 32 0 1 0 32 32 32 32 0 0 0-32-32z"
										opacity="0.6"
									></path>
								</g>
							</svg>
						}
						title={__("Options", "mr-alert-blocks")}
						initialOpen={false}
					>
						<SelectControl
							label={__("Type of alert.", "mr-alert-blocks")}
							help={__(
								"Clear the background color to have default alerts backgrounds.",
								"mr-alert-blocks"
							)}
							options={allTypes}
							value={alertType}
							onChange={(alertType) => {
								setAttributes({ alertType });
							}}
						/>
						<ToggleControl
							label={__("Show Icon?", "mr-alert-blocks")}
							checked={true === iconShow ? true : false}
							onChange={(value) => {
								setAttributes({
									iconShow: value,
								});
							}}
						/>
						<ToggleControl
							label={__("Show Title?", "mr-alert-blocks")}
							checked={displayTitle}
							onChange={(value) => {
								setAttributes({
									displayTitle: value,
								});
							}}
						/>
						<ToggleControl
							label={__("Show Content?", "mr-alert-blocks")}
							checked={displayContent}
							onChange={(value) => {
								setAttributes({
									displayContent: value,
								});
							}}
						/>
						<ToggleControl
							label={__("Show Button?", "mr-alert-blocks")}
							checked={displayButton}
							onChange={(value) => {
								setAttributes({
									displayButton: value,
								});
							}}
						/>
					</MRPanelArea>
				)}
				{"desktop" === this.state.device && (
					<MRPanelArea
						icon={
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fad"
								data-icon="palette"
								class="svg-inline--fa fa-palette fa-w-16"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<g class="fa-group">
									<path
										class="fa-secondary"
										fill={svgFill}
										d="M204.29 5c-99.4 19.4-179.5 99.29-199.1 198.4-37 187 131.7 326.39 258.8 306.69 41.2-6.4 61.4-54.59 42.5-91.69-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.31C511.49 97.13 368.09-26.87 204.29 5zM96 320a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-128a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm128-64a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm128 64a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
										opacity="0.2"
									></path>
									<path
										class="fa-primary"
										fill={svgFill}
										d="M96 256a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm32-128a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm128-64a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm128 64a32 32 0 1 0 32 32 32 32 0 0 0-32-32z"
										opacity="0.6"
									></path>
								</g>
							</svg>
						}
						title={__("Colors", "mr-alert-blocks")}
						initialOpen={false}
					>
						<ToggleControl
							label={__("Enable Background Gradient?", "mr-alert-blocks")}
							checked={enableBackgroundGradient}
							onChange={(value) => {
								setAttributes({
									enableBackgroundGradient: value,
								});
							}}
						/>
						{enableBackgroundGradient && __experimentalGradientPickerControl && (
							<Fragment>
								<__experimentalGradientPickerControl
									label={__("Choose a Background Gradient", "wp-presenter-pro")}
									value={backgroundGradient}
									onChange={(value) => {
										setAttributes({ backgroundGradient: value });
									}}
								/>
							</Fragment>
						)}
						<PanelColorSettings
							title={__("Color Settings", "mr-alert-blocks")}
							colorSettings={backgroundColorOptions}
						></PanelColorSettings>
					</MRPanelArea>
				)}
				{"desktop" === this.state.device && (
					<MRPanelArea
						icon={
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fad"
								data-icon="expand-arrows"
								class="svg-inline--fa fa-expand-arrows fa-w-14"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
							>
								<g class="fa-group">
									<path
										class="fa-secondary"
										fill={svgFill}
										d="M0 200V64a32 32 0 0 1 32-32h136a23.94 23.94 0 0 1 24 24v15.3a24 24 0 0 1-24.7 24L101 93.4l123 123-39.6 39.6-123-123 1.9 66.3a24 24 0 0 1-24 24.7H24a23.94 23.94 0 0 1-24-24zm424 88h-15.3a24 24 0 0 0-24 24.7l1.9 66.3-123-123-39.6 39.6 123 123-66.3-1.9a24 24 0 0 0-24.7 24V456a23.94 23.94 0 0 0 24 24h136a32 32 0 0 0 32-32V312a23.94 23.94 0 0 0-24-24z"
										opacity="0.2"
									></path>
									<path
										class="fa-primary"
										fill={svgFill}
										d="M101 418.6l66.3-1.9a24 24 0 0 1 24.7 24V456a23.94 23.94 0 0 1-24 24H32a32 32 0 0 1-32-32V312a23.94 23.94 0 0 1 24-24h15.3a24 24 0 0 1 24 24.7L61.4 379 347 93.4l-66.3 1.9a24 24 0 0 1-24.7-24V56a23.94 23.94 0 0 1 24-24h136a32 32 0 0 1 32 32v136a23.94 23.94 0 0 1-24 24h-15.3a24 24 0 0 1-24-24.7l1.9-66.3z"
										opacity="0.6"
									></path>
								</g>
							</svg>
						}
						title={__("Container Settings", "mr-alert-blocks")}
						initialOpen={false}
					>
						<Fragment>
							<SelectControl
								label={__("Container Width", "mr-alert-blocks")}
								options={[
									{
										value: "full-width",
										label: __("Full Width", "mr-alert-blocks"),
									},
									{
										value: "contained-width",
										label: __("Contained Width", "mr-alert-blocks"),
									},
								]}
								value={containerWidth}
								onChange={(value) => {
									setAttributes({ containerWidth: value });
								}}
							/>
							{"contained-width" === containerWidth && (
								<RangeControl
									label={__("Container Max-Width", "mr-alert-blocks")}
									allowReset={true}
									initialPosition={containedWidth}
									min={100}
									max={1200}
									step={50}
									value={containedWidth}
									withInputField={true}
									stepper={true}
									onChange={(value) => {
										setAttributes({
											containedWidth: value,
										});
									}}
								/>
							)}
							<RangeControl
								label={__("Inner Container Max-Width", "mr-alert-blocks")}
								allowReset={true}
								initialPosition={innerContainerMaxWidth}
								min={100}
								max={1200}
								step={50}
								value={innerContainerMaxWidth}
								withInputField={true}
								stepper={true}
								onChange={(value) => {
									setAttributes({
										innerContainerMaxWidth: value,
									});
								}}
							/>
						</Fragment>
					</MRPanelArea>
				)}

				{"desktop" === this.state.device && (
					<MRPanelArea
						icon={
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fad"
								data-icon="arrows-h"
								class="svg-inline--fa fa-arrows-h fa-w-16"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<g class="fa-group">
									<path
										class="fa-secondary"
										fill={svgFill}
										d="M405.66 288H106.34l-33.77-32 33.77-32h299.32l33.77 32z"
										opacity="0.2"
									></path>
									<path
										class="fa-primary"
										fill={svgFill}
										d="M358.59 146.37a23.93 23.93 0 0 0 .94 33.92l79.9 75.71-79.9 75.71a23.93 23.93 0 0 0-.94 33.92L369.9 377a24.15 24.15 0 0 0 34.1 0l98.65-98.36a31.92 31.92 0 0 0 0-45.24L404 135a24.15 24.15 0 0 0-34.05 0zM153.41 365.63a23.93 23.93 0 0 0-.94-33.92L72.57 256l79.9-75.71a23.93 23.93 0 0 0 .94-33.92L142.1 135a24.15 24.15 0 0 0-34 0L9.4 233.38a31.92 31.92 0 0 0 0 45.24L108.05 377a24.15 24.15 0 0 0 34.05 0z"
										opacity="0.6"
									></path>
								</g>
							</svg>
						}
						title={__("Padding and Borders", "mr-alert-blocks")}
						initialOpen={false}
					>
						<Dimensions
							{...this.props}
							type={"padding"}
							label={__("Alert Container Padding", "mr-alert-blocks")}
							attrTop={"paddingTop"}
							attrRight={"paddingRight"}
							attrBottom={"paddingBottom"}
							attrLeft={"paddingLeft"}
							attrUnit={"paddingUnit"}
							attrSyncUnits={"paddingSyncUnits"}
						/>
						<Dimensions
							{...this.props}
							type={"margin"}
							label={__("Alert Container Margin", "mr-alert-blocks")}
							attrTop={"marginTop"}
							attrRight={"marginRight"}
							attrBottom={"marginBottom"}
							attrLeft={"marginLeft"}
							attrUnit={"marginUnit"}
							attrSyncUnits={"marginSyncUnits"}
						/>
						<Dimensions
							{...this.props}
							type={"padding"}
							label={__("Border Width", "mr-alert-blocks")}
							attrTop={"borderTop"}
							attrRight={"borderRight"}
							attrBottom={"borderBottom"}
							attrLeft={"borderLeft"}
							attrUnit={"borderUnit"}
							attrSyncUnits={"borderSyncUnits"}
						/>
						<Dimensions
							{...this.props}
							type={"padding"}
							label={__("Border Radius", "mr-alert-blocks")}
							attrTop={"borderRadiusTop"}
							attrRight={"borderRadiusRight"}
							attrBottom={"borderRadiusBottom"}
							attrLeft={"borderRadiusLeft"}
							attrUnit={"borderRadiusUnit"}
							attrSyncUnits={"borderRadiusSyncUnits"}
						/>
					</MRPanelArea>
				)}
				{"tablet" === this.state.device && (
					<MRPanelArea
						icon={
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fad"
								data-icon="arrows-h"
								class="svg-inline--fa fa-arrows-h fa-w-16"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<g class="fa-group">
									<path
										class="fa-secondary"
										fill={svgFill}
										d="M405.66 288H106.34l-33.77-32 33.77-32h299.32l33.77 32z"
										opacity="0.2"
									></path>
									<path
										class="fa-primary"
										fill={svgFill}
										d="M358.59 146.37a23.93 23.93 0 0 0 .94 33.92l79.9 75.71-79.9 75.71a23.93 23.93 0 0 0-.94 33.92L369.9 377a24.15 24.15 0 0 0 34.1 0l98.65-98.36a31.92 31.92 0 0 0 0-45.24L404 135a24.15 24.15 0 0 0-34.05 0zM153.41 365.63a23.93 23.93 0 0 0-.94-33.92L72.57 256l79.9-75.71a23.93 23.93 0 0 0 .94-33.92L142.1 135a24.15 24.15 0 0 0-34 0L9.4 233.38a31.92 31.92 0 0 0 0 45.24L108.05 377a24.15 24.15 0 0 0 34.05 0z"
										opacity="0.6"
									></path>
								</g>
							</svg>
						}
						title={__("Padding and Borders - Tablet", "mr-alert-blocks")}
						initialOpen={true}
					>
						<Dimensions
							{...this.props}
							type={"padding"}
							label={__("Alert Container Padding", "mr-alert-blocks")}
							attrTop={"paddingTop"}
							attrRight={"paddingRight"}
							attrBottom={"paddingBottom"}
							attrLeft={"paddingLeft"}
							attrUnit={"paddingUnit"}
							attrSyncUnits={"paddingSyncUnits"}
						/>
						<Dimensions
							{...this.props}
							type={"margin"}
							label={__("Alert Container Margin", "mr-alert-blocks")}
							attrTop={"marginTop"}
							attrRight={"marginRight"}
							attrBottom={"marginBottom"}
							attrLeft={"marginLeft"}
							attrUnit={"marginUnit"}
							attrSyncUnits={"marginSyncUnits"}
						/>
						<Dimensions
							{...this.props}
							type={"padding"}
							label={__("Border Width", "mr-alert-blocks")}
							attrTop={"borderTop"}
							attrRight={"borderRight"}
							attrBottom={"borderBottom"}
							attrLeft={"borderLeft"}
							attrUnit={"borderUnit"}
							attrSyncUnits={"borderSyncUnits"}
						/>
						<Dimensions
							{...this.props}
							type={"padding"}
							label={__("Border Radius", "mr-alert-blocks")}
							attrTop={"borderRadiusTop"}
							attrRight={"borderRadiusRight"}
							attrBottom={"borderRadiusBottom"}
							attrLeft={"borderRadiusLeft"}
							attrUnit={"borderRadiusUnit"}
							attrSyncUnits={"borderRadiusSyncUnits"}
						/>
					</MRPanelArea>
				)}
				{"mobile" === this.state.device && (
					<MRPanelArea
						icon={
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fad"
								data-icon="arrows-h"
								class="svg-inline--fa fa-arrows-h fa-w-16"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<g class="fa-group">
									<path
										class="fa-secondary"
										fill={svgFill}
										d="M405.66 288H106.34l-33.77-32 33.77-32h299.32l33.77 32z"
										opacity="0.2"
									></path>
									<path
										class="fa-primary"
										fill={svgFill}
										d="M358.59 146.37a23.93 23.93 0 0 0 .94 33.92l79.9 75.71-79.9 75.71a23.93 23.93 0 0 0-.94 33.92L369.9 377a24.15 24.15 0 0 0 34.1 0l98.65-98.36a31.92 31.92 0 0 0 0-45.24L404 135a24.15 24.15 0 0 0-34.05 0zM153.41 365.63a23.93 23.93 0 0 0-.94-33.92L72.57 256l79.9-75.71a23.93 23.93 0 0 0 .94-33.92L142.1 135a24.15 24.15 0 0 0-34 0L9.4 233.38a31.92 31.92 0 0 0 0 45.24L108.05 377a24.15 24.15 0 0 0 34.05 0z"
										opacity="0.6"
									></path>
								</g>
							</svg>
						}
						title={__("Padding and Borders - Mobile", "mr-alert-blocks")}
						initialOpen={true}
					>
						<Dimensions
							{...this.props}
							type={"padding"}
							label={__("Alert Container Padding", "mr-alert-blocks")}
							attrTop={"paddingTop"}
							attrRight={"paddingRight"}
							attrBottom={"paddingBottom"}
							attrLeft={"paddingLeft"}
							attrUnit={"paddingUnit"}
							attrSyncUnits={"paddingSyncUnits"}
						/>
						<Dimensions
							{...this.props}
							type={"margin"}
							label={__("Alert Container Margin", "mr-alert-blocks")}
							attrTop={"marginTop"}
							attrRight={"marginRight"}
							attrBottom={"marginBottom"}
							attrLeft={"marginLeft"}
							attrUnit={"marginUnit"}
							attrSyncUnits={"marginSyncUnits"}
						/>
						<Dimensions
							{...this.props}
							type={"padding"}
							label={__("Border Width", "mr-alert-blocks")}
							attrTop={"borderTop"}
							attrRight={"borderRight"}
							attrBottom={"borderBottom"}
							attrLeft={"borderLeft"}
							attrUnit={"borderUnit"}
							attrSyncUnits={"borderSyncUnits"}
						/>
						<Dimensions
							{...this.props}
							type={"padding"}
							label={__("Border Radius", "mr-alert-blocks")}
							attrTop={"borderRadiusTop"}
							attrRight={"borderRadiusRight"}
							attrBottom={"borderRadiusBottom"}
							attrLeft={"borderRadiusLeft"}
							attrUnit={"borderRadiusUnit"}
							attrSyncUnits={"borderRadiusSyncUnits"}
						/>
					</MRPanelArea>
				)}

				{iconShow && (
					<Fragment>
						{"desktop" === this.state.device && (
							<MRPanelArea
								icon={
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fad"
										data-icon="comment-alt-check"
										class="svg-inline--fa fa-comment-alt-check fa-w-16"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<g class="fa-group">
											<path
												class="fa-secondary"
												fill={svgFill}
												d="M448 0H64A64.06 64.06 0 0 0 0 64v288a64.06 64.06 0 0 0 64 64h96v84a12 12 0 0 0 19.1 9.7L304 416h144a64.06 64.06 0 0 0 64-64V64a64.06 64.06 0 0 0-64-64zm-77.9 163.8l-131 130a11 11 0 0 1-15.6-.1l-75.7-76.3a11 11 0 0 1 .1-15.6l26-25.8a11 11 0 0 1 15.6.1l42.1 42.5 97.2-96.4a11 11 0 0 1 15.6.1l25.8 26a11 11 0 0 1-.1 15.5z"
												opacity="0.2"
											></path>
											<path
												class="fa-primary"
												fill={svgFill}
												d="M370.1 163.8l-131 130a11 11 0 0 1-15.6-.1l-75.7-76.3a11 11 0 0 1 .1-15.6l26-25.8a11 11 0 0 1 15.6.1l42.1 42.5 97.2-96.4a11 11 0 0 1 15.6.1l25.8 26a11 11 0 0 1-.1 15.5z"
												opacity="0.6"
											></path>
										</g>
									</svg>
								}
								title={__("Icons", "mr-alert-blocks")}
								initialOpen={false}
							>
								<IconPicker {...this.props} attrIcon={"svgIcon"} />
								<RangeControl
									label={__("Icon Size", "mr-alert-blocks")}
									value={iconSize}
									onChange={(value) => {
										setAttributes({
											iconSize: value,
										});
									}}
									min={25}
									max={500}
									allowReset={true}
									initialPosition={45}
									step={1}
									withInputField={true}
									stepper={true}
								/>
							</MRPanelArea>
						)}
						{"tablet" === this.state.device && (
							<MRPanelArea
								icon={
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fad"
										data-icon="comment-alt-check"
										class="svg-inline--fa fa-comment-alt-check fa-w-16"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<g class="fa-group">
											<path
												class="fa-secondary"
												fill={svgFill}
												d="M448 0H64A64.06 64.06 0 0 0 0 64v288a64.06 64.06 0 0 0 64 64h96v84a12 12 0 0 0 19.1 9.7L304 416h144a64.06 64.06 0 0 0 64-64V64a64.06 64.06 0 0 0-64-64zm-77.9 163.8l-131 130a11 11 0 0 1-15.6-.1l-75.7-76.3a11 11 0 0 1 .1-15.6l26-25.8a11 11 0 0 1 15.6.1l42.1 42.5 97.2-96.4a11 11 0 0 1 15.6.1l25.8 26a11 11 0 0 1-.1 15.5z"
												opacity="0.2"
											></path>
											<path
												class="fa-primary"
												fill={svgFill}
												d="M370.1 163.8l-131 130a11 11 0 0 1-15.6-.1l-75.7-76.3a11 11 0 0 1 .1-15.6l26-25.8a11 11 0 0 1 15.6.1l42.1 42.5 97.2-96.4a11 11 0 0 1 15.6.1l25.8 26a11 11 0 0 1-.1 15.5z"
												opacity="0.6"
											></path>
										</g>
									</svg>
								}
								title={__("Icons - Tablet", "mr-alert-blocks")}
								initialOpen={true}
							>
								<RangeControl
									label={__("Icon Size", "mr-alert-blocks")}
									value={iconSize}
									onChange={(value) => {
										setAttributes({
											iconSize: value,
										});
									}}
									min={25}
									max={500}
									allowReset={true}
									initialPosition={45}
									step={1}
									withInputField={true}
									stepper={true}
								/>
							</MRPanelArea>
						)}
						{"mobile" === this.state.device && (
							<MRPanelArea
								icon={
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fad"
										data-icon="comment-alt-check"
										class="svg-inline--fa fa-comment-alt-check fa-w-16"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<g class="fa-group">
											<path
												class="fa-secondary"
												fill={svgFill}
												d="M448 0H64A64.06 64.06 0 0 0 0 64v288a64.06 64.06 0 0 0 64 64h96v84a12 12 0 0 0 19.1 9.7L304 416h144a64.06 64.06 0 0 0 64-64V64a64.06 64.06 0 0 0-64-64zm-77.9 163.8l-131 130a11 11 0 0 1-15.6-.1l-75.7-76.3a11 11 0 0 1 .1-15.6l26-25.8a11 11 0 0 1 15.6.1l42.1 42.5 97.2-96.4a11 11 0 0 1 15.6.1l25.8 26a11 11 0 0 1-.1 15.5z"
												opacity="0.2"
											></path>
											<path
												class="fa-primary"
												fill={svgFill}
												d="M370.1 163.8l-131 130a11 11 0 0 1-15.6-.1l-75.7-76.3a11 11 0 0 1 .1-15.6l26-25.8a11 11 0 0 1 15.6.1l42.1 42.5 97.2-96.4a11 11 0 0 1 15.6.1l25.8 26a11 11 0 0 1-.1 15.5z"
												opacity="0.6"
											></path>
										</g>
									</svg>
								}
								title={__("Icons - Mobile", "mr-alert-blocks")}
								initialOpen={true}
							>
								<RangeControl
									label={__("Icon Size", "mr-alert-blocks")}
									value={iconSize}
									onChange={(value) => {
										setAttributes({
											iconSize: value,
										});
									}}
									min={25}
									max={500}
									allowReset={true}
									initialPosition={45}
									step={1}
									withInputField={true}
									stepper={true}
								/>
							</MRPanelArea>
						)}
					</Fragment>
				)}
				{displayTitle && (
					<Fragment>
						{"desktop" === this.state.device && (
							<MRPanelArea
								icon={
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fad"
										data-icon="heading"
										class="svg-inline--fa fa-heading fa-w-16"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<g class="fa-group">
											<path
												class="fa-secondary"
												fill={svgFill}
												d="M480 32H320a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm-288 0H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm0 384H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm288 0H320a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
												opacity="0.2"
											></path>
											<path
												class="fa-primary"
												fill={svgFill}
												opacity="0.6"
												d="M352 96h96v320h-96V288H160v128H64V96h96v128h192z"
											></path>
										</g>
									</svg>
								}
								title={__("Alert Title", "mr-alert-blocks")}
								initialOpen={false}
							>
								<Fragment>
									<Dimensions
										{...this.props}
										type={"padding"}
										label={__("Title Padding", "mr-alert-blocks")}
										attrTop={"titlePaddingTop"}
										attrRight={"titlePaddingRight"}
										attrBottom={"titlePaddingBottom"}
										attrLeft={"titlePaddingLeft"}
										attrUnit={"titlePaddingUnit"}
										attrSyncUnits={"titlePaddingSyncUnits"}
									/>
									<Dimensions
										{...this.props}
										type={"margin"}
										label={__("Title Margin", "mr-alert-blocks")}
										attrTop={"titleMarginTop"}
										attrRight={"titleMarginRight"}
										attrBottom={"titleMarginBottom"}
										attrLeft={"titleMarginLeft"}
										attrUnit={"titleMarginUnit"}
										attrSyncUnits={"titleMarginSyncUnits"}
									/>
									<SelectControl
										label={__("Title HTML Tag", "mr-alert-blocks")}
										options={tagOptions}
										value={titleTag}
										onChange={(value) => {
											setAttributes({ titleTag: value });
										}}
									/>
									<SelectControl
										label={__("Title Text Transform", "mr-alert-blocks")}
										options={textTransformOptions}
										value={titleTransform}
										onChange={(value) => {
											setAttributes({ titleTransform: value });
										}}
									/>
									<SelectControl
										label={__("Title Font", "mr-alert-blocks")}
										options={fontOptions}
										value={titleFont}
										onChange={(value) => {
											this.props.setAttributes({ titleFont: value });
										}}
									/>
									<RangeControl
										label={__("Title Font Size", "mr-alert-blocks")}
										value={titleSize}
										onChange={(value) => {
											setAttributes({
												titleSize: value,
											});
										}}
										min={1}
										max={100}
										allowReset={true}
										initialPosition={32}
										step={1}
									/>
									<TextControl
										label={__("Line Height", "mr-alert-blocks")}
										onChange={(value) => {
											setAttributes({
												titleLineHeight: value,
											});
										}}
										value={titleLineHeight}
										type="number"
									/>
									<SelectControl
										label={__("Font Weight", "mr-alert-blocks")}
										options={fontWeightOptions}
										value={titleFontWeight}
										onChange={(value) => {
											setAttributes({ titleFontWeight: value });
										}}
									/>
								</Fragment>
							</MRPanelArea>
						)}
						{"tablet" === this.state.device && (
							<MRPanelArea
								icon={
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fad"
										data-icon="heading"
										class="svg-inline--fa fa-heading fa-w-16"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<g class="fa-group">
											<path
												class="fa-secondary"
												fill={svgFill}
												d="M480 32H320a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm-288 0H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm0 384H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm288 0H320a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
												opacity="0.2"
											></path>
											<path
												class="fa-primary"
												fill={svgFill}
												opacity="0.6"
												d="M352 96h96v320h-96V288H160v128H64V96h96v128h192z"
											></path>
										</g>
									</svg>
								}
								title={__("Alert Title - Tablet", "mr-alert-blocks")}
								initialOpen={true}
							>
								<Fragment>
									<Dimensions
										{...this.props}
										type={"padding"}
										label={__("Title Padding", "mr-alert-blocks")}
										attrTop={"titlePaddingTop"}
										attrRight={"titlePaddingRight"}
										attrBottom={"titlePaddingBottom"}
										attrLeft={"titlePaddingLeft"}
										attrUnit={"titlePaddingUnit"}
										attrSyncUnits={"titlePaddingSyncUnits"}
									/>
									<Dimensions
										{...this.props}
										type={"margin"}
										label={__("Title Margin", "mr-alert-blocks")}
										attrTop={"titleMarginTop"}
										attrRight={"titleMarginRight"}
										attrBottom={"titleMarginBottom"}
										attrLeft={"titleMarginLeft"}
										attrUnit={"titleMarginUnit"}
										attrSyncUnits={"titleMarginSyncUnits"}
									/>
									<SelectControl
										label={__("Title HTML Tag", "mr-alert-blocks")}
										options={tagOptions}
										value={titleTag}
										onChange={(value) => {
											setAttributes({ titleTag: value });
										}}
									/>
									<RangeControl
										label={__("Title Font Size", "mr-alert-blocks")}
										value={titleSize}
										onChange={(value) => {
											setAttributes({
												titleSize: value,
											});
										}}
										min={1}
										max={100}
										allowReset={true}
										initialPosition={32}
										step={1}
									/>
									<TextControl
										label={__("Line Height", "mr-alert-blocks")}
										onChange={(value) => {
											setAttributes({
												titleLineHeight: value,
											});
										}}
										value={titleLineHeight}
										type="number"
									/>
								</Fragment>
							</MRPanelArea>
						)}
						{"mobile" === this.state.device && (
							<MRPanelArea
								icon={
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fad"
										data-icon="heading"
										class="svg-inline--fa fa-heading fa-w-16"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<g class="fa-group">
											<path
												class="fa-secondary"
												fill={svgFill}
												d="M480 32H320a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm-288 0H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm0 384H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm288 0H320a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
												opacity="0.2"
											></path>
											<path
												class="fa-primary"
												fill={svgFill}
												opacity="0.6"
												d="M352 96h96v320h-96V288H160v128H64V96h96v128h192z"
											></path>
										</g>
									</svg>
								}
								title={__("Alert Title - Mobile", "mr-alert-blocks")}
								initialOpen={true}
							>
								<Fragment>
									<Dimensions
										{...this.props}
										type={"padding"}
										label={__("Title Padding", "mr-alert-blocks")}
										attrTop={"titlePaddingTop"}
										attrRight={"titlePaddingRight"}
										attrBottom={"titlePaddingBottom"}
										attrLeft={"titlePaddingLeft"}
										attrUnit={"titlePaddingUnit"}
										attrSyncUnits={"titlePaddingSyncUnits"}
									/>
									<Dimensions
										{...this.props}
										type={"margin"}
										label={__("Title Margin", "mr-alert-blocks")}
										attrTop={"titleMarginTop"}
										attrRight={"titleMarginRight"}
										attrBottom={"titleMarginBottom"}
										attrLeft={"titleMarginLeft"}
										attrUnit={"titleMarginUnit"}
										attrSyncUnits={"titleMarginSyncUnits"}
									/>
									<SelectControl
										label={__("Title HTML Tag", "mr-alert-blocks")}
										options={tagOptions}
										value={titleTag}
										onChange={(value) => {
											setAttributes({ titleTag: value });
										}}
									/>
									<RangeControl
										label={__("Title Font Size", "mr-alert-blocks")}
										value={titleSize}
										onChange={(value) => {
											setAttributes({
												titleSize: value,
											});
										}}
										min={1}
										max={100}
										allowReset={true}
										initialPosition={32}
										step={1}
									/>
									<TextControl
										label={__("Line Height", "mr-alert-blocks")}
										onChange={(value) => {
											setAttributes({
												titleLineHeight: value,
											});
										}}
										value={titleLineHeight}
										type="number"
									/>
								</Fragment>
							</MRPanelArea>
						)}
					</Fragment>
				)}
				{displayContent && (
					<Fragment>
						{"desktop" === this.state.device && (
							<MRPanelArea
								icon={
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fad"
										data-icon="paragraph"
										class="svg-inline--fa fa-paragraph fa-w-14"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 448 512"
									>
										<g class="fa-group">
											<path
												class="fa-secondary"
												fill={svgFill}
												d="M368 96v368a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V96z"
												opacity="0.2"
											></path>
											<path
												class="fa-primary"
												fill={svgFill}
												opacity="0.6"
												d="M432 48v32a16 16 0 0 1-16 16H272v368a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V352h-32a160 160 0 0 1 0-320h240a16 16 0 0 1 16 16z"
											></path>
										</g>
									</svg>
								}
								title={__("Content", "mr-alert-blocks")}
								initialOpen={false}
							>
								<Fragment>
									<Dimensions
										{...this.props}
										type={"padding"}
										label={__("Content Padding", "mr-alert-blocks")}
										attrTop={"contentPaddingTop"}
										attrRight={"contentPaddingRight"}
										attrBottom={"contentPaddingBottom"}
										attrLeft={"contentPaddingLeft"}
										attrUnit={"contentPaddingUnit"}
										attrSyncUnits={"contentPaddingSyncUnits"}
									/>
									<Dimensions
										{...this.props}
										type={"margin"}
										label={__("Content Margin", "mr-alert-blocks")}
										attrTop={"contentMarginTop"}
										attrRight={"contentMarginRight"}
										attrBottom={"contentMarginBottom"}
										attrLeft={"contentMarginLeft"}
										attrUnit={"contentMarginUnit"}
										attrSyncUnits={"contentMarginSyncUnits"}
									/>
									<SelectControl
										label={__("Content Text Transform", "mr-alert-blocks")}
										options={textTransformOptions}
										value={contentTransform}
										onChange={(value) => {
											setAttributes({ contentTransform: value });
										}}
									/>
									<SelectControl
										label={__("Content Font", "mr-alert-blocks")}
										options={fontOptions}
										value={contentFont}
										onChange={(value) => {
											this.props.setAttributes({ contentFont: value });
										}}
									/>
									<RangeControl
										label={__("Content Font Size", "mr-alert-blocks")}
										value={contentSize}
										onChange={(value) => {
											setAttributes({
												contentSize: value,
											});
										}}
										min={1}
										max={100}
										allowReset={true}
										initialPosition={32}
										step={1}
									/>
									<TextControl
										label={__("Line Height", "mr-alert-blocks")}
										onChange={(value) => {
											setAttributes({
												contentLineHeight: value,
											});
										}}
										value={contentLineHeight}
										type="number"
									/>
									<SelectControl
										label={__("Font Weight", "mr-alert-blocks")}
										options={fontWeightOptions}
										value={contentFontWeight}
										onChange={(value) => {
											setAttributes({ contentFontWeight: value });
										}}
									/>
								</Fragment>
							</MRPanelArea>
						)}
						{"tablet" === this.state.device && (
							<MRPanelArea
								icon={
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fad"
										data-icon="paragraph"
										class="svg-inline--fa fa-paragraph fa-w-14"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 448 512"
									>
										<g class="fa-group">
											<path
												class="fa-secondary"
												fill={svgFill}
												d="M368 96v368a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V96z"
												opacity="0.2"
											></path>
											<path
												class="fa-primary"
												fill={svgFill}
												opacity="0.6"
												d="M432 48v32a16 16 0 0 1-16 16H272v368a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V352h-32a160 160 0 0 1 0-320h240a16 16 0 0 1 16 16z"
											></path>
										</g>
									</svg>
								}
								title={__("Content - Tablet", "mr-alert-blocks")}
								initialOpen={true}
							>
								<Fragment>
									<Dimensions
										{...this.props}
										type={"padding"}
										label={__("Content Padding", "mr-alert-blocks")}
										attrTop={"contentPaddingTop"}
										attrRight={"contentPaddingRight"}
										attrBottom={"contentPaddingBottom"}
										attrLeft={"contentPaddingLeft"}
										attrUnit={"contentPaddingUnit"}
										attrSyncUnits={"contentPaddingSyncUnits"}
									/>
									<Dimensions
										{...this.props}
										type={"margin"}
										label={__("Content Margin", "mr-alert-blocks")}
										attrTop={"contentMarginTop"}
										attrRight={"contentMarginRight"}
										attrBottom={"contentMarginBottom"}
										attrLeft={"contentMarginLeft"}
										attrUnit={"contentMarginUnit"}
										attrSyncUnits={"contentMarginSyncUnits"}
									/>
									<RangeControl
										label={__("Content Font Size", "mr-alert-blocks")}
										value={contentSize}
										onChange={(value) => {
											setAttributes({
												contentSize: value,
											});
										}}
										min={1}
										max={100}
										allowReset={true}
										initialPosition={32}
										step={1}
									/>
									<TextControl
										label={__("Line Height", "mr-alert-blocks")}
										onChange={(value) => {
											setAttributes({
												contentLineHeight: value,
											});
										}}
										value={contentLineHeight}
										type="number"
									/>
								</Fragment>
							</MRPanelArea>
						)}
						{"mobile" === this.state.device && (
							<MRPanelArea
								icon={
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fad"
										data-icon="paragraph"
										class="svg-inline--fa fa-paragraph fa-w-14"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 448 512"
									>
										<g class="fa-group">
											<path
												class="fa-secondary"
												fill={svgFill}
												d="M368 96v368a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V96z"
												opacity="0.2"
											></path>
											<path
												class="fa-primary"
												fill={svgFill}
												opacity="0.6"
												d="M432 48v32a16 16 0 0 1-16 16H272v368a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V352h-32a160 160 0 0 1 0-320h240a16 16 0 0 1 16 16z"
											></path>
										</g>
									</svg>
								}
								title={__("Content - Mobile", "mr-alert-blocks")}
								initialOpen={true}
							>
								<Fragment>
									<Dimensions
										{...this.props}
										type={"padding"}
										label={__("Content Padding", "mr-alert-blocks")}
										attrTop={"contentPaddingTop"}
										attrRight={"contentPaddingRight"}
										attrBottom={"contentPaddingBottom"}
										attrLeft={"contentPaddingLeft"}
										attrUnit={"contentPaddingUnit"}
										attrSyncUnits={"contentPaddingSyncUnits"}
									/>
									<Dimensions
										{...this.props}
										type={"margin"}
										label={__("Content Margin", "mr-alert-blocks")}
										attrTop={"contentMarginTop"}
										attrRight={"contentMarginRight"}
										attrBottom={"contentMarginBottom"}
										attrLeft={"contentMarginLeft"}
										attrUnit={"contentMarginUnit"}
										attrSyncUnits={"contentMarginSyncUnits"}
									/>
									<RangeControl
										label={__("Content Font Size", "mr-alert-blocks")}
										value={contentSize}
										onChange={(value) => {
											setAttributes({
												contentSize: value,
											});
										}}
										min={1}
										max={100}
										allowReset={true}
										initialPosition={32}
										step={1}
									/>
									<TextControl
										label={__("Line Height", "mr-alert-blocks")}
										onChange={(value) => {
											setAttributes({
												contentLineHeight: value,
											});
										}}
										value={contentLineHeight}
										type="number"
									/>
								</Fragment>
							</MRPanelArea>
						)}
					</Fragment>
				)}
				{displayButton && (
					<Fragment>
						{"desktop" === this.state.device && (
							<MRPanelArea
								icon={
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fad"
										data-icon="rectangle-landscape"
										class="svg-inline--fa fa-rectangle-landscape fa-w-16"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<g class="fa-group">
											<path
												class="fa-secondary"
												fill={svgFill}
												d="M464 64H48a48 48 0 0 0-48 48v288a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V112a48 48 0 0 0-48-48zm-16 304a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V144a16 16 0 0 1 16-16h352a16 16 0 0 1 16 16z"
												opacity="0.2"
											></path>
											<path
												class="fa-primary"
												fill={svgFill}
												d="M64 368V144a16 16 0 0 1 16-16h352a16 16 0 0 1 16 16v224a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16z"
												opacity="0.6"
											></path>
										</g>
									</svg>
								}
								title={__("Button", "mr-alert-blocks")}
								initialOpen={false}
							>
								<Fragment>
									<Dimensions
										{...this.props}
										type={"padding"}
										label={__("Button Padding", "mr-alert-blocks")}
										attrTop={"buttonPaddingTop"}
										attrRight={"buttonPaddingRight"}
										attrBottom={"buttonPaddingBottom"}
										attrLeft={"buttonPaddingLeft"}
										attrUnit={"buttonPaddingUnit"}
										attrSyncUnits={"buttonPaddingSyncUnits"}
									/>
									<Dimensions
										{...this.props}
										type={"margin"}
										label={__("Button Margin", "mr-alert-blocks")}
										attrTop={"buttonMarginTop"}
										attrRight={"buttonMarginRight"}
										attrBottom={"buttonMarginBottom"}
										attrLeft={"buttonMarginLeft"}
										attrUnit={"buttonMarginUnit"}
										attrSyncUnits={"buttonMarginSyncUnits"}
									/>
									<SelectControl
										label={__("Button Width", "mr-alert-blocks")}
										options={buttonWidthtOptions}
										value={buttonWidth}
										onChange={(value) => {
											setAttributes({ buttonWidth: value });
										}}
									/>
									{"fixed" === buttonWidth && (
										<Fragment>
											<RangeControl
												label={__("Button Max-Width", "mr-alert-blocks")}
												allowReset={true}
												initialPosition={buttonWidthFixed}
												min={50}
												max={1200}
												step={10}
												value={buttonWidthFixed}
												withInputField={true}
												stepper={true}
												onChange={(value) => {
													setAttributes({
														buttonWidthFixed: value,
													});
												}}
											/>
										</Fragment>
									)}
									<TextControl
										label={__("Border Width", "mr-alert-blocks")}
										onChange={(value) => {
											setAttributes({
												buttonBorderWidth: value,
											});
										}}
										value={buttonBorderWidth}
										type="number"
									/>
									<Dimensions
										{...this.props}
										type={"padding"}
										label={__("Border Radius", "mr-alert-blocks")}
										attrTop={"buttonBorderRadiusTop"}
										attrRight={"buttonBorderRadiusRight"}
										attrBottom={"buttonBorderRadiusBottom"}
										attrLeft={"buttonBorderRadiusLeft"}
										attrUnit={"buttonBorderRadiusUnit"}
										attrSyncUnits={"buttonRadiusSyncUnits"}
									/>
									<SelectControl
										label={__("Button Text Transform", "mr-alert-blocks")}
										options={textTransformOptions}
										value={buttonTextTransform}
										onChange={(value) => {
											setAttributes({ buttonTextTransform: value });
										}}
									/>
									<SelectControl
										label={__("Button Font", "mr-alert-blocks")}
										options={fontOptions}
										value={buttonFont}
										onChange={(value) => {
											this.props.setAttributes({ buttonFont: value });
										}}
									/>
									<RangeControl
										label={__("Button Font Size", "mr-alert-blocks")}
										value={buttonFontSize}
										onChange={(value) => {
											setAttributes({
												buttonFontSize: value,
											});
										}}
										min={1}
										max={100}
										allowReset={true}
										initialPosition={32}
										step={1}
									/>
									<TextControl
										label={__("Line Height", "mr-alert-blocks")}
										onChange={(value) => {
											setAttributes({
												buttonLineHeight: value,
											});
										}}
										value={buttonLineHeight}
										type="number"
									/>
									<SelectControl
										label={__("Font Weight", "mr-alert-blocks")}
										options={fontWeightOptions}
										value={buttonFontWeight}
										onChange={(value) => {
											setAttributes({ buttonFontWeight: value });
										}}
									/>
								</Fragment>
							</MRPanelArea>
						)}
						{"tablet" === this.state.device && (
							<MRPanelArea
								icon={
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fad"
										data-icon="rectangle-landscape"
										class="svg-inline--fa fa-rectangle-landscape fa-w-16"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<g class="fa-group">
											<path
												class="fa-secondary"
												fill={svgFill}
												d="M464 64H48a48 48 0 0 0-48 48v288a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V112a48 48 0 0 0-48-48zm-16 304a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V144a16 16 0 0 1 16-16h352a16 16 0 0 1 16 16z"
												opacity="0.2"
											></path>
											<path
												class="fa-primary"
												fill={svgFill}
												d="M64 368V144a16 16 0 0 1 16-16h352a16 16 0 0 1 16 16v224a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16z"
												opacity="0.6"
											></path>
										</g>
									</svg>
								}
								title={__("Button - Tablet", "mr-alert-blocks")}
								initialOpen={true}
							>
								<Fragment>
									<Dimensions
										{...this.props}
										type={"padding"}
										label={__("Button Padding", "mr-alert-blocks")}
										attrTop={"buttonPaddingTop"}
										attrRight={"buttonPaddingRight"}
										attrBottom={"buttonPaddingBottom"}
										attrLeft={"buttonPaddingLeft"}
										attrUnit={"buttonPaddingUnit"}
										attrSyncUnits={"buttonPaddingSyncUnits"}
									/>
									<Dimensions
										{...this.props}
										type={"margin"}
										label={__("Button Margin", "mr-alert-blocks")}
										attrTop={"buttonMarginTop"}
										attrRight={"buttonMarginRight"}
										attrBottom={"buttonMarginBottom"}
										attrLeft={"buttonMarginLeft"}
										attrUnit={"buttonMarginUnit"}
										attrSyncUnits={"buttonMarginSyncUnits"}
									/>
									<TextControl
										label={__("Border Width", "mr-alert-blocks")}
										onChange={(value) => {
											setAttributes({
												buttonBorderWidth: value,
											});
										}}
										value={buttonBorderWidth}
										type="number"
									/>
									<Dimensions
										{...this.props}
										type={"padding"}
										label={__("Border Radius", "mr-alert-blocks")}
										attrTop={"buttonBorderRadiusTop"}
										attrRight={"buttonBorderRadiusRight"}
										attrBottom={"buttonBorderRadiusBottom"}
										attrLeft={"buttonBorderRadiusLeft"}
										attrUnit={"buttonBorderRadiusUnit"}
										attrSyncUnits={"buttonRadiusSyncUnits"}
									/>
									<RangeControl
										label={__("Button Font Size", "mr-alert-blocks")}
										value={buttonFontSize}
										onChange={(value) => {
											setAttributes({
												buttonFontSize: value,
											});
										}}
										min={1}
										max={100}
										allowReset={true}
										initialPosition={32}
										step={1}
									/>
									<TextControl
										label={__("Line Height", "mr-alert-blocks")}
										onChange={(value) => {
											setAttributes({
												buttonLineHeight: value,
											});
										}}
										value={buttonLineHeight}
										type="number"
									/>
								</Fragment>
							</MRPanelArea>
						)}
						{"mobile" === this.state.device && (
							<MRPanelArea
								icon={
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fad"
										data-icon="rectangle-landscape"
										class="svg-inline--fa fa-rectangle-landscape fa-w-16"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<g class="fa-group">
											<path
												class="fa-secondary"
												fill={svgFill}
												d="M464 64H48a48 48 0 0 0-48 48v288a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V112a48 48 0 0 0-48-48zm-16 304a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V144a16 16 0 0 1 16-16h352a16 16 0 0 1 16 16z"
												opacity="0.2"
											></path>
											<path
												class="fa-primary"
												fill={svgFill}
												d="M64 368V144a16 16 0 0 1 16-16h352a16 16 0 0 1 16 16v224a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16z"
												opacity="0.6"
											></path>
										</g>
									</svg>
								}
								title={__("Button - Mobile", "mr-alert-blocks")}
								initialOpen={true}
							>
								<Fragment>
									<Dimensions
										{...this.props}
										type={"padding"}
										label={__("Button Padding", "mr-alert-blocks")}
										attrTop={"buttonPaddingTop"}
										attrRight={"buttonPaddingRight"}
										attrBottom={"buttonPaddingBottom"}
										attrLeft={"buttonPaddingLeft"}
										attrUnit={"buttonPaddingUnit"}
										attrSyncUnits={"buttonPaddingSyncUnits"}
									/>
									<Dimensions
										{...this.props}
										type={"margin"}
										label={__("Button Margin", "mr-alert-blocks")}
										attrTop={"buttonMarginTop"}
										attrRight={"buttonMarginRight"}
										attrBottom={"buttonMarginBottom"}
										attrLeft={"buttonMarginLeft"}
										attrUnit={"buttonMarginUnit"}
										attrSyncUnits={"buttonMarginSyncUnits"}
									/>
									<TextControl
										label={__("Border Width", "mr-alert-blocks")}
										onChange={(value) => {
											setAttributes({
												buttonBorderWidth: value,
											});
										}}
										value={buttonBorderWidth}
										type="number"
									/>
									<Dimensions
										{...this.props}
										type={"padding"}
										label={__("Border Radius", "mr-alert-blocks")}
										attrTop={"buttonBorderRadiusTop"}
										attrRight={"buttonBorderRadiusRight"}
										attrBottom={"buttonBorderRadiusBottom"}
										attrLeft={"buttonBorderRadiusLeft"}
										attrUnit={"buttonBorderRadiusUnit"}
										attrSyncUnits={"buttonRadiusSyncUnits"}
									/>
									<RangeControl
										label={__("Button Font Size", "mr-alert-blocks")}
										value={buttonFontSize}
										onChange={(value) => {
											setAttributes({
												buttonFontSize: value,
											});
										}}
										min={1}
										max={100}
										allowReset={true}
										initialPosition={32}
										step={1}
									/>
									<TextControl
										label={__("Line Height", "mr-alert-blocks")}
										onChange={(value) => {
											setAttributes({
												buttonLineHeight: value,
											});
										}}
										value={buttonLineHeight}
										type="number"
									/>
								</Fragment>
							</MRPanelArea>
						)}
					</Fragment>
				)}
				{displayButton && (
					<Fragment>
						{"desktop" === this.state.device && (
							<MRPanelArea
								icon={
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fad"
										data-icon="rectangle-landscape"
										class="svg-inline--fa fa-rectangle-landscape fa-w-16"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<g class="fa-group">
											<path
												class="fa-secondary"
												fill={svgFill}
												d="M464 64H48a48 48 0 0 0-48 48v288a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V112a48 48 0 0 0-48-48zm-16 304a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V144a16 16 0 0 1 16-16h352a16 16 0 0 1 16 16z"
												opacity="0.2"
											></path>
											<path
												class="fa-primary"
												fill={svgFill}
												d="M64 368V144a16 16 0 0 1 16-16h352a16 16 0 0 1 16 16v224a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16z"
												opacity="0.6"
											></path>
										</g>
									</svg>
								}
								title={__("Button Colors", "mr-alert-blocks")}
								initialOpen={false}
							>
								<TabPanel
									className="mr-alert-control-tabs"
									activeClass="active-tab"
									tabs={[
										{
											name: "button-colors",
											title: __("Normal", "mr-alert-blocks"),
											className: "button-colors",
										},
										{
											name: "button-colors-hover",
											title: __("Hover", "mr-alert-blocks"),
											className: "button-colors-hover",
										},
									]}
								>
									{(tab) => {
										const isNormal = tab.name === "button-colors";

										return (
											<div>
												{isNormal ? (
													<Fragment>
														<PanelColorSettings
															title={__("Color Settings", "mr-alert-blocks")}
															colorSettings={buttonColorOptions}
														></PanelColorSettings>
													</Fragment>
												) : (
													<Fragment>
														<PanelColorSettings
															title={__("Color Settings", "mr-alert-blocks")}
															colorSettings={buttonColorOptionsHover}
														></PanelColorSettings>
													</Fragment>
												)}
											</div>
										);
									}}
								</TabPanel>
							</MRPanelArea>
						)}
					</Fragment>
				)}
				{displayButton && (
					<Fragment>
						{"desktop" === this.state.device && (
							<MRPanelArea
								icon={
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fad"
										data-icon="rectangle-landscape"
										class="svg-inline--fa fa-rectangle-landscape fa-w-16"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<g class="fa-group">
											<path
												class="fa-secondary"
												fill={svgFill}
												d="M464 64H48a48 48 0 0 0-48 48v288a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V112a48 48 0 0 0-48-48zm-16 304a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V144a16 16 0 0 1 16-16h352a16 16 0 0 1 16 16z"
												opacity="0.2"
											></path>
											<path
												class="fa-primary"
												fill={svgFill}
												d="M64 368V144a16 16 0 0 1 16-16h352a16 16 0 0 1 16 16v224a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16z"
												opacity="0.6"
											></path>
										</g>
									</svg>
								}
								title={__("Button Icon", "mr-alert-blocks")}
								initialOpen={false}
							>
								<ToggleControl
									label={__("Enable Button Icon?", "mr-alert-blocks")}
									checked={buttonIconEnabled}
									onChange={(value) => {
										setAttributes({
											buttonIconEnabled: value,
										});
									}}
								/>
								{buttonIconEnabled && (
									<Fragment>
										<SelectControl
											label={__("Icon Location", "mr-alert-blocks")}
											options={buttonIconLocationOptions}
											value={buttonIconLocation}
											onChange={(value) => {
												setAttributes({ buttonIconLocation: value });
											}}
										/>
										<RangeControl
											label={__("Icon Size", "mr-alert-blocks")}
											value={buttonIconSize}
											onChange={(value) => {
												setAttributes({
													buttonIconSize: value,
												});
											}}
											min={1}
											max={500}
											allowReset={true}
											initialPosition={25}
											step={1}
										/>
										<Fragment>
											<IconPicker {...this.props} attrIcon={"buttonIcon"} />
										</Fragment>
									</Fragment>
								)}
							</MRPanelArea>
						)}
						{"tablet" === this.state.device && buttonIconEnabled && (
							<MRPanelArea
								icon={
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fad"
										data-icon="rectangle-landscape"
										class="svg-inline--fa fa-rectangle-landscape fa-w-16"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<g class="fa-group">
											<path
												class="fa-secondary"
												fill={svgFill}
												d="M464 64H48a48 48 0 0 0-48 48v288a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V112a48 48 0 0 0-48-48zm-16 304a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V144a16 16 0 0 1 16-16h352a16 16 0 0 1 16 16z"
												opacity="0.2"
											></path>
											<path
												class="fa-primary"
												fill={svgFill}
												d="M64 368V144a16 16 0 0 1 16-16h352a16 16 0 0 1 16 16v224a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16z"
												opacity="0.6"
											></path>
										</g>
									</svg>
								}
								title={__("Button Icon - Tablet", "mr-alert-blocks")}
								initialOpen={true}
							>
								{buttonIconEnabled && (
									<Fragment>
										<RangeControl
											label={__("Icon Size", "mr-alert-blocks")}
											value={buttonIconSize}
											onChange={(value) => {
												setAttributes({
													buttonIconSize: value,
												});
											}}
											min={1}
											max={500}
											allowReset={true}
											initialPosition={25}
											step={1}
										/>
									</Fragment>
								)}
							</MRPanelArea>
						)}
						{"mobile" === this.state.device && buttonIconEnabled && (
							<MRPanelArea
								icon={
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fad"
										data-icon="rectangle-landscape"
										class="svg-inline--fa fa-rectangle-landscape fa-w-16"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<g class="fa-group">
											<path
												class="fa-secondary"
												fill={svgFill}
												d="M464 64H48a48 48 0 0 0-48 48v288a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V112a48 48 0 0 0-48-48zm-16 304a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V144a16 16 0 0 1 16-16h352a16 16 0 0 1 16 16z"
												opacity="0.2"
											></path>
											<path
												class="fa-primary"
												fill={svgFill}
												d="M64 368V144a16 16 0 0 1 16-16h352a16 16 0 0 1 16 16v224a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16z"
												opacity="0.6"
											></path>
										</g>
									</svg>
								}
								title={__("Button Icon - Mobile", "mr-alert-blocks")}
								initialOpen={true}
							>
								{buttonIconEnabled && (
									<Fragment>
										<RangeControl
											label={__("Icon Size", "mr-alert-blocks")}
											value={buttonIconSize}
											onChange={(value) => {
												setAttributes({
													buttonIconSize: value,
												});
											}}
											min={1}
											max={500}
											allowReset={true}
											initialPosition={25}
											step={1}
										/>
									</Fragment>
								)}
							</MRPanelArea>
						)}
					</Fragment>
				)}
			</InspectorControls>
		);
		return (
			<Fragment>
				{inspectorControls}
				{this.responseOptionsToolbar()}
				{!disableStyles && <DesktopCSS {...this.props} />}
				<div {...htmlAttributes}>
					<div className="mr-alert-wrapper">
						{iconShow && hasIcon && (
							<Fragment>
								<div className="mr-alert-icon-wrapper">
									<span
										className="mr-alert-icon"
										dangerouslySetInnerHTML={{ __html: sanitizeSVG(svgIcon) }}
									/>
								</div>
							</Fragment>
						)}
						{displayTitle && (
							<div className="mr-alert-title-wrapper">
								<RichText
									value={title}
									onChange={(value) => {
										setAttributes({
											title: value,
										});
									}}
									tagName={titleTag}
									placeholder={__("Enter your alert title", "mr-alert-blocks")}
								/>
							</div>
						)}
						{displayContent && (
							<div className="mr-alert-content-wrapper">
								<RichText
									value={content}
									onChange={(value) => {
										setAttributes({
											content: value,
										});
									}}
									tagName="div"
									placeholder={__("Enter your alert text", "mr-alert-blocks")}
									allowedFormats={["core/link", "core/bold"]}
								/>
							</div>
						)}
						{displayButton && (
							<div className="mr-alert-button-wrapper">
								<a
									{...buttonHtmlAttributes}
									onClick={(e) => {
										e.preventDefault();
									}}
								>
									{buttonIconEnabled && "left" === buttonIconLocation && (
										<Fragment>
											<span
												className="mr-alert-icon"
												dangerouslySetInnerHTML={{
													__html: sanitizeSVG(buttonIcon),
												}}
											/>
										</Fragment>
									)}
									<RichText
										value={buttonText}
										onChange={(value) => {
											setAttributes({
												buttonText: value,
											});
										}}
										tagName="span"
										placeholder={__("Button text...", "mr-alert-blocks")}
										allowedFormats={[]}
									/>
									{buttonIconEnabled && "right" === buttonIconLocation && (
										<Fragment>
											<span
												className="mr-alert-icon"
												dangerouslySetInnerHTML={{
													__html: sanitizeSVG(buttonIcon),
												}}
											/>
										</Fragment>
									)}
								</a>
								{isSelected && (
									<URLInput
										url={url}
										target={target}
										onChange={(data) => {
											setAttributes(data);
										}}
										autoFocus={false} // eslint-disable-line jsx-a11y/no-autofocus
										className="gblocks-component-url-input-float"
									/>
								)}
							</div>
						)}
					</div>
				</div>
			</Fragment>
		);
	}
}

export default SABAlerts;
