import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./components/home/Home"
import About from "./components/AboutUs/About"
import Footer from "./components/Footer/Footer"
import DoctorDetails from "./components/DoctorDetails/DoctorDetails"
import DoctorsListing from "./components/DoctorsListing/DoctorsListing"
import Contact from "./components/Contact/Contact"
import Invalid from "./components/InvalidURL/Invalid"
import Signup from "./components/Signup/Signup"
import Login from "./components/Signup/Login"
import MyProfile from "./components/MyProfile/MyProfile"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Myappoitment from "./components/MyAppointments/Myappoitment"
function App() {

  return (
    <>
      <BrowserRouter>
      <ToastContainer />
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About />} />
          <Route path='doctor/:docName' element={<DoctorDetails/>} />
          <Route path='contact' element={<Contact />} />
          <Route path='my-profile' element={<MyProfile />} />
          <Route path='signup' element={<Signup />} />
          <Route path='my-appointments' element={<Myappoitment />} />
          <Route path='doctors/:speciality' element={<DoctorsListing />} />
        <Route path="login" element={<Login />} />
          <Route path='*' element={<Invalid/>} />
        </Routes> 
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
