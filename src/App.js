import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from "./Divisions/Home"
import {About} from "./Divisions/About"
import {MyWork} from "./Divisions/MyWork"
import {Social} from "./Divisions/Social"
import {NavBar} from "./Divisions/NavBar"

function App() {
  return (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" render={()=>{
          return(
            <>
            <Home />
            <NavBar />
            <About />
            <MyWork />
            <Social />
            </>
          )
        }}>
        </Route>
      </Switch>
    </Router>
  </div>
  );
}
export default App;
