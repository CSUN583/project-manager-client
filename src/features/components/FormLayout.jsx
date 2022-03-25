import FormGridProxy from "../proxy/FormGridProxy";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


const FormLayout = (
    {
        onSubmit=()=>{},
        title='',
        content=[],
        label='Submit',
        disabled=false
    }) => {
    return (
        <form onSubmit={onSubmit}>
            <FormGridProxy>
                <Grid item>
                    <Typography
                        variant="h5"
                        component="h5"
                    >
                        {title}
                    </Typography>
                </Grid>
                {content?.map( (elem, i) =>
                    <Grid key={i} item>
                        {elem}
                    </Grid>
                )}
                <Grid item>
                    <Button
                        fullWidth
                        variant='contained'
                        type='submit'
                        disabled={disabled}
                    >
                        {label}
                    </Button>
                </Grid>
            </FormGridProxy>
        </form>
    );
};

export default FormLayout;
