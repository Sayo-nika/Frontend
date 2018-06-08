/**
 * @file MDC nvagiation bar components.
 * @see {@link https://material.io/components/web/catalog/top-app-bar/}
 */

import {h} from 'hyperapp';
import {MDCTopAppBar} from '@material/top-app-bar';
import {IconButton} from '../';

import './Navbar.sass';

/**
 * A Material Design navigation bar.
 * 
 * @param {Object} [props] Various properties for the navbar.
 * @param {String} [props.title] Title for the navbar.
 * @param {Function} [props.navbuttonev] Function to run when the menu button is pressed. Will also make the menu button exist.
 * @param {Boolean} [props.shadow] Whether to give the navbar a shadow.
 * @param {JSX.Element[]} [children] Children for the navbar.
 * @returns {JSX.Element} A navbar.
 */
export const Navbar = ({class: class_, oncreate=() => {}, ondestroy=() => {}, title, navbuttonev, shadow, ...rest}, children) => {
    let attrs = {
        class: 'mdc-top-app-bar' + (shadow ? ' mdc-elevation--z4' : '') + (class_ ? ` ${class_}` : ''),
        oncreate: el => {
            el.component = new MDCTopAppBar(el);
            if (typeof navbuttonev === 'function') el.addEventListener('MDCTopAppbar:nav', navbuttonev);
            oncreate(el);
        },
        ondestroy: el => {
            el.component.destroy();
            ondestroy(el);
        },
        ...rest
    };

    return <header {...attrs}>
        <div class="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                {typeof navbuttonaction === 'function' && <a href="#" class="material-icons mdc-top-app-bar__navigation-icon">menu</a>}
                <span class="mdc-top-app-bar__title mdc-theme--text-primary-on-primary">
                    {title}
                </span>
            </section>
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                {children}
            </section>
        </div>
    </header>;
};

/**
 * An action icon button for a navigation bar.
 * @extends IconButton
 * 
 * @param {Object} [props] Various properties for the button.
 * @returns {JSX.Element} An action button.
 */
export const NavbarAction = ({class: class_, ...rest}) => {
    let classes = 'mdc-top-app-bar__action-item' + (class_ ? ` ${class_}` : '');

    return <IconButton class={classes} {...rest}/>;
};