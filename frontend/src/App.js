/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Importing components
import Home from "./pages/onepirate/Home";
import VendorLogin from "./pages/onepirate/VendorSignIn";
import VendorSignup from "./pages/onepirate/VendorSignUp";
// import CustomerLogin from "./components/vendor-login.component";
// import CustomerSignup from "./components/vendor-signup.component";
// import VendorHome from "./components/vendor-signup.component";
// import CustomerHome from "./components/vendor-signup.component";



function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/vendor/login" component={VendorLogin} />
        <Route exact path="/vendor/signup"  component={VendorSignup} />
        {/* <Route path="/vendor/home" component={VendorHome} />
        <Route path="/customer/login" component={CustomerLogin} />
        <Route path="/customer/signup"  component={CustomerSignup} />
        <Route path="/customer/home" component={CustomerHome} /> */}
    </Router>
  );
}

export default App;
