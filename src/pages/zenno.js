import React from 'react';
import Navbar from '../components/navbar';
import ModCard from '../components/mod_card';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    zennoContent: {
        padding: theme.spacing.unit * 2
    }
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
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <div className={classes.zennoContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={3}>
                        <ModCard
                            title="Just Zen'no"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris vel tortor eu dolor volutpat volutpat sit amet cursus
                    ex. Maecenas dictum scelerisque facilisis."
                            logo="https://preview.redd.it/hufj4jjffrb31.jpg?width=640&crop=smart&auto=webp&s=e0d08b74c15f0a7282f077673639f54d10fbb243"
                            header="https://about.aliceos.app/_next/static/images/f4-0ce4c2717db4e542bb7e633cd3e02fae.jpg"
                            status={4}
                            category="Horror"
                            favorites={1500}
                        />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <ModCard
                            title="Just Zen'no"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris vel tortor eu dolor volutpat volutpat sit amet cursus
                    ex. Maecenas dictum scelerisque facilisis."
                            logo="https://preview.redd.it/hufj4jjffrb31.jpg?width=640&crop=smart&auto=webp&s=e0d08b74c15f0a7282f077673639f54d10fbb243"
                            header="https://about.aliceos.app/_next/static/images/f4-0ce4c2717db4e542bb7e633cd3e02fae.jpg"
                            status={0}
                            category="Horror"
                            favorites={1500}
                        />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <ModCard
                            title="Just Zen'no"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris vel tortor eu dolor volutpat volutpat sit amet cursus
                    ex. Maecenas dictum scelerisque facilisis."
                            logo="https://preview.redd.it/hufj4jjffrb31.jpg?width=640&crop=smart&auto=webp&s=e0d08b74c15f0a7282f077673639f54d10fbb243"
                            header="https://about.aliceos.app/_next/static/images/f4-0ce4c2717db4e542bb7e633cd3e02fae.jpg"
                            status={1}
                            category="Horror"
                            favorites={1500}
                        />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <ModCard
                            title="Just Zen'no"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris vel tortor eu dolor volutpat volutpat sit amet cursus
                    ex. Maecenas dictum scelerisque facilisis."
                            logo="https://preview.redd.it/hufj4jjffrb31.jpg?width=640&crop=smart&auto=webp&s=e0d08b74c15f0a7282f077673639f54d10fbb243"
                            header="https://about.aliceos.app/_next/static/images/f4-0ce4c2717db4e542bb7e633cd3e02fae.jpg"
                            status={2}
                            category="Horror"
                            favorites={1500}
                        />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <ModCard
                            title="Just Zen'no"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris vel tortor eu dolor volutpat volutpat sit amet cursus
                    ex. Maecenas dictum scelerisque facilisis."
                            logo="https://preview.redd.it/hufj4jjffrb31.jpg?width=640&crop=smart&auto=webp&s=e0d08b74c15f0a7282f077673639f54d10fbb243"
                            header="https://about.aliceos.app/_next/static/images/f4-0ce4c2717db4e542bb7e633cd3e02fae.jpg"
                            status={3}
                            category="Horror"
                            favorites={1500}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default DemoPage;
