import React, { Component } from 'react';
import Navbar from '../components/navbar';
import CatalogBar from '../components/catalog_bar';
import Grid from '@material-ui/core/Grid';
import Footer from '../components/footer';
import API from '../utils/api';
import ModCard from '../components/mod_card';

class EditorsChoice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mods: []
        };
    }

    componentDidMount() {
        API.getMods('').then(r => {
            this.setState({
                mods: [
                    <ModCard
                        id={0}
                        title={'Coming Soon'}
                        status={2}
                        category={3}
                    />
                ]
            });
        });
    }

    render() {
        return (
            <div>
                <Navbar />
                <CatalogBar />
                <Grid container spacing={2}>
                    {this.state.mods.map(e => (
                        <Grid item lg={3} xs={12}>
                            {e}
                        </Grid>
                    ))}
                </Grid>
                <Footer />
            </div>
        );
    }
}

export default EditorsChoice;
