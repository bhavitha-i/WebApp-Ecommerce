import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


// Importing components
import Home from "./views/Home";
import VendorLogin from "./components/VendorLogin";
import VendorSignup from "./components/VendorSignup";


function App() {
  return (
    <Router>
        <Route path="/" component={Home} />
        <Route path="/vendor/login" component={VendorLogin} />
        <Route path="/vendor/signup"  component={VendorSignup} />

    </Router>
  );
}

export default App;
