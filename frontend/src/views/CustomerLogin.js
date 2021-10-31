/* eslint-disable no-unused-vars */
import * as React from 'react';
import  { useState } from "react"
import Cookies from 'js-cookie';
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import FloatingActionButtons from '../components/FloatingButton';
import CustomizedSnackbars from '../components/CustomizedSnackbars';
import AppBar from '../components/AppBar';
import withRoot from '../components/WithRoot';
import theme from '../components/theme'




function CustomerSignin() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loggedin,setLoggedin] = useState(false);
  const [user,setUser] = useState("");
  const [errAlert,setErrAlert] = useState("");
  const [message,setMessage] = useState("");


  async function login(e){
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const loginData={
      email: data.get('email'),
      password: data.get('password'),

    };
    
    try{
      setLoggedin(false)
      const hitback = await axios.post("http://localhost:5000/vendor/login",loginData,{
                withCredentials: true
            });
            console.log(hitback)
            if(hitback){
              
              setLoggedin(true)
              setErrAlert("success")
              setMessage("Welcome")
              setUser(hitback.data.vendor.firstName)
            }
            
    }
    catch(err){
      setUser("")
      setErrAlert("error")
      setLoggedin(true)
      setMessage("Invalid Credentials")
      console.log("in error")
      console.log(err)
  }
   
  }


  return (
    <ThemeProvider theme={theme}>
      { loggedin && <CustomizedSnackbars errAlert={errAlert}message={message} user={user} /> }
      <AppBar/>

      
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Vendor Log in
          </Typography>
          <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)} value={email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)} value={password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              
              </Grid>
              <Grid item>
                <Link href="/vendor/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
      <Link href="/customer/login" variant="body2">
      <FloatingActionButtons text="Login as Customer"/>
      </Link>
    </ThemeProvider>
  );
}

export default withRoot(CustomerSignin);
