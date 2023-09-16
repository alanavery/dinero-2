import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Cleave from 'cleave.js/react';
import { TextField, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';

const FormTemplate = ({ fields, handleSubmit }) => {
  const initialValues = {};
  const validationSchema = {};

  const TextInput = (props) => <TextField {...props} />;
  const CurrencyInput = (props) => (
    <>
      <InputLabel />
      <OutlinedInput {...props} />
    </>
  );

  // const CurrencyInput = ({ id, form: { values } }) => (
  //   <Cleave
  //     options={{
  //       numeral: true,
  //       signBeforePrefix: true,
  //       prefix: '$',
  //       rawValueTrimPrefix: true,
  //     }}
  //     onChange={(event) => (values[id] = Number(event.target.rawValue))}
  //   />
  // );

  fields.forEach(({ id, type }) => {
    if (type === 'boolean') {
      initialValues[id] = false;
      validationSchema[id] = Yup.boolean();
    } else {
      initialValues[id] = '';
      if (type === 'currency') {
        validationSchema[id] = Yup.number().required('Required');
      } else {
        validationSchema[id] = Yup.string().required('Required');
      }
    }
  });

  return (
    <Formik initialValues={initialValues} validationSchema={Yup.object().shape(validationSchema)} onSubmit={(values) => handleSubmit(values)}>
      {({ errors, touched }) => (
        <Form className="form">
          {fields.map(({ id, label, type }) => (
            <div className={`form__control control--${id}`} key={id}>
              {type === 'boolean' && (
                <label>
                  <Field type="checkbox" name={id} />
                  {label}
                </label>
              )}

              {type === 'text' && <Field type="text" name={id} id="outlined-basic" label={label} as={TextInput} />}

              {type === 'currency' && <Field type="text" name={id} id="outlined-adornment-amount" label={label} startAdornment={<InputAdornment position="start">$</InputAdornment>} as={CurrencyInput} />}

              {errors[id] && touched[id] ? <div className="form__error">{errors[id]}</div> : null}
            </div>
          ))}
          <button type="submit" className="button">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormTemplate;
