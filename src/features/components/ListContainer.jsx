import {Box, Container, List} from "@mui/material";

const ListContainer = ({children}) => {
    return (
        <Container
            disableGutters
        >
            <Box maxWidth={200}>
                <List
                    disablePadding
                >
                    {children}
                </List>
            </Box>
        </Container>
    );
};

export default ListContainer;

