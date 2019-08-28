import React from 'react';
import Navbar from '../components/navbar';
import ModCard from '../components/mod_card';
import Footer from '../components/footer';
import {
    Avatar,
    CircularProgress,
    makeStyles,
    Toolbar,
    Typography
} from '@material-ui/core';
import { useGlobalPageStyles } from '../utils/global_styles';
import Grid from '@material-ui/core/Grid';
import API from '../utils/api';

const useStyles = makeStyles(theme => ({
    loader: {
        marginRight: 'auto',
        marginLeft: 'auto',
        textAlign: 'center'
    },
    avatar: {
        height: 176,
        width: 176,
        marginRight: 64,
        backgroundColor: theme.palette.primary.dark
    },
    strip: {
        paddingTop: 32,
        paddingBottom: 32,
        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4)
    }
}));

const UserPage = ({ props, match }) => {
    const id = match.params.id;
    const [state, setState] = React.useState({
        viewLoaded: false,
        viewErrored: false,
        user: {
            email: 'hello@sayonika.moe',
            username: 'Sayonika',
            avatar: '',
            bio: "Howdy! I'm Sayonika the... uh... developer-ika?",
            supporter: false,
            developer: false,
            moderator: false,
            editor: false,
            email_verified: false
        },
        developed: [],
        collaborated: [],
        favorites: []
    });

    React.useEffect(() => {
        //TODO: Write API requests here
        API.getMods({}).then(response => {
            setState(prevState => {
                return {
                    ...prevState,
                    developed: [
                        <ModCard
                            id={0}
                            title={"Obama's Sexy Time Club"}
                            status={2}
                            category={3}
                        />
                    ]
                };
            });
        });
        API.getMods({}).then(response => {
            setState(prevState => {
                return {
                    ...prevState,
                    collaborated: [
                        <ModCard
                            id={0}
                            title={'Doki Doki Azzy Club'}
                            status={2}
                            category={3}
                        />
                    ]
                };
            });
        });
        API.getMods({}).then(response => {
            setState(prevState => {
                return {
                    ...prevState,
                    favorites: [
                        <ModCard
                            id={0}
                            title={'e did it 😂🔫'}
                            status={2}
                            category={3}
                        />
                    ]
                };
            });
        });
    }, []);

    const globalClasses = useGlobalPageStyles();
    const classes = useStyles();

    return (
        <div>
            <Navbar />
            <div className={globalClasses.pageContent}>
                <Toolbar>
                    <Avatar className={classes.avatar} />
                    <div>
                        <Typography variant="h4" className={classes.title}>
                            {state.user.username}
                        </Typography>
                        <Typography paragraph>{state.user.bio}</Typography>
                        <Typography variant="caption">
                            Social icons go here
                        </Typography>
                    </div>
                </Toolbar>
                {state.user.developer ? (
                    <div>
                        <div className={classes.strip}>
                            <Typography variant="h5">Mods Developed</Typography>
                            <Grid container spacing={2}>
                                {state.developed.length > 0 ? (
                                    state.developed.map(mod => (
                                        <Grid item xs={12} md={6} lg={3}>
                                            {mod}
                                        </Grid>
                                    ))
                                ) : (
                                    <Typography>
                                        This user has not developed any mods.
                                    </Typography>
                                )}
                            </Grid>
                        </div>
                        <div className={classes.strip}>
                            <Typography variant="h5">
                                Mods Collaborated
                            </Typography>
                            <Grid container spacing={2}>
                                {state.collaborated.length > 0 ? (
                                    state.collaborated.map(mod => (
                                        <Grid item xs={12} md={6} lg={3}>
                                            {mod}
                                        </Grid>
                                    ))
                                ) : (
                                    <Typography>
                                        This user has not collaborated with
                                        anyone on mods.
                                    </Typography>
                                )}
                            </Grid>
                        </div>
                    </div>
                ) : null}
                <div className={classes.strip}>
                    <Typography variant="h5">Mods Favorited</Typography>
                    <Grid container spacing={2}>
                        {state.favorites.length > 0 ? (
                            state.favorites.map(mod => (
                                <Grid item xs={12} md={6} lg={3}>
                                    {mod}
                                </Grid>
                            ))
                        ) : (
                            <Typography>
                                This user has not favorited any mod here.
                            </Typography>
                        )}
                    </Grid>
                </div>
                {!state.viewLoaded ? (
                    <div className={classes.loader}>
                        <CircularProgress size={56} />
                    </div>
                ) : null}
            </div>
            <Footer />
        </div>
    );
};

export default UserPage;
