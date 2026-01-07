import Nav from "./Component/Nav"
import Home from "./pages/Home"
import Footer from "./component/Footer"
import { Routes, Route} from "react-router-dom"
import Tajmahal from "./pages/Tajmahal"
import ScrollToTop from "./component/ScrollToTop"

const App = () => {
  return (
    <>
      <Nav/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tajmahal" element={<Tajmahal />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App