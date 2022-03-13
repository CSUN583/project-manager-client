import {Switch} from "@mui/material";
import {useContext} from "react";
import {ThemeContext} from "../../App";
import lightTheme, {darkTheme} from "./theme";

const ThemeToggle = () => {
    // eslint-disable-next-line no-unused-vars
    const [theme, setTheme] = useContext(ThemeContext)

    return (
        <Switch
            size='small'
            onChange={(event, checked) => {
                checked ? setTheme(darkTheme) : setTheme(lightTheme)
            }}
        />
    )
};

export default ThemeToggle;
