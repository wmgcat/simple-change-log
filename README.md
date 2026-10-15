# Simple changelog
Simple react changelog component

## Run example
```sh
npm run example
```

## Component 
```tsx
    import Changelog from "wmgcat/simple-change-log";

    <Changelog
        classNames={{
            item: "",
            date: "",
            label: "",
            content: "",
            root: "",
            dot: "",
            dotComplete: "",
            extra: "",
            line: "",
            lineComplete: ""
        }}
        items={[
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
        ]}
    />
```
