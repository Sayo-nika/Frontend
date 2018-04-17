import {h} from 'hyperapp';
import {MDCRipple} from '@material/ripple';

import './FAB.sass';

export const FAB = ({href, label, icon, mini, oncreate=() => {}, ondestroy=() => {}, noripple, class: class_, ...rest}) => {
    let classes = 'mdc-fab material-icons' + (mini ? ' mdc-fab--mini' : '') + (class_ ? ` ${class_}` : '');
    let inner = <span class="mdc-fab__icon">{icon}</span>;
    let attrs = {
        class: classes,
        href,
        'aria-label': label,
        oncreate: noripple ? oncreate : el => {
            el.ripple = MDCRipple.attachTo(el);
            oncreate(el);
        },
        ondestroy: noripple ? ondestroy : el => {
            el.ripple.destroy(el);
            ondestroy(el);
        },
        ...rest
    };

    if (href) return <a {...attrs}>{inner}</a>;
    else return <button {...attrs}>{inner}</button>;
};