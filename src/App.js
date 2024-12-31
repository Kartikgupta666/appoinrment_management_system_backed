import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import SignupDoc from "./components/SignupDoc";
import Home from './components/Home'
import Appointments from "./components/appointments";
import Slots from "./components/Slots";
function App() {
  return (
    <Routes>
      {/* adding routes to link all components toi each other */}
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/Signup/patient" element={<Signup />} />
      <Route exact path="/Signup/Doctor" element={<SignupDoc />} />
      <Route exact path="/Home" element={<Home />} />
      <Route exact path="/appointments" element={<Appointments />} />
      <Route exact path="/slots" element={<Slots />} />
    </Routes>
  );
}

export default App;
