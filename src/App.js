import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
        <Routes>
          <Route
            path=""
            element={<Home/ > }
          />
          <Route path="/about" element={<About/>} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
