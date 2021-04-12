import { Redirect, Route, Switch } from "react-router";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/contacts">Contacts</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/" component={Home} />
        <Route path="/" component={NotFound} />
        <Redirect to="/" />
      </Switch>

      {/* <About /> */}
    </div>
  );
}

export default App;
