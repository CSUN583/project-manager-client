import ListContainerProxy from "../proxy/ListContainerProxy";
import {Divider, Grid, ListItem, ListItemText} from "@mui/material";
import ListGridProxy from "../proxy/ListTextGridProxy";
import ListContentGridProxy from "../proxy/ListRowGridProxy";
import Button from "@mui/material/Button";
import ListTextColumn from "../components/ListTextColumn";

const ListLayout = (
    {
        headerColumns=[],
        modal=<></>,
        data=[]
    }) => {
    return (
        <ListContainerProxy>
            <ListItem>
                <ListItemText
                    primary ={
                        <ListGridProxy>
                            <Grid item>
                                <ListContentGridProxy>
                                    {headerColumns?.map((col, i) =>
                                        <Grid key={i} item>
                                            <ListTextColumn
                                                width={col.width}
                                                text={col.text}
                                            />
                                        </Grid>
                                    )}
                                </ListContentGridProxy>
                            </Grid>
                            <Grid item>
                                {modal}
                            </Grid>
                        </ListGridProxy>
                    }
                />
            </ListItem>
            <Divider />
            {data?.map( (context, i) =>
                <ListItem key={i}>
                    <ListItemText
                        primary = {
                            <ListGridProxy>
                                <Grid item>
                                    <ListContentGridProxy>
                                        {context?.columns.map((col, i) =>
                                            <Grid key={i} item>
                                                <ListTextColumn
                                                    width={col.width}
                                                    text={col.text}
                                                />
                                            </Grid>
                                        )}
                                    </ListContentGridProxy>
                                </Grid>
                                <Grid item>
                                    <Button
                                        onClick={context.onClick}
                                        size='small'
                                    >
                                        View
                                    </Button>
                                </Grid>
                            </ListGridProxy>
                        }
                    />
                </ListItem>
            )}
        </ListContainerProxy>
    );
};

export default ListLayout;
