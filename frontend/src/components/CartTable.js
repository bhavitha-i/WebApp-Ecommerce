import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Link from '@mui/material/Link';
import  { useState , useEffect} from "react"
import Cookies from 'js-cookie';
import axios from "axios";
import CustomizedSnackbars from './CustomizedSnackbars';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];



export default function CartTable(props) {

  function refreshPage() {
    setTimeout(()=>{
        window.location.reload(true);
    }, 1000);
    console.log('page to reload')
}



  const [prod,setProd] = useState("");
  const [errAlert,setErrAlert] = useState("");
  const [message,setMessage] = useState("");
  const [loggedin,setLoggedin] = useState(false);
  const [cartItems, setCartItems] = useState(props.products);
  const itemsPrice = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);
 
    
//   React.useEffect(() => {
//       setCartItems(props.products);
//   }, [props.products])

useEffect(() => {
    const fetchPlanetas = async () => {
        
        setCartItems(props.products) // remove curly braces here
    };    
    fetchPlanetas()
}, [props.products]);
  
console.log(cartItems,'begin')

  const onAdd = (product) => {
   
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
        if(exist.quantity + 1 > product.backQuantity){
            alert('reached the maximum order limit')
            return
        }
        
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    console.log(product.quantity)
  };
  const onRemove = (product) => {
    console.log("on remove")
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };


  async function updateCart(cartItems){
    console.log(cartItems,"place order")
    var trail=[]
    for(var j=0;j<cartItems.length;j++){
      console.log("EHHEHEHE");
                
      
          var tempJson = {
              "product":cartItems[j].id,
              "quantity": cartItems[j].quantity
      

          }
          trail.push(tempJson)
          

      
      
    }

  

    var patchData = {
      "price":itemsPrice,
      "productlist":trail
    }
    console.log(patchData,'prodlist from ct')
    const Bearer = "Bearer "+ Cookies.get('token')
    console.log(Bearer)
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Authorization" : Bearer
      }
    };

      axios.patch(`http://localhost:5000/cart/mine`,patchData,axiosConfig,{
     withCredentials: true }).then(response =>{ 
      console.log("in cart Table") 
      console.log(response.data.price,"from api")}).catch(error => {console.log(error)})
      


    
  }


 

  async function delProd(product){
   
    setLoggedin(false)
    const Bearer = "Bearer "+ Cookies.get('token')
    console.log(Bearer)
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Authorization" : Bearer
      }
    };

    if(!Cookies.get('token')){
      setErrAlert("error")
      setMessage("Only vendors can add products")

     
  }
    try{
      const hitback =  await axios.delete(`http://localhost:5000/product/${product._id}`,axiosConfig, {
        withCredentials: true
        
    });
    console.log(hitback.data)
    // this.setState({ products: hitback.data });
    setErrAlert("success")
    setMessage("Item deleted")
    setProd(product.name)
    // setProd(hitback.data.product.name)
    setLoggedin(true)
    refreshPage()
   
    
    

    }catch(e){
      setErrAlert("error")
      setLoggedin(true)
      setMessage("Something went wrong")
      console.log("in error")
      console.log(e)
    }

 


  }
 
  return (
    <div> { loggedin && <CustomizedSnackbars errAlert={errAlert}message={message} user={prod}/> }
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>

            
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Product&nbsp;</TableCell>
            <TableCell align="right">Price&nbsp;</TableCell>
            <TableCell align="right">Action&nbsp;</TableCell>
            <TableCell align="right">quantity&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {console.log(cartItems,"in end")}
          {cartItems.map((product) => (
          
            <TableRow
              key={product._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            
              <TableCell align="right">Image </TableCell>
              <TableCell align="right">{product.name}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">
              <div className="col-2">
              <button onClick={() => onRemove(product)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(product)} className="add">
                +
              </button>
            </div>
            </TableCell>

              <TableCell align="right"> {product.quantity}</TableCell>
              
              
              
            
           
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div>
        
        Total price:${itemsPrice}

        <button onClick={() => updateCart(cartItems)} className="remove">
                Save Cart
              </button>
              <Link href="/customer/checkout" variant="body2">
              <button className="remove">
               Checkout
              </button>
              </Link>
        
    </div>
    </div>
  );
}
