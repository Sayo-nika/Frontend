import {h} from 'hyperapp';
import {MDCTopAppBar} from '@material/top-app-bar';

import './Navbar.sass';

export const Navbar = ({title, navbuttonaction, shadow, class: class_, ...rest}, links) => {
    let classes = 'mdc-top-app-bar' + (shadow ? ' mdc-elevation--z4' : '') + (class_ ? ` ${class_}` : '');
    let onCreate = el => {
        el.component = new MDCTopAppBar(el);
        if (typeof navbuttonaction === 'function') el.addEventListener('MDCTopAppBar:nav', navbuttonaction);
    };
    let onDestroy = el => {
        el.component.destroy();
        if (typeof navbuttonaction === 'function') el.removeEventListener('MDCTopAppBar:nav', navbuttonaction);
    };

    return <header class={classes} oncreate={onCreate} ondestroy={onDestroy} {...rest}>
        <div class="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                {typeof navbuttonaction === 'function' && <a href="#" class="material-icons mdc-top-app-bar__navigation-icon">menu</a>}
                <span class="mdc-top-app-bar__title mdc-theme--text-primary-on-primary">
                    {title}
                </span>
            </section>
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                {links}
            </section>
        </div>
    </header>;
};

export const NavbarAction = ({href, label, icon}) => (
    <a href={href} class="material-icons mdc-top-app-bar__action-item" aria-label={label} alt={label}>{icon}</a>
);