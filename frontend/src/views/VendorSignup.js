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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FloatingActionButtons from '../components/FloatingButton';
import CustomizedSnackbars from '../components/CustomizedSnackbars';
import AppBar from '../components/AppBar';
import withRoot from '../components/WithRoot';
import theme from '../components/theme'
import strings from '../assets/strings';



function VendorSignUp() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [firstname,setFirstname] = useState("");
  const [lastname,setLastname] = useState("");
  const [age,setAge] = useState("");
  const [contact,setContact] = useState("");

  const [loggedin,setLoggedin] = useState(false);
  const [user,setUser] = useState("");
  const [errAlert,setErrAlert] = useState("");
  const [message,setMessage] = useState("");



  async function signup(e){
    e.preventDefault();
    // const data = new FormData(e.currentTarget);
    const signupData={firstname,lastname,email,age,password,contact};
    
    try{
      setLoggedin(false)
      const hitback = await axios.post("http://localhost:5000/vendor/signup",signupData,{
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
      setMessage("Invalid Data")
      console.log("in error")
      console.log(err)
  }
   
  }

  return (
    <ThemeProvider theme={theme}>

    <AppBar/>
      <Container component="main" maxWidth="xs">
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
            {strings.SignUp.Labels.vendorSignup}
          </Typography>
          <Box component="form" onSubmit={signup} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label={strings.SignUp.Labels.firstName}
                  autoFocus
                  onChange={(e) => setFirstname(e.target.value)} value={firstname}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label={strings.SignUp.Labels.lastName}
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => setLastname(e.target.value)} value={lastname}
                />
              </Grid>
        
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label={strings.SignUp.Labels.email}
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)} value={email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label={strings.SignUp.Labels.password}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)} value={password}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="age"
                  label={strings.SignUp.Labels.age}
                  name="age"
                  onChange={(e) => setAge(e.target.value)} value={age}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="contact"
                  label={strings.SignUp.Labels.contact}
                  name="contact"
                  autoComplete="contact"
                  onChange={(e) => setContact(e.target.value)} value={contact}
                />
              </Grid>
            
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {strings.Common.signup}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/vendor/login" variant="body2">
                  {strings.SignUp.Labels.hasAccount}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
      <Link href="/customer/signup" variant="body2">
      <FloatingActionButtons text={strings.SignUp.Labels.asCustomeSignup}/>
      </Link>
    </ThemeProvider>
  );
}

export default withRoot(VendorSignUp);