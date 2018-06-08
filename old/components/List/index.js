/**
 * @file MDC list components.
 * @see {@link https://material.io/components/web/catalog/lists/}
 */

import {h} from 'hyperapp';
import {MDCRipple} from '@material/ripple';
import {Icon, IconButton} from '../';

import './List.sass';

/**
 * A Material Design list.
 * 
 * @param {Object} [props] Various properties for the list.
 * @param {Boolean} [props.two-lines] Whether the list contains items with two-lines of content.
 * @param {Boolean} [props.avatars] Whether the list contains items with avatars.
 * @param {Boolean} [prop.grouped] Whether the list should be a wrapper for list groups. Will override `props.avatars` and `props.two-lines`.
 * @param {JSX.Element[]} [children] Children for the list.
 * @returns {JSX.Element} A list.
 */
export const List = ({class: class_, 'two-lines': twoLines, grouped, avatars, ...rest}, children) => {
    let classes = 'mdc-list';

    if (grouped) classes += '-group' + (class_ ? ` ${class_}` : '');
    else classes += (twoLines ? ' mdc-list--two-line' : '') + (avatars ? ' mdc-list--avatar-list' : '') + (class_ ? ` ${class_}` : '');

    if (grouped) return <div class={classes} {...rest}>{children}</div>;
    else return <ul class={classes} {...rest}>{children}</ul>;
};

/**
 * A list group.
 * 
 * @param {Object} [props] Various properties for the group.
 * @param {String} [props.subheader] Subheader for the group.
 * @param {JSX.Element[]} [children] Items for the group.
 * @returns {JSX.Element[]} The group's subheader, and the list.
 */
export const ListGroup = ({subheader, ...rest}, children) => [
    subheader && <h3 class="mdc-list-group__subheader">{subheader}</h3>,
    <List {...rest}>
        {children}
    </List>
];

/**
 * An item for a list.
 * 
 * @param {Object} [props] Various properties for the item.
 * @param {Boolean} [props.no-ripple] Whether to disable the ripple for the item.
 * @param {JSX.Element[]} [children] Children for the item.
 * @returns {JSX.Element} A list item.
 */
export const ListItem = ({class: class_, oncreate=() => {}, ondestroy=() => {}, 'no-ripple': noRipple, href, ...rest}, children) => {
    let attrs = {
        class: 'mdc-list-item' + (class_ ? ` ${class_}` : ''),
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
    else return <li {...attrs}>{children}</li>;
};

/**
 * An icon for a list item.
 * 
 * @param {Object} [props] Various properties for the icon.
 * @param {String} [props.label] The label for the icon.
 * @param {String} [props.icon] The icon to use. Uses the Material Design icon font names.
 * @returns {JSX.Element} An icon.
 */
export const ListItemIcon = ({class: class_, icon, label, ...rest}) => {
    let classes = 'mdc-list-item__graphic' + (class_ ? ` ${class_}` : '');

    return <span class={classes} role="presentation" {...rest}>
        <Icon label={label} icon={icon}/>
    </span>;
};

/**
 * An avatar for a list item.
 * Returns an <img> tag, so set a `src` property.
 * 
 * @param {Object} [props] Various properties for the avatar.
 * @returns {JSX.Element} An avatar.
 */
export const ListItemAvatar = ({class: class_, ...rest}) => {
    let classes = 'mdc-list-item__graphic' + (class_ ? ` ${class_}` : '');

    return <img class={classes} width="56" height="56" {...rest}/>;
};

/**
 * Meta content for a list item.
 * 
 * @param {Object} [props] Various properties for the meta content.
 * @param {JSX.Element[]} [children] Content of the meta item.
 * @returns {JSX.Element} A meta container.
 */
export const ListItemMeta = ({class: class_, ...rest}, children) => {
    let classes = 'mdc-list-item__meta' + (class_ ? ` ${class_}` : '');

    return <span class={classes} {...rest}>{children}</span>;
};

/**
 * An icon used as meta content for a list icon.
 * @extends ListIcon
 * 
 * @param {Object} [props] Various properties for the icon.
 * @returns {JSX.Element} An icon.
 */
export const ListItemMetaIcon = ({class: class_, ...rest}) => {
    let classes = 'mdc-list-item__meta' + (class_ ? ` ${class_}` : '');

    return <IconButton class={classes} {...rest}/>;
};

/**
 * A list item that has two lines of content.
 * 
 * @param {Object} [props] Various properties for the item.
 * @param {String} [props.secondary-class] Custom classes for the secondary text.
 * @param {String} [props.line-one] The first line of text.
 * @param {String} [props.line-two] The second line of text.
 * @returns {JSX.Element} A two-line item.
 */
export const ListTwoLineItem = ({class: class_, 'secondary-class': secondaryClass, 'line-one': lineOne, 'line-two': lineTwo, ...rest}) => {
    let classes = 'mdc-list-item__text' + (class_ ? ` ${class_}` : '');
    let secondaryClasses = 'mdc-list-item__secondary-text' + (secondaryClass ? ` ${secondaryClass}` : '');

    return <span class={classes} {...rest}>
        {lineOne}
        <span class={secondaryClasses}>
            {lineTwo}
        </span>
    </span>;
};

/**
 * A divider for a list.
 * 
 * @param {Object} [props] Various properties for the divider.
 * @param {Boolean} [props.inset] Whether the divider is inset to allow for list items with avatars.
 * @param {Boolean} [props.hr] Whether to use a <hr> element for the divider instead of a <li>. Usually for dividing list groups.
 * @returns {JSX.Element} A divider.
 */
export const ListDivider = ({class: class_, inset, hr, ...rest}) => {
    let classes = 'mdc-list-divider' + (inset ? 'mdc-list-divider--inset' : '') + (class_ ? ` ${class_}` : '');

    if (hr) return <hr class={classes} {...rest}/>;
    else <li class={classes} role="separator" {...rest}/>;
};