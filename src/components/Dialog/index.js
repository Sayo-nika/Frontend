/**
 * @file MDC dialog components.
 * @see {@link https://material.io/components/web/catalog/dialogs/}
 */

import {h} from 'hyperapp';
import {MDCDialog} from '@material/dialog';

import './Dialog.sass';

/**
 * A Material Design pop-up dialog box.
 * 'aria-labelledby' and 'aria-describedby' are automatically set to the ID given, with '-label' and '-description' appended resepectively.
 * Make sure to give your body and header these IDs.
 * 
 * @param {Object} [props] Various properties for the dialog.
 * @param {Function} [props.acceptev] Function to run when the dialog's accept button is pressed.
 * @param {Function} [props.cancelev] Function to run when the dialog's cancel button is pressed.
 * @param {JSX.Element[]} [children] Content of the dialog.
 * @returns {JSX.Element} A dialog.
 */
export const Dialog = ({class: class_, id='dialog', oncreate=() => {}, ondestroy=() => {}, acceptev, cancelev, ...rest}, children) => {
    let attrs = {
        class: 'mdc-dialog' + (class_ ? ` ${class_}` : ''),
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

/**
 * Header for a dialog.
 * 
 * @param {Object} [props] Various properties for the header.
 * @param {JSX.Element[]} [children] Content of the header.
 * @returns {JSX.Element} A header section.
 */
export const DialogHeader = ({class: class_, id, ...rest}, children) => {
    let classes = 'mdc-dialog__header' + (class_ ? ` ${class_}` : '');

    return <header class={classes} {...rest}>
        <h2 id={id} class="mdc-dialog__header__title">
            {children}
        </h2>
    </header>;
};

/**
 * Body for a dialog.
 * 
 * @param {Object} [props] Various properties for the body.
 * @param {Boolean} [props.scrollable] Whether to let the body scroll if it needs to.
 * @param {JSX.Element[]} [children] Content of the body.
 * @returns {JSX.Element} A body section.
 */
export const DialogBody = ({class: class_, scrollable=false, ...rest}, children) => {
    let classes = 'mdc-dialog__body' + (scrollable ? ' mdc-dialog__body--scrollable' : '') + (class_ ? ` ${class_}` : '');

    return <section class={classes} {...rest}>
        {children}
    </section>;
};

/**
 * Footer for a dialog.
 * Houses the actions for the dialog.
 * 
 * @param {Object} [props] Various properties for the footer.
 * @param {JSX.Element[]} [children] Content of the footer.
 * @returns {JSX.Element} A footer section.
 */
export const DialogFooter = ({class: class_, ...rest}, children) => {
    let classes = 'mdc-dialog__footer' + (class_ ? ` {class_}` : '');

    return <footer class={classes} {...rest}>
        {children}
    </footer>;
};

/**
 * An action button for a dialog.
 * 
 * @param {Object} [props] Various properties for the button.
 * @param {Boolean} [props.accept] Whether the button is classified as the accept action.
 * @param {Boolean} [props.cancel] Whether the button is classified as the cancel action..
 * @param {JSX.Element[]} [children] Content of the button.
 * @returns {JSX.Element} An action button.
 */
export const DialogAction = ({class: class_, cancel, accept, ...rest}, children) => {
    let classes = 'mdc-button mdc-dialog__action mdc-dialog__footer__button ';
    classes += accept ? ' mdc-dialog__footer__button--accept' : cancel ? ' mdc-dialog__footer__button--cancel' : '';
    classes += class_ ? ` ${class_}` : '';

    return <button type="button" class={classes} {...rest}>{children}</button>;
};