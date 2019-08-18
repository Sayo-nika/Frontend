import React from 'react';
import Navbar from '../components/navbar';
import CatalogBar from '../components/catalog_bar';
import ModCard from '../components/mod_card';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/footer';
import { Typography } from '@material-ui/core';
import { useGlobalPageStyles } from '../utils/global_styles';
import API from '../utils/api';

const useStyles = makeStyles(theme => ({
    strip: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4)
    }
}));

const IndexPage = props => {

    const [state, setState] = React.useState({
        articles: [],
        new: [],
        favorites: [],
        wip: []
    });

    React.useEffect(() => {
        API.getMods('').then(response => {
            setState(prevState => {
                return {...prevState,
                new: [
                    <ModCard
                        id={0}
                        title={"Obama's Sexy Time Club"}
                        status={2}
                        category={3}
                    />
                ]}
            })
        });
        API.getMods('').then(response => {
            setState(prevState => {
                return {...prevState,
                favorites: [
                    <ModCard
                        id={0}
                        title={'Doki Doki Azzy Club'}
                        status={2}
                        category={3}
                    />
                ]}
            })
        });
        API.getMods('').then(response => {
            setState(prevState => {
                return {...prevState,
                wip: [
                    <ModCard
                        id={0}
                        title={'e did it 😂🔫'}
                        status={2}
                        category={3}
                    />
                ]}
            })
        });
    }, []);

    const globalClasses = useGlobalPageStyles();
    const classes = useStyles();

    return (
        <div>
            <Navbar />
            <CatalogBar />
            <div className={globalClasses.pageContent}>
                <Typography>Carousel would go here... if we had any!</Typography>
                <div className={classes.strip}>
                    <Typography variant="h5" component="h2">Fresh from the Oven</Typography>
                    <Grid container spacing={2}>
                        {
                            state.new?
                                state.new.map(mod => (
                                    <Grid item xs={12} md={6} lg={3}>
                                        {mod}
                                    </Grid>
                                )):
                                <Typography>No new mods yet</Typography>
                        }
                    </Grid>
                </div>
                <div className={classes.strip}>
                    <Typography variant="h5" component="h2">Most Loved</Typography>
                    <Grid container spacing={2}>
                        {
                            state.favorites?
                                state.favorites.map(mod => (
                                    <Grid item xs={12} md={6} lg={3}>
                                        {mod}
                                    </Grid>
                                )):
                                <Typography>No new mods yet</Typography>
                        }
                    </Grid>
                </div>
                <div className={classes.strip}>
                    <Typography variant="h5" component="h2">Coming Soon</Typography>
                    <Grid container spacing={2}>
                        {
                            state.wip?
                                state.wip.map(mod => (
                                    <Grid item xs={12} md={6} lg={3}>
                                        {mod}
                                    </Grid>
                                )):
                                <Typography>No new mods yet</Typography>
                        }
                    </Grid>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default IndexPage;
