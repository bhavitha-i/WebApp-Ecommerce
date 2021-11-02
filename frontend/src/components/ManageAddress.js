import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import withRoot from './WithRoot';
import { useState, useEffect } from "react"
import axios from "axios";
import strings from '../assets/strings';
import CustomizedSnackbars from './CustomizedSnackbars';
import Cookies from 'js-cookie';






const AddAddress = (callback) => {
    const [inputs, setInputs] = useState({});
    const [callFlag,setCallFlag] = useState(false);
    const [user,setUser] = useState("");
    const [errAlert,setErrAlert] = useState("");
    const [message,setMessage] = useState("");

    useEffect(() => {
        if(!Cookies.get('token')){
            setCallFlag(true)
            setErrAlert("error")
            setMessage("Invalid authentication")
        }
    },[]);


    async function addAddress(event){
        if (event) {
          event.preventDefault();
          const addressData=inputs;
        console.log(addressData,"  address")
          const Bearer = "Bearer "+ Cookies.get('token')
          let axiosConfig = {
           headers: {
               'Content-Type': 'application/json;charset=UTF-8',
               "Authorization" : Bearer
           }
        };
    
          try{
            setCallFlag(false)
            const hitback = await axios.post("http://localhost:5000/address/add",addressData,axiosConfig,{
                      withCredentials: true
                  });
                  console.log(hitback)
                  if(hitback){
                    
                    setCallFlag(true)
                    setErrAlert("success")
                    setMessage("Welcome")
                  }
                  
          }
          catch(err){
            setUser("")
            setErrAlert("error")
            setCallFlag(true)
            setMessage("Invalid Data")
            console.log("in error")
            console.log(err)
        }
    
        }
      }

      const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
      }

  return (
    <ThemeProvider theme={theme}>
          { callFlag && <CustomizedSnackbars errAlert={errAlert} message={message} user={user} /> }
    <Container component="main" maxWidth="xs" >
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          component="form"  onSubmit={addAddress}
        >
    <Typography variant="h6" gutterBottom component="h1">
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label={strings.Common.firstName}
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label={strings.Common.lastName}
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="street1"
            name="street1"
            label={strings.Address.street1}
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="street2"
            name="street2"
            label={strings.Address.street2}
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={handleInputChange}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label={strings.Address.city}
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={handleInputChange}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="state"
            name="state"
            label={strings.Address.state}
            fullWidth
            variant="standard"
            onChange={handleInputChange}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zipcode"
            name="zipcode"
            label={strings.Address.zip}
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={handleInputChange}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label={strings.Address.country}
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={handleInputChange}

          />
        </Grid>
        <Grid item xs={12}>
        <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {strings.Address.addAddress}
        </Button>
        </Grid>
      </Grid>
      </Box>
      </Container>
      </ThemeProvider>
  );
}

export default withRoot(AddAddress);