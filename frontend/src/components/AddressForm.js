import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import  { useState , useEffect} from "react"
import BasicCard from './BasicCard';
import { padding } from '@mui/system';

export default function AddressForm(props) {

    const [address,setAddress]=useState(props.address)

    console.log(address)
    useEffect(() => {
      const fetchPlanetas = async () => {
          
          setAddress(props.address) // remove curly braces here
      };    
      fetchPlanetas()
  }, [props.address]);


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       Select Shipping address
      </Typography>
 
      {address.map(currentAddress => (
               <Grid container spacing={7} >
              <Grid item key={currentAddress} xs={3} >
                  <BasicCard address={currentAddress} />
              </Grid>
              </Grid>
            ))}
      
    </React.Fragment>
  );
}