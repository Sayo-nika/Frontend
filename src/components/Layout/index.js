/**
 * @file MDC layout grid components.
 * @see {@link https://material.io/components/web/catalog/layout-grid/}
 */

import {h} from 'hyperapp';
import './Layout.sass';

const SIZES = Array.apply(null, Array(11 + 1)).map((_, n) => ++n);
const DEVICES = ['desktop', 'tablet', 'mobile'];
const POSITIONS = ['top', 'middle', 'bottom'];
const GRID_ALIGNS = ['left', 'right'];

/**
 * A responsive layout grid.
 * 
 * @param {Object} [props] Various properties for the grid.
 * @param {String} [props.align] Alignment of the grid. Either "left", or "right".
 * @param {Boolean} [props.fixed-columns] Whether each column of the grid should have a fixed width.
 * @param {JSX.Element[]} [children] Children for the grid.
 * @returns {JSX.Element} A grid.
 */
export const Grid = ({class: class_, 'fixed-columns': fixedColumns, align, ...rest}, children) => {
    if (align && !GRID_ALIGNS.includes(align.toLowerCase())) throw new Error(`Invalid alignment "${align}". Must be "left", or "right"`);
    let classes = 'mdc-layout-grid' + (fixedColumns ? ' mdc-layout-grid--fixed-column-width' : '') + (align ? ` mdc-layout-grid--align-${align}` : '') + (class_ ? ` ${class_}` : '');

    return <div class={classes} {...rest}>
        <div class="mdc-layout-grid__inner">
            {children}
        </div>
    </div>;
};

/**
 * A cell for the layout grid.
 * 
 * @param {Object} [props] Various properties for the cell.
 * @param {Number} [props.size] How many columns the cell should span.
 * @param {String} [props.size-device] The device for the cell's size. Either "desktop", "tablet", or "mobile".
 * @param {Number} [props.order] The ordering of the cell.
 * @param {String} [props.align] Where the cell is aligned to. Either "top", "middle", or "bottom".
 * @param {JSX.Element[]} [children] Children for the cell.
 * @returns {JSX.Element} A grid cell.
 */
export const GridCell = ({class: class_, size, 'size-device': sizeDevice, order, align, ...rest}, children) => {
    if (size && !SIZES.includes(size)) throw new Error(`Size ${size} is not in a range of 1...12.`);
    if (sizeDevice && !DEVICES.includes(sizeDevice.toLowerCase())) throw new Error(`Invalid device "${sizeDevice.toLowerCase()}". Must be "desktop", "tablet", or "mobile".`);
    if (order && !SIZES.includes(order)) throw new Error(`Order ${order} is not in a range of 1...12`);
    if (align && !POSITIONS.includes(align.toLowerCase())) throw new Error(`Invalid alignment "${align}". Must be "top", "middle", or "bottom".`);

    let classes = 'mdc-layout-grid__cell' + (size ? ` mdc-layout-grid__cell--span-${size}${sizeDevice ? `-${sizeDevice}` : ''}` : '');
    classes += (order ? ` mdc-layout-grid__cell--order-${order}` : '') + (align ? ` mdc-layout-grid__cell--align-${align}` : '') + (class_ ? ` ${class_}` : '');

    return <div class={classes} {...rest}>{children}</div>;
};