import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik, useField } from 'formik';
import * as Yup from 'yup';
import './App.css';

const MyTextInput = ({ label, id, variant, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <TextField
        label={label}
        id={id}
        variant={variant}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const App = () => {
  return (
    <React.Fragment>
      <h1>React Hook Form</h1>
      <Formik
        initialValues={{ login: '', password: '', email: '' }}
        validationSchema={Yup.object({
          login: Yup.string()
            .max(10, 'Must be 10 characters or less')
            .required('Required'),
          password: Yup.string()
            // .min(3, 'Must be at least 3 characters')
            .max(10, 'Must be 10 characters or less ')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <MyTextInput
            id="outlined-basic"
            label="Login"
            variant="outlined"
            name="login"
          />
          <MyTextInput
            id="outlined-basic"
            label="Password"
            variant="outlined"
            name="password"
          />
          <MyTextInput
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
          />

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </Formik>
    </React.Fragment>
  );
};

export default App;
