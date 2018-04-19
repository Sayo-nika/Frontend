/**
 * @file MDC floating action button component.
 * @see {@link https://material.io/components/web/catalog/buttons/floating-action-buttons/}
 */

import {h} from 'hyperapp';
import {MDCRipple} from '@material/ripple';
import {Icon} from '../';

import './FAB.sass';

/**
 * A Material Design floating action button (FAB).
 * 
 * @param {Object} [props] Various properties for the FAB.
 * @param {Boolean} [props.no-ripple] Whether to disable the FAB's ripple.
 * @param {Boolean} [props.mini] Whether the FAB is mini.
 * @param {String} [props.label] The label for the FAB.
 * @param {String} [props.icon] The icon for the FAB. Uses the Material Design icon font names.
 * @returns {JSX.Element} A FAB. 
 */
export const FAB = ({href, label, icon, mini, oncreate=() => {}, ondestroy=() => {}, 'no-ripple': noRipple, class: class_, ...rest}) => {
    let attrs = {
        class: 'mdc-fab material-icons' + (mini ? ' mdc-fab--mini' : '') + (class_ ? ` ${class_}` : ''),
        href,
        'aria-label': label,
        oncreate: noRipple ? oncreate : el => {
            el.ripple = MDCRipple.attachTo(el);
            oncreate(el);
        },
        ondestroy: noRipple ? ondestroy : el => {
            el.ripple.destroy(el);
            ondestroy(el);
        },
        ...rest
    };

    if (href) return <a {...attrs}><Icon icon={icon}/></a>;
    else return <button {...attrs}><Icon icon={icon}/></button>;
};