/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var _wp$i18n = wp.i18n,
    __ = _wp$i18n.__,
    setLocaleData = _wp$i18n.setLocaleData;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText;

// Available alert types for a dropdown setting.

var all_types = [{ value: 'primary', label: 'Primary' }, { value: 'secondary', label: 'Secondary' }, { value: 'success', label: 'Success' }, { value: 'warning', label: 'Warning' }, { value: 'danger', label: 'Danger' }, { value: 'info', label: 'Info' }, { value: 'light', label: 'Light' }, { value: 'dark', label: 'Dark' }];

registerBlockType('simple-bootstrap-alerts-for-gutenberg/alert-boxes', {
	title: __('Alert Box', 'simple-bootstrap-alerts-for-gutenberg'),
	description: __('A simple block for Bootstrap alert boxes', 'simple-bootstrap-alerts-for-gutenberg'),
	category: 'layout',
	icon: {
		src: 'smiley',
		background: '#cce5ff',
		foreground: '#004085'
	},
	attributes: {
		alert_type: {
			type: 'string',
			default: 'primary'
		},
		content: {
			type: 'string'
		}
	},

	edit: function edit(props) {
		var _props$attributes = props.attributes,
		    alert_type = _props$attributes.alert_type,
		    content = _props$attributes.content,
		    setAttributes = props.setAttributes;


		return [wp.element.createElement(
			InspectorControls,
			null,
			wp.element.createElement(
				PanelBody,
				null,
				wp.element.createElement(SelectControl, {
					label: 'Please select the type of alert you want to display.',
					options: all_types,
					value: alert_type,
					onChange: function onChange(alert_type) {
						setAttributes({ alert_type: alert_type });
					}
				})
			)
		), wp.element.createElement(
			'div',
			{ className: "alert alert-" + alert_type },
			wp.element.createElement(RichText, {
				tagName: 'p',
				className: 'content',
				value: content,
				onChange: function onChange(content) {
					return setAttributes({ content: content });
				},
				placeholder: 'Add text...',
				format: 'string'
			})
		)];
	},

	save: function save(props) {
		var _props$attributes2 = props.attributes,
		    alert_type = _props$attributes2.alert_type,
		    content = _props$attributes2.content;

		return wp.element.createElement(
			'div',
			{ className: "alert alert-" + alert_type },
			wp.element.createElement(RichText.Content, { tagname: 'p', value: content })
		);
	}
});

/***/ })
/******/ ]);