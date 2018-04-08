import {h} from 'hyperapp';
import {MDCRipple} from '@material/ripple';

import './Button.sass';

export const Button = ({href, flat, oncreate=() => {}, ondestroy=() => {}, noripple, ...rest}, children) => {
    let classes = ['mdc-button', flat ? 'mdc-button--unelevated' : 'mdc-button--raised'].join(' ');
    let onCreate = noripple ? oncreate : el => {
        el.ripple = new MDCRipple(el);
        oncreate(el);
    };
    let onDestroy = noripple ? ondestroy : el => {
        el.ripple.destroy();
        ondestroy(el);
    };

    if (href) return <a class={classes} oncreate={onCreate} ondestroy={onDestroy} {...rest}>{children}</a>;
    else return <button class={classes} oncreate={onCreate} ondestroy={onDestroy} {...rest}>{children}</button>;
};