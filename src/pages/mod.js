import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { fromModColor } from '../utils/colors';
import Review from '../components/review';
import Navbar from '../components/navbar';
import {
    CircularProgress,
    Avatar,
    Typography,
    Toolbar,
    Button,
    Fab
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import ReportIcon from '@material-ui/icons/Report';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2)
    },
    loader: {
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
    },
    toolbar: {
        alignItems: 'center'
    },
    icon: {
        backgroundColor: color => fromModColor(color, 'main', theme),
        height: 64,
        width: 64,
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    favoriteFab: {
        marginRight: theme.spacing(1)
    },
    downloadButton: {
        marginRight: theme.spacing(1)
    },
    reportButton: {
        color: theme.status.danger,
        borderColor: theme.status.danger
    }
}));

const ModPage = ({ match }) => {
    const id = match.params.id;
    const [state, setState] = useState({
        viewLoaded: false,
        viewErrored: false,
        mod: {
            title: 'Mod Title',
            generzlizedTitle: 'A Cool New Mod',
            icon: '',
            banner: '',
            tagline: "The best new mod you've seen.",
            description: 'No description provided.',
            website: '',
            isPrivateBeta: false,
            category: 0,
            nsfw: false,
            themeColor: 0,
            releasedAt: '',
            lastUpdated: '',
            status: 0,
            downloads: 0,
            downloadUrl: '',
            verified: false,
            author: "Zen'no Caligra"
        }
    });
    const classes = useStyles(state.mod.themeColor);

    const getModData = id => {
        // TODO: Add fetch logic for the mod
        // Remember that if the view did load, viewLoaded must
        // be true and viewErrored must be false.
    };
    return (
        <div>
            <Navbar />
            <div className={classes.root}>
                <Toolbar className={classes.toolbar}>
                    <Avatar src={state.mod.icon} className={classes.icon} />
                    <Typography variant="h6" className={classes.title}>
                        {state.mod.generzlizedTitle}
                    </Typography>
                    <Typography>{state.mod.author}</Typography>
                    <Toolbar>
                        <Fab size="small" className={classes.favoriteFab}>
                            <FavoriteIcon />
                        </Fab>
                        <Typography>1.5k</Typography>
                    </Toolbar>
                    <Button
                        variant="outlined"
                        className={classes.downloadButton}
                        color="primary"
                    >
                        Download
                    </Button>
                    <Button variant="outlined" className={classes.reportButton}>
                        <ReportIcon />
                    </Button>
                </Toolbar>
                {!state.viewLoaded ? (
                    <div className={classes.loader}>
                        <CircularProgress size={56} />
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default ModPage;
