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
// import Parallax from "react-rellax"

function App() {
  return (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" render={()=>{
          return(
            <>
            <Home />
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
