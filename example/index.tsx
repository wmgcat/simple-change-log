import "../global.css";
import { createRoot } from "react-dom/client";

import Changelog from "..";
import { useEffect, useState } from "react";
import Item from "../types/item";
import { BiCheck } from "react-icons/bi";

const app: HTMLElement | null = document.getElementById("app");
if (!app)
	throw new Error("#app isn't found");

const items: Item[] = [
	{
		label: "Hello, world!",
		date: "Oktober 15, 2026"
	},
	{
		label: "npm init && git init -y",
		date: "Oktober 15, 2026"
	},
	{
		label: "Create component",
		date: "Oktober 15, 2026"
	},
	{
		label: "First commit",
		date: "Oktober 15, 2026"
	},
	{
		label: "Create github repository",
		date: "Oktober 15, 2026"
	},
	{
		label: "Style component",
		date: "Oktober 15, 2026"
	},
	{
		label: "Complete!",
		date: "Oktober 15, 2026",
		icon: <BiCheck className="bg-white absolute text-2xl"/>
	}
]

const Example: React.FC = () => {
	const [ step, setStep ] = useState<number>(-1);

	useEffect(() => {
		const interval = setInterval(() => {
			setStep((prev) => {
				let next = prev + 1;
				if (next >= items?.length)
					next = -1;

				return next;
			});
		}, 1000);

		return () => {
			clearInterval(interval);
		}
	}, []);


	return (
		<div className="w-screen h-screen flex flex-col gap-8 justify-center items-center">
			<h1 className="text-2xl font-bold">Simple changelog</h1>
			<Changelog 
				items={items?.map?.((item: Item, i: number) => ({
					...item,
					complete: i <= step
				}))}
			>
				<p className="text-black/50 text-center">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry
				</p>
			</Changelog>
		</div>
	);
}

createRoot(app).render(<Example />);
