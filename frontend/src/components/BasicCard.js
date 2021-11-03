import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  { useState , useEffect} from "react"
import Cookies from 'js-cookie';
import { useHistory } from 'react-router';

import axios from "axios";
import styles from '../assets/styles';

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
    const [cart,setCart] = useState()
    const [oldCart,setOldCart] = useState(props.oldCart)
    const [order,setOrder]=useState()
    const [disabledStatus,setDisabledStatus]=useState(false)


    const history = useHistory();

    console.log(address)
    console.log(oldCart,"in basiccard")

    function selectedAddress(add){
      props.selection(add)
    }

  //   const onAdd = async (address) => {
  //       console.log("selected address:",address)

  //       const Bearer = "Bearer "+ Cookies.get('token')
  //   console.log(Bearer)
  //   let axiosConfig = {
  //     headers: {
  //         'Content-Type': 'application/json;charset=UTF-8',
  //         "Authorization" : Bearer
  //     }
  //   };
    
  //   console.log(newO,"newO")
  //   const hitback =  await axios.get("http://localhost:5000/cart/mine",axiosConfig, {
  //     withCredentials: true
      
  // });
  // console.log(hitback.data,"in basic card final try")

  // var newO ={
  //   cart:hitback.data._id,
  //   price:hitback.data.price,
  //   productlist:hitback.data.productlist,
  //   address:address
  // }
  // console.log(newO,"after assign")

  //   axios.post(`http://localhost:5000/order/add`,newO,axiosConfig,{
  //     withCredentials: true }).then(response =>{ console.log(response.data,"from api")
       
  //      var o=response.data
  //      console.log(o,"Order placed")
  //      setOrder(o)
  //    }).catch(error => {console.log(error)})

  //   }


    useEffect(() => {
      const fetchPlanetas = async () => {
          setOldCart(props.oldCart)
          setAddress(props.address) // remove curly braces here
      };    
      fetchPlanetas()
  }, [props.address,props.oldCart]);
  return (
    <Card sx={{ minWidth: 300, maxWidth:400, maxHeight:300, minHeight: 150 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} variant="h6" style={styles.textTransformNone} gutterBottom>
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
      <CardActions style={{justifyContent: "center"}}>
        <Button size="small"  variant="outlined" onClick={() => selectedAddress(address)}>Select Address</Button>
      </CardActions>
    </Card>
  );
}
