/* eslint-disable quotes */
import buildCSS from "../utils/build-css";
import shorthandCSS from "../utils/shorthand-css";
import hexToRGBA from "../utils/hex-to-rgba";
import valueWithUnit from "../utils/value-with-unit";
import getBackgroundImageCSS from "../utils/get-background-image";

const { Component } = wp.element;

export default class DesktopCSS extends Component {
	render() {
		const { attributes, clientId } = this.props;

		const {
			uniqueId,
			backgroundColor,
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
			borderColor,
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
			titleTransform,
			titleColor,
			titleFont,
			titleSize,
			titleTag,
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
			contentPaddingTop,
			contentPaddingBottom,
			contentPaddingLeft,
			contentPaddingRight,
			contentPaddingUnit,
			contentMarginTop,
			contentMarginBottom,
			contentMarginLeft,
			contentMarginRight,
			contentMarginUnit,
			contentColor,
			contentSize,
			contentFont,
			contentLineHeight,
			contentFontWeight,
			contentTransform,
			iconColor,
			iconSize,
			innerContainerMaxWidth,
			backgroundGradient,
			enableBackgroundGradient,
			buttonTextTransform,
			buttonPaddingTop,
			buttonPaddingBottom,
			buttonPaddingLeft,
			buttonPaddingRight,
			buttonMarginTop,
			buttonIconSize,
			buttonMarginBottom,
			buttonMarginLeft,
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
			buttonIconColor,
			buttonIconColorHover,
			buttonFont,
			buttonFontSize,
			buttonLineHeight,
			buttonFontWeight,
		} = attributes;

		let cssObj = [];
		cssObj[".mr-alert-" + uniqueId] = [
			{
				padding: shorthandCSS(
					paddingTop,
					paddingRight,
					paddingBottom,
					paddingLeft,
					paddingUnit
				),
				margin: shorthandCSS(
					marginTop,
					marginRight,
					marginBottom,
					marginLeft,
					marginUnit
				),
				"border-style": "solid",
				"border-width": shorthandCSS(
					borderTop,
					borderRight,
					borderBottom,
					borderLeft,
					borderUnit
				),
				"border-radius": shorthandCSS(
					borderRadiusTop,
					borderRadiusRight,
					borderRadiusBottom,
					borderRadiusLeft,
					borderRadiusUnit
				),
			},
		];
		if ("inherit" !== borderColor) {
			cssObj[".mr-alert-" + uniqueId].push({
				"border-color": hexToRGBA(borderColor),
			});
		}
		if ("inherit" !== backgroundColor) {
			cssObj[".mr-alert-" + uniqueId].push({
				"background-color": hexToRGBA(backgroundColor),
			});
		}
		cssObj[
			`.mr-alert-${uniqueId} .mr-alert-icon-wrapper .mr-alert-icon svg`
		] = [
			{
				color: hexToRGBA(iconColor),
				width: valueWithUnit(iconSize, "px"),
				height: valueWithUnit(iconSize, "px"),
			},
		];
		cssObj[`.mr-alert-${uniqueId} .mr-alert-wrapper`] = [
			{
				"max-width": valueWithUnit(innerContainerMaxWidth, "px"),
				"text-align": "center",
				margin: "0 auto",
			},
		];
		cssObj[`.mr-alert-${uniqueId} .mr-alert-title-wrapper ${titleTag}`] = [
			{
				padding: shorthandCSS(
					titlePaddingTop,
					titlePaddingRight,
					titlePaddingBottom,
					titlePaddingLeft,
					titlePaddingUnit
				),
				margin: shorthandCSS(
					titleMarginTop,
					titleMarginRight,
					titleMarginBottom,
					titleMarginLeft,
					titleMarginUnit
				),
				"text-transform": titleTransform,
				color: hexToRGBA(titleColor),
				"font-size": valueWithUnit(titleSize, "px"),
				"font-family": titleFont,
				"line-height": valueWithUnit(titleLineHeight, "em"),
				"font-weight": titleFontWeight,
			},
		];
		cssObj[`.mr-alert-${uniqueId} .mr-alert-content-wrapper div`] = [
			{
				padding: shorthandCSS(
					contentPaddingTop,
					contentPaddingRight,
					contentPaddingBottom,
					contentPaddingLeft,
					contentPaddingUnit
				),
				margin: shorthandCSS(
					contentMarginTop,
					contentMarginRight,
					contentMarginBottom,
					contentMarginLeft,
					contentMarginUnit
				),
				"text-transform": contentTransform,
				color: hexToRGBA(contentColor),
				"font-size": valueWithUnit(contentSize, "px"),
				"font-family": contentFont,
				"line-height": valueWithUnit(contentLineHeight, "em"),
				"font-weight": contentFontWeight,
			},
		];
		cssObj[`.mr-alert-${uniqueId} .mr-alert-button-wrapper a`] = [
			{
				display: "inline-block",
				padding: shorthandCSS(
					buttonPaddingTop,
					buttonPaddingRight,
					buttonPaddingBottom,
					buttonPaddingLeft,
					"px"
				),
				margin: shorthandCSS(
					buttonMarginTop,
					buttonMarginRight,
					buttonMarginBottom,
					buttonMarginLeft,
					"px"
				),
				"border-style": "solid",
				"border-width": valueWithUnit(buttonBorderWidth, "px"),
				"border-radius": shorthandCSS(
					buttonBorderRadiusTop,
					buttonBorderRadiusRight,
					buttonBorderRadiusBottom,
					buttonBorderRadiusLeft,
					"px"
				),
				"text-transform": buttonTextTransform,
				"font-size": valueWithUnit(buttonFontSize, "px"),
				"font-family": buttonFont,
				"line-height": valueWithUnit(buttonLineHeight, "em"),
				"font-weight": buttonFontWeight,
			},
		];
		cssObj[`.mr-alert-${uniqueId} .mr-alert-button-wrapper a .mr-alert-icon svg`] = [];
		cssObj[`.mr-alert-${uniqueId} .mr-alert-button-wrapper a:hover`] = [];
		cssObj[`.mr-alert-${uniqueId} .mr-alert-button-wrapper a:hover .mr-alert-icon svg`] = [];

		cssObj[`.mr-alert-${uniqueId} .mr-alert-button-wrapper a .mr-alert-icon svg`].push( {
			"width": valueWithUnit(buttonIconSize, "px"),
			"height": valueWithUnit(buttonIconSize, "px"),
		});
		
		if ("inherit" !== buttonBorderColor) {
			cssObj[`.mr-alert-${uniqueId} .mr-alert-button-wrapper a`].push({
				"border-color": buttonBorderColor,
				"transition": "all 0.4s ease"
			});
		}
		if ("inherit" !== buttonBorderColorHover) {
			cssObj[`.mr-alert-${uniqueId} .mr-alert-button-wrapper a:hover`].push({
				"border-color": buttonBorderColorHover,
			});
		}
		if ("inherit" !== buttonTextColor) {
			cssObj[`.mr-alert-${uniqueId} .mr-alert-button-wrapper a`].push({
				color: buttonTextColor,
			});
		}
		if ("inherit" !== buttonTextColorHover) {
			cssObj[`.mr-alert-${uniqueId} .mr-alert-button-wrapper a:hover`].push({
				color: buttonTextColorHover,
			});
		}
		if ("inherit" !== buttonBackgroundColor) {
			cssObj[`.mr-alert-${uniqueId} .mr-alert-button-wrapper a`].push({
				"background-color": buttonBackgroundColor,
			});
		}
		if ("inherit" !== buttonBackgroundColorHover) {
			cssObj[`.mr-alert-${uniqueId} .mr-alert-button-wrapper a:hover`].push({
				"background-color": buttonBackgroundColorHover,
			});
		}
		if ("inherit" !== buttonIconColor) {
			cssObj[`.mr-alert-${uniqueId} .mr-alert-button-wrapper a .mr-alert-icon svg`].push({
				color: buttonIconColor,
			});
		}
		if ("inherit" !== buttonIconColorHover) {
			cssObj[`.mr-alert-${uniqueId} .mr-alert-button-wrapper a:hover .mr-alert-icon svg`].push(
				{
					color: buttonIconColorHover,
				}
			);
		}

		if (enableBackgroundGradient) {
			cssObj[".mr-alert-" + uniqueId].push({
				"background-image": backgroundGradient,
			});
		}

		return <style>{buildCSS(cssObj)}</style>;
	}
}
