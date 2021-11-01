import React, { Component } from "react";
import axios from "axios";
import RecipeReviewCard from "./RecipeReviewCard";


export default class CustomerHome extends Component {
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
//   productList() {
//     return this.state.products.map(currentproduct => {
//       return <RecipeReviewCard product={currentproduct} />;
//     });
//   }
  render() {
      return(
    <div style={{ display: "inline-block" ,position:"relative",top:"50px",left:"110px"}}>
    {this.state.products.map(currentproduct => (
      <div style={{ display: "inline-block", margin: "20px" }}>
        <RecipeReviewCard product={currentproduct} />
      </div>
    ))}
  </div>
  )
    
  }
}