import {Box, Typography} from "@mui/material";

const ListTextColumn = ({width, text}) => {
    return (
        <Box
            width={width}
        >
            <Typography
                variant='caption'
            >
                {text}
            </Typography>
        </Box>
    );
};

export default ListTextColumn;
