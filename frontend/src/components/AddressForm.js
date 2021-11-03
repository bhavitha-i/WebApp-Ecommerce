import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import  { useState , useEffect} from "react"
import BasicCard from './BasicCard';
import { padding } from '@mui/system';
import styles from '../assets/styles';
import { Button, Container } from '@mui/material';

export default function AddressForm(props) {

    const [address,setAddress]=useState(props.address)
    const [oldCart,setOldCart]=useState(props.oldCart)

    const [addresSel, setAddressSel] = useState()

    console.log(oldCart,"in AddressForm")
    console.log(address,"in AddressForm")


    function selection(sel){
      setAddressSel(sel)
      props.setselAddress(sel)
      props.handleNext()
      console.log(props," ------ add indose")
    }

    useEffect(() => {
      const fetchPlanetas = async () => {
          setOldCart(props.oldCart)
          setAddress(props.address) // remove curly braces here
      };    
      fetchPlanetas()

      if(addresSel){
        props.setselAddress(addresSel)
        props.handleNext()
      }
  }, [props.address,props.oldCart]);



  return (
    <React.Fragment>
      <Typography variant="h6" style={styles.titleCheckout} gutterBottom>
       Select Shipping address
      </Typography>
      <Container>
        <Grid container spacing={2} sx={{alignItems: "center", justifyContent: "center"}}>
          {address.map(currentAddress => (
              <Grid item key={currentAddress} xs={3} style={styles.CardGridAddress}>
                  <BasicCard oldCart={oldCart} address={currentAddress} selection={selection} />
              </Grid>
            ))}
        </Grid>
    </Container>
      
    </React.Fragment>
  );
}