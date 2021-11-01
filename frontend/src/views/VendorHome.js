/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import axios from "axios";
import RecipeReviewCard from "../components/RecipeReviewCard";
import Cookies from 'js-cookie';
import FloatingActionButtons from '../components/FloatingButton';
import CustomizedSnackbars from '../components/CustomizedSnackbars';
import BasicTable from "../components/ProductListTable";
import AppBarVendor from "../components/AppBarVendor"
import Container from '@mui/material/Container';
import theme from "../components/theme";
import { ThemeProvider } from '@material-ui/core/styles';
import withRoot from '../components/WithRoot';
import { CssBaseline } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Box } from "@mui/system";
import styles from "../assets/styles";
import { Link } from "@mui/material";



class VendorHome extends Component {
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


  render() {
  
      return(
         
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AppBarVendor/>
            <Box style={styles.ProductListBox}>
              <BasicTable products = {this.state.products} />
            </Box>

            <Link href="/product/create" variant="body2">
                <FloatingActionButtons addIcon={true} text="Add Product" />
            </Link>
        </ThemeProvider>
  );
    
  }
}

export default withRoot(VendorHome)