import React from 'react';
import TextField from '@material-ui/core/TextField';

const Text = ({
  name,
  input,
  fullWidth = true,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    {...input}
    {...custom}
    fullWidth={fullWidth}
    margin="dense"
  />
);

export default Text