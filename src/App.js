import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Login from "./components/Login";
import AddSolution from "./components/AddSolution";
import { Route, Routes } from "react-router-dom";
import Solutions from "./components/Solutions";
import Footer from "./components/Footer";
import SolutionDetails from "./components/SolutionDetails";

function App() {
  return (
    <div className="App">
          <Navigation/>

          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/add" element={<AddSolution/>}/>
            <Route path="/solutions" element={<Solutions/>}/>
            <Route path="/solutions/details/:id" element={<SolutionDetails/>}/>
          </Routes>

        <Footer/>
    </div>
  );
}

export default App;
