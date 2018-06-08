/**
 * @file MDC button component.
 * @see {@link material.io/components/web/catalog/buttons/}
 */

import {h} from 'hyperapp';
import {MDCRipple} from '@material/ripple';

import './Button.sass';

/**
 * A Material Design button.
 * 
 * @param {Object} [props] Various properties for the button.
 * @param {Boolean} [props.flat] Whether the button should be a flat button.
 * @param {Boolean} [props.no-ripple] Whether to disable the button's ripple.
 * @param {JSX.Element[]} [children] Content of the button.
 * @returns {JSX.Element} A button.
 */
export const Button = ({class: class_, href, flat, oncreate=() => {}, ondestroy=() => {}, 'no-ripple': noRipple, ...rest}, children) => {
    let attrs = {
        class: 'mdc-button' + (flat ? ' mdc-button--unelevated' : ' mdc-button--raised') + (class_ ? ` ${class_}` : ''),
        href,
        oncreate: noRipple ? oncreate : el => {
            el.ripple = new MDCRipple(el);
            oncreate(el);
        },
        ondestroy: noRipple ? ondestroy : el => {
            el.ripple.destroy();
            ondestroy(el);
        },
        ...rest
    };

    if (href) return <a {...attrs}>{children}</a>;
    else return <button {...attrs}>{children}</button>;
};