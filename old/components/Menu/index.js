/**
 * @file MDC dropdown menu components.
 * @see {@link https://material.io/components/web/catalog/menus/}
 */

import {h} from 'hyperapp';
import {MDCMenu} from '@material/menu';
import {List, ListItem} from '../';

import './Menu.sass';

/**
 * A Material Design menu.
 * 
 * @param {Object} [props] Various properties for the menu.
 * @param {Function} [props.selectedev] Function to run when a menu item is selected.
 * @param {Function} [props.cancelev] Function to run when a menu is canceled.
 * @param {JSX.Element[]} [children] Content for the menu.
 * @returns {JSX.Element} A menu.
 */
export const Menu = ({class: class_, oncreate=() => {}, ondestroy=() => {}, selectedev, cancelev, ...rest}, children) => {
    let attrs = {
        class: 'mdc-menu' + (class_ ? ` ${class_}` : ''),
        tabindex: -1,
        oncreate: el => {
            el.component = new MDCMenu(el);

            if (typeof selectedev === 'function') el.component.addEventListener('MDCMenu:selected', selectedev);
            if (typeof cancelev === 'function') el.component.addEventListener('MDCMenu:cancel', cancelev);

            oncreate(el);
        },
        ondestroy: el => {
            el.component.destroy();
            ondestroy(el);
        },
        ...rest
    };

    return <div {...attrs}>
        <List class="mdc-menu__items" role="menu" aria-hidden="true">
            {children}
        </List>
    </div>;
};

/**
 * An item for a menu.
 * @extends ListItem
 * 
 * @param {Object} [props] Various properties for the item.
 * @param {Boolean} [props.disabled] Whether the item is disabled.
 * @param {JSX.Element[]} [children] Content for the item.
 * @returns {JSX.Element} A menu item.
 */
export const MenuItem = ({disabled, ...rest}, children) => {
    let attrs = {
        'aria-disabled': disabled,
        tabindex: disabled ? -1 : 0,
        ...rest
    };

    return <ListItem {...attrs}>{children}</ListItem>;
};

/**
 * A wrapping element for a menu in order to anchor it to an element.
 * 
 * @param {Object} [props] Various properties for the anchor.
 * @param {JSX.Element[]} [children] Children of the anchor.
 * @returns {JSX.Element} An anchor.
 */
export const MenuAnchor = ({class: class_, ...rest}, children) => {
    let classes = 'mdc-menu-anchor' + (class_ ? ` ${class_}` : '');

    return <div class={classes} {...rest}>{children}</div>;
};