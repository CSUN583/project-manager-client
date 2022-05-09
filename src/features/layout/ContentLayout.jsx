import {Breadcrumbs, Grid} from "@mui/material";
import Breadcrumb from "../components/Breadcrumb";
import ContentGridProxy from "../proxy/ContentGridProxy";
import TopProxy from "../proxy/TopProxy";
import HeaderGridProxy from "../proxy/HeaderGridProxy";
import TitleProxy from "../proxy/TitleProxy";
import Title from "../components/Title";
import HeaderNavProxy from "../proxy/HeaderNavProxy";
import Subtitle from "../components/Subtitle";

const ContentLayout = (
    {
        breadcrumb = [],
        title = '',
        subtitle = '',
        headerNav = <></>,
        info = <></>,
        list = <></>
    }) => {
    return (
        <ContentGridProxy>
            <Grid item>
                <TopProxy>
                    <Grid item>
                        <Breadcrumbs>
                            {breadcrumb?.map((path, i) =>
                                <Breadcrumb
                                    key={i}
                                    onClick={path?.onClick}
                                    text={path?.text}
                                    disabled={path?.disabled}
                                />
                            )}
                        </Breadcrumbs>
                    </Grid>
                    <Grid item>
                        <HeaderGridProxy>
                            <Grid item>
                                <TitleProxy>
                                    <Title>
                                        {title}
                                    </Title>
                                    <Subtitle>
                                        {subtitle}
                                    </Subtitle>
                                </TitleProxy>
                            </Grid>
                            <Grid item>
                                <HeaderNavProxy>
                                    {headerNav}
                                </HeaderNavProxy>
                            </Grid>
                        </HeaderGridProxy>
                    </Grid>
                </TopProxy>
            </Grid>
            <Grid item>
                {info}
            </Grid>
            <Grid item>
                {list}
            </Grid>
        </ContentGridProxy>
    );
};

export default ContentLayout;
