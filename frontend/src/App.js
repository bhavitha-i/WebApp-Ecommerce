/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


// Importing components
import Home from "./views/Home";
import VendorLogin from "./views/VendorLogin";
import VendorSignup from "./views/VendorSignup";
import CreateProduct from './components/CreateProduct';
import VendorSales from "./components/VendorSales"
import VendorHome from './views/VendorHome';
import VendorProfile from './views/VendorProfile';


import CustomerUpdate from './components/CustomerUpdate';
import VendorUpdate from './views/VendorUpdate';
import ProductUpdate from './views/ProductUpdate';
import CustomerProfile from './views/CustomerProfile';
import CustomerCart from './views/CustomerCart';
import CustomerSignup from "./views/CustomerSignup";
import CustomerLogin from "./views/CustomerLogin";
import CustomerHome from './views/CustomerHome';


function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/vendor/login" component={VendorLogin} />
        <Route path="/vendor/signup"  component={VendorSignup} />
        <Route path="/vendor/home" component={VendorHome} />
        <Route path="/product/create"  component={CreateProduct} />
        <Route path="/vendor/sales"  component={VendorSales} />
        <Route path="/vendor/profile"  component={VendorProfile} />



        <Route path="/customer/login" component={CustomerLogin} />
        <Route path="/customer/signup"  component={CustomerSignup} />
        <Route path="/customer/home"  component={CustomerHome} />
        <Route path="/customer/update" component={CustomerUpdate} />
        <Route path="/vendor/update" component={VendorUpdate} />
        <Route path="/product/update/:id" component={ProductUpdate} />
        <Route path="/customer/profile"  component={CustomerProfile} />
        <Route path="/customer/cart"  component={CustomerCart} />





    </Router>
  );
}

export default App;
