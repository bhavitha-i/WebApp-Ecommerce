import React, { Component } from "react";
import axios from "axios";
import RecipeReviewCard from "./RecipeReviewCard";
import Cookies from 'js-cookie';
import FloatingActionButtons from './FloatingButton';
import CustomizedSnackbars from './CustomizedSnackbars';
import BasicTable from "./BasicTable";


export default class VendorHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loggedin:false,
      errAlert:''

    };
  }
 
  async componentDidMount ()  {

    const Bearer = "Bearer "+ Cookies.get('token')
    let axiosConfig = {
     headers: {
         'Content-Type': 'application/json;charset=UTF-8',
         "Authorization" : Bearer
     }
   };
 
          if(!Cookies.get('token')){
          this.setState.loggedin = true
          this.state.errAlert = "error"
          this.state.message ="Only vendors can add products"
         
      }


    //   this.state.products = axios
    //   .get(`http://localhost:5000/product/all`,axiosConfig)
    //   .then(response => {
    //     console.log("response" + response.data);
    //     this.setState({ products: response.data });
    //   })
    //   .catch(error => {
    //     this.setState.loggedin = true
    // this.state.errAlert = "error"
    // this.state.message ="Only vendors can add products"
    // console.log("in error")
    // console.log(error)
    //   });
      try{
      
      const hitback =  await axios.get("http://localhost:5000/product/mine",axiosConfig, {
        withCredentials: true
        
    });
    console.log(hitback)
    this.setState({ products: hitback.data });
}catch(e){
       
     
    this.setState.loggedin = true
    this.state.errAlert = "error"
    this.state.message ="Only vendors can add products"
    console.log("in error")
    console.log(e)
}
  }
//   productList() {
//     return this.state.products.map(currentproduct => {
//       return <RecipeReviewCard product={currentproduct} />;
//     });
//   }
  render() {
  
      return(
         
    <div style={{ display: "inline-block" ,position:"relative",top:"50px",left:"110px"}}>
    <BasicTable products = {this.state.products} />
  </div>
  )
    
  }
}