import React from 'react';
import TextField from 'material-ui/TextField';

const Text = ({
  name,
  input,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    errorText={touched && error}
    {...input}
    {...custom}
    fullWidth={true}
    margin="normal"
  />
);

export default Text