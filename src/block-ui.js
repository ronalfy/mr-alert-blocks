import MRIcon from "./components/MRIcon";
import MRPanelArea from "./components/MRPanelArea";
import Dimensions from "./components/dimensions";
import { uniqueId } from "lodash";
import classnames from "classnames";
import DesktopCSS from "./css/desktop.js";
import IconPicker from "./components/icon-picker";
import sanitizeSVG from "./utils/sanitize-svg";

const { Component, Fragment, cloneElement } = wp.element;

const { __, _n } = wp.i18n;

const { decodeEntities } = wp.htmlEntities;

const {
	PanelBody,
	Placeholder,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
	Button,
	Toolbar,
} = wp.components;

const {
	__experimentalGradientPickerControl,
	MediaUpload,
	InspectorControls,
	PanelColorSettings,
	BlockAlignmentToolbar,
	BlockControls,
	RichText,
} = wp.blockEditor;

class SABAlerts extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			alertType: "primary",
		};

		//this.get_latest_data();
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
		const { attributes, setAttributes } = this.props;
		const {
			uniqueId,
			alertType,
			backgroundColor,
			dismiss,
			content,
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
			svgIcon,
			icon,
			iconShow,
			hasIcon,
			iconColor,
			iconSize,
			title,
			titleColor,
			titleSize,
			titleFont,
			titleTransform,
			contentColor,
			contentSize,
			contentFont,
			contentTransform,
		} = attributes;

		let htmlAttributes = {
			className: classnames({
				"mr-alert": true,
				[`mr-alert-${uniqueId}`]: true,
				[`mr-alert-type-${alertType}`]: true,
				[`alert-${alertType}`]: true,
			}),
			role: "alert",
		};

		// Available alert types for a dropdown setting.
		const allTypes = [
			{ value: "custom", label: "Custom" },
			{ value: "primary", label: "Primary" },
			{ value: "secondary", label: "Secondary" },
			{ value: "success", label: "Success" },
			{ value: "warning", label: "Warning" },
			{ value: "danger", label: "Danger" },
			{ value: "info", label: "Info" },
			{ value: "light", label: "Light" },
			{ value: "dark", label: "Dark" },
		];

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
									fill="currentColor"
									d="M569.52 440L329.58 24c-18.44-32-64.69-32-83.16 0L6.48 440c-18.42 31.94 4.64 72 41.57 72h479.89c36.87 0 60.06-40 41.58-72zM288 448a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm38.24-238.41l-12.8 128A16 16 0 0 1 297.52 352h-19a16 16 0 0 1-15.92-14.41l-12.8-128A16 16 0 0 1 265.68 192h44.64a16 16 0 0 1 15.92 17.59z"
									opacity="0.4"
								></path>
								<path
									class="fa-primary"
									fill="currentColor"
									d="M310.32 192h-44.64a16 16 0 0 0-15.92 17.59l12.8 128A16 16 0 0 0 278.48 352h19a16 16 0 0 0 15.92-14.41l12.8-128A16 16 0 0 0 310.32 192zM288 384a32 32 0 1 0 32 32 32 32 0 0 0-32-32z"
								></path>
							</g>
						</svg>
					}
					title={__("Alert Options", "mr-alert-blocks")}
					initialOpen={true}
				>
					<SelectControl
						label={__("Type of alert.", "mr-alert-blocks")}
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
									fill="currentColor"
									d="M0 200V64a32 32 0 0 1 32-32h136a23.94 23.94 0 0 1 24 24v15.3a24 24 0 0 1-24.7 24L101 93.4l123 123-39.6 39.6-123-123 1.9 66.3a24 24 0 0 1-24 24.7H24a23.94 23.94 0 0 1-24-24zm424 88h-15.3a24 24 0 0 0-24 24.7l1.9 66.3-123-123-39.6 39.6 123 123-66.3-1.9a24 24 0 0 0-24.7 24V456a23.94 23.94 0 0 0 24 24h136a32 32 0 0 0 32-32V312a23.94 23.94 0 0 0-24-24z"
									opacity="0.4"
								></path>
								<path
									class="fa-primary"
									fill="currentColor"
									d="M101 418.6l66.3-1.9a24 24 0 0 1 24.7 24V456a23.94 23.94 0 0 1-24 24H32a32 32 0 0 1-32-32V312a23.94 23.94 0 0 1 24-24h15.3a24 24 0 0 1 24 24.7L61.4 379 347 93.4l-66.3 1.9a24 24 0 0 1-24.7-24V56a23.94 23.94 0 0 1 24-24h136a32 32 0 0 1 32 32v136a23.94 23.94 0 0 1-24 24h-15.3a24 24 0 0 1-24-24.7l1.9-66.3z"
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
									fill="currentColor"
									d="M405.66 288H106.34l-33.77-32 33.77-32h299.32l33.77 32z"
									opacity="0.4"
								></path>
								<path
									class="fa-primary"
									fill="currentColor"
									d="M358.59 146.37a23.93 23.93 0 0 0 .94 33.92l79.9 75.71-79.9 75.71a23.93 23.93 0 0 0-.94 33.92L369.9 377a24.15 24.15 0 0 0 34.1 0l98.65-98.36a31.92 31.92 0 0 0 0-45.24L404 135a24.15 24.15 0 0 0-34.05 0zM153.41 365.63a23.93 23.93 0 0 0-.94-33.92L72.57 256l79.9-75.71a23.93 23.93 0 0 0 .94-33.92L142.1 135a24.15 24.15 0 0 0-34 0L9.4 233.38a31.92 31.92 0 0 0 0 45.24L108.05 377a24.15 24.15 0 0 0 34.05 0z"
								></path>
							</g>
						</svg>
					}
					title={__("Spacing", "mr-alert-blocks")}
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
						type={"border"}
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
						type={"borderradius"}
						label={__("Border Radius", "generateblocks")}
						attrTop={"borderRadiusTop"}
						attrRight={"borderRadiusRight"}
						attrBottom={"borderRadiusBottom"}
						attrLeft={"borderRadiusLeft"}
						attrUnit={"borderRadiusUnit"}
						attrSyncUnits={"borderRadiusSyncUnits"}
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
									fill="currentColor"
									d="M204.29 5c-99.4 19.4-179.5 99.29-199.1 198.4-37 187 131.7 326.39 258.8 306.69 41.2-6.4 61.4-54.59 42.5-91.69-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.31C511.49 97.13 368.09-26.87 204.29 5zM96 320a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-128a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm128-64a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm128 64a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
									opacity="0.4"
								></path>
								<path
									class="fa-primary"
									fill="currentColor"
									d="M96 256a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm32-128a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm128-64a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm128 64a32 32 0 1 0 32 32 32 32 0 0 0-32-32z"
								></path>
							</g>
						</svg>
					}
					title={__("Colors", "mr-alert-blocks")}
					initialOpen={false}
				>
					<PanelColorSettings
						title={__("Color Settings", 'mr-alert-blocks')}
						colorSettings={[
							{
								value: backgroundColor,
								onChange: (colorValue) => setAttributes({ backgroundColor: colorValue }),
								label: __("Background Color", 'mr-alert-blocks'),
							},
							{
								value: iconColor,
								onChange: (colorValue) => setAttributes({ iconColor: colorValue }),
								label: __("Icon Color", 'mr-alert-blocks'),
							},
							{
								value: borderColor,
								onChange: (colorValue) => setAttributes({ borderColor: colorValue }),
								label: __("Border Color", 'mr-alert-blocks'),
							},
						]}
					></PanelColorSettings>
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
										fill="currentColor"
										d="M448 0H64A64.06 64.06 0 0 0 0 64v288a64.06 64.06 0 0 0 64 64h96v84a12 12 0 0 0 19.1 9.7L304 416h144a64.06 64.06 0 0 0 64-64V64a64.06 64.06 0 0 0-64-64zm-77.9 163.8l-131 130a11 11 0 0 1-15.6-.1l-75.7-76.3a11 11 0 0 1 .1-15.6l26-25.8a11 11 0 0 1 15.6.1l42.1 42.5 97.2-96.4a11 11 0 0 1 15.6.1l25.8 26a11 11 0 0 1-.1 15.5z"
										opacity="0.4"
									></path>
									<path
										class="fa-primary"
										fill="currentColor"
										d="M370.1 163.8l-131 130a11 11 0 0 1-15.6-.1l-75.7-76.3a11 11 0 0 1 .1-15.6l26-25.8a11 11 0 0 1 15.6.1l42.1 42.5 97.2-96.4a11 11 0 0 1 15.6.1l25.8 26a11 11 0 0 1-.1 15.5z"
									></path>
								</g>
							</svg>
						}
						title={__("Icons", "mr-alert-blocks")}
						initialOpen={false}
					>
						<IconPicker {...this.props} attrIcon={"svgIcon"} />
						<RangeControl
							label={__('Icon Size', 'mr-alert-blocks')}
							value={iconSize}
							onChange={value => {
								setAttributes({
									iconSize: value,
								})
							}}
							min={25}
							max={500}
							allowReset={true}
							initialPosition={45}
							step={1}
						/>
					</MRPanelArea>
				)}
			</InspectorControls>
		);
		return (
			<Fragment>
				{inspectorControls}
				<DesktopCSS {...this.props} />
				<div {...htmlAttributes}>
					{iconShow && hasIcon && (
						<Fragment>
							<div className="mr-alert-wrapper">
								<Fragment>
									<div className="mr-alert-icon-wrapper">
									<span
										className="mr-alert-icon"
										dangerouslySetInnerHTML={{ __html: sanitizeSVG(svgIcon) }}
									/>
								</div>
								<div className="mr-alert-content-wrapper">
									<RichText 
										value={content}
										onChange={value => {
											setAttributes(
												{
													content: value,
												}
											)
										}}
										tagName="div"
										placeholder={__('Enter your alert text', 'mr-alert-blocks')}
										allowedFormats={[
											'core/link',
										]}
									/>
								</div>
								</Fragment>
							</div>
						</Fragment>
					)}
				</div>
			</Fragment>
		);
	}
}

export default SABAlerts;
