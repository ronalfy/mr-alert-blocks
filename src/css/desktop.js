/* eslint-disable quotes */
import buildCSS from '../utils/build-css';
import shorthandCSS from '../utils/shorthand-css';
import hexToRGBA from '../utils/hex-to-rgba';
import valueWithUnit from '../utils/value-with-unit';
import getBackgroundImageCSS from '../utils/get-background-image';

const { Component } = wp.element;

export default class DesktopCSS extends Component {
	render() {
		const {
			attributes,
			clientId,
		} = this.props;

		const {
			uniqueId,
			paddingTop,
			paddingBottom,
			paddingLeft,
			paddingRight,
			paddingUnit,
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
			iconColor,
			iconSize,
			innerContainerMaxWidth,
		} = attributes;

		let cssObj = [];
		cssObj[ '.mr-alert-' + uniqueId ] = [ {
			'padding': shorthandCSS( paddingTop, paddingRight, paddingBottom, paddingLeft, paddingUnit ),
			'border-style': 'solid',
			'border-width': shorthandCSS( borderTop, borderRight, borderBottom, borderLeft, borderUnit ),
			'border-radius': shorthandCSS( borderRadiusTop, borderRadiusRight, borderRadiusBottom, borderRadiusLeft, borderRadiusUnit ),
			'border-color': hexToRGBA( borderColor )
		} ];
		cssObj[ `.mr-alert-${uniqueId} .mr-alert-icon-wrapper .mr-alert-icon svg`] = [
			{
				'color': hexToRGBA(iconColor),
				'width': valueWithUnit( iconSize, 'px' ),
				'height': valueWithUnit( iconSize, 'px' ),
			}
		];
		cssObj[ `.mr-alert-${uniqueId} .mr-alert-wrapper`] = [
			{
				'max-width': valueWithUnit(innerContainerMaxWidth, 'px'),
				'text-align': 'center',
				'margin': '0 auto',
			}
		];

		

		return (
			<style>{ buildCSS( cssObj ) }</style>
		);
	}
}
