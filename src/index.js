import {h, app} from 'hyperapp';
import {Button, Navbar, NavbarAction, DrawerHeader, List, ListItem, ListItemIcon, TemporaryDrawer} from './components';

import './index.sass';

const state = {};
const actions = {};
const view = () => (
    <div>
        <Navbar title="Title" navbuttonaction={() => document.getElementById('drawer').drawer.open = true}>
            <NavbarAction href="#" label="Do things" icon="add"/>
        </Navbar>
        <TemporaryDrawer id="drawer">
            <DrawerHeader class="my-header">
                <span class="mdc-typography--body white-text">Sayonika</span>
            </DrawerHeader>

            <div class="mdc-drawer__content">
                <List>
                    <ListItem href="#!">Item 1</ListItem>
                    <ListItem>Item 2</ListItem>
                    <ListItem href="#!"><ListItemIcon icon="person"/>Item 3 with Icon</ListItem>
                </List>
            </div>
        </TemporaryDrawer>

        <Button href="#">butan</Button>
        <Button disabled>butan 3</Button>
    </div>
);

app(state, actions, view, document.body);