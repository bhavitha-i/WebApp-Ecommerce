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
import AddressCard from './AddressCard'
import { Button } from "@mui/material";
import Popup from "./popup";
import AddAddressForm from "./AddAddressForm";



class ManageAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: [],
      callFlag:false,
      errAlert:'',
      openPopup:false,

    };
  }

  handleClick() {
    this.setState({openPopup:true});
  }

  setPopState(){
    this.setState({openPopup:false});
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
          this.setState.callFlag = true
          this.state.errAlert = "error"
          this.state.message ="Invalid Authentication"   
      }

      try{
      
      const hitback =  await axios.get("http://localhost:5000/addresses/mine",axiosConfig, {
                  withCredentials: true
        
                });
                
                console.log(hitback)
                this.setState({ addresses: hitback.data });
      }catch(e){
       
     
            this.setState.callFlag = true
            this.state.errAlert = "error"
            this.state.message ="Invalid Authentication"
            console.log("in error")
            console.log(e)
        }
    }




  render() {
  
      return(
         
        <ThemeProvider theme={theme}>
        <CssBaseline/>

        <Container sx={{ py: 6 }} style={styles.ManageAddressContainer}>
          <Grid container spacing={4} >
            {this.state.addresses.map(currentaddress => (
              <Grid item key={currentaddress} xs={3} >
                  <AddressCard address={currentaddress} />
              </Grid>
            ))}
          </Grid>
        </Container>
            {/* <Button onClick={() => this.handleClick()} variant="body2">
                <FloatingActionButtons addIcon={true} text="Add Address" />
            </Button> */}
            <Button href="/address/add" variant="body2">
                <FloatingActionButtons addIcon={true} text="Add Address" />
            </Button>

            <Popup
                title="Add Address"
                openPopup={this.state.openPopup}
                setOpenPopup={this.handleChange}
            >
                <AddAddressForm />
            </Popup>
        </ThemeProvider>
  );
    
  }
}

export default withRoot(ManageAddress)