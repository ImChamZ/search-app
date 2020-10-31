import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const SelectElement = ({
  name = 'select-element',
  menuItemList = [],
  onChangeCallback,
}) => (
  <FormControl>
    <InputLabel id={`${name}-label`} />
    <Select
      displayEmpty
      name={name}
      onChange={onChangeCallback}
      defaultValue=""
    >
      {menuItemList.map(({ key, value }) => (
        <MenuItem value={key}>{value}</MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default SelectElement;
