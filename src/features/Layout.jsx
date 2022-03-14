import {Box, Container, Grid} from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {createContext, useState} from "react";
import Pages from "./Pages";

export const LayoutContext = createContext([]);

const Layout = () => {
    const [layout, setLayout] = useState('teams')

    return (
        <LayoutContext.Provider value={[layout, setLayout]}>
            <Container
                maxWidth='xs'
            >
                <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='space-between'
                    height='100vh'
                    minWidth={350}
                    py={2}
                >
                    <Grid
                        container
                        direction='column'
                        spacing = {2}
                    >
                        <Grid item>
                            <Navbar />
                        </Grid>
                        <Grid item>
                            <Pages />
                        </Grid>
                    </Grid>
                    <Footer />
                </Box>
            </Container>
        </LayoutContext.Provider>
    )
}

export default Layout
