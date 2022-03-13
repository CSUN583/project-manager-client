import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ThemeToggle from "./theme/ThemeToggle";
import {Grid} from "@mui/material";
import {useContext} from "react";
import {LayoutContext} from "./Layout";


const Navbar = () => {
    const [layout, setLayout] = useContext(LayoutContext)

    const handleChange = (event, newValue) => {
        setLayout(newValue);
    };

    return (
        <Grid
            container
            wrap='nowrap'
            alignItems='center'
            justifyContent='center'
            spacing={2}
        >
            <Grid item>
                <BottomNavigation
                    showLabels
                    value={layout}
                    onChange={handleChange}
                >
                    <BottomNavigationAction
                        label="Teams"
                        value="teams"
                    />
                    <BottomNavigationAction
                        label="Projects"
                        value="projects"
                    />
                    <BottomNavigationAction
                        label="Tickets"
                        value="tickets"
                    />
                </BottomNavigation>
            </Grid>
            <Grid item>
                <ThemeToggle />
            </Grid>
        </Grid>
    );
}

export default Navbar
