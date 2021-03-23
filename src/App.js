import "./App.css";
import Nav from './Navbar';
import {BrowserRouter as Router} from "react-router-dom";
import Create from './Components/Create';
import Tasks from './Components/Tasks';



function App() {
  return (
    <Router>
    <div>
      <Nav/>  
      <Create/>
      <Tasks />
    </div>
    </Router>
  );
}

export default App;
