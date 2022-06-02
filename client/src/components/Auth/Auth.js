import React, { useState } from 'react'
import {Avatar,Button,Paper,Grid,Typography,Container} from '@material-ui/core';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {signin,signup} from '../../actions/auth';



const initState={
  firstName:'',lastName:'',email:'',password:'',confirmPassword:''
}



function Auth() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [formData,setFormData]=useState(initState);
    const classes=useStyles();
    const [showPassword,setShowPassword]=useState(false)
    const [isSignUp,setIsSignUp]=useState(false);
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(isSignUp){
        dispatch(signup(formData,navigate))
      }else{
        dispatch(signin(formData,navigate))
      }
    }
    const handleChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleShowPassword=()=>{
      setShowPassword((prev)=>!prev)
    }
    const switchMode=()=>{
      setIsSignUp((prev)=>!prev)
      setShowPassword(false);
    }
    // console.log(handleShowPassword);
    
  return (
    <Container component="main" maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography component='h1' variant='h5'>
          {!isSignUp?'Sign In':'Sign Up'}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half/>
                <Input name='lastName' label='Last Name' handleChange={handleChange} half/>
              </>
            )}
            <Input name='email' label='Email Address' handleChange={handleChange} type='email'/>
            <Input name='password' label='Password' handleChange={handleChange} type={!showPassword?'password':'text'} handleShowPassword={handleShowPassword}/>
            {isSignUp && <Input name='confirmPassword' label='Confirm Password' handleChange={handleChange} type='password'/>}
          </Grid>
          <Button type="submit" fullWidth variant='contained' color='primary' className={classes.submit}>
            {isSignUp?'Sign Up':'Sign In'}
          </Button>
          

          

          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>

                {isSignUp?'Already have an account? Sign In':'Dont have an account? Sign Up'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth
