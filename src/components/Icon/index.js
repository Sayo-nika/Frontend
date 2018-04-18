import {h} from 'hyperapp';
import {MDCIconToggle} from '@material/icon-toggle';

import './Icon.sass';

export const Icon = ({class: class_, icon, label, ...rest}) => {
    let classes = 'material-icons' + (class_ ? ` ${class_}` : '');

    return <i class={classes} aria-label={label} {...rest}>{icon}</i>;
};

export const IconButton = ({class: class_, href, label, icon, oncreate=() => {}, ondestroy=() => {}, toggle=false, pressed=false, on={}, off={}, ...rest}) => {
    let classes = 'material-icons' + (class_ ? ` ${class_}` : '');
    let attrs = {
        class: classes,
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
        attrs.pressed = pressed;
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