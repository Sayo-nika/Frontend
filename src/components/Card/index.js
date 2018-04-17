import {h} from 'hyperapp';
import {MDCRipple} from '@material/ripple';
import {MDCIconToggle} from '@material/icon-toggle';

import './Card.sass';

export const Card = ({class: class_, ...rest}, children) => {
    let classes = 'mdc-card' + (class_ ? ` ${class_}` : '');

    return <div class={classes} {...rest}>{children}</div>;
};

export const CardMedia = ({class: class_, square, ...rest}, children) => {
    let classes = 'mdc-card__media' + (square ? ' mdc-card__media--square' : ' mdc-card__media--16-9') + (class_ ? ` ${class_}` : '');

    return <div class={classes} {...rest}>
        <div class="mdc-card__media-content">{children}</div>
    </div>;
};

export const CardPrimaryAction = ({class: class_, oncreate=() => {}, ondestroy=() => {}, 'no-ripple': noRipple, ...rest}, children) => {
    let classes = 'mdc-card__primary-action' + (class_ ? ` ${class_}` : '');
    let attrs = {
        class: classes,
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

    return <div {...attrs}>{children}</div>;
};

export const CardActionBlock = ({class: class_, 'gather-like': gatherLike=true, 'full-bleed': fullBleed=false, ...rest}, children) => {
    let classes = 'mdc-card__actions' + (fullBleed ? ' mdc-card__actions--full-bleed' : '') + (class_ ? ` ${class_}` : '');

    if (gatherLike) {
        let buttonActions = children.filter(v => v.attributes.class.includes('mdc-card__action--button'));
        let iconActions = children.filter(v => v.attributes.class.includes('mdc-card__action--icon'));
        let newChildren = [];

        if (buttonActions.length) newChildren.push(<div class="mdc-card__action-buttons">{buttonActions}</div>);
        if (iconActions.length) newChildren.push(<div class="mdc-card__action-icons">{iconActions}</div>);

        children = newChildren;
    }

    return <div class={classes} {...rest}>
        {children}
    </div>;
};

export const CardAction = ({class: class_, href, oncreate=() => {}, ondestroy=() => {}, 'no-ripple': noRipple=false, ...rest}, children) => {
    let classes = 'mdc-button mdc-card__action mdc-card__action--button' + (class_ ? ` ${class_}` : '');
    let attrs = {
        class: classes,
        href,
        oncreate: noRipple ? oncreate : el => {
            el.ripple = new MDCRipple(el);
            oncreate(el);
        },
        ondestroy: noRipple ? ondestroy : el => {
            el.ripple.remove(el);
            ondestroy(el);
        },
        ...rest
    };

    if (href) return <a {...attrs}>{children}</a>;
    else return <button {...attrs}>{children}</button>;
};

export const CardIconAction = ({class: class_, href, label, icon, oncreate=() => {}, ondestroy=() => {}, toggle=false, pressed=false, on={}, off={}, ...rest}) => {
    let classes = 'material-icons mdc-card__action mdc-card__action--icon' + (class_ ? ` ${class_}` : '');
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