import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Header from './Pages/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
