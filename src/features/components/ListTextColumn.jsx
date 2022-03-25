import {Box, Typography} from "@mui/material";

const ListTextColumn = ({width, text, component}) => {
    return (
        <Box
            sx={{overflow: "hidden", textOverflow: "ellipsis"}}
            width={width}
        >
            <Typography
                noWrap
                variant='caption'
            >
                {text}
            </Typography>
            {component}
        </Box>
    );
};

export default ListTextColumn;
