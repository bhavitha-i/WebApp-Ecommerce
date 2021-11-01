/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


// Importing components
import Home from "./views/Home";
import VendorLogin from "./views/VendorLogin";
import VendorSignup from "./views/VendorSignup";
import CustomerSignup from "./views/CustomerSignup";
import CustomerLogin from "./views/CustomerLogin";
import CustomerHome from './views/CustomerHome';
import CreateProduct from './components/CreateProduct';
import VendorHome from './views/VendorHome';


function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/vendor/login" component={VendorLogin} />
        <Route path="/vendor/signup"  component={VendorSignup} />
        <Route path="/customer/login" component={CustomerLogin} />
        <Route path="/customer/signup"  component={CustomerSignup} />

        <Route path="/customer/home"  component={CustomerHome} />
        <Route path="/product/create"  component={CreateProduct} />
        <Route path="/vendor/home" component={VendorHome} />

    </Router>
  );
}

export default App;
