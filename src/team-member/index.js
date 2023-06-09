import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType('blocks-course/team-member', {
	title: __('Team Member', 'team-members'),
	description: __('A team member item', 'team-members'),
	icon: 'admin-users',
	parent: ['blocks-course/team-members'],
	supports: {
		html: false,
		reusable: false,
	},
	attributes: {
		name: {
			type: 'string',
			source: 'html',
			selector: 'h4',
		},
		bio: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
		id: {
			type: 'number',
		},
		alt: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'alt',
			default: '',
		},
		url: {
			type: 'string',
			selector: 'img',
			attribute: 'src',
			source: 'attribute',
		},
		socialLinks: {
			type: 'array',
			default: [
				{ link: 'https:/facebook.com', icon: 'facebook' },
				{ link: 'https:/instagram.com', icon: 'instagram' },
			],
		},
	},
	edit: Edit,
	save: Save,
});
