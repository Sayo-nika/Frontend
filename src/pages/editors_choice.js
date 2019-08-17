import React, { Component } from 'react';
import Navbar from '../components/navbar';
import CatalogBar from '../components/catalog_bar';
import Grid from '@material-ui/core/Grid';
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
    React.useEffect(() => {
        if (state.mods.length <= 0) {
            API.getEditorsChoiceMods('').then(response => {
                setState({
                    mods: [
                        <ModCard
                            id={0}
                            title={'Coming Soon'}
                            status={2}
                            category={3}
                        />
                    ]
                })
            });
        }
    });

    return (
        <div>
            <Navbar/>
            <CatalogBar/>
            <div className={globalClasses.pageContent}>
                <Grid container spacing={2}>
                    {
                        state.mods?
                            state.mods.map(mod => (
                                <Grid item xs={12} md={6} lg={3}>
                                    {mod}
                                </Grid>
                            ))
                        : <div>No editor's choice mods available.</div>
                    }
                </Grid>
            </div>
            <Footer/>
        </div>
    )
}

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
