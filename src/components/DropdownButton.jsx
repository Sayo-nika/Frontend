import { Button, Menu, MenuItem } from '@material-ui/core';
import React from 'react';

const DropdownButton = ({
  buttonProps = {},
  menuProps = {},
  data,
  onChange,
  initial = null
}) => {
  const [anchor, setAnchor] = React.useState(null);
  const [selection, setSelection] = React.useState(initial);

  const onOpen = ev => setAnchor(ev.currentTarget);
  const onClose = () => setAnchor(null);
  const onSelection = (index, value) => {
    setSelection(index);
    onChange(index, value);
    onClose();
  };

  return (
    <>
      <Button {...buttonProps} onClick={onOpen} />
      <Menu
        {...menuProps}
        anchorEl={anchor}
        open={!!anchor}
        keepMounted
        onClose={onClose}
      >
        {data.map((option, i) => {
          const value = typeof option === 'object' ? option.value : option;
          const text = typeof option === 'object' ? option.text : option;

          return (
            <MenuItem
              key={value || text}
              selected={i === selection}
              onClick={() => onSelection(i, value)}
            >
              {text}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default DropdownButton;
