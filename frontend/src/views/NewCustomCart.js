import Main from './../components/Main';
import Basket from './../components/Basket';
import data from './data';
import axios from "axios";
import { useState, useEffect } from "react"
import Cookies from 'js-cookie';
function NewCustomerCart() {
    const [products,setProducts] = useState("");
  console.log(data)
  const [cartItems, setCartItems] = useState([]);


  useEffect(async () => {
    if(!Cookies.get('token')){
        console.log("login as customer")
    }

    const Bearer = "Bearer "+ Cookies.get('token')
    let axiosConfig = {
     headers: {
         'Content-Type': 'application/json;charset=UTF-8',
         "Authorization" : Bearer
     }
   }
   try{
    const hitback = await axios.get("http://localhost:5000/product/all",axiosConfig, {
        withCredentials: true
        
    });
    console.log(hitback,"check")
    
}catch(e){
        console.log(e,"check")
    }




});


  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div>
      
      <div className="row">
        <Main products={products} onAdd={onAdd}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div>
    </div>
  );
}

export default NewCustomerCart;