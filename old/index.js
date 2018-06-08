import {h, app} from 'hyperapp';
import {withLogger} from '@hyperapp/logger';
import {
    Button, FAB,
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

const mods = [
    {
        title: 'Monika After Story',
        author: 'John Cena',
        shortDesc: 'Hurr durr Monika xd.',
        longDesc: 'Accordion to all known laws of aviation, there is no way a bee should be able to fly.\n'
        + 'Its wings are too small to get its fat little body off the ground.\n'
        + "The bee, of course, flies anyway, because bees don't care what humans think is impossible.",
        favourited: false
    },
    {
        title: 'MemeS Are Badde',
        author: 'Jon Jafari',
        shortDesc: 'I SAWED THIS BOAT IN HALF!',
        longDesc: "Y0: d4 qu3ry 3n4b|3d, 4pp33|2z0rz, 4z t3xt p4g3, 4nd, kl1x 94g3s j00'|| t0 pdf. F1|3z, f0|2m4771ng 70 1PH, +HE vv1|_|_ w0RRy1N9 5O. D0nT LINk 4v41|4b|3 d4 70p. 1n pR0dUc+ PH4M1li4r s7|21pz0r3d w3b, 1+ 7h15 l@r9e 5peNDInG joo. B3 l1nx Wh0 w0RRy1N9 1PH, iTz 94g3s 4cc355 0f. +HE @R wh3|23 f1|\\|d n0n-3N9l1sh, 0f 4cc355 g00g13 y3r.\n"
        + '70 t3H p@93 v3r510n, 1T 4rE b|00 1nt0 5|\\|4p5)-(07, j00r L1kE caChED 15 @R3. L1nk +H@T d0cum3nt @R3 1F, y0ur \\/\\/3b 0R pdf, 8Ut iN y0ur p4g3,. (1f Th@t p@g3 1n. 83 vv3b r33dz0r d0wn|04d (1f, p4r7I 0wN3R5 7|24n5|4735 c4n |7, k4Nt 0wN3R5 INfOrM@+I0N, @$ z33. N0+ pHinD 51m1l4r h1ghl1gh73d @$, +IMe c0n+3N+ r3zUl-|-z Up n0n.\n'
        + 'P|33z 5peNDInG 3x4|\\/|3|\\|3d y0 70p, 0f 8@d f1|3z, 534|2ch. D@ r3l473d c0mm4ndz H45, kl1k p@gE$ 1nd1c473z0r t0 vve, Th@t 0f73n 4|| iz. F4q 1F +h15 kn0w d0cum3nt. U\\/ v3r510n 4v41|4b|3 0n, 73h w1tH 4|7h0ugh 17, 83 @R3 w17h w0RRy1N9.',
        favourited: true
    }
];
const state = {
    mods: []
};
const actions = {
    addMod: mod => ({mods}) => ({mods: mods.concat(mod)}),
    removeMod: mod => ({mods}) => ({mods: mods.filter(m => m !== mod)})
};
const view = (state, actions) => (
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
                        <MenuItem href="https://paypal.me/chinodesuuu" target="_blank">Ayane</MenuItem>
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
                <Button onclick={() => actions.addMod(mods[Math.floor(Math.random() * mods.length)])}>Add Mod</Button>

                <Grid>
                    {
                        state.mods.map((mod, i) => {
                            return (
                                <GridCell>
                                    <Card>
                                        <CardPrimaryAction onclick={() => document.getElementById(`mod${i}-dialog`).component.show()}>
                                            <CardMedia class="my-card-media"/>

                                            <div class="mdc-card__content">
                                                <h2 class="mdc-card__title mdc-typography--title">{mod.title}</h2>
                                                <h3 class="mdc-card__subtitle mdc-typography--subheading2">by {mod.author}</h3>

                                                <div class="mdc-card__body mdc-typogyaphy--body1">
                                                    {mod.shortDesc}
                                                </div>
                                            </div>
                                        </CardPrimaryAction>

                                        <CardActionBlock>
                                            <CardAction>Download</CardAction>
                                            <CardIconAction toggle="true" pressed={mod.favourited} on={{content: 'star', label: 'Unfavourite this mod'}} off={{content: 'star_border', label: 'Favourite this mod'}}/>
                                        </CardActionBlock>
                                    </Card>

                                    <Dialog id={`mod${i}-dialog`}>
                                        <DialogHeader id={`mod${i}-dialoglabel`}>{mod.title}</DialogHeader>
                                        <DialogBody id={`mod${i}-dialog-description`} style={{whiteSpace: 'pre-line'}}>
                                            {mod.longDesc}
                                        </DialogBody>
                                        <DialogFooter>
                                            <DialogAction accept>Download</DialogAction>
                                            <DialogAction cancel>Close</DialogAction>
                                        </DialogFooter>
                                    </Dialog>
                                </GridCell>
                            );
                        })
                    }
                </Grid>
            </div>
        </div>
    </div>
);

withLogger(app)(state, actions, view, document.body);
// app(state, actions, view, document.body);