const {
	PanelBody,
} = wp.components;

const {
	Component,
	Fragment,
} = wp.element;

const {
	applyFilters,
} = wp.hooks;

/**
 * Component Class
 */
export default class MRPanelArea extends Component {
	render() {
		const {
			title = false,
			initialOpen = false,
			icon,
			className,
			id,
			state,
			showPanel = true,
			children,
		} = this.props;

		return (
			<Fragment>
				{ title ? (
					<PanelBody
						title={ title }
						initialOpen={ initialOpen }
						icon={ icon }
						className={ className }
					>
						{ children }
					</PanelBody>
				) : (
					<PanelBody>
						{ children }
					</PanelBody>
				) }
			</Fragment>
		);
	}
}
