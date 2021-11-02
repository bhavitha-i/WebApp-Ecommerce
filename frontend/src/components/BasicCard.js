import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  { useState , useEffect} from "react"

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
    const [address,setAddress]=useState(props.address)

    console.log(address)

    const onAdd = async (address) => {
        console.log("selected address:",address)
    }


    useEffect(() => {
      const fetchPlanetas = async () => {
          
          setAddress(props.address) // remove curly braces here
      };    
      fetchPlanetas()
  }, [props.address]);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {address.firstName}{bull}{address.lastName}
        </Typography>
     
        <Typography variant="body2">
          {address.street1}
          
         
        </Typography>
        <Typography variant="body2">
          {address.city}
          
         
        </Typography>
        <Typography variant="body2">
          {address.country}
         
        </Typography>
        <Typography variant="body2">
          {address.zipcode}
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onAdd(address)}>Select Address</Button>
      </CardActions>
    </Card>
  );
}
