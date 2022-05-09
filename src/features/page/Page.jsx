import {Box, Container, Grid} from "@mui/material";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {createContext, useState} from "react";
import PageNavigation from "./PageNavigation";

export const SpeechContext = createContext([]);
export const LayoutContext = createContext([]);

const Page = () => {
    const [speech, setSpeech] = useState('')
    const [layout, setLayout] = useState('teams')

    return (
        <SpeechContext.Provider value={[speech, setSpeech]}>
            <LayoutContext.Provider value={[layout, setLayout]}>
                <Container
                    maxWidth='sm'
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
                                <PageNavigation />
                            </Grid>
                        </Grid>
                        <Footer />
                    </Box>
                </Container>
            </LayoutContext.Provider>
        </SpeechContext.Provider>
    )
}

export default Page
