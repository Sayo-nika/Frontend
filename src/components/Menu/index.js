import {h} from 'hyperapp';
import {MDCMenu} from '@material/menu';
import {List, ListItem} from '../';

import './Menu.sass';

export const Menu = ({class: class_, oncreate=() => {}, ondestroy=() => {}, selectedev, cancelev, ...rest}, children) => {
    let classes = 'mdc-menu' + (class_ ? ` ${class_}` : '');
    let attrs = {
        class: classes,
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

export const MenuItem = ({disabled, ...rest}, children) => {
    let attrs = {
        'aria-disabled': disabled,
        tabindex: disabled ? -1 : 0,
        ...rest
    };

    return <ListItem {...attrs}>{children}</ListItem>;
};

export const MenuAnchor = ({class: class_, ...rest}, children) => {
    let classes = 'mdc-menu-anchor' + (class_ ? ` ${class_}` : '');

    return <div class={classes} {...rest}>{children}</div>;
};