import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const { name, bio, url, alt, id } = attributes;

	return (
		<div {...useBlockProps.save()}>
			{url && (
				<img
					src={url}
					alt={alt}
					className={id ? `wp-image-${id}` : null}
				/>
			)}
			<RichText.Content value={name} tagName="h4" />
			<RichText.Content value={bio} tagName="p" />
		</div>
	);
}
