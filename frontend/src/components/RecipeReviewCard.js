import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import trimWords from 'trim-words';
import styles from '../assets/styles';
import  { useState , useEffect} from "react"
import Cookies from 'js-cookie';

import axios from "axios";

export default function RecipeReviewCard(props) {
  var base64Icon = `${props.product.photo}`;
  // const [cartItems, setCartItems] = useState(props.oldCart[0].productlist);
  const [errAlert,setErrAlert] = useState("");
  const [message,setMessage] = useState("");
  const [loggedin,setLoggedin] = useState(false);
  

  console.log(props.product)
  useEffect(() => {
    const fetchPlanetas = async () => {
        
        // setCartItems(props.oldCart[0].productlist) // remove curly braces here
    };    
    fetchPlanetas()
}, []);


  const onAdd = async (product) => {

  //   console.log("in Add",product)  
  //  console.log("in add function")
  //   const exist = cartItems.find((x) => x.product === product._id);
    
  //   if (exist) {
  //     console.log(product._id,exist.product,"in equation")
  //     console.log(exist.quantity,"quan")
  //       if(exist.quantity + 1 > product.quantity){
  //           alert('reached the maximum order limit')
  //           return
  //       }
        
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.product === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
  //       )
  //     );
  //     console.log("after set",exist.quantity )
  //   } else {
  //     console.log("not exist")
  //     const p_id = product._id
  //     setCartItems([...cartItems, {product:p_id, quantity: 1 }]);
  //     var trail =[]
      
  //     console.log(product._id,"in not exist")
  //     for(var j=0;j<cartItems.length;j++){
  //       console.log("EHHEHEHE");
                  
        
  //           var tempJson = {
  //               "product":cartItems[j].product,
  //               "quantity": cartItems[j].quantity
        
  
  //           }
  //           trail.push(tempJson)
            
  
  //     }
  //     var selectedProd = {
  //       "product":product._id,
  //       "quantity": 1

  //     }
  //     trail.push(selectedProd)

  //     var patchData = {
  //       "productlist":trail
  //     }

  //     console.log(patchData,"trails")

  //   const Bearer = "Bearer "+ Cookies.get('token')
  //   console.log(Bearer)
  //   let axiosConfig = {
  //     headers: {
  //         'Content-Type': 'application/json;charset=UTF-8',
  //         "Authorization" : Bearer
  //     }
  //   };

  //     axios.patch(`http://localhost:5000/cart/mine`,patchData,axiosConfig,{
  //       withCredentials: true }).then(response =>{ console.log(response.data.productlist,"from api")}).catch(error => {console.log(error)})

  //   }



  // console.log(props.oldCart)
  // console.log(cartItems,"after add")

        var selectedProd = {
          "product":product._id,
        }

      const Bearer = "Bearer "+ Cookies.get('token')
      let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Authorization" : Bearer
        }
      };

      axios.patch(`http://localhost:5000/cart/addProduct`,selectedProd,axiosConfig,{
        withCredentials: true })
        .then(response =>{ 
          console.log(response.data.productlist,"from api")})
          .catch(error => {console.log(error)})

    }
  


  return (
    <Card sx={{ minWidth:250, maxWidth:275, maxHeight:300 }}>
      <CardMedia
        component="img"
        height="140"
        image={base64Icon}
        alt="product Image"
      />
      
      <CardContent  sx={{ flexGrow: 1 }}>
        <Typography gutterBottom >
          <Link underline="none" href={`/productS/${props.product._id}`} variant="h6" color="inherit" >
            {trimWords(props.product.name, 3, '...')}
          </Link>
        </Typography>
        <Typography variant="h5" color="secondary" style={styles.ProductPrice}>
         $ {props.product.price}
        </Typography>
      </CardContent>
      <CardActions>

        <Button style={styles.CardButton} size ="small" variant="outlined" color="secondary" onClick={() => onAdd(props.product)}>Add to Cart</Button>
        
      </CardActions>
    </Card>
  );
}