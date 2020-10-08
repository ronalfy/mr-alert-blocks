import MRIcon from "./components/MRIcon";
import MRPanelArea from "./components/MRPanelArea";
import Dimensions from "./components/dimensions";
import { uniqueId } from "lodash";
import classnames from "classnames";
import DesktopCSS from "./css/desktop.js";
import IconPicker from "./components/icon-picker";
import URLInput from './components/url-input';
import sanitizeSVG from "./utils/sanitize-svg";
import SVGs from './components/icon-picker/svgs-fa.js';

const { Component, Fragment, cloneElement, renderToString} = wp.element;

const { __, _n } = wp.i18n;

const { decodeEntities } = wp.htmlEntities;

const {
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
	TabPanel,
} = wp.components;

const {
	__experimentalGradientPickerControl,
	InspectorControls,
	PanelColorSettings,
	RichText,
} = wp.blockEditor;

class SABAlerts extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			alertType: "primary",
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
			{ value: "primary", label: "Primary" },
			{ value: "secondary", label: "Secondary" },
			{ value: "success", label: "Success" },
			{ value: "warning", label: "Warning" },
			{ value: "danger", label: "Danger" },
			{ value: "info", label: "Info" },
			{ value: "light", label: "Light" },
			{ value: "dark", label: "Dark" },
		];

		// Available alert types for a dropdown setting.
		const textTransformOptions = [
			{ value: "none", label: "None" },
			{ value: "inherit", label: "inherit" },
			{ value: "capitalize", label: "Capitalize" },
			{ value: "uppercase", label: "Uppercase" },
			{ value: "lowercase", label: "Lowercase" },
		];

		const tagOptions = [
			{ value: "div", label: __("Div", "post-type-archive-mapping") },
			{ value: "p", label: __("Paragraph", "post-type-archive-mapping") },
			{ value: "h1", label: __("H1", "post-type-archive-mapping") },
			{ value: "h2", label: __("H2", "post-type-archive-mapping") },
			{ value: "h3", label: __("H3", "post-type-archive-mapping") },
			{ value: "h4", label: __("H4", "post-type-archive-mapping") },
			{ value: "h5", label: __("H5", "post-type-archive-mapping") },
			{ value: "H6", label: __("H6", "post-type-archive-mapping") },
		];

		const fontWeightOptions = [
			{ value: "100", label: __("100", "post-type-archive-mapping") },
			{ value: "200", label: __("200", "post-type-archive-mapping") },
			{ value: "300", label: __("300", "post-type-archive-mapping") },
			{ value: "400", label: __("400", "post-type-archive-mapping") },
			{ value: "500", label: __("500", "post-type-archive-mapping") },
			{ value: "600", label: __("600", "post-type-archive-mapping") },
			{ value: "700", label: __("700", "post-type-archive-mapping") },
			{ value: "800", label: __("800", "post-type-archive-mapping") },
			{ value: "900", label: __("900", "post-type-archive-mapping") },
		];

		const buttonIconLocationOptions = [
			{ value: "left", label: __("Left", "post-type-archive-mapping") },
			{ value: "above", label: __("Above", "post-type-archive-mapping") },
			{ value: "right", label: __("Right", "post-type-archive-mapping") },
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
		if ( useMainDefaultSvgName ) {
			svgIcon = renderToString(SVGs[mainDefaultSvgName]['icon']);
		}
		// Dynamically load SVG icon
		if ( useButtonDefaultSvgName ) {
			buttonIcon = renderToString(SVGs[buttonDefaultSvgName]['icon']);
		}

		const inspectorControls = (
			<InspectorControls>
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
						label={__("Show Title?", "post-type-archive-mapping")}
						checked={displayTitle}
						onChange={(value) => {
							setAttributes({
								displayTitle: value,
							});
						}}
					/>
					<ToggleControl
						label={__("Show Content?", "post-type-archive-mapping")}
						checked={displayContent}
						onChange={(value) => {
							setAttributes({
								displayContent: value,
							});
						}}
					/>
					<ToggleControl
						label={__("Show Button?", "post-type-archive-mapping")}
						checked={displayButton}
						onChange={(value) => {
							setAttributes({
								displayButton: value,
							});
						}}
					/>
				</MRPanelArea>
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
						label={__(
							"Enable Background Gradient?",
							"post-type-archive-mapping"
						)}
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
						label={__("Alert Container Padding", "generateblocks")}
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
						label={__("Alert Container Margin", "generateblocks")}
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
						label={__("Border Width", "generateblocks")}
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
						label={__("Border Radius", "generateblocks")}
						attrTop={"borderRadiusTop"}
						attrRight={"borderRadiusRight"}
						attrBottom={"borderRadiusBottom"}
						attrLeft={"borderRadiusLeft"}
						attrUnit={"borderRadiusUnit"}
						attrSyncUnits={"borderRadiusSyncUnits"}
					/>
				</MRPanelArea>
				{iconShow && (
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
				{displayTitle && (
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
								label={__("Title Padding", "generateblocks")}
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
								label={__("Title Margin", "generateblocks")}
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
								label={__("Title Font", "post-type-archive-mapping")}
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
				{displayContent && (
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
								label={__("Content Padding", "generateblocks")}
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
								label={__("Content Margin", "generateblocks")}
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
								label={__("Content Font", "post-type-archive-mapping")}
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
				{displayButton && (
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
								label={__("Button Padding", "generateblocks")}
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
								label={__("Button Margin", "generateblocks")}
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
								label={__("Border Radius", "generateblocks")}
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
								label={__("Button Font", "post-type-archive-mapping")}
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
				{displayButton && (
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
									title: __("Normal", "generateblocks"),
									className: "button-colors",
								},
								{
									name: "button-colors-hover",
									title: __("Hover", "generateblocks"),
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
				{displayButton && (
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
			</InspectorControls>
		);
		return (
			<Fragment>
				{inspectorControls}
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
						{displayContent &&
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
						}
						{displayButton && (
							<div className="mr-alert-button-wrapper">
								<a {...buttonHtmlAttributes}>
									{buttonIconEnabled && (
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
