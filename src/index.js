import {h, app} from 'hyperapp';
import {withLogger} from '@hyperapp/logger';
import {
    FAB,
    PermanentDrawer,
    Navbar, NavbarAction,
    List, ListItem, ListItemIcon, ListDivider, ListGroup,
    Card, CardMedia, CardPrimaryAction, CardActionBlock, CardAction, CardIconAction,
    Grid, GridCell,
    Dialog, DialogHeader, DialogBody, DialogFooter, DialogAction,
    Icon,
    Menu, MenuItem, MenuAnchor
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

        <Dialog id="about-dialog">
            <DialogHeader id="about-dialog-label">About Sayonika</DialogHeader>
            <DialogBody id="about-dialog-description">
                A website made for <a href="https://reddit.com/r/DDLCMods">r/DDLCMods</a> by <a href="https://github.com/sr229">Ayane Satomi</a> and <a href="https://github.com/Ovyerus">Ovyerus</a>.<br/>
                Made with <Icon class="love" icon="favorite" label="love"/> using the official <a href="https://material.io/components/web/">Material Design Web Components</a> from Google, and <a href="https://github.com/hyperapp/hyperapp">hyperapp</a>.
            </DialogBody>
            <DialogFooter>
                <MenuAnchor>
                    <DialogAction onclick={() => document.getElementById('donate-menu').component.show()}>Donate</DialogAction>
                    <Menu id="donate-menu">
                        <MenuItem href="https://paypal.me/ovyerus" target="_blank">Ovyerus</MenuItem>
                        <MenuItem>Ayane</MenuItem>
                    </Menu>
                </MenuAnchor>
                <DialogAction cancel>Close</DialogAction>
            </DialogFooter>
        </Dialog>

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
                        <ListItem onclick={() => document.getElementById('about-dialog').component.show()}>About</ListItem>
                        <ListItem>Login</ListItem>
                        <ListItem href="https://github.com/sr229/Sayonika" target="_blank">Source</ListItem>
                    </ListGroup>
                </List>
            </PermanentDrawer>

            <div class="content">
                <h1 class="mdc-typography--headline">Released</h1>
                <p class="mdc-typography--body1">
                    Mods that currently have playable, full versions.
                </p>

                <Grid>
                    <GridCell>
                        <Card>
                            <CardPrimaryAction>
                                <CardMedia class="my-card-media"/>

                                <div class="mdc-card__content">
                                    <h2 class="mdc-card__title mdc-typography--title">Monika After Story</h2>
                                    <h3 class="mdc-card__subtitle mdc-typography--subheading2">by God Knows Who</h3>

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