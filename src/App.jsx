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
function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About />} />
          <Route path='doctor/:id' element={<DoctorDetails/>} />
            <Route path='contact' element={<Contact />} />
          <Route path='sign-up' element={<Signup />} />
          <Route path='doctors' element={<DoctorsListing />} />
          <Route path='*' element={<Invalid/>} />
        </Routes> 
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
