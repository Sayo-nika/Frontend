import {h} from 'hyperapp';
import {MDCRipple} from '@material/ripple';

import './Button.sass';

export const Button = ({href, flat, oncreate=() => {}, ondestroy=() => {}, noripple, class: class_, ...rest}, children) => {
    let classes = 'mdc-button' + (flat ? ' mdc-button--unelevated' : ' mdc-button--raised') + (class_ ? ` ${class_}` : '');
    let onCreate = noripple ? oncreate : el => {
        el.ripple = new MDCRipple(el);
        oncreate(el);
    };
    let onDestroy = noripple ? ondestroy : el => {
        el.ripple.destroy();
        ondestroy(el);
    };

    let attrs = {
        class: classes,
        href,
        oncreate: onCreate,
        ondestroy: onDestroy,
        ...rest
    };

    if (href) return <a {...attrs}>{children}</a>;
    else return <button {...attrs}>{children}</button>;
};

export const IconButton = () => {};