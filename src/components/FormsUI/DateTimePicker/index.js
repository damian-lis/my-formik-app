import React from 'react';
import { TextField } from '@material-ui/core';
import { useField } from 'formik';

const DateTimePicker = ({ name, ...restProps }) => {
  const [field, meta] = useField(name);

  const configDateTimePicker = {
    ...field,
    ...restProps,
    type: 'date',
    variant: 'outlined',
    fullWidth: true,
    InputLabelProps: {
      shrink: true
    }
  };

  if (meta && meta.touched && meta.error) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = meta.error;
  }

  return <TextField {...configDateTimePicker} />;
};

export default DateTimePicker;
