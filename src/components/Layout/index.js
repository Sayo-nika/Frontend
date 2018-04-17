import {h} from 'hyperapp';
import './Layout.sass';

const SIZES = Array.apply(null, Array(11 + 1)).map((_, n) => ++n);
const DEVICES = ['desktop', 'tablet', 'mobile'];
const POSITIONS = ['top', 'middle', 'bottom'];
const GRID_ALIGNS = ['left', 'right'];

export const Grid = ({class: class_, 'fixed-columns': fixedColumns, align, ...rest}, children) => {
    if (align && !GRID_ALIGNS.includes(align.toLowerCase())) throw new Error(`Invalid alignment "${align}". Must be "left", or "right"`);
    let classes = 'mdc-layout-grid' + (fixedColumns ? ' mdc-layout-grid--fixed-column-width' : '') + (align ? ` mdc-layout-grid--align-${align}` : '') + (class_ ? ` ${class_}` : '');

    return <div class={classes} {...rest}>
        <div class="mdc-layout-grid__inner">
            {children}
        </div>
    </div>;
};

export const GridCell = ({class: class_, size, 'size-device': sizeDevice, order, align, ...rest}, children) => {
    if (size && !SIZES.includes(size)) throw new Error(`Size ${size} is not in a range of 1...12.`);
    if (sizeDevice && !DEVICES.includes(sizeDevice.toLowerCase())) throw new Error(`Invalid device "${sizeDevice.toLowerCase()}". Must be "desktop", "tablet", or "mobile".`);
    if (order && !SIZES.includes(order)) throw new Error(`Order ${order} is not in a range of 1...12`);
    if (align && !POSITIONS.includes(align.toLowerCase())) throw new Error(`Invalid alignment "${align}". Must be "top", "middle", or "bottom".`);

    let classes = 'mdc-layout-grid__cell' + (size ? ` mdc-layout-grid__cell--span-${size}${sizeDevice ? `-${sizeDevice}` : ''}` : '');
    classes += (order ? ` mdc-layout-grid__cell--order-${order}` : '') + (align ? ` mdc-layout-grid__cell--align-${align}` : '') + (class_ ? ` ${class_}` : '');

    return <div class={classes} {...rest}>{children}</div>;
};