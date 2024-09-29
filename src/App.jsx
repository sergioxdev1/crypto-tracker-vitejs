import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Details from "./pages/Details"
import Navbar from "./components/Navbar"
import TableMarketCoin from "./components/TableMarketCoin"
import { Footer } from "./components/Footer"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/coin/:id" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
// test this comment
export default App
