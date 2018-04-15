import {h} from 'hyperapp';
import {MDCRipple} from '@material/ripple';

import './List.sass';

export const List = ({twolines, grouped, avatars, class: class_, ...rest}, children) => {
    let classes = 'mdc-list';

    if (grouped) classes += '-group' + (class_ ? ` ${class_}` : '');
    else classes += (twolines ? ' mdc-list--two-line' : '') + (avatars ? ' mdc-list--avatar-list' : '') + (class_ ? ` ${class_}` : '');

    if (grouped) return <div class={classes} {...rest}>{children}</div>;
    else return <ul class={classes} {...rest}>{children}</ul>;
};

export const ListGroup = ({subheader, ...rest}, children) => [
    subheader && <h3 class="mdc-list-group__subheader">{subheader}</h3>,
    <List {...rest}>
        {children}
    </List>
];

export const ListItem = ({oncreate=() => {}, ondestroy=() => {}, href, ...rest}, children) => {
    let onCreate = el => {
        el.ripple = new MDCRipple(el);
        oncreate(el); 
    };
    let onDestroy = el => {
        el.ripple.destroy();
        ondestroy(el);
    };

    if (href) return <a class="mdc-list-item" href={href} oncreate={onCreate} ondestroy={onDestroy} {...rest}>{children}</a>;
    else return <li class="mdc-list-item" oncreate={onCreate} ondestroy={onDestroy} {...rest}>{children}</li>;
};

export const ListItemIcon = ({icon}) => (
    <span class="mdc-list-item__graphic" role="presentation">
        <i class="material-icons" aria-hidden="true">{icon}</i>
    </span>
);

export const ListItemAvatar = attrs => (
    <img class="mdc-list-item__graphic" width="56" height="56" {...attrs} />
);

export const ListItemMeta = (attrs, children) => (
    <span class="mdc-list-item__meta" {...attrs}>{children}</span>
);

export const ListItemMetaIcon = ({href='#', icon, label, ...rest}) => (
    <a class="mdc-list-item__meta material-icons" href={href} aria-label={label} title={label} {...rest}>{icon}</a>
);

export const ListTwoLineItem = ({lineone, linetwo}) => (
    <span class="mdc-list-item__text">
        {lineone}
        <span class="mdc-list-item__secondary-text">
            {linetwo}
        </span>
    </span>
);

export const ListDivider = ({inline, hr}) => {
    let classes = 'mdc-list-divider' + (inline ? 'mdc-list-divider--inset' : '');

    if (hr) return <hr class={classes} />;
    else <li role="separator" class={classes} />;
};