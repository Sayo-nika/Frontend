import React from 'react';
import Navbar from '../components/navbar';
import CatalogBar from '../components/catalog_bar';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/footer';
import { Typography } from '@material-ui/core';
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
const IndexPage = props => {
    const globalClasses = useGlobalPageStyles();
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <div className={globalClasses.pageContent}>
                <CatalogBar />
                <br />
                <Typography variant="h2">Howdy</Typography>
                <Typography paragraph>
                    Stay tuned, we're working hard to get everything together!
                </Typography>
            </div>
            <Footer />
        </div>
    );
};

export default IndexPage;
