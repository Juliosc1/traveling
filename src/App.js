import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Destinations from "./pages/Destinations";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import TravelDestination from "./pages/TravelDestination";


function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/destinations" exact element={<Destinations />} />
          <Route path="/travel/:name" exact element={<TravelDestination />} />
          <Route path="/tours" exact element={<Tours />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
