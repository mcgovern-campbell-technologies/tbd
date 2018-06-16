import React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const Dropdown = ({
  name,
  label,
  input,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl fullWidth={true}>
    <InputLabel htmlFor={name}>{ label }</InputLabel>
    <Select
      {...input}
      children={children}
      {...custom}
      inputProps={{id: name}}
    />
  </FormControl>
);

export default Dropdown;