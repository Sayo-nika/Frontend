import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Navbar from '../components/navbar';
import CatalogBar from '../components/catalog_bar';
import Footer from '../components/footer';
import API from '../utils/api';
import ModCard from '../components/mod_card';
import { useGlobalPageStyles } from '../utils/global_styles';

const EditorsChoice = () => {
  const [state, setState] = React.useState({
    mods: []
  });

  const globalClasses = useGlobalPageStyles();

  // More info on useEffect: https://reactjs.org/docs/hooks-effect.html
  // Condition chould be temporary at the moment, please rewrite to make
  // state updates more friendly for hooks!
  React.useEffect(() => {
    API.getEditorsChoiceMods('').then(response => {
      setState({
        mods: [<ModCard id={0} title="Coming Soon" status={2} category={3} />]
      });
    });
  }, []);

  return (
    <div>
      <Navbar />
      <CatalogBar />
      <div className={globalClasses.pageContent}>
        <Grid spacing={2} container>
          {state.mods ? (
            state.mods.map(mod => (
              <Grid xs={12} md={6} lg={3} item>
                {mod}
              </Grid>
            ))
          ) : (
            <div>No editor's choice mods</div>
          )}
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

// class EditorsChoice extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             mods: []
//         };
//     }

//     componentDidMount() {
//         API.getEditorsChoiceMods('').then(r => {
//             this.setState({
//                 mods: [
//                     <ModCard
//                         id={0}
//                         title={'Coming Soon'}
//                         status={2}
//                         category={3}
//                     />
//                 ]
//             });
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <Navbar />
//                 <CatalogBar />
//                 <Grid container spacing={2}>
//                     {this.state.mods.map(e => (
//                         <Grid item lg={3} xs={12}>
//                             {e}
//                         </Grid>
//                     ))}
//                 </Grid>
//                 <Footer />
//             </div>
//         );
//     }
// }

export default EditorsChoice;
