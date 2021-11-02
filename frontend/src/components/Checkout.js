import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import  { useState , useEffect} from "react"
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import Cookies from 'js-cookie';
import axios from "axios";


const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm  />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function Checkout(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [address,setAddress]=useState(props.add)
  const [oldCart,setOldCart]=useState(props.cart)

  useEffect( async () => {
    const fetchPlanetas = async () => {

      const Bearer = "Bearer "+ Cookies.get('token')
      console.log(Bearer)
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Authorization" : Bearer
        }
      };

      axios.get("http://localhost:5000/cart/mine",axiosConfig,{
        withCredentials: true
    }).then(response =>{

    console.log(response.data,"addres")
   setOldCart(response.data)
    console.log(oldCart,"set")
    }).catch(error => {
      console.log("in checkout error")
        this.setState({loggedin:true})
        this.setState({errAlert:"error"})
        this.setState({message:"Something went wrong"})
        console.log(error);
      });


        
        setAddress(props.add) // remove curly braces here
    };    
    fetchPlanetas()
}, [props.add]);

console.log(oldCart,"In checkout")

console.log(address,"In  checkout")

  



  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
       
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <AddressForm address ={address} oldCart={oldCart}/>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}
<Link href="/customer/payment">
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Next
                  </Button>
                  </Link>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        
      </Container>
    </ThemeProvider>
  );
}