import {h} from 'hyperapp';
import {MDCRipple} from '@material/ripple';

import './FAB.sass';

export const FAB = ({href, label, icon, mini, oncreate=() => {}, ondestroy=() => {}, noripple, class: class_, ...rest}) => {
    let classes = 'mdc-fab material-icons' + (mini ? ' mdc-fab--mini' : '') + (class_ ? ` ${class_}` : '');
    let onCreate = noripple ? oncreate : el => {
        el.ripple = new MDCRipple(el);
        oncreate(el);
    };
    let onDestroy = noripple ? ondestroy : el => {
        el.ripple.destroy();
        ondestroy(el);
    };

    let inner = <span class="mdc-fab__icon">{icon}</span>;
    let attrs = {
        class: classes,
        href,
        'aria-label': label,
        oncreate: onCreate,
        ondestroy: onDestroy,
        ...rest
    };

    if (href) return <a {...attrs}>{inner}</a>;
    else return <button {...attrs}>{inner}</button>;
};