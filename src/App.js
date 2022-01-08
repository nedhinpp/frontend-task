import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Route exact path="/" component={Login}></Route>
        <Route path="/home" component={Home}></Route>
      </Router>
    </div>
  );
}

export default App;
