const { Component, Fragment } = wp.element;

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

const MAX_POSTS_COLUMNS = 1;

class SABAlerts extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			alertType: 'primary',
		};

		//this.get_latest_data();
	}

	render() {
		const { attributes, setAttributes } = this.props;
		const {
			alertType,
			dismiss,
			content,
		} = attributes;

		// Available alert types for a dropdown setting.
		const allTypes = [
			{ value: 'primary', label: 'Primary' },
			{ value: 'secondary', label: 'Secondary' },
			{ value: 'success', label: 'Success' },
			{ value: 'warning', label: 'Warning' },
			{ value: 'danger', label: 'Danger' },
			{ value: 'info', label: 'Info' },
			{ value: 'light', label: 'Light' },
			{ value: 'dark', label: 'Dark' },

		];

		const inspectorControls = (
			<InspectorControls>
    				<PanelBody>
    					<SelectControl
    						label = {__('Please select the type of alert you want to display.', 'mr-alert-blocks')}
    						options = { allTypes } 
  							value = { alertType }
  							onChange = { alertType => { setAttributes( { alertType } ) } }
    					/>
    				</PanelBody>
					<PanelBody>
						<ToggleControl
							label={__('Dismissible notice?', 'mr-alert-blocks')}
							help={__('Show an x and allow users to close this alert.', 'mr-alert-blocks')}
							checked={ dismiss }
							onChange={ dismiss => { setAttributes( { dismiss } ) } }
						/>
					</PanelBody>
    				
    			</InspectorControls>
		);
		return (
				<Fragment>
					{inspectorControls}
					<div className = { "alert alert-" + alertType } role="alert">
	   			<RichText 
	   					tagName = "p"
	   					className = "content"
	   					value = { content }
	   					onChange = { ( content ) => setAttributes( { content } ) }
	   					placeholder = 'Add text...'
	   					format="string"
	   				/>
	   				{ dismiss === true ? <span className="close" aria-hidden="true" >&times;</span> : null }
	   				</div>
				</Fragment>
		);
	}
}

export default SABAlerts;
