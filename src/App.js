import './App.css';
import { Home } from "./Divisions/Home"
import {About} from "./Divisions/About"
import {MyWork} from "./Divisions/MyWork"
import {Social} from "./Divisions/Social"
import {NavBar} from "./Divisions/NavBar"
import {MoodBoard} from "./Divisions/MoodBoard"


function App() {
  return (
  <div className="App">
    <>
      <NavBar />
      <Home />
      <About />
      <MyWork />
      <MoodBoard />
      <Social />
    </>
  </div>
  );
}
export default App;
