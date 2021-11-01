import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


// Importing components
import Home from "./views/Home";
import VendorLogin from "./components/VendorLogin";
import VendorSignup from "./components/VendorSignup";
import CustomerHome from './components/CustomerHome';
import CreateProduct from './components/CreateProduct';
import VendorHome from './components/VendorHome';


function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/vendor/login" component={VendorLogin} />
        <Route path="/vendor/signup"  component={VendorSignup} />
        <Route path="/customer/home"  component={CustomerHome} />
        <Route path="/product/create"  component={CreateProduct} />
        <Route path="/vendor/home" component={VendorHome} />

    </Router>
  );
}

export default App;
