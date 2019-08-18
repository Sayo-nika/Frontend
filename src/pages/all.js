import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ModCard from '../components/mod_card';
import Navbar from '../components/navbar';
import CatalogBar from '../components/catalog_bar';
import Footer from '../components/footer';
import API from '../utils/api';
import { useGlobalPageStyles } from '../utils/global_styles';

const AllModsPage = ({ props }) => {
    const [state, setState] = React.useState({
        mods: []
    });

    React.useEffect(() => {
        API.getMods('').then(response => {
            setState({
                mods: [
                    <ModCard
                        id={0}
                        title={"Obama's Sexy Time Club"}
                        status={2}
                        category={3}
                    />
                ]
            });
        });
    }, []);

    const globalClasses = useGlobalPageStyles();

    return (
        <div>
            <Navbar />
            <CatalogBar />
            <div className={globalClasses.pageContent}>
                <Grid container spacing={2}>
                    {state.mods ? (
                        state.mods.map(mod => (
                            <Grid item xs={12} md={6} lg={3}>
                                {mod}
                            </Grid>
                        ))
                    ) : (
                        <Typography>No mods available.</Typography>
                    )}
                </Grid>
            </div>
            <Footer />
        </div>
    );
};

export default AllModsPage;
