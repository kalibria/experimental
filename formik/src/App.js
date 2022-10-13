import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Formik, useField} from 'formik';



const MyTextInput = ({label, id, variant, ...props}) =>{
  const [field,meta] = useField(props)
  return(
    <TextField label={label} id={id} variant={variant} {...field} {...props}/>
  )
}



const App = () =>{

  return (
    <React.Fragment>
      <h1>React Hook Form</h1>
      <Formik initialValues={{login:'', password:'',email:''}} onSubmit={(values)=>{
  alert(JSON.stringify(values))
}}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <MyTextInput id="outlined-basic" label="Login" variant="outlined" name="login"/>
        <MyTextInput id="outlined-basic" label="Password" variant="outlined" name='password'/>
        <MyTextInput id="outlined-basic" label="Email" variant="outlined" name='email'/>


        <Button variant="contained">Submit</Button>



      </Box>
    </Formik>
    </React.Fragment>
    )


}

export default App;
