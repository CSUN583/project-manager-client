import {Grid} from "@mui/material";
import Breadcrumb from "./Breadcrumb";
import ContentGridProxy from "./ContentGridProxy";
import TopProxy from "./TopProxy";
import BreadcrumbGridProxy from "./BreadcrumbGridProxy";
import HeaderGridProxy from "./HeaderGridProxy";
import TitleProxy from "./TitleProxy";
import Title from "./Title";
import HeaderNavProxy from "./HeaderNavProxy";

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
                            {breadcrumb?.map(path =>
                                <Grid item>
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
