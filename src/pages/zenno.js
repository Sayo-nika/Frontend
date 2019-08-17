import React from 'react';
import Navbar from '../components/navbar';
import ModCard from '../components/mod_card';
import CatalogBar from '../components/catalog_bar';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/footer';
import Review from '../components/review';
import { useGlobalPageStyles } from '../utils/global_styles';

const useStyles = makeStyles(theme => ({

}));

/**
 * This page is used to _test_ components for use in Sayonika.
 * Please do **NOT** use this page in production!
 *
 * If you do use this page in production, I will personally
 * smack you silly.
 *
 * K thx - @alicerunsonfedora
 */
const DemoPage = props => {
    const globalClasses = useGlobalPageStyles();
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <div className={globalClasses.pageContent}>
                <CatalogBar />
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={3}>
                        <ModCard
                            id={0}
                            title="Just Zen'no"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris vel tortor eu dolor volutpat volutpat sit amet cursus
                    ex. Maecenas dictum scelerisque facilisis."
                            logo=""
                            header=""
                            status={4}
                            category="Horror"
                            favorites={1500}
                            themeColor={5}
                        />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <ModCard
                            id={0}
                            title="Just Zen'no"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris vel tortor eu dolor volutpat volutpat sit amet cursus
                    ex. Maecenas dictum scelerisque facilisis."
                            logo=""
                            header="https://about.aliceos.app/_next/static/images/f4-0ce4c2717db4e542bb7e633cd3e02fae.jpg"
                            status={0}
                            category="Horror"
                            favorites={1500}
                            themeColor={8}
                        />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <ModCard
                            id={0}
                            title="Just Zen'no"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris vel tortor eu dolor volutpat volutpat sit amet cursus
                    ex. Maecenas dictum scelerisque facilisis."
                            logo=""
                            header="https://about.aliceos.app/_next/static/images/f4-0ce4c2717db4e542bb7e633cd3e02fae.jpg"
                            status={1}
                            category="Horror"
                            favorites={1500}
                            themeColor={0}
                        />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <ModCard
                            id={0}
                            title="Just Zen'no"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris vel tortor eu dolor volutpat volutpat sit amet cursus
                    ex. Maecenas dictum scelerisque facilisis."
                            logo=""
                            header="https://about.aliceos.app/_next/static/images/f4-0ce4c2717db4e542bb7e633cd3e02fae.jpg"
                            status={2}
                            category="Horror"
                            favorites={1500}
                            themeColor={9}
                        />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <ModCard
                            id={0}
                            title="Just Zen'no"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris vel tortor eu dolor volutpat volutpat sit amet cursus
                    ex. Maecenas dictum scelerisque facilisis."
                            logo=""
                            header="https://about.aliceos.app/_next/static/images/f4-0ce4c2717db4e542bb7e633cd3e02fae.jpg"
                            status={3}
                            category="Horror"
                            favorites={1500}
                        />
                    </Grid>
                </Grid>
                <br />
                <Review
                    id="1"
                    title="Hello"
                    content="My disappointment is immesurable and my day is ruined."
                    author_id="33"
                    rating={3}
                />
            </div>
            <Footer />
        </div>
    );
};

export default DemoPage;
