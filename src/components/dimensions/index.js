/**
 * External dependencies
 * 
 * Forked from GenerateBlocks.
 */
import classnames from 'classnames';
import './editor.scss';

/**
 * WordPress dependencies
 */
const {
	__,
	_x,
	sprintf,
} = wp.i18n;

const {
	Component,
	Fragment,
} = wp.element;

const {
	Button,
	Tooltip,
	ButtonGroup,
} = wp.components;

const syncIcon = 
<svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="sync" class="svg-inline--fa fa-sync fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g class="fa-group"><path class="fa-secondary" fill="currentColor" d="M0 500V299.67a12 12 0 0 1 12-12h200.33a12 12 0 0 1 12 12v47.41a12 12 0 0 1-12.57 12l-101.87-4.88a176.07 176.07 0 0 0 317.25-56.94 12 12 0 0 1 11.67-9.26h49.09a12 12 0 0 1 11.8 14.18C478.07 417.08 377.19 504 256 504a247.43 247.43 0 0 1-188.76-87.17l4.13 82.57a12 12 0 0 1-12 12.6H12a12 12 0 0 1-12-12z" opacity="0.4"></path><path class="fa-primary" fill="currentColor" d="M12.3 209.82C33.93 94.92 134.81 8 256 8a247.4 247.4 0 0 1 188.9 87.34l-4-82.77A12 12 0 0 1 452.92 0h47.41a12 12 0 0 1 12 12v200.33a12 12 0 0 1-12 12H300a12 12 0 0 1-12-12v-47.41a12 12 0 0 1 12.57-12l101.53 4.88a176.07 176.07 0 0 0-317.24 56.94A12 12 0 0 1 73.19 224H24.1a12 12 0 0 1-11.8-14.18z"></path></g></svg>;

class DimensionsControl extends Component {
	constructor() {
		super( ...arguments );
	}

	onReset = ( type ) => {
		this.props.setAttributes( { [ this.props[ type ] ]: '' } );
	}

	onChangeTop = ( value ) => {
		this.props.setAttributes( { [ this.props[ 'attrTop' ] ]: value } ); // eslint-disable-line dot-notation
	}

	onChangeRight = ( value ) => {
		this.props.setAttributes( { [ this.props[ 'attrRight' ] ]: value } ); // eslint-disable-line dot-notation
	}

	onChangeBottom = ( value ) => {
		this.props.setAttributes( { [ this.props[ 'attrBottom' ] ]: value } ); // eslint-disable-line dot-notation
	}

	onChangeLeft = ( value ) => {
		this.props.setAttributes( { [ this.props[ 'attrLeft' ] ]: value } ); // eslint-disable-line dot-notation
	}

	onChangeAll = ( value ) => {
		this.props.setAttributes( { [ this.props[ 'attrTop' ] ]: value, [ this.props[ 'attrRight' ] ]: value, [ this.props[ 'attrBottom' ] ]: value, [ this.props[ 'attrLeft' ] ]: value } ); // eslint-disable-line dot-notation
	}

	syncUnits() {
		const numbers = [ this.props.attributes[ this.props.attrTop ], this.props.attributes[ this.props.attrRight ], this.props.attributes[ this.props.attrBottom ], this.props.attributes[ this.props.attrLeft ] ];

		const syncValue = Math.max.apply( null, numbers );

		this.props.setAttributes( {
			[ this.props[ 'attrSyncUnits' ] ]: ! this.props.attributes[ this.props.attrSyncUnits ], // eslint-disable-line dot-notation
			[ this.props[ 'attrTop' ] ]: syncValue.toString(), [ this.props[ 'attrRight' ] ]: syncValue.toString(), [ this.props[ 'attrBottom' ] ]: syncValue.toString(), [ this.props[ 'attrLeft' ] ]: syncValue.toString(), // eslint-disable-line dot-notation
		} );
	}

	onChangeUnits( value ) {
		this.props.setAttributes( { [ this.props[ 'attrUnit' ] ]: value } ); // eslint-disable-line dot-notation
	}

	render() {
		const {
			attributes,
			label = __( 'Margin', 'mr-alert-blocks' ),
			type = 'margin',
			attrTop,
			attrRight,
			attrBottom,
			attrLeft,
			attrSyncUnits,
			attrUnit,
			labelTop = __( 'Top', 'mr-alert-blocks' ),
			labelRight = __( 'Right', 'mr-alert-blocks' ),
			labelBottom = __( 'Bottom', 'mr-alert-blocks' ),
			labelLeft = __( 'Left', 'mr-alert-blocks' ),
			displayUnit,
			device,
			block,
			defaults,
		} = this.props;

		const classes = classnames(
			'components-base-control',
			'components-gblocks-dimensions-control',
		);

		const onChangeTopValue = ( event ) => {
			let newValue = event.target.value;

			if ( 'padding' === type ) {
				// No negative values allowed here.
				newValue = newValue.toString().replace( /-/g, '' );
			}

			if ( '' === newValue ) {
				this.onReset( 'attrTop' );
				return;
			}

			if ( this.props.attributes[ this.props.attrSyncUnits ] ) {
				this.onChangeAll( newValue );
			} else {
				this.onChangeTop( newValue );
			}
		};

		const onChangeRightValue = ( event ) => {
			let newValue = event.target.value;

			if ( 'padding' === type ) {
				// No negative values allowed here.
				newValue = newValue.toString().replace( /-/g, '' );
			}

			if ( '' === newValue ) {
				this.onReset( 'attrRight' );
				return;
			}

			if ( this.props.attributes[ this.props.attrSyncUnits ] ) {
				this.onChangeAll( newValue );
			} else {
				this.onChangeRight( newValue );
			}
		};

		const onChangeBottomValue = ( event ) => {
			let newValue = event.target.value;

			if ( 'padding' === type ) {
				// No negative values allowed here.
				newValue = newValue.toString().replace( /-/g, '' );
			}

			if ( '' === newValue ) {
				this.onReset( 'attrBottom' );
				return;
			}

			if ( this.props.attributes[ this.props.attrSyncUnits ] ) {
				this.onChangeAll( newValue );
			} else {
				this.onChangeBottom( newValue );
			}
		};

		const onChangeLeftValue = ( event ) => {
			let newValue = event.target.value;

			if ( 'padding' === type ) {
				// No negative values allowed here.
				newValue = newValue.toString().replace( /-/g, '' );
			}

			if ( '' === newValue ) {
				this.onReset( 'attrLeft' );
				return;
			}

			if ( this.props.attributes[ this.props.attrSyncUnits ] ) {
				this.onChangeAll( newValue );
			} else {
				this.onChangeLeft( newValue );
			}
		};

		const unitSizes = [
			{
				name: _x( 'Pixel', 'A size unit for CSS markup', 'mr-alert-blocks' ),
				unitValue: 'px',
			},
			{
				name: _x( 'Em', 'A size unit for CSS markup', 'mr-alert-blocks' ),
				unitValue: 'em',
			},
			{
				name: _x( 'Percentage', 'A size unit for CSS markup', 'mr-alert-blocks' ),
				unitValue: '%',
			},
		];

		let topPlaceholder = '',
			rightPlaceholder = '',
			bottomPlaceholder = '',
			leftPlaceholder = '';

		if ( 'headline' === block && attrBottom.includes( 'marginBottom' ) ) {
			if ( typeof generateBlocksStyling.headline !== 'undefined' ) {
				if ( typeof generateBlocksStyling.headline[ attributes.element ].marginBottom !== 'undefined' ) {
					if ( generateBlocksStyling.headline[ attributes.element ].marginUnit === attributes.marginUnit ) {
						bottomPlaceholder = generateBlocksStyling.headline[ attributes.element ].marginBottom;
					}
				}
			}
		}

		if ( 'tablet' === device ) {
			const topAttrName = attrTop.replace( 'Tablet', '' ),
				rightAttrName = attrRight.replace( 'Tablet', '' ),
				bottomAttrName = attrBottom.replace( 'Tablet', '' ),
				leftAttrName = attrLeft.replace( 'Tablet', '' );

			topPlaceholder = attributes[ topAttrName ] ? attributes[ topAttrName ] : topPlaceholder;
			rightPlaceholder = attributes[ rightAttrName ] ? attributes[ rightAttrName ] : rightPlaceholder;
			bottomPlaceholder = attributes[ bottomAttrName ] ? attributes[ bottomAttrName ] : bottomPlaceholder;
			leftPlaceholder = attributes[ leftAttrName ] ? attributes[ leftAttrName ] : leftPlaceholder;
		}

		if ( 'mobile' === device ) {
			const topAttrName = attrTop.replace( 'Mobile', '' ),
				rightAttrName = attrRight.replace( 'Mobile', '' ),
				bottomAttrName = attrBottom.replace( 'Mobile', '' ),
				leftAttrName = attrLeft.replace( 'Mobile', '' );

			if ( attributes[ topAttrName + 'Tablet' ] ) {
				topPlaceholder = attributes[ topAttrName + 'Tablet' ];
			} else if ( attributes[ topAttrName ] ) {
				topPlaceholder = attributes[ topAttrName ];
			}

			if ( attributes[ rightAttrName + 'Tablet' ] ) {
				rightPlaceholder = attributes[ rightAttrName + 'Tablet' ];
			} else if ( attributes[ rightAttrName ] ) {
				rightPlaceholder = attributes[ rightAttrName ];
			}

			if ( attributes[ bottomAttrName + 'Tablet' ] ) {
				bottomPlaceholder = attributes[ bottomAttrName + 'Tablet' ];
			} else if ( attributes[ bottomAttrName ] ) {
				bottomPlaceholder = attributes[ bottomAttrName ];
			}

			if ( attributes[ leftAttrName + 'Tablet' ] ) {
				leftPlaceholder = attributes[ leftAttrName + 'Tablet' ];
			} else if ( attributes[ leftAttrName ] ) {
				leftPlaceholder = attributes[ leftAttrName ];
			}
		}

		return (
			<Fragment>
				<div className={ classes }>
					<div className="components-gblocks-dimensions-control__header">
						<div className="components-gblocks-dimensions-control__label">
							{ label }
						</div>

						{ ( typeof attributes[ attrUnit ] !== 'undefined' ) ?
							<div className="components-gblocks-control__units">
								<ButtonGroup className="components-gblocks-dimensions-control__units" aria-label={ __( 'Select Units', 'mr-alert-blocks' ) }>
									{ unitSizes.map( ( unit ) =>
										/* translators: %s: values associated with CSS syntax, 'Pixel', 'Em', 'Percentage' */
										<Tooltip text={ sprintf( __( '%s Units', 'mr-alert-blocks' ), unit.name ) } key={ unit.unitValue }>
											<Button
												key={ unit.unitValue }
												className={ 'components-gblocks-dimensions-control__units--' + unit.name }
												isSmall
												isPrimary={ attributes[ attrUnit ] === unit.unitValue }
												aria-pressed={ attributes[ attrUnit ] === unit.unitValue }
												/* translators: %s: values associated with CSS syntax, 'Pixel', 'Em', 'Percentage' */
												aria-label={ sprintf( __( '%s Units', 'mr-alert-blocks' ), unit.name ) }
												onClick={ () => this.onChangeUnits( unit.unitValue ) }
											>
												{ unit.unitValue }
											</Button>
										</Tooltip>
									) }
								</ButtonGroup>
							</div> : null
						}

						{ ( typeof displayUnit !== 'undefined' ) &&
							<div className="components-gblocks-control__units">
								<Tooltip text={ __( 'Pixel Units', 'mr-alert-blocks' ) } key={ 'px-unit' }>
									<Button
										key={ 'px-unit' }
										isSmall
										isPrimary={ true }
										aria-label={ __( 'Pixel Units', 'mr-alert-blocks' ) }
									>
										{ displayUnit }
									</Button>
								</Tooltip>
							</div>
						}
					</div>

					<div className="components-gblocks-dimensions-control__inputs">
						<input
							className="components-gblocks-dimensions-control__number"
							placeholder={ topPlaceholder }
							type="number"
							onChange={ onChangeTopValue }
							onBlur={ () => {
								if ( '' === attributes[ attrTop ] && '' !== defaults[ attrTop ] ) {
									// If we have no value and a default exists, set to 0 to prevent default from coming back.
									if ( this.props.attributes[ this.props.attrSyncUnits ] ) {
										this.onChangeAll( '0' );
									} else {
										this.onChangeTop( '0' );
									}
								}
							} }
							onClick={ ( e ) => {
								// Make sure onBlur fires in Firefox.
								e.currentTarget.focus();
							} }
							aria-label={ sprintf( __( '%s Top', 'mr-alert-blocks' ), label ) }
							value={ attributes[ attrTop ] ? attributes[ attrTop ] : '' }
							min={ type === 'padding' ? 0 : undefined }
							data-attribute={ type }
						/>
						<input
							className="components-gblocks-dimensions-control__number"
							placeholder={ rightPlaceholder }
							type="number"
							onChange={ onChangeRightValue }
							onBlur={ () => {
								if ( '' === attributes[ attrRight ] && '' !== defaults[ attrRight ] ) {
									// If we have no value and a default exists, set to 0 to prevent default from coming back.
									if ( this.props.attributes[ this.props.attrSyncUnits ] ) {
										this.onChangeAll( '0' );
									} else {
										this.onChangeRight( '0' );
									}
								}
							} }
							onClick={ ( e ) => {
								// Make sure onBlur fires in Firefox.
								e.currentTarget.focus();
							} }
							aria-label={ sprintf( __( '%s Right', 'mr-alert-blocks' ), label ) }
							value={ attributes[ attrRight ] ? attributes[ attrRight ] : '' }
							min={ type === 'padding' ? 0 : undefined }
							data-attribute={ type }
						/>
						<input
							className="components-gblocks-dimensions-control__number"
							placeholder={ bottomPlaceholder }
							type="number"
							onChange={ onChangeBottomValue }
							onBlur={ () => {
								if ( '' === attributes[ attrBottom ] && '' !== defaults[ attrBottom ] ) {
									// If we have no value and a default exists, set to 0 to prevent default from coming back.
									if ( this.props.attributes[ this.props.attrSyncUnits ] ) {
										this.onChangeAll( '0' );
									} else {
										this.onChangeBottom( '0' );
									}
								}
							} }
							onClick={ ( e ) => {
								// Make sure onBlur fires in Firefox.
								e.currentTarget.focus();
							} }
							aria-label={ sprintf( __( '%s Bottom', 'mr-alert-blocks' ), label ) }
							value={ attributes[ attrBottom ] ? attributes[ attrBottom ] : '' }
							min={ type === 'padding' ? 0 : undefined }
							data-attribute={ type }
						/>
						<input
							className="components-gblocks-dimensions-control__number"
							placeholder={ leftPlaceholder }
							type="number"
							onChange={ onChangeLeftValue }
							onBlur={ () => {
								if ( '' === attributes[ attrLeft ] && '' !== defaults[ attrLeft ] ) {
									// If we have no value and a default exists, set to 0 to prevent default from coming back.
									if ( this.props.attributes[ this.props.attrSyncUnits ] ) {
										this.onChangeAll( '0' );
									} else {
										this.onChangeLeft( '0' );
									}
								}
							} }
							onClick={ ( e ) => {
								// Make sure onBlur fires in Firefox.
								e.currentTarget.focus();
							} }
							aria-label={ sprintf( __( '%s Left', 'mr-alert-blocks' ), label ) }
							value={ attributes[ attrLeft ] ? attributes[ attrLeft ] : '' }
							min={ type === 'padding' ? 0 : undefined }
							data-attribute={ type }
						/>
						<Tooltip text={ !! attributes[ attrSyncUnits ] ? __( 'Unsync', 'mr-alert-blocks' ) : __( 'Sync', 'mr-alert-blocks' ) } >
							<Button
								className="components-gblocks-dimensions-control_sync"
								aria-label={ __( 'Sync Units', 'mr-alert-blocks' ) }
								isPrimary={ attributes[ attrSyncUnits ] ? attributes[ attrSyncUnits ] : false }
								aria-pressed={ attributes[ attrSyncUnits ] ? attributes[ attrSyncUnits ] : false }
								onClick={ ( value ) => this.syncUnits( value, '' ) }
								isSmall
							>
								{syncIcon}
							</Button>
						</Tooltip>
					</div>

					<div className="components-gblocks-dimensions-control__input-labels">
						<span className="components-gblocks-dimensions-control__number-label">{ labelTop }</span>
						<span className="components-gblocks-dimensions-control__number-label">{ labelRight }</span>
						<span className="components-gblocks-dimensions-control__number-label">{ labelBottom }</span>
						<span className="components-gblocks-dimensions-control__number-label">{ labelLeft }</span>
						<span className="components-gblocks-dimensions-control__number-label"></span>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default DimensionsControl;
