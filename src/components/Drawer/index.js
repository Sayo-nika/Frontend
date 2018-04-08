import {h} from 'hyperapp';
import {MDCTemporaryDrawer} from '@material/drawer';

import './Drawer.sass';

export const TemporaryDrawer = ({id}, children) => {
    return <aside class="mdc-drawer mdc-drawer--temporary mdc-typography" id={id} oncreate={el => el.drawer = new MDCTemporaryDrawer(el)} ondestroy={el => el.drawer.destroy()}>
        <nav class="mdc-drawer__drawer">
            {children}
        </nav>
    </aside>;
};

export const PermanentDrawer = ({id, withspacer}, children) => {
    return <nav class="mdc-drawer mdc-drawer--permanent mdc-typography" id={id}>
        {withspacer && <div class="mdc-drawer__toolbar-spacer" />}
        <div class="mdc-drawer__content">
            {children}
        </div>
    </nav>;
};

export const DrawerHeader = (opt, children) => {
    let {class: class_, ...rest} = opt;
    let headerClass = 'mdc-drawer__header' + (class_ ? ' ' + class_ : '');

    return <header class={headerClass} {...rest}>
        <div class="mdc-drawer__header-content">
            {children}
        </div>
    </header>;
};