import React from 'react';
import TextField from '@material-ui/core/TextField';


const Date = ({
  name,
  input,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    type="date"
    {...input}
    {...custom}
    fullWidth={true}
    margin="normal"
    InputLabelProps={{
      shrink: true,
    }}
  />
)

export default Date;