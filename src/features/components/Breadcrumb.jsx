import React from 'react';
import Button from "@mui/material/Button";
import {Typography} from "@mui/material";

const Breadcrumb = ({onClick = ()=>{}, text = '', disabled = false}) => {
    if (disabled){
        return (
            <Typography
                variant='body2'
                fontWeight='bold'
            >
                {text}
            </Typography>
        );
    }
    return (
        <Button
            size='small'
            disableRipple
            disableFocusRipple
            variant='text'
            sx={{ minHeight: 0, minWidth: 0, padding: 0, backgroundColor: 'transparent' }}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </Button>
    );
};

export default Breadcrumb;
