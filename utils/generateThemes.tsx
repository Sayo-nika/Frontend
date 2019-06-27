import { createMuiTheme } from "@material-ui/core";

export const skMaterialTheme = createMuiTheme({
	palette: {
		primary: {
			main: "#e84444"
		},
		secondary: {
			main: "#e84444"
		}
	},
	typography: {
		fontFamily: [
			'Noto Sans JP',
	    	'-apple-system',
	    	'BlinkMacSystemFont',
	    	'"Segoe UI"',
	    	'Roboto',
	    	'"Helvetica Neue"',
	    	'Arial',
	    	'sans-serif',
	    	'"Apple Color Emoji"',
	    	'"Segoe UI Emoji"',
	    	'"Segoe UI Symbol"',
    ].join(','),
	}
})