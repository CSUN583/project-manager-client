import React from 'react';
import Button from "@mui/material/Button";
import {Typography} from "@mui/material";

const Breadcrumb = ({onClick = ()=>{}, text = '', disabled = false}) => {
    if (disabled){
        return (
            <Typography
                variant='body2'
            >
                {text}
            </Typography>
        );
    }
    return (
        <Button
            disabled={disabled}
            size='small'
            onClick={onClick}
        >
            {text}
        </Button>
    );
};

export default Breadcrumb;
