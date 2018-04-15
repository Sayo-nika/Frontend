import {h, app} from 'hyperapp';
import {FAB, Navbar, NavbarAction, List, ListItem, ListItemIcon, PermanentDrawer, ListDivider, ListGroup, Card, CardMedia, CardActionBlock, CardAction} from './components';

import './sass/main.sass';

const state = {};
const actions = {};
const view = () => (
    <div class="mdc-typography __wrapper">
        <FAB icon="phone" class="mdc-fab--bottom-right" labe="banana"/>

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

                <div class="mdc-layout-grid">
                    <div class="mdc-layout-grid__inner">
                        <div class="mdc-layout-grid__cell">
                            <Card class="foo">
                                <CardMedia class="my-card-media"/>
                                Lol I'm a card
                                <CardActionBlock full-bleed>
                                    <CardAction>Woah haha!</CardAction>
                                </CardActionBlock>
                            </Card>
                        </div>
                        <div class="mdc-layout-grid__cell">
                            <Card>Lol I'm a card</Card>
                        </div>
                        <div class="mdc-layout-grid__cell">
                            <Card>Lol I'm a card</Card>
                        </div>
                        <div class="mdc-layout-grid__cell">
                            <Card>Lol I'm a card</Card>
                        </div>
                        <div class="mdc-layout-grid__cell">
                            <Card>Lol I'm a card</Card>
                        </div>
                        <div class="mdc-layout-grid__cell">
                            <Card>Lol I'm a card</Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

app(state, actions, view, document.body);