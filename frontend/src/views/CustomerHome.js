import React, { Component } from "react";
import axios from "axios";
import RecipeReviewCard from "../components/RecipeReviewCard";
import Grid from '@mui/material/Grid';
import AppBarCus from "../components/AppBarCustomer";
import Container from '@mui/material/Container';
import theme from "../components/theme";
import { ThemeProvider } from '@material-ui/core/styles';
import withRoot from '../components/WithRoot';





class CustomerHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/product/all`)
      .then(response => {
        console.log("response" + response.data);
        this.setState({ products: response.data });
      })
      .catch(error => {
        console.log(error);
      });
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
      <AppBarCus/>
      <Container sx={{ py: 6 }} >
          <Grid container spacing={4} >
            {this.state.products.map(currentproduct => (
              <Grid item key={currentproduct} xs={3} >
                  <RecipeReviewCard product={currentproduct} />
              </Grid>
            ))}
          </Grid>
        </Container>
    </ThemeProvider>
      



  );
    
  }
}

export default withRoot(CustomerHome);
