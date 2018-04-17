import {h, app} from 'hyperapp';
import {withLogger} from '@hyperapp/logger';
import {
    FAB,
    PermanentDrawer,
    Navbar, NavbarAction,
    List, ListItem, ListItemIcon, ListDivider, ListGroup,
    Card, CardMedia, CardPrimaryAction, CardActionBlock, CardAction, CardIconAction,
    Grid, GridCell
} from './components';

import './sass/main.sass';

const state = {};
const actions = {};
const view = () => (
    <div class="mdc-typography __wrapper">
        <FAB icon="phone" class="mdc-fab--bottom-right" label="banana"/>

        <Navbar title="Sayonika" shadow>
            <NavbarAction href="#" label="Do things" icon="add"/>
        </Navbar>

        <div class="main">
            <PermanentDrawer>
                <List grouped>
                    <ListGroup>
                        <ListItem href="#!"><ListItemIcon icon="check"/>Released</ListItem>
                        <ListItem href="#!"><ListItemIcon icon="feedback"/>Playtesting</ListItem>
                        <ListItem href="#!"><ListItemIcon icon="build"/>In Development</ListItem>
                        <ListItem href="#!"><ListItemIcon icon="lightbulb_outline"/>Planning</ListItem>
                    </ListGroup>

                    <ListDivider hr/>

                    <ListGroup>
                        <ListItem>Home</ListItem>
                        <ListItem>About</ListItem>
                        <ListItem>Login</ListItem>
                        <ListItem>Source</ListItem>
                    </ListGroup>
                </List>
            </PermanentDrawer>

            <div class="content">
                <h1 class="mdc-typography--headline">Released</h1>
                <p class="mdc-typography--body1">
                    Mods that have been released.
                </p>

                <Grid>
                    <GridCell>
                        <Card>
                            <CardPrimaryAction>
                                <CardMedia class="my-card-media"/>

                                <div class="mdc-card__content">
                                    <h2 class="mdc-card__title mdc-typography--title">Example Mod</h2>
                                    <h3 class="mdc-card__subtitle mdc-typography--subheading2">by John Cena</h3>

                                    <div class="mdc-card__body mdc-typography--body1">
                                        Lorem ipsum delor sit amet.
                                    </div>
                                </div>
                            </CardPrimaryAction>

                            <CardActionBlock>
                                <CardAction>Download</CardAction>
                                <CardIconAction toggle="true" icon="star_border" label="Favourite this mod" on={{content: 'star', label: 'Unfavourite this mod'}} off={{content: 'star_border', label: 'Favourite this mod'}}/>
                            </CardActionBlock>
                        </Card>
                    </GridCell>
                </Grid>
            </div>
        </div>
    </div>
);

withLogger(app)(state, actions, view, document.body);