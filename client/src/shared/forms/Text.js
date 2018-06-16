import React from 'react';
import TextField from '@material-ui/core/TextField';

const Text = ({
  name,
  input,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    {...input}
    {...custom}
    fullWidth={true}
    margin="normal"
  />
);

export default Text