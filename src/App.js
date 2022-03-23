import Layout from "./features/layout/Layout";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import lightTheme from "./features/theme/theme";
import {createContext, useState} from "react";
import { ApolloProvider } from '@apollo/react-hooks';
import {Apollo} from "./apollo";

export const ThemeContext = createContext([]);

function App() {
    const [theme, setTheme] = useState(lightTheme)

    return (
        <ApolloProvider client={Apollo}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ThemeContext.Provider value={[theme, setTheme]}>
                    <Layout />
                </ThemeContext.Provider>
            </ThemeProvider>
        </ApolloProvider>
    );
}

export default App;
