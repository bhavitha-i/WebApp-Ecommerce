/* eslint-disable no-unused-vars */
import * as React from 'react';
import  { useState } from "react"
import  { useEffect,Component } from "react"
import Cookies from 'js-cookie';
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import FloatingActionButtons from '../components/FloatingButton';
import CustomizedSnackbars from '../components/CustomizedSnackbars';
import AppBar from '../components/AppBar';
import withRoot from '../components/WithRoot';
import theme from '../components/theme'
import strings from '../assets/strings';
import styles from '../assets/styles';





 class VendorUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{},
          password: "",
          firstName:"",
          lastName:"",
          age:"",
          contact:"",
          loggedin:false,
          errAlert:"",
          message:"",
          loggedin:false,
          updateDate:{}
          
    
        };
      }
      update(e){
          this.setState({loggedin:false})
          var jusJson={}
        e.preventDefault();
          if(this.state.password == ""){
            
              jusJson = {
                  firstName:this.state.firstName,
                  lastName:this.state.lastName,
                  age:this.state.age,
                  contact:this.state.contact
              }
          }
          else{
            jusJson = {
                password:this.state.password,
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                age:this.state.age,
                contact:this.state.contact
            }

          }
          const Bearer = "Bearer "+ Cookies.get('token')
    let axiosConfig = {
     headers: {
         'Content-Type': 'application/json;charset=UTF-8',
         "Authorization" : Bearer
     }
   };

   axios.patch("http://localhost:5000/vendors/me",jusJson,axiosConfig,{
    withCredentials: true
}).then(response =>{


console.log("customer updated")

    this.setState({user:response.data})
    this.setState({loggedin:true})
    this.setState({errAlert:"success"})
    this.setState({message:"changes updated"})
}).catch(error => {
    this.setState({loggedin:true})
    this.setState({errAlert:"error"})
    this.setState({message:"Something went wrong"})
    console.log(error);
  });;




        
        console.log(jusJson)
      }
      
  
//   const [password,setPassword] = useState("");
//   const [firstName,setFirstname] = useState("");
//   const [lastName,setLastname] = useState("");
//   const [age,setAge] = useState("");
//   const [contact,setContact] = useState(0);
  
//   const [count, setCount] = useState(1)
//   const [loggedin,setLoggedin] = useState(false);
//   const [user,setUser] = useState("");
//   const [errAlert,setErrAlert] = useState("");
//   const [message,setMessage] = useState("");
//   const [me,setMe]=useState("")

//   useEffect( () => {
//     if(!Cookies.get('token')){
//         setLoggedin(true)
//         setErrAlert("error")
//         setMessage("please login to access this page")
//     }
//     pop()

    
  




// });
 componentDidMount (){
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
      axios.get("http://localhost:5000/vendors/me",axiosConfig,{
        withCredentials: true
    }).then(response =>{
        this.setState({age : response.data.age})
    this.setState({firstName : response.data.firstName})
    this.setState({lastName : response.data.lastName})
    this.setState({contact : response.data.contact})




        this.setState({user:response.data})
    }).catch(error => {
        console.log(error);
      });;
    // this.setState.user = hitback
   
    
    console.log(this.state.firstName)
    
 


}




//    function update(e){
//     e.preventDefault();
//     // const data = new FormData(e.currentTarget);
//     const updatedData={firstName,lastName,age,password,contact};
    
//     try{
//       setLoggedin(false)
//       const hitback = await axios.patch("http://localhost:5000/customers/me",updatedData,{
//                 withCredentials: true
//             });
//             console.log(hitback)
//             if(hitback){
              
//               setLoggedin(true)
//               setErrAlert("success")
//               setMessage("Welcome")
//               setUser(hitback.data.vendor.firstName)
//             }
            
//     }
//     catch(err){
//       setUser("")
//       setErrAlert("error")
//       setLoggedin(true)
//       setMessage("Invalid Data")
//       console.log("in error")
//       console.log(err)
//   }
   
//   }
render(){

  return (
      <>
    <ThemeProvider theme={theme}>
      { this.state.loggedin && <CustomizedSnackbars errAlert={this.state.errAlert} message={this.state.message} user={this.state.firstName} /> }
    <AppBar/>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar style={styles.Avatar} sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PersonAddAltIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {strings.SignUp.Labels.asVendorUpdate}
          </Typography>
          <Box component="form" onSubmit={this.update.bind(this)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={6}>
              <TextField
          hintText="Type here"
          value={this.state.firstName}
          onChange={(e) => this.setState({firstName:e.target.value})}
        />
              </Grid> */}
                <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  id="firstName"
                  label={strings.SignUp.Labels.firstName}
                  name="firstName"
                  autoComplete="family-name"
                  value={this.state.firstName}
                  onChange={(e) => this.setState({firstName:e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  id="lastName"
                  label={strings.SignUp.Labels.lastName}
                  name="lastName"
                  autoComplete="family-name"
                  value={this.state.lastName}
                  onChange={(e) => this.setState({lastName:e.target.value})}
                />
              </Grid>
        
          
              <Grid item xs={12}>
                <TextField
                  
                  fullWidth
                  name="password"
                  label={strings.SignUp.Labels.password}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={this.state.password}
                  onChange={(e) => this.setState({password:e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  id="age"
                  label={strings.SignUp.Labels.age}
                  name="age"
                  value={this.state.age}
                  onChange={(e) => this.setState({age:e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  fullWidth
                  id="contact"
                  label={strings.SignUp.Labels.contact}
                  name="contact"
                  value={this.state.contact}
                  onChange={(e) => this.setState({contact:e.target.value})}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {strings.Common.update}
            </Button>
            <Grid container justifyContent="flex-end">
              
            </Grid>
          </Box>
        </Box>
        
      </Container>
      <Link href="/customer/signup" variant="body2">
      <FloatingActionButtons text={strings.SignUp.Labels.asCustomeSignup}/>
      </Link>
    </ThemeProvider>
    </>
  );

}}
export default withRoot(VendorUpdate);