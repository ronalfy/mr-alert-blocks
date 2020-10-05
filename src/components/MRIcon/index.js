const { cloneElement } = wp.element;
/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */
function MRIcon( { icon, size = 24, ...props } ) {
	return cloneElement( icon, {
		width: size,
		height: size,
		...props,
	} );
}

export default MRIcon;