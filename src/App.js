import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AcuteCare from "./components/AcuteCare";
import CovidCare from "./components/CovidCare";
import GeneralConsultation from "./components/GeneralConsultation";
import MedicationRefill from "./components/MedicationRefill";
import Registration from "./components/Registration";
import Home from "./components/Home";
// import About from "./components/About";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/covid-care" element={<CovidCare />} />
            <Route exact path="/acute-care" element={<AcuteCare />} />
            <Route exact path="/general-consultation" element={<GeneralConsultation />} />
            <Route exact path="/medication-refill" element={<MedicationRefill />} />
            <Route exact path="/registration" element={<Registration />} />
           
        </Routes>
      </div>
    </div>
  );
}

export default App;
