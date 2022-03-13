import {createTheme, responsiveFontSizes} from "@mui/material";

export const lightTheme = responsiveFontSizes(
    createTheme({
        palette: {
            mode: "light",
            common: {
                black: '#000',
                white: '#fff',
            },
            primary: {
                light: '#7986cb',
                main: '#3f51b5',
                dark: '#303f9f',
                contrastText: '#fff',
            },
            secondary: {
                light: '#ff4081',
                main: '#f50057',
                dark: '#c51162',
                contrastText: '#fff',
            },
            error: {
                light: '#e57373',
                main: '#f44336',
                dark: '#d32f2f',
                contrastText: '#fff'
            },
            warning: {
                light: '#ffb74d',
                main: '#ff9800',
                dark: '#f57c00',
                contrastText: 'rgba(0, 0, 0, 0.87)'
            },
            info: {
                light: '#64b5f6',
                main: '#2196f3',
                dark: '#1976d2',
                contrastText: '#fff',
            },
            success: {
                light: '#81c784',
                main: '#4caf50',
                dark: '#388e3c',
                contrastText: 'rgba(0, 0, 0, 0.87)'
            },
        },
        typography: {
            button: {
                textTransform: 'none',
            }
        },
        props: {
            MuiButtonBase: {
                disableRipple: true,
            }
        },
        shape: {
            borderRadius: 4,
        }
    }));

export const darkTheme = responsiveFontSizes(
    createTheme({
        palette: {
            mode: "dark",
            common: {
                black: '#000',
                white: '#fff',
            },
            primary: {
                main: '#ce93d8',
                light: '#f3e5f5',
                dark: '#ab47bc',
                contrastText: 'rgba(0, 0, 0, 0.87)',
            },
            secondary: {
                main: '#90caf9',
                light: '#e3f2fd',
                dark: '#42a5f5',
                contrastText: 'rgba(0, 0, 0, 0.87)',
            },
            error: {
                main: '#f44336',
                light: '#e57373',
                dark: '#d32f2f',
                contrastText: '#fff',
            },
            warning: {
                main: '#ffa726',
                light: '#ffb74d',
                dark: '#f57c00',
                contrastText: 'rgba(0, 0, 0, 0.87)',
            },
            info: {
                main: '#29b6f6',
                light: '#4fc3f7',
                dark: '#0288d1',
                contrastText: 'rgba(0, 0, 0, 0.87)',
            },
            success: {
                main: '#66bb6a',
                light: '#81c784',
                dark: '#388e3c',
                contrastText: 'rgba(0, 0, 0, 0.87)',
            },
            background: {
                paper: '#282C3F',
                default: '#282C3F',
            }
        },
        typography: {
            button: {
                textTransform: 'none',
            }
        },
        props: {
            MuiButtonBase: {
                disableRipple: true,
            }
        },
        shape: {
            borderRadius: 4,
        }
    }));

export default lightTheme
