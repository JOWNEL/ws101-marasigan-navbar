import Navbar from "./Navbar"
import Pricing from "./Pages/Contact"
import Home from "./Pages/Home"
import About from "./Pages/About"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
