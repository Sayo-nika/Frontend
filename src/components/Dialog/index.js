import {h} from 'hyperapp';
import {MDCDialog} from '@material/dialog';

import './Dialog.sass';

export const Dialog = ({class: class_, id='dialog', oncreate=() => {}, ondestroy=() => {}, acceptev, cancelev, ...rest}, children) => {
    let classes = 'mdc-dialog' + (class_ ? ` ${class_}` : '');
    let attrs = {
        class: classes,
        id,
        role: 'alertdialog',
        'aria-labelledby': `${id}-label`,
        'aria-describedby': `${id}-description`,
        oncreate: el => {
            el.component = new MDCDialog(el);

            if (typeof acceptev === 'function') el.component.addEventListener('MDCDialog:accept', acceptev);
            if (typeof cancelev === 'function') el.component.addEventListener('MDCDialog:cancel', cancelev);

            oncreate(el);
        },
        ondestroy: el => {
            el.component.destroy();
            ondestroy(el);
        },
        ...rest
    };

    return <aside {...attrs}>
        <div class="mdc-dialog__surface">
            {children}
        </div>
        <div class="mdc-dialog__backdrop" />
    </aside>;
};

export const DialogHeader = ({class: class_, id, ...rest}, children) => {
    let classes = 'mdc-dialog__header' + (class_ ? ` ${class_}` : '');

    return <header class={classes} {...rest}>
        <h2 id={id} class="mdc-dialog__header__title">
            {children}
        </h2>
    </header>;
};

export const DialogBody = ({class: class_, scrollable=false, ...rest}, children) => {
    let classes = 'mdc-dialog__body' + (scrollable ? ' mdc-dialog__body--scrollable' : '') + (class_ ? ` ${class_}` : '');

    return <section class={classes} {...rest}>
        {children}
    </section>;
};

export const DialogFooter = ({class: class_, ...rest}, children) => {
    let classes = 'mdc-dialog__footer' + (class_ ? ` {class_}` : '');

    return <footer class={classes} {...rest}>
        {children}
    </footer>;
};

export const DialogAction = ({class: class_, cancel, accept, ...rest}, children) => {
    let classes = 'mdc-button mdc-dialog__action mdc-dialog__footer__button ';
    classes += accept ? ' mdc-dialog__footer__button--accept' : cancel ? ' mdc-dialog__footer__button--cancel' : '';
    classes += class_ ? ` ${class_}` : '';

    return <button type="button" class={classes} {...rest}>{children}</button>;
};