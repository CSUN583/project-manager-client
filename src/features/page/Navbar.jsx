import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ThemeToggle from "../theme/ThemeToggle";
import {Grid, Typography} from "@mui/material";
import {useContext} from "react";
import {LayoutContext} from "./Page";
import Voice from "../components/Voice";


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
            justifyContent='space-between'
        >
            <Grid item>
                <Grid
                    container
                    wrap='nowrap'
                    alignItems='center'
                >
                    <Grid item>
                        <Typography
                            variant='body1'
                            sx={{fontWeight: 'bold'}}
                            color='secondary'
                        >
                            COMP583
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Voice/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid
                    container
                    alignItems='center'
                    spacing={3}
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
                                label="Users"
                                value="users"
                            />
                        </BottomNavigation>
                    </Grid>
                    <Grid item>
                        <ThemeToggle />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Navbar
