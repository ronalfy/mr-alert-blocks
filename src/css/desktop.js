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
			iconColor,
		} = attributes;

		let cssObj = [];
		cssObj[ '.mr-alert-' + uniqueId ] = [ {
			'padding': shorthandCSS( paddingTop, paddingRight, paddingBottom, paddingLeft, paddingUnit ),
		} ];
		cssObj[ `.mr-alert-${uniqueId} .mr-alert-icon-wrapper .mr-alert-icon`] = [
			{
				'color': hexToRGBA(iconColor),
			}
		];

		return (
			<style>{ buildCSS( cssObj ) }</style>
		);
	}
}
