import { extendTheme } from "@chakra-ui/react";
import { Button } from "./components";

const theme = extendTheme({
	colors: {
		secondary: "#F9F8F8", // white
		primary: "#EB9486", // tangerine
		tertiary: "#7E7F9A", // light purple
		quaternary: "#272838", // dark purple
	},
	components: {
		Button,
	},
	styles: {
		global: () => ({
			body: {
				fontFamily:
					"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
				color: "#7E7F9A",
				backgroundColor: "secondary",
			},
			"&::-webkit-scrollbar": {
				width: "0.6em",
			},
			"&::-webkit-scrollbar-track": {
				borderRadius: "0px",
				background: "transparent",
			},
			"&::-webkit-scrollbar-thumb": {
				background: "primary",
				borderRadius: "50px",
			},
		}),
	},
});

export default theme;
