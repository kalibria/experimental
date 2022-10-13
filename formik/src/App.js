import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';

const App = () =>{
  const formik = useFormik({
    initialValues:{
      login:'',
      password:'',
      email:''
    },
    onSubmit: (values) =>{
      alert(JSON.stringify(values))
    }
  })



  return (
    <React.Fragment >
      <h1>React Hook Form</h1>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <TextField id="outlined-basic" label="Login" variant="outlined" onChange={formik.handleChange} {...formik.getFieldProps('login')}/>
        <TextField id="outlined-basic" label="Password" variant="outlined" onChange={formik.handleChange} {...formik.getFieldProps('password')}/>
        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={formik.handleChange} {...formik.getFieldProps('email')}/>
        <Button variant="contained">Submit</Button>



      </Box>
    </React.Fragment>
    )


}

export default App;
