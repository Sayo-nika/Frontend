import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Navbar from '../components/navbar';
import CatalogBar from '../components/catalog_bar';
import Footer from '../components/footer';
import API from '../utils/api';
import ModCard from '../components/mod_card';

class Trending extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mods: []
    };
  }

  componentDidMount() {
    API.getTrendingMods('').then(r => {
      this.setState({
        mods: [<ModCard id={0} title="Coming Soon" status={2} category={3} />]
      });
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <CatalogBar />
        <Grid spacing={2} container>
          {this.state.mods.map(e => (
            <Grid lg={3} xs={12} item>
              {e}
            </Grid>
          ))}
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default Trending;
