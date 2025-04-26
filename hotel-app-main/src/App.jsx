import {Routes,Route} from "react-router-dom"
import About from "./Pages/About" 
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Habitaciones from "./components/Habitaciones"
import Menu from "./components/Menu"
import Ours from "./components/Ours"
function App() {
 

  return (
    <>
<Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/About" element={<AboutPage/>}/>
  <Route path="/Roms" element={<RomsPage/>}/>
  <Route path="/Contact" element={<ContactPage/>}/>
  <Route path="*" element={<NofoundPage/>}/>
</Routes>
    
    </>
  )
}

export default App
