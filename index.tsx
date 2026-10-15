import "./global.css";
import type ChangelogProps from "./types";
import type Item from "./types/item";

/**
 * Simple changelog component
 *
 * @example
 * <Changelog 
 *	items={[
 *		{
 *			label: "Hello world",
 *			date: "15.10.2026"
 *		},
 *		{
 *			label: "Hello world",
 *			date: "15.10.2026",
 *			icon: <BiCheck />
 *		},
 *		{
 *			label: "Completed!",
 *			date: "15.10.2026",
 *			complete: true
 *		}
 *	]}
 * />
*/
const Changelog: React.FC<ChangelogProps> = ({
	classNames,
	items,
	children
}) => (
	<div className={`flex flex-col items-center gap-10 ${classNames?.root || ""}`}>
		<div className={`flex flex-col ${classNames?.content || ""}`}>
			{items?.map?.((item: Item, i: number) => (
				<div 
					key={`changelog-item-${i}`}
					className={`group flex gap-8 items-center ${classNames?.item || ""}`}
				>
					<div className={`text-nowrap opacity-50 flex justify-end items-center ${classNames?.date || ""}`}>
						{item?.date}
					</div>
					<div className={`transition-colors relative h-14 group-first:h-24 group-last:h-24 w-0.5 bg-black flex justify-center items-center ${item?.complete && "bg-emerald-500 text-emerald-500" || ""} ${(item?.complete ? classNames?.lineComplete : classNames?.line) || ""}`}>
						{item?.icon && item?.icon || (
							<div className={`transition-colors absolute border-2 border-white w-4 h-4 rounded-full bg-black ${item?.complete && "bg-emerald-500" || ""} ${(item?.complete ? classNames?.dotComplete : classNames?.dot) || ""}`} />
						)}
					</div>
					<div className={`transition-colors ${item?.complete && "text-emerald-500" || ""} ${classNames?.label || ""}`}>
						{item?.label}
					</div>
				</div>
			))}
		</div>
		{!!children && (
			<div className={`w-75 max-w-full ${classNames?.extra || ""}`}>
				{children}
			</div>
		)}
	</div>
);

export default Changelog;
