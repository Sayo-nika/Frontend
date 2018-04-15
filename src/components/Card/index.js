import {h} from 'hyperapp';
import {MDCRipple} from '@material/ripple';

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

export const CardActionBlock = ({class: class_, 'gather-like': gatherLike=true, 'full-bleed': fullBleed=false, ...rest}, children) => {
    let classes = 'mdc-card__actions' + (fullBleed ? ' mdc-card__actions--full-bleed' : '') + (class_ ? ` ${class_}` : '');

    console.log(children);
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
            el.ripple.destroy();
            ondestroy(el);
        },
        ...rest
    };

    if (href) return <a {...attrs}>{children}</a>;
    else return <button {...attrs}>{children}</button>;
};

export const CardIconAction = () => {

};