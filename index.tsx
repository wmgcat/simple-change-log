import Item from "./src/item";

/**
 * Simple changelog component
 *
 * @example
 * <Changelog />
*/
const Changelog: React.FC<{
	/** Classnames for component */
	classNames?: {
		/** Item */
		item?: string;
		/** Only date */
		date?: string;
		/** Only label */
		label?: string;
		/** Changelog data */
		content?: string;
		/* Root */
		root?: string;
		/** Changelog dot */
		dot?: string;
		/** Extra */
		extra?: string;
	};
	/** Changelog's items */
	items: Item[];
	/** Extra */
	children?: React.ReactNode;
}> = ({
	classNames,
	items,
	children
}) => (
	<div className={classNames?.root}>
		<div className={classNames?.content}>
			{items?.map?.((item: Item, i: number) => (
				<div 
					key={`changelog-item-${i}`}
					className={classNames?.item}
				>
					<div className={classNames?.date}>
						{item?.date}
					</div>
					<div className={classNames?.dot}>

					</div>
					<div className={classNames?.label}>
						{item?.label}
					</div>
				</div>
			))}
		</div>
		<div className={classNames?.extra}>
			{children}
		</div>
	</div>
);

export default Changelog;
