import { useFormik } from 'formik';
import * as Yup from 'yup';
import Cleave from 'cleave.js/react';
import { FormControl, TextField, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';

const FormTemplate = ({ fields, handleSubmit }) => {
  const initialValues = {};
  const validationSchema = {};

  fields.forEach((field) => {
    switch (field.id) {
      case 'text':
        initialValues[field.id] = '';
        validationSchema[field.id] = Yup.string().required('Required');
        break;
      case 'currency':
        initialValues[field.id] = '';
        validationSchema[field.id] = Yup.number().required('Required');
        break;
      case 'boolean':
        initialValues[field.id] = false;
        validationSchema[field.id] = Yup.boolean();
        break;
    }
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {fields.map((field) => (
        <FormControl key={field.id}>
          {field.type === 'text' && <TextField id={field.id} name={field.id} label={field.label} value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched[field.id] && Boolean(formik.errors[field.id])} variant="outlined" />}

          {field.type === 'currency' && (
            <>
              <InputLabel htmlFor={field.id}>{field.label}</InputLabel>
              <OutlinedInput id={field.id} label={field.label} startAdornment={<InputAdornment position="start">$</InputAdornment>} />
            </>
          )}
        </FormControl>
      ))}
    </form>
  );
};

export default FormTemplate;
