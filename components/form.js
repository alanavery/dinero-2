import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Cleave from 'cleave.js/react';

const FormTemplate = ({ fields, handleSubmit }) => {
  const initialValues = {};
  const validationSchema = {};

  const CurrencyInput = ({ id, form: { values } }) => (
    <Cleave
      options={{
        numeral: true,
        signBeforePrefix: true,
        prefix: '$',
        rawValueTrimPrefix: true,
      }}
      onChange={(event) => (values[id] = Number(event.target.rawValue))}
    />
  );

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
        <Form>
          {fields.map(({ id, label, type }) => (
            <div className="form-control" key={id}>
              {type === 'boolean' ? (
                <label>
                  <Field type="checkbox" name={id} />
                  {label}
                </label>
              ) : (
                <>
                  <label htmlFor={id}>{label}</label>
                  <Field type="text" id={id} name={id} component={type === 'currency' ? CurrencyInput : null} />
                </>
              )}
              {errors[id] && touched[id] ? <div>{errors[id]}</div> : null}
            </div>
          ))}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormTemplate;
