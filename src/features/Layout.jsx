import {Box, Container, Grid} from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {createContext, useState} from "react";
import * as React from "react";
import Pages from "./pages/Pages";

export const LayoutContext = createContext('');

const Layout = () => {
    const [layout, setLayout] = useState('home')

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
                    py={2}
                >
                    <Grid
                        container
                        direction='column'
                        spacing = {5}
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
