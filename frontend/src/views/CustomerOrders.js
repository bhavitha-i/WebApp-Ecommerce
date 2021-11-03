import React, { Component } from "react";
import axios from "axios";
import RecipeReviewCard from "../components/RecipeReviewCard";
import Grid from '@mui/material/Grid';
import AppBarCus from "../components/AppBarCustomer";
import Container from '@mui/material/Container';
import theme from "../components/theme";
import { ThemeProvider } from '@material-ui/core/styles';
import withRoot from '../components/WithRoot';
import { CssBaseline } from "@mui/material";
import Cookies from 'js-cookie';
import OrderCard from "../components/OrderCard";





class CustomerOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      oldCart:{},
      orders:[],
      productsAll: [],
      tableProd:[],
      loggedin:false,
      errAlert:'',
      notify:0
    };
  }

  componentDidMount () {
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


    axios
      .get(`http://localhost:5000/product/all`)
      .then(response => {
        console.log("response" + response.data);
        this.setState({ products: response.data });
        this.setState({ productsAll: response.data });
        

        console.log(this.state.products,"from customer orders")
        console.log(this.state.orders[0].productlist,"orders from customer orders")


    //     for(var i =0;i<this.state.productsAll.length;i++){
    
    //       for(var j=0;j<this.state.oldCart[0].productlist.length;j++){
              
    //         if(this.state.productsAll[i]._id == this.state.oldCart[0].productlist[j].product){
    //             var tempJson = {
    //                 "id":this.state.productsAll[i]._id,
    //                 "name": this.state.productsAll[i].name,
    //                 "photo": this.state.productsAll[i].photo,
    //                 "price": this.state.productsAll[i].price,
    //                 "quantity": this.state.oldCart[0].productlist[j].quantity,
    //                 "backQuantity":this.state.productsAll.quantity

    //             }
    //             this.setState({ tableProd: [...this.state.tableProd, tempJson] })

    //         }
            
    //       }
    //       console.log(this.state.tableProd,"tab")
    //   }
    

    for(var i =0;i<this.state.orders.length;i++){
            
        for(var j =0;j<this.state.orders[i].productlist.length;j++){
            console.log(this.state.orders[i].productlist[j].product,"sep prod from customer orders")
            for(var k=0;k<this.state.products.length;k++){
                if(this.state.products[k]._id == this.state.orders[i].productlist[j].product){
                    var tempJson = {
                        order_id:this.state.orders[i]._id,
                                    item:{
                                        "id":this.state.products[k]._id,
                                        "name": this.state.products[k].name,
                                        "photo": this.state.products[k].photo,
                                        "price": this.state.products[k].price,
                                        "owner": this.state.products[k].owner,
                                        "status": this.state.orders[i].productlist[j].status,
                                        "quantity":this.state.orders[i].productlist[j].quantity
                                    }
                    
                                    }
                                    this.setState({ tableProd: [...this.state.tableProd, tempJson] })

                }
            }
        }

        console.log(this.state.tableProd,"dump from customer orders")
    }
      })
      .catch(error => {
        console.log(error);
      });






      try{
      
        axios.get("http://localhost:5000/customers/myorders",axiosConfig, {
        withCredentials: true
        
    }).then(resposne =>{
      this.setState({ orders: resposne.data });
      console.log(this.state.orders,"after api")
    //   this.setState({notify: this.state.oldCart[0].productlist.length})

    //   console.log(this.state.oldCart[0].productlist)
    })
  
      
      
  
      // 
      // this.setState({}) SET PRODTABLE DATA HERE
  }catch(e){
         
       
      this.setState.loggedin = true
      this.state.errAlert = "error"
      this.state.message ="Only vendors can add products"
      console.log("in error")
      console.log(e)
  }
  }


  render() {
      return(
  //   <div style={{ display: "inline-block" ,position:"relative",top:"50px",left:"110px"}}>
  //   {this.state.products.map(currentproduct => (
  //     <div style={{ display: "inline-block", margin: "20px" }}>
  //       <RecipeReviewCard product={currentproduct} />
  //     </div>
  //   ))}
  // </div>

    <ThemeProvider theme={theme}>
        
      <CssBaseline/>
   <AppBarCus/>
      <Container sx={{ py: 6 }} >
          <Grid container spacing={4} >

            {this.state.tableProd.map(currentOrder => (
              <Grid item key={currentOrder} xs={3} >
                  <OrderCard orderinfo={currentOrder} />
              </Grid>
            ))}
          </Grid>
        </Container> *
    </ThemeProvider>
      



  );
    
  }
}

export default withRoot(CustomerOrders);
