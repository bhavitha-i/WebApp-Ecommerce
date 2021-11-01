/* eslint-disable no-unused-vars */
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
import CustomerProfileTabs from "../components/CustomerProfileTabs"


function CustomerProfile() {
    return(
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <AppBarCus/>
        <CustomerProfileTabs/>


        </ThemeProvider>

  
    );
}


export default withRoot(CustomerProfile);
