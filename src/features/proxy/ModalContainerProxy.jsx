import {Box, Paper} from "@mui/material";

const ModalContainerProxy = ({children}) => {
    return (
        <Paper sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <Box
                p={5}
                minWidth={300}
            >
                {children}
            </Box>
        </Paper>
    );
};

export default ModalContainerProxy;
