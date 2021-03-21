import "./App.css";
import Nav from './Navbar';
import {BrowserRouter as Router} from "react-router-dom";



function App() {
  return (
    <Router>
    <div>
      <Nav/>
    </div>
    </Router>
  );
}

export default App;
