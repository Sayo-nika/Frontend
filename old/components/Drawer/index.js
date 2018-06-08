/**
 * @file MDC drawer components.
 * @see {@link https://material.io/components/web/catalog/drawers/}
 */

import {h} from 'hyperapp';
import {MDCTemporaryDrawer} from '@material/drawer';

import './Drawer.sass';

/**
 * A Material Design temporary slide-out drawer.
 * 
 * @param {Object} [props] Various properties for the drawer.
 * @param {JSX.Element[]} [children] Children for the drawer.
 * @returns {JSX.Element} A temporary drawer.
 */
export const TemporaryDrawer = ({class: class_, oncreate=() => {}, ondestroy=() => {}, ...rest}, children) => {
    let attrs = {
        class: 'mdc-drawer mdc-drawer--temporary' + (class_ ? ` ${class_}` : ''),
        oncreate: el => {
            el.component = new MDCTemporaryDrawer(el);
            oncreate(el);
        },
        ondestroy: el => {
            el.component.destroy();
            ondestroy(el);
        },
        ...rest
    };

    return <aside {...attrs}>
        <nav class="mdc-drawer__drawer">
            {children}
        </nav>
    </aside>;
};

/**
 * A Material Design permanent drawer.
 * 
 * @param {Object} [props] Various properties for the drawer.
 * @param {Boolean} [props.with-spacer] Whether there's a header spacer in the children.
 * @param {JSX.Element[]} [children] Children for the drawer.
 * @returns {JSX.Element} A permanent drawer.
 */
export const PermanentDrawer = ({class: class_, 'with-spacer': withSpacer, ...rest}, children) => {
    let classes = 'mdc-drawer mdc-drawer--permanent' + (class_ ? ` ${class_}` : '');

    return <nav class={classes} {...rest}>
        {withSpacer && <div class="mdc-drawer__toolbar-spacer" />}
        <div class="mdc-drawer__content">
            {children}
        </div>
    </nav>;
};

/**
 * A special header block for slide-out drawers.
 * Usually used to show a user's login status and information.
 * 
 * @param {Object} [props] Various properties for the header.
 * @param {JSX.Element[]} [children] Content for the header.
 * @returns {JSX.Element} A header block.
 */
export const DrawerHeader = ({class: class_, ...rest}, children) => {
    let classes = 'mdc-drawer__header' + (class_ ? ` ${class_}` : '');

    return <header class={classes} {...rest}>
        <div class="mdc-drawer__header-content">
            {children}
        </div>
    </header>;
};