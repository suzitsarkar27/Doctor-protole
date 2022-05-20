import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Sheard/Heaser/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Appointment from "./Pages/Home/Appointment/Appointment";
import Reviews from "./Pages/Home/Reviews/Reviews";
import Contact from "./Pages/Home/Contact/Contact";
import About from "./Pages/Home/About/About";
import Login from "./Pages/Home/Login/Login";
import NotFound from "./Pages/Sheard/NotFound/NotFound";
import SingUp from "./Pages/Home/SingUp/SingUp";
import RequreAuth from "./Pages/RequreAuth/RequreAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/appointment"
          element={
            <RequreAuth>
              <Appointment></Appointment>
            </RequreAuth>
          }
        ></Route>

        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/reagister" element={<SingUp></SingUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
