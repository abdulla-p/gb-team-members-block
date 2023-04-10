import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';
import './team-member';

export default function Edit({ attributes, setAttributes }) {
	const { columns } = attributes;

	const numOfColumns = (numColumns) => {
		setAttributes({ columns: numColumns });
	};
	return (
		<div
			{...useBlockProps({
				className: `has-${columns}-columns`,
			})}
		>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={__('Columns', 'team-members')}
						min={1}
						max={6}
						onChange={numOfColumns}
						value={columns}
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				allowedBlocks={['blocks-course/team-member']}
				orientation="horizontal"
				template={[
					['blocks-course/team-member'],
					['blocks-course/team-member'],
					['blocks-course/team-member'],
				]}
			/>
		</div>
	);
}
