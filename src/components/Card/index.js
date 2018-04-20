/**
 * @file MDC card components.
 * @see {@link https://material.io/components/web/catalog/cards/}
 */

import {h} from 'hyperapp';
import {MDCRipple} from '@material/ripple';
import {IconButton} from '../';

import './Card.sass';

/**
 * A Material Design content card.
 * 
 * @param {Object} [props] Various properties for the card.
 * @param {JSX.Element[]} [children] Content for the card.
 * @returns {JSX.Element} A card.
 */
export const Card = ({class: class_, ...rest}, children) => {
    let classes = 'mdc-card' + (class_ ? ` ${class_}` : '');

    return <div class={classes} {...rest}>{children}</div>;
};

/**
 * Media element for a card.
 * 
 * @param {Object} [props] Various properties for the card.
 * @param {Boolean} [props.square] Whether the media block is square.
 * @param {JSX.Element[]} [children] Content for the media block.
 * @returns {JSX.Element} A card media block.
 */
export const CardMedia = ({class: class_, square, ...rest}, children) => {
    let classes = 'mdc-card__media' + (square ? ' mdc-card__media--square' : ' mdc-card__media--16-9') + (class_ ? ` ${class_}` : '');

    return <div class={classes} {...rest}>
        <div class="mdc-card__media-content">{children}</div>
    </div>;
};

/**
 * A primary action segment for a card. Used as a wrapper around the main content to make it clickable
 * 
 * @param {Object} [props] Various properties for the action segment.
 * @param {Boolean} [props.no-ripple] Whether to disable the ripple for the segment.
 * @param {JSX.Element[]} [children] Content for the action segment.
 * @returns {JSX.Element} An action segment.
 */
export const CardPrimaryAction = ({class: class_, oncreate=() => {}, ondestroy=() => {}, 'no-ripple': noRipple, ...rest}, children) => {
    let attrs = {
        class: 'mdc-card__primary-action' + (class_ ? ` ${class_}` : ''),
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

/**
 * A containing block for a card's secondary actions.
 * 
 * @param {Object} [props] Various properties for the action block.
 * @param {Boolean} [props.gather-like] Whether to automatically collect the button and icon actions into their own containing divs.
 * @param {Boolean} [props.full-bleed] Whether to have the first action taking up the whole space.
 * @param {JSX.Element[]} [children] Actions for the card.
 * @returns {JSX.Element} A secondary action block.
 */
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

/**
 * An action button for a card.
 * 
 * @param {Object} [props] Various properties for the button.
 * @param {Boolean} [props.no-ripple] Whether the disable the ripple for the button.
 * @param {JSX.Element[]} [children] Content for the button.
 * @returns {JSX.Element} An action button.
 */
export const CardAction = ({class: class_, href, oncreate=() => {}, ondestroy=() => {}, 'no-ripple': noRipple=false, ...rest}, children) => {
    let attrs = {
        class: 'mdc-button mdc-card__action mdc-card__action--button' + (class_ ? ` ${class_}` : ''),
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

/**
 * An action icon for a card.
 * 
 * @param {Object} [props] Various properties for the icon.
 * @param {String} [props.label] Label for the icon.
 * @param {String} [props.icon] Name of the icon to use. Uses the Material Icons font names.
 * @param {Boolean} [props.toggle] Whether the icon is a toggle icon.
 * @param {Boolean} [props.pressed] Whether the toggle icon is in a pressed state.
 * @param {Object} [props.on] Data for when the toggle icon is pressed.
 * @param {Object} [props.off] Data for when the toggle icon is unpressed.
 * @returns {JSX.Element} An action icon.
 */
export const CardIconAction = ({class: class_, ...rest}) => {
    let classes = 'mdc-card__action mdc-card__action--icon' + (class_ ? ` ${class_}` : '');
    
    return <IconButton class={classes} {...rest}/>;
};