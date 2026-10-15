import Item from "./item";

interface Changelog {
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
		/** Changelog completed dot */
		dotComplete?: string;
		/** Extra */
		extra?: string;
		/** Line */
		line?: string;
		/** Complete line */
		lineComplete?: string;
	};
	/** Changelog's items */
	items: Item[];
	/** Extra */
	children?: React.ReactNode;
}

export default Changelog;
