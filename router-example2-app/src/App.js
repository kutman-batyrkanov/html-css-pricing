import { Redirect, Route, Switch } from "react-router";
import { NavLink } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Catalog from "./components/Catalog/Catalog";
import Guitars from "./components/Catalog/Guitars/Guiatars";
import Piano from "./components/Catalog/Piano/Piano";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Posts from "./components/Posts/Posts";
import logo from "./images/logo.svg";

function App() {
  const activeLinkStyle = {
    fontWeight: "bold",
  }
  return (
    <div className="App">
      <ul>
        <NavLink activeStyle={activeLinkStyle} activeClassName="/activeLink" to="/"><img src={logo} width="55px" /></NavLink>
        <li><NavLink activeStyle={activeLinkStyle} activeClassName="/activeLink" to="/">Home</NavLink></li>
        <li><NavLink activeStyle={activeLinkStyle} activeClassName="/activeLink" to="/catalog">Catalog</NavLink></li>
        <li><NavLink activeStyle={activeLinkStyle} activeClassName="/activeLink" to="/contacts">Contacts</NavLink></li>
        <li><NavLink activeStyle={activeLinkStyle} activeClassName="/activeLink" to="/about">About</NavLink></li>
        <li><NavLink activeStyle={activeLinkStyle} activeClassName="/activeLink" to="/posts">Posts</NavLink></li>
      </ul>
      <div>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/catalog" component={Catalog}/>
        <Route exact path="/" component={Home}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/guitars" component={Guitars}/>
        <Route path="/piano" component={Piano}/>
        <Route path="/" component={NotFound}/>
        <Redirect to="/" />
      </Switch>
      </div>
    </div>
  );
}

export default App;
