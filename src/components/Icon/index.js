/**
 * @file MDC icon and icon toggle button components.
 * @see {@link https://material.io/components/web/catalog/buttons/icon-toggle-buttons/}
 */

import {h} from 'hyperapp';
import {MDCIconToggle} from '@material/icon-toggle';

import './Icon.sass';

/**
 * A Material Design icon element.
 * 
 * @param {Object} [props] Various properties for the icon.
 * @param {String} [props.icon] The icon to use. Uses the Material Design icon font names.
 * @param {String} [props.label] The label for the icon.
 * @returns {JSX.Element} An icon.
 */
export const Icon = ({class: class_, icon, label, ...rest}) => {
    let classes = 'material-icons' + (class_ ? ` ${class_}` : '');

    return <i class={classes} aria-label={label} {...rest}>{icon}</i>;
};

/**
 * An icon that acts like a button.
 * 
 * @param {Object} [props] Various properties for the button.
 * @param {String} [props.label] Label for the icon.
 * @param {String} [props.icon] Name of the icon to use. Uses the Material Design icon font names.
 * @param {Boolean} [props.toggle] Whether the icon is a toggle icon.
 * @param {Boolean} [props.pressed] Whether the toggle icon is in a pressed state.
 * @param {Object} [props.on] Data for when the toggle icon is pressed.
 * @param {Object} [props.off] Data for when the toggle icon is unpressed.
 * @returns {JSX.Element} An icon button.
 */
export const IconButton = ({class: class_, href, label, icon, oncreate=() => {}, ondestroy=() => {}, toggle=false, pressed=false, on={}, off={}, ...rest}) => {
    let attrs = {
        class: 'material-icons' + (class_ ? ` ${class_}` : ''),
        href,
        oncreate,
        ondestroy,
        tabindex: 0,
        role: 'button',
        'aria-label': label,
        title: label,
        ...rest
    };

    if (toggle) {
        attrs.class += ' mdc-icon-toggle';
        attrs['aria-pressed'] = pressed;
        attrs['data-toggle-on'] = JSON.stringify(on);
        attrs['data-toggle-off'] = JSON.stringify(off);
        attrs.oncreate = el => {
            el.component = new MDCIconToggle(el);
            oncreate(el);
        };
        attrs.ondestroy = el => {
            el.component.destroy();
            ondestroy(el);
        };
    }

    if (href) return <a {...attrs}>{icon}</a>;
    else return <i {...attrs}>{icon}</i>;
};