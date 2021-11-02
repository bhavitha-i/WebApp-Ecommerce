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
  const [cartItems, setCartItems] = useState(props.oldCart[0].productlist);
  const [errAlert,setErrAlert] = useState("");
  const [message,setMessage] = useState("");
  const [loggedin,setLoggedin] = useState(false);
  

  console.log(props.product)
  useEffect(() => {
    const fetchPlanetas = async () => {
        
        setCartItems(props.oldCart[0].productlist) // remove curly braces here
    };    
    fetchPlanetas()
}, [props.oldCart[0].productlists]);


  const onAdd = async (product) => {
    console.log("in Add",product)
    
   console.log("in add function")
    const exist = cartItems.find((x) => x.product === product._id);
    
    if (exist) {
      console.log(product._id,exist.product,"in equation")
      console.log(exist.quantity,"quan")
        if(exist.quantity + 1 > product.quantity){
            alert('reached the maximum order limit')
            return
        }
        
      setCartItems(
        cartItems.map((x) =>
          x.product === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
      console.log("after set",exist.quantity )
    } else {
      console.log("not exist")
      const p_id = product._id
      setCartItems([...cartItems, {product:p_id, quantity: 1 }]);
    }

    

    // for(var i=0;i<cartItems.length;i++){
    //   console.log(cartItems[i],"inloop")
    // }

   



  //   const Bearer = "Bearer "+ Cookies.get('token')
  //   console.log(Bearer)
  //   let axiosConfig = {
  //     headers: {
  //         'Content-Type': 'application/json;charset=UTF-8',
  //         "Authorization" : Bearer
  //     }
  //   };

  //   if(!Cookies.get('token')){
  //     setErrAlert("error")
  //     setMessage("Only vendors can add products")

     
  // }
  console.log(props.oldCart)
  console.log(cartItems,"after add")

//   axios.patch(`http://localhost:5000/cart/mine`,jusJson,axiosConfig,{
//     withCredentials: true
// }).then(response =>{


// console.log("customer updated")

//     this.setState({item:response.data})
//     this.setState({loggedin:true})
//     this.setState({errAlert:"success"})
//     this.setState({message:"changes updated for"})
// }).catch(error => {
//     this.setState({loggedin:true})
//     this.setState({errAlert:"error"})
//     this.setState({message:"Something went wrong"})
//     console.log("In error");
//     console.log(error);
//   });;





  };

  // console.log(base64Icon)

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
      {console.log(props.product,"in diuv")}
      {console.log(cartItems,"in duvi")}
        <Button style={styles.CardButton} size ="small" variant="outlined" color="secondary" onClick={() => onAdd(props.product)}>Add to Cart</Button>
        
      </CardActions>
    </Card>
  );
}
