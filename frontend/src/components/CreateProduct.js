import * as React from 'react';
import { useState, useEffect } from "react"
import Cookies from 'js-cookie';
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import FloatingActionButtons from './FloatingButton';
import FileBase from 'react-file-base64';
import CustomizedSnackbars from './CustomizedSnackbars';
import theme from './theme';



export default function CreateProduct() {
  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [price,setPrice]=useState("");
  const [quantity,setQuantity] = useState("");
  const [size,setSize] = useState("");
  const [color,setColor] = useState("");
  const [photo,setPhoto] = useState("");
  const [loggedin,setLoggedin] = useState(false);
  const [user,setUser] = useState("");
  const [errAlert,setErrAlert] = useState("");
  const [message,setMessage] = useState("");

  useEffect(() => {
      if(!Cookies.get('token')){
          setLoggedin(true)
          setErrAlert("error")
          setMessage("Only vendors can add products")
      }
  });

  async function addProd(e){
    e.preventDefault();

   const prodData ={
       name,description,price,quantity,size,color,photo
   }
   const Bearer = "Bearer "+ Cookies.get('token')
   let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Authorization" : Bearer
    }
  };
 
   console.log(prodData)

   try{
    const hitback = await axios.post("http://localhost:5000/product/add",prodData,axiosConfig, {
        withCredentials: true
    });
    setLoggedin(true)
    setErrAlert("success")
    setMessage("Product successfully added")

  

   }catch(e){
       
     
       setErrAlert("error")
       setLoggedin(true)
       setMessage("Invalid Credentials")
       console.log("in error")
       console.log(e)
   }
    
  }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
             { loggedin && <CustomizedSnackbars errAlert={errAlert}message={message} /> }
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Add Product
                    </Typography>
                    <Box component="form"  onSubmit={addProd} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete="given-name"
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Product Name"
                                    autoFocus
                                    onChange={(e) => setName(e.target.value)} value={name}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="description"
                                    label="Description"
                                    name="description"
                                    autoComplete="family-name"
                                    onChange={(e) => setDescription(e.target.value)} value={description}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="price"
                                    label="Price"
                                    type="number"
                                    name="price"
                                    autoComplete="price"
                                    onChange={(e) => setPrice(e.target.value)} value={price}
                                    
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="quantity"
                                    label="Quantity"
                                    type="number"
                                    id="quantity"
                                    autoComplete="quantity"
                                    onChange={(e) => setQuantity(e.target.value)} value={quantity}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    
                                    fullWidth
                                    id="size"
                                    label="Size"
                                    name="size"
                                    autoComplete="family-name"
                                    onChange={(e) => setSize(e.target.value)} value={size}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                 
                                    fullWidth
                                    id="color"
                                    label="Color"
                                    name="color"
                                    autoComplete="family-name"
                                    onChange={(e) => setColor(e.target.value)} value={color}
                                />
                            </Grid>
                            <Grid item xs={6} sm={12} >
                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setPhoto(base64)} />
                            </Grid>

                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Add Products
                        </Button>
 
                    </Box>
                </Box>

            </Container>

        </ThemeProvider>
    );
}