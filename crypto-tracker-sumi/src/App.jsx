import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Details from "./pages/Details"
import Navbar from "./components/Navbar"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/coin/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
