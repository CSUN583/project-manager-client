import {Grid} from "@mui/material";
import Breadcrumb from "../components/Breadcrumb";
import ContentGridProxy from "../proxy/ContentGridProxy";
import TopProxy from "../proxy/TopProxy";
import BreadcrumbGridProxy from "../proxy/BreadcrumbGridProxy";
import HeaderGridProxy from "../proxy/HeaderGridProxy";
import TitleProxy from "../proxy/TitleProxy";
import Title from "../components/Title";
import HeaderNavProxy from "../proxy/HeaderNavProxy";

const ContentLayout = (
    {
        breadcrumb = [],
        title = '',
        headerNav = <></>,
        info = <></>,
        list = <></>
    }) => {
    return (
        <ContentGridProxy>
            <Grid item>
                <TopProxy>
                    <Grid item>
                        <BreadcrumbGridProxy>
                            {breadcrumb?.map((path, i) =>
                                <Grid key={i} item>
                                    <Breadcrumb
                                        onClick={path?.onClick}
                                        text={path?.text}
                                        disabled={path?.disabled}
                                    />
                                </Grid>
                            )}
                        </BreadcrumbGridProxy>
                    </Grid>
                    <Grid item>
                        <HeaderGridProxy>
                            <Grid item>
                                <TitleProxy>
                                    <Title>
                                        {title}
                                    </Title>
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
