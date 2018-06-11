import React from 'react';
import Select from '@material-ui/core/Select';

const Dropdown = (
  { input, label, meta: { touched, error }, children, ...custom },
) => (
  <Select
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
    autoWidth={true}
  />
);

export default Dropdown;