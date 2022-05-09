import ListContainerProxy from "../proxy/ListContainerProxy";
import {Divider, Grid, ListItem, ListItemText} from "@mui/material";
import ListTextGridProxy from "../proxy/ListTextGridProxy";
import ListRowGridProxy from "../proxy/ListRowGridProxy";
import Button from "@mui/material/Button";
import ListTextColumn from "../components/ListTextColumn";
import LoadingCircle from "../components/LoadingCircle";

const ListLayout = (
    {
        headerColumns=[],
        modal=<></>,
        data=[],
        loading=false,
        disabled=false
    }) => {
    return (
        <ListContainerProxy>
            <ListItem>
                <ListItemText
                    primary ={
                        <ListTextGridProxy>
                            <Grid item>
                                <ListRowGridProxy>
                                    {headerColumns?.map((col, i) =>
                                        <Grid key={i} item>
                                            <ListTextColumn
                                                width={col.width}
                                                text={col.text}
                                            />
                                        </Grid>
                                    )}
                                </ListRowGridProxy>
                            </Grid>
                            <Grid item>
                                {modal}
                            </Grid>
                        </ListTextGridProxy>
                    }
                />
            </ListItem>
            <Divider />
            {loading ? <LoadingCircle/> :
                data?.map((context, i) =>
                    <ListItem key={i}>
                        <ListItemText
                            primary={
                                <ListTextGridProxy>
                                    <Grid item>
                                        <ListRowGridProxy>
                                            {context?.columns.map((col, i) =>
                                                <Grid key={i} item>
                                                    <ListTextColumn
                                                        width={col.width}
                                                        text={col.text}
                                                        component={col.component}
                                                    />
                                                </Grid>
                                            )}
                                        </ListRowGridProxy>
                                    </Grid>
                                    {!disabled &&
                                        <Grid item>
                                            <Button
                                                onClick={context.onClick}
                                                size='small'
                                            >
                                                View
                                            </Button>
                                        </Grid>
                                    }
                                </ListTextGridProxy>
                            }
                        />
                    </ListItem>
                )
            }
        </ListContainerProxy>
    );
};

export default ListLayout;
