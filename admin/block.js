( function (blocks, editor, components, i18n, element ) {

	var el = wp.element.createElement
	var registerBlockType = wp.blocks.registerBlockType
	var BlockControls = wp.editor.BlockControls
	var InspectorControls = wp.editor.InspectorControls
	var TextControl = components.TextControl
	const anchor_icon = el(
		'svg', { xmlms: 'http://www.w3.org/2000/svg', 'xmlns:xlink': 'http://www.w3.org/1999/xlink' },
   		el(
   			'path', { d: "M 22.476562 13.65625 C 22.339844 13.414062 22.167969 13.039062 21.785156 12.890625 C 21.609375 12.816406 21.347656 12.832031 21.140625 12.925781 C 20.695312 13.121094 19.265625 14.011719 18.65625 14.632812 C 18.414062 14.878906 18.394531 15.082031 18.464844 15.210938 C 18.550781 15.363281 18.6875 15.417969 18.984375 15.441406 C 19.230469 15.460938 19.5 15.390625 19.683594 15.566406 C 20.050781 15.914062 18.632812 17.492188 18.503906 17.628906 C 17.917969 18.253906 17.269531 18.835938 16.492188 19.25 C 15.871094 19.574219 14.644531 19.839844 14.164062 19.199219 C 13.757812 18.664062 13.765625 17.8125 13.683594 17.191406 C 13.554688 16.203125 13.445312 15.226562 13.34375 14.234375 C 13.300781 13.816406 13.179688 13.25 13.441406 12.871094 C 13.824219 12.316406 16.015625 12.019531 16.25 11.957031 C 16.71875 11.832031 16.921875 11.605469 16.921875 11.140625 C 16.921875 10.730469 16.710938 10.339844 16.242188 10.273438 C 15.742188 10.199219 15.199219 10.21875 14.691406 10.21875 C 14.304688 10.21875 13.453125 10.125 13.199219 9.839844 C 13.113281 9.742188 13.070312 9.601562 13.054688 9.480469 C 12.996094 9.011719 12.84375 8.359375 13.132812 7.929688 C 13.296875 7.6875 13.601562 7.585938 13.839844 7.425781 C 13.972656 7.367188 14.105469 7.300781 14.230469 7.226562 C 15.683594 6.375 16.484375 4.628906 16.144531 3.0625 C 15.753906 1.28125 13.941406 0.167969 12 0.101562 C 10.058594 0.167969 8.246094 1.28125 7.859375 3.0625 C 7.519531 4.628906 8.320312 6.371094 9.769531 7.226562 C 9.894531 7.300781 10.03125 7.363281 10.164062 7.421875 C 10.402344 7.585938 10.707031 7.6875 10.867188 7.925781 C 11.15625 8.359375 11.003906 9.007812 10.945312 9.476562 C 10.929688 9.601562 10.886719 9.742188 10.804688 9.839844 C 10.546875 10.125 9.699219 10.21875 9.3125 10.214844 C 8.804688 10.214844 8.261719 10.199219 7.761719 10.269531 C 7.292969 10.339844 7.082031 10.726562 7.082031 11.136719 C 7.082031 11.605469 7.285156 11.832031 7.75 11.953125 C 7.988281 12.019531 10.175781 12.316406 10.558594 12.871094 C 10.820312 13.246094 10.703125 13.816406 10.660156 14.230469 C 10.558594 15.222656 10.445312 16.203125 10.316406 17.1875 C 10.234375 17.8125 10.242188 18.664062 9.839844 19.195312 C 9.355469 19.835938 8.132812 19.574219 7.511719 19.246094 C 6.730469 18.835938 6.082031 18.253906 5.496094 17.625 C 5.371094 17.488281 3.953125 15.914062 4.320312 15.5625 C 4.503906 15.390625 4.769531 15.457031 5.015625 15.4375 C 5.316406 15.417969 5.453125 15.359375 5.535156 15.210938 C 5.609375 15.082031 5.585938 14.878906 5.34375 14.632812 C 4.734375 14.011719 3.308594 13.121094 2.859375 12.921875 C 2.652344 12.828125 2.390625 12.816406 2.21875 12.886719 C 1.832031 13.039062 1.660156 13.414062 1.527344 13.65625 C 1.253906 14.152344 0.523438 16.238281 0.652344 16.765625 C 0.710938 17.007812 1 17.109375 1.285156 16.988281 C 1.550781 16.871094 1.8125 16.273438 2.234375 16.515625 C 2.359375 16.589844 2.417969 16.832031 2.460938 16.941406 C 2.527344 17.105469 2.605469 17.269531 2.667969 17.425781 C 3.507812 19.496094 4.945312 21.4375 7.039062 22.570312 C 8.515625 23.371094 10.261719 23.847656 12 23.898438 C 13.738281 23.847656 15.484375 23.375 16.960938 22.570312 C 19.050781 21.433594 20.492188 19.496094 21.332031 17.425781 C 21.394531 17.269531 21.472656 17.105469 21.539062 16.941406 C 21.582031 16.832031 21.640625 16.589844 21.765625 16.515625 C 22.1875 16.273438 22.449219 16.871094 22.714844 16.988281 C 23 17.109375 23.289062 17.007812 23.347656 16.765625 C 23.476562 16.238281 22.75 14.152344 22.476562 13.65625 Z M 10.375 3.902344 C 10.375 3.003906 11.105469 2.277344 12 2.277344 C 12.894531 2.277344 13.625 3.003906 13.625 3.902344 C 13.625 4.796875 12.894531 5.527344 12 5.527344 C 11.105469 5.527344 10.375 4.796875 10.375 3.902344 Z M 10.375 3.902344", 'fill': '#005ab3' } 
   		),
	);
	
	registerBlockType( 'anchor-block/standard', {
	title: i18n.__( 'Anchor Block' ),
	description: i18n.__( 'Use this block to add custom anchors and create navigation points to the different sections of your page. What a lovely block for building a plain sailing for your in-page navigation!' ) + ' 🐬',
	icon: anchor_icon,
	keywords: [ i18n.__( 'anchor' ), i18n.__( 'link' ), i18n.__( 'section' ) ],
	category: 'layout',
	attributes: {
		anchor: {
			type: 'string',
			source: 'attribute',
			selector: 'div',
			attribute: 'id'
		},
		anchor_padding: {
			type: 'string',
			source: 'attribute',
			selector: 'div',
			attribute: 'data-anchor-padding'
		},
	},

	edit: function (props) {
		var attributes = props.attributes
		var anchor = props.attributes.anchor
		var anchor_padding = props.attributes.anchor_padding
		var sentences = [
			i18n.__( 'Chock-a-block, sailor!' ),
			i18n.__( 'Cut & Run, sailor!' ),
			i18n.__( 'By and large, deckman!' ),
			i18n.__( 'You know the ropes, deckman!' ),
			i18n.__( 'All sails set & flying flag of the Word!' ),
		];
		var sentence = sentences[Math.floor(Math.random()*sentences.length)];

		return [
			el(
				'div', { className: 'wrapper-anchor-block' },
				el(
					'div', { className: 'anchor-block-title' }, i18n.__( 'Anchor' ),
				),
				el(
					'div', { className: 'anchor-block-link' }, i18n.__( 'Link to this section:' ) + ' ',
					el(
						'code', { className: 'anchor-block-value' }, '#' + ( anchor ? anchor : '' ),	
					),
				),
			),
			el(
				InspectorControls,
				{ key: 'inspector' },
				el(
					components.PanelBody, {
						title: i18n.__( 'Anchor block' ),
						className: 'anchor-block',
						initialOpen: true
					},
					el(
						TextControl, {
							type: 'string',
							label: i18n.__( 'Choose a nice ID for your anchor. Should be a URL friendly slug name.' ),
							value: anchor,
							onChange: function (new_anchor) {
								props.setAttributes({ anchor: new_anchor })
							}
						}
					),
					el( 'p', {}, i18n.__( 'If you’re using a fixed/sticky header, you may want to add a top padding on your anchor so it won’t be hidden under the header.' ) ),
					el(
						TextControl, {
							type: 'number',
							label: i18n.__( 'Optional top margin (in pixels)' ),
							value: anchor_padding,
							onChange: function (new_anchor_padding) {
								props.setAttributes({ anchor_padding: new_anchor_padding })
							}
						}
					),
					el( 'p', { className: 'anchor-block-randomquote' }, sentence ),
				)
			),
		]
	},

	save: function (props) {
		var attributes = props.attributes
		var anchor = props.attributes.anchor
		var anchor_padding = props.attributes.anchor_padding

		return (
			el(
				'div', { 
					className: props.className, 
					'id': anchor ? anchor : '',
					'data-anchor-padding': anchor_padding ? anchor_padding : '',
					'style': '--data-anchor-padding: ' + ( anchor_padding ? anchor_padding : 0 ) + 'px',
				},
			)
		)
	}

})

})(
	window.wp.blocks,
	window.wp.editor,
	window.wp.components,
	window.wp.i18n,
	window.wp.element
)