/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import axios from "axios";
import RecipeReviewCard from "../components/RecipeReviewCard";
import Cookies from 'js-cookie';
import FloatingActionButtons from '../components/FloatingButton';
import CustomizedSnackbars from '../components/CustomizedSnackbars';
import BasicTable from "../components/BasicTable";
import CartTable from "../components/CartTable";


export default class CustomerCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
        oldCart:{},
      productsAll: [],
      tableProd:[],
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


      axios.get(`http://localhost:5000/product/all`,axiosConfig).then(response => {console.log("response" + response.data);
        this.setState({ productsAll: response.data });
        console.log(this.state.productsAll,"check")
        console.log(this.state.oldCart[0].productlist)

        for(var i =0;i<this.state.productsAll.length;i++){
    
            for(var j=0;j<this.state.oldCart[0].productlist.length;j++){
                
              if(this.state.productsAll[i]._id == this.state.oldCart[0].productlist[j].product){
                  var tempJson = {
                      "id":this.state.productsAll[i]._id,
                      "name": this.state.productsAll[i].name,
                      "photo": this.state.productsAll[i].photo,
                      "price": this.state.productsAll[i].price,
                      "quantity": this.state.oldCart[0].productlist[j].quantity,
                      "backQuantity":this.state.productsAll.quantity

                  }
                  this.setState({ tableProd: [...this.state.tableProd, tempJson] })

              }
              
            }
            console.log(this.state.tableProd,"tab")
        }

       
      })
      .catch(error => {
          console.log(error)
        
      });
      try{
      
      const hitback =  await axios.get("http://localhost:5000/customers/myCart",axiosConfig, {
        withCredentials: true
        
    });

    
    console.log(hitback)
    this.setState({ oldCart: hitback.data });
    console.log("after hitback assignmemnt")
    console.log(this.state.oldCart[0].productlist)
    
    console.log(this.state.productsAll)

    // 
    // this.setState({}) SET PRODTABLE DATA HERE
}catch(e){
       
     
    this.setState.loggedin = true
    this.state.errAlert = "error"
    this.state.message ="Only vendors can add products"
    console.log("in error")
    console.log(e)
}
console.log("before for",this.state.productsAll )




  }

  render() {
      
  
      return(
         
    <div style={{ display: "inline-block" ,position:"relative",top:"50px",left:"110px"}}>
    <CartTable products = {this.state.tableProd} />
  </div>
  )
    
  }
}