import {Box, Container, List} from "@mui/material";

const ListContainerProxy = ({children}) => {
    return (
        <Container
            disableGutters
        >
            <Box>
                <List
                    disablePadding
                >
                    {children}
                </List>
            </Box>
        </Container>
    );
};

export default ListContainerProxy;

